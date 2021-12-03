"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[220],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3288:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={},p="Content Object",d={unversionedId:"guides/contentobject",id:"guides/contentobject",isDocsHomePage:!1,title:"Content Object",description:"Content Object",source:"@site/docs/guides/contentobject.md",sourceDirName:"guides",slug:"/guides/contentobject",permalink:"/docs/guides/contentobject",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/contentobject.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/guides/authentication"},next:{title:"developer-manual",permalink:"/docs/guides/developer-manual"}},s=[{value:"Content Object Collection",id:"content-object-collection",children:[],level:2},{value:"Upload a single file to a single command",id:"upload-a-single-file-to-a-single-command",children:[],level:2},{value:"Upload one or more files to a pipeline",id:"upload-one-or-more-files-to-a-pipeline",children:[{value:"Uploading a file base64 encoded",id:"uploading-a-file-base64-encoded",children:[],level:3}],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"content-object"},"Content Object"),(0,o.kt)("p",null,"Content Object"),(0,o.kt)("p",null,"In order to process documents and other files using a pipeline, you first need to load such a file into the pipeline. After loaded, the file is automatically converted into a so called content object format. This is a wrapper around a document which provides all required information for such a document like its name size, mime type aso., for easier processing inside the pipeline. The content object provides these attributes:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the document.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"created")),(0,o.kt)("td",{parentName:"tr",align:null},"long"),(0,o.kt)("td",{parentName:"tr",align:null},"The unix timestamp in millis when this document was created.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"lastUpdated")),(0,o.kt)("td",{parentName:"tr",align:null},"long"),(0,o.kt)("td",{parentName:"tr",align:null},"The unix timetsmap in millis when this document was last modified.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mimeType")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The mime type of this document. If ",(0,o.kt)("inlineCode",{parentName:"td"},"null"),", it assumed to be t",(0,o.kt)("inlineCode",{parentName:"td"},"ext/plain")," by default. See here for a list of official mime types: ",(0,o.kt)("a",{parentName:"td",href:"https://www.iana.org/assignments/media-types/media-types.xhtml"},"https://www.iana.org/assignments/media-types/media-types.xhtml"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"size")),(0,o.kt)("td",{parentName:"tr",align:null},"long"),(0,o.kt)("td",{parentName:"tr",align:null},"The size of the document in bytes or -1 in case the size cannot be determined.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"data")),(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null},"The data of the document. Which format the data has, depends on its mime type. For example if mime type is ",(0,o.kt)("inlineCode",{parentName:"td"},"application/json")," then the data object returns here is a JSON document.")))),(0,o.kt)("p",null,"Here is an example to load a file from the drive service into the body scope and access its attributes of the content object afterwards from there:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  # Load document from drive and set it as content object in the body\n  - drive.read:\n      path: "invoice.pdf"\n  # Access the attributes of the content object in the body\n  - log:\n      message: "Name: #{body.name}, Size: #{body.size}" \n')),(0,o.kt)("h2",{id:"content-object-collection"},"Content Object Collection"),(0,o.kt)("p",null,"In case multiple documents are loaded into a pipeline, such documents are grouped together in a so called content object collection. Such a collection has a similar meaning like a folder in a local file system."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"parent")),(0,o.kt)("td",{parentName:"tr",align:null},"ContentCollection"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the parent collection if this is a nested collection or null in case this is the root collection.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"path")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the path to this collection whereas ",(0,o.kt)("inlineCode",{parentName:"td"},"/")," is returned in case it is the root collection. Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"/rootCol/subCol"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"children")),(0,o.kt)("td",{parentName:"tr",align:null},"ContentObject"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns a list of all content objects which are contained in the collection. This can be a document but also another content collection in case they are nested.")))),(0,o.kt)("p",null,"A Content Collection is also a Content Object and therefore it also has all attributes of the Content Object."),(0,o.kt)("h1",{id:"uploading-a-file"},"Uploading a file"),(0,o.kt)("p",null,"In order to upload a file and use it inside a command or pipeline you have different possibilities."),(0,o.kt)("h2",{id:"upload-a-single-file-to-a-single-command"},"Upload a single file to a single command"),(0,o.kt)("p",null,"In case a command expects a file as input message in its body, you can execute the command from the client using HTTP POST and put the file content in the body of the request. It will be loaded from the body and provided as input to the command\u2019s body. Here\u2019s an example request using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"transform.word2pdf")," which takes a ",(0,o.kt)("inlineCode",{parentName:"p"},".docx")," document as input converts it to PDF and sends back the result as response to the client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"POST /api/v3/pipe:transform.word2pdf HTTP/1.1 \nHost: hub-acme.pipefore.net\n\nBINARY DATA OF my.docx\n")),(0,o.kt)("h2",{id:"upload-one-or-more-files-to-a-pipeline"},"Upload one or more files to a pipeline"),(0,o.kt)("p",null,"In order to upload one or multiple files to be executed by a pipeline, you can make a HTTP POST request with header ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type: multipart/form-data")," to the pipeline endpoint. This will create a HTTP request with multiple parts in the HTTP request body, whereas the very first part is the pipeline YAML and all other parts are one or more files to be uploaded and used inside this pipeline."),(0,o.kt)("p",null,"Here\u2019s an example of the body of such an HTTP multipart request as defined by the HTTP specification:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'POST /api/v3/pipeline HTTP/1.1 \nHost: hub-acme.pipefore.net\nContent-Type: multipart/form-data;boundary="boundary" \n\n--boundary \nContent-Disposition: form-data; name="pipeline.yaml" \n\npipeline:\n - pdf.stamp:\n     text: "Hello World!"\n - drive.save:\n     path: /my-stamped.pdf \n--boundary \nContent-Disposition: form-data; name="my.pdf"; filename="my.pdf" \n\nBINARY DATA OF my.pdf\n--boundary--\n')),(0,o.kt)("p",null,"This example defines a pipeline and a file upload in the multipart body. It uploads the file ",(0,o.kt)("inlineCode",{parentName:"p"},"my.pdf,")," ads a stamp to it and then stores the result in the built-in data room called drive."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The very first part in the body must be the pipeline definition.")," Any subsequent part is then treated as a file to be uploaded and gets passed into the pipeline for processing."),(0,o.kt)("h3",{id:"uploading-a-file-base64-encoded"},"Uploading a file base64 encoded"),(0,o.kt)("p",null,"Another way to upload a file to be used inside a pipeline is to \u201cembed\u201d the file base64 encoded inside the pipeline and upload this pipeline using HTTP POST:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'POST /api/v3/pipeline HTTP/1.1 \nHost: hub-acme.pipefore.net\nContent-Type: "application/yaml"  \n\npipeline:\n - pdf.stamp:\n     text: "Hello World!"\n - drive.save:\n     path: /my-stamped.pdf \n\nbody: "THE BASE64 ENCODED FILE CONTENT GOES HERE..."\n')),(0,o.kt)("p",null,"The downside of this approach is that the base64 encoding of a file increases its size by about ",(0,o.kt)("strong",{parentName:"p"},"33% percent"),". Therefore you should avoid this approach if possible and use the multipart/form-data upload instead."))}m.isMDXComponent=!0}}]);