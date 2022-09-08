"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[5597],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>u});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=n.createContext({}),s=function(e){var a=n.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(r.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(t),u=l,h=c["".concat(r,".").concat(u)]||c[u]||m[u]||i;return t?n.createElement(h,p(p({ref:a},d),{},{components:t})):n.createElement(h,p({ref:a},d))}));function u(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,p=new Array(i);p[0]=c;var o={};for(var r in a)hasOwnProperty.call(a,r)&&(o[r]=a[r]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var s=2;s<i;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4085:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>r});var n=t(7462),l=(t(7294),t(3905));const i={title:"Command Line Interface (CLI) Reference",sidebar_label:"CLI"},p=void 0,o={unversionedId:"api/cli",id:"api/cli",isDocsHomePage:!1,title:"Command Line Interface (CLI) Reference",description:"The Command Line Interface (short \u201cCLI\u201d or \u201cpi tool\u201d) is a local command-line tool, which allows remote control of PIPEFORCE from the command line.",source:"@site/docs/api/cli.md",sourceDirName:"api",slug:"/api/cli",permalink:"/docs/api/cli",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/api/cli.md",tags:[],version:"current",frontMatter:{title:"Command Line Interface (CLI) Reference",sidebar_label:"CLI"},sidebar:"tutorialSidebar",previous:{title:"Tutorial 14: Create a BPMN Workflow",permalink:"/docs/tutorials/create-bpmn-workflow"},next:{title:"Commands",permalink:"/docs/api/commands"}},r=[{value:"Call structure",id:"call-structure",children:[],level:2},{value:"<code>pi command</code>",id:"pi-command",children:[],level:2},{value:"<code>pi delete</code>",id:"pi-delete",children:[],level:2},{value:"<code>pi get</code>",id:"pi-get",children:[],level:2},{value:"<code>pi help</code>",id:"pi-help",children:[],level:2},{value:"<code>pi list</code>",id:"pi-list",children:[],level:2},{value:"<code>pi new</code>",id:"pi-new",children:[],level:2},{value:"<code>pi pipeline</code>",id:"pi-pipeline",children:[],level:2},{value:"<code>pi publish</code>",id:"pi-publish",children:[],level:2},{value:"<code>pi setup</code>",id:"pi-setup",children:[],level:2},{value:"<code>pi status</code>",id:"pi-status",children:[],level:2},{value:"<code>pi sync</code>",id:"pi-sync",children:[],level:2},{value:"<code>pi update</code>",id:"pi-update",children:[],level:2},{value:"Kubernetes Commands",id:"kubernetes-commands",children:[{value:"<code>pi kdownload</code>",id:"pi-kdownload",children:[],level:3},{value:"<code>pi kexec</code>",id:"pi-kexec",children:[],level:3},{value:"<code>pi kpodname</code>",id:"pi-kpodname",children:[],level:3},{value:"<code>pi ksync</code>",id:"pi-ksync",children:[],level:3},{value:"<code>pi kupload</code>",id:"pi-kupload",children:[],level:3}],level:2}],s={toc:r};function d(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Command Line Interface")," (short \u201cCLI\u201d or \u201cpi tool\u201d) is a local command-line tool, which allows remote control of PIPEFORCE from the command line."),(0,l.kt)("p",null,"It makes it handy to automate local tasks by executing commands and pipelines. It also helps in local development."),(0,l.kt)("p",null,"See the ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"/docs/downloads"},"Downloads"))," section on how to install this tool."),(0,l.kt)("p",null,"The tutorial ",(0,l.kt)("a",{parentName:"p",href:"../tutorials/localworkspace"},"Setup local workspace + CLI")," shows, how to install and work with the CLI."),(0,l.kt)("h2",{id:"call-structure"},"Call structure"),(0,l.kt)("p",null,"The main structure of a CLI command is always like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi <action> <args>\n")),(0,l.kt)("p",null,"To get a list of all supported actions and their parameters, use the help command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi help\n")),(0,l.kt)("p",null,"Below, you can find the description of the most important actions."),(0,l.kt)("h2",{id:"pi-command"},(0,l.kt)("inlineCode",{parentName:"h2"},"pi command")),(0,l.kt)("p",null,"This executes a single pipeline command at the server-side and returns the result."),(0,l.kt)("p",null,"Each parameter will become a command-line parameter."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi command log message=HELLO\n")),(0,l.kt)("p",null,"This executes the ",(0,l.kt)("inlineCode",{parentName:"p"},"log")," command at server-side with the parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," set to ",(0,l.kt)("inlineCode",{parentName:"p"},"HELLO"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pi command mail.send to=my@email.tld subject=Hello message="This is a test"\n')),(0,l.kt)("p",null,"This command sends an email."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note")),(0,l.kt)("p",null,"Use the command ",(0,l.kt)("inlineCode",{parentName:"p"},"pi help command")," to get the documentation of all available commands activated in your license."),(0,l.kt)("p",null,"Or use the command ",(0,l.kt)("inlineCode",{parentName:"p"},"pi help command COMMAND_NAME")," to get the documentation for a specific command."),(0,l.kt)("h2",{id:"pi-delete"},(0,l.kt)("inlineCode",{parentName:"h2"},"pi delete")),(0,l.kt)("p",null,"This deletes the remote resources inside a given app. It doesn\u2019t delete any local resource."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi delete global/app/myapp/pipeline/helloworld\n")),(0,l.kt)("p",null,"This deletes the pipeline helloworld."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi delete global/app/myapp/**\n")),(0,l.kt)("p",null,"This deletes all resources of the app ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp"),"."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This command deletes remote resources without the option to recover. So, be careful in using it!"))),(0,l.kt)("h2",{id:"pi-get"},(0,l.kt)("inlineCode",{parentName:"h2"},"pi get")),(0,l.kt)("p",null,"This downloads all resources of a given app, stores them into the local workspace in order to be able to edit them. If a local resource already exists, this asks for either to overwrite or to skip."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi get global/app/myapp/**\n")),(0,l.kt)("p",null,"This command-line call downloads all resources of the app ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," and its sub-folders, and stores them into the local workspace folder ",(0,l.kt)("inlineCode",{parentName:"p"},"src/global/app/myapp"),". Note, that you have to define the property key here, not the local file path."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("p",null,"This downloads only the resources inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," folder, but no resource from inside its sub-folders."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi get global/app/myapp/*\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 3:")),(0,l.kt)("p",null,"This downloads a single resource by its key:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi get global/app/myapp/pipeline/hello\n")),(0,l.kt)("h2",{id:"pi-help"},(0,l.kt)("inlineCode",{parentName:"h2"},"pi help")),(0,l.kt)("p",null,"Thid lists all available CLI options or pipeline commands."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi help\n")),(0,l.kt)("p",null,"This lists all available command-line options."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi help command\n")),(0,l.kt)("p",null,"This lists the documentation of all available pipeline commands for the currently logged-in user."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi help command log\n")),(0,l.kt)("p",null,"This explains the log pipeline command. The output could look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'log:\n  type: "object"\n  description: "Logs the given input message without changing it. Sets the log message\\\n    \\ in the body in case body is empty. Doesn\'t overwrite any existing content in\\\n    \\ the body."\n  inputType: "JsonNode"\n  outputType: "JsonNode"\n  properties:\n    message:\n      type: "number"\n      description: "The message to log. Can be a string or a pipe expression. If null\\\n        \\ or empty, the full pipe message will be logged."\n      default: null\n    level:\n      type: "string"\n      description: "The log level. Can be one of DEBUG, TRACE, INFO, WARN, ERROR.\\\n        \\ If null or empty, INFO will be used."\n      default: "INFO"\n  required:\n  - "message"\n')),(0,l.kt)("h2",{id:"pi-list"},(0,l.kt)("inlineCode",{parentName:"h2"},"pi list")),(0,l.kt)("p",null,"This lists all remote resources of a given path."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi list global/app/myapp**\n")),(0,l.kt)("p",null,"This lists all resources of the app ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," recursively."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi list global/app/myapp/*\n")),(0,l.kt)("p",null,"This lists all resources of the folder ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp"),", but not the resources inside any sub-folder."),(0,l.kt)("h2",{id:"pi-new"},(0,l.kt)("inlineCode",{parentName:"h2"},"pi new")),(0,l.kt)("p",null,"This creates a new resource based on a wizard."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi new\n")),(0,l.kt)("p",null,"This would print this wizard:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Create new...\n  0: app\n  1: form\n  2: list\n  3: object\n  4: pipeline\n  5: workflow\nChoose number : \n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("p",null,"You can also directly start the resource wizard by the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi new app\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 3:")),(0,l.kt)("p",null,"And if you are inside a app folder, the app you want to create the resource for, is already pre-selected for you."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"~ pipeforce> cd src/global/app/myapp\n~ app/myapp> pi new pipeline\n")),(0,l.kt)("h2",{id:"pi-pipeline"},(0,l.kt)("inlineCode",{parentName:"h2"},"pi pipeline")),(0,l.kt)("p",null,"This executes a a locally stored pipeline file, a remote pipeline or a pipeline uri. Which type of pipeline is detected by the pipeline argument:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Starts with ",(0,l.kt)("inlineCode",{parentName:"li"},"src/"),": It's assumed to be a local pipeline file."),(0,l.kt)("li",{parentName:"ul"},"Starts with ",(0,l.kt)("inlineCode",{parentName:"li"},"global/"),": It's assumed to be a persisted remote pipeline."),(0,l.kt)("li",{parentName:"ul"},"None of the above: It's assumed to be a pipeline uri.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi pipeline src/global/app/myapp/pipeline/helloworld.pi.yaml\n")),(0,l.kt)("p",null,"This example uploads the content of the ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld.pi.yaml")," to the server, executes it there, and returns the result. It doesn't store the pipeline at server-side."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi pipeline global/app/myapp/pipeline/helloworld.pi.yaml\n")),(0,l.kt)("p",null,"This example executes a persisted pipeline stored at the key path ",(0,l.kt)("inlineCode",{parentName:"p"},"global/app/myapp/pipeline/helloworld.pi.yaml"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 3:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pi pipeline "log?message=HELLO"\n')),(0,l.kt)("p",null,"This example takes the given pipeline uri and executes it at server side."),(0,l.kt)("p",null,"The syntax of a pipeline uri looks like this:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<command>[?<arg1>=<value1>&<arg2>=<value2>"),"]"),(0,l.kt)("p",null,"It is also possible to combine multiple commands to form a pipeline using the pipe ",(0,l.kt)("inlineCode",{parentName:"p"},"|"),"\xa0character:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<commandA>?<arg1>=<value1>&<arg2>=<value2>|<commandB>?<arg1>=<value1>&<arg2>=<value2>")),(0,l.kt)("p",null,"Here is an example to re-write this YAML pipeline configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - datetime:\n      format: "dd.MM.YY"\n  - log:\n')),(0,l.kt)("p",null,"To this pipeline uri format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"datetime?format=dd.MM.YY|log\n")),(0,l.kt)("p",null,"Therefore, a call of this pipeline uri would look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pi pipeline "datetime?format=dd.MM.YY|log"\n')),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"23.01.21\n")),(0,l.kt)("p",null,"The idea of a pipeline uri is to adhoc execute commands without the need to create a pipeline file and/or upload it."),(0,l.kt)("p",null,"Also, see the CLI command ",(0,l.kt)("inlineCode",{parentName:"p"},"pi help command"),", which lists all available pipeline commands and their description you can use to build pipelines and pipeline uris."),(0,l.kt)("h2",{id:"pi-publish"},(0,l.kt)("inlineCode",{parentName:"h2"},"pi publish")),(0,l.kt)("p",null,"This uploads your created or changed resources like pipeline or form configurations to the server."),(0,l.kt)("p",null,"In case a resource already exists at the server, this updates only if it has changed since last upload."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi publish\n")),(0,l.kt)("p",null,"This command uploads / updates all resources inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," folder."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("p",null,"If you want to publish only a certain subset of the src folder, you can specify the folder like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi publish src/global/app/myapp/**\n")),(0,l.kt)("p",null,"This will recursively publish any resource inside this folder and its sub-folders."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 3:")),(0,l.kt)("p",null,"In case you want to publish only the files inside this folder, but not its sub-folders and files, you can use a single asterisk instead:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi publish src/global/app/myapp/*\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 4:")),(0,l.kt)("p",null,"If you want to publish a single resource, define it by its filename:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi publish src/global/app/myapp/pipeline/hello.pi.yaml\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 5:")),(0,l.kt)("p",null,"Note, that the path argument is always relatively to your current working dir, as long as you are inside the workspace home folder $USER","_","HOME/pipeforce:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $USER_HOME/pipeforce/src/global/app/myapp\npi publish **\n")),(0,l.kt)("p",null,"This will publish all resources inside ",(0,l.kt)("inlineCode",{parentName:"p"},"src/gobal/app/myapp")," recursively."),(0,l.kt)("p",null,"For security reasons (for example, to not accidentally publish a huge path structure of your file system to the server), publish is only possible in case your current working dir is inside the workspace folder."),(0,l.kt)("h2",{id:"pi-setup"},(0,l.kt)("inlineCode",{parentName:"h2"},"pi setup")),(0,l.kt)("p",null,"This changes the settings of the CLI tool using a wizard and/or installs the CLI if not already done."),(0,l.kt)("p",null,"This writes the final result into the file ",(0,l.kt)("inlineCode",{parentName:"p"},"$USER_HOME/pipeforce/conf/cli.conf.json"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi setup\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("p",null,"For more advanced users, you can use the advanced flag in order to be able to adjust more settings:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi setup advanced\n")),(0,l.kt)("h2",{id:"pi-status"},(0,l.kt)("inlineCode",{parentName:"h2"},"pi status")),(0,l.kt)("p",null,"This returns status information about the CLI."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi status\n")),(0,l.kt)("h2",{id:"pi-sync"},(0,l.kt)("inlineCode",{parentName:"h2"},"pi sync")),(0,l.kt)("p",null,"This does a one-way-sync of files inside the local ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," folder to the server. It watches a given folder, and immediately syncs changes of files inside this folder to the server."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The folder to sync must be located inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," folder of your workspace."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi sync src/global/app/myapp\n")),(0,l.kt)("p",null,"This example syncs all files from the folder ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," to the server."),(0,l.kt)("p",null,"At the beginning of the sync, you will be asked whether you want to backup and cleanup the given folder. If you choose ",(0,l.kt)("inlineCode",{parentName:"p"},"yes"),", then the content of the remote folder will be downloaded and stored in your workspace inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"backup")," folder, and then the remote content gets deleted. This is handy in case you want to start with a clean sync state between local and server side."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This is a one-way-sync from local to server. Changes made on the server-side will not be merged to your local sources. If you need such an approach, please refer to source managament tools like Git, for example, which have built-in merge conflict handling and concurrent editing features."))),(0,l.kt)("h2",{id:"pi-update"},(0,l.kt)("inlineCode",{parentName:"h2"},"pi update")),(0,l.kt)("p",null,"This looks for an update of the CLI and installs it if a newer version exists."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi update\n")),(0,l.kt)("h2",{id:"kubernetes-commands"},"Kubernetes Commands"),(0,l.kt)("p",null,"Since version v3.0.13 the CLI also contains some useful commands in order to make it easier to work with the Kubernetes backend of PIPEFORCE. These commands are intended mainly to simplify the development for backend developers and DevOps."),(0,l.kt)("p",null,"In order to be able to use these extended commands, ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")," must be installed and its current context must be configured in a way to successfully access to the Kubernetes cluster, the commands must be targeted to."),(0,l.kt)("p",null,"All commands specific to Kubernetes are prefixed with a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"k"))," for example ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"k")),(0,l.kt)("inlineCode",{parentName:"p"},"upload"),"."),(0,l.kt)("p",null,"All k-commands are executed inside the namespace of the currently active instance, selected by ",(0,l.kt)("inlineCode",{parentName:"p"},"pi setup")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"pi instance"),"."),(0,l.kt)("h3",{id:"pi-kdownload"},(0,l.kt)("inlineCode",{parentName:"h3"},"pi kdownload")),(0,l.kt)("p",null,"Downloads a file or folder (recursively) from a container inside Kubernetes to the local file system. Automatically selects the container by resolving the given service name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi kdownload <SERVICE> <REMOTE_PATH> <LOCAL_PATH>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi kdownload hub /srv/ /Users/user1/\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"For Windows users")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Make sure to not use backslashes ",(0,l.kt)("inlineCode",{parentName:"p"},"\\")," or drive letters like ",(0,l.kt)("inlineCode",{parentName:"p"},"C:"),"for example in your path. You have to rewrite a path like ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\myfolder")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"C/myfolder")," or simply ",(0,l.kt)("inlineCode",{parentName:"p"},"/myfolder"),"."))),(0,l.kt)("h3",{id:"pi-kexec"},(0,l.kt)("inlineCode",{parentName:"h3"},"pi kexec")),(0,l.kt)("p",null,"Executes a command inside a container within Kubernetes. Automatically selects the container by resolving the given service name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi kexec <SERVICE> -- <REMOTE_COMMAND>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi kexec hub -- ls -l\n")),(0,l.kt)("h3",{id:"pi-kpodname"},(0,l.kt)("inlineCode",{parentName:"h3"},"pi kpodname")),(0,l.kt)("p",null,"Automatically detects the internal pod names for a given PIPEFORCE service name and returns them."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi kpodname <SERVICE>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi kpodname hub\n")),(0,l.kt)("h3",{id:"pi-ksync"},(0,l.kt)("inlineCode",{parentName:"h3"},"pi ksync")),(0,l.kt)("p",null,"Syncs file and folder changes (create, modify, delete) inside a local folder (recursively) with the remote folder in a container. Automatically selects the container by resolving the given service name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi ksync <SERVICE> <LOCAL_PATH> <REMOTE_PATH> [<CHOWN>]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi ksync drive /Users/me/git/drive/ /var/www/html www-data:root\n")),(0,l.kt)("p",null,"This example (one-way) syncs any local changes to the remote container and applies a ",(0,l.kt)("inlineCode",{parentName:"p"},"chown"),"  with ",(0,l.kt)("inlineCode",{parentName:"p"},"www-data:root")," recursively on the synced sources."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"For Windows users")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Make sure to not use backslashes ",(0,l.kt)("inlineCode",{parentName:"p"},"\\")," or drive letters like ",(0,l.kt)("inlineCode",{parentName:"p"},"C:"),"for example in your path. You have to rewrite a path like ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\myfolder")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"C/myfolder")," or simply ",(0,l.kt)("inlineCode",{parentName:"p"},"/myfolder"),"."))),(0,l.kt)("h3",{id:"pi-kupload"},(0,l.kt)("inlineCode",{parentName:"h3"},"pi kupload")),(0,l.kt)("p",null,"Uploads a file or folder (recursively) from local file system to a container inside Kubernetes. Automatically selects the container by resolving the given service name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi kupload <SERVICE> <LOCAL_PATH> <REMOTE_PATH>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pi kupload hub /Users/user1/ /srv/ \n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"For Windows users")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Make sure to not use backslashes ",(0,l.kt)("inlineCode",{parentName:"p"},"\\")," or drive letters like ",(0,l.kt)("inlineCode",{parentName:"p"},"C:"),"for example in your path. You have to rewrite a path like ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\myfolder")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"C/myfolder")," or simply ",(0,l.kt)("inlineCode",{parentName:"p"},"/myfolder"),"."))))}d.isMDXComponent=!0}}]);