use crate::network::handshake::HandshakeSecret;
use crate::network::raft_server::{RaftStreamRequest, RaftStreamResponse};
use crate::store::state_machine::sqlite::TypeConfigSqlite;
use crate::NodeId;
use crate::{Error, Node};
use bytes::Bytes;
use fastwebsockets::{Frame, OpCode, WebSocket};
use http_body_util::Empty;
use hyper::header::{CONNECTION, UPGRADE};
use hyper::upgrade::Upgraded;
use hyper::Request;
use hyper_util::rt::TokioIo;
use openraft::error::InstallSnapshotError;
use openraft::error::RPCError;
use openraft::error::RaftError;
use openraft::error::{NetworkError, RemoteError};
use openraft::network::RPCOption;
use openraft::network::RaftNetwork;
use openraft::network::RaftNetworkFactory;
use openraft::raft::AppendEntriesRequest;
use openraft::raft::AppendEntriesResponse;
use openraft::raft::InstallSnapshotRequest;
use openraft::raft::InstallSnapshotResponse;
use openraft::raft::VoteRequest;
use openraft::raft::VoteResponse;
use std::future::Future;
use std::time::Duration;
use tokio::net::TcpStream;
use tokio::sync::oneshot;
use tokio::task::JoinHandle;
use tokio::{task, time};
use tracing::{error, info, warn};

struct SpawnExecutor;

impl<Fut> hyper::rt::Executor<Fut> for SpawnExecutor
where
    Fut: Future + Send + 'static,
    Fut::Output: Send + 'static,
{
    fn execute(&self, fut: Fut) {
        tokio::task::spawn(fut);
    }
}

pub struct NetworkStreaming {
    pub node_id: NodeId,
    pub tls: bool,
    pub secret_raft: Vec<u8>,
}

impl RaftNetworkFactory<TypeConfigSqlite> for NetworkStreaming {
    type Network = NetworkConnectionStreaming;

    #[tracing::instrument(level = "debug", skip_all)]
    async fn new_client(&mut self, _target: NodeId, node: &Node) -> Self::Network {
        println!("Building new Raft client with target {}", node);

        let (sender, rx) = flume::unbounded();

        let handle = task::spawn(Self::ws_handler(
            self.node_id,
            node.clone(),
            self.tls,
            self.secret_raft.clone(),
            rx,
        ));

        NetworkConnectionStreaming {
            node: node.clone(),
            sender,
            handle,
        }
    }
}

#[allow(clippy::type_complexity)]
impl NetworkStreaming {
    async fn ws_handler<Err>(
        this_node: NodeId,
        node: Node,
        tls: bool,
        secret: Vec<u8>,
        rx: flume::Receiver<(
            RaftStreamRequest,
            oneshot::Sender<Result<RaftStreamResponse, RPCError<NodeId, Node, Err>>>,
        )>,
    ) where
        Err: std::error::Error + 'static + Clone,
    {
        let mut ws = Self::try_connect(this_node, &node.addr_raft, tls, &secret).await;
        let mut req: Option<RaftStreamRequest> = None;
        let mut ack: Option<
            oneshot::Sender<Result<RaftStreamResponse, RPCError<NodeId, Node, Err>>>,
        > = None;

        // TODO maybe add retry counter or internal timeout
        loop {
            while ws.is_none() {
                info!("WsHandler trying to connect to {}", node.addr_raft);
                time::sleep(Duration::from_secs(1)).await;
                ws = Self::try_connect(this_node, &node.addr_raft, tls, &secret).await;

                // openraft will does cancel these requests internally when
                // they take longer than the configured heartbeat
                let is_closed = if let Some(ack) = &ack {
                    ack.is_closed()
                } else {
                    false
                };
                if is_closed {
                    req = None;
                    ack = None;
                    break;
                }
            }

            if let Some(r) = &req {
                let socket = ws.as_mut().unwrap();
                let ack_tx = ack.unwrap();

                match socket.write_frame(r.as_payload()).await {
                    Ok(_) => match socket.read_frame().await {
                        Ok(frame) => match frame.opcode {
                            OpCode::Binary => {
                                let bytes = frame.payload.to_vec();
                                let resp = RaftStreamResponse::from(bytes);
                                if let Err(err) = ack_tx.send(Ok(resp)) {
                                    eprintln!(
                                        "Error forwarding response from Node {}: {:?}",
                                        node.id, err
                                    );
                                }
                            }
                            _ => unreachable!(),
                        },
                        Err(err) => {
                            error!("Error receiving RPC response: {}", err);
                            ack_tx
                                .send(Err(RPCError::Network(NetworkError::new(&err))))
                                .unwrap();
                            ws = None;
                        }
                    },
                    Err(err) => {
                        error!("Error sending RPC request: {}", err);
                        ack_tx
                            .send(Err(RPCError::Network(NetworkError::new(&err))))
                            .unwrap();
                        ws = None;
                    }
                }

                ack = None;
            }

            loop {
                match rx.recv_async().await.ok() {
                    None => {
                        warn!("Raft Client shut down, tx closed, exiting WsHandler");
                        break;
                    }
                    Some((r, a)) => {
                        // we need the loop and closed check in case of long-running
                        // re-connect loops to other nodes
                        if !a.is_closed() {
                            req = Some(r);
                            ack = Some(a);
                            break;
                        }
                    }
                }
            }
        }
    }

