"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[8611],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6722:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p="Events",s={unversionedId:"guides/events",id:"guides/events",isDocsHomePage:!1,title:"Events",description:"In PIPEFORCE an event is represented by a JSON object with a certain structure like this:",source:"@site/docs/guides/events.md",sourceDirName:"guides",slug:"/guides/events",permalink:"/docs/guides/events",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/events.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Downloads",permalink:"/docs/guides/downloads"},next:{title:"Buttons",permalink:"/docs/guides/form-buttons"}},d=[{value:"eventKey",id:"eventkey",children:[],level:2},{value:"namespace",id:"namespace",children:[],level:2},{value:"payload",id:"payload",children:[],level:2},{value:"async",id:"async",children:[],level:2},{value:"headers",id:"headers",children:[],level:2},{value:"Deep filtering for events",id:"deep-filtering-for-events",children:[],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"events"},"Events"),(0,i.kt)("p",null,"In PIPEFORCE an event is represented by a JSON object with a certain structure like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "eventKey": "string",\n  "namespace": "string",\n  "payload": {JSON},\n  "async": true|false,\n  "headers": {\n    "key": "value",\n    ...\n  }\n}\n')),(0,i.kt)("p",null,"This event JSON object is automatically provided to you in the ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," of the pipeline and can be accessed from there by a pipeline expression (PE)."),(0,i.kt)("h2",{id:"eventkey"},"eventKey"),(0,i.kt)("p",null,"Contains a unique key for this event type. The event keys are typically written lower case and in a dot notation where each part is separated by a dot."),(0,i.kt)("p",null,"Here are some examples of built-in event keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"property.created")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"property.deleted")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setup.finished"))),(0,i.kt)("p",null,"Events coming from external systems via webhooks must be prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.systemname.")," for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"webhook.weclapp.order.created\n")),(0,i.kt)("p",null,"Custom events (not part of the built-in events) must be prefixed with the reversed internet domain name of the creator. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"com.company.eventname\n")),(0,i.kt)("h2",{id:"namespace"},"namespace"),(0,i.kt)("p",null,"The namespace (= tenant) where this event happened. If null or empty, the event was fired by a global instance."),(0,i.kt)("h2",{id:"payload"},"payload"),(0,i.kt)("p",null,"The optional payload of the event as JSON object. The structure of this payload depends on the event type."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Every event also has the virtual properties ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," whereas each in term point to the ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," properties inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," (if there exists any). Virtual means, these properties are not serialized to JSON and can only be accessed by a pipeline expression (PE). This is handy for filters, since no null check for ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," is necessary here."),(0,i.kt)("p",null,"So these paths point to the same whereas the left part will never raise a null exception:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"origin = payload.origin")," (the origin value ",(0,i.kt)("strong",{parentName:"li"},"BEFORE")," an event happened)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target = payload.target")," (the final value ",(0,i.kt)("strong",{parentName:"li"},"AFTER")," an event happened)")),(0,i.kt)("p",null,"It depends on the event whether ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," and / or ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," is provided and which structure they have. Please consult the documentation for the certain event."),(0,i.kt)("h2",{id:"async"},"async"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"true"),", in case this event was sent in asynchronous way. Otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h2",{id:"headers"},"headers"),(0,i.kt)("p",null,"Optional name-value-pairs to describe the event. Its good practise to filter events based on header values and avoid filtering on payload because of performance."),(0,i.kt)("h1",{id:"listening-for-events"},"Listening for events"),(0,i.kt)("p",null,"In case a pipeline should be executed when a certain event was fired, the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen")," command can be used. When the pipeline is deployed, the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen")," registers itself as listener to the event system. Whenever an event is fired which matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen")," criteria, any subsequent commands of this pipeline are executed then."),(0,i.kt)("p",null,"Lets assume an example: Whenever a new lead was created in Salesforce, the pipeline must send an email to the sales team:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n - event.listen:\n     key: webhook.salesforce.lead.created\n - mail:\n     to: sales@company.tld\n     subject: New lead created!\n")),(0,i.kt)("p",null,"After this pipeline was deployed to the property store, it will be executed automatically any time a new event with key ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.salesforce.lead.created")," happens. In this case a new email will be sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"sales@company.tld"),"."),(0,i.kt)("p",null,"Note: Each pipeline can define exactly one ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen")," command an it must be the very first command in the pipeline."),(0,i.kt)("h2",{id:"deep-filtering-for-events"},"Deep filtering for events"),(0,i.kt)("p",null,"Beside the event key, each event can also be filtered by its properties. So a pipeline gets executed only in case such a filter evaluated with ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". To do so, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," parameter of the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen")," command and place a pipeline expression here. Since the event object is automatically provided in the ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," for you, you can access it there from inside your pipeline expression (PE). For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n - event.listen:\n     key: webhook.salesforce.lead.created\n     filter: \"#{body.target.CountryCode == 'DE'}\"\n - mail:\n     to: sales@company.tld\n     subject: New lead created in #{body.target.CountryCode}!\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," parameter you can place a pipeline expression (PE). If this expression evaluates with ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", all subsequent commands after ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen")," will be executed."),(0,i.kt)("p",null,"In this example we assume that the event contains the Salesforce ",(0,i.kt)("inlineCode",{parentName:"p"},"Lead")," object so we can filter for the ",(0,i.kt)("inlineCode",{parentName:"p"},"CountryCode")," here. But this depends on the implementation of the webhook."),(0,i.kt)("h1",{id:"sending-event"},"Sending event"),(0,i.kt)("p",null,"In order to send an event, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.send")," command. Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  - event.send:\n      key: com.company.myevent\n")),(0,i.kt)("p",null,"Every time this pipeline gets executed, it will send a new event with key ",(0,i.kt)("inlineCode",{parentName:"p"},"com.company.myevent"),". Optionally you also set the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," of the event using its ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," parameter. This can be a literal or a pipeline expression (PE) which points to an object to be attached to the payload."),(0,i.kt)("p",null,"Note: Whenever you send a custom event you need to prefix it with the reversed internet address of your company. In this example it is ",(0,i.kt)("inlineCode",{parentName:"p"},"com.company"),". Otherwise it could be, that your event gets dropped or causes an exception."),(0,i.kt)("h1",{id:"built-in-events"},"Built-in events"),(0,i.kt)("p",null,"These are events which come out-of-the-box with PIPEFORCE. Here is a list of those officially supported events:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Event Key")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Payload"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"property.created")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired every time a new property was created in the property store."),(0,i.kt)("td",{parentName:"tr",align:null},"Contains as ",(0,i.kt)("inlineCode",{parentName:"td"},"origin")," the value ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," and as ",(0,i.kt)("inlineCode",{parentName:"td"},"target")," the property created before.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},'<br/>{<br/>  "payload": {<br/>    "origin": null,<br/>    "target": {<br/>      "uuid": "string",<br/>      "key": "string",<br/>      "type": "string",<br/>      "value": "string",<br/>      "created": timestamp,<br/>      "updated": timestamp<br/>    }<br/>  }<br/>}<br/>'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"property.copied")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired every time a property was copied in the property store."),(0,i.kt)("td",{parentName:"tr",align:null},"Contains as ",(0,i.kt)("inlineCode",{parentName:"td"},"origin")," the source property and as ",(0,i.kt)("inlineCode",{parentName:"td"},"target")," the property where source was copied to.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},'<br/>{<br/>  "payload": {<br/>    "origin": {<br/>      "uuid": "string",<br/>      "key": "string",<br/>      "type": "string",<br/>      "value": "string",<br/>      "created": timestamp,<br/>      "updated": timestamp<br/>    },<br/>    "target": {<br/>      "uuid": "string",<br/>      "key": "string",<br/>      "type": "string",<br/>      "value": "string",<br/>      "created": timestamp,<br/>      "updated": timestamp<br/>    }<br/>  }<br/>}<br/>'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"property.deleted")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired every time a property was deleted from the property store."),(0,i.kt)("td",{parentName:"tr",align:null},"Contains as ",(0,i.kt)("inlineCode",{parentName:"td"},"origin")," the property which was deleted and as target ",(0,i.kt)("inlineCode",{parentName:"td"},"null"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},'<br/>{<br/>  "payload": {<br/>    "origin": {<br/>      "uuid": "string",<br/>      "key": "string",<br/>      "type": "string",<br/>      "value": "string",<br/>      "created": timestamp,<br/>      "updated": timestamp<br/>    },<br/>    "target": null<br/>  }<br/>}<br/>'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"property.moved")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired every time a property was moved from one key to another key."),(0,i.kt)("td",{parentName:"tr",align:null},"Contains as ",(0,i.kt)("inlineCode",{parentName:"td"},"origin")," the key of the source property and as ",(0,i.kt)("inlineCode",{parentName:"td"},"target")," the key of the property where it was moved to.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},'<br/>{<br/>  "payload": {<br/>    "origin": "string",<br/>    "target": "string"<br/>  }<br/>}<br/>'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"property.updated")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired after a property has been updated in the property store."),(0,i.kt)("td",{parentName:"tr",align:null},"Contains as ",(0,i.kt)("inlineCode",{parentName:"td"},"origin")," the property before the update and as ",(0,i.kt)("inlineCode",{parentName:"td"},"target")," the property after the update.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},'<br/>{<br/>  "payload": {<br/>    "origin": {<br/>      "uuid": "string",<br/>      "key": "string",<br/>      "type": "string",<br/>      "value": "string",<br/>      "created": timestamp,<br/>      "updated": timestamp<br/>    },<br/>    "target": {<br/>      "uuid": "string",<br/>      "key": "string",<br/>      "type": "string",<br/>      "value": "string",<br/>      "created": timestamp,<br/>      "updated": timestamp<br/>    }<br/>  }<br/>}<br/>'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"setup.finished")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired after the hub service was successfully started and all setup scripts have been executed successfully."),(0,i.kt)("td",{parentName:"tr",align:null},"This event contains no payload.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"setup.starting")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired after the hub service was successfully started but right before all setup scripts will be executed."),(0,i.kt)("td",{parentName:"tr",align:null},"This event contains no payload.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hub.context.started")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired after the hub service was successfully started."),(0,i.kt)("td",{parentName:"tr",align:null},"Contains as ",(0,i.kt)("inlineCode",{parentName:"td"},"origin")," the configuration of the context as key-value-pairs. The ",(0,i.kt)("inlineCode",{parentName:"td"},"target")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"null"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},'<br/>{<br/>  "payload": {<br/>    "origin": {<br/>      "key1": "value1",<br/>      "key2": "value2"<br/>    },<br/>    "target": null<br/>  }<br/>}<br/>'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"iam.bruteforce.detected")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired every time a potential brute force attempt was detected."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"iam.login.error")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired every time a login attempt has been failed."),(0,i.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);