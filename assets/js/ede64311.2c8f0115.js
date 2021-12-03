"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[896],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},569:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],l={},s="Local Workspace",p={unversionedId:"guides/local-workspace",id:"guides/local-workspace",isDocsHomePage:!1,title:"Local Workspace",description:"What is it?",source:"@site/docs/guides/local-workspace.md",sourceDirName:"guides",slug:"/guides/local-workspace",permalink:"/docs/guides/local-workspace",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/local-workspace.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/guides/introduction"},next:{title:"Low code workspace",permalink:"/docs/guides/low-code"}},c=[{value:"What is it?",id:"what-is-it",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Create a new workspace",id:"create-a-new-workspace",children:[],level:2},{value:"Using Visual Studio Code",id:"using-visual-studio-code",children:[{value:"Download and Installation",id:"download-and-installation",children:[],level:3},{value:"Loading the workspace in VS Code",id:"loading-the-workspace-in-vs-code",children:[],level:3},{value:"Show the terminal",id:"show-the-terminal",children:[],level:3},{value:"Create a new resource",id:"create-a-new-resource",children:[],level:3},{value:"Execute a pipeline in the terminal",id:"execute-a-pipeline-in-the-terminal",children:[],level:3}],level:2},{value:"Enable code completion for pipelines",id:"enable-code-completion-for-pipelines",children:[],level:2},{value:"Upload a resource",id:"upload-a-resource",children:[],level:2}],d={toc:c};function u(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"local-workspace"},"Local Workspace"),(0,i.kt)("h2",{id:"what-is-it"},"What is it?"),(0,i.kt)("p",null,"The local low-code workspace is a folder on your local machine where you can store and edit all of your low-code configuration files and scripts and then sync them with the PIPEFORCE property store with a single call of ",(0,i.kt)("inlineCode",{parentName:"p"},"pi publish"),"."),(0,i.kt)("p",null,"In its most raw case you could manage all properties in the property store with the ",(0,i.kt)("inlineCode",{parentName:"p"},"property.*")," commands and the CLI using ",(0,i.kt)("inlineCode",{parentName:"p"},"pi pipeline"),"."),(0,i.kt)("p",null,"This might be useful for small changes. But if you want to develop and customize full business applications, we recommend you to use the local low-code workspace. This way you can track changes more easily and be prepared for a good change management process."),(0,i.kt)("p",null,"The low-code workspace will mirror the property store properties as a local hierarchy of folders and files. Any configuration and script file created locally inside this workspace can then easily be uploaded to the property store with a single command line. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pi publish src/global/app/myapp/*\n")),(0,i.kt)("p",null,"This scans the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"myapp")," inside the workspace and uploads only those resources which have been changed since last upload or have been created since then."),(0,i.kt)("p",null,"You can also use the short form of the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pi publish \n")),(0,i.kt)("p",null,"This will publish any new or changes resources inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," folder to the server."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To setup your local low-code workspace, at first you need to download and install the CLI as described here: ",(0,i.kt)("a",{parentName:"p",href:"https://pipeforce.github.io/docs/guides/downloads"},"Downloads")),(0,i.kt)("p",null,"Furthermore, we recommend you to download and install the free source code editor Visual Studio Code from here: ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"https://code.visualstudio.com/download")),(0,i.kt)("p",null,"Even if you have a different favorite editor, we recommend you to start with this one, since it is easier to follow all examples. Later, you can switch to a different editor, if you want."),(0,i.kt)("p",null,"After you did setup the local workspace, you should read the chapter about working with Visual Studio Code to learn how you can optimize your customization steps: ",(0,i.kt)("a",{parentName:"p",href:"https://pipeforce.github.io/docs/guides/vs-code"},"Visual Studio Code")),(0,i.kt)("h2",{id:"create-a-new-workspace"},"Create a new workspace"),(0,i.kt)("p",null,"After you have installed the CLI (",(0,i.kt)("a",{parentName:"p",href:"https://pipeforce.github.io/docs/api/cli"},"Command Line Interface (CLI)"),"), you can create a new workspace by using this command line call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pi setup\n")),(0,i.kt)("p",null,"This will ask you a few questions to setup the workspace correctly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Namespace [None]:\n")),(0,i.kt)("p",null,"Here, you need to type-in the namespace of your PIPEFORCE instance which is typically the name of your company. If you\u2019re not sure what your namespace is, ask ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@pipeforce.io"},"support@pipeforce.io"),"."),(0,i.kt)("p",null,"Typically the namespace is the ",(0,i.kt)("strong",{parentName:"p"},"NAMESPACE")," part of your instance url (not the full url!):",(0,i.kt)("br",{parentName:"p"}),"\n","https://",(0,i.kt)("strong",{parentName:"p"},"NAMESPACE"),".pipeforce.net"),(0,i.kt)("p",null,"For example if your instance url is ",(0,i.kt)("a",{parentName:"p",href:"https://acme.pipeforce.net"},"https://",(0,i.kt)("strong",{parentName:"a"},"acme"),".pipeforce.net"),", then your namespace would be ",(0,i.kt)("strong",{parentName:"p"},"acme"),"."),(0,i.kt)("p",null,"Type this name in an press enter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Username [None]:\n")),(0,i.kt)("p",null,"Type-in your username to login into the system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Password []:\n")),(0,i.kt)("p",null,"Type-in your password to login into the system."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your password is never stored as such by the CLI for security reasons. Instead, the CLI automatically exchanges this password with an API access token and stores this access token. This token is valid for 30 days. That means: If you did not login into PIPEFORCE for longer than 30 days, you need to re-generate this access token. You can do so by simply calling ",(0,i.kt)("inlineCode",{parentName:"p"},"pi setup")," later which asks again for credentials and creates and stores a new access token for you in case the login was successful."))),(0,i.kt)("p",null,"Congratulations! A new property store workspace was been created for you under",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"$USER_HOME/pipeforce")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"$USER_HOME")," by the path of your user home folder which differs depending on your current operating system."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"For Windows this is typically: ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\YOUR_USERNAME")),(0,i.kt)("li",{parentName:"ul"},"For Mac this is typically: ",(0,i.kt)("inlineCode",{parentName:"li"},"/Users/YOUR_USERNAME"))))),(0,i.kt)("h2",{id:"using-visual-studio-code"},"Using Visual Studio Code"),(0,i.kt)("p",null,"Visual Studio Code (in short: VS Code) is a free resource editor which works nicely together with the pi tool and simplifies customizing PIPEFORCE. You can also use a different editor but we recommend to use this one at least for the starting phase."),(0,i.kt)("h3",{id:"download-and-installation"},"Download and Installation"),(0,i.kt)("p",null,"You can download Visual Studio Code for free here: ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"https://code.visualstudio.com/download")),(0,i.kt)("h3",{id:"loading-the-workspace-in-vs-code"},"Loading the workspace in VS Code"),(0,i.kt)("p",null,"After you have created a new PIPEFORCE customization workspace, navigate to its location which looks similar to this (could differ depending on your operating system):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd /Users/USERNAME/pipeforce/\n")),(0,i.kt)("p",null,"Inside this folder there is a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"PIPEFORCE.code-workspace"),". Double click this file in order to start Visual Studio Code. Note: Visual Studio Code needs to be installed beforehand."),(0,i.kt)("p",null,"This will start Visual Studio Code with everything already setup, so you can immediately start to create and deploy customizations in PIPEFORCE:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(228).Z})),(0,i.kt)("h3",{id:"show-the-terminal"},"Show the terminal"),(0,i.kt)("p",null,"Its comfortable to also show the terminal inside of VS Code. To do so, in the top menu click ",(0,i.kt)("inlineCode",{parentName:"p"},"Terminal \u2192 New Terminal"),". This opens a new terminal at the bottom of VS Code:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9100).Z})),(0,i.kt)("h3",{id:"create-a-new-resource"},"Create a new resource"),(0,i.kt)("p",null,"You can now use the terminal to create for example a new pipeline by typing in this command line in the VS Code terminal:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3604).Z})),(0,i.kt)("p",null,"After pressing enter, you will be asked for a name of the new pipeline. Type-in ",(0,i.kt)("inlineCode",{parentName:"p"},"helloworld")," and press again enter."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9586).Z})),(0,i.kt)("p",null,"After this a new pipeline file was created for you with name ",(0,i.kt)("inlineCode",{parentName:"p"},"helloworld.pi.yaml"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9586).Z})),(0,i.kt)("p",null,"If you open this file, you can see it contains a simple hello world demo pipeline which logs \u201cHello World\u201d into the server log and writes it into the body."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6810).Z})),(0,i.kt)("h3",{id:"execute-a-pipeline-in-the-terminal"},"Execute a pipeline in the terminal"),(0,i.kt)("p",null,"To run the pipeline right from within your VS Code use this command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pi pipeline file src/global/pipeline/helloworld.pi.yaml\n")),(0,i.kt)("p",null,"You should then see the output of this pipeline in the terminal."),(0,i.kt)("h2",{id:"enable-code-completion-for-pipelines"},"Enable code completion for pipelines"),(0,i.kt)("p",null,"In order to enable code completion for pipelines inside of VS Code, you can optionally install the free YAML plugin from the Microsoft VS Code marketplace."),(0,i.kt)("p",null,"Open this url in your browser:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"},"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml")),(0,i.kt)("p",null,"Click install. Allow to open this link with VS Code if requested."),(0,i.kt)("p",null,"Now you should be able to use pipeline code completion."),(0,i.kt)("p",null,"To test it, add a new command in the ",(0,i.kt)("inlineCode",{parentName:"p"},"helloworld.pi.yaml")," file. After you started typing you should get a suggestion list of all available pipeline commands including inline documentation:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4550).Z})),(0,i.kt)("h2",{id:"upload-a-resource"},"Upload a resource"),(0,i.kt)("p",null,"After you have created a resource locally, you can upload it to the property store with a simple command line inside your VS Code terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pi publish\n")),(0,i.kt)("p",null,"After the command was executed, you can see that your pipeline has been successfully created into the property store."),(0,i.kt)("p",null,"Anytime you change a resource in the workspace, calling ",(0,i.kt)("inlineCode",{parentName:"p"},"pi publish")," afterwards will create or update only those resources which have been changed after last publish. This way you can work in an very effective way."))}u.isMDXComponent=!0},228:function(e,t,a){t.Z=a.p+"assets/images/vs-code-9da92352d5bbfc8dc6edb8a64ba708f7.png"},9100:function(e,t,a){t.Z=a.p+"assets/images/vs-code1-830004e7c75f19b6201930875537b902.png"},6810:function(e,t,a){t.Z=a.p+"assets/images/vs-code3-0835feca86fd63d2a1139eca827b72b9.png"},4550:function(e,t,a){t.Z=a.p+"assets/images/vs-code4-866b9cb2829caacd53d9d8431475dbba.png"},3604:function(e,t,a){t.Z=a.p+"assets/images/vscode-terminal-1ea94d74bdfa3f4b5a9e21f58709a483.png"},9586:function(e,t,a){t.Z=a.p+"assets/images/vscode-terminal1-59a4b8e8360c4c0724de74bb9e306daa.png"}}]);