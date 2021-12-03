"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[5586],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6493:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},p="Release an app",c={unversionedId:"tutorials/advanced/release",id:"tutorials/advanced/release",isDocsHomePage:!1,title:"Release an app",description:"By default, only users assigned to the role ROLEDEVELOPER or ROLEADMIN can see the created app initially. With this approach you can create and test new apps without users and customers even notice it since they cannot see them on the portal or execute them.",source:"@site/docs/tutorials/02_advanced/release.md",sourceDirName:"tutorials/02_advanced",slug:"/tutorials/advanced/release",permalink:"/docs/tutorials/advanced/release",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/tutorials/02_advanced/release.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create your pipeline",permalink:"/docs/tutorials/advanced/create-pipeline"},next:{title:"Command",permalink:"/docs/guides/command"}},l=[],u={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"release-an-app"},"Release an app"),(0,o.kt)("p",null,"By default, only users assigned to the role ",(0,o.kt)("inlineCode",{parentName:"p"},"ROLE_DEVELOPER")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ROLE_ADMIN")," can see the created app initially. With this approach you can create and test new apps without users and customers even notice it since they cannot see them on the portal or execute them."),(0,o.kt)("p",null,"Once your app is stable and you want to \u201crelease\u201d it, you need to create and assign all users and groups who should have access to this app to the the custom role ",(0,o.kt)("inlineCode",{parentName:"p"},"CAN_APP_<APPNAME>")," whereas ",(0,o.kt)("inlineCode",{parentName:"p"},"<APPNAME>")," is the name of your app in upper case letters."),(0,o.kt)("p",null,"For more details about app permissions and app release, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://pipeforce.github.io/docs/guides/permissions"},"Setup Permissions")," ."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Next tutorial:")," ",(0,o.kt)("a",{parentName:"p",href:"https://pipeforce.github.io/docs/tutorials/beginner/create-BPMN-workflow"},"Create a BPMN workflow")))}d.isMDXComponent=!0}}]);