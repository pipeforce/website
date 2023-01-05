"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[2932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="3. Connectors",s={unversionedId:"guides/connectors",id:"guides/connectors",title:"3. Connectors",description:"Since Version: 1.0",source:"@site/docs/guides/30_connectors.md",sourceDirName:"guides",slug:"/guides/connectors",permalink:"/docs/guides/connectors",draft:!1,editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/30_connectors.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/docs/guides/commands_pipelines/error_handling"},next:{title:"Basics",permalink:"/docs/propertystore"}},c={},p=[{value:"What is a connector?",id:"what-is-a-connector",level:2},{value:"HTTP/S connectors",id:"https-connectors",level:2},{value:"SFTP Connectors",id:"sftp-connectors",level:2},{value:"Report an Issue",id:"report-an-issue",level:2}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3-connectors"},"3. Connectors"),(0,a.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 1.0"),(0,a.kt)("h2",{id:"what-is-a-connector"},"What is a connector?"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"connector")," is a component which connects to an external service via an API and can exechange data with such a service."),(0,a.kt)("p",null,"In PIPEFORCE, connectors are implemented using ",(0,a.kt)("a",{parentName:"p",href:"/docs/commands_pipelines"},"Commands"),". So, a Command can be in a role of a connector."),(0,a.kt)("p",null,"There are many such built-in connectors. Some examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http.*")," : This set of commands can connect to any HTTP/S endpoint."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sftp.*")," : This set of commands can connect to any SFTP endpoint."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iam.*")," : This set of commands can connect to the internal identity and access management system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"drive.*"),": This set of commands can connect to the internal data room."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"microsoft.teams.send")," : This command can send messages to a teams channel."),(0,a.kt)("li",{parentName:"ul"},"And many more. See the ",(0,a.kt)("a",{parentName:"li",href:"../api/commands"},"commands reference")," for a list of all available commands.")),(0,a.kt)("h2",{id:"https-connectors"},"HTTP/S connectors"),(0,a.kt)("p",null,"The HTTP/S connectors can be used to connect to HTTP/S endpoints. For example if you would like to make RESTful calls."),(0,a.kt)("p",null,"Typically such endpoints are secured with username and password or a token. You should never place such sensitive data into your source code. Instead, create a new ",(0,a.kt)("a",{parentName:"p",href:"../guides/security/secrets"},"Secret")," and refer to it in your pipeline."),(0,a.kt)("p",null,"Here is an example to access the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/actions/artifacts"},"GitHub API")," using the command ",(0,a.kt)("a",{parentName:"p",href:"../api/commands#httpget-v1"},(0,a.kt)("inlineCode",{parentName:"a"},"http.get"))," and a custom secret, created before:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n    - http.get:\n        url: "https://api.github.com/owner/repo/actions/artifacts"\n        credentials: "github-secret"\n')),(0,a.kt)("p",null,"This will return a JSON document like this example, which can be used in the pipeline for further processing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "total_count": 1,\n  "artifacts": [\n    {\n      "id": 11,\n      "node_id": "MDg6QXJ0bbZhY3QxMQ==",\n      "name": "Rails",\n      "size_in_bytes": 556,\n      "url": "https://api.github.com/repos/owner/repo/actions/artifacts/11",\n      "archive_download_url": "https://api.github.com/repos/owner/repo/actions/artifacts/11/zip",\n      "expired": false,\n      "created_at": "2022-01-10T14:59:22Z",\n      "expires_at": "2022-03-21T14:59:22Z",\n      "updated_at": "2022-02-21T14:59:22Z",\n      "workflow_run": {\n        "id": 2332928,\n        "repository_id": 1296569,\n        "head_repository_id": 1296219,\n        "head_branch": "main",\n        "head_sha": "328faa0536e6fef19903d9d91dc96a9931694ce3"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"sftp-connectors"},"SFTP Connectors"),(0,a.kt)("p",null,"The SFTP connectors can be used to connect to a SFTP service."),(0,a.kt)("p",null,"Here is an example to use the ",(0,a.kt)("a",{parentName:"p",href:"../api/commands#sftplist-v1"},(0,a.kt)("inlineCode",{parentName:"a"},"sftp.list"))," command in a pipeline:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n    - sftp.list:\n        host: "some.sftpserver.tld"\n        path: "/myfolder"\n        credentials: "sftp-secret"\n')),(0,a.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,a.kt)("admonition",{title:"Your help is needed!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,a.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!")))}d.isMDXComponent=!0}}]);