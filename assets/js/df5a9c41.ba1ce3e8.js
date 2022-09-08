"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[3172],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,k=m["".concat(s,".").concat(c)]||m[c]||h[c]||i;return a?o.createElement(k,r(r({ref:t},p),{},{components:a})):o.createElement(k,r({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7007:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=a(7462),n=(a(7294),a(3905));const i={},r="Webhooks",l={unversionedId:"guides/messaging/webhooks",id:"guides/messaging/webhooks",isDocsHomePage:!1,title:"Webhooks",description:"A webhook is a unique url endpoint. When called, it triggers some action on the target server.",source:"@site/docs/guides/messaging/40_webhooks.md",sourceDirName:"guides/messaging",slug:"/guides/messaging/webhooks",permalink:"/docs/guides/messaging/webhooks",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/messaging/40_webhooks.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Emailing",permalink:"/docs/guides/messaging/email"},next:{title:"10. Jobs",permalink:"/docs/guides/jobs"}},s=[{value:"Quick guide to create a webhook",id:"quick-guide-to-create-a-webhook",children:[],level:3},{value:"Create Webhook via CLI",id:"create-webhook-via-cli",children:[],level:3},{value:"Create Webhook via Portal",id:"create-webhook-via-portal",children:[],level:3},{value:"Trigger Webhook",id:"trigger-webhook",children:[],level:2},{value:"Listening for Webhook",id:"listening-for-webhook",children:[{value:"List all Webhooks via CLI",id:"list-all-webhooks-via-cli",children:[],level:3},{value:"List all Webhooks via Portal",id:"list-all-webhooks-via-portal",children:[],level:3},{value:"Edit or delete via CLI",id:"edit-or-delete-via-cli",children:[],level:3},{value:"Edit or delete via Portal",id:"edit-or-delete-via-portal",children:[],level:3}],level:2},{value:"Receiving Files",id:"receiving-files",children:[],level:2}],d={toc:s};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"webhooks"},"Webhooks"),(0,n.kt)("p",null,"A webhook is a unique url endpoint. When called, it triggers some action on the target server."),(0,n.kt)("p",null,"In PIPEFORCE, you can create ",(0,n.kt)("strong",{parentName:"p"},"custom")," webhooks. When called, it produces an internal event message which in turn can be consumed by a pipeline using the commands ",(0,n.kt)("inlineCode",{parentName:"p"},"event.listen")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"message.receive"),"."),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Replace any url ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"https://hub-try.pipeforce.org"))," from the examples shown on this page by the url of your PIPEFORCE instance."))),(0,n.kt)("p",null,"The url of such an PIPEFORCE webhook has a format similar to this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://hub-try.pipeforce.org/api/v3/command/webhook.receive?token=<token>\n")),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},"Replace ",(0,n.kt)("inlineCode",{parentName:"li"},"<token>")," by the token of your webhook. See below to get such an token.")))),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},"The token is sometimes also referred to as the uuid, the unique id, of a webhook. ")))),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},"It's also possible to place the ",(0,n.kt)("inlineCode",{parentName:"li"},"token")," param as request header (recommended, because it is more secure).")))),(0,n.kt)("h3",{id:"quick-guide-to-create-a-webhook"},"Quick guide to create a webhook"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new webhook endpoint by using the command ",(0,n.kt)("inlineCode",{parentName:"li"},"webhook.put"),"."),(0,n.kt)("li",{parentName:"ol"},"Set the ",(0,n.kt)("inlineCode",{parentName:"li"},"eventKey")," to the name of an event to be fired internally every time this webhook has been received."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Remember the url or token of the webhook (is returned after it was created).")),(0,n.kt)("li",{parentName:"ol"},"Create a pipeline which listens for the ",(0,n.kt)("inlineCode",{parentName:"li"},"eventKey"),", that is fired by the webhook using the ",(0,n.kt)("inlineCode",{parentName:"li"},"event.listen")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"message.receive")," command, and store it to the property store (this automatically triggers the registration of the listener). This pipeline will then be executed every time this webhook is called."),(0,n.kt)("li",{parentName:"ol"},"To call a webhook from outside, use the command ",(0,n.kt)("inlineCode",{parentName:"li"},"webhook.receive")," and the webhook's token, for example:",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("inlineCode",{parentName:"li"},"https://hub-try.pipeforce.org/api/v3/command/webhook.receive?token=<token>"))),(0,n.kt)("h3",{id:"create-webhook-via-cli"},"Create Webhook via CLI"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In order to create and setup a new webhook, you can simply use the command ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.put")," and the CLI:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"pi command webhook.put eventKey=<ID>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"<ID>")," by the key of the event, which must be fired when this webhook gets triggered.",(0,n.kt)("br",{parentName:"p"}),"\n","Note: It is a good practice to name event keys as always lower case, and separate it in groups with a dot and ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.")," as the prefix. For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"pi command webhook.put eventKey=webhook.github.update\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After you have executed this command, a new webhook was created and the details about it will be returned as a JSON or YAML format, which looks similar to this:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{\n  "eventKey": "salesforce.lead.created",\n  "webhookUrl": "https://hub-try.pipeforce.org/api/v3/webhook.receive?token=885d...",\n  "uuid": "885d...",\n  ...\n}\n')))),(0,n.kt)("p",null,"Since a webhook is secured by its token (= uuid) which is a secret and hard to detect, make sure the ",(0,n.kt)("strong",{parentName:"p"},"webhookUrl")," is kept secure between the two systems."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"PIPEFORCE regularly scans the internet for this token, and if it finds it, the associated webhooks will be deactivated for security reasons. So, never make it publicly available!"))),(0,n.kt)("h3",{id:"create-webhook-via-portal"},"Create Webhook via Portal"),(0,n.kt)("p",null,"You can also use the command form LOW CODE \u2192 Commands \u2192 ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.put")," in the portal to create a webhook without the CLI:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151288935/image-20211029-134322.png?api=v2",alt:null})),(0,n.kt)("h2",{id:"trigger-webhook"},"Trigger Webhook"),(0,n.kt)("p",null,"After you have setup the webhook successfully, it can be triggered (or called) from the outside."),(0,n.kt)("p",null,"To do so, send a GET or POST HTTP request to the webhook url which was returned when you created it:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"https://hub-try.pipeforce.org/api/v3/command/webhook.receive?token=abcdef")),(0,n.kt)("p",null,"In order to secure the ",(0,n.kt)("strong",{parentName:"p"},"webhookUrl"),", you should always prefer a ",(0,n.kt)("strong",{parentName:"p"},"HTTPS connection")," between the two systems, and send the token parameter in the body of a ",(0,n.kt)("strong",{parentName:"p"},"POST")," request, or as HTTP header. PIPEFORCE supports all three methods. But, it mainly depends on the caller of the webhook, whether this external system supports them."),(0,n.kt)("h2",{id:"listening-for-webhook"},"Listening for Webhook"),(0,n.kt)("p",null,"After you have successfully setup the webhook, any time the webhook url is called from the outside, a new message is produced internally inside PIPEFORCE, which can then be consumed by any pipeline. To do so, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"event.listen")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"message.receive")," command to listen for such new event messages. Here\u2019s an example which sends an email whenever a new lead in Salesforce was created using a webhook with the ",(0,n.kt)("inlineCode",{parentName:"p"},"eventKey")," =",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.salesforce.lead.created"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n - event.listen:\n     eventKey: webhook.salesforce.lead.created\n - mail:\n     to: name@company.tld\n     subject: "New lead was created!"\n     body: "#{@convert.fromBase64(body.origin)}"\n')),(0,n.kt)("p",null,"The input body of the ",(0,n.kt)("inlineCode",{parentName:"p"},"event.listen")," command is the payload of the event message submitted from the outside caller."),(0,n.kt)("p",null,"In case the sender has sent some payload in the body of the webhook request, this payload is made available for you as base64 encoded string in the ",(0,n.kt)("inlineCode",{parentName:"p"},"origin")," field of the event. To access this data, you have to convert this value as shown in this example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#{@convert.fromBase64(body.origin)}\n")),(0,n.kt)("p",null,"For security reasons, by default, the webhook pipeline is executed with very limited ",(0,n.kt)("inlineCode",{parentName:"p"},"anonymousUser")," privileges. So, make sure that you use only commands in your pipeline which can be executed by this user. In case you need more privileges, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"iam.run.as")," command to switch to the privileges of the given user before executing the command. See the IAM portal for the permissions (or roles) of a given user. Also see ",(0,n.kt)("a",{parentName:"p",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/2151288874/Groups%2C+Roles%2C+Permissions"},"Groups, Roles, and Permissions")," for more details on user privileges / permissions."),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Some words about security and webhooks")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Since webhooks allow executing pipelines, they can be very powerful. This power also comes with ",(0,n.kt)("strong",{parentName:"p"},"additional responsibility")," for you, the app developer. Make sure you have sufficient security testings in place, and you have secured your webhook pipelines accordingly."))),(0,n.kt)("h3",{id:"list-all-webhooks-via-cli"},"List all Webhooks via CLI"),(0,n.kt)("p",null,"To list all existing webhooks, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.get")," command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pi command webhook.get\n")),(0,n.kt)("p",null,"You will see a JSON / YAML list with details about all existing webhooks."),(0,n.kt)("p",null,"In order to get the details of a single webhook, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.get")," with the param ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid"),", where uuid is the token of the webhook you want to list:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pi command webhook.get uuid=<yourWebhookUuid>\n")),(0,n.kt)("h3",{id:"list-all-webhooks-via-portal"},"List all Webhooks via Portal"),(0,n.kt)("p",null,"Only: ENTERPRISE CORPORATE"),(0,n.kt)("p",null,"In the portal, go to LOW CODE \u2192 Commands \u2192 webhook.get, and execute the form:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151288935/image-20211029-140005.png?api=v2",alt:null}),(0,n.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151288935/image-20211029-140117.png?api=v2",alt:null})),(0,n.kt)("h3",{id:"edit-or-delete-via-cli"},"Edit or delete via CLI"),(0,n.kt)("p",null,"In order to edit an existing webhook, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.put")," command, and set the uuid (= token) of the webhook to edit. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pi command webhook.put uuid=abcdef eventKey=webhook.changed.key\n")),(0,n.kt)("p",null,"In order to delete an existing webhook, you can use the command ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.delete"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pi command webhook.delete uuid=abcdef\n")),(0,n.kt)("p",null,"And then, set the uuid of the webhook you want to delete."),(0,n.kt)("h3",{id:"edit-or-delete-via-portal"},"Edit or delete via Portal"),(0,n.kt)("p",null,"To edit or delete a webhook using the portal, go to Commands \u2192 ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.put")," or Commands -> ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.delete"),", and execute the form accordingly."),(0,n.kt)("h2",{id:"receiving-files"},"Receiving Files"),(0,n.kt)("p",null,"It is also possible to send a playload, like multiple files, with a webhook. To do so, execute the request as multipart POST with the body formatted as ",(0,n.kt)("inlineCode",{parentName:"p"},"multipart/form-data"),". For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'POST /api/v3/command/webhook.receive?uuid=abcdef HTTP/1.1 \nHost: hub-<NS>.pipefore.net\nContent-Type: multipart/form-data;boundary="boundary" \n\n--boundary \nContent-Disposition: form-data; name="file"; filename="fileA.pdf" \n\n<CONTENT FILE fileA.pdf GOES HERE...>\n--boundary \nContent-Disposition: form-data; name="file"; filename="fileB.pdf" \n\n<CONTENT FILE fileB.pdf GOES HERE...>\n--boundary--\n')),(0,n.kt)("p",null,"More information about multipart POST requests can be found here: ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST")))}p.isMDXComponent=!0}}]);