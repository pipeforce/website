"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},218:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const r={},s="1. Namespaces",o={unversionedId:"guides/namespaces",id:"guides/namespaces",isDocsHomePage:!1,title:"1. Namespaces",description:"What is a Namespace?",source:"@site/docs/guides/10_namespaces.md",sourceDirName:"guides",slug:"/guides/namespaces",permalink:"/docs/guides/namespaces",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/10_namespaces.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/intro"},next:{title:"2. Commands & Pipelines",permalink:"/docs/guides/commands_pipelines"}},l=[{value:"What is a Namespace?",id:"what-is-a-namespace",children:[],level:2},{value:"Service",id:"service",children:[{value:"Public",id:"public",children:[],level:3},{value:"Private",id:"private",children:[],level:3},{value:"Custom",id:"custom",children:[],level:3}],level:2},{value:"Staging Tiers",id:"staging-tiers",children:[{value:"<code>DEV</code>",id:"dev",children:[],level:3},{value:"<code>QA</code>",id:"qa",children:[],level:3},{value:"<code>PROD</code>",id:"prod",children:[],level:3}],level:2}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-namespaces"},"1. Namespaces"),(0,i.kt)("h2",{id:"what-is-a-namespace"},"What is a Namespace?"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"namespace")," in PIPEFORCE is the unqiue name to access your instance and is similar to a tenant id. So whenever you want to refer / link to your own instance you need to know the namespace to do so. To access your instance via browser use the namespace as subdomain part of your ",(0,i.kt)("a",{parentName:"p",href:"http://pipeforce.net"},"pipeforce.net")," instance url."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7198).Z})),(0,i.kt)("p",null,"If unclear, ask ",(0,i.kt)("a",{parentName:"p",href:"https://logabit.atlassian.net/servicedesk/customer/portals"},"Support")," for your namespace."),(0,i.kt)("h2",{id:"service"},"Service"),(0,i.kt)("p",null,"Each PIPEFORCE namespace contains of multiple services to run your solutions. Depending on your setup, the number and type of these services could differ. "),(0,i.kt)("h3",{id:"public"},"Public"),(0,i.kt)("p",null,'Usually these services are by default available within your namespace and can be accessed from the internet. They are therefore called "public" services:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hub")," : This is the core service which manages and executes ",(0,i.kt)("a",{parentName:"li",href:"commands_pipelines"},"Commands & Pipelines"),". Can be accessed via: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://mycompany-hub.pipeforce.net"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Portal"),": A single page application which hosts the user and developer UI. Can be accessed via: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://mycompany.pipeforce.net"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Drive"),": A data room application to store, edit and share documents and files. Can be accessed via: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://mycompany-drive.pipeforce.net"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IAM"),": An identity and access management system to manage users, groups, permissions and logins. Can be accessed via: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://mycompany-iam.pipeforce.net"),". ")),(0,i.kt)("h3",{id:"private"},"Private"),(0,i.kt)("p",null,'Additionally to the services accessible from outside, there are also default services which can be accessed only from inside the namespace. They are called the "private" services. These services are:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Postgres"),": A PostgreSQL database which hosts application data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Messaging"),": A messaging broker which is part of the internal message bus."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Workflow"),": A workflow engine in order to manage and execute BPMN workflows.")),(0,i.kt)("h3",{id:"custom"},"Custom"),(0,i.kt)("p",null,"Beside the default services mentioned above, there could be additional, custom services depending on your license / setup. See section ",(0,i.kt)("a",{parentName:"p",href:"../microservices"},"Microservices")," for more information about custom microservices."),(0,i.kt)("h2",{id:"staging-tiers"},"Staging Tiers"),(0,i.kt)("p",null,"Especially in case you develop custom microservices, you should think about a staging approach."),(0,i.kt)("p",null,"Typically, the staging process is seperated into at least three tiers: ",(0,i.kt)("inlineCode",{parentName:"p"},"DEV"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"QA"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PROD"),"."),(0,i.kt)("p",null,"You can learn more about such environments on ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Deployment_environment"},"this Wiki page"),"."),(0,i.kt)("p",null," In case you do not write custom microservices and use low code and integration, you can implement such a staging process inside a single namespace. User groups, permissions and versioning can help you to show your solution only to a certain group depending on the deployment phases."),(0,i.kt)("p",null," In case you develop custom microservices, you should think about a staging approach using namespaces. You could for example create the three namespaces ",(0,i.kt)("strong",{parentName:"p"},"dev"),", ",(0,i.kt)("strong",{parentName:"p"},"qa")," and ",(0,i.kt)("strong",{parentName:"p"},"prod")," in order to have three independent environments."),(0,i.kt)("p",null," If you need help to decide your staging approach, feel free to contact us."),(0,i.kt)("h3",{id:"dev"},(0,i.kt)("inlineCode",{parentName:"h3"},"DEV")),(0,i.kt)("p",null,"In this tier the development happens. It is highly dynamically and can change frequently."),(0,i.kt)("h3",{id:"qa"},(0,i.kt)("inlineCode",{parentName:"h3"},"QA")),(0,i.kt)("p",null,"Once development is finished, the solution gets deployed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"QA"),' tier. Sometimes also called "Staging". This is the tier where quality assurance tests are done with the system configured as close as possible similar to the production environment.'),(0,i.kt)("h3",{id:"prod"},(0,i.kt)("inlineCode",{parentName:"h3"},"PROD")),(0,i.kt)("p",null,"In this last tier, the system is operated in production. Once a solution has been tested successfully on the ",(0,i.kt)("inlineCode",{parentName:"p"},"QA")," tier it can be moved to the ",(0,i.kt)("inlineCode",{parentName:"p"},"PROD")," tier."))}p.isMDXComponent=!0},7198:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20210212-104035-5c111254644ae0f7a7878e9b956c902f.png"}}]);