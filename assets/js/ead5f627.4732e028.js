"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),k=i,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||o;return n?a.createElement(u,r(r({ref:t},s),{},{components:n})):a.createElement(u,r({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3250:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={},r="Gateways",l={unversionedId:"guides/workflows/gateways",id:"guides/workflows/gateways",isDocsHomePage:!1,title:"Gateways",description:"A gateway in BPMN is a branch of the workflow. Depending on a condition, the flow of the process can branch into different directions.",source:"@site/docs/guides/workflows/020_gateways.md",sourceDirName:"guides/workflows",slug:"/guides/workflows/gateways",permalink:"/docs/guides/workflows/gateways",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/workflows/020_gateways.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/guides/workflows/basics"},next:{title:"Variables",permalink:"/docs/guides/workflows/variables"}},p=[{value:"Where to define gateways conditions?",id:"where-to-define-gateways-conditions",children:[],level:2},{value:"How to design gateways",id:"how-to-design-gateways",children:[],level:2},{value:"Examples of gateway conditions",id:"examples-of-gateway-conditions",children:[{value:"Condition for dropdown",id:"condition-for-dropdown",children:[],level:3},{value:"Condition for checkbox",id:"condition-for-checkbox",children:[],level:3},{value:"Condition for value",id:"condition-for-value",children:[],level:3},{value:"Multiple conditions",id:"multiple-conditions",children:[],level:3}],level:2}],d={toc:p};function s(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gateways"},"Gateways"),(0,i.kt)("p",null,"A gateway in BPMN is a branch of the workflow. Depending on a condition, the flow of the process can branch into different directions."),(0,i.kt)("h2",{id:"where-to-define-gateways-conditions"},"Where to define gateways conditions?"),(0,i.kt)("p",null,"In this example, depending on whether the supervisor has approved or declined the vacation request, the workflow should execute the \u201cSend declined email\u201d or the \u201cSend approved email\u201d task. For this, we need to define rules on the gateway edges:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To define the rule for the decline gateway, select the ",(0,i.kt)("strong",{parentName:"p"},"declined")," edge of the gateway and fill-in this condition: ",(0,i.kt)("inlineCode",{parentName:"p"},"${vacationApproved == false}"),":  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(9848).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"This makes sure that this branch is executed in case the supervisor set ",(0,i.kt)("inlineCode",{parentName:"p"},"vacationApproved")," to false in the task form.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Repeat these steps for the task \u201cSend approved email\u201d, and set the condition to",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"${vacationApproved == true}"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"SAVE")," to save the current state of the BPMN workflow."))),(0,i.kt)("h2",{id:"how-to-design-gateways"},"How to design gateways"),(0,i.kt)("p",null,"The gateway design is defined by a specific expression language named ",(0,i.kt)("em",{parentName:"p"},"JUEL"),". Below, you will find that the most important operators are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Arithmetic"),":\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"+"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"-"),"\xa0(binary),\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"*"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"/"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"div"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"%"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"mod"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"-"),"\xa0(unary)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Logical"),":\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"and"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"&&"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"or"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"||"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"not"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Relational"),":\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"=="),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"eq"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"!="),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"ne"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"<"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"lt"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},">"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"gt"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"<="),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"ge"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},">="),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"le"),". Comparisons can be made against other values, or against boolean, string, integer, or floating point literals."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Empty"),": The\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"empty"),"\xa0operator is a prefix operation, that can be used to determine whether a value is\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"\xa0or empty."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Conditional"),":\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"A ? B : C"),". Evaluate\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"B"),"\xa0or\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"C"),", depending on the result of the evaluation of\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"A"),".")),(0,i.kt)("p",null,"For more details see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javaee/5/tutorial/doc/bnahq.html"},"https://docs.oracle.com/javaee/5/tutorial/doc/bnahq.html")),(0,i.kt)("h2",{id:"examples-of-gateway-conditions"},"Examples of gateway conditions"),(0,i.kt)("h3",{id:"condition-for-dropdown"},"Condition for dropdown"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Condition refers to a field named \u201cdecision\u201d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Field provides a dropdown list for the user (Approve, Decline, or Delegate)  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(4358).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Gateway should represent the \u201cApprove\u201d selection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Condition looks like this:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(8784).Z})))),(0,i.kt)("h3",{id:"condition-for-checkbox"},"Condition for checkbox"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Condition refers to a field named \u201cchecked\u201d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Field provides a checkbox  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(3270).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Gateway should represent the situation that the checkbox is ticked")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Condition looks like this:  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(1711).Z})))),(0,i.kt)("p",null,"${ checked } works as well. Similarly, ${ !checked } can be used in place of ${ checked == false }"),(0,i.kt)("h3",{id:"condition-for-value"},"Condition for value"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Condition refers to a field named \u201cKosten\u201d  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(8960).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Field provides the option to type in numbers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Gateway should represent the situation that the value is > 100, but < 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Condition looks like this:  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(7538).Z})))),(0,i.kt)("h3",{id:"multiple-conditions"},"Multiple conditions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Condition refers to the fields: \u201cdecision\u201d and \u201cchecked\u201d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Field \u201cdecision\u201d provides a dropdown list for the user (Approve, Decline, or Delegate)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Field \u201cchecked\u201d provides a checkbox")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Gateway should represent the situation that:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u201cApproved\u201d is selected from dropdown"),(0,i.kt)("li",{parentName:"ul"},"Tick is set for \u201cchecked\u201d"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Condition looks like this:  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(3540).Z})))))}s.isMDXComponent=!0},9848:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/grafik-20210727-131453-1e05d3ea8acc73c886a661030ecbd63e.png"},4358:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20211026-042805-55df2d65ccd3d0dba61eabf7ed0d5fe3.png"},8784:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20211026-043538-290b078849f3e185739b2d31e3d6940e.png"},1711:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20211026-044236-75f9fc7547a16fc39600109ad2daf6f6.png"},3540:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20211026-045846-4bf3b6147b314703ba3398e5d81c68b7.png"},3270:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20211026-050043-ed65132b5a45df329a2c5d0ca810bbdd.png"},8960:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20211026-050320-e12800a70e0980ed2df421fbd5bb0f12.png"},7538:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20211026-050440-18e740a81ec080624b135495a7a6d6ad.png"}}]);