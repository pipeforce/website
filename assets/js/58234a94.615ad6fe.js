"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[308],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return r?i.createElement(g,a(a({ref:t},p),{},{components:r})):i.createElement(g,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<n;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7310:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var i=r(7462),o=(r(7294),r(3905));const n={id:"basics",title:"Microservices",sidebar_label:"Basics",slug:"/microservices"},a=void 0,s={unversionedId:"guides/microservices/basics",id:"guides/microservices/basics",isDocsHomePage:!1,title:"Microservices",description:"In PIPEFORCE, you have two main possibilities to write a business application:",source:"@site/docs/guides/microservices/010_microservices-intro.md",sourceDirName:"guides/microservices",slug:"/microservices",permalink:"/docs/microservices",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/microservices/010_microservices-intro.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"basics",title:"Microservices",sidebar_label:"Basics",slug:"/microservices"},sidebar:"tutorialSidebar",previous:{title:"Emails",permalink:"/docs/guides/workflows/emails"},next:{title:"Microservice Messaging",permalink:"/docs/guides/microservices/messaging"}},l=[{value:"Design a microservice",id:"design-a-microservice",children:[],level:2},{value:"Develop a microservice",id:"develop-a-microservice",children:[],level:2},{value:"Deploy a microservice",id:"deploy-a-microservice",children:[],level:2},{value:"Logging a microservice",id:"logging-a-microservice",children:[],level:2}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In PIPEFORCE, you have two main possibilities to write a business application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using low code inside an app."),(0,o.kt)("li",{parentName:"ul"},"Using a microservice.")),(0,o.kt)("p",null,"Depending on the requirements you should select the right approach for your implementation."),(0,o.kt)("p",null,"In the table below you can see the pros and cons about the two approaches:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Implementation"),(0,o.kt)("th",{parentName:"tr",align:null},"Pros"),(0,o.kt)("th",{parentName:"tr",align:null},"Cons"),(0,o.kt)("th",{parentName:"tr",align:null},"Main purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"App & Low Code"),(0,o.kt)("td",{parentName:"tr",align:null},"Easy to learn. No developer skills required. Very fast results possible. No compilation and build steps required. Huge set of out-of-the-box toolings like forms, lists, reports and utils available."),(0,o.kt)("td",{parentName:"tr",align:null},"Limited to its main purposes."),(0,o.kt)("td",{parentName:"tr",align:null},"For simple data mappings, workflow tasks and system connections. Building frontend apps with forms, listings and basic reports.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Microservice"),(0,o.kt)("td",{parentName:"tr",align:null},"Very flexible: You can use any programming language and libraries of your choice and you can develop any business complexity you like."),(0,o.kt)("td",{parentName:"tr",align:null},"Requires developer skills and somebody who manages the architecture of the microservice. Requires a build process."),(0,o.kt)("td",{parentName:"tr",align:null},"For complex business logics, running mainly as background services.")))),(0,o.kt)("p",null,"It's also possible to combine apps and microservices in order to implement a single business solution."),(0,o.kt)("h2",{id:"design-a-microservice"},"Design a microservice"),(0,o.kt)("p",null,"Typically a microservice is small application which has the responsibility about a concrete and well-defined part of an overall business process. How you slice the microservices depends on your requirements."),(0,o.kt)("p",null,"So before you start, you should be very clear, which parts should go into which microservices and which not at all."),(0,o.kt)("p",null,"See here for a good introduction how to design microservices: ",(0,o.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/break-monolith-into-microservices.html"},"https://martinfowler.com/articles/break-monolith-into-microservices.html")),(0,o.kt)("h2",{id:"develop-a-microservice"},"Develop a microservice"),(0,o.kt)("p",null,"Developing a microservice typically means, developing a business application in the programming language of your choice."),(0,o.kt)("p",null,"As long as you can build and run the application inside a (Docker) container, you can also run it inside PIPEFORCE as microservice."),(0,o.kt)("p",null,"We suggest you to write your microservices in one of these languages since they are widely used, having a huge community and being well documented:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Python"),". For example using one of the official Docker images: ",(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/python"},"https://hub.docker.com/_/python")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Java"),". For example using one of the frameworks Spring, Quarkus or Helidon and one of the official Docker images: ",(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/java"},"https://hub.docker.com/_/java")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NodeJS"),". For example using Typescript, ExpressJS and/or NestJS and one of the offcial Docker images: ",(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/node"},"https://hub.docker.com/_/node")," ")),(0,o.kt)("p",null,"In our experience, Python is often a very good joice for a microservice language. Since it has the best trade-off between complexity and flexibility. But as always, it depends on your concrete requirements."),(0,o.kt)("p",null,"If you would like to start a microservice in Python, you can fork our template from GitHub and start coding it: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/logabit/pipeforce-service-template-python"},"https://github.com/logabit/pipeforce-service-template-python")," "),(0,o.kt)("p",null,"In order to allow your microservice to communicate with others, there are two common ways you can implement this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sync")," communication - Typically used with RESTful services inside PIPEFORCE."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Async")," communication - Typically used with RabbitMQ and ",(0,o.kt)("strong",{parentName:"li"},"messaging")," inside PIPEFORCE (preferred way).")),(0,o.kt)("h2",{id:"deploy-a-microservice"},"Deploy a microservice"),(0,o.kt)("p",null,"The development and deployment cycle of a microservice in PIPEFORCE is always an 4-step task:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Develop the microservice locally using the IDE and programming language of your choice."),(0,o.kt)("li",{parentName:"ol"},"Build a (Docker) container image from the sources of your microservice."),(0,o.kt)("li",{parentName:"ol"},"Upload the container image to a container registry which is supported by PIPEFORCE."),(0,o.kt)("li",{parentName:"ol"},"Deploy the image from this registry into your PIPEFORCE namespace by using the command ",(0,o.kt)("inlineCode",{parentName:"li"},"service.start"),".")),(0,o.kt)("p",null,"Step 2-4 are typically automated by using a CI/CD tool like Jenkins, CircleCI, Travis or similar."),(0,o.kt)("p",null,"Furthermore, we suggest managing your source code using GitHub and connect your CI/CD tool, so it starts to build, test\nand deploy automatically every time, a new push to GitHub happened (or on other triggers like merging or tagging)."),(0,o.kt)("h2",{id:"logging-a-microservice"},"Logging a microservice"),(0,o.kt)("p",null,"Everything you log into the standard output of your microservice container can be later viewed by using\nthe command ",(0,o.kt)("a",{parentName:"p",href:"https://pipeforce.github.io/docs/api/commands#loglist-v1"},"log.list")," and specifying the name under\nwhich you have deployed the service. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - log.list:\n      service: "my-service"\n      lines: "100"\n')))}p.isMDXComponent=!0}}]);