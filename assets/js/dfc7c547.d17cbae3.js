"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[6934],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>u});var t=a(7294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=t.createContext({}),d=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},m=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=d(a),u=s,g=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return a?t.createElement(g,r(r({ref:n},m),{},{components:a})):t.createElement(g,r({ref:n},m))}));function u(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7467:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=a(7462),s=(a(7294),a(3905));const i={id:"messaging",title:"9. Messaging",sidebar_label:"Basics",slug:"/messaging"},r=void 0,o={unversionedId:"guides/messaging/messaging",id:"guides/messaging/messaging",isDocsHomePage:!1,title:"9. Messaging",description:"Since Version: 7.0",source:"@site/docs/guides/messaging/10_messaging.md",sourceDirName:"guides/messaging",slug:"/messaging",permalink:"/docs/messaging",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/messaging/10_messaging.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"messaging",title:"9. Messaging",sidebar_label:"Basics",slug:"/messaging"},sidebar:"tutorialSidebar",previous:{title:"8. Content Handling",permalink:"/docs/guides/contentobject"},next:{title:"Events",permalink:"/docs/guides/messaging/events"}},l=[{value:"Receiving messages",id:"receiving-messages",children:[{value:"Accessing payload",id:"accessing-payload",children:[],level:3},{value:"Using wildcard keys",id:"using-wildcard-keys",children:[],level:3}],level:2},{value:"Sending messages",id:"sending-messages",children:[],level:2},{value:"Report an Issue",id:"report-an-issue",children:[],level:2}],d={toc:l};function m(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 7.0"),(0,s.kt)("p",null,"PIPEFORCE has a built-in messaging system, where application messages can be routed between microservices based on conditions like routing\nkeys for example."),(0,s.kt)("p",null,"By default, as internal message broker RabbitMQ is used: ",(0,s.kt)("a",{parentName:"p",href:"https://www.rabbitmq.com/documentation.html"},"https://www.rabbitmq.com/documentation.html")),(0,s.kt)("p",null,"It's one of the most advanced and most widely used messaging broker in the world."),(0,s.kt)("p",null,"In order to send and receive messages to/from this messaging bus, you have two options:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Develop a microservice using a RabbitMQ client library and deploy it to PIPEFORCE using the ",(0,s.kt)("a",{parentName:"li",href:"../api/commands#servicedeploy-v1"},"service.deploy")," command.\nFor details about writing such a microservice which produces and consumes messages, see the\nsection ",(0,s.kt)("a",{parentName:"li",href:"microservices/messaging"},"messaging and microservices"),"."),(0,s.kt)("li",{parentName:"ul"},"Write pipelines using the ",(0,s.kt)("a",{parentName:"li",href:"../api/commands#messagereceive-v1"},"message.receive"),"\nand ",(0,s.kt)("a",{parentName:"li",href:"../api/commands#messagesend-v1"},"message.send")," commands.")),(0,s.kt)("p",null,"This section will cover the second part: How to write pipelines which send and receive messages to/from the messaging\nsystem."),(0,s.kt)("h2",{id:"receiving-messages"},"Receiving messages"),(0,s.kt)("p",null,"To receive messages in a pipeline, you can use the command ",(0,s.kt)("a",{parentName:"p",href:"../api/commands#messagereceive-v1"},"message.receive"),"."),(0,s.kt)("p",null,"Let's assume you have a pipeline, which sends an email like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - mail.send:\n      to: "sales@company.tld"\n      subject: "New Sales Order"\n      message: "Hello, a new sales order has been created!"\n')),(0,s.kt)("p",null,"Now you would like to listen for new sales orders on the messaging bus. Every time a new such sales order has been\ncreated, we would like to send this email."),(0,s.kt)("p",null,"Let's assume, the unique messaging key ",(0,s.kt)("inlineCode",{parentName:"p"},"sales.order.created")," was defined and communicated accordingly by the integration\nteam. This can be freely designed by the development team."),(0,s.kt)("p",null,"With this information we can now extend our pipeline easily to listen to messages with this key and automatically send\nan email:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - message.receive:\n      key: "sales.order.created"\n\n  - mail.send:\n      to: "sales@company.tld"\n      subject: "New Sales Order"\n      message: "Hello, a new sales order has been created!"\n')),(0,s.kt)("p",null,"As you can see, we added the command ",(0,s.kt)("inlineCode",{parentName:"p"},"message.receive")," at the very beginning. It's important that this command is always\nat the very beginning and its the only ",(0,s.kt)("inlineCode",{parentName:"p"},"message.receive")," command in the pipeline. Any command below ",(0,s.kt)("inlineCode",{parentName:"p"},"message.receive"),"\nwill then be executed every time a message with the given key appears."),(0,s.kt)("p",null,"As soon as you save the pipeline to the property store, a new queue, a binding and a consumer will be automatically\ncreated for you."),(0,s.kt)("p",null,"The pipeline then starts to listen: Any time a message with key ",(0,s.kt)("inlineCode",{parentName:"p"},"sales.order.created")," happens in the messaging bus, this\npipeline will be informed about this and executes any command below ",(0,s.kt)("inlineCode",{parentName:"p"},"message.receive"),"."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Whenever you delete a pipeline with a ",(0,s.kt)("inlineCode",{parentName:"p"},"message.receive")," command in it, the according messaging queue, bindings and\nconsumers will also automatically be deleted. The same is true in case you remove the ",(0,s.kt)("inlineCode",{parentName:"p"},"message.receive")," command\nfrom the pipeline. In case you rename the pipeline or change parameters of the command, the old queue, binding and\nconsumer will be replaced by a new one. So make sure to change such a pipeline only in development mode, never in production."))),(0,s.kt)("h3",{id:"accessing-payload"},"Accessing payload"),(0,s.kt)("p",null,"It's also possible to send data with any message, it's called the ",(0,s.kt)("strong",{parentName:"p"},"payload"),"."),(0,s.kt)("p",null,"Let's assume, the data structure of such a sales order was defined by the integration team and looks like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "someSalesOrderId",\n  "date": "23.05.2022, 13:45",\n  "amount": "234 EUR",\n  "customer": "Acme Inc."\n}\n')),(0,s.kt)("p",null,"This is the payload of a message. Such a payload will be automatically provided in the pipeline body to all commands\nbelow ",(0,s.kt)("inlineCode",{parentName:"p"},"message.receive"),"."),(0,s.kt)("p",null,"So let's use this payload in order to send more information with our email, like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'  pipeline:\n\n    - message.receive:\n        key: "sales.order.created"\n\n    - mail.send:\n        to: "sales@company.tld"\n        subject: "New Sales Order"\n        message: |\n          Hello, a new sales order has been created:\n          Id:       #{body.id}\n          Date:     #{body.date}\n          Amount:   #{body.amount}\n          Customer: #{body.customer}\n')),(0,s.kt)("h3",{id:"using-wildcard-keys"},"Using wildcard keys"),(0,s.kt)("p",null,"In some situations you probably would like to listen to all messages of a certain type. So lets assume you would like to\nbe informed about any sales order changes in the sales department and let's assume the integration team publishes all\nchanges to a message key structure like this:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"sales.order.created"),(0,s.kt)("li",{parentName:"ul"},"sales.order.closed"),(0,s.kt)("li",{parentName:"ul"},"sales.lead.created"),(0,s.kt)("li",{parentName:"ul"},"sales.lead.converted"),(0,s.kt)("li",{parentName:"ul"},"sales.incident.created")),(0,s.kt)("p",null,"Now in case you would like to listen to all messages according to sales orders, but not the other ones, you can use a\nkey pattern like this: ",(0,s.kt)("inlineCode",{parentName:"p"},"sales.order.*"),". Note the asterisk ",(0,s.kt)("inlineCode",{parentName:"p"},"*")," which indicates that you're interested in any message\nstarting with ",(0,s.kt)("inlineCode",{parentName:"p"},"sales.order"),". The asterisk means anything of the third section. So you will be informed about:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"sales.order.created"),(0,s.kt)("li",{parentName:"ul"},"sales.order.closed")),(0,s.kt)("p",null,"But you won't be informed about:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"sales.lead.created"),(0,s.kt)("li",{parentName:"ul"},"sales.lead.converted"),(0,s.kt)("li",{parentName:"ul"},"sales.incident.created")),(0,s.kt)("p",null,"This is how the pipeline could look like for example to listen to all sales order actions:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - message.receive:\n      key: "sales.order.*"\n\n  # Commands to be executed go here...\n')),(0,s.kt)("p",null,"And in this example we listen to all messages which are related to create something in the sales department:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - message.receive:\n      key: "sales.*.created"\n\n  # Commands to be executed go here...\n')),(0,s.kt)("p",null,"Furthermore, you can use the hash ",(0,s.kt)("inlineCode",{parentName:"p"},"#")," in order to indicate any level. So for example if we would like to listen to anything\ninside the sales department, we could use a pipeline like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - message.receive:\n      key: "sales.#"\n\n  # Commands to be executed go here...\n')),(0,s.kt)("p",null,"The hash ",(0,s.kt)("inlineCode",{parentName:"p"},"#")," matches any level of the message key regardless of the number of periods (sections) in it."),(0,s.kt)("h2",{id:"sending-messages"},"Sending messages"),(0,s.kt)("p",null,"To send messages in a pipeline, you can use the command ",(0,s.kt)("a",{parentName:"p",href:"../api/commands#messagesend-v1"},"message.send"),"."),(0,s.kt)("p",null,"Here is an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - message.send: \n     key: "sales.order.created"\n     paloyad: |\n       {\n          "id": "someSalesOrderId",\n          "date": "23.05.2022, 13:45",\n          "amount": "234 EUR",\n          "customer": "Acme Inc."\n        }\n')),(0,s.kt)("p",null,"In case the parameter ",(0,s.kt)("inlineCode",{parentName:"p"},"payload")," is missing, the current body content of the pipeline is used as payload."),(0,s.kt)("p",null,"This sends a new message with key ",(0,s.kt)("inlineCode",{parentName:"p"},"sales.order.created")," and the given payload to the default exchange."),(0,s.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your help is needed!")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,s.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!"))))}m.isMDXComponent=!0}}]);