use std::env;

pub mod handlers;
pub mod middleware;
mod password;
pub mod session;
pub mod static_files;

#[derive(Debug)]
pub struct DashboardState {
    pub password_dashboard: String,
}

impl DashboardState {
    pub fn new(password_dashboard: String) -> Self {
        Self { password_dashboard }
    }

    pub fn from_env() -> Self {
        Self {
            password_dashboard: env::var("HQL_PASSWORD_DASHBOARD")
                .expect("HQL_PASSWORD_DASHBOARD does not exist"),
        }
    }
}