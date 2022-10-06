"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[3172],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=o,u=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return a?n.createElement(u,r(r({ref:t},d),{},{components:a})):n.createElement(u,r({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7007:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const i={},r="Webhooks",s={unversionedId:"guides/messaging/webhooks",id:"guides/messaging/webhooks",isDocsHomePage:!1,title:"Webhooks",description:"Since Version: 6.0",source:"@site/docs/guides/messaging/40_webhooks.md",sourceDirName:"guides/messaging",slug:"/guides/messaging/webhooks",permalink:"/docs/guides/messaging/webhooks",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/messaging/40_webhooks.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Emailing",permalink:"/docs/guides/messaging/email"},next:{title:"10. Jobs",permalink:"/docs/guides/jobs"}},l=[{value:"Create a Webhook",id:"create-a-webhook",children:[],level:2},{value:"Trigger a Webhook",id:"trigger-a-webhook",children:[],level:2},{value:"Link a Webhook to a Pipeline",id:"link-a-webhook-to-a-pipeline",children:[],level:2},{value:"Show existing Webhooks",id:"show-existing-webhooks",children:[],level:2},{value:"Edit a Webhook",id:"edit-a-webhook",children:[],level:2},{value:"Delete a Webhook",id:"delete-a-webhook",children:[],level:2},{value:"Receiving Files via Webhook",id:"receiving-files-via-webhook",children:[],level:2},{value:"Report an Issue",id:"report-an-issue",children:[],level:2}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webhooks"},"Webhooks"),(0,o.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 6.0"),(0,o.kt)("p",null,"A webhook is a unique url of your system which is communicated to external services. In case these external services call the webhook url, this triggers an action on your target server."),(0,o.kt)("p",null,"In PIPEFORCE, you can create ",(0,o.kt)("strong",{parentName:"p"},"custom")," webhooks and link them to predefined pipelines. When called, it produces an internal event message which in turn can execute a pipeline using the commands ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/commands#eventlisten-v1"},(0,o.kt)("inlineCode",{parentName:"a"},"event.listen"))," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/commands#messagereceive-v1"},(0,o.kt)("inlineCode",{parentName:"a"},"message.receive")),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Replace any url ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"https://hub-try.pipeforce.org"))," from the examples shown on this page by the url of ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/namespaces"},"your PIPEFORCE instance"),"."))),(0,o.kt)("p",null,"The url of such an PIPEFORCE webhook has a format similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://hub-try.pipeforce.org/api/v3/command/webhook.receive?token=<token>\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<token>")," by the token of your webhook. See below to get such an token."),(0,o.kt)("li",{parentName:"ul"},"The token is sometimes also referred to as the ",(0,o.kt)("strong",{parentName:"li"},"uuid"),", the unique id, of a webhook. "),(0,o.kt)("li",{parentName:"ul"},"It's also possible to place the ",(0,o.kt)("inlineCode",{parentName:"li"},"token")," param as request header (recommended, because it is more secure).")))),(0,o.kt)("h2",{id:"create-a-webhook"},"Create a Webhook"),(0,o.kt)("p",null,"Before some external service can call your webhook, you have to create and endpoint for it. "),(0,o.kt)("p",null,"You can create such a webhook using the command ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/commands#webhookput-v1"},(0,o.kt)("inlineCode",{parentName:"a"},"webhook.put")),". Here is an example using it in a pipeline:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - webhook.put:\n      eventKey: "webhook.lead.created"\n')),(0,o.kt)("p",null,"Alternatively, you can use the CLI to create the Webhook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pi command webhook.put eventKey=webhook.lead.created\n")),(0,o.kt)("p",null,"As ",(0,o.kt)("inlineCode",{parentName:"p"},"eventKey")," define the internal unique name of the webhook. It's good practise that this name is lower case, grouped by periods and starts with prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook."),". The result after executing the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/commands#webhookput-v1"},(0,o.kt)("inlineCode",{parentName:"a"},"webhook.put"))," command is a JSON document like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "eventKey": "webhook.lead.created",\n  "webhookUrl": "https://hub-try.pipeforce.org/api/v3/webhook.receive?token=a29a4f16-989d-48c8-ab54-7b6150733ba1",\n  "uuid": "a29a4f16-989d-48c8-ab54-7b6150733ba1",\n  ...\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid")," (also called ",(0,o.kt)("strong",{parentName:"p"},"token"),") is the unique identifier of your webhook. Since it is very hard to guess this token, it is used to secure your webhook. The external services can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"webhookUrl")," in order to call your webhook."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Make sure you keep the ",(0,o.kt)("inlineCode",{parentName:"li"},"uuid")," (token) secure and only communicate it to the external partners via a secure channel."),(0,o.kt)("li",{parentName:"ul"},"Once created, ",(0,o.kt)("strong",{parentName:"li"},"the uuid cannot be changed afterwards")," since it is the link of external services to your internal actions.")))),(0,o.kt)("p",null,"In case you're using the PIPEFORCE Developer Portal, you can create a Webhook with a few clicks:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(310).Z})),(0,o.kt)("p",null,'Define an event key in the creation dialog and click "Add":'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3410).Z})),(0,o.kt)("p",null,"Finally, the Webhook gets listed and you can get its token from the list:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(763).Z})),(0,o.kt)("h2",{id:"trigger-a-webhook"},"Trigger a Webhook"),(0,o.kt)("p",null,"After you have setup the Webhook successfully, it can be triggered (called) from the outside. To do so, send a GET or POST HTTP request to the webhook url which was returned when you created it:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://hub-try.pipeforce.org/api/v3/command/webhook.receive?token=abcdef")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In order to secure the ",(0,o.kt)("strong",{parentName:"p"},"token")," in your url, you should always prefer a ",(0,o.kt)("strong",{parentName:"p"},"HTTPS")," connection between the two systems (which is by default always the case in PIPEFORCE), and send the ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," parameter in the body of a ",(0,o.kt)("strong",{parentName:"p"},"POST")," request, or as ",(0,o.kt)("strong",{parentName:"p"},"HTTP Header")," instead of a request parameter. PIPEFORCE supports all three methods. But it depends on the caller of the webhook, which approach it supports."))),(0,o.kt)("h2",{id:"link-a-webhook-to-a-pipeline"},"Link a Webhook to a Pipeline"),(0,o.kt)("p",null,"After you have successfully setup the webhook, any time the webhook url is triggered (called) from the outside, a new message is produced inside PIPEFORCE, which can then be consumed by any pipeline. To do so, use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/commands#eventlisten-v1"},(0,o.kt)("inlineCode",{parentName:"a"},"event.listen"))," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/commands#messagereceive-v1"},(0,o.kt)("inlineCode",{parentName:"a"},"message.receive"))," command to listen for such new event messages. Here\u2019s an example which sends an email whenever a new lead was created using a webhook with the ",(0,o.kt)("inlineCode",{parentName:"p"},"eventKey")," =",(0,o.kt)("inlineCode",{parentName:"p"},"webhook.lead.created"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n - event.listen:\n     eventKey: webhook.lead.created\n - mail:\n     to: name@company.tld\n     subject: "New lead was created!"\n     body: "#{@convert.fromBase64(body.origin)}"\n')),(0,o.kt)("p",null,"The input body of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/commands#eventlisten-v1"},(0,o.kt)("inlineCode",{parentName:"a"},"event.listen"))," command is the payload of the event message submitted from the outside caller."),(0,o.kt)("p",null,"In case the sender has sent some payload in the body of the webhook request, this payload is made available for you as base64 encoded string in the ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," field of the event. To access this data, you have to convert this value as shown in this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#{@convert.fromBase64(body.origin)}\n")),(0,o.kt)("p",null,"For security reasons, by default, the webhook pipeline is executed with very limited ",(0,o.kt)("inlineCode",{parentName:"p"},"anonymousUser")," privileges. So, make sure that you use only commands in your pipeline which can be executed by this user. In case you need more privileges, you can use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/commands#iamrunas-v1"},(0,o.kt)("inlineCode",{parentName:"a"},"iam.run.as"))," command to switch to the privileges of the given user before executing the command. See the IAM portal for the permissions (or roles) of a given user. Also see ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/security/permissions"},"Groups, Roles, and Permissions")," for more details on user privileges / permissions."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Some words about security and webhooks")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Since a Webhook triggers the execution of pipelines, they can be very powerful. This power also comes with ",(0,o.kt)("strong",{parentName:"p"},"additional responsibility")," for you, the app developer. Make sure you have sufficient security testings in place, and you have secured your webhook pipelines accordingly."))),(0,o.kt)("h2",{id:"show-existing-webhooks"},"Show existing Webhooks"),(0,o.kt)("p",null,"To list all existing webhooks, you can use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/commands#webhookget-v1"},(0,o.kt)("inlineCode",{parentName:"a"},"webhook.get"))," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pi command webhook.get\n")),(0,o.kt)("p",null,"You will see a JSON / YAML list with details about all existing webhooks."),(0,o.kt)("p",null,"In order to get the details of a single webhook, use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/commands#webhookget-v1"},(0,o.kt)("inlineCode",{parentName:"a"},"webhook.get"))," with the param ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid"),", where uuid is the token of the webhook you want to list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pi command webhook.get uuid=<yourWebhookUuid>\n")),(0,o.kt)("p",null,"You can also list all existing Webhooks in the Portal:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(763).Z})),(0,o.kt)("h2",{id:"edit-a-webhook"},"Edit a Webhook"),(0,o.kt)("p",null,"In order to edit an existing webhook, you can use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/commands#webhookput-v1"},(0,o.kt)("inlineCode",{parentName:"a"},"webhook.put"))," command, and set the uuid (= token) of the webhook to edit. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pi command webhook.put uuid=abcdef eventKey=webhook.changed.key\n")),(0,o.kt)("h2",{id:"delete-a-webhook"},"Delete a Webhook"),(0,o.kt)("p",null,"In order to delete an existing webhook, you can use the command ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/commands#webhookdelete-v1"},(0,o.kt)("inlineCode",{parentName:"a"},"webhook.delete")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pi command webhook.delete uuid=abcdef\n")),(0,o.kt)("p",null,"And then, set the uuid of the webhook you want to delete."),(0,o.kt)("p",null,'You can also delete a Webhook by using the Portal in the "Webhooks" section.'),(0,o.kt)("h2",{id:"receiving-files-via-webhook"},"Receiving Files via Webhook"),(0,o.kt)("p",null,"It is also possible to send files as a playload with a webhook. To do so, execute the request as multipart POST with the body formatted as ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'POST /api/v3/command/webhook.receive?uuid=abcdef HTTP/1.1 \nHost: hub-<NS>.pipefore.net\nContent-Type: multipart/form-data;boundary="boundary" \n\n--boundary \nContent-Disposition: form-data; name="file"; filename="fileA.pdf" \n\n<CONTENT FILE fileA.pdf GOES HERE...>\n--boundary \nContent-Disposition: form-data; name="file"; filename="fileB.pdf" \n\n<CONTENT FILE fileB.pdf GOES HERE...>\n--boundary--\n')),(0,o.kt)("p",null,"More information about multipart POST requests can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST")),(0,o.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your help is needed!")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,o.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!"))))}d.isMDXComponent=!0},3410:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-webhook-create-dialog-edd3b923a990e3ff0a2e58961fc9181f.png"},310:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-webhook-create-6ad6cd0eac9eb415f986b4c7b211cb62.png"},763:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-webhook-listing-0162ed766d0b1ec4c4f603557df6a846.png"}}]);