"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[5730],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=a,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return t?i.createElement(m,o(o({ref:n},d),{},{components:t})):i.createElement(m,o({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2192:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],l={title:"Headers Reference",sidebar_label:"Headers"},s=void 0,p={unversionedId:"api/headers",id:"api/headers",isDocsHomePage:!1,title:"Headers Reference",description:"Each pipeline can have optional headers defined. A pipeline header is similar to a HTTP header and defines a global \u201cconfiguration item\u201d for the overall execution of the pipeline. In the example below you can see a pipeline with a header defined in the headers section:",source:"@site/docs/api/headers.md",sourceDirName:"api",slug:"/api/headers",permalink:"/docs/api/headers",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/api/headers.md",tags:[],version:"current",frontMatter:{title:"Headers Reference",sidebar_label:"Headers"},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/api/events"},next:{title:"Pipeline Expression Language",permalink:"/docs/api/pel"}},d=[{value:"Headers Reference",id:"headers-reference",children:[{value:"apiVersion",id:"apiversion",children:[],level:3},{value:"authorization",id:"authorization",children:[],level:3},{value:"description",id:"description",children:[],level:3},{value:"exprPrefix",id:"exprprefix",children:[],level:3},{value:"mocksEnabled",id:"mocksenabled",children:[],level:3},{value:"onCommandError",id:"oncommanderror",children:[],level:3},{value:"runWhen",id:"runwhen",children:[],level:3},{value:"tracing",id:"tracing",children:[],level:3}],level:2}],c={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Each pipeline can have ",(0,r.kt)("strong",{parentName:"p"},"optional")," headers defined. A pipeline header is similar to a HTTP header and defines a global \u201cconfiguration item\u201d for the overall execution of the pipeline. In the example below you can see a pipeline with a header defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'headers:\n  description: "This is the hello world pipeline"\n  \npipeline:\n  - log:\n      message: "The value of header \'description\' is: #{headers.description}"\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can access the header values using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," scope in a ",(0,r.kt)("a",{parentName:"p",href:"../api/pel"},"Pipeline Expression (PE)"),"."))),(0,r.kt)("h2",{id:"headers-reference"},"Headers Reference"),(0,r.kt)("p",null,"It is possible to create custom headers and there are some pre-defined headers. Below you can find a reference of the pre-defined headers and their meanings."),(0,r.kt)("h3",{id:"apiversion"},"apiVersion"),(0,r.kt)("p",null,"Defines the version of the pipeline API to be used (for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"v2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"v3"),"). If not set, the latest version is used automatically.                                                                                            "),(0,r.kt)("h3",{id:"authorization"},"authorization"),(0,r.kt)("p",null,"Defines the authorization to be used for this pipeline. Has similar meaning as the HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header. Possible values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RunAs USERNAME")," = Executes the given pipeline as the user with given username. This requires a valid seed authentication or a call from a trusted service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Bearer TOKEN")," = Uses the given (JWT) token for authentication."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Basic CREDENTIALS")," = Uses the given credentials for authentication.")),(0,r.kt)("p",null,"In case no authentication header is set in current pipeline, the existing authentication from the HTTP header or from the backend will be used instead.                                                                                                  "),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"An optional description of this pipeline. The text may contain at max. 250 characters. This description is also used in logs and descriptions wherever possible.                                                                                                 "),(0,r.kt)("h3",{id:"exprprefix"},"exprPrefix"),(0,r.kt)("p",null,"Sometimes it is necessary to change the default prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"#{")," of an expression to a different value. For example if this clashes with some other expression engines. Example:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"p"},'expPrefix: "$"')," "),(0,r.kt)("h3",{id:"mocksenabled"},"mocksEnabled"),(0,r.kt)("p",null,"In case this pipline contains command mocks using ",(0,r.kt)("a",{parentName:"p",href:"../api/commands#mockcommand"},(0,r.kt)("inlineCode",{parentName:"a"},"mock.command"))," this header can switch on / off all mocks at once using a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".                                                                                                     "),(0,r.kt)("h3",{id:"oncommanderror"},"onCommandError"),(0,r.kt)("p",null,"Optional value to define what should happen if a single command in this pipeline has an error / exception. Possible values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"IGNORE"))," = Only the exception message (not the full stacktrace) is logged as warn, but no exception is thrown, so next command in pipeline will be executed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"LOG"))," = The full stacktrace of the exception is logged as error, but no exception is thrown, so next command in pipeline will be executed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"THROW"))," = The exception is thrown and the pipeline execution is stopped at this command. This is the default behavior in case this header doesnt exist or is empty."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"RETRY; times=3; wait=2; then=THROW;"))," If command caused an error, the command is again executed whereas all parameters are optional:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wait")," = the time to wait in seconds before the next retry starts (default = 3)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"times")," = The number of retries before giving up (default = 1)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"then =")," The action to do after the retry was not successfull (one of ",(0,r.kt)("inlineCode",{parentName:"li"},"IGNORE"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"LOG")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"THROW"),")(default = ",(0,r.kt)("inlineCode",{parentName:"li"},"THROW"),")."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ROLLBACK[uri]"))," = Calls the given uri in order to execute a script to rollback. EXPERIMENTAL (ask our support team, if you want use this)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"runAs"))," = DEPRECATED Since version 7.0. Use the command ",(0,r.kt)("inlineCode",{parentName:"li"},"iam.run.as")," or the pipeline header ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization: RunAs USERNAME")," instead. A username of a user under which this pipeline must be executed as. It has the same functionality as the command ",(0,r.kt)("inlineCode",{parentName:"li"},"iam.run.as"),".                                                                                                      ")),(0,r.kt)("h3",{id:"runwhen"},"runWhen"),(0,r.kt)("p",null,"This header is primarily to configure a pipeline which is auto-executed on import or install but can be useful also in other cases. It defines a PE which evaluated on execution of the pipeline. If this expression returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the pipeline is executed, otherwise it is skipped and a info message is logged. Furthermore a warning is returned to the caller that this pipeline was skipped. If the header is not set, the pipeline is always executed.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Here is an example to run the pipeline only when in test mode:  ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"p"},"runWhen: \"#{@instance.profiles().contains('test')}\""),(0,r.kt)("br",null),(0,r.kt)("br",null),"Or when a certain namespace is set:  ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"p"},"runWhen: \"#{@instance.namespace() == 'enterprise'}\""),"                                                                  "),(0,r.kt)("h3",{id:"tracing"},"tracing"),(0,r.kt)("p",null,"If this header is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the pipeline and its commands are not trace logged on execution. Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."))}u.isMDXComponent=!0}}]);