"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,f=s["".concat(d,".").concat(u)]||s[u]||m[u]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1392:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},l="Downloads",i={unversionedId:"downloads",id:"downloads",isDocsHomePage:!1,title:"Downloads",description:"Command Line Interface (CLI)",source:"@site/docs/downloads.md",sourceDirName:".",slug:"/downloads",permalink:"/docs/downloads",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/downloads.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PEL Utils",permalink:"/docs/api/utils"},next:{title:"FAQ",permalink:"/docs/faq"}},d=[{value:"Command Line Interface (CLI)",id:"command-line-interface-cli",children:[],level:2},{value:"BPMN Modeler",id:"bpmn-modeler",children:[],level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"downloads"},"Downloads"),(0,r.kt)("h2",{id:"command-line-interface-cli"},"Command Line Interface (CLI)"),(0,r.kt)("p",null,"The CLI can be used to simplify working with PIPEFORCE."),(0,r.kt)("p",null,"You can download the latest version ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/logabit/pipeforce-cli/releases/latest"},"here"),"."),(0,r.kt)("p",null,"Follow the download and installation instructions ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/logabit/pipeforce-cli"},"here"),"."),(0,r.kt)("h2",{id:"bpmn-modeler"},"BPMN Modeler"),(0,r.kt)("p",null,"The BPMN modeler is a free tool to design BPMN diagrams and save the BPMN files offline. These files then can be deployed to PIPEFORCE using the ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow.deploy")," command or using the online workbench."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The PIPEFORCE portal has also an online BPMN designer built-in, so an offline tool like this is optional in this case."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"CVersion")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Plattform")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Download"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Windows 64bit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://downloads.camunda.cloud/release/camunda-modeler/5.0.0/camunda-modeler-5.0.0-win-x64.zip"},"camunda-modeler-5.0.0-win-x64.zip"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Windows 32bit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://downloads.camunda.cloud/release/camunda-modeler/5.0.0/camunda-modeler-5.0.0-win-ia32.zip"},"camunda-modeler-5.0.0-win-ia32.zip"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Mac OS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://downloads.camunda.cloud/release/camunda-modeler/5.0.0/camunda-modeler-5.0.0-mac.zip"},"camunda-modeler-5.0.0-mac.zip"))))))}c.isMDXComponent=!0}}]);