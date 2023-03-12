"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[4816],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},l=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=p(t),d=r,f=l["".concat(c,".").concat(d)]||l[d]||u[d]||i;return t?o.createElement(f,a(a({ref:n},m),{},{components:t})):o.createElement(f,a({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));const i={},a="Custom Command",s={unversionedId:"guides/commands_pipelines/custom_command",id:"guides/commands_pipelines/custom_command",title:"Custom Command",description:"Since Version: 9.0",source:"@site/docs/guides/commands_pipelines/45_custom_command.md",sourceDirName:"guides/commands_pipelines",slug:"/guides/commands_pipelines/custom_command",permalink:"/docs/guides/commands_pipelines/custom_command",draft:!1,editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/commands_pipelines/45_custom_command.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Versioning",permalink:"/docs/guides/commands_pipelines/command_versioning"},next:{title:"Error Handling",permalink:"/docs/guides/commands_pipelines/error_handling"}},c={},p=[{value:"Report an Issue",id:"report-an-issue",level:2}],m={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-command"},"Custom Command"),(0,r.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 9.0"),(0,r.kt)("p",null,"You can add your own custom commands to PIPEFORCE in a few steps without a manual deployment required."),(0,r.kt)("p",null,"This can can be done by creating a Python function in the FaaS module."),(0,r.kt)("p",null,"Once this function has been auto-deployed, you can call it similar to a command from inside any pipeline or using the Command API."),(0,r.kt)("p",null,"The function name will become the command name and the parameters will become the arguments to the function. For example, lets assume a function like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def myfunction(text):\n  return "HELLO: " + text\n')),(0,r.kt)("p",null,"And a pipeline which calls this function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - myapp:myscript:myfunction:\n      text: "World!"\n')),(0,r.kt)("p",null,"This example will execute the function ",(0,r.kt)("inlineCode",{parentName:"p"},"myfunction(text)")," on the script ",(0,r.kt)("inlineCode",{parentName:"p"},"myscript")," inside the app ",(0,r.kt)("inlineCode",{parentName:"p"},"myapp"),". The result will then be returned to the pipeline body and can be processed by subsequent commands as usual. The final output of the pipeline in this example would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HELLO: World!\n")),(0,r.kt)("p",null,"For more information about how to create functions and execute them, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/faas"},"Python Functions")),(0,r.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,r.kt)("admonition",{title:"Your help is needed!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,r.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!")))}u.isMDXComponent=!0}}]);