    async fn try_connect(
        node_id: NodeId,
        addr: &str,
        tls: bool,
        secret: &[u8],
    ) -> Option<WebSocket<TokioIo<Upgraded>>> {
        let stream = TcpStream::connect(addr).await.ok()?;

        let uri = if tls {
            format!("https://{}/stream", addr)
        } else {
            format!("http://{}/stream", addr)
        };

        let req = Request::builder()
            .method("GET")
            .uri(uri)
            .header(UPGRADE, "websocket")
            .header(CONNECTION, "upgrade")
            .header(
                "Sec-WebSocket-Key",
                fastwebsockets::handshake::generate_key(),
            )
            .header("Sec-WebSocket-Version", "13")
            .body(Empty::<Bytes>::new())
            .ok()?;

        let (mut ws, _) = fastwebsockets::handshake::client(&SpawnExecutor, req, stream)
            .await
            .ok()?;

        if let Err(err) = HandshakeSecret::client(&mut ws, secret, node_id).await {
            let _ = ws
                .write_frame(Frame::close(1000, b"Invalid Handshake"))
                .await;
            // TODO what should be do in this case? This handler should never exit.
            // panic is the best option in case of misconfiguration?
            panic!("Error during WebSocket handshake: {}", err);
        }

        Some(ws)
    }
}

#[allow(clippy::type_complexity)]
pub struct NetworkConnectionStreaming {
    node: Node,
    sender: flume::Sender<(
        RaftStreamRequest,
        oneshot::Sender<Result<RaftStreamResponse, RPCError<NodeId, Node>>>,
    )>,
    handle: JoinHandle<()>,
}

impl Drop for NetworkConnectionStreaming {
    fn drop(&mut self) {
        eprintln!("Connection to {} has been dropped", self.node);
        self.handle.abort();
    }
}

impl NetworkConnectionStreaming {
    #[inline(always)]
    async fn send<Err>(
        &mut self,
        req: RaftStreamRequest,
    ) -> Result<RaftStreamResponse, RPCError<NodeId, Node, Err>>
    where
        Err: std::error::Error + 'static + Clone,
    {
        tracing::debug!(
            req = debug(&req),
            "sending rpc request to {}",
            self.node.addr_raft
        );

        let (tx, rx) = oneshot::channel();
        self.sender
            .send_async((req, tx))
            .await
            .map_err(|err| RPCError::Network(NetworkError::new(&err)))?;
        rx.await
            .unwrap()
            .map_err(|err| RPCError::Network(NetworkError::new(&err)))
    }
}

#[allow(clippy::blocks_in_conditions)]
impl RaftNetwork<TypeConfigSqlite> for NetworkConnectionStreaming {
    #[tracing::instrument(level = "debug", skip_all, err(Debug))]
    async fn append_entries(
        &mut self,
        req: AppendEntriesRequest<TypeConfigSqlite>,
        _option: RPCOption,
    ) -> Result<AppendEntriesResponse<NodeId>, RPCError<NodeId, Node, RaftError<NodeId>>> {
        let resp = self.send(RaftStreamRequest::Append(req)).await?;
        match resp {
            RaftStreamResponse::Append(res) => Ok(res),
            RaftStreamResponse::Error(Error::RaftError(err)) => {
                Err(RPCError::RemoteError(RemoteError::new(self.node.id, err)))
            }
            _ => unreachable!(),
        }
    }

    #[tracing::instrument(level = "debug", skip_all, err(Debug))]
    async fn install_snapshot(
        &mut self,
        req: InstallSnapshotRequest<TypeConfigSqlite>,
        _option: RPCOption,
    ) -> Result<
        InstallSnapshotResponse<NodeId>,
        RPCError<NodeId, Node, RaftError<NodeId, InstallSnapshotError>>,
    > {
        let resp = self.send(RaftStreamRequest::Snapshot(req)).await?;
        match resp {
            RaftStreamResponse::Snapshot(res) => Ok(res),
            RaftStreamResponse::Error(Error::SnapshotError(err)) => {
                Err(RPCError::RemoteError(RemoteError::new(self.node.id, err)))
            }
            _ => unreachable!(),
        }
    }

    #[tracing::instrument(level = "debug", skip_all, err(Debug))]
    async fn vote(
        &mut self,
        req: VoteRequest<NodeId>,
        _option: RPCOption,
    ) -> Result<VoteResponse<NodeId>, RPCError<NodeId, Node, RaftError<NodeId>>> {
        let resp = self.send(RaftStreamRequest::Vote(req)).await?;
        match resp {
            RaftStreamResponse::Vote(res) => Ok(res),
            RaftStreamResponse::Error(Error::RaftError(err)) => {
                Err(RPCError::RemoteError(RemoteError::new(self.node.id, err)))
            }
            _ => unreachable!(),
        }
    }
}