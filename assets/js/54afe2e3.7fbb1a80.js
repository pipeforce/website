"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[6452],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=p,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:p,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2786:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var n=a(7462),p=(a(7294),a(3905));const r={id:"basics",title:"Apps",sidebar_label:"Basics",slug:"/apps"},o=void 0,l={unversionedId:"guides/apps/basics",id:"guides/apps/basics",isDocsHomePage:!1,title:"Apps",description:"What is an App?",source:"@site/docs/guides/apps/010_apps-intro.md",sourceDirName:"guides/apps",slug:"/apps",permalink:"/docs/apps",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/apps/010_apps-intro.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"basics",title:"Apps",sidebar_label:"Basics",slug:"/apps"},sidebar:"tutorialSidebar",previous:{title:"JSON Schema",permalink:"/docs/guides/propertystore/schema-and-objects"},next:{title:"App Testing",permalink:"/docs/guides/apps/app_testing"}},i=[{value:"What is an App?",id:"what-is-an-app",children:[],level:2},{value:"App properties",id:"app-properties",children:[{value:"form",id:"form",children:[],level:3},{value:"list",id:"list",children:[],level:3},{value:"object",id:"object",children:[{value:"schema",id:"schema",children:[],level:4},{value:"instance",id:"instance",children:[],level:4}],level:3},{value:"pipeline",id:"pipeline",children:[],level:3},{value:"script",id:"script",children:[],level:3},{value:"test",id:"test",children:[],level:3},{value:"workflow",id:"workflow",children:[],level:3}],level:2},{value:"App development workspace",id:"app-development-workspace",children:[],level:2},{value:"Working with VS Code",id:"working-with-vs-code",children:[],level:2}],s={toc:i};function c(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"what-is-an-app"},"What is an App?"),(0,p.kt)("p",null,"In PIPEFORCE, an app groups together resources like scripts, templates, configurations and others to solve a certain business task. Any pipeline, form or workflow etc. are part of exactly one app."),(0,p.kt)("p",null,"Also see ",(0,p.kt)("a",{parentName:"p",href:"../docs/tutorials/create-app"},"this tutorial")," to learn how to create an app in PIPEFORCE."),(0,p.kt)("p",null,"For each app, certain access rules can be specified. Apps can be installed, uninstalled, exported and imported. Furthermore, it is also possible to use staging and versioning for apps. They can be developed online using the workbench or offline using source code files and the ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/cli"},"CLI"),". You can think of apps also like \u201cplug-ins\u201d for PIPEFORCE."),(0,p.kt)("h2",{id:"app-properties"},"App properties"),(0,p.kt)("p",null,"Typically, all properties (resources) of an app reside in the property store under the key path "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"global/app/<NAME>/<RESOURCE_PATH>\n")),(0,p.kt)("p",null,"The key of an app property always starts with prefix ",(0,p.kt)("inlineCode",{parentName:"p"},"global/app"),", followed by the name of the app ",(0,p.kt)("inlineCode",{parentName:"p"},"<NAME>"),", followed by the path of the resource inside the app. For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"global/app/myapp/data/helloworld\n")),(0,p.kt)("p",null,'Inside of an app path, there is a certain "folder" structure at app level which defines the main resource types of an app. The typical folder structure looks like this:'),(0,p.kt)("p",null,(0,p.kt)("img",{src:a(1291).Z})),(0,p.kt)("h3",{id:"form"},"form"),(0,p.kt)("p",null,"This folder contains all form configuration properties for any form of the app, whereas the name of the property is the name of the form. For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"global/app/myApp/form/createUser\nglobal/app/myApp/form/deleteUser\n")),(0,p.kt)("h3",{id:"list"},"list"),(0,p.kt)("p",null,"This folder contains all list configuration properties for any list of the app, whereas the name of the property is the name of the list. For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"global/app/myApp/list/users\nglobal/app/myApp/list/employees\n")),(0,p.kt)("h3",{id:"object"},"object"),(0,p.kt)("p",null,"This folder contains any application model (schema) and its instances (if there are any)."),(0,p.kt)("h4",{id:"schema"},"schema"),(0,p.kt)("p",null,"The schema of an object is stored in a property having this path:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"global/app/myApp/object/<NAME>/<VERSION>/schema\n")),(0,p.kt)("p",null,"Whereas ",(0,p.kt)("inlineCode",{parentName:"p"},"<NAME>")," is the name of the object."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"<VERSION>")," is the version of the object schema."),(0,p.kt)("p",null,"For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"object/person/v1/schema\n")),(0,p.kt)("p",null,"The schema property typically contains as value a JSON schema, which describes this object. For the person object, the schema could, for example, look like this:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n\n  "properties": {\n    "firstName": {\n      "type": "string"\n    },\n    "lastName": {\n      "type": "string"\n    },\n    "age": {\n      "type": "number"\n    },\n    "gender": {\n      "type": "string",\n      "enum": ["male", "female", "neutral"]\n    }\n  }\n}\n')),(0,p.kt)("p",null,"See the JSON schema specification for a description how to define JSON schema documents: ",(0,p.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"https://json-schema.org/")),(0,p.kt)("h4",{id:"instance"},"instance"),(0,p.kt)("p",null,"In case there are object instances based on a schema, they should be typically stored inside this path structure:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"global/app/myApp/object/<NAME>/<VERSION>/instance/<UUID>\n")),(0,p.kt)("p",null,"Whereas ",(0,p.kt)("inlineCode",{parentName:"p"},"<NAME>")," is the name of the object."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"<VERSION>")," is the version of the object schema."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"<UUID>")," is the unique id of a single object."),(0,p.kt)("p",null,"For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"global/app/myApp/object/person/v1/instance/fa471958-fdb7-4bf6-a0a3-c5e8c782893e\n")),(0,p.kt)("p",null,"Each instance property will contain as value the data of the object instance which matches the object schema, for example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "firstName": "Homer",\n  "lastName": "Simpson",\n  "age": 48,\n  "gender": "male"\n}\n')),(0,p.kt)("h3",{id:"pipeline"},"pipeline"),(0,p.kt)("p",null,"This folder contains all pipeline configurations for the given app. A pipeline can be seen as the business logic part of an application."),(0,p.kt)("p",null,"Find more about pipelines ",(0,p.kt)("a",{parentName:"p",href:"../guides/commands_pipeline"},"here")),(0,p.kt)("p",null,"Each property name corresponds with the name of the pipeline and contains as value the pipeline configuration. For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"global/app/myApp/pipeline/informHR\nglobal/app/myApp/pipeline/addToSAP\nglobal/app/myApp/pipeline/addToActiveDirectory\n")),(0,p.kt)("p",null,"Such a pipeline configuration could look like this:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - mail.send:\n      to: hr@company.de\n      subject: "A new employee was addded!"\n')),(0,p.kt)("h3",{id:"script"},"script"),(0,p.kt)("p",null,"Inside of the optional script folder, scripts can be placed which can contain more complex business logic if required. By default, such scripts are written in JavaScript. Optionally also Python or Groovy are available (ask ",(0,p.kt)("a",{parentName:"p",href:"mailto:support@pipeforce.io"},"support@pipeforce.io")," if required). For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"global/app/myApp/script/helloworld\n")),(0,p.kt)("p",null,"Such a script could look like this example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},'function command() {\n\n    pi.message.headers["foo"] = "bar";\n    pi.message.body = "HELLO WORLD IN THE BODY";\n\n    var timestamp = pi.util.timestamp();\n    pi.log.debug("Command script executed at: " + timestamp);\n}\n')),(0,p.kt)("p",null,"You can call such a script from a pipeline, like this example shows:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - script.run:\n      path: "global/app/myApp/script/helloworld"\n')),(0,p.kt)("h3",{id:"test"},"test"),(0,p.kt)("p",null,"This folder typically contains pipelines for tests only. Whenever necessary, PIPEFORCE automatically executes the test pipelines inside this folder to make sure the app is working as expected. Therefore you have to make sure that these tests can be executed at any time and are fully reentrant (once a test has been finished it can be executed again as often as necessary)."),(0,p.kt)("p",null,"For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"global/app/myApp/test/createUserTest\n")),(0,p.kt)("p",null,"The property contains the test pipeline as value. Such a test pipeline could look like this:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  - test:\n      assertTrue(false)\n")),(0,p.kt)("h3",{id:"workflow"},"workflow"),(0,p.kt)("p",null,"This folder contains any BPMN workflow files defining a business process."),(0,p.kt)("p",null,"For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"global/app/myApp/workflow/approveNewEmployee\n")),(0,p.kt)("h2",{id:"app-development-workspace"},"App development workspace"),(0,p.kt)("p",null,"In its simple case you can manage all properties of an app in the property store with the ",(0,p.kt)("inlineCode",{parentName:"p"},"property.*")," commands and the CLI using ",(0,p.kt)("inlineCode",{parentName:"p"},"pi pipeline"),"."),(0,p.kt)("p",null,"But if you want to develop complex apps with forms, pipelines or workflows inside, we recommend you to use a local development & customization workspace. This workspace contains the properties of such an app stored as files inside your local path ",(0,p.kt)("inlineCode",{parentName:"p"},"$USER_HOME/pipeforce/app/myapp"),". Any file created inside the myapp folder can then easily be uploaded to the property store with a single command line call using the CLI:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pi publish src/global/app/myapp\n")),(0,p.kt)("p",null,"This CLI command scans your local ",(0,p.kt)("inlineCode",{parentName:"p"},"myapp")," folder and uploads only those resources which have been changed since the last upload or have been created since then."),(0,p.kt)("p",null,"See here how to setup such a customization workspace: ",(0,p.kt)("a",{parentName:"p",href:"../guides/local-workspace"},"Local Low-Code Workspace")),(0,p.kt)("p",null,"See here for a getting started guide how to setup the CLI and use the local workspace: ",(0,p.kt)("a",{parentName:"p",href:"../api/cli"},"Command Line Interface (CLI)")," ."),(0,p.kt)("h2",{id:"working-with-vs-code"},"Working with VS Code"),(0,p.kt)("p",null,"We recommend you to work with the Visual Studio Code editor to manage your local resources in the customization editor."),(0,p.kt)("p",null,"Learn more about installing VS Code for this here: ",(0,p.kt)("a",{parentName:"p",href:"../tutorials/localworkspace"},"Visual Studio Code")))}c.isMDXComponent=!0},1291:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafik-20201022-181638-2ba8e80ecdb653cda5783ad44068cb82.png"}}]);