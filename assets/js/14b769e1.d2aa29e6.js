"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7923],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>k});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=s(a),k=n,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||r;return a?o.createElement(m,i(i({ref:t},h),{},{components:a})):o.createElement(m,i({ref:t},h))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=a(7462),n=(a(7294),a(3905));const r={},i="Tutorial 10: Create a Webhook",l={unversionedId:"tutorials/create-webhook",id:"tutorials/create-webhook",title:"Tutorial 10: Create a Webhook",description:"Estimated time: 15 min.",source:"@site/docs/tutorials/100_create-webhook.md",sourceDirName:"tutorials",slug:"/tutorials/create-webhook",permalink:"/docs/tutorials/create-webhook",draft:!1,editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/tutorials/100_create-webhook.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial 9: Send Teams Message",permalink:"/docs/tutorials/send-teams-message"},next:{title:"Tutorial 11: Create a PDF stamp",permalink:"/docs/tutorials/create-pdf-stamp"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Webhook - Intro",id:"webhook---intro",level:2},{value:"1 - Create the webhook pipeline",id:"1---create-the-webhook-pipeline",level:2},{value:"2 - Create the webhook",id:"2---create-the-webhook",level:2},{value:"3 - Execute the webhook",id:"3---execute-the-webhook",level:2},{value:"Report an Issue",id:"report-an-issue",level:2}],h={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tutorial-10-create-a-webhook"},"Tutorial 10: Create a Webhook"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Estimated time:")," 15 min."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PIPEFORCE Enterprise 7.0 or higher."),(0,n.kt)("li",{parentName:"ul"},"You have a valid PIPEFORCE Developer account."),(0,n.kt)("li",{parentName:"ul"},"You have executed tutorial ",(0,n.kt)("a",{parentName:"li",href:"../tutorials/create-app"},"Tutorial: Create a new app"),".")),(0,n.kt)("h2",{id:"webhook---intro"},"Webhook - Intro"),(0,n.kt)("p",null,"Webhooks are very essential parts for connecting with external systems. A webhook is a unique URL, that external systems can call. In PIPEFORCE, when a webhook URL is called, it is linked to a pipeline internally, which then gets executed."),(0,n.kt)("p",null,"In this tutorial, you will learn how to setup and execute such a webhook."),(0,n.kt)("p",null,"Since a webhook could potentially trigger any kind of logic, double check who can create webhooks, what exactly webhooks are doing, and which external systems can call it!  "),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can restrict who can create and manage webhooks by removing the roles CAN","_","PIPE","_","webhook","_","*"," from the developers and groups, who are not allowed to do so. By default any developer can create and manage webhooks.")),(0,n.kt)("h2",{id:"1---create-the-webhook-pipeline"},"1 - Create the webhook pipeline"),(0,n.kt)("p",null,"In this step, we are going to create the pipeline which will be executed whenever the webhook is called externally. To do so, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login to your portal https://YOUR","_","NAMESPACE.pipeforce.net.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to LOW CODE \u2192 Workbench.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the node of the app you created in the previous tutorial.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the plus icon at the top of the tree.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"new property")," view opens:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"As a property key, use the value ",(0,n.kt)("inlineCode",{parentName:"li"},"global/app/MY_APP/pipeline/webhook"),". Replace ",(0,n.kt)("inlineCode",{parentName:"li"},"MY_APP")," with the name of the app you created before, for example ",(0,n.kt)("inlineCode",{parentName:"li"},"myapp24"),". ",(0,n.kt)("strong",{parentName:"li"},"Do use only lower case letters and don\u2019t use special characters or spaces!")),(0,n.kt)("li",{parentName:"ol"},"As mime type, select ",(0,n.kt)("inlineCode",{parentName:"li"},"application/yaml; type=pipeline"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click SAVE.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A new pipeline has been created with an hello world example in it.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Replace its content by this pipeline:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  - mail.send:\n      to: you@domain.tld\n      subject: Webhook executed\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure to replace ",(0,n.kt)("a",{parentName:"p",href:"mailto:you@domain.tld"},"you@domain.tld")," by your email address. Whenever the webhook is executed, an email will be send to this address.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click SAVE to save the pipeline.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In order to test it, run the pipeline by clicking the RUN button at the top.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The pipeline should be successfully executed. After a few seconds, you should receive an email in your inbox with subject ",(0,n.kt)("inlineCode",{parentName:"p"},"Webhook executed"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now add another command to the pipeline as shown in this listing:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  - event.listen:\n      key: webhook.tutorial\n  - mail.send:\n      to: you@domain.tld\n      subject: Webhook executed\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"As you can see, the command event.listen has been added. This command makes sure that this pipeline is executed whenever a webhook has been received with event key ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.tutorial"),". So, it listens only to this specific webhook."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can define as webhook event key, any string you want. As best practise, we suggest you to use always lower case letters and prefix the key with ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook."),". Furthermore, use the period ",(0,n.kt)("inlineCode",{parentName:"p"},".")," as separator, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.sendmail"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.order.create"),", and so on.")),(0,n.kt)("h2",{id:"2---create-the-webhook"},"2 - Create the webhook"),(0,n.kt)("p",null,"Now you will link the external caller with your pipeline by creating a webhook object. To do so, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to LOW CODE \u2192 Documentation \u2192 Commands.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Search for webhook.put here and click it.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the form, set the field key to ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.tutorial"),", and click submit. The result should look similar to this screenshot:  "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(5579).Z,width:"710",height:"725"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now, a new webhook was created and linked using the event key ",(0,n.kt)("inlineCode",{parentName:"p"},"webhook.tutorial"),". Every pipeline, which listens to this event key, will be executed when the webhook is called.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the webhook url for the next step."))),(0,n.kt)("h2",{id:"3---execute-the-webhook"},"3 - Execute the webhook"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Copy the webhook url from the result of the previous step."),(0,n.kt)("li",{parentName:"ol"},"Open your browser, paste this url and open it."),(0,n.kt)("li",{parentName:"ol"},"You should see a blank page without any error message."),(0,n.kt)("li",{parentName:"ol"},"After a few seconds, you should receive an email to your inbox."),(0,n.kt)("li",{parentName:"ol"},"The webhook url is the url you can register in external systems to call your pipeline externally. Since this url calls your system, make sure that only you and the external system knows it.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Edit an existing webhook"),(0,n.kt)("br",{parentName:"li"}),"To edit a webhook, get the uuid of this webhook, and execute the command ",(0,n.kt)("inlineCode",{parentName:"li"},"webhook.put")," again with this uuid as parameter."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"List all webhooks or a single one"),(0,n.kt)("br",{parentName:"li"}),"To list all existing webhooks, execute the command ",(0,n.kt)("inlineCode",{parentName:"li"},"webhook.get"),". To list a single webhook, use its uuid as filter."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Delete a webhook"),(0,n.kt)("br",{parentName:"li"}),"To delete a webhook, execute the command ",(0,n.kt)("inlineCode",{parentName:"li"},"webhook.delete"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Congrats, you have created your first webhook with PIPEFORCE!")),(0,n.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,n.kt)("admonition",{title:"Your help is needed!",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,n.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!")))}u.isMDXComponent=!0},5579:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/grafik-20210720-145538-89aaa6261abc5a18d045130e1e86e8d9.png"}}]);