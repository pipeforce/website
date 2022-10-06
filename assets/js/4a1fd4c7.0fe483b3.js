"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9261],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>u});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?t.createElement(h,r(r({ref:n},d),{},{components:a})):t.createElement(h,r({ref:n},d))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7493:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=a(7462),i=(a(7294),a(3905));const o={},r="Controlling Pipeline Flow",l={unversionedId:"guides/commands_pipelines/controlling_flow",id:"guides/commands_pipelines/controlling_flow",isDocsHomePage:!1,title:"Controlling Pipeline Flow",description:"Since Version: 4.0",source:"@site/docs/guides/commands_pipelines/35_controlling_flow.md",sourceDirName:"guides/commands_pipelines",slug:"/guides/commands_pipelines/controlling_flow",permalink:"/docs/guides/commands_pipelines/controlling_flow",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/commands_pipelines/35_controlling_flow.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Functions",permalink:"/docs/guides/commands_pipelines/custom_functions"},next:{title:"Versioning",permalink:"/docs/guides/commands_pipelines/command_versioning"}},s=[{value:"Trigger",id:"trigger",children:[{value:"Job",id:"job",children:[],level:3},{value:"Message",id:"message",children:[],level:3},{value:"Event",id:"event",children:[],level:3},{value:"Webhook",id:"webhook",children:[],level:3}],level:2},{value:"If, Else",id:"if-else",children:[{value:"<code>if</code>-Parameter",id:"if-parameter",children:[],level:3},{value:"<code>if</code>-Command",id:"if-command",children:[],level:3}],level:2},{value:"Foreach / Iterator",id:"foreach--iterator",children:[],level:2},{value:"Exit",id:"exit",children:[],level:2},{value:"Retry",id:"retry",children:[],level:2},{value:"Rollback",id:"rollback",children:[],level:2},{value:"Sub-Pipeline",id:"sub-pipeline",children:[],level:2},{value:"Error",id:"error",children:[],level:2},{value:"Finally",id:"finally",children:[],level:2},{value:"Wait",id:"wait",children:[],level:2},{value:"Assert",id:"assert",children:[],level:2}],p={toc:s};function d(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"controlling-pipeline-flow"},"Controlling Pipeline Flow"),(0,i.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 4.0"),(0,i.kt)("p",null,"In its basic form, a ",(0,i.kt)("a",{parentName:"p",href:"/docs/commands_pipelines#pipeline"},"Pipeline")," is executed as a linear flow of ",(0,i.kt)("a",{parentName:"p",href:"/docs/commands_pipelines#command"},"Commands")," whereas each Command is executed one after another, from start to its end. "),(0,i.kt)("p",null,"Sometimes, it is necessary to change this linear flow dynamically, depending on given conditions. PIPEFORCE offers different toolings to controll the flow inside a pipeline dynamically. Most of these toolings are also implemented as commands and therefore can be used like any other commands."),(0,i.kt)("h2",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,"A trigger is an external action which causes a pipeline to be executed. Depending on the input data of a trigger, the execution flow of a pipeline could vary."),(0,i.kt)("p",null,"These triggers are the common ones in PIPEFORCE:"),(0,i.kt)("h3",{id:"job"},"Job"),(0,i.kt)("p",null,"Triggers a pipeline as a job which must be executed after a certain amount of time. For more details see ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/jobs"},"Jobs"),"."),(0,i.kt)("h3",{id:"message"},"Message"),(0,i.kt)("p",null,"Triggers a pipeline in case a message of interest is on the message queue / bus. For more details see ",(0,i.kt)("a",{parentName:"p",href:"/docs/messaging"},"Message"),"."),(0,i.kt)("h3",{id:"event"},"Event"),(0,i.kt)("p",null,"Triggers a pipeline in case an internal event of interest has occured. Events are quite similar to messages, except that their origin is always the hub backend. For more details see ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/messaging/events"},"Events"),". Common event examples are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"property.created")," = A new property has been created in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/propertystore"},"Property Store"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"property.deleted")," = A new property has been deleted from the ",(0,i.kt)("a",{parentName:"li",href:"/docs/propertystore"},"Property Store"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iam.bruteforce.detected")," = A potential brute force attack has been detected. "),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/events"},"Events Reference")," for more events.")),(0,i.kt)("h3",{id:"webhook"},"Webhook"),(0,i.kt)("p",null,"Triggers a pipeline in case an external system sends a request to one of the custom webhook endpoints. For more details see ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/messaging/webhooks"},"Webhhooks"),"."),(0,i.kt)("h2",{id:"if-else"},"If, Else"),(0,i.kt)("p",null,"In some situations it is handy to disable the execution of a command depending on a given condition."),(0,i.kt)("h3",{id:"if-parameter"},(0,i.kt)("inlineCode",{parentName:"h3"},"if"),"-Parameter"),(0,i.kt)("p",null,"One way of skipping a command execution, is by using the common parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),". It is available on any command. Setting this parameter to a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," on a command, will skip the execution of this command. By default this parameter is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". Also see ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#common-parameters"},"Common Parameters"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  logging: "debug"\n\npipeline:\n\n  - drive.read:\n      path: "my.doc"\n\n  - log:\n      message: "Document loaded from my.doc."\n      if: "#{var.logging == \'debug\'}"\n\n  - drive.save:\n      path: "folder/my.doc"\n\n  - log:\n      message: "Document stored to folder/my.doc."\n      if: "#{var.logging == \'debug\'}"\n      \n')),(0,i.kt)("h3",{id:"if-command"},(0,i.kt)("inlineCode",{parentName:"h3"},"if"),"-Command"),(0,i.kt)("p",null,"In case a block of commands must be skipped, you can use the commands ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#if-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"if")),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#ifelse-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"if.else"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#ifend-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"if.end")),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - if:\n      true: "#{1 < 2}"\n\n  - log:\n      message: "1 is smaller than 2"\n\n  - if.else:\n\n  - log:\n      message: "This should never happen..."\n\n  - if.end:\n\n')),(0,i.kt)("p",null,"Also nesting is supported. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  name: "Sabrina"\n  age: 24\n\npipeline:\n\n  - if:\n      true: "#{var.name != \'\'}"\n\n  - if:\n      true: "#{var.age > 21}"\n\n  - log:\n      message: "#{var.name} may have a drink..."\n\n  - if.else:\n\n  - log:\n      message: "#{var.name} is too young to have a drink..."\n\n  - if.end:\n\n  - if.end:\n\n')),(0,i.kt)("h2",{id:"foreach--iterator"},"Foreach / Iterator"),(0,i.kt)("p",null,'Looping over a set of data is also called "iterating" over this set of data. Or in other words, "for each" item from the data set, do some action.'),(0,i.kt)("p",null,"Iterating over a set of data (for example a list, array, map or other type of collections), you can use the command ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#foreach-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"foreach")),". With this approach you can also implement the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/transformers/basics#splitter--iterator"},"Splitter Pattern")," from the enterprise integration pattern."),(0,i.kt)("p",null,"For each entry in the data set, the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#foreach-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"foreach"))," command will execute all subsequent commands until a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#foreachend-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"foreach.end"))," has been found."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  people: ["Sam", "Sarah", "Carol"]\n\npipeline:\n\n  - foreach:\n      in: "#{var.people}"\n      as: "person"\n\n  - log:\n      message: "Hello #{var.person}"\n\n  - foreach.end:\n\n')),(0,i.kt)("p",null,"Also nesting of ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#foreach-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"foreach"))," is possible:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  people: ["Sam", "Carol"]  \n  activities: "biking, swimming, hiking"\n\npipeline:\n\n  - foreach:\n      in: "#{var.people}"\n      as: person\n\n  - foreach:\n      in: "#{var.activities}"\n      as: activity\n\n  - eval:\n      expr: "#{@list.add(body, var.person + \' could do: \' + var.activity)}"\n\n  - foreach.end:\n\n  - foreach.end:\n\nbody: []\n\n')),(0,i.kt)("p",null,"This would produce an output like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    "Sam could do: biking",\n    "Sam could do: swimming",\n    "Sam could do: hiking",\n    "Carol could do: biking",\n    "Carol could do: swimming",\n    "Carol could do: hiking"\n]\n')),(0,i.kt)("p",null,"You can simplify this by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"eval")," parameter instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"eval")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  people: ["Sam", "Carol"]  \n  activities: "biking, swimming, hiking"\n\npipeline:\n\n  - foreach:\n      in: "#{var.people}"\n      as: person\n\n  - foreach:\n      in: "#{var.activities}"\n      as: activity\n      eval: "#{@list.add(body, var.person + \' could do: \' + var.activity)}"\n\n  - foreach.end:\n\n  - foreach.end:\n\nbody: []\n\n')),(0,i.kt)("p",null,"You can also combine the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#foreach-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"foreach"))," with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#if-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"if"))," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  people: [{"name":"Sam", "age": 15}, {"name": "Carol", "age": 35}]  \n  activities: "biking, clubbing"\n\npipeline:\n\n  - foreach:\n      in: "#{var.people}"\n      as: person\n\n  - foreach:\n      in: "#{var.activities}"\n      as: activity\n\n  - if:\n      true: "#{var.person.age < 18 and var.activity == \'clubbing\'}"\n\n  - set.var:\n      key: "allowed"\n      value: "NOT "\n\n  - if.else:\n\n  - set.var:\n      key: "allowed"\n      value: ""\n\n  - if.end:\n      eval: "#{@list.add(body, var.person.name + \' could \' + var.allowed + \'do: \' + var.activity)}"\n\n  - foreach.end:\n\n  - foreach.end:\n\nbody: []\n\n')),(0,i.kt)("p",null,"This would result in an output like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    "Sam could do: biking",\n    "Sam could NOT do: clubbing",\n    "Carol could do: biking",\n    "Carol could do: clubbing"\n]\n')),(0,i.kt)("h2",{id:"exit"},"Exit"),(0,i.kt)("p",null,"Based on a condition, you can exit the pipeline execution using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#exit-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"exit"))," command."),(0,i.kt)("p",null,"In case there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"finally")," command in the pipeline, this will be considered before exiting. See ",(0,i.kt)("a",{parentName:"p",href:"#finally"},"Finally"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n    - exit:\n        if: "#{2 > 1}"\n')),(0,i.kt)("h2",{id:"retry"},"Retry"),(0,i.kt)("p",null,"In case an error occured in a command you can automatically let it retry for a certain amount of time before giving up and exiting the pipeline flow."),(0,i.kt)("p",null,"For more details see ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/commands_pipelines/error_handling#retry"},"Error Handling"),"."),(0,i.kt)("h2",{id:"rollback"},"Rollback"),(0,i.kt)("p",null,"In case an error occured in a command you can automatically call a rollback action."),(0,i.kt)("p",null,"For more details see ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/commands_pipelines/error_handling#rollback"},"Error Handling"),"."),(0,i.kt)("h2",{id:"sub-pipeline"},"Sub-Pipeline"),(0,i.kt)("p",null,"In case you would like to delegate control to another persisted pipeline, you can use the command ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#pipelinestart-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"pipeline.start")),"."),(0,i.kt)("p",null,"For example let's assume you have a persisted pipeline stored under key ",(0,i.kt)("inlineCode",{parentName:"p"},"global/app/myapp/pipeline/concat")," which loads a user from IAM and concats his name and email address like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n    userUuid: null\npipeline:\n    - iam.user.get:\n        uuid: "#{vars.userUuid}"\n    - body:\n        value: "#{body.firstName} #{body.firstName} (#{body.email})"\n')),(0,i.kt)("p",null,"This is the sub-pipeline. The result of the sub-pipeline will be stored in the body. "),(0,i.kt)("p",null,"Now, let's have an example of a pipeline which calls this sub-pipeline and uses its result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n    - pipeline.start:\n        key: "global/app/myapp/pipeline/concat"\n        vars: {"userUuid": "18a887b4-194e-4aac-82a5-ff7b33710594"}\n')),(0,i.kt)("p",null,"This pipeline will call the sub-pipeline ",(0,i.kt)("inlineCode",{parentName:"p"},"global/app/myapp/pipeline/concat")," with parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"userUuid")," and places the result to the body by default. So the output will be something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Sam Smith (s.smith@company.com)\n")),(0,i.kt)("h2",{id:"error"},"Error"),(0,i.kt)("p",null,"You can control what should happen, if a command produces and error. Depding on your configuration, the pipeline flow will change. For example, an error could exit the pipeline flow or trigger some other commands. "),(0,i.kt)("p",null,"For more details see section ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/commands_pipelines/error_handling"},"Error Handling"),". "),(0,i.kt)("h2",{id:"finally"},"Finally"),(0,i.kt)("p",null,"The command ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#finally-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"finally"))," can be used in a pipeline in order to make sure a set of commands is executed in any case at the very end of a pipeline. Even if an error has been occured or the pipeline execution has been cancelled by an ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#exit-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"exit"))," command. This approach is useful for example in case you need to cleanup data or would like to get informed about the pipeline execution result in any case."),(0,i.kt)("p",null,"For more details see ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/commands_pipelines/error_handling#finally"},"Error Handling")),(0,i.kt)("h2",{id:"wait"},"Wait"),(0,i.kt)("p",null,"Sometimes it is necessary to pause the execution flow of a pipeline for a certain amount of time.\nYou can do so using the command ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#wait-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"wait")),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n    - log:\n        message: "Lets wait 2 seconds..."\n    - wait:\n        ms: 2000\n    - log:\n        message: "2 seconds later."\n')),(0,i.kt)("h2",{id:"assert"},"Assert"),(0,i.kt)("p",null,"In case you would like to make sure, a condition in the pipeline is true, you can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#assert-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"assert"))," command to check that. In case the given condition is wrong, the pipeline execution will end and an error will the thrown. This is especially useful in writing tests."),(0,i.kt)("p",null,"This example will end the pipeline execution since it expectes the condition to be ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", but it is wrong:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n    - assert:\n        true: "#{1 > 2}"\n        message: "1 is not greater than 2!"\n')))}d.isMDXComponent=!0}}]);