"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[3783],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=i,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return a?n.createElement(h,p(p({ref:t},m),{},{components:a})):n.createElement(h,p({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,p=new Array(r);p[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var s=2;s<r;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4945:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),p=["components"],o={},l="Create a PDF stamp",s={unversionedId:"tutorials/beginner/create-pdf-stamp",id:"tutorials/beginner/create-pdf-stamp",isDocsHomePage:!1,title:"Create a PDF stamp",description:"Estimated time: 10 min.",source:"@site/docs/tutorials/beginner/110_create-pdf-stamp.md",sourceDirName:"tutorials/beginner",slug:"/tutorials/beginner/create-pdf-stamp",permalink:"/docs/tutorials/beginner/create-pdf-stamp",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/tutorials/beginner/110_create-pdf-stamp.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a new Webhook",permalink:"/docs/tutorials/beginner/create-webhook"},next:{title:"BPMN",permalink:"/docs/tutorials/beginner/create-BPMN-workflow"}},m=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Intro",id:"intro",children:[],level:2},{value:"1 - Provide the invoice PDF",id:"1---provide-the-invoice-pdf",children:[],level:2},{value:"2 - Create the stamp pipeline",id:"2---create-the-stamp-pipeline",children:[],level:2},{value:"3 - Extra: Send PDF inline via email",id:"3---extra-send-pdf-inline-via-email",children:[],level:2}],d={toc:m};function c(e){var t=e.components,o=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-pdf-stamp"},"Create a PDF stamp"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Estimated time:")," 10 min."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PIPEFORCE Enterprise 7.0 or higher + DMS module"),(0,r.kt)("li",{parentName:"ul"},"You have a valid PIPEFORCE Developer account"),(0,r.kt)("li",{parentName:"ul"},"You have completed tutorial: ",(0,r.kt)("a",{parentName:"li",href:"https://pipeforce.github.io/docs/tutorials/beginner/create-app"},"Tutorial: Create a new app")),(0,r.kt)("li",{parentName:"ul"},"You have completed tutorial: ",(0,r.kt)("a",{parentName:"li",href:"https://pipeforce.github.io/docs/tutorials/beginner/create-pipeline"},"Tutorial: Create and execute a pipeline"))),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"In this tutorial you will learn, how you could put text stamps on PDF files. With this you can for example put incoming date stamps or watermarks on PDFs."),(0,r.kt)("h2",{id:"1---provide-the-invoice-pdf"},"1 - Provide the invoice PDF"),(0,r.kt)("p",null,"In the first step, you need to upload a sample PDF which can be used for this tutorial."),(0,r.kt)("p",null,"If you don\u2019t have a sample invoice PDF at hand, you can use this one:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/wiki/spaces/DEVEX/pages/2151285840/Tutorial%3A+Put+a+stamp+on+a+PDF?preview=%2F2151285840%2F2151285861%2Finvoice.pdf"},"invoice.pdf")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to the portal https://",(0,r.kt)("strong",{parentName:"p"},"NAMESPACE"),".pipeforce.net")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Files / Drive. The Drive WebUI opens.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upload the sample invoice PDF in the root folder of your drive. Keep the name ",(0,r.kt)("inlineCode",{parentName:"p"},"invoice.pdf"),":  "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(9591).Z})))),(0,r.kt)("h2",{id:"2---create-the-stamp-pipeline"},"2 - Create the stamp pipeline"),(0,r.kt)("p",null,"In the next step you will create a pipeline which loads the PDF, puts a stamp on it and saves the stamped PDF back to drive:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to the portal https://",(0,r.kt)("strong",{parentName:"p"},"NAMESPACE"),".pipeforce.net")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to LOW CODE \u2192 Workbench")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the node of your app or ",(0,r.kt)("a",{parentName:"p",href:"https://pipeforce.github.io/docs/tutorials/beginner/create-app"},"create a new one"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the plus icon at the top of the tree.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The new property view opens:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"As property key use: ",(0,r.kt)("inlineCode",{parentName:"li"},"global/app/YOUR_APP/pipeline/pdf-stamp")),(0,r.kt)("li",{parentName:"ol"},"As mime type use: ",(0,r.kt)("inlineCode",{parentName:"li"},"application/yaml; type=pipeline")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"SAVE"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The new property has been created and the content editor was opened for you.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now copy and paste this content into the editor and overwrite any existing data there by this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - drive.read:\n      path: "invoice.pdf"\n  - pdf.stamp:\n      text: "RECEIVED #{@date.timestamp()}"\n  - drive.save:\n      path: "invoice-received.pdf"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your pipeline now consists of three commands:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Load the PDF document from drive using the command ",(0,r.kt)("inlineCode",{parentName:"li"},"drive.read"),"."),(0,r.kt)("li",{parentName:"ol"},"Put a PDF stamp on this loaded invoice using the ",(0,r.kt)("inlineCode",{parentName:"li"},"pdf.stamp")," command. Additionally we use the ",(0,r.kt)("inlineCode",{parentName:"li"},"@date")," PEL util here to return the current date and time."),(0,r.kt)("li",{parentName:"ol"},"Store the stamped PDF document back to drive under new name ",(0,r.kt)("inlineCode",{parentName:"li"},"invoice-received.pdf")," using the command ",(0,r.kt)("inlineCode",{parentName:"li"},"drive.save"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"SAVE")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN")," to execute the pipeline.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After a refresh of the drive page, you should see a new PDF invoice-received.pdf:  "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2763).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"invoice-received.pdf"),". You should see the generated stamp at the top right corner:  "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6831).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Done. Congratulations!")))),(0,r.kt)("h2",{id:"3---extra-send-pdf-inline-via-email"},"3 - Extra: Send PDF inline via email"),(0,r.kt)("p",null,"A very often use case is, to put a stamp to a PDF and then send it via email to one or more recipients. Because of this, we will show you here how to do so with the stamped PDF in the same pipeline:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your pipeline ",(0,r.kt)("inlineCode",{parentName:"p"},"pdf-stamp")," and change it to this:  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - drive.read:\n      path: "invoice.pdf"\n  - pdf.stamp:\n      text: "RECEIVED #{@date.timestamp()}"\n  - drive.save:\n      path: "invoice-received.pdf"\n      cleanupBody: false\n  - mail.send:\n      to: "you@domain.tld"\n      subject: "Invoice received"\n      message: "Hello, we received your invoice. Thanks!"\n      attachments: "#{body}"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"As you can see, we did several adjustments to this pipeline:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"We added the parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"cleanupBody: false")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"drive.save"),". This keeps the final PDF in the body for use of the next command."),(0,r.kt)("li",{parentName:"ol"},"We added ",(0,r.kt)("inlineCode",{parentName:"li"},"mail.send")," as next command which will take the PDF from the body as attachment and send it via email to the given recipient. Note the ",(0,r.kt)("inlineCode",{parentName:"li"},"#{body}")," expression in the attachment parameter which points to the body of the pipeline where the PDF resides temporarily."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"you@domain.tld")," by your real email address.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"SAVE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After a while you should receive an email with the stamped PDF as attachment.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Done."))))}c.isMDXComponent=!0},9591:function(e,t,a){t.Z=a.p+"assets/images/image-20210213-042536-545de1611d56581d2e25521c7db75762.png"},2763:function(e,t,a){t.Z=a.p+"assets/images/image-20210213-045220-8290285a89f42159021b7c6df730e22d.png"},6831:function(e,t,a){t.Z=a.p+"assets/images/image-20210213-045350-83ab9d27748c3bb7a0158ce3f6219344.png"}}]);