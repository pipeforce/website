"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[8513],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),h=n,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||a;return r?o.createElement(u,i(i({ref:t},c),{},{components:r})):o.createElement(u,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1753:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={},i="Trash Bin",p={unversionedId:"guides/propertystore/trash_bin",id:"guides/propertystore/trash_bin",isDocsHomePage:!1,title:"Trash Bin",description:"Since Version: 8.5",source:"@site/docs/guides/propertystore/16_trash_bin.md",sourceDirName:"guides/propertystore",slug:"/guides/propertystore/trash_bin",permalink:"/docs/guides/propertystore/trash_bin",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/propertystore/16_trash_bin.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Property Locking",permalink:"/docs/guides/propertystore/property_locks"},next:{title:"JSON Querying",permalink:"/docs/guides/propertystore/advanced-querying"}},s=[{value:"What is a Trash Bin?",id:"what-is-a-trash-bin",children:[],level:2},{value:"How to move a property to the bin?",id:"how-to-move-a-property-to-the-bin",children:[],level:2},{value:"How to remove a property from the bin?",id:"how-to-remove-a-property-from-the-bin",children:[],level:2},{value:"Report an Issue",id:"report-an-issue",children:[],level:2}],l={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"trash-bin"},"Trash Bin"),(0,n.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 8.5"),(0,n.kt)("h2",{id:"what-is-a-trash-bin"},"What is a Trash Bin?"),(0,n.kt)("p",null,"Before deleting a property, it can be moved to a trash bin, similar as it is for files in most operating systems."),(0,n.kt)("p",null,"In case property has been moved to the trash bin, it will be hidden from most listings."),(0,n.kt)("p",null,"Furthermore, a property moved to the trash bin can no longer be edited since a lock of type ",(0,n.kt)("inlineCode",{parentName:"p"},"trash")," has been set on it. For internals of how the locking works, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/propertystore/property_locks"},"Property Locks"),"."),(0,n.kt)("p",null,"After a certain amount of time (the time-to-live = ttl) the property will be fully deleted from the system."),(0,n.kt)("h2",{id:"how-to-move-a-property-to-the-bin"},"How to move a property to the bin?"),(0,n.kt)("p",null,"There are two options to do so. The first one is by setting a ",(0,n.kt)("inlineCode",{parentName:"p"},"trash")," lock on the property using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/commands#propertylockcreate-v1"},(0,n.kt)("inlineCode",{parentName:"a"},"property.lock.create")),". See ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/propertystore/property_locks#trash-lock"},"Property Locks")," for more details."),(0,n.kt)("p",null,"The second option is by using the command ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/commands#propertydelete-v1"},(0,n.kt)("inlineCode",{parentName:"a"},"property.delete"))," with parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"trashBin")," set to true. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - property.delete:\n      pattern: "global/app/myapp/data/mydata"\n      trashBin: true\n')),(0,n.kt)("p",null,"The advantage of this command is, that it can be applied to a pattern of properties. So you can for example also delete all properties inside a given folder, recursively. Here is an example to do so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - property.delete:\n      pattern: "global/app/myapp/**"\n      trashBin: true\n')),(0,n.kt)("p",null,"This example will move all properties inside the app ",(0,n.kt)("inlineCode",{parentName:"p"},"myapp")," to the trash bin."),(0,n.kt)("p",null,"Additionally you can set the parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"trashBinTimeToLive")," which must be a time in milliseconds after the property will fully deleted. In case this parameter is not set, the system defaults / admin settings will be used to finally cleanup the bin and delete trashed properties."),(0,n.kt)("h2",{id:"how-to-remove-a-property-from-the-bin"},"How to remove a property from the bin?"),(0,n.kt)("p",null,"You can do so by removing the ",(0,n.kt)("inlineCode",{parentName:"p"},"trash")," lock from it using the command  ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/commands#propertylockremove-v1"},(0,n.kt)("inlineCode",{parentName:"a"},"property.lock.remove")),". See here for more details: ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/propertystore/property_locks"},"Property Locks"),". "),(0,n.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your help is needed!")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,n.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!"))))}c.isMDXComponent=!0}}]);