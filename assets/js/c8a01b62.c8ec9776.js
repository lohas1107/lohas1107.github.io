"use strict";(self.webpackChunk_2_ndbrain=self.webpackChunk_2_ndbrain||[]).push([[9487],{3015:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=s(5893),o=s(1151);const c={},r="\u6574\u5408\u6e2c\u8a66 Rust API",i={id:"backend/end-to-end-test",title:"\u6574\u5408\u6e2c\u8a66 Rust API",description:"\u5728 Rust \u4e2d\u4f7f\u7528 tokio \u6e2c\u8a66\u975e\u540c\u6b65 API \u6d89\u53ca\u5230\u5e7e\u500b\u6b65\u9a5f\uff0c\u5305\u62ec\u8a2d\u7f6e tokio \u74b0\u5883\u3001\u7de8\u5beb\u975e\u540c\u6b65\u6e2c\u8a66\u51fd\u6578\u4ee5\u53ca\u4f7f\u7528\u76f8\u95dc\u7684\u975e\u540c\u6b65\u7279\u6027\u9032\u884c API \u8acb\u6c42\u3002\u4e0b\u9762\u662f\u4e00\u500b\u7c21\u55ae\u7684\u6307\u5357\uff0c\u5e6b\u52a9\u4f60\u958b\u59cb\u4f7f\u7528 tokio \u9032\u884c\u975e\u540c\u6b65 API \u6e2c\u8a66\u3002",source:"@site/docs/backend/end-to-end-test.md",sourceDirName:"backend",slug:"/backend/end-to-end-test",permalink:"/docs/backend/end-to-end-test",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"Introduction",permalink:"/docs/backend/introduction"},next:{title:"\u4ea4\u6613\u64ae\u5408\u7cfb\u7d71",permalink:"/docs/backend/trade-matching-system"}},d={},l=[{value:"\u6b65\u9a5f 1: \u6dfb\u52a0\u4f9d\u8cf4",id:"\u6b65\u9a5f-1-\u6dfb\u52a0\u4f9d\u8cf4",level:3},{value:"\u6b65\u9a5f 2: \u7de8\u5beb\u975e\u540c\u6b65\u6e2c\u8a66\u51fd\u6578",id:"\u6b65\u9a5f-2-\u7de8\u5beb\u975e\u540c\u6b65\u6e2c\u8a66\u51fd\u6578",level:3},{value:"\u6b65\u9a5f 3: \u4f7f\u7528 <code>reqwest</code> \u9032\u884c\u975e\u540c\u6b65\u8acb\u6c42",id:"\u6b65\u9a5f-3-\u4f7f\u7528-reqwest-\u9032\u884c\u975e\u540c\u6b65\u8acb\u6c42",level:3},{value:"\u6b65\u9a5f 4: \u8655\u7406\u97ff\u61c9\u548c\u9032\u884c\u65b7\u8a00",id:"\u6b65\u9a5f-4-\u8655\u7406\u97ff\u61c9\u548c\u9032\u884c\u65b7\u8a00",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:3}];function a(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u6574\u5408\u6e2c\u8a66-rust-api",children:"\u6574\u5408\u6e2c\u8a66 Rust API"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 Rust \u4e2d\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"tokio"})," \u6e2c\u8a66\u975e\u540c\u6b65 API \u6d89\u53ca\u5230\u5e7e\u500b\u6b65\u9a5f\uff0c\u5305\u62ec\u8a2d\u7f6e ",(0,t.jsx)(n.code,{children:"tokio"})," \u74b0\u5883\u3001\u7de8\u5beb\u975e\u540c\u6b65\u6e2c\u8a66\u51fd\u6578\u4ee5\u53ca\u4f7f\u7528\u76f8\u95dc\u7684\u975e\u540c\u6b65\u7279\u6027\u9032\u884c API \u8acb\u6c42\u3002\u4e0b\u9762\u662f\u4e00\u500b\u7c21\u55ae\u7684\u6307\u5357\uff0c\u5e6b\u52a9\u4f60\u958b\u59cb\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"tokio"})," \u9032\u884c\u975e\u540c\u6b65 API \u6e2c\u8a66\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u6b65\u9a5f-1-\u6dfb\u52a0\u4f9d\u8cf4",children:"\u6b65\u9a5f 1: \u6dfb\u52a0\u4f9d\u8cf4"}),"\n",(0,t.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u78ba\u4fdd\u4f60\u7684 ",(0,t.jsx)(n.code,{children:"Cargo.toml"})," \u6587\u4ef6\u4e2d\u5305\u542b\u4e86 ",(0,t.jsx)(n.code,{children:"tokio"})," \u548c ",(0,t.jsx)(n.code,{children:"reqwest"}),"\uff08\u4e00\u500b\u975e\u540c\u6b65\u7684 HTTP \u5ba2\u6236\u7aef\uff09\uff0c\u9019\u6a23\u4f60\u5c31\u53ef\u4ee5\u767c\u9001\u975e\u540c\u6b65\u8acb\u6c42\u4e86\u3002\u5982\u679c\u4f60\u7684 API \u6e2c\u8a66\u9084\u9700\u8981\u8655\u7406 JSON \u6578\u64da\uff0c",(0,t.jsx)(n.code,{children:"serde"})," \u548c ",(0,t.jsx)(n.code,{children:"serde_json"})," \u4e5f\u5f88\u6709\u7528\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[dependencies]\ntokio = { version = "1.0", features = ["full"] }\nreqwest = "0.11"\nserde = "1.0"\nserde_json = "1.0"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u6b65\u9a5f-2-\u7de8\u5beb\u975e\u540c\u6b65\u6e2c\u8a66\u51fd\u6578",children:"\u6b65\u9a5f 2: \u7de8\u5beb\u975e\u540c\u6b65\u6e2c\u8a66\u51fd\u6578"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"tokio"})," \u7684 ",(0,t.jsx)(n.code,{children:"#[tokio::test]"})," \u5c6c\u6027\u6a19\u8a18\u4f60\u7684\u975e\u540c\u6b65\u6e2c\u8a66\u51fd\u6578\u3002\u9019\u544a\u8a34\u7de8\u8b6f\u5668\u9019\u662f\u4e00\u500b\u975e\u540c\u6b65\u6e2c\u8a66\uff0c\u4e26\u4e14\u9700\u8981 ",(0,t.jsx)(n.code,{children:"tokio"})," \u7684\u904b\u884c\u6642\u652f\u6301\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[cfg(test)]\nmod tests {\n    use super::*;\n    use tokio::test as tokio_test;\n\n    #[tokio_test]\n    async fn test_my_async_api() {\n        // \u9019\u88e1\u662f\u4f60\u7684\u6e2c\u8a66\u908f\u8f2f\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"\u6b65\u9a5f-3-\u4f7f\u7528-reqwest-\u9032\u884c\u975e\u540c\u6b65\u8acb\u6c42",children:["\u6b65\u9a5f 3: \u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"reqwest"})," \u9032\u884c\u975e\u540c\u6b65\u8acb\u6c42"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u4f60\u7684\u6e2c\u8a66\u51fd\u6578\u5167\u90e8\uff0c\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"reqwest"})," \u767c\u9001\u975e\u540c\u6b65 HTTP \u8acb\u6c42\u5230\u4f60\u7684 API\u3002\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u9032\u884c\u4e00\u500b\u7c21\u55ae\u7684 GET \u8acb\u6c42\u4e26\u6aa2\u67e5\u97ff\u61c9\u72c0\u614b\u78bc\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'#[cfg(test)]\nmod tests {\n    use super::*;\n    use tokio::test as tokio_test;\n    use reqwest;\n\n    #[tokio_test]\n    async fn test_my_async_api() {\n        let client = reqwest::Client::new();\n        let resp = client.get("http://yourapi.com/endpoint")\n            .send()\n            .await\n            .unwrap();\n\n        assert!(resp.status().is_success());\n        // \u66f4\u591a\u7684\u65b7\u8a00\u53ef\u4ee5\u6839\u64da\u4f60\u7684\u9700\u6c42\u6dfb\u52a0\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u6b65\u9a5f-4-\u8655\u7406\u97ff\u61c9\u548c\u9032\u884c\u65b7\u8a00",children:"\u6b65\u9a5f 4: \u8655\u7406\u97ff\u61c9\u548c\u9032\u884c\u65b7\u8a00"}),"\n",(0,t.jsxs)(n.p,{children:["\u7576\u4f60\u6536\u5230 API \u97ff\u61c9\u5f8c\uff0c\u53ef\u80fd\u9700\u8981\u5c0d\u97ff\u61c9\u6578\u64da\u9032\u884c\u89e3\u6790\u548c\u9a57\u8b49\u3002\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"reqwest"})," \u7684 ",(0,t.jsx)(n.code,{children:".json::<T>()"})," \u65b9\u6cd5\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u5c07\u97ff\u61c9\u9ad4\u89e3\u6790\u70ba Rust \u7d50\u69cb\u9ad4\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'#[derive(Deserialize)]\nstruct ApiResponse {\n    // \u5b9a\u7fa9\u8207\u4f60\u7684 API \u97ff\u61c9\u5339\u914d\u7684\u7d50\u69cb\u9ad4\n}\n\n#[tokio_test]\nasync fn test_my_async_api() {\n    let client = reqwest::Client::new();\n    let resp = client.get("http://yourapi.com/endpoint")\n        .send()\n        .await\n        .unwrap();\n\n    assert!(resp.status().is_success());\n\n    let api_response: ApiResponse = resp.json().await.unwrap();\n    // \u5c0d api_response \u9032\u884c\u65b7\u8a00\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u5c0f\u7d50",children:"\u5c0f\u7d50"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"tokio"})," \u548c ",(0,t.jsx)(n.code,{children:"reqwest"})," \u9032\u884c\u975e\u540c\u6b65 API \u6e2c\u8a66\u662f\u4e00\u500b\u76f4\u63a5\u4e14\u5f37\u5927\u7684\u65b9\u6cd5\u3002\u9019\u8b93\u4f60\u53ef\u4ee5\u975e\u5e38\u5bb9\u6613\u5730\u5728 Rust \u4e2d\u9032\u884c HTTP API \u7684\u96c6\u6210\u6e2c\u8a66\uff0c\u4e26\u4e14\u5145\u5206\u5229\u7528\u975e\u540c\u6b65\u7de8\u7a0b\u5e36\u4f86\u7684\u6027\u80fd\u512a\u52e2\u3002\u8a18\u5f97\u5728\u5beb\u6e2c\u8a66\u6642\uff0c\u6839\u64da\u4f60\u7684 API \u5951\u7d04\u8a2d\u8a08\u5408\u7406\u7684\u65b7\u8a00\uff0c\u78ba\u4fdd\u4f60\u7684 API \u884c\u70ba\u7b26\u5408\u9810\u671f\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var t=s(7294);const o={},c=t.createContext(o);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);