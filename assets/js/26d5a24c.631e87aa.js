"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const s={id:"basics",title:"Lists Basics",sidebar_label:"Basics",slug:"/lists-basics"},a=void 0,o={unversionedId:"guides/lists/basics",id:"guides/lists/basics",title:"Lists Basics",description:"Since Version: 5.0",source:"@site/docs/guides/lists/010_lists-intro.md",sourceDirName:"guides/lists",slug:"/lists-basics",permalink:"/docs/lists-basics",draft:!1,editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/lists/010_lists-intro.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"basics",title:"Lists Basics",sidebar_label:"Basics",slug:"/lists-basics"},sidebar:"tutorialSidebar",previous:{title:"Forms fields",permalink:"/docs/guides/forms/forms-fields"},next:{title:"Reporting",permalink:"/docs/guides/reports/reporting"}},l={},c=[{value:"JSON Schema",id:"json-schema",level:2},{value:"Report an Issue",id:"report-an-issue",level:2}],p={toc:c};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 5.0"),(0,r.kt)("p",null,"A list in PIPEFORCE is a client side view component which renders a given JSON structure returned by a pipeline as HTML table. The pipeline can collect data from any combination of different locations and returns this data consolidated as JSON array to the list component at client side which finally renders it to a HTML table:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6093).Z,width:"943",height:"598"})),(0,r.kt)("p",null,"In order to display such a list in PIPEFORCE, you have to create two JSON documents:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"JSON schema"),": Defines the columns of the table. For example the header, the data type and the conversion rules if required. This document is typically located at ",(0,r.kt)("inlineCode",{parentName:"li"},"$APP_HOME/object/$TYPE/v1/schema.json"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"List configuration"),": Defines where to load the JSON data for the list from. This document is typically located at ",(0,r.kt)("inlineCode",{parentName:"li"},"$APP_HOME/list/$TYPE.json"),".")),(0,r.kt)("p",null,"After these two JSON documents have been created, the list is shown in the app view as list tile. When clicking this tile, the list will be loaded."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/create-list"},"list tutorial")," to practise these steps."),(0,r.kt)("h2",{id:"json-schema"},"JSON Schema"),(0,r.kt)("p",null,"The JSON schema configures how the columns must be displayed in the list. It is a JSON document which follows the schema specification from ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/specification.html"},"json-schema.org"),"."),(0,r.kt)("p",null,"Such a JSON Schema is typically located in the property store at ",(0,r.kt)("inlineCode",{parentName:"p"},"$APP_HOME/object/$TYPE/v1/schema.json")," whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"$APP_HOME")," stands for the home path of your app and ",(0,r.kt)("inlineCode",{parentName:"p"},"$TYPE")," stands for the JSON object type your schema describes. For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"global/myapp/object/person/v1/schema.json"),"."),(0,r.kt)("p",null,"Here is a simpe example of a person object described as Schema schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "object",\n    "properties": {\n        "firstName": {\n            "title": "First Name",\n            "type": "string",\n            "description": "This is the first name of the person."\n        },\n        "lastName": {\n            "title": "Last Name",\n            "type": "string",\n            "description": "This is the last name of the person."\n        },\n        "age": {\n            "title": "Age",\n            "type": "number",\n            "description": "This is the age of the person."\n        },\n        "gender": {\n            "title": "Gender",\n            "type": "string",\n            "description": "This is the gender of the person.",\n      "enum": ["Female", "Male"]\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Each entry in this Schema Schema defines a single column in the list. Therefore finally we expect to have these columns with headers:"),(0,r.kt)("p",null,"For more information about JSON schema, also have a look at section ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/propertystore/schema-and-objects"},"JSON Schema")," of the docs."),(0,r.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,r.kt)("admonition",{title:"Your help is needed!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,r.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!")))}d.isMDXComponent=!0},6093:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/list-pipeline-b0eda353ddb6dbadec0f61b13e41a782.png"}}]);