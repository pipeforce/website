"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[3720],{3905:(e,A,t)=>{t.d(A,{Zo:()=>d,kt:()=>I});var a=t(7294);function n(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function r(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);A&&(a=a.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?r(Object(t),!0).forEach((function(A){n(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function g(e,A){if(null==e)return{};var t,a,n=function(e,A){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),o=function(e){var A=a.useContext(i),t=A;return e&&(t="function"==typeof e?e(A):l(l({},A),e)),t},d=function(e){var A=o(e.components);return a.createElement(i.Provider,{value:A},e.children)},C={inlineCode:"code",wrapper:function(e){var A=e.children;return a.createElement(a.Fragment,{},A)}},p=a.forwardRef((function(e,A){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),p=o(t),I=n,E=p["".concat(i,".").concat(I)]||p[I]||C[I]||r;return t?a.createElement(E,l(l({ref:A},d),{},{components:t})):a.createElement(E,l({ref:A},d))}));function I(e,A){var t=arguments,n=A&&A.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=p;var g={};for(var i in A)hasOwnProperty.call(A,i)&&(g[i]=A[i]);g.originalType=e,g.mdxType="string"==typeof e?e:n,l[1]=g;for(var o=2;o<r;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2841:(e,A,t)=>{t.r(A),t.d(A,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>g,toc:()=>i});var a=t(7462),n=(t(7294),t(3905));const r={},l="Look & Feel",g={unversionedId:"guides/forms/forms-lookandfeel",id:"guides/forms/forms-lookandfeel",isDocsHomePage:!1,title:"Look & Feel",description:"The appearance attributes allow you to change the look and feel of your form elements, like color, height, weight, or borders.",source:"@site/docs/guides/forms/030_forms-lookandfeel.md",sourceDirName:"guides/forms",slug:"/guides/forms/forms-lookandfeel",permalink:"/docs/guides/forms/forms-lookandfeel",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/forms/030_forms-lookandfeel.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Orientation",permalink:"/docs/guides/forms/forms-orientation"},next:{title:"Validation",permalink:"/docs/guides/forms/forms-validation"}},i=[{value:"Types",id:"types",children:[],level:2},{value:"Attributes",id:"attributes",children:[],level:2},{value:"Default color palette",id:"default-color-palette",children:[],level:2},{value:"Material icons",id:"material-icons",children:[],level:2},{value:"Report an Issue",id:"report-an-issue",children:[],level:2}],o={toc:i};function d(e){let{components:A,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:A,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"look--feel"},"Look & Feel"),(0,n.kt)("p",null,"The appearance attributes allow you to change the look and feel of your form elements, like color, height, weight, or borders."),(0,n.kt)("p",null,"To do so, you need to add those look & feel attributes to the field in form configuration. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0 "title": "Person",\n\xa0 "description": "A person form",\xa0 ...\n\xa0 "layout": {\n\xa0\xa0\xa0 "items": [\n\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "field": "firstName",\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "bgColor": "red",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "icon":"face"\n\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0 ...\n\xa0\xa0\xa0 ]\n\xa0 }\n}\n')),(0,n.kt)("p",null,"This would change the look and feel of the form like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(2361).Z})),(0,n.kt)("h2",{id:"types"},"Types"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"By default, the field type is detected from the JSON Schema, so there is no requirement to change this.")," But, you can customize it using these type attributes, if required."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Type")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'type="password"')),(0,n.kt)("td",{parentName:"tr",align:null},"Hides the input since it is sensitive data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'type="email"')),(0,n.kt)("td",{parentName:"tr",align:null},"Renders the field using the browser's native email widget (depends on the browser if it is supported).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'type="search"')),(0,n.kt)("td",{parentName:"tr",align:null},"Renders the field using the browser's native search widget  ",(0,n.kt)("br",null),"depends on the browser if it is supported).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'type="url"')),(0,n.kt)("td",{parentName:"tr",align:null},"Renders the field using the browser's native url widget  ",(0,n.kt)("br",null),"depends on the browser if it is supported).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'type="tel"')),(0,n.kt)("td",{parentName:"tr",align:null},"Renders the field using the browser's native phone widget  ",(0,n.kt)("br",null),"(depends on the browser if it is supported).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'type="textarea"')),(0,n.kt)("td",{parentName:"tr",align:null},"Renders the field using the browser's native textarea widget  ",(0,n.kt)("br",null),"(depends on the browser if it is supported).")))),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("p",null,"These are are the attributes you can set to change the appearance of a field:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Value")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bgColor")),(0,n.kt)("td",{parentName:"tr",align:null},"One of the color names of the default palette. See below."),(0,n.kt)("td",{parentName:"tr",align:null},"Changes the background color of an element. For example, ",(0,n.kt)("inlineCode",{parentName:"td"},"red"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"green"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"blue"),", or ",(0,n.kt)("inlineCode",{parentName:"td"},"indigio-5"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"color")),(0,n.kt)("td",{parentName:"tr",align:null},"One of the color names of the default palette. See below."),(0,n.kt)("td",{parentName:"tr",align:null},"Changes the color of the element label and its border.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"height")),(0,n.kt)("td",{parentName:"tr",align:null},"Integer. For example, ",(0,n.kt)("inlineCode",{parentName:"td"},"200"),"."),(0,n.kt)("td",{parentName:"tr",align:null},"Sets the fixed height of the element.",(0,n.kt)("br",null),(0,n.kt)("br",null),"(use ",(0,n.kt)("inlineCode",{parentName:"td"},"min-height")," & ",(0,n.kt)("inlineCode",{parentName:"td"},"max-height")," to set half limits)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"icon")),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the material icon."),(0,n.kt)("td",{parentName:"tr",align:null},"Shows an icon in the element. See the material icons for a reference of available icon names: ",(0,n.kt)("a",{parentName:"td",href:"https://material.io/resources/icons"},"https://material.io/resources/icons"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"width")),(0,n.kt)("td",{parentName:"tr",align:null},"Integer. For example, ",(0,n.kt)("inlineCode",{parentName:"td"},"500"),"."),(0,n.kt)("td",{parentName:"tr",align:null},"Sets the fixed width of an element.",(0,n.kt)("br",null),(0,n.kt)("br",null),"(use ",(0,n.kt)("inlineCode",{parentName:"td"},"min-width")," & ",(0,n.kt)("inlineCode",{parentName:"td"},"max-width")," to set half limits)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"readonly")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),"."),(0,n.kt)("td",{parentName:"tr",align:null},"Makes an element read only, so no value can be set there.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rounded")),(0,n.kt)("td",{parentName:"tr",align:null},"Example:  ",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},'"rounded":""')),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:t(2861).Z}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"filled")),(0,n.kt)("td",{parentName:"tr",align:null},"Example:  ",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},'"filled":""')),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:t(3144).Z}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"autogrow")),(0,n.kt)("td",{parentName:"tr",align:null},"Example:  ",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},'"autogrow":""')),(0,n.kt)("td",{parentName:"tr",align:null},"The field automatically grows while the user is typing more text.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"suffix")),(0,n.kt)("td",{parentName:"tr",align:null},"Example: ",(0,n.kt)("inlineCode",{parentName:"td"},'"suffix":"@email.de"')),(0,n.kt)("td",{parentName:"tr",align:null},"Shows a suffix for example ",(0,n.kt)("inlineCode",{parentName:"td"},"@email.de")," inside the field.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"prefix")),(0,n.kt)("td",{parentName:"tr",align:null},"Example:  ",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},'"prefix":"EUR"')),(0,n.kt)("td",{parentName:"tr",align:null},"Shows a prefix for example ",(0,n.kt)("inlineCode",{parentName:"td"},"EUR")," inside the field.")))),(0,n.kt)("h2",{id:"default-color-palette"},"Default color palette"),(0,n.kt)("p",null,"In order to change the color of an element, use one of the color names from these default palettes."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(6994).Z}),(0,n.kt)("img",{src:t(4769).Z}),(0,n.kt)("img",{src:t(4440).Z}),(0,n.kt)("img",{src:t(5643).Z})),(0,n.kt)("h2",{id:"material-icons"},"Material icons"),(0,n.kt)("p",null,"Below, you can find a preview of icons. To get the full list and name of all possible icons, go to ",(0,n.kt)("a",{parentName:"p",href:"https://material.io/resources/icons"},"https://material.io/resources/icons"),", and search for the icon you need."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(3742).Z}),(0,n.kt)("img",{src:t(1924).Z})),(0,n.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your help is needed!")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,n.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!"))))}d.isMDXComponent=!0},6994:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/color-palette-a042341aa4185940f34f3818cfd3d6a8.png"},4769:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/color-palette1-65f9bb247c7e7337a5fe2e533e9c44ab.png"},4440:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/color-palette2-2b588d392f4912ad3c60aeef6c40d824.png"},5643:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/color-palette3-90110bb614ae8a6f0e87343b1879e00e.png"},3144:(e,A,t)=>{t.d(A,{Z:()=>a});const a="data:image/png;base64,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PoMnQIAAAQIECBAQaP0GCBAgQIAAAQIEei0g0PZ6+gyeAAECBAgQIEBAoPUbIECAAAECBAgQ6LWAQNvr6TN4AgQIECBAgAABgdZvgAABAgQIECBAoNcCAm2vp8/gCRAgQIAAAQIEBFq/AQIECBAgQIAAgV4LCLS9nj6DJ0CAAAECBAgQEGj9BggQIECAAAECBHotIND2evoMngABAgQIECBAQKD1GyBAgAABAgQIEOi1gEDb6+kzeAIECBAgQIAAAYHWb4AAAQIECBAgQKDXAgJtr6fP4AkQIECAAAECBBbVRLBv3740Pj6e4rh///40MTFR0/CMhQABAgQIECAwbwVGRkbSggUL0sKFC9OiRYuaYy0YI/+GxuKpMcLr2NhYE2RrgTEOAgQIECBAgACBqQUi2C5ZsqQJuVPXmptvigfavXv3pj179liNnZv51gsBAgQIECBAoDOBWLVdvHhxGh0d7azN2TRUdA9trMwKs7OZNucQIECAAAECBMoLxH/0R5aLTFeyFA20sc2ggh0PJf31TYAAAQIECBDotUAbakv+EcUCbVz4Ff8UAgQIECBAgACBfgu0F/WX+iuKBdrYO6sQIECAAAECBAgcGQIls12xQGt19sj48forCBAgQIAAAQIhUDLbFQu09s768RMgQIAAAQIEjhyBktlOoD1yfkf+EgIECBAgQIBAMYF5GWiLaeuYAAECBAgQIEDgiBIotkJ7RCn6YwgQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhYBA24WiNggQIECAAAECBIoJCLTF6HVMgAABAgQIECDQhcCiLhrRxtQCO3fuTK+88kpTYcmSJWnt2rWHVJ5JnUNOmsMPvvzyy/TRRx81PZ522mlp9erVc9i7rggQIECAAAEC0wvMq0C7f//+9PXXX08vMs23y5YtSxHo2jIxMZE2btyYtm/fni655JK0fPny9qvB8ffff0+fffZZ8/6YY46ZNNDOpM6gwQIvvv/++8HfcN555xUYgS4JECBAgAABAlMLzKtAOzY2ljZs2DC1xn98s3LlyrRmzZpBrU2bNqXHHnusef/222+n+++/P42Ojg6+94IAAQIECBAgQOD/L2AP7WEY//jjj4OzIyzHSqtCgAABAgQIECAwtwLzaoX2YNorr7wynXTSSQd/POX7M84444DvLr744hT7S3fs2JEuv/zydOKJJx7wvTcECBAgQIAAAQL/f4F5HWgjkF5wwQWzVl66dGm6++67U+ylHRkZmXU7TiRAgAABAgQIEJi9gC0Hs7cbnCnMDii8IECAAAECBAjMuYBAO+fk3Xf4xx9/pPHx8cNuOFaa//zzz8NuRwMECBAgQIAAgbkUmNdbDg4XeuvWren5559vmjn66KPTXXfddbhNzvj8uMPCG2+8kbZt25bigrSFCxemU045JcU+36uuuiqdc845M2orgvDrr7+evvnmm+b2Y9FWbKVYsWJFcyuyyy67bEbtqESAAAECBAgQKCUg0B6GfIS/uAdtlLjH7FyU6POJJ55IEWiHy759+9KuXbuaf5988knz8IPrr79+2r29u3fvTo8//niKYD5c4m4N8S/6+Oqrr7IunBtux2sCBAgQIECAwFwICLRzodxRH7Ed4OGHH25CazS5YMGCdPbZZzersnv27GnCdTwEIcLtiy++mH755Zd06623Ttp7BNb169c3ddoKRx11VNPeokWL0pYtW9Lff/+dPv7446afto4jAQIECBAgQKA2AYG2thmZZjzPPffcIMwef/zx6fbbb0/DT+6KPbCvvvpqeumll1I8Fe39999P11577QFPN2ubf+211w4IszfddFNatWrVYEU32oqV21jBjT26bYnPFQIECBAgQIBATQIuCqtpNqYZy+bNm9OHH37Y1IiV2TvuuOOAMBtfxN0WbrjhhuaeuPE+Qm2E24NLrM6+++67g49vvvnmdOONNw7CbHwRbZ177rnpzjvvTIsXLx7U9YIAAQIECBAgUJvAvF6hffLJJ2f0qNoTTjghrVu3rujcxWprW6644opma0D7/uDj6tWr03vvvdd8/MUXXzR3Lhje4/vWW2+lf/75p/k+Pr/66qsPbmLw/qyzzkrXXXfdpMF4UMkLAgQIECBAgEBBgXkdaGd6i6q4g0DJsnfv3uaJZO0YLrroovblpMfYjhBPLfv555+bhz789NNPB1y0tnPnzsF5EY5HR0cH7yd7Mfz3u+fuZEI+I0CAAAECBEoKzOtAu2zZshn9d3oExJLlhx9+SHHRV5TYbhDj/vXXX6cdUjzSNwJtlLg4LC4ea0u8b8vy5cvbl44ECBAgQIAAgV4KzOtAu3bt2sN69O1czXjseW1L7It94IEH2rczOrbBNirHRV3DgTa2UygECBAgQIAAgT4LuCisB7M3fJeB2Qx3+PzYZhFbGNpSevW5HYcjAQIECBAgQGC2AvN6hXa2aHN93vAe17hX7MqVK7OGEHcraEs80Sz2xMa9aqO0Wxna7x0JECBAgAABAn0TEGh7MGOnnnrqYJSxuhr3jB2+UGvw5QxetHtw40KxKLEXNx6XqxAgQIAAAQIE+ipgy0EPZu7kk08ePK1rfHw8xUVih1PiDghtGd5f237mSIAAAQIECBDok4BA24PZikfRxl0L2vLBBx+0L2d1HF7xHb6/7awacxIBAgQIECBAoLCAQFt4Amba/fDDD95888303XffTXtqbCl45pln0tjY2CH1rrnmmsGK765du9LGjRsPqdN+EFsS4kEMbfHo21bCkQABAgQIEKhFQKCtZSb+YxwRaM8888ymVlzQtWHDhrRly5ZJz9q+fXtav359euedd9KDDz6Yhm/7FSfEFoZLL710cO5TTz2VNm3aNHjfvvjrr7+afn777bf2I0cCBAgQIECAQHUCLgqrbkomH1A8oWvNmjXpoYceau5QECunjzzySIqnhsXjaeNhCzt27Ehbt25N33777eAuBhGCly5dekijq1atSp9//nlzl4O408Gjjz6azj///OYBDHHh2ObNm9O2bdsOuMXXIY34gAABAgQIECBQgYBAW8EkzHQIEVzvvffe9PTTTzdbDuIhC59++mnzb7I2YhX2tttum+yrZpX2nnvuaYJshONY9Y1V2oNXak8//fRmNfeFF16YtB0fEiBAgAABAgRKCwi0pWcgs/+4xdZ9992XXn755WaFNfbKRrBtS6yuxn1nY4tCrN5OV1asWJHWrVuXnn322WZFdni/7bHHHpsuvPDCdMsttzQrvtO14zsCBAgQIECAQEmBkX8v8pkoMYDdu3eX6PaI6zO2C8SFXeF53HHHpbglVxxzS/wM4kKzWK2NVdnYwqAQIECAAAECBHIEZpNBctqfqq5AO5WMzwkQIECAAAECBLIESgVadznImiaVCRAgQIAAAQIEahMQaGubEeMhQIAAAQIECBDIEhBos7hUJkCAAAECBAgQqE1AoK1tRoyHAAECBAgQIEAgS0CgzeJSmQABAgQIECBAoDYBgba2GTEeAgQIECBAgACBLAGBNotLZQIECBAgQIAAgdoEBNraZsR4CBAgQIAAAQIEsgQE2iwulQkQIECAAAECBGoTEGhrmxHjIUCAAAECBAgQyBIQaLO4VCZAgAABAgQIEKhNQKCtbUaMhwABAgQIECBAIEtAoM3iUpkAAQIECBAgQKA2AYG2thkxHgIECBAgQIAAgSwBgTaLS2UCBAgQIECAAIHaBATa2mbEeAgQIECAAAECBLIEBNosLpUJECBAgAABAgRqExBoa5sR4yFAgAABAgQIEMgSEGizuFQmQIAAAQIECBCoTUCgrW1GjIcAAQIECBAgQCBLQKDN4lKZAAECBAgQIECgNgGBtrYZMR4CBAgQIECAAIEsAYE2i0tlAgQIECBAgACB2gQE2tpmxHgIECBAgAABAgSyBATaLC6VCRAgQIAAAQIEahMQaGubEeMhQIAAAQIECBDIEhBos7hUJkCAAAECBAgQqE1AoK1tRoyHAAECBAgQIEAgS0CgzeJSmQABAgQIECBAoDYBgba2GTEeAgQIECBAgACBLAGBNotLZQIECBAgQIAAgdoEBNraZsR4CBAgQIAAAQIEsgQE2iwulQkQIECAAAECBGoTEGhrmxHjIUCAAAECBAgQyBIQaLO4VCZAgAABAgQIEKhNQKCtbUaMhwABAgQIECBAIEtAoM3iUpkAAQIECBAgQKA2AYG2thkxHgIECBAgQIAAgSwBgTaLS2UCBAgQIECAAIHaBATa2mbEeAgQIECAAAECBLIEBNosLpUJECBAgAABAgRqExBoa5sR4yFAgAABAgQIEMgSEGizuFQmQIAAAQIECBCoTUCgrW1GjIcAAQIECBAgQCBLQKDN4lKZAAECBAgQIECgNgGBtrYZMR4CBAgQIECAAIEsAYE2i0tlAgQIECBAgACB2gQE2tpmxHgIECBAgAABAgSyBEYm/i1ZZ6hMgAABAgQIECBAoCIBK7QVTYahECBAgAABAgQI5AsItPlmziBAgAABAgQIEKhIQKCtaDIMhQABAgQIECBAIF9AoM03cwYBAgQIECBAgEBFAgJtRZNhKAQIECBAgAABAvkCAm2+mTMIECBAgAABAgQqEhBoK5oMQyFAgAABAgQIEMgXEGjzzZxBgAABAgQIECBQkYBAW9FkGAoBAgQIECBAgEC+gECbb+YMAgQIECBAgACBigQE2oomw1AIECBAgAABAgTyBQTafDNnECBAgAABAgQIVCQg0FY0GYZCgAABAgQIECCQLyDQ5ps5gwABAgQIECBAoCIBgbaiyTAUAgQIECBAgACBfAGBNt/MGQQIECBAgAABAhUJCLQVTYahECBAgAABAgQI5AsItPlmziBAgAABAgQIEKhIQKCtaDIMhQABAgQIECBAIF/gf+h+ypttZiANAAAAAElFTkSuQmCC"},2361:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/image-20201024-075456-9edea76dca9de02c3977c07a3e842cdb.png"},2861:(e,A,t)=>{t.d(A,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAAA1CAYAAADrs5hOAAAKJmlDQ1BJQ0MgUHJvZmlsZQAASImVlgdQVNkShs+9kxMMDDkOOec0gOScJEdRGWbIMA5DFFERWVyBFUVEBBRBl6jg6hJkURFRDCwCCph3kEVAWRcDoKKyF9n4Xr336vWtPv1Vz1SfPrdP1f0BIKUyudxEmApAEieV5+diTw8JDaPjngIikAQkQAcqTFYK187HxxMg9kf8py2OAWg13tFZrfXvv/9XE2JHpbAAgHwQ5rFTWEkI9yHszuLyUgFY7QwoZaRyV9kYYREe0iDCrqscs8bhqxy5xtwv/wnwc0A4DwA8mcnkxQBA3I/k6emsGKQO8QzC+hx2HAdhPsLWrFgmGwASHWHtpKQtq7x6TvXIv9WJ+UfNyD9rMpkxf/LaWb6YhKOTpyc90NDYwISunsBMjIvkxUXxUjX+z9fzvy0pMe2PPVenQGZHOTohURdxGeAInIAn8tBBIDAExsAAmCCsDhIAEySCOBAJeMgahaypAGktNSozdbWQwxbuVl5cTGwq3Q6ZaBTdjcPS1aYb6hswAFi9H2vbvbn3ZUdIDP9XbssrAMwGEbj2Vy7iIADtL5GxLP2VU/VDRu8IwAUuK42XvpZDry4Y5OYJAhHk9skBJaRTHaRvU2AJbJGTuANvEABCwSbAArEgCek6A2SDXSAfFIL94BCoANXgBGgAp8FZ0AG6wWVwDdwCQ2AUPAR8MAVegHmwCJYhCMJBFIgGSULykAqkBRlCDMgacoI8IT8oFIqAYiAOlAZlQ7uhQqgEqoBqoEboO+g8dBm6AQ1D96EJaBZ6DX2AUTAZFoFlYVVYD2bAdrAHHABvhGPgZDgLzoP3weVwLXwKbocvw7fgUZgPv4AXUABFQomhFFA6KAbKAeWNCkNFo3ioHagCVBmqFtWC6kL1o+6g+Kg51Hs0Fk1D09E6aEu0KzoQzUIno3egi9AV6AZ0O7oPfQc9gZ5Hf8ZQMDIYLYwFxg0TgonBZGDyMWWYOkwb5ipmFDOFWcRisWJYNawZ1hUbio3HbsMWYY9iW7E92GHsJHYBh8NJ4rRwVjhvHBOXisvHHcGdwl3CjeCmcO/wJLw83hDvjA/Dc/C5+DJ8E/4ifgQ/jV8mUAkqBAuCN4FN2EooJpwkdBFuE6YIy0QhohrRihhAjCfuIpYTW4hXiY+Ib0gkkiLJnORLiiPlkMpJZ0jXSROk92RhsibZgRxOTiPvI9eTe8j3yW8oFIoqxZYSRkml7KM0Uq5QnlDeCdAEdAXcBNgCOwUqBdoFRgReChIEVQTtBDcJZgmWCZ4TvC04RyVQVakOVCZ1B7WSep46Tl0QogkZCHkLJQkVCTUJ3RCaEcYJqwo7CbOF84RPCF8RnqShaEo0BxqLtpt2knaVNiWCFVETcROJFykUOS0yKDIvKixqLBokmilaKXpBlC+GElMVcxNLFCsWOys2JvZBXFbcTjxKfK94i/iI+JKEtIStRJREgUSrxKjEB0m6pJNkguQByQ7Jx1JoKU0pX6kMqWNSV6XmpEWkLaVZ0gXSZ6UfyMAymjJ+MttkTsgMyCzIysm6yHJlj8hekZ2TE5OzlYuXK5W7KDcrT5O3lo+TL5W/JP+cLkq3oyfSy+l99HkFGQVXhTSFGoVBhWVFNcVAxVzFVsXHSkQlhlK0UqlSr9K8sryyl3K2crPyAxWCCkMlVuWwSr/KkqqaarDqHtUO1Rk1CTU3tSy1ZrVH6hR1G/Vk9Vr1uxpYDYZGgsZRjSFNWNNEM1azUvO2FqxlqhWndVRrWBujba7N0a7VHtch69jppOs060zoiul66ubqdui+1FPWC9M7oNev91nfRD9R/6T+QwNhA3eDXIMug9eGmoYsw0rDu0YUI2ejnUadRq+MtYyjjI8Z3zOhmXiZ7DHpNflkambKM20xnTVTNoswqzIbZ4gwfBhFjOvmGHN7853m3ebvLUwtUi3OWvxqqWOZYNlkObNObV3UupPrJq0UrZhWNVZ8a7p1hPVxa76Ngg3Tptbmqa2SLdu2znbaTsMu3u6U3Ut7fXuefZv9koOFw3aHHkeUo4tjgeOgk7BToFOF0xNnRecY52bneRcTl20uPa4YVw/XA67jbrJuLLdGt3l3M/ft7n0eZA9/jwqPp56anjzPLi/Yy93roNej9SrrOes7vIG3m/dB78c+aj7JPj/4Yn19fCt9n/kZ+GX79fvT/Df7N/kvBtgHFAc8DFQPTAvsDRIMCg9qDFoKdgwuCeaH6IVsD7kVKhUaF9oZhgsLCqsLW9jgtOHQhqlwk/D88LGNahszN97YJLUpcdOFzYKbmZvPRWAigiOaIj4yvZm1zIVIt8iqyHmWA+sw6wXbll3Kno2yiiqJmo62ii6JnomxijkYMxtrE1sWOxfnEFcR9yreNb46finBO6E+YSUxOLE1CZ8UkXSeI8xJ4PRtkduSuWWYq8XN5/KTLZIPJc/zPHh1KVDKxpTOVBHkQzyQpp72VdpEunV6Zfq7jKCMc5lCmZzMga2aW/dunc5yzvp2G3oba1tvtkL2ruyJ7Xbba3ZAOyJ39O5U2pm3cyrHJadhF3FXwq4fc/VzS3Lf7g7e3ZUnm5eTN/mVy1fN+QL5vPzxPZZ7qr9Gfx339eBeo71H9n4uYBfcLNQvLCv8WMQquvmNwTfl36zsi943WGxafGw/dj9n/9gBmwMNJUIlWSWTB70OtpfSSwtK3x7afOhGmXFZ9WHi4bTD/HLP8s4jykf2H/lYEVsxWmlf2VolU7W3auko++jIMdtjLdWy1YXVH47HHb9X41LTXqtaW3YCeyL9xLOTQSf7v2V821gnVVdY96meU89v8GvoazRrbGySaSpuhpvTmmdPhZ8aOu14urNFp6WmVay18Aw4k3bm+XcR342d9Tjbe45xruV7le+r2mhtBe1Q+9b2+Y7YDn5naOfweffzvV2WXW0/6P5Q363QXXlB9ELxReLFvIsrl7IuLfRwe+Yux1ye7N3c+/BKyJW7fb59g1c9rl6/5nztSr9d/6XrVte7b1jcOH+TcbPjlumt9gGTgbYfTX5sGzQdbL9tdrtzyHyoa3jd8MURm5HLdxzvXLvrdvfW6PrR4bHAsXvj4eP8e+x7M/cT7796kP5g+WHOI8yjgsfUx2VPZJ7U/qTxUyvflH9hwnFi4Kn/04eTrMkXP6f8/HEq7xnlWdm0/HTjjOFM96zz7NDzDc+nXnBfLM/l/yL0S9VL9Zff/2r768B8yPzUK96rlddFbyTf1L81ftu74LPwZDFpcXmp4J3ku4b3jPf9H4I/TC9nfMR9LP+k8anrs8fnRytJKytcJo/5RQqgEIejowF4XQ8AJRQA2hCisTas6bfftQ70N9XzH3hN430xUwAakRCIuJctAEdXNUgOAFSEfRAPsAWwkdGf/rulRBsZrtUidSDSpGxl5U0wADhEKX0aX1lZ7lhZ+VSHNPsAgJ7FNd24atRTABzvNjBz9h/do5jzr3rtN3Zgw2hKAu+EAAAAemVYSWZNTQAqAAAACAAEAQYAAwAAAAEAAgAAARIAAwAAAAEAAQAAASgAAwAAAAEAAgAAh2kABAAAAAEAAAA+AAAAAAADkoYABwAAABIAAABooAIABAAAAAEAAAFZoAMABAAAAAEAAAA1AAAAAEFTQ0lJAAAAU2NyZWVuc2hvdDBkhIEAAALuaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjE8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NTM8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD5TY3JlZW5zaG90PC9leGlmOlVzZXJDb21tZW50PgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzQ1PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Ckjrf+8AAAihSURBVHgB7Z3Zy01fGMcfr9csQ6ZQZM6UWckf4EqJCylX7rgmGcq9a4VSMkZKMqRIMocL8yyhECWz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"},3742:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/material-icons-b82a0e65d6e97be3a5fb8887fd85e048.png"},1924:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/material-icons1-34fdc4e1ac6c145430bd1cb71fcc0757.png"}}]);