"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[2027],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3410:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={},p="Create a new Form",s={unversionedId:"tutorials/beginner/create-form",id:"tutorials/beginner/create-form",isDocsHomePage:!1,title:"Create a new Form",description:"Estimated time: 30 min.",source:"@site/docs/tutorials/beginner/30_create-form.md",sourceDirName:"tutorials/beginner",slug:"/tutorials/beginner/create-form",permalink:"/docs/tutorials/beginner/create-form",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorials/beginner/30_create-form.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a new App",permalink:"/docs/tutorials/beginner/create-app"},next:{title:"Create a new List",permalink:"/docs/tutorials/beginner/create-list"}},m=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Intro",id:"intro",children:[],level:2},{value:"1 - Create your form schema",id:"1---create-your-form-schema",children:[],level:2},{value:"2 - Create your form layout",id:"2---create-your-form-layout",children:[],level:2},{value:"3 - Open your new form",id:"3---open-your-new-form",children:[],level:2},{value:"4 - Change the layout of your form",id:"4---change-the-layout-of-your-form",children:[],level:2}],c={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-new-form"},"Create a new Form"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Estimated time:")," 30 min."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PIPEFORCE Enterprise 7.0 or higher"),(0,o.kt)("li",{parentName:"ul"},"You have a valid PIPEFORCE Developer account"),(0,o.kt)("li",{parentName:"ul"},"You have created and published a new app (in this tutorial we assume it has the name",(0,o.kt)("inlineCode",{parentName:"li"},"myapp42"),").")),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"In this tutorial we gonna create an example form where you can add person data sets ",(0,o.kt)("strong",{parentName:"p"},"using the online workbench")," which will finally look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151284979/grafik-20210720-140139.png?api=v2",alt:null})),(0,o.kt)("h2",{id:"1---create-your-form-schema"},"1 - Create your form schema"),(0,o.kt)("p",null,"The first step is to create a form schema. The schema defines the data structure of your form. In order to create this, follow these instructions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login to your portal https://YOUR","_","NAMESPACE.pipeforce.net.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to LOW CODE \u2192 Workbench.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the node of the app in the tree where you would like to create the form inside. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"gobal/app/myapp42"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the plus icon at the top (beside the search box).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"new property")," view opens:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"As a property key use the value ",(0,o.kt)("inlineCode",{parentName:"li"},"global/app/MY_APP/object/person/v1/schema"),". Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"MY_APP")," with the name of the app you would like to create the form inside, for example ",(0,o.kt)("inlineCode",{parentName:"li"},"myapp24"),". ",(0,o.kt)("strong",{parentName:"li"},"Do use only lower case letters and don\u2019t use special characters or spaces!")),(0,o.kt)("li",{parentName:"ol"},"As mime type select ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json; type=schema"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click SAVE:  "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151284979/grafik-20210720-131608.png?api=v2",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The new schema was created and pre-filled with an example person schema.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Later you can edit this form schema and remove, change or add data fields for your form here. For this tutorial, do not change anything and leave it as it is."))),(0,o.kt)("h2",{id:"2---create-your-form-layout"},"2 - Create your form layout"),(0,o.kt)("p",null,"After you have created the form schema (= the data structure of your form) its time to create the layout of the form (= how the form should look like). To do so, follow these instructions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the property tree, select your app and click on the plus icon to create a new property inside.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"new property")," view opens:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"As a property key use the value ",(0,o.kt)("inlineCode",{parentName:"li"},"global/app/MY_APP/form/person"),". Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"MY_APP")," with the name of the app you would like to create the form inside, for example ",(0,o.kt)("inlineCode",{parentName:"li"},"myapp24"),". ",(0,o.kt)("strong",{parentName:"li"},"Do use only lower case letters and don\u2019t use special characters or spaces!")),(0,o.kt)("li",{parentName:"ol"},"As mime type select ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json; type=form"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click SAVE.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A new form layout was created for you with pre-configured title and configuration.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Leave this layout configuration as it is.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you do not specify any layout information in here, the default layout will be used and all fields from the form schema will be displayed in vertical format."))),(0,o.kt)("h2",{id:"3---open-your-new-form"},"3 - Open your new form"),(0,o.kt)("p",null,"After the form schema and the form layout have been created, you can open your form. To do so follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to All Apps")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the app you created before")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on person")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now should see the form with the example fields:  "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151284979/grafik-20210720-140250.png?api=v2",alt:null})))),(0,o.kt)("p",null,"Congrats, you have created your first custom form!"),(0,o.kt)("h2",{id:"4---change-the-layout-of-your-form"},"4 - Change the layout of your form"),(0,o.kt)("p",null,"Now we gonna change the layout of your form a bit. To do so, we add a custom layout to the form layout property. Follow these instructions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your form layout in the property tree, for example global/app/myapp42/form/person and switch to content edit mode.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace the content of the property by the content below and click SAVE (Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"myapp42")," in the content below in \u201cschema\u201d and \u201coutput\u201d line with the name of the app you would like to create the form for. ",(0,o.kt)("strong",{parentName:"p"},"Do use only lower case letters and don\u2019t use special characters or spaces!)"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Add person",\n  "description": "Add a new person",\n  "schema": "property.list?filter=global/app/myapp42/object/person/v1/schema",\n  "output": "global/app/myapp42/object/person/v1/instance/%23%7Bvar.property.uuid%7D",\n    "layout": {\n      "orientation": "vertical",\n      "items": [\n        {\n        "orientation": "horizontal",\n        "items": [\n          {\n          "field": "firstName"\n          },\n          {\n          "field": "lastName"\n          }]\n        },\n        {\n          "field": "age"\n        },\n        {\n          "field": "gender"\n        },\n        {\n          "field": "birthDate"\n        }\n      ]\n    }\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"All Apps")," and select your app")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now you should see that the \u201cperson\u201d tile has changed to \u201cAdd person\u201d + description. Click it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Here you can see the changed layout: ",(0,o.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"lastName")," is now in the same line (horizontal) and all other fields are vertical:  "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151284979/grafik-20210720-140139.png?api=v2",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can learn more about form layouts and orientation in PIPEFORCE here: ",(0,o.kt)("a",{parentName:"p",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/1010991217"},"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/1010991217")," and if you would like to change color or designs of the form fields, have a look here: ",(0,o.kt)("a",{parentName:"p",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/1011089441"},"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/1011089441")," . More details about the adaptation of the form schema, you will find here: ",(0,o.kt)("a",{parentName:"p",href:"https://logabit.atlassian.net/l/c/7NdsFNrA"},"https://logabit.atlassian.net/l/c/7NdsFNrA"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Try out your form and add some new person data sets. In the next tutorial you will learn how to display them in a list."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have two monitors, its very handy to show the resulting form in the browser on one monitor while editing its schema and layout in another monitor. This way you can very easily change, publish and then refresh your browser."))))}u.isMDXComponent=!0}}]);