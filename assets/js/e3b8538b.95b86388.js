"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[134],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="App Marketplace",p={unversionedId:"guides/apps/app_marketplace",id:"guides/apps/app_marketplace",title:"App Marketplace",description:"Since Version: 8.5",source:"@site/docs/guides/apps/030_app_marketplace.md",sourceDirName:"guides/apps",slug:"/guides/apps/app_marketplace",permalink:"/docs/guides/apps/app_marketplace",draft:!1,editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/apps/030_app_marketplace.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"App Installation",permalink:"/docs/guides/apps/app_deployment"},next:{title:"Authorization",permalink:"/docs/guides/security/authorization"}},s={},c=[{value:"Publishing",id:"publishing",level:2},{value:"Report an Issue",id:"report-an-issue",level:2}],l={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"app-marketplace"},"App Marketplace"),(0,a.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 8.5"),(0,a.kt)("p",null,"Any PIPEFORCE app can be shared with others on a public marketplace. Admins of other PIPEFORCE instances can easily install your app by searching for it and installing it with one click:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(8242).Z,width:"1622",height:"1072"})),(0,a.kt)("h2",{id:"publishing"},"Publishing"),(0,a.kt)("p",null,"Publishing an app is an easy process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure, your app is pushed to a public GitHub repository and the resources of your app are stored inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"src")," folder. See this ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logabit/pipeforce-app-examples"},"app repo")," as an example,"),(0,a.kt)("li",{parentName:"ol"},"Add the GitHub topics ",(0,a.kt)("inlineCode",{parentName:"li"},"pipeforce-marketplace")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"pipeforce-app")," to your repository. Optionally also add a description to your repo which is displayed in the marketplace later.")),(0,a.kt)("p",null,"Done. Now anyone can search and find your app in the marketplace section of the PIPEFORCE portal and install it with one click."),(0,a.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,a.kt)("admonition",{title:"Your help is needed!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,a.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!")))}u.isMDXComponent=!0},8242:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/marketplace-0c253c67752efd1fef46c4be9550efeb.png"}}]);