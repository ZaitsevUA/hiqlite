import{a as l,t as y,v as ae,r as ie,k as re,b as A,w as le,f as R,e as ne}from"../chunks/disclose-version.BkQuOugj.js";import{p as Q,u as de,k as F,g as i,z as M,j as O,ab as z,q as b,m as g,o as m,t as C,aO as je,aP as D,i as ve,aQ as xe,aR as Se,aS as Ce}from"../chunks/runtime.Zcp02Le-.js";import{a as V,i as B,p as j}from"../chunks/props.CzCUhsmr.js";import{B as ce,t as Z,c as Le,s as se,a as $,h as Me,I as qe,b as Ae,r as Pe,d as ue,e as Ve,A as pe,f as oe,g as me,i as He,j as he,k as we,R as Ie,l as Te,m as ze,Q as Be,D as De}from"../chunks/Resizable.BoQ8IQFb.js";import{o as fe}from"../chunks/index-client.BrnsO-iP.js";import"../chunks/legacy.AuFFchOy.js";const Oe=!0,Re=Object.freeze(Object.defineProperty({__proto__:null,prerender:Oe},Symbol.toStringTag,{value:"Module"}));var Ee=y(`<div class="icon moon svelte-b827j5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75
                        0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75
                        21a9.753 9.753 0 009.002-5.998z"></path></svg></div>`),Qe=y(`<div class="icon sun svelte-b827j5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12
                        18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75
                        3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path></svg></div>`),Fe=y("<!> <!>",1);function Ne(a,e){Q(e,!0);const t="darkMode",[s,r]=Le({});let o=z(void 0);de(()=>{var n,k,p;const d=((k=(n=window==null?void 0:window.matchMedia)==null?void 0:n.call(window,"(prefers-color-scheme:dark)"))==null?void 0:k.matches)??!1;if(i(o)===void 0){const h=(p=window==null?void 0:window.localStorage)==null?void 0:p.getItem(t);if(h){let _=h==="true";i(o)===d&&localStorage.removeItem(t),M(o,_)}else M(o,V(d))}else i(o)?(document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme")):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"));d===i(o)?localStorage.removeItem(t):localStorage.setItem(t,i(o).toString())});function L(){M(o,!i(o))}ce(a,{ariaLabel:"Change color theme",invisible:!0,onclick:L,children:(d,n)=>{var k=Fe(),p=O(k);B(p,()=>i(o)===!0,_=>{var x=Ee();Z(1,x,()=>r,()=>({key:"dark"})),Z(2,x,()=>s,()=>({key:"light"})),l(_,x)});var h=b(p,2);B(h,()=>i(o)===!1,_=>{var x=Qe();Z(1,x,()=>r,()=>({key:"light"})),Z(2,x,()=>s,()=>({key:"dark"})),l(_,x)}),l(d,k)},$$slots:{default:!0}}),F()}var Ue=y('<div class="theme-switch svelte-jrz9as"><!></div>');function Ge(a){var e=Ue(),t=g(e);Ne(t,{}),m(e),l(a,e)}var Je=y("<form><!></form>");function We(a,e){Q(e,!0);let t=j(e,"method",3,"POST"),s=j(e,"isError",15);async function r(d){d.preventDefault();const n=d.currentTarget;if(n.reportValidity())s(!1);else{s(!0);return}const k=new FormData(n);let p=new URLSearchParams;if(k.forEach((_,x)=>{p.append(x,_.toString())}),e.onSubmit){e.onSubmit(n,p);return}const h=await fetch(n.action,{method:n.method,headers:{"Content-type":"application/x-www-form-urlencoded"},body:p});Me(h),e.onResponse&&(e.onResponse(h),h.ok&&n.reset())}var o=Je(),L=g(o);se(L,()=>e.children),m(o),C(()=>{$(o,"action",e.action),$(o,"method",t())}),ae("submit",o,r),l(a,o),F()}var Ye=ie(`<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0
            002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375
            3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375
            7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8
            0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125
            1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"></path></svg>`);function Ke(a,e){let t=j(e,"opacity",8,.9),s=j(e,"width",8,"1.5rem");var r=Ye();$(r,"stroke-width",2),C(()=>{$(r,"width",s()),$(r,"opacity",t())}),l(a,r)}var Xe=ie(`<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138
            2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0
            01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0
            0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path></svg>`);function Ze(a,e){let t=j(e,"color",8,"var(--col-err)"),s=j(e,"opacity",8,.9),r=j(e,"width",8,"1.5rem");var o=Xe();$(o,"stroke-width",2),C(()=>{$(o,"width",r()),$(o,"color",t()),$(o,"opacity",s())}),l(a,o)}function be(a,e){navigator.clipboard?navigator.clipboard.writeText(e()):console.error("Copy to clipboard is only available in secure contexts")}function ge(a,e){e()==="password"?e("text"):e("password")}function et(a){}function tt(a){a.code}var at=y('<div role="button" tabindex="0" class="btn clip svelte-11t06s4"><!></div>'),it=y('<div class="nolabel svelte-11t06s4"></div>'),rt=y('<div class="error svelte-11t06s4"><!> </div>'),st=y('<div><div class="input-row svelte-11t06s4"><input> <div class="rel svelte-11t06s4"><!> <div role="button" tabindex="0" class="btn show svelte-11t06s4"><!></div></div></div></div> <div class="label svelte-11t06s4"><label class="font-label noselect svelte-11t06s4"> </label> <!></div>',1);function ot(a,e){let t=j(e,"type",7,"password"),s=j(e,"name",3,"password"),r=j(e,"value",7,""),o=j(e,"label",3,"Password"),L=j(e,"autocomplete",3,"current-password"),d=j(e,"placeholder",3,"Password"),n=j(e,"title",3,"Password"),k=j(e,"disabled",3,!1),p=j(e,"min",3,"14"),h=j(e,"max",3,"128"),_=j(e,"required",3,!0),x=j(e,"width",3,"inherit"),c=j(e,"showCopy",3,!1),P=z(!1);function v(q){var J;const H=(J=q==null?void 0:q.currentTarget)==null?void 0:J.reportValidity();M(P,!H)}function w(q){q.preventDefault(),M(P,!0)}var I=st(),u=O(I),S=g(u),f=g(S);Pe(f),f.__input=[et],f.__keydown=[tt];var U=b(f,2),W=g(U);B(W,c,q=>{var H=at();H.__click=[be,r],H.__keydown=[be,r];var J=g(H);Ke(J,{}),m(H),l(q,H)});var T=b(W,2);T.__click=[ge,t],T.__keydown=[ge,t];var E=g(T);B(E,()=>t()==="password",q=>{Ze(q,{width:22})},q=>{qe(q,{width:22})}),m(T),m(U),m(S),m(u);var Y=b(u,2),G=g(Y),te=g(G,!0);m(G);var K=b(G,2);B(K,()=>i(P),q=>{var H=rt(),J=g(H);B(J,()=>!o(),_e=>{var $e=it();l(_e,$e)});var ye=b(J);m(H),C(()=>A(ye,` ${n()??""}`)),Z(3,H,()=>Ve),l(q,H)}),m(Y),C(()=>{ue(u,"width",x()),$(f,"type",t()),$(f,"id",e.id),$(f,"name",s()),$(f,"title",n()),$(f,"aria-label",n()),$(f,"autocomplete",L()),$(f,"placeholder",d()),f.disabled=k(),f.required=_()||void 0,$(f,"maxlength",e.maxLength||void 0),$(f,"min",p()||void 0),$(f,"max",h()||void 0),$(f,"pattern",e.pattern||void 0),ue(f,"padding-right",c()?"55px":"30px"),$(G,"for",e.id),$(G,"data-required",_()),A(te,o())}),ae("invalid",f,w),ae("blur",f,v),Ae(f,r),l(a,I)}re(["input","keydown","click"]);var lt=y('<meta property="description" content="Hiqlite Login">'),nt=y('<div class="err"> </div>'),dt=y("<!> <!> <!>",1),vt=y('<div class="container svelte-dc3gug"><div class="login svelte-dc3gug"><!></div></div>');function ct(a,e){Q(e,!0);const t=`${pe}/session`;let s=z(""),r=z(!1);async function o(k,p){M(s,""),M(r,!0),p.append("pow","NoPowUntilSvelte5ErrorFixed");const h=await fetch(t,{method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded"},body:p});let _=await h.json();h.status===200?oe.set(_):M(s,V(Object.values(_)[0])),M(r,!1)}var L=vt();le(k=>{var p=lt();je.title="Login",l(k,p)});var d=g(L),n=g(d);We(n,{action:t,onSubmit:o,children:(k,p)=>{var h=dt(),_=O(h);ot(_,{id:"password",name:"password",autocomplete:"current-password",placeholder:"Password",title:"Valid Dashboard Password",required:!0});var x=b(_,2);ce(x,{type:"submit",level:1,get isLoading(){return i(r)},children:(P,v)=>{D();var w=R("Login");l(P,w)},$$slots:{default:!0}});var c=b(x,2);B(c,()=>i(s),P=>{var v=nt(),w=g(v,!0);m(v),C(()=>A(w,i(s))),l(P,v)}),l(k,h)},$$slots:{default:!0}}),m(d),m(L),l(a,L),F()}var X=(a=>(a.Table="table",a.Index="index",a.Trigger="view",a.View="trigger",a))(X||{}),ut=y(" <br>",1),pt=y('<section class="svelte-y9kii"><h5 class="header"> <br> </h5> <div class="sql font-mono svelte-y9kii"></div></section>');function mt(a,e){Q(e,!0);let t=ve(()=>{var n;return(n=e.table.sql)==null?void 0:n.split(`
`)});var s=pt(),r=g(s),o=g(r,!0),L=b(o,2);m(r);var d=b(r,2);me(d,21,()=>i(t),He,(n,k)=>{D();var p=ut(),h=O(p,!0);D(),C(()=>A(h,i(k))),l(n,p)}),m(d),m(s),C(()=>{A(o,e.table.name),A(L,` ${e.table.typ??""}: ${e.table.tbl_name??""}`)}),l(a,s),F()}function ke(a,e,t){e(t.view)}var ht=y('<div role="button" tabindex="0"> </div>');function ee(a,e){let t=j(e,"viewSelected",15);var s=ht();s.__click=[ke,t,e],s.__keydown=[ke,t,e];var r=g(s,!0);m(s),C(()=>{he(s,`${(t()===e.view?"selected":"")??""} svelte-13ofdkm`),A(r,e.view)}),l(a,s)}re(["click","keydown"]);var wt=ie('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>');function ft(a,e){let t=j(e,"opacity",8,.9),s=j(e,"width",8,"1.5rem");var r=wt();$(r,"stroke-width",2),C(()=>{$(r,"width",s()),$(r,"opacity",t())}),l(a,r)}var bt=y('<div class="err"> </div>'),gt=(a,e,t)=>e(i(t).name),kt=(a,e,t)=>e(i(t).name),yt=(a,e,t)=>e(i(t).name),_t=(a,e,t)=>e(i(t).name),$t=y('<div role="button" tabindex="0" class="btn svelte-trjj59"><!></div>'),jt=y('<div role="button" tabindex="0"><div> </div> <!></div>'),xt=y('<!> <div class="selector svelte-trjj59"><!> <!> <!> <!></div> <div class="tables svelte-trjj59"><!> <!></div>',1);function St(a,e){Q(e,!0);let t=z(V([])),s=z(void 0),r=z(V(X.Table)),o=z(void 0);de(()=>{L(i(r))});async function L(u){let S=await we(`/tables/${u}`);S.status===200?M(t,V(await S.json())):M(o,V(await S.json()))}function d(u){M(s,V(i(t).filter(S=>S.name===u)[0]))}function n(u){let S={id:`${u}_${Te(4)}`,query:`${ze}
PRAGMA table_info(${u})`};Be.push(S),d(u)}var k=xt(),p=O(k);B(p,()=>i(o),u=>{var S=bt(),f=g(S,!0);m(S),C(()=>A(f,i(o))),l(u,S)});var h=b(p,2),_=g(h);ee(_,{get view(){return X.Table},get viewSelected(){return i(r)},set viewSelected(u){M(r,V(u))}});var x=b(_,2);ee(x,{get view(){return X.Index},get viewSelected(){return i(r)},set viewSelected(u){M(r,V(u))}});var c=b(x,2);ee(c,{get view(){return X.Trigger},get viewSelected(){return i(r)},set viewSelected(u){M(r,V(u))}});var P=b(c,2);ee(P,{get view(){return X.View},get viewSelected(){return i(r)},set viewSelected(u){M(r,V(u))}}),m(h);var v=b(h,2),w=g(v);Ie(w,{resizeBottom:!0,initialHeightPx:window?window.innerHeight-400:600,minHeightPx:120,children:(u,S)=>{var f=ne(),U=O(f);me(U,17,()=>i(t),W=>W.name,(W,T)=>{var E=jt();E.__click=[gt,d,T],E.__keydown=[kt,d,T];var Y=g(E),G=g(Y,!0);m(Y);var te=b(Y,2);B(te,()=>i(T).typ==="table",K=>{var q=$t();q.__click=[yt,n,T],q.__keydown=[_t,n,T];var H=g(q);ft(H,{}),m(q),l(K,q)}),m(E),C(()=>{var K;he(E,`${(((K=i(s))==null?void 0:K.name)===i(T).name?"entry selected":"entry")??""} svelte-trjj59`),A(G,i(T).name)}),l(W,E)}),l(u,f)},$$slots:{default:!0}});var I=b(w,2);B(I,()=>i(s),u=>{mt(u,{get table(){return i(s)}})}),m(v),l(a,k),F()}re(["click","keydown"]);var Ct=y('<div class="metric svelte-1ktnipf"><div class="label font-label svelte-1ktnipf"> </div> <div class="font-mono"><!></div></div>');function N(a,e){Q(e,!0);var t=Ct(),s=g(t),r=g(s,!0);m(s);var o=b(s,2),L=g(o);se(L,()=>e.children),m(o),m(t),C(()=>A(r,e.label)),l(a,t),F()}var Lt=y('<b>Metrics</b> <div class="space svelte-12lemcq"></div> <!> <!> <!> <!> <!> <!> <!> <!>',1);function Mt(a,e){Q(e,!0);let t=z(void 0),s=ve(()=>{var c;return(c=i(t))==null?void 0:c.membership_config.membership.configs.join(", ")});setInterval(()=>{r()},1e4),fe(()=>{r()});async function r(){let c=await we("/metrics");c.status===200?M(t,V(await c.json())):console.error(await c.json())}var o=Lt(),L=b(O(o),4);N(L,{label:"This Node",children:(c,P)=>{D();var v=R();C(()=>{var w,I;return A(v,`${((w=i(t))==null?void 0:w.id)??""}
    ${((I=i(t))==null?void 0:I.state)??""}`)}),l(c,v)},$$slots:{default:!0}});var d=b(L,2);N(d,{label:"Current Leader",children:(c,P)=>{D();var v=R();C(()=>{var w;return A(v,(w=i(t))==null?void 0:w.current_leader)}),l(c,v)},$$slots:{default:!0}});var n=b(d,2);N(n,{label:"Vote Leader",children:(c,P)=>{D();var v=R();C(()=>{var w;return A(v,(w=i(t))==null?void 0:w.vote.leader_id.node_id)}),l(c,v)},$$slots:{default:!0}});var k=b(n,2);N(k,{label:"Last Log Index",children:(c,P)=>{D();var v=R();C(()=>{var w;return A(v,(w=i(t))==null?void 0:w.last_log_index)}),l(c,v)},$$slots:{default:!0}});var p=b(k,2);N(p,{label:"Last Applied Log",children:(c,P)=>{D();var v=R();C(()=>{var w,I,u,S,f,U;return A(v,`${((I=(w=i(t))==null?void 0:w.last_applied)==null?void 0:I.leader_id.node_id)??""}
    -
    ${((S=(u=i(t))==null?void 0:u.last_applied)==null?void 0:S.leader_id.term)??""}
    -
    ${((U=(f=i(t))==null?void 0:f.last_applied)==null?void 0:U.index)??""}`)}),l(c,v)},$$slots:{default:!0}});var h=b(p,2);N(h,{label:"Last Snapshot",children:(c,P)=>{D();var v=R();C(()=>{var w,I,u,S;return A(v,`${((I=(w=i(t))==null?void 0:w.snapshot)==null?void 0:I.leader_id)??""}
    -
    ${((S=(u=i(t))==null?void 0:u.snapshot)==null?void 0:S.index)??""}`)}),l(c,v)},$$slots:{default:!0}});var _=b(h,2);N(_,{label:"Members",children:(c,P)=>{D();var v=R();C(()=>A(v,i(s))),l(c,v)},$$slots:{default:!0}});var x=b(_,2);N(x,{label:"Millis Quorum Ack",children:(c,P)=>{D();var v=R();C(()=>{var w;return A(v,(w=i(t))==null?void 0:w.millis_since_quorum_ack)}),l(c,v)},$$slots:{default:!0}}),l(a,o),F()}var qt=y('<aside class="svelte-154rhoy"><!></aside>');function At(a){var e=qt(),t=g(e);Mt(t,{}),m(e),l(a,e)}const Pt=(a,e,t)=>{if(xe(a))return Se(a);const s=e(t);return Ce(a,s),s},Vt=(a,e)=>Pt(a,Ht,e),Ht=a=>{let e=z(V(a));return{get value(){return i(e)},set value(t){M(e,V(t))}}};var It=y('<meta name="robots" content="noindex nofollow">'),Tt=y('<nav class="svelte-vv6eq"><!></nav> <main class="svelte-vv6eq"><div class="inner svelte-vv6eq"><!></div></main> <!>',1),zt=y("<!> <!>",1);function Bt(a,e){Q(e,!0);let t=z(void 0),s=z(!1);Vt("queries",[De]),oe.subscribe(d=>{M(t,V(d))}),fe(async()=>{let d=await fetch(`${pe}/session`);d.status===200&&oe.set(await d.json()),M(s,!0)});var r=zt();le(d=>{var n=It();l(d,n)});var o=O(r);B(o,()=>i(t),d=>{var n=Tt(),k=O(n),p=g(k);St(p,{}),m(k);var h=b(k,2),_=g(h),x=g(_);se(x,()=>e.children),m(_),m(h);var c=b(h,2);At(c),l(d,n)},d=>{var n=ne(),k=O(n);B(k,()=>i(s),p=>{ct(p,{})},null,!0),l(d,n)});var L=b(o,2);Ge(L),l(a,r),F()}export{Bt as component,Re as universal};