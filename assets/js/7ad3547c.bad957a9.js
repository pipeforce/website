"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7068],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,y=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},i="Tutorial 4: Create a List",l={unversionedId:"tutorials/create-list",id:"tutorials/create-list",title:"Tutorial 4: Create a List",description:"Estimated time: 15 min.",source:"@site/docs/tutorials/40_create-list.md",sourceDirName:"tutorials",slug:"/tutorials/create-list",permalink:"/docs/tutorials/create-list",draft:!1,editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/tutorials/40_create-list.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial 3: Create a Form",permalink:"/docs/tutorials/create-form"},next:{title:"Tutorial 5: Create a Pipeline",permalink:"/docs/tutorials/create-pipeline"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1 - Create your list",id:"1---create-your-list",level:2},{value:"2 - Open your new list",id:"2---open-your-new-list",level:2},{value:"Report an Issue",id:"report-an-issue",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tutorial-4-create-a-list"},"Tutorial 4: Create a List"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Estimated time:")," 15 min. "),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PIPEFORCE Enterprise 7.0 or higher."),(0,n.kt)("li",{parentName:"ul"},"You have a valid PIPEFORCE Developer account."),(0,n.kt)("li",{parentName:"ul"},"You have executed tutorial ",(0,n.kt)("a",{parentName:"li",href:"../tutorials/create-app"},"Tutorial: Create a new app"),"."),(0,n.kt)("li",{parentName:"ul"},"You have executed tutorial ",(0,n.kt)("a",{parentName:"li",href:"../tutorials/create-form"},"Tutorial: Create a new form"),"."),(0,n.kt)("li",{parentName:"ul"},"You have already added 3 or more data sets using your form.")),(0,n.kt)("h2",{id:"1---create-your-list"},"1 - Create your list"),(0,n.kt)("p",null,"Up to this step, you have already created an app with a new form inside (in the previous tutorials). When you submit the form, the data of the form will be automatically stored for you in PIPEFORCE, but you cant see it yet. In this step we want to display this data using a list. To do so, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login to your portal https://YOUR","_","NAMESPACE.pipeforce.net.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to LOW CODE \u2192 Workbench.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select your app node in the property tree, and click the plus icon at the top.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The new property view opens:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"As a property key, use the value ",(0,n.kt)("inlineCode",{parentName:"li"},"global/app/MY_APP/list/person"),". Replace ",(0,n.kt)("inlineCode",{parentName:"li"},"MY_APP")," with the name of the app you created before, for example ",(0,n.kt)("inlineCode",{parentName:"li"},"myapp24"),". ",(0,n.kt)("strong",{parentName:"li"},"Do use only lower case letters and don\u2019t use special characters or spaces!")),(0,n.kt)("li",{parentName:"ol"},"As mime type select ",(0,n.kt)("inlineCode",{parentName:"li"},"application/json; type=list"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click SAVE."))),(0,n.kt)("h2",{id:"2---open-your-new-list"},"2 - Open your new list"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The list property has been created for you and pre-configured using the person schema you created in the last tutorial. Do not change anything in here.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"All Apps"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on your app.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on \u201cperson\u201d")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You should now see all the person datasets added before using your form:  "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(4411).Z,width:"2024",height:"1302"})))),(0,n.kt)("p",null,"You can search and sort the list."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Congrats, you have created your first list!")),(0,n.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,n.kt)("admonition",{title:"Your help is needed!",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,n.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!")))}c.isMDXComponent=!0},4411:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/grafik-20210720-142349-e2c7442f73d2ccd710db6a169d7e3767.png"}}]);