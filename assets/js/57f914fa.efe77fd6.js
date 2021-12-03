"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9942],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},p=Object.keys(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=i.createContext({}),s=function(e){var n=i.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(r.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,h=u["".concat(r,".").concat(m)]||u[m]||c[m]||p;return t?i.createElement(h,l(l({ref:n},d),{},{components:t})):i.createElement(h,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,l=new Array(p);l[0]=u;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<p;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5846:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var i=t(7462),a=t(3366),p=(t(7294),t(3905)),l=["components"],o={},r="Pipeline",s={unversionedId:"guides/pipeline",id:"guides/pipeline",isDocsHomePage:!1,title:"Pipeline",description:"Two or more commands can be chained to a pipeline. If such a pipeline gets executed, the commands in it will be executed by their serial ordering within the pipeline. The output message of the first command will become the input message of the next command and so on.",source:"@site/docs/guides/02_pipeline.md",sourceDirName:"guides",slug:"/guides/pipeline",permalink:"/docs/guides/pipeline",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/02_pipeline.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/docs/guides/command"},next:{title:"Property Store",permalink:"/docs/guides/propertystore"}},d=[{value:"Execution of a pipeline",id:"execution-of-a-pipeline",children:[{value:"Via Online Workbench",id:"via-online-workbench",children:[],level:3},{value:"Via CLI",id:"via-cli",children:[{value:"Local file",id:"local-file",children:[],level:4},{value:"Remote",id:"remote",children:[],level:4},{value:"Pipeline URI",id:"pipeline-uri",children:[],level:4}],level:3},{value:"Via HTTP",id:"via-http",children:[],level:3}],level:2},{value:"Pipeline Scopes",id:"pipeline-scopes",children:[{value:"headers",id:"headers",children:[],level:3},{value:"vars",id:"vars",children:[],level:3},{value:"pipeline",id:"pipeline-1",children:[],level:3},{value:"body",id:"body",children:[],level:3}],level:2},{value:"Auto-completion support",id:"auto-completion-support",children:[{value:"IntelliJ",id:"intellij",children:[],level:3},{value:"Visual Studio Code",id:"visual-studio-code",children:[],level:3},{value:"Online Workbench",id:"online-workbench",children:[],level:3}],level:2}],c={toc:d};function u(e){var n=e.components,o=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,i.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"pipeline"},"Pipeline"),(0,p.kt)("p",null,"Two or more ",(0,p.kt)("a",{parentName:"p",href:"/docs/guides/command"},(0,p.kt)("strong",{parentName:"a"},"commands"))," can be chained to a ",(0,p.kt)("strong",{parentName:"p"},"pipeline"),". If such a pipeline gets executed, the commands in it will be executed by their serial ordering within the pipeline. The output message of the first command will become the input message of the next command and so on. "),(0,p.kt)("p",null,(0,p.kt)("img",{src:t(845).Z})),(0,p.kt)("p",null,"By default, such a pipeline is written in a ",(0,p.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"YAML")," format. Here is an example which uses two simple commands: The ",(0,p.kt)("inlineCode",{parentName:"p"},"datetime")," command to produce the current date and time and after this the ",(0,p.kt)("inlineCode",{parentName:"p"},"log")," command to log the result at server side:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  - datetime\n  - log\n")),(0,p.kt)("p",null,"In the YAML a pipeline is defined using the ",(0,p.kt)("inlineCode",{parentName:"p"},"pipeline:")," list as root element. Inside this list each command to be executed is defined as an element (after an indent and a dash ",(0,p.kt)("inlineCode",{parentName:"p"},"-"),") by its name and optional parameters. The body output of the first command (",(0,p.kt)("inlineCode",{parentName:"p"},"datetime"),") will automatically become the body input of the next command (",(0,p.kt)("inlineCode",{parentName:"p"},"log"),")."),(0,p.kt)("p",null,"Here is a more sophisticated example which uses three commands: The first loads a PDF file from cloud drive (which is a built-in archive and dropbox in PIPEFORCE), the second puts a stamp on this document and the third saves the PDF with the stamp back to drive:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n - drive.read:\n     path: /my.pdf\n - pdf.stamp:\n     text: "Hello World!"\n - drive.save:\n     path: /my-stamped.pdf\n')),(0,p.kt)("p",null,"The PDF file ",(0,p.kt)("inlineCode",{parentName:"p"},"my.pdf")," is the output from the command ",(0,p.kt)("inlineCode",{parentName:"p"},"drive.read")," and will become the input for ",(0,p.kt)("inlineCode",{parentName:"p"},"pdf.stamp"),". After ",(0,p.kt)("inlineCode",{parentName:"p"},"pdf.stamp")," was executed and has put the stamp on the file, it will send it as output to ",(0,p.kt)("inlineCode",{parentName:"p"},"drive.save")," which stores it to the data room. Instead of a PDF file, the message body can also be of any other format like JSON, string or a like."),(0,p.kt)("h2",{id:"execution-of-a-pipeline"},"Execution of a pipeline"),(0,p.kt)("p",null,"Similar to a single command, a pipeline of commands is executed by sending it in a request to the server. Its a more advanced version of the \u201cFunction as a Service\u201d approach since it can execute a bunch of commands in a predefined order."),(0,p.kt)("h3",{id:"via-online-workbench"},"Via Online Workbench"),(0,p.kt)("p",null,"Since version 7.0 of PIPEFORCE, the Online Workbench is available. This is an advanced online editor with full code completion support where you can write pipelines and commands to be executed and then run them online. This is the easiest and most preferred way to ad-hoc execute a command or pipelines. Here you can see a simple pipeline after its ad-hoc execution as an example:"),(0,p.kt)("p",null,(0,p.kt)("img",{src:t(4357).Z})),(0,p.kt)("h3",{id:"via-cli"},"Via CLI"),(0,p.kt)("p",null,"Another approach to execute a pipeline is by using the CLI: ",(0,p.kt)("a",{parentName:"p",href:"https://pipeforce.github.io/docs/api/cli"},"Command Line Interface (CLI)"),"."),(0,p.kt)("h4",{id:"local-file"},"Local file"),(0,p.kt)("p",null,"Lets assume you have a local pipeline file stored at ",(0,p.kt)("inlineCode",{parentName:"p"},"src/global/app/myapp/pipeline/test.pi.yaml")," inside of your PIPEFORCE workspace, then you can execute it via this CLI call:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pi pipeline file src/global/app/myapp/pipeline/test.pi.yaml\n")),(0,p.kt)("p",null,"This will load the local pipeline file and execute its content by sending it to the server. The result will be printed out to your terminal if there is any."),(0,p.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"A pipeline file must end in this suffix to be detected correctly by your workspace ",(0,p.kt)("inlineCode",{parentName:"p"},".pi.yaml"),"."))),(0,p.kt)("h4",{id:"remote"},"Remote"),(0,p.kt)("p",null,"In case you have stored your pipeline at server side in the ",(0,p.kt)("a",{parentName:"p",href:"/docs/guides/propertystore"},"Property Store"),", then you can execute it using this call:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pi pipeline remote global/app/myapp/pipeline/test\n")),(0,p.kt)("p",null,"This command searches for a property in the property store with key ",(0,p.kt)("inlineCode",{parentName:"p"},"global/app/myapp/pipeline/test")," and executes it plus sends any results back to your terminal."),(0,p.kt)("h4",{id:"pipeline-uri"},"Pipeline URI"),(0,p.kt)("p",null,"A third option to execute a pipeline is by using a ",(0,p.kt)("strong",{parentName:"p"},"pipeline uri")," which is an inline version of a pipeline. You can rewrite any pipeline YAML fromat also as a pipeline uri. Lets assume this example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  - datetime\n      format: dd.MM.YYYY     \n  - log\n")),(0,p.kt)("p",null,"You can rewrite this pipeline YAML as an inline pipeline uri which looks like this:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"datetime?format=dd.MM.YYYY|log\n")),(0,p.kt)("p",null,"Such a pipeline uri you can then execute using this CLI call in one line:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'pi pipeline uri "datetime?format=dd.MM.YYYY|log"\n')),(0,p.kt)("p",null,"This is handy especially for smaller pipelines which you want to execute ad-hoc for example."),(0,p.kt)("h3",{id:"via-http"},"Via HTTP"),(0,p.kt)("p",null,"You can execute a pipeline also by sending it via HTTP POST to the server. See this example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'POST /api/v3/pipeline HTTP/1.1 \nHost: hub-acme.pipefore.net\n\npipeline:\n - drive.read:\n     path: /my.pdf\n - pdf.stamp:\n     text: "Hello World!"\n - drive.save:\n     path: /my-stamped.pdf\n')),(0,p.kt)("p",null,"This will do by default a synchron execution of the pipeline at server side and returns with the response status code ",(0,p.kt)("inlineCode",{parentName:"p"},"200 OK")," and the result in the response body once finished."),(0,p.kt)("p",null,"Here is the PDF pipeline example from above, now executed using the ",(0,p.kt)("inlineCode",{parentName:"p"},"curl")," tool which is available on all Linux, Mac and Windows systems:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://hub/api/v3/pipeline" \n  -H "Content-Type: application/yaml" \n  --data-binary @- << EOF\npipeline:\n - drive.read:\n     path: /my.pdf\n - pdf.stamp:\n     text: "Hello World!"\n - drive.save:\n     path: /my-stamped.pdf\nEOF\n')),(0,p.kt)("p",null,"With this flexibility you can for example define a bash script and store it locally to execute this pipeline with a single command and not much configuration, setup or coding required."),(0,p.kt)("h2",{id:"pipeline-scopes"},"Pipeline Scopes"),(0,p.kt)("p",null,"Every pipeline script may consist of four main sections, called ",(0,p.kt)("strong",{parentName:"p"},"scopes"),":"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"headers"),(0,p.kt)("li",{parentName:"ul"},"vars"),(0,p.kt)("li",{parentName:"ul"},"pipeline"),(0,p.kt)("li",{parentName:"ul"},"body")),(0,p.kt)("p",null,"Here is an example of a pipeline script which defines all of these scopes:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'headers:\n  contentType: "text/plain"\n  \nvars:\n  counter: 0\n\npipeline:\n  - log:\n      message: "HELLO WORLD!"\n      \nbody: "This is text in the body"\n')),(0,p.kt)("p",null,"All scopes except ",(0,p.kt)("inlineCode",{parentName:"p"},"pipeline")," are optional in a pipeline script. Even if not explicitly defined in the pipeline script, each scope exists implicitly. That means you can access it and read / set values from / on it without declaring it in the pipeline. For example by using a pipeline expression (PE)."),(0,p.kt)("h3",{id:"headers"},"headers"),(0,p.kt)("p",null,'The headers section is optional. A header is a name value pair to define "global configuration" hints and configurations for the given pipeline. Only text is allowed as content, no complex objects. Not meant to be changed during pipeline processing.'),(0,p.kt)("p",null,"It depends on the pipeline and its commands whether and which headers are required. Read the documentation of the commands of the pipeline."),(0,p.kt)("p",null,"It is similar to HTTP Request headers: ",(0,p.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},"https://en.wikipedia.org/wiki/List","_","of","_","HTTP","_","header","_","fields")),(0,p.kt)("p",null,"You can set values in the headers scope using the Pipeline Expression Language (PEL). See here: ",(0,p.kt)("a",{parentName:"p",href:"https://pipeforce.github.io/docs/guides/pel"},"Pipeline Expression Language (PEL)"),"."),(0,p.kt)("h3",{id:"vars"},"vars"),(0,p.kt)("p",null,"The vars section is optional and contains transient variables as name value pairs. It is meant as a transient scope for states during the pipeline processing."),(0,p.kt)("p",null,"Values can also be complex objects and documents."),(0,p.kt)("p",null,"Values can be changed during pipeline processing."),(0,p.kt)("p",null,"You can access values in the vars scope using the Pipeline Expression Language (PEL). See here: ",(0,p.kt)("a",{parentName:"p",href:"https://pipeforce.github.io/docs/guides/pel"},"Pipeline Expression Language (PEL)"),"."),(0,p.kt)("h3",{id:"pipeline-1"},"pipeline"),(0,p.kt)("p",null,"The pipeline section is mandatory and lists all commands which must be executed in given order."),(0,p.kt)("p",null,"See your instance portal for a reference of available commands."),(0,p.kt)("p",null,"You can set dynamic parameter values on commands using the Pipeline Expression Language (PEL). See here: ",(0,p.kt)("a",{parentName:"p",href:"https://pipeforce.github.io/docs/guides/pel"},"Pipeline Expression Language (PEL)"),"."),(0,p.kt)("h3",{id:"body"},"body"),(0,p.kt)("p",null,"The body section is optional. It defines a single object to be used as \u201cdata pool\u201d or transformation data during the pipeline processing."),(0,p.kt)("p",null,"In case commands return a value, by default they will write this value to the body implicitly. Whereas a previous commands value in the body will be overwritten by the command which comes next."),(0,p.kt)("p",null,"You can access values in the body scope using the Pipeline Expression Language (PEL). See here: ",(0,p.kt)("a",{parentName:"p",href:"https://pipeforce.github.io/docs/guides/pel"},"Pipeline Expression Language (PEL)"),"."),(0,p.kt)("h2",{id:"auto-completion-support"},"Auto-completion support"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note: This is experimental.")),(0,p.kt)("p",null,"In order to enable auto-completion support for pipeline scripts in your local development editor, you need an editor which supports YAML schema validation. Then, you could have auto-completion which shows all available commands and their parameters:"),(0,p.kt)("p",null,(0,p.kt)("img",{src:t(7028).Z})),(0,p.kt)("h3",{id:"intellij"},"IntelliJ"),(0,p.kt)("p",null,"To enable auto-completion in IntelliJ, open preferences and navigate to JSON Schema Mappings:"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Preferences \u2192 Languages & Frameworks \u2192 Schemas & DTDs \u2192 JSON Schema Mappings")),(0,p.kt)("p",null,"Add a new schema mapping with these values:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Name: ",(0,p.kt)("inlineCode",{parentName:"li"},"pipeline-schema")),(0,p.kt)("li",{parentName:"ul"},"Schema URL: ",(0,p.kt)("inlineCode",{parentName:"li"},"https://hub-<NS>.pipeforce.net/api/v3/command:pipe.schema.v7")),(0,p.kt)("li",{parentName:"ul"},"Schema version: ",(0,p.kt)("inlineCode",{parentName:"li"},"JSON Schema version 7"))),(0,p.kt)("p",null,"Add new file path patterns for : ",(0,p.kt)("inlineCode",{parentName:"p"},"*.pi.yaml")),(0,p.kt)("p",null,"Now try it out: Create a new file ",(0,p.kt)("inlineCode",{parentName:"p"},"foo.pi.yaml")," and start typing. You should get support for any file ending in ",(0,p.kt)("inlineCode",{parentName:"p"},"*.pi.yaml"),"."),(0,p.kt)("p",null,"Note: A YAML pipeline script should always end in suffix ",(0,p.kt)("strong",{parentName:"p"},".pi.yaml")," which stands for ",(0,p.kt)("strong",{parentName:"p"},"p"),"ipe",(0,p.kt)("strong",{parentName:"p"},"l"),"ine ",(0,p.kt)("strong",{parentName:"p"},"y"),"aml script."),(0,p.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,p.kt)("p",null,"To enable auto-completion in Visual Studio Code, open ",(0,p.kt)("inlineCode",{parentName:"p"},"Preferences \u2192 Settings")," and search for section ",(0,p.kt)("inlineCode",{parentName:"p"},"json.schemas")," and add a new mapping entry like this:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'    "json.schemas": [\n        {\n            "fileMatch": [\n                "/*.pi.json"\n            ],\n            "url": "https://hub-<NS>.pipeforce.net/api/v3/command:pipe.schema.v7"\n        }\n    ],\n')),(0,p.kt)("p",null,"Now try it out: Create a new file ",(0,p.kt)("inlineCode",{parentName:"p"},"foo.pi.json")," and start typing. You should get support for any file ending in ",(0,p.kt)("inlineCode",{parentName:"p"},"*.pi.json"),". Note: .",(0,p.kt)("strong",{parentName:"p"},"pi.json")," stands for pipeline scripts written in JSON."),(0,p.kt)("p",null,"Note: Visual Studio Code doesn't have built-in schema support for yaml files. If you want to also enable code-completion for your pipeline yaml files, you need to install the YAML language support plugin from Red Hat first: ",(0,p.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"},"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml")),(0,p.kt)("p",null,"Then open ",(0,p.kt)("inlineCode",{parentName:"p"},"Preferences \u2192 Settings")," and add this line to your configuration ",(0,p.kt)("strong",{parentName:"p"},"settings.json"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'"yaml.schemas": { \n  "https://hub-NAMESPACE.pipeforce.org/api/v3/pipe:pipe.schema.v7": ["/*.pi.yaml"] \n}\n')),(0,p.kt)("h3",{id:"online-workbench"},"Online Workbench"),(0,p.kt)("p",null,"The built-in online workbench in the PIPEFORCE portal supports pipeline script completion out-of-the box. "),(0,p.kt)("p",null,"To start completion simply press ",(0,p.kt)("inlineCode",{parentName:"p"},"[Ctrl]")," + ",(0,p.kt)("inlineCode",{parentName:"p"},"[Space]"),". "),(0,p.kt)("p",null,(0,p.kt)("img",{src:t(2708).Z})),(0,p.kt)("p",null,"Beside completion for available commands and their parameters it also supports completion for other parts like utilities and variables for example:"),(0,p.kt)("p",null,(0,p.kt)("img",{src:t(5041).Z})))}u.isMDXComponent=!0},4357:function(e,n,t){n.Z=t.p+"assets/images/grafik-20210711-083848-2ee5d979db1ed6ee42b8cdf1de793dc9.png"},7028:function(e,n,t){n.Z=t.p+"assets/images/image-20200815-094048-367c42f4430fa0c41a9d93f92ca3cfb2.png"},845:function(e,n,t){n.Z=t.p+"assets/images/pipe-chain.drawio-125c0a2cf6602ea372dafb21ea69c4a2.png"},5041:function(e,n,t){n.Z=t.p+"assets/images/workbench-completion-utils-2870ff407fd1920805bae14a1d746a84.png"},2708:function(e,n,t){n.Z=t.p+"assets/images/workbench-completion-ed78b9917f8258c3af8263cef3013a3b.png"}}]);