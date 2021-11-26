"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[8536],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=i,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(h,p(p({ref:t},m),{},{components:a})):n.createElement(h,p({ref:t},m))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,p=new Array(r);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var s=2;s<r;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3533:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),p=["components"],o={},l="Create a Data Mapping Pipeline",s={unversionedId:"tutorials/beginner/create-data-mapping",id:"tutorials/beginner/create-data-mapping",isDocsHomePage:!1,title:"Create a Data Mapping Pipeline",description:"Estimated time: 10 min.",source:"@site/docs/tutorials/beginner/60_create-data-mapping.md",sourceDirName:"tutorials/beginner",slug:"/tutorials/beginner/create-data-mapping",permalink:"/docs/tutorials/beginner/create-data-mapping",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorials/beginner/60_create-data-mapping.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a new Pipeline",permalink:"/docs/tutorials/beginner/create-pipeline"},next:{title:"Load a JSON file",permalink:"/docs/tutorials/beginner/load-json-file"}},m=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Intro",id:"intro",children:[],level:2},{value:"1 - Create a new data mapping pipeline",id:"1---create-a-new-data-mapping-pipeline",children:[],level:2}],u={toc:m};function d(e){var t=e.components,a=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-data-mapping-pipeline"},"Create a Data Mapping Pipeline"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Estimated time:")," 10 min."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PIPEFORCE Enterprise 7.0 or higher"),(0,r.kt)("li",{parentName:"ul"},"You have a valid PIPEFORCE Developer account"),(0,r.kt)("li",{parentName:"ul"},"You have completed tutorial: ",(0,r.kt)("a",{parentName:"li",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/2151284934/Tutorial%3A+Create+a+new+app"},"Tutorial: Create a new app")),(0,r.kt)("li",{parentName:"ul"},"You have completed tutorial: ",(0,r.kt)("a",{parentName:"li",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/2151285094/Tutorial%3A+Create+and+execute+a+pipeline"},"Tutorial: Create and execute a pipeline")),(0,r.kt)("li",{parentName:"ul"},"You have a basic understanding of the PEL: ",(0,r.kt)("a",{parentName:"li",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/2151287454"},"Pipeline Expression Language (PEL)"))),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"As you should already know, a pipeline in PIPEFORCE is an easy to learn ",(0,r.kt)("strong",{parentName:"p"},"low code script")," which can do many different things for you. One very important thing is the mapping, conversion and normalization of (JSON) data."),(0,r.kt)("p",null,"Lets assume this example: You got an customer data set from the sales system and you need to make sure, that this data set perfectly fits into the structure of the ERP system. For this, you need some way of converting the source data from the CRM system to the target format of the ERP system. To do so, you can use the data mapping power of a pipeline."),(0,r.kt)("p",null,"Lets assume the customer data set from the CRM system looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "firstName": "Sam",\n  "lastName": "Smith",\n  "age": 34\n}\n')),(0,r.kt)("p",null,"And we want to convert this input data set into an output format for the ERP system which expects the customer data set to have a structure like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "customer": {\n    "name": "Sam Smith",\n    "age": 34,\n    "isLegalAge": true\n  }\n  "mappingDate": "01.01.2022",\n  "mappedBy": "someUsername"\n}\n')),(0,r.kt)("p",null,"As you can see, we have to do some steps to transform from the source to the target format:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have to nest every customer data inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"customer")," field."),(0,r.kt)("li",{parentName:"ul"},"We have to combine the first and last name into the single ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," field."),(0,r.kt)("li",{parentName:"ul"},"The target system expects the additional field ",(0,r.kt)("inlineCode",{parentName:"li"},"isLegalAge")," which doesn\u2019t exist in the source system. The value of this field must be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," in case the age of the customer is > 18, otherwise it must be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},"Finally, let's assume the target system expects a new field ",(0,r.kt)("inlineCode",{parentName:"li"},"mappingDate")," which contains the date of mapping and ",(0,r.kt)("inlineCode",{parentName:"li"},"mappedBy")," to contain the username of the user who did the mapping just for compliance reasons.")),(0,r.kt)("p",null,"Let's see in this tutorial how to implement this conversion task by using a pipeline script and the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"pipeline-expression-language"},"Pipeline Expression Language (PEL)"))," ."),(0,r.kt)("h2",{id:"1---create-a-new-data-mapping-pipeline"},"1 - Create a new data mapping pipeline"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to the portal ",(0,r.kt)("a",{parentName:"p",href:"https://NAMESPACE.pipeforce.net"},"https://NAMESPACE.pipeforce.net"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to LOW CODE \u2192 Workbench")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the node of your app or create a new one.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the plus icon at the top of the tree.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The new property view opens:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"As property key use: ",(0,r.kt)("inlineCode",{parentName:"li"},"global/app/YOUR_APP/pipeline/data-mapping")),(0,r.kt)("li",{parentName:"ol"},"As mime type use: ",(0,r.kt)("inlineCode",{parentName:"li"},"application/yaml; type=pipeline")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click SAVE")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The new property has been created and the content editor was opened for you.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now copy and paste this content into the editor and overwrite any existing data there by this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="global/app/YOUR_APP/pipeline/data-mapping"',title:'"global/app/YOUR_APP/pipeline/data-mapping"'},'pipeline:\n  - data.mapping:\n      input: |\n        {\n          "firstName": "Sam",\n          "lastName": "Smith",\n          "age": 34\n        }\n        \n      rules: |\n        firstName + \' \' + lastName  -> customer.name,\n        age                         -> customer.age,\n        age >= 18                   -> customer.isLegalAge,\n        @date.now()                 -> mappingDate,\n        @user.username()            -> mappedBy\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In this snippet we created a very simple data mapping configuration:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We used the ",(0,r.kt)("inlineCode",{parentName:"p"},"data.mapping")," command which allows to map from one structure to another.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," parameter defines the source data as a static JSON string in this example. Beside a static string, this value could also be a pipeline expression (PEL) pointing to some dynamic data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"vars")," section or by calling external services (see the ",(0,r.kt)("a",{parentName:"p",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/991363104"},"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/991363104")," for more details on this). In this example we want to focus on the data mapping and keep the rest simple. If the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," would not be specified, the current value from the body would be expected as input. Note the handy pipe symbol ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," here which is specific to the YAML syntax and allows a multi-line value without additional annotations, ticks or quotes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rules")," parameter (or ",(0,r.kt)("inlineCode",{parentName:"p"},"mappingRules")," in versions < 8.0) defines the mapping rules which will read from the input data and write to the output data. You can define as many mapping rules as you want. Each mapping rule ends with a comma and a line break at the very end. They will be applied from top to down on. The input expression is defined at the left hand side and selects + prepares the input data for the mapping. At the right hand side the output expression is defined. It specifies the location where to write the data in the output structure. Both expressions are separated by an arrow ",(0,r.kt)("inlineCode",{parentName:"p"},"->")," . Each side can use the ",(0,r.kt)("a",{parentName:"p",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/991363104"},"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/991363104")," and therefore the full power of this language. Its not necessary to wrap a pipeline expression inside ",(0,r.kt)("inlineCode",{parentName:"p"},"#{")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"}"),". So the format on each line should look like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"inputExpression -> outputExpression,\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"As a first rule we simply concat (= combine) the first and last name separated by a space from input and write the result into the output to the location ",(0,r.kt)("inlineCode",{parentName:"p"},"customer.name"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"firstName + ' ' + lastName  -> customer.name,\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The second mapping rule simply copies the age field from the input to the nested ",(0,r.kt)("inlineCode",{parentName:"p"},"customer.age")," field on the output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"age                         -> customer.age,\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The third rule is an expression which detects whether the age field on the input contains a value >= 18 and writes the result to the output at the location ",(0,r.kt)("inlineCode",{parentName:"p"},"customer.isLegalAge"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"age >= 18                   -> customer.isLegalAge,\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The fourth rule executes the pipeline util ",(0,r.kt)("inlineCode",{parentName:"p"},"@date")," (see ",(0,r.kt)("a",{parentName:"p",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/1002897409"},"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/1002897409")," for more details) in order to return the current date and writes this value to the new field ",(0,r.kt)("inlineCode",{parentName:"p"},"mappingDate")," at top level of the output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"@date.now()                 -> mappingDate,\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The last rule is similar to the previous one and calls the pipeline util ",(0,r.kt)("inlineCode",{parentName:"p"},"@user")," in order to return the username of the currently logged-in user and writes the result to the new field ",(0,r.kt)("inlineCode",{parentName:"p"},"mappedBy")," at the top level of the output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"@user.username()            -> mappedBy\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Not mentioned here because it is optional: The ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," parameter for the command ",(0,r.kt)("inlineCode",{parentName:"p"},"data.mapping"),". Its value must be a ",(0,r.kt)("a",{parentName:"p",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/991363104"},"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/991363104")," which points to the location (or a sub-path) to write the mapping result to (for example a variable inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"vars")," scope). If not specified, it will be written to the body by default. This is the case for our example.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click SAVE to save the pipeline.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then click RUN to execute the pipeline which should look like this:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151285172/image-20211016-072351.png?api=v2",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should then see a result similar to this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "customer": {\n        "name": "Sam Smith",\n        "age": 34,\n        "isLegalAge": true\n    },\n    "mappingDate": "16.01.2022 08:54:17",\n    "mappedBy": "yourUsername"\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This data now can be used and send to an ERP system for example using an additional command."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congrats, you have created your first data mapping rules in PIPEFORCE!")))}d.isMDXComponent=!0}}]);