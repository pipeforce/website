"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[6161],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>u});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),m=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=m(e.components);return t.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),u=i,h=c["".concat(o,".").concat(u)]||c[u]||d[u]||r;return a?t.createElement(h,l(l({ref:n},p),{},{components:a})):t.createElement(h,l({ref:n},p))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var m=2;m<r;m++)l[m]=a[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7865:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var t=a(7462),i=(a(7294),a(3905));const r={},l="Emailing",s={unversionedId:"guides/messaging/email",id:"guides/messaging/email",isDocsHomePage:!1,title:"Emailing",description:"Since Version: 3.0",source:"@site/docs/guides/messaging/30_email.md",sourceDirName:"guides/messaging",slug:"/guides/messaging/email",permalink:"/docs/guides/messaging/email",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/messaging/30_email.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/guides/messaging/events"},next:{title:"Webhooks",permalink:"/docs/guides/messaging/webhooks"}},o=[{value:"Email Templates",id:"email-templates",children:[{value:"Using PEL",id:"using-pel",children:[],level:3},{value:"Using a Transformer Command",id:"using-a-transformer-command",children:[],level:3},{value:"Using a Custom URI",id:"using-a-custom-uri",children:[],level:3}],level:2},{value:"Email Attachments",id:"email-attachments",children:[{value:"From Body",id:"from-body",children:[],level:3},{value:"From Custom URI",id:"from-custom-uri",children:[],level:3}],level:2},{value:"HTML Emails",id:"html-emails",children:[],level:2},{value:"Bulk Emails",id:"bulk-emails",children:[],level:2},{value:"Report an Issue",id:"report-an-issue",children:[],level:2}],m={toc:o};function p(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"emailing"},"Emailing"),(0,i.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 3.0"),(0,i.kt)("p",null,"In PIPEFORCE you can send email messages out-of-the-box using the ",(0,i.kt)("a",{parentName:"p",href:"../api/commands#mailsend-v1"},"mail.send")," command."),(0,i.kt)("p",null,"Here is an example pipeline to use this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n - mail.send:\n    to: "recipient@domain.tld"\n    subject: "This is the subject"\n    message: |\n      Hello recipient,\n      this is an email sent from a pipeline.\n      Greetings\n')),(0,i.kt)("h2",{id:"email-templates"},"Email Templates"),(0,i.kt)("p",null,"There are different possibilties in PIPEFORCE to set the email data dynamically."),(0,i.kt)("h3",{id:"using-pel"},"Using PEL"),(0,i.kt)("p",null,"As usual, you can use the ",(0,i.kt)("a",{parentName:"p",href:"../api/pel"},"Pipeline Expression Language (PEL)")," in order to define placeholders in the command parameters. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  name: "Sam"\n  email: "recipient@domain.tld"\n\npipeline:\n - mail.send:\n    to: "#{var.email}"\n    subject: "This is for #{var.name}"\n    message: |\n      Hello #{var.name},\n      this is an email sent from a pipeline.\n      Greetings\n')),(0,i.kt)("h3",{id:"using-a-transformer-command"},"Using a Transformer Command"),(0,i.kt)("p",null,"You can use a transformer command like ",(0,i.kt)("a",{parentName:"p",href:"../guides/transformers/freemarker"},"transform.ftl")," in order to render the message. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  name: "Sam"\n  email: "recipient@domain.tld"\n\npipeline:\n\n  - transform.ftl:\n      template: |\n        Hello ${var.name},\n        this is an email sent from a pipeline.\n        Greetings\n\n  - mail.send:\n      to: "#{var.email}"\n      subject: "This is for #{var.name}"\n')),(0,i.kt)("p",null,"In this example, the message is rendered and then stored in the body using ",(0,i.kt)("inlineCode",{parentName:"p"},"transform.ftl"),". The command ",(0,i.kt)("inlineCode",{parentName:"p"},"mail.send"),"\nthen picks up the rendered message from the body and uses it as email message."),(0,i.kt)("p",null,"And here is an example to load the template from the property store from location ",(0,i.kt)("inlineCode",{parentName:"p"},"global/app/myapp/template/email"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  name: "Sam"\n  email: "recipient@domain.tld"\n\npipeline:\n\n  - transform.ftl:\n      template: "uri:property:global/app/myapp/template/email"\n\n  - mail.send:\n      to: "#{var.email}"\n      subject: "This is for #{var.name}"\n')),(0,i.kt)("h3",{id:"using-a-custom-uri"},"Using a Custom URI"),(0,i.kt)("p",null,"Instead of defining a separate transformer command in the pipeline, you can use a ",(0,i.kt)("a",{parentName:"p",href:"../api/uris"},"Custom URI")," which points inline to a template. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  name: "Sam"\n  email: "recipient@domain.tld"\n\npipeline:\n\n  - mail.send:\n      to: "#{var.email}"\n      subject: "This is for #{var.name}"\n      message: "uri:property:global/app/myapp/template/email"\n')),(0,i.kt)("p",null,"In this case, the ",(0,i.kt)("inlineCode",{parentName:"p"},"mail.send")," command loads the template as property from location ",(0,i.kt)("inlineCode",{parentName:"p"},"global/app/myapp/template/email"),", renders it and uses\nthe result as email message. The variables ",(0,i.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," will be provided as default model to the template."),(0,i.kt)("p",null,"You can replace these default template variables by your custom ",(0,i.kt)("inlineCode",{parentName:"p"},"model"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - mail.send:\n      to: "recipient@domain.tld"\n      subject: "This is a subject"\n      message: "uri:property:global/app/myapp/template/email"\n      model: {"name": "Sam"}\n')),(0,i.kt)("h2",{id:"email-attachments"},"Email Attachments"),(0,i.kt)("p",null,"In case you would like to add attachments, you can use the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"attachments")," to do so."),(0,i.kt)("h3",{id:"from-body"},"From Body"),(0,i.kt)("p",null,"One approach is to load the attachments into a scope, like vars or the body first and then refer to them using a PEL inside the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"attachments"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - drive.read:\n      path: "contract.docx"\n\n  - mail.send:\n      to: "recipient@domain.tld"\n      subject: "This is the contract"\n      message: "Hello, attached you can find the contract for your reference."\n      attachments: "#{body}"\n')),(0,i.kt)("p",null,"In this example the file is first loaded (implicitely) to body using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"drive.read")," and then linked to the ",(0,i.kt)("inlineCode",{parentName:"p"},"attachments")," parameter. You can place any ",(0,i.kt)("a",{parentName:"p",href:"../guides/contentobject"},"content object")," as attachment. "),(0,i.kt)("p",null,"Using this approach it is also possible to create the attachments dynamically on-the-fly in the pipeline (for example by using a template engine) and then add them finally to the email."),(0,i.kt)("h3",{id:"from-custom-uri"},"From Custom URI"),(0,i.kt)("p",null,"Another approach to add attachments to an email is by using a ",(0,i.kt)("a",{parentName:"p",href:"../api/uris"},"Custom URI")," which points to the location of the attachments. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - mail.send:\n      ...\n      attachments: "uri:drive:contract-v1.docx, uri:drive:contract-v2.docx"\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can add multiple attachments by separating them by comma."))),(0,i.kt)("h2",{id:"html-emails"},"HTML Emails"),(0,i.kt)("p",null,"Emails are sent by default using a base HTML skeleton. Any message is placed as text inside this HTML skeleton. HTML tags will be escaped by default."),(0,i.kt)("p",null,"In case you would like to format the text using HTML tags, you need to place the whole message inside a single HTML tag like ",(0,i.kt)("inlineCode",{parentName:"p"},"<p>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"</p>")," for example."),(0,i.kt)("p",null,"Here is an example to place a HTML link and HTML bullet points in your email message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - mail.send:\n      to: "recipient@domain.tld"\n      subject: "This is the contract"\n      message: |\n        <p>Hello,\n        please click <a href="#">this link</a>.\n        <br/>\n        These are the reasons:\n        <ul>\n          <li>Clicking is fun</li>\n          <li>Test it</li>\n        </ul>\n        </p>\n')),(0,i.kt)("p",null,"This will produce an email message output similar to this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4370).Z})),(0,i.kt)("h2",{id:"bulk-emails"},"Bulk Emails"),(0,i.kt)("p",null,"Sending multiple emails to multiple recipients with dynamic content can be done using the ",(0,i.kt)("inlineCode",{parentName:"p"},"mail.send")," command in combination with the ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  recipients: [\n      {"name": "Sam Mayer", "email": "s.mayer@domain.tld"},\n      {"name": "Marissa Foley", "email": "m.foley@domain.tld"},\n    ]\n    \npipeline:\n\n  - foreach:\n      in: "#{var.recipients}"\n      \n  - mail.send:\n      to: "#{var.loop.item.email}"\n      subject: "Letter to #{var.loop.item.name}"\n      message: |\n        Hello #{var.loop.item.name},\n        this is a letter for you.\n        Cheers\n      \n  - foreach:\n      end:\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Depending on your license and/or environment, the number of allowed emails to be send per minute is restricted.\nPlease refer to your support in order to get information about this limit.\nIn case you need to send a higher amount of emails, consider to use one of the email services and integrate\ntheir API using the ",(0,i.kt)("inlineCode",{parentName:"p"},"http.*")," commands."))),(0,i.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your help is needed!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,i.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!"))))}p.isMDXComponent=!0},4370:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/html-email-85295d9ee345a72587fdeb7f24803ade.png"}}]);