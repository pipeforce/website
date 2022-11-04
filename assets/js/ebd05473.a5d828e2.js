"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[8305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={},a="Built-In Functions",s={unversionedId:"guides/commands_pipelines/functions",id:"guides/commands_pipelines/functions",title:"Built-In Functions",description:"Since Version: 3.0",source:"@site/docs/guides/commands_pipelines/30_functions.md",sourceDirName:"guides/commands_pipelines",slug:"/guides/commands_pipelines/functions",permalink:"/docs/guides/commands_pipelines/functions",draft:!1,editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/commands_pipelines/30_functions.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pipeline Expression Language",permalink:"/docs/guides/commands_pipelines/pel"},next:{title:"Custom Functions",permalink:"/docs/guides/commands_pipelines/custom_functions"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Examples for <code>@date</code>",id:"examples-for-date",level:3},{value:"Examples for <code>@list</code>",id:"examples-for-list",level:3},{value:"Examples for <code>@text</code>",id:"examples-for-text",level:3},{value:"Auto-completion",id:"auto-completion",level:2},{value:"Report an Issue",id:"report-an-issue",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"built-in-functions"},"Built-In Functions"),(0,r.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 3.0"),(0,r.kt)("p",null,"Inside a ",(0,r.kt)("a",{parentName:"p",href:"../guides/../commands_pipelines/pel"},"Pipeline Expression")," you can access a huge library of functions, which can additionaly simplify your integration and automation tasks. Such utility functions are called ",(0,r.kt)("strong",{parentName:"p"},"Built-In Functions"),". See the ",(0,r.kt)("a",{parentName:"p",href:"../../api/functions"},"reference docs")," for a full list of all available functions. If you're missing a function there, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"drop a note"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Such a function is always embedded inside a Pipeline Expression and has a structure like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@group.function(args...)\n")),(0,r.kt)("p",null,"Whereas you need to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," by the util group name, ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," by the function method name and ",(0,r.kt)("inlineCode",{parentName:"p"},"args")," by the optional arguments to the function you would like to execute. "),(0,r.kt)("h3",{id:"examples-for-date"},"Examples for ",(0,r.kt)("inlineCode",{parentName:"h3"},"@date")),(0,r.kt)("p",null,"Here is an example to return the current date using such a function without any argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@date.now()\n")),(0,r.kt)("p",null,"And here a fully working example, embedded inside a Pipeline Expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:  \n  - log:  \n      message: "The current date is: #{@date.now()}"  \n')),(0,r.kt)("h3",{id:"examples-for-list"},"Examples for ",(0,r.kt)("inlineCode",{parentName:"h3"},"@list")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{5}","{5}":!0},'vars:\n  cities: "Munich, Bratislava, New York"\npipeline:\n  - log: \n      message: "#{@list.size(vars.cities)}"\n')),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"3\n")),(0,r.kt)("h3",{id:"examples-for-text"},"Examples for ",(0,r.kt)("inlineCode",{parentName:"h3"},"@text")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  - log: \n      message: \"#{@text.lang('Hallo, Herr Meier!')}\"\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GERMAN\n")),(0,r.kt)("h2",{id:"auto-completion"},"Auto-completion"),(0,r.kt)("p",null,"In case you're working with the Online Workbench you can get auto-completion of all ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/functions"},"Pipeline Functions")," out-of-the-box:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6418).Z,width:"1848",height:"914"}),"  "),(0,r.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,r.kt)("admonition",{title:"Your help is needed!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,r.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!")))}c.isMDXComponent=!0},6418:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/workbench-completion-utils-2870ff407fd1920805bae14a1d746a84.png"}}]);