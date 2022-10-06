"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[5295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7519:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={},o="Events",l={unversionedId:"guides/messaging/events",id:"guides/messaging/events",isDocsHomePage:!1,title:"Events",description:"Since Version: 6.0",source:"@site/docs/guides/messaging/20_events.md",sourceDirName:"guides/messaging",slug:"/guides/messaging/events",permalink:"/docs/guides/messaging/events",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/messaging/20_events.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/messaging"},next:{title:"Emailing",permalink:"/docs/guides/messaging/email"}},s=[{value:"eventKey",id:"eventkey",children:[],level:2},{value:"namespace",id:"namespace",children:[],level:2},{value:"payload",id:"payload",children:[],level:2},{value:"async",id:"async",children:[],level:2},{value:"headers",id:"headers",children:[],level:2},{value:"Listening to events",id:"listening-to-events",children:[{value:"Deep filtering of events",id:"deep-filtering-of-events",children:[],level:3}],level:2},{value:"Sending event",id:"sending-event",children:[],level:2},{value:"Built-in events",id:"built-in-events",children:[],level:2},{value:"Report an Issue",id:"report-an-issue",children:[],level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"events"},"Events"),(0,i.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 6.0"),(0,i.kt)("p",null,"In PIPEFORCE, an event is a special form of a Message."),(0,i.kt)("p",null,"It is an action which happened inside the hub service and is represented by a JSON object with a certain structure like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "eventKey": "string",\n  "namespace": "string",\n  "payload": {JSON},\n  "async": true|false,\n  "headers": {\n    "key": "value",\n    ...\n  }\n}\n')),(0,i.kt)("p",null,"This event JSON object is automatically provided to you in the ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," of the pipeline and can be accessed from there by a pipeline expression (PE)."),(0,i.kt)("h2",{id:"eventkey"},"eventKey"),(0,i.kt)("p",null,"Contains a unique key for this event type. The event keys are typically written in a lower case and dot notation, where each part is separated by a dot."),(0,i.kt)("p",null,"Here are some examples of built-in event keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"property.created")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"property.deleted")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setup.finished"))),(0,i.kt)("p",null,"Events coming from external systems via webhooks must be prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.systemname.")," for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"webhook.weclapp.order.created\n")),(0,i.kt)("p",null,"Custom events (not part of the built-in events) must be prefixed with the reversed internet domain name of the creator. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"com.company.eventname\n")),(0,i.kt)("h2",{id:"namespace"},"namespace"),(0,i.kt)("p",null,"The namespace (= tenant) where this event happened. If null or empty, the event was fired by a global instance."),(0,i.kt)("h2",{id:"payload"},"payload"),(0,i.kt)("p",null,"The optional payload of the event as JSON object. The structure of this payload depends on the event type."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Every event also has the virtual properties ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),", where each term inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," (if there exists any) points to the ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," properties. Virtual means, that these properties are not serialized to JSON and can only be accessed by a pipeline expression (PE). This is handy for filters, since no null check for ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," is necessary here."),(0,i.kt)("p",null,"So these paths point to the same, whereas the left part will never raise a null exception:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"origin = payload.origin")," (the origin value ",(0,i.kt)("strong",{parentName:"li"},"BEFORE")," an event happened)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target = payload.target")," (the final value ",(0,i.kt)("strong",{parentName:"li"},"AFTER")," an event happened)")),(0,i.kt)("p",null,"It depends on the event whether ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," and / or ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," is provided and which structure they have. Please consult the documentation for the certain event."),(0,i.kt)("h2",{id:"async"},"async"),(0,i.kt)("p",null,"It is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", in case this event was sent in an asynchronous way. Otherwise, it is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h2",{id:"headers"},"headers"),(0,i.kt)("p",null,"These are optional name-value-pairs to describe the event. It is a good practice to filter events based on header values and avoid filtering on payload for better performance."),(0,i.kt)("h2",{id:"listening-to-events"},"Listening to events"),(0,i.kt)("p",null,"In case a pipeline should be executed when a certain event was fired, the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen")," command should be used. When the pipeline is deployed, the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen")," registers itself as a listener to the event system. Whenever an event is fired that matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen")," criteria, any subsequent commands of this pipeline gets executed."),(0,i.kt)("p",null,"Lets assume an example: Whenever a new lead was created in Salesforce, the pipeline must send an email to the sales team:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n - event.listen:\n     key: "webhook.salesforce.lead.created"\n - mail:\n     to: "sales@company.tld"\n     subject: "New lead created!"\n')),(0,i.kt)("p",null,"After this pipeline was deployed to the property store, it will be executed automatically any time a new event with key ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.salesforce.lead.created")," occurs. In this case, a new email will be sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"sales@company.tld"),"."),(0,i.kt)("p",null,"Note: Each pipeline can define exactly one ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen")," command and it must be the very first command in the pipeline."),(0,i.kt)("h3",{id:"deep-filtering-of-events"},"Deep filtering of events"),(0,i.kt)("p",null,"Besides the event key, each event can also be filtered by its properties. So a pipeline gets executed only in case such a filter evaluated with ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". To do so, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," parameter of the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen")," command and place a pipeline expression here. Since the event object is automatically provided in the ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," for you, you can access it there from inside your pipeline expression (PE). For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n - event.listen:\n     key: webhook.salesforce.lead.created\n     filter: \"#{body.target.CountryCode == 'DE'}\"\n - mail:\n     to: sales@company.tld\n     subject: New lead created in #{body.target.CountryCode}!\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," parameter you can place a pipeline expression (PE). If this expression evaluates with ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", all subsequent commands after ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen")," will be executed."),(0,i.kt)("p",null,"In this example, we assume that the event contains the Salesforce ",(0,i.kt)("inlineCode",{parentName:"p"},"Lead")," object. So, we can filter for the ",(0,i.kt)("inlineCode",{parentName:"p"},"CountryCode")," here. But this depends on the implementation of the webhook."),(0,i.kt)("h2",{id:"sending-event"},"Sending event"),(0,i.kt)("p",null,"In order to send an event, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.send")," command. Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - event.send:\n      key: "com.company.myevent"\n')),(0,i.kt)("p",null,"Every time this pipeline gets executed, it will send a new event with key ",(0,i.kt)("inlineCode",{parentName:"p"},"com.company.myevent"),". Optionally, you also set the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," of the event using its ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," parameter. This can be a literal or a pipeline expression (PE) which points to an object to be attached to the payload."),(0,i.kt)("p",null,"Note: Whenever you send a custom event, you need to prefix it with the reversed internet address of your company. In this example it is ",(0,i.kt)("inlineCode",{parentName:"p"},"com.company"),". Otherwise, it could be that your event gets dropped or causes an exception."),(0,i.kt)("h2",{id:"built-in-events"},"Built-in events"),(0,i.kt)("p",null,"In order to get a reference about all built-in events, see the ",(0,i.kt)("a",{parentName:"p",href:"../../api/events"},"Event Reference")),(0,i.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your help is needed!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,i.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!"))))}d.isMDXComponent=!0}}]);