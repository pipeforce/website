"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8751:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o="8. Content Handling",l={unversionedId:"guides/contentobject",id:"guides/contentobject",isDocsHomePage:!1,title:"8. Content Handling",description:'In order to process documents and other files using a pipeline, you first need to load such a file into the pipeline. After loading, the file is automatically converted into a format called "content object". This is a wrapper around a document which provides all required information for such a document, like its name size, mime type etc., for easier processing inside the pipeline. The content object provides these attributes:',source:"@site/docs/guides/80_contentobject.md",sourceDirName:"guides",slug:"/guides/contentobject",permalink:"/docs/guides/contentobject",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/80_contentobject.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FreeMarker Transformer",permalink:"/docs/guides/transformers/freemarker"},next:{title:"Basics",permalink:"/docs/messaging"}},s=[{value:"Attributes",id:"attributes",children:[],level:2},{value:"Collection",id:"collection",children:[],level:2},{value:"Report an Issue",id:"report-an-issue",children:[],level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"8-content-handling"},"8. Content Handling"),(0,r.kt)("p",null,'In order to process documents and other files using a pipeline, you first need to load such a file into the pipeline. After loading, the file is automatically converted into a format called "content object". This is a wrapper around a document which provides all required information for such a document, like its name size, mime type etc., for easier processing inside the pipeline. The content object provides these attributes:'),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the document.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"created")),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"The unix timestamp in millis when this document was created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lastUpdated")),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"The unix timetsmap in millis when this document was last modified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mimeType")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The mime type of this document. If ",(0,r.kt)("inlineCode",{parentName:"td"},"null"),", it is assumed to be t",(0,r.kt)("inlineCode",{parentName:"td"},"ext/plain")," by default. See here for a list of official mime types: ",(0,r.kt)("a",{parentName:"td",href:"https://www.iana.org/assignments/media-types/media-types.xhtml"},"https://www.iana.org/assignments/media-types/media-types.xhtml"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"The size of the document in bytes or -1 in case the size cannot be determined.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The data of the document. Which format the data has depends on its mime type. For example, if mime type is ",(0,r.kt)("inlineCode",{parentName:"td"},"application/json"),", then the data object returns a JSON document.")))),(0,r.kt)("p",null,"Here is an example to load a file from the drive service into the body scope and then access its attributes of the content object from there:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  # Load document from drive and set it as content object in the body\n  - drive.read:\n      path: "invoice.pdf"\n  # Access the attributes of the content object in the body\n  - log:\n      message: "Name: #{body.name}, Size: #{body.size}" \n')),(0,r.kt)("h2",{id:"collection"},"Collection"),(0,r.kt)("p",null,"In case multiple documents are loaded into a pipeline, such documents are grouped together in a so called content object ",(0,r.kt)("strong",{parentName:"p"},"collection"),". Such a collection has a similar meaning like a folder has in a local file system."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"parent")),(0,r.kt)("td",{parentName:"tr",align:null},"ContentCollection"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the parent collection if this is a nested collection, or null in case this is the root collection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the path to this collection, whereas ",(0,r.kt)("inlineCode",{parentName:"td"},"/")," is returned in case it is the root collection. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"/rootCol/subCol"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"children")),(0,r.kt)("td",{parentName:"tr",align:null},"ContentObject"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns a list of all content objects which are contained in the collection. This can not only be a document, but also another content collection in case they are nested.")))),(0,r.kt)("p",null,"A Content Collection is also a ",(0,r.kt)("a",{parentName:"p",href:"#"},"Content Object")," and therefore it also has all attributes of the Content Object."),(0,r.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your help is needed!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,r.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!"))))}p.isMDXComponent=!0}}]);