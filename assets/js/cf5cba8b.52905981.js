"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1694],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},104:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},o="Property Locking",i={unversionedId:"guides/propertystore/property_locks",id:"guides/propertystore/property_locks",isDocsHomePage:!1,title:"Property Locking",description:"Since Version: 8.5",source:"@site/docs/guides/propertystore/15_property_locks.md",sourceDirName:"guides/propertystore",slug:"/guides/propertystore/property_locks",permalink:"/docs/guides/propertystore/property_locks",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/propertystore/15_property_locks.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/propertystore"},next:{title:"Trash Bin",permalink:"/docs/guides/propertystore/trash_bin"}},p=[{value:"What is a Property Lock?",id:"what-is-a-property-lock",children:[],level:2},{value:"Create a Property Lock",id:"create-a-property-lock",children:[{value:"Technical Background",id:"technical-background",children:[],level:3},{value:"Lock exclusive to user",id:"lock-exclusive-to-user",children:[],level:3},{value:"Lock exclusive to role",id:"lock-exclusive-to-role",children:[],level:3},{value:"Lock exlusive to group",id:"lock-exlusive-to-group",children:[],level:3},{value:"Lock exclusive to namespace",id:"lock-exclusive-to-namespace",children:[],level:3},{value:"Global Lock",id:"global-lock",children:[],level:3},{value:"Trash Lock",id:"trash-lock",children:[],level:3}],level:2},{value:"Getting a Property Lock",id:"getting-a-property-lock",children:[],level:2},{value:"Remove Property Lock",id:"remove-property-lock",children:[{value:"Manually",id:"manually",children:[],level:3},{value:"Automatically",id:"automatically",children:[],level:3}],level:2},{value:"Report an Issue",id:"report-an-issue",children:[],level:2}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"property-locking"},"Property Locking"),(0,r.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 8.5"),(0,r.kt)("h2",{id:"what-is-a-property-lock"},"What is a Property Lock?"),(0,r.kt)("p",null,"A lock in PIPEFORCE can be put on any property and hinders a user or a group of users altering this property. This can be useful for example to avoid double-edits with race conditions, for maintenance reasons or in state conditions. Just to name a few examples."),(0,r.kt)("p",null,"Such a lock in PIPEFORCE can be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"exclusive to a ",(0,r.kt)("strong",{parentName:"li"},"user")," = only this particular user can edit this property"),(0,r.kt)("li",{parentName:"ul"},"exclusive to a ",(0,r.kt)("strong",{parentName:"li"},"role")," (permission) = only users with given role / permission can edit"),(0,r.kt)("li",{parentName:"ul"},"exclusive to a ",(0,r.kt)("strong",{parentName:"li"},"group")," = only users which are member of a certain group can edit this property"),(0,r.kt)("li",{parentName:"ul"},"exclusive to a ",(0,r.kt)("strong",{parentName:"li"},"namespace")," = only users within this namespace can edit this property"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"global")," = no one can edit this property (except users with permission ",(0,r.kt)("inlineCode",{parentName:"li"},"ROLE_SYSTEM"),").")),(0,r.kt)("p",null,"A lock can also be generated using a time-to-live (ttl) value in order to remove the lock automatically from the property after this given amount of time has been expired. In case such a ttl is not set, the lock is not released automatically and must be removed manually. A lock can be removed by users, this lock is exclusive to or by the system."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A user with role ",(0,r.kt)("inlineCode",{parentName:"p"},"ROLE_SYSTEM")," can always alter a property, even if a lock has been set, regardless of its type."))),(0,r.kt)("h2",{id:"create-a-property-lock"},"Create a Property Lock"),(0,r.kt)("p",null,"You can create a lock on a property using the command ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/commands#propertylockcreate-v1"},(0,r.kt)("inlineCode",{parentName:"a"},"property.lock.create")),"."),(0,r.kt)("p",null,"Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - property.lock.create:\n      key: "global/app/myapp/data/mydata"\n')),(0,r.kt)("p",null,"This will create the default lock of type ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," on a property with key ",(0,r.kt)("inlineCode",{parentName:"p"},"global/app/myapp/data/mydata"),".\nThis lock will be automatically set as exclusive to the currently logged-in user. "),(0,r.kt)("h3",{id:"technical-background"},"Technical Background"),(0,r.kt)("p",null,"What happens in case a lock must be created for a Property in the backend?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The property attribute ",(0,r.kt)("inlineCode",{parentName:"li"},"locked")," will be set to true. In case the lock is if type ",(0,r.kt)("inlineCode",{parentName:"li"},"trash"),", additionally the attribute ",(0,r.kt)("inlineCode",{parentName:"li"},"trashed")," will be set to true. See ",(0,r.kt)("a",{parentName:"li",href:"docs/propertystore#property-attributes"},"Property Attributes"),"."),(0,r.kt)("li",{parentName:"ol"},"A new tag with name ",(0,r.kt)("inlineCode",{parentName:"li"},"property.lock")," will be created and assigned to the locked property. The value of the tag will be set to the ",(0,r.kt)("a",{parentName:"li",href:"#getting-a-property-lock"},"lock tag")," in JSON format."),(0,r.kt)("li",{parentName:"ol"},"Any write access to a property in the backend will check whether the property is locked or not and if so, whether the lock must take in effect or not. In case the lock is in effect, an exception is thrown.")),(0,r.kt)("h3",{id:"lock-exclusive-to-user"},"Lock exclusive to user"),(0,r.kt)("p",null,"A lock exclusive to a user allows only this particular user to alter the property."),(0,r.kt)("p",null,"You can set the user exclusive lock implicitley, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - property.lock.create:\n      key: "global/app/myapp/data/mydata"\n')),(0,r.kt)("p",null,"This is the default lock. You can also specify the type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - property.lock.create:\n      key: "global/app/myapp/data/mydata"\n      type: user\n')),(0,r.kt)("p",null,"In both cases, the lock will be created exclusively to the currently logged-in user."),(0,r.kt)("p",null,"In case you would like to set the lock for a different user as the one currently logged-in, you have to specify its uuid. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - iam.user.get:\n      username: "someUsername"\n  - property.lock.create:\n      key: "global/app/myapp/data/mydata"\n      type: user\n      uuid: "#{body.uuid}"\n')),(0,r.kt)("p",null,"In this example, a user with username ",(0,r.kt)("inlineCode",{parentName:"p"},"someUsername")," is loaded from IAM and then its uuid is used to create a lock for him."),(0,r.kt)("h3",{id:"lock-exclusive-to-role"},"Lock exclusive to role"),(0,r.kt)("p",null,"A lock exclusive to a role allows only users with this particular role / permission to alter the property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - property.lock.create:\n      key: "global/app/myapp/data/mydata"\n      type: role\n      name: ROLE_SUPPORT\n')),(0,r.kt)("p",null,"In this example only users with role ",(0,r.kt)("inlineCode",{parentName:"p"},"ROLE_SUPPORT")," can alter the property."),(0,r.kt)("p",null,"For details about roles and permission, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/security/permissions"},"here"),"."),(0,r.kt)("h3",{id:"lock-exlusive-to-group"},"Lock exlusive to group"),(0,r.kt)("p",null,"A lock exclusive to a group allows only users which are member of this particular group to alter the property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - property.lock.create:\n      key: "global/app/myapp/data/mydata"\n      type: group\n      name: "Sales"\n')),(0,r.kt)("p",null,"In this example only users which are member of custom group ",(0,r.kt)("em",{parentName:"p"},"Sales")," can alter the property."),(0,r.kt)("p",null,"For details about groups, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/security/permissions"},"here"),"."),(0,r.kt)("h3",{id:"lock-exclusive-to-namespace"},"Lock exclusive to namespace"),(0,r.kt)("p",null,"A namespace lock allows only users within the given namespace (realm) to alter the property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - property.lock.create:\n      key: "global/app/myapp/data/mydata"\n      type: namespace\n      name: "mynamespace"\n')),(0,r.kt)("h3",{id:"global-lock"},"Global Lock"),(0,r.kt)("p",null,"A global lock denies alterting a property for all users except those with ",(0,r.kt)("inlineCode",{parentName:"p"},"ROLE_SYSTEM")," assigned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - property.lock.create:\n      key: "global/app/myapp/data/mydata"\n      type: global\n')),(0,r.kt)("h3",{id:"trash-lock"},"Trash Lock"),(0,r.kt)("p",null,"A lock of type ",(0,r.kt)("inlineCode",{parentName:"p"},"trash")," is a special lock, since it not only puts a global lock on a property, it also makes the property invisible from most of the listings in the system. Differently to the other lock types, in case the ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl")," is set: the property will be fully deleted after this time has been expired."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - property.lock.create:\n      key: "global/app/myapp/data/mydata"\n      type: trash\n      ttl: 864000000 # 10 days in millis\n')),(0,r.kt)("p",null,"In this example, a trash lock has been set which expires after 10 days. Since it is a trash lock, the property will be deleted after these 10 days."),(0,r.kt)("p",null,"Also see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/propertystore/trash_bin"},"Trash Bin"),"."),(0,r.kt)("h2",{id:"getting-a-property-lock"},"Getting a Property Lock"),(0,r.kt)("p",null,"After a lock has been created, the response will return the so called ",(0,r.kt)("strong",{parentName:"p"},"lock tag")," which holds all required information about a lock in JSON format. Such a lock tag can also be loaded using the command ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/commands#propertylockget-v1"},(0,r.kt)("inlineCode",{parentName:"a"},"property.lock.get")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ts": 1364409740897,\n  "ttl": null,\n  "type": "user",\n  "uuid": "79e08af3-5f16-40c7-8fb1-203e0c85376b",\n  "name": "someUsername",\n  "details": ""\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ts")," = The Unix timestamp this lock has been created in milliseconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ttl")," = The time-to-live in milliseconds, after this lock must be removed automatically. If null, the lock will be kept until manually removed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," = One of ",(0,r.kt)("inlineCode",{parentName:"li"},"user"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"role"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"group"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"namespace"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"global")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"trash"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uuid")," = The uuid of the user this lock is exclusive to. Only set in case the lock type is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"user"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," = This value depends on the lock type. If type is ",(0,r.kt)("inlineCode",{parentName:"li"},"user"),", this contains the username of the user, this lock is exclusive to (is automatically set by the backend). If type is one of ",(0,r.kt)("inlineCode",{parentName:"li"},"role"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"group")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"namespace"),", the name must be set to the name of the selected resource, this lock is exclusive to. For example the name of the role, group or namespace. If type is ",(0,r.kt)("inlineCode",{parentName:"li"},"global")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"trash")," the name is typically empty."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"details")," = Some additional, optional information with the lock.")),(0,r.kt)("h2",{id:"remove-property-lock"},"Remove Property Lock"),(0,r.kt)("h3",{id:"manually"},"Manually"),(0,r.kt)("p",null,"In order to manually remove a lock, use the command ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/commands#propertylockremove-v1"},(0,r.kt)("inlineCode",{parentName:"a"},"property.lock.remove")),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - property.lock.remove:\n      key: "global/app/mydata"\n')),(0,r.kt)("h3",{id:"automatically"},"Automatically"),(0,r.kt)("p",null,"In order to automatically release a lock after a certain amount of time, use the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl")," (ttl = time-to-live) when creating the lock. This parameter defines a time in milliseconds after which to remove the lock. After this time has been expired, the lock will be removed from the property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - property.lock.create:\n      key: "global/app/myapp/data/mydata"\n      type: user\n      ttl: 60000 # 1 minute\n')),(0,r.kt)("p",null,"In this example, the user exclusive lock will be automatically removed after 1 minute."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Since the cleanup job - which removes the locks - runs in intverals of several minutes, locks whith a ",(0,r.kt)("inlineCode",{parentName:"p"},"tts")," of a few seconds or even milliseconds below this time range will probably be listed when querying them even if the ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl")," has already been expired. But when trying to alter a property, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl")," is always calculated in real time."))),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In case the lock is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"trash"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl")," value is used to determine after which time the property assigned with the lock must be deleted. Also see ",(0,r.kt)("a",{parentName:"p",href:"#trash-lock"},"Trash Lock"),"."))),(0,r.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your help is needed!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,r.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!"))))}c.isMDXComponent=!0}}]);