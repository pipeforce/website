"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,y=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"Custom URI Reference",sidebar_label:"Custom URIs"},i=void 0,o={unversionedId:"api/uris",id:"api/uris",title:"Custom URI Reference",description:"Reference documentation of built-int custom URI types.",source:"@site/docs/api/uris.md",sourceDirName:"api",slug:"/api/uris",permalink:"/docs/api/uris",draft:!1,editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/api/uris.md",tags:[],version:"current",frontMatter:{title:"Custom URI Reference",sidebar_label:"Custom URIs"},sidebar:"tutorialSidebar",previous:{title:"Headers",permalink:"/docs/api/headers"},next:{title:"Pipeline Utils",permalink:"/docs/api/utils"}},p={},s=[{value:"Resolving an URI",id:"resolving-an-uri",level:2},{value:"By command",id:"by-command",level:3},{value:"By <code>resolve</code> command",id:"by-resolve-command",level:3},{value:"By the <code>@resolve</code> functions",id:"by-the-resolve-functions",level:3},{value:"Drive URI",id:"drive-uri",level:2},{value:"Pipeline URI",id:"pipeline-uri",level:2},{value:"Property URI",id:"property-uri",level:2},{value:"Property Filter",id:"property-filter",level:3},{value:"Value Filter",id:"value-filter",level:3},{value:"User URI",id:"user-uri",level:2},{value:"Report an Issue",id:"report-an-issue",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Reference documentation of built-int custom URI types."),(0,r.kt)("p",null,"Whenever you need to load data from a location, you can use a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Identifier"},"URI")," to  point to such a location. You do so already by using such URIs in your web browser, for example. Common URI types you might be familiar with, are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://www.google.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ftp://smith:12345@ftp.host")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file:/data/path/contract.docx"))),(0,r.kt)("p",null,"Besides such commonly known URI types, PIPEFORE also supports custom URI types to simplify access to common resources. Whenever a URI is accepted as an argument, for example in commands or utils, you can apply such custom URIs. Here are some examples of such custom URIs in PIPEFORCE:"),(0,r.kt)("admonition",{title:"Examples ",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$uri:drive:/someFolder/myFile.txt")," - Loads a file from the ",(0,r.kt)("inlineCode",{parentName:"li"},"drive")," data room."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$uri:property:global/app/myapp/template/text")," - Loads a property from the property store."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$uri:property:global/app/myapp/template/text@value")," - Loads the value of a property from the property store."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$uri:pipeline:global/app/myapp/pipeline/hello")," - Executes the persisted pipeline at given location and returns the final body content as result."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$uri:user:admin")," - Returns the information object of the given user with given username."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$uri:user:uuid=260e8400-e29b-11d4-a716-443655440000")," - Returns the information object of the given user with given uuid."))),(0,r.kt)("admonition",{title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Custom PIPEFORCE uris typically start with prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"$uri:")," followed by the concrete uri type. ")),(0,r.kt)("p",null,"Here is an example to apply a custom URI on a command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n    - mails.send:\n        to: recipient@mail.tld\n        subject: "Hello!"\n        message": Hello World!"\n        attachments: "$uri:property:global/app/myapp/resources/file"\n')),(0,r.kt)("p",null,"As you can see in this example, the attachments argument contains a custom URI pointing to a property in the property store. This property will be loaded and added as an attachment."),(0,r.kt)("p",null,"And in this example, a custom uri is used inside a PEL util instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n    - set.body:\n        value: \"#{@resolve.uri('$uri:drive:/someFolder/document.json')}\"\n")),(0,r.kt)("h2",{id:"resolving-an-uri"},"Resolving an URI"),(0,r.kt)("p",null,"You have multiple options to resolve an URI: Resolving an URI means, loading\nthe content this URI is pointing to."),(0,r.kt)("h3",{id:"by-command"},"By command"),(0,r.kt)("p",null,"In case you use a URI as parameter to a supporting command, this URI will automatically resolved\nto its content data by this command, as you could see by the previous example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n    - mails.send:\n        to: recipient@mail.tld\n        subject: "Hello!"\n        message": Hello World!"\n        attachments: "$uri:property:global/app/myapp/resources/file"\n')),(0,r.kt)("h3",{id:"by-resolve-command"},"By ",(0,r.kt)("inlineCode",{parentName:"h3"},"resolve")," command"),(0,r.kt)("p",null,"In order to explicitely resolve an URI, there is a special command ",(0,r.kt)("inlineCode",{parentName:"p"},"resolve")," for this, which can resolve any URI and returns the content of it."),(0,r.kt)("p",null,"You can use it in a pipeline like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n    - resolve:\n        uri: "$uri:property:gloabl/app/myapp/config/app"\n')),(0,r.kt)("p",null,"This example will return you the full property (metdata + value) of the given property path. For example like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "checksum": "sha-256=38334e50687bc68125e3b66121311a0bd1b848b8fa36c85dfe189d84313c5582",\n    "path": "/pipeforce/ns/global/app/myapp/config/app",\n    "uuid": "cc059f6e-fa6a-4ad8-bc51-04a85e33b965",\n    "locked": false,\n    "trashed": false,\n    "value": "{ \\"title\\": \\"My App\\", ...}",\n    "defaultValue": null,\n    "type": "application/json",\n    "created": 1669907722095,\n    "updated": 1671171893712,\n    "timeToLive": null\n}\n')),(0,r.kt)("p",null,"In order to return only the value of a property, add a property filter with ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," at the end (see below for more details about this). For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n    - resolve:\n        uri: "$uri:property:gloabl/app/myapp/config/app@value"\n')),(0,r.kt)("p",null,"This will the return only the value part of the property as JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "My App",\n    "description": "This is my app",\n    "icon": "assignment",\n    "tags": [\n        "myapp"\n    ],\n    ...\n}\n')),(0,r.kt)("p",null,"And if you would like return only the ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," text of the property value, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," symbol which filters the value of a property, in case it is a JSON document (more about this in the description for Property URI below). For example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n    - resolve:\n        uri: "$uri:property:gloabl/app/myapp/config/app#title"\n')),(0,r.kt)("p",null,"This would return:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"My App\n")),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In case you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," symbol or any other symbol reserved by a GET request URL, you need to decode the uri parameter. Alternatively you can send\nthe uri in a POST request, ",(0,r.kt)("inlineCode",{parentName:"p"},"form-data")," encoded in the body. In this case, no encoding is required.")),(0,r.kt)("p",null,"Here is an example how to use this command with ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," on the terminal with URI encoded parameter (the symbol ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," is encoded to ",(0,r.kt)("inlineCode",{parentName:"p"},"%23"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET -u username:password 'https://hub-ns.pipeforce.net/api/v3/command/resolve?uri=$uri:property:gloabl/app/myapp/config/app%23title'\n")),(0,r.kt)("h3",{id:"by-the-resolve-functions"},"By the ",(0,r.kt)("inlineCode",{parentName:"h3"},"@resolve")," functions"),(0,r.kt)("p",null,"Another possibility inside a pipeline is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@resolve.uri")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n    - log:\n        message: \"Content is: #{@resolve.uri('$uri:property:gloabl/app/myapp/config/app@value')}\"\n")),(0,r.kt)("h2",{id:"drive-uri"},"Drive URI"),(0,r.kt)("p",null,"This custom URI points to a file on the data room service ",(0,r.kt)("inlineCode",{parentName:"p"},"drive"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$uri:drive:[PATH TO FILE OR FOLDER]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n    - mail.send:\n        attachments: "$uri:drive:/contracts/contract1.pdf"\n')),(0,r.kt)("h2",{id:"pipeline-uri"},"Pipeline URI"),(0,r.kt)("p",null,"This URI can be used to execute a persisted pipeline, and return the final body output of this pipeline as a result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$uri:pipeline:[PIPELINE PATH]\n")),(0,r.kt)("p",null,"Let's assume you have a pipeline like this stored at ",(0,r.kt)("inlineCode",{parentName:"p"},"global/app/myapp/pipeline/hello"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n    - set.body:\n        value: "HELLO WORLD!"\n')),(0,r.kt)("p",null,"To execute this pipeline and to output this hello world example, you could execute a URI like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n    - log:\n        message: \"Output: #{@resolve.uri('$uri:pipeline:global/app/myapp/pipeline/hello')}\"\n")),(0,r.kt)("p",null,"This will create a log-entry like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Output: HELLO WORLD!\n")),(0,r.kt)("h2",{id:"property-uri"},"Property URI"),(0,r.kt)("p",null,"This custom URI points to a property in the property store."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$uri:property:[PATH OF THE PROPERTY]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n    - set.body:\n        value: \"#{@resolve.uri('$uri:property:global/app/myapp/object/person')}\"\n")),(0,r.kt)("h3",{id:"property-filter"},"Property Filter"),(0,r.kt)("p",null,"It is also possible to further filter the property using a PE, which gets applied to the property before its result will be returned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$uri:property:[PATH]@[PROPERTY_PEL]\n")),(0,r.kt)("p",null,"As you might already know, a property has a structure like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n\n    "path": "/unique/path/of/the/property",\n    "uuid": "unique id",\n    "type": "mime type of this property",\n    "created": createdTimeStampInMillis,\n    "value": "The payload of the property",\n    "attachments": [\n\n        {\n            "uuid": "unique id",\n            "name": "file name of the attachment",\n            "size": bytes,\n            "contentType": "content type of this attachment",\n            "chunks": [\n                {\n                    "size": bytes,\n                    "content": byteArray\n                },\n                ...\n            ]\n        },\n        ...\n    ]\n    ...\n}\n')),(0,r.kt)("p",null,"For a full list of the attributes of a property, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../propertystore#what-is-a-property"},"Property Store Guide"),"."),(0,r.kt)("p",null,"With a Property Filter, you can now select the part you would like to return in your URI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n    - log:\n        message: \"Num. of attachments: #{@resolve.uri('$uri:property:global/app/myapp/object/person@attachments.size()')}\"\n")),(0,r.kt)("p",null,"As you can see in this example, you can count the number of attachments of the property with a single URI call."),(0,r.kt)("h3",{id:"value-filter"},"Value Filter"),(0,r.kt)("p",null,"In case the value of a property is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json"),", you can apply a filter on ",(0,r.kt)("strong",{parentName:"p"},"the value")," in order to return just a subset from the JSON value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$uri:property:[PATH]#[VALUE_PEL]\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This filter only works in case the value of the property is of the type: ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json"),"!")),(0,r.kt)("p",null,"Let's assume we have a property in the property store like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "path": "path/to/person",\n    "type": "application/json",\n    "value": {\n        "name": "Max Master",\n        "age": 35,\n        "hobbies": [\n            "swimming",\n            "hiking"\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"We can use a Value Filter in the URI in order to directly return the name of the person, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n    - log:\n        message: \"Name: #{@resolve.uri('$uri:property:path/to/person#name')}\"\n")),(0,r.kt)("p",null,"Which will log a message like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Name: Max Master\n")),(0,r.kt)("p",null,"It's possible to use the full power of the PEL to filter, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n    - log:\n        message: \"Number of hobbies: #{@resolve.uri('$uri:property:path/to/person#hobbies.size()')}\"\n")),(0,r.kt)("p",null,"Which will log a message like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Number of hobbies: 3\n")),(0,r.kt)("h2",{id:"user-uri"},"User URI"),(0,r.kt)("p",null,"This uri is handy to load a user object given by a username or uuid."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$uri:user:[USERNAME]\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$uri:user:uuid=[UUID]\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n    - set.body:\n        value: \"#{@resolve.uri('$uri:user:maria')}\"\n")),(0,r.kt)("p",null,"This will return the user-info data similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uuid": "someUuid",\n    "username": "maria",\n    "email": "some@email.tld",\n    "firstName": "Maria",\n    "lastName": "Meyer",\n    ...\n}\n')),(0,r.kt)("p",null,"The same is true when using the uuid of the user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n    - set.body:\n        value: \"#{@resolve.uri('$uri:user:uuid=someUuid')}\"\n")),(0,r.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,r.kt)("admonition",{title:"Your help is needed!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,r.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!")))}m.isMDXComponent=!0}}]);