"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7616],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),k=o,u=m["".concat(p,".").concat(k)]||m[k]||h[k]||i;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},545:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],l={},p="Create a new Webhook",s={unversionedId:"tutorials/beginner/create-webhook",id:"tutorials/beginner/create-webhook",isDocsHomePage:!1,title:"Create a new Webhook",description:"Estimated time: 15 min.",source:"@site/docs/tutorials/beginner/100_create-webhook.md",sourceDirName:"tutorials/beginner",slug:"/tutorials/beginner/create-webhook",permalink:"/docs/tutorials/beginner/create-webhook",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorials/beginner/100_create-webhook.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Send Teams Message",permalink:"/docs/tutorials/beginner/send-teams-message"},next:{title:"Create a PDF stamp",permalink:"/docs/tutorials/beginner/create-pdf-stamp"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Intro",id:"intro",children:[],level:2},{value:"1 - Create the webhook pipeline",id:"1---create-the-webhook-pipeline",children:[],level:2},{value:"2 - Create the webhook",id:"2---create-the-webhook",children:[],level:2},{value:"3 - Execute the webhook",id:"3---execute-the-webhook",children:[],level:2}],h={toc:c};function m(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-new-webhook"},"Create a new Webhook"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Estimated time:")," 15 min."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PIPEFORCE Enterprise 7.0 or higher."),(0,i.kt)("li",{parentName:"ul"},"You have a valid PIPEFORCE Developer account."),(0,i.kt)("li",{parentName:"ul"},"You have executed tutorial ",(0,i.kt)("a",{parentName:"li",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/2151284934/Tutorial%3A+Create+a+new+app"},"Tutorial: Create a new app"),".")),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"Webhooks are an essential part for connecting with external systems. A webhook is a unique URL external systems can call. In PIPEFORCE when a webhook URL is called, it is linked to a pipeline internally which gets executed then."),(0,i.kt)("p",null,"In this tutorial you will learn how to setup and execute such a webhook."),(0,i.kt)("p",null,"Since a webhook could potentially trigger any kind of logic, double check who can create webhooks, what exactly webhooks are doing and which external systems can call it!  "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can restrict who can create and manage webhooks by removing the roles CAN","_","PIPE","_","webhook","_","*"," from the developers and groups not allowed to do so. By default any developer can create and manage webhooks."))),(0,i.kt)("h2",{id:"1---create-the-webhook-pipeline"},"1 - Create the webhook pipeline"),(0,i.kt)("p",null,"In this step we gonna create the pipeline which will be executed whenever the webhook is called from external. To do so, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Login to your portal https://YOUR","_","NAMESPACE.pipeforce.net.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to LOW CODE \u2192 Workbench.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the node of the app you created in the previous tutorial.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the plus icon at the top of the tree.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"new property")," view opens:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"As a property key use the value ",(0,i.kt)("inlineCode",{parentName:"li"},"global/app/MY_APP/pipeline/webhook"),". Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"MY_APP")," with the name of the app you created before, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"myapp24"),". ",(0,i.kt)("strong",{parentName:"li"},"Do use only lower case letters and don\u2019t use special characters or spaces!")),(0,i.kt)("li",{parentName:"ol"},"As mime type select ",(0,i.kt)("inlineCode",{parentName:"li"},"application/yaml; type=pipeline"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click SAVE.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A new pipeline has been created with an hello world example in it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace its content by this pipeline:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  - mail.send:\n      to: you@domain.tld\n      subject: Webhook executed\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure to replace ",(0,i.kt)("a",{parentName:"p",href:"mailto:you@domain.tld"},"you@domain.tld")," by your email address. Whenever the webhook is executed, an email will be send to this address.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click SAVE to save the pipeline.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In order to test it, run the pipeline by clicking the RUN button at the top.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The pipeline should be successfully executed. After a few seconds you should receive an email in your inbox with subject ",(0,i.kt)("inlineCode",{parentName:"p"},"Webhook executed"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now add another command to the pipeline as shown in this listing:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  - event.listen:\n      key: webhook.tutorial\n  - mail.send:\n      to: you@domain.tld\n      subject: Webhook executed\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"As you can see, the command event.listen has been added. This command makes sure that this pipeline is executed whenever a webhook has been received with event key ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.tutorial"),". So it listens only to this specific webhook."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can define as webhook event key any string you want. As best practise we suggest you to use always lower case letters and prefix the key with ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook."),". Furthermore use the period ",(0,i.kt)("inlineCode",{parentName:"p"},".")," as separator, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.sendmail"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.order.create")," and so on."))),(0,i.kt)("h2",{id:"2---create-the-webhook"},"2 - Create the webhook"),(0,i.kt)("p",null,"Now you will link the external caller with your pipeline by creating a webhook object. To do so, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to LOW CODE \u2192 Commands.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Search for webhook.put here and click it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the form set the field key to ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.tutorial")," and click submit. The result should look similar to this screenshot:  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151285528/grafik-20210720-145538.png?api=v2",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now a new webhook was created and linked using the event key ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.tutorial"),". Every pipeline which listens to this event key will be executed when the webhook is called.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the webhook url for the next step."))),(0,i.kt)("h2",{id:"3---execute-the-webhook"},"3 - Execute the webhook"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy the webhook url from the result of the previous step."),(0,i.kt)("li",{parentName:"ol"},"Open your browser, paste this url and open it."),(0,i.kt)("li",{parentName:"ol"},"You should see a blank page without any error message."),(0,i.kt)("li",{parentName:"ol"},"After a few seconds you should receive an email to your inbox."),(0,i.kt)("li",{parentName:"ol"},"The webhook url is the url you can register in external systems to call your pipeline from external. Since this url calls your system, make sure that only you and the external system knows it.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit an existing webhook"),(0,i.kt)("br",{parentName:"li"}),"To edit a webhook, get the uuid of this webhook and execute the command ",(0,i.kt)("inlineCode",{parentName:"li"},"webhook.put")," again with this uuid as parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"List all webhooks or a single one"),(0,i.kt)("br",{parentName:"li"}),"To list all existing webhooks, execute the command ",(0,i.kt)("inlineCode",{parentName:"li"},"webhook.get"),". To list a single webhook, use its uuid as filter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete a webhook"),(0,i.kt)("br",{parentName:"li"}),"To delete a webhook, execute the command ",(0,i.kt)("inlineCode",{parentName:"li"},"webhook.delete"),".")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congrats, you have created your first webhook with PIPEFORCE!")))}m.isMDXComponent=!0}}]);