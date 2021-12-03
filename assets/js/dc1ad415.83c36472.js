"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[3380],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5158:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],p={},l="Create a new App",s={unversionedId:"tutorials/beginner/create-app",id:"tutorials/beginner/create-app",isDocsHomePage:!1,title:"Create a new App",description:"Estimated time: 15 min.",source:"@site/docs/tutorials/beginner/20_create-app.md",sourceDirName:"tutorials/beginner",slug:"/tutorials/beginner/create-app",permalink:"/docs/tutorials/beginner/create-app",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/tutorials/beginner/20_create-app.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Basics",permalink:"/docs/tutorials/beginner/basics"},next:{title:"Create a new Form",permalink:"/docs/tutorials/beginner/create-form"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Intro",id:"intro",children:[],level:2},{value:"1 - Create a new app with the online workbench",id:"1---create-a-new-app-with-the-online-workbench",children:[],level:2},{value:"2 - Release your app",id:"2---release-your-app",children:[],level:2}],u={toc:c};function d(e){var t=e.components,p=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-new-app"},"Create a new App"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Estimated time:")," 15 min."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PIPEFORCE Enterprise 7.0 or higher"),(0,o.kt)("li",{parentName:"ul"},"You have a valid PIPEFORCE Developer account")),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"In PIPEFORCE an app groups together resources like scripts, templates, configurations and others which solve a certain business task together. Any pipeline, form or workflow for example is part of exactly one app."),(0,o.kt)("p",null,"For each app certain access rules can be specified. Apps can be installed, uninstalled, exported and imported. Furthermore, it is possible to use staging and versioning for apps. They can be developed online using the workbench or offline using source code files. You can think of apps also like \u201cplug-ins\u201d for PIPEFORCE."),(0,o.kt)("p",null,"Typically, all apps reside in the property store under the key path ",(0,o.kt)("inlineCode",{parentName:"p"},"global/app/..")," for example ",(0,o.kt)("inlineCode",{parentName:"p"},"global/app/myapp"),"."),(0,o.kt)("p",null,"In this tutorial you will learn how to create and publish an app using the online workbench in a few simple steps."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6734).Z})),(0,o.kt)("h2",{id:"1---create-a-new-app-with-the-online-workbench"},"1 - Create a new app with the online workbench"),(0,o.kt)("p",null,"The easiest way to create a new app is by using the online workbench. To do so, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login to your portal https://YOUR","_","NAMESPACE.pipeforce.net.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to LOW CODE \u2192 Workbench.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the node ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," in the tree and click the plus icon at the top.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The new property view opens:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"As a property key use the value ",(0,o.kt)("inlineCode",{parentName:"li"},"global/app/MY_APP/config/app"),". Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"MY_APP")," with the name of the app you would like to create, for example ",(0,o.kt)("inlineCode",{parentName:"li"},"myapp24"),". ",(0,o.kt)("strong",{parentName:"li"},"Do use only lower case letters and don\u2019t use special characters or spaces!")),(0,o.kt)("li",{parentName:"ol"},"As mime type select ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click SAVE:  "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(4941).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The new property configuration was created and pre-filled with some data.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Here you can make later changes to configure your app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For now don\u2019t do any changes and leave it as it is.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"All Apps")," in order to show the apps overview page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Here also your app should be listed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Congrats, you\u2019ve created your first custom app!"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6734).Z})),(0,o.kt)("p",null,"If you click your app, currently nothing happens since we did not add any logic to this app for now. This will change in the next tutorials."),(0,o.kt)("h2",{id:"2---release-your-app"},"2 - Release your app"),(0,o.kt)("p",null,"For security and productivity reasons any app created this way is by design only visible to developers, but not to other users: It is automatically staged in ",(0,o.kt)("strong",{parentName:"p"},"development")," mode in the beginning."),(0,o.kt)("p",null,"In order to show this app also to other users (and therefore move to ",(0,o.kt)("strong",{parentName:"p"},"production")," stage), follow the steps shown below."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," You should switch to production mode only in case you really want to make this app visible to other users like the employees for example. This is usually the case when you\u2019re finished with creating and testing your app. At the time the app is in production mode other users can ",(0,o.kt)("strong",{parentName:"p"},"see and execute")," it!"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Login to portal https://YOUR","_","NAMESPACE.pipeforce.net as admin or developer."),(0,o.kt)("li",{parentName:"ol"},"Go to IAM."),(0,o.kt)("li",{parentName:"ol"},"Select the single user or the group you want to give access to your app."),(0,o.kt)("li",{parentName:"ol"},"Select tab ",(0,o.kt)("inlineCode",{parentName:"li"},"Role Mappings"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"Available Roles")," list select the role ",(0,o.kt)("inlineCode",{parentName:"li"},"CAN_APP_YOURAPP")," (replace ",(0,o.kt)("inlineCode",{parentName:"li"},"YOURAPP")," by the app name you used in section 1) and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Add selected"),". Note that the role name is prefix ",(0,o.kt)("inlineCode",{parentName:"li"},"CAN_APP_")," plus upper case of your app name by convention: So for example if you named your app ",(0,o.kt)("inlineCode",{parentName:"li"},"myapp")," then the role for the app is ",(0,o.kt)("inlineCode",{parentName:"li"},"CAN_APP_MYAPP"),". This role was automatically created for you. A role can also be seen as a permission to view and execute your app."),(0,o.kt)("li",{parentName:"ol"},"After this role was added to the user or group, these users can now see and execute your app.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can create custom staging groups for example ",(0,o.kt)("inlineCode",{parentName:"p"},"app-testing"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"app-qa")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"app-review")," and then assign your ",(0,o.kt)("inlineCode",{parentName:"p"},"CAN_APP_")," role to the according group depending on the stage your app currently is in. With this approach the users of the different groups can see and work with your app depending on the stage of the app. This way you can also easily work with different versions of an app."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Staging"),(0,o.kt)("br",{parentName:"p"}),"\n","Staging is the process of hiding an application from the production context until it was fully tested and approved for production. After this approval it will be switched to a production context so that it will be visible and usable by the target users. PIPEFORCE has two different concepts of staging:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Staging by permission (soft staging)"),(0,o.kt)("br",{parentName:"li"}),"An app can be switched to production by changing its permission. The advantage here is that it is very quick and easy to do so. The downside is that other apps in the same namespace are already in production mode and side effects could potentially harm them. Therefore, you have to be careful in development since apps in development and in production stage reside side by side in the same namespace."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Staging by namespace"),(0,o.kt)("br",{parentName:"li"}),"There are two namespaces: development and production. In the development namespace apps are developed. Also services like databases or other microservices can be in this namespace. Once development and testing is finished, the app will copied to the production namespace. The advantage here is that the two namespaces separate each app with its environment from each other. Chances are very low that development on an app will affect apps in production. The downside is that it is much more effort to put such an app from development to production stage. Staging by namespace requires at least two Enterprise instances or a Corporate license.")))}d.isMDXComponent=!0},4941:function(e,t,a){t.Z=a.p+"assets/images/grafik-20210720-140519-632a10c2e8f92db4df2fb19352fb2def.png"},6734:function(e,t,a){t.Z=a.p+"assets/images/grafik-20210720-140552-70dbb67d14f7f4617d6b3635952bdac2.png"}}]);