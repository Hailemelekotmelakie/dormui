(function(){"use strict";var e={2741:function(e,t,o){var r=o(9242),n=o(2483),l=o(3396);const u=e=>((0,l.dD)("data-v-1b7f4950"),e=e(),(0,l.Cn)(),e),i={class:"OThemeCheckboxMode"},a=u((()=>(0,l._)("label",{for:"OThemeCheckbox",class:"OThemeCheckboxLabel"},[(0,l._)("div",{class:"OThemeCheckboxBall"})],-1)));function s(e,t,o,r,n,u){const s=(0,l.up)("AppLogin");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(s),(0,l._)("div",i,[(0,l._)("input",{type:"checkbox",onClick:t[0]||(t[0]=t=>e.switchTheme()),class:"OThemeCheckbox",id:"OThemeCheckbox"}),a])],64)}const d={key:0},c=(0,l._)("br",null,null,-1),p=(0,l._)("br",null,null,-1),g=(0,l._)("br",null,null,-1),y={key:1};function m(e,t,o,n,u,i){const a=(0,l.up)("AppHeader");return(0,l.wg)(),(0,l.iD)(l.HY,null,[u.isLogin?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",d,[(0,l.wy)((0,l._)("input",{type:"text",name:"email","onUpdate:modelValue":t[0]||(t[0]=e=>u.email=e),placeholder:"email"},null,512),[[r.nr,u.email]]),(0,l.Uk)(),c,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>u.password=e),placeholder:"password"},null,512),[[r.nr,u.password]]),p,g,(0,l._)("input",{onClick:t[2]||(t[2]=e=>i.handleLogin()),type:"button",value:"login"})])),u.isLogin?((0,l.wg)(),(0,l.iD)("div",y,[(0,l.Wm)(a)])):(0,l.kq)("",!0)],64)}o(7658);const h=e=>((0,l.dD)("data-v-5d12e1a6"),e=e(),(0,l.Cn)(),e),f=h((()=>(0,l._)("div",{class:"menuContainer"},[(0,l._)("div",{class:"menu"}),(0,l._)("div",{class:"menu"}),(0,l._)("div",{class:"menu"})],-1)));function C(e,t,o,r,n,u){const i=(0,l.up)("router-link"),a=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[f,(0,l.Wm)(i,{to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Home ")])),_:1}),(0,l.Wm)(i,{to:"/contact"},{default:(0,l.w5)((()=>[(0,l.Uk)(" contact ")])),_:1}),(0,l.Wm)(a)],64)}var v={name:"AppHeader"},b=o(89);const k=(0,b.Z)(v,[["render",C],["__scopeId","data-v-5d12e1a6"]]);var P=k,T=o(5939),x=o(5225),S={name:"App",components:{AppHeader:P},inject:["DORM_API"],mixins:[x.Z],data(){return{email:null,password:null,showPassword:!1,isLogin:!1}},methods:{handleLogin(){T.Z.defaults.withCredentials=!0,T.Z.post(this.DORM_API+"/login",{email:this.email,password:this.password}).then((e=>{200===e.status&&(console.log("Loggd in "),this.$router.push({path:"/contact"}),this.isLogin=!0),403===e.status&&(console.log("out in "),this.isLogin=!0)})).catch((e=>{console.log(e)}))}},mounted(){this.isLogin?(console.log("No redirect"),this.$router.push("contact")):console.log("No redirect")}};const w=(0,b.Z)(S,[["render",m]]);var O=w,B={name:"App",provide:{DORM_API:"https://www.dormapi.huliesira.com"},components:{AppLogin:O},mixins:[x.Z]};const _=(0,b.Z)(B,[["render",s],["__scopeId","data-v-1b7f4950"]]);var V=_;const A=(0,n.p7)({history:(0,n.PO)(),routes:[{path:"/",component:()=>o.e(44).then(o.bind(o,3044))},{path:"/contact",component:()=>o.e(204).then(o.bind(o,5204))}]});(0,r.ri)(V).use(A).mount("#app")},5225:function(e,t,o){o.d(t,{Z:function(){return l}});var r={methods:{switchTheme:function(){let e=document.querySelector(":root");"dark"==localStorage.getItem("OTheme")?(document.getElementById("OThemeCheckbox").checked=!1,this.ThemeMode="light",e.style.setProperty("--backgroundColor",getComputedStyle(e).getPropertyValue("--lightBackgroundColor")),e.style.setProperty("--buttonColor",getComputedStyle(e).getPropertyValue("--lightButtonColor")),e.style.setProperty("--buttonHoverColor",getComputedStyle(e).getPropertyValue("--lightButtonHoverColor")),e.style.setProperty("--textColor",getComputedStyle(e).getPropertyValue("--lightTextColor")),e.style.setProperty("--textBlurColor",getComputedStyle(e).getPropertyValue("--lightTextBlurColor")),e.style.setProperty("--colorizedTextColor",getComputedStyle(e).getPropertyValue("--lightColorizedTextColor")),localStorage.setItem("OTheme","light")):(document.getElementById("OThemeCheckbox").checked=!0,this.ThemeMode="dark",e.style.setProperty("--backgroundColor",getComputedStyle(e).getPropertyValue("--darkBackgroundColor")),e.style.setProperty("--buttonColor",getComputedStyle(e).getPropertyValue("--darkButtonColor")),e.style.setProperty("--buttonBlurColor",getComputedStyle(e).getPropertyValue("------darkButtonHoverColor")),e.style.setProperty("--textColor",getComputedStyle(e).getPropertyValue("--darkTextColor")),e.style.setProperty("--textBlurColor",getComputedStyle(e).getPropertyValue("----darkTextBlurColor")),e.style.setProperty("--colorizedTextColor",getComputedStyle(e).getPropertyValue("------darkColorizedTextColor")),localStorage.setItem("OTheme","dark"))}},mounted(){let e=document.querySelector(":root");null==localStorage.getItem("OTheme")?(localStorage.setItem("OTheme","light"),this.ThemeMode="light"):"dark"==localStorage.getItem("OTheme")?(this.ThemeMode="dark",document.getElementById("OThemeCheckbox").checked=!0,e.style.setProperty("--backgroundColor",getComputedStyle(e).getPropertyValue("--darkBackgroundColor")),e.style.setProperty("--buttonColor",getComputedStyle(e).getPropertyValue("--darkButtonColor")),e.style.setProperty("--buttonBlurColor",getComputedStyle(e).getPropertyValue("------darkButtonHoverColor")),e.style.setProperty("--textColor",getComputedStyle(e).getPropertyValue("--darkTextColor")),e.style.setProperty("--textBlurColor",getComputedStyle(e).getPropertyValue("----darkTextBlurColor")),e.style.setProperty("--colorizedTextColor",getComputedStyle(e).getPropertyValue("------darkColorizedTextColor"))):(this.ThemeMode="light",document.getElementById("OThemeCheckbox").checked=!1,e.style.setProperty("--backgroundColor",getComputedStyle(e).getPropertyValue("--lightBackgroundColor")),e.style.setProperty("--buttonColor",getComputedStyle(e).getPropertyValue("--lightButtonColor")),e.style.setProperty("--buttonHoverColor",getComputedStyle(e).getPropertyValue("--lightButtonHoverColor")),e.style.setProperty("--textColor",getComputedStyle(e).getPropertyValue("--lightTextColor")),e.style.setProperty("--textBlurColor",getComputedStyle(e).getPropertyValue("--lightTextBlurColor")),e.style.setProperty("--colorizedTextColor",getComputedStyle(e).getPropertyValue("--lightColorizedTextColor")))}};const n=r;var l=n}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,l){if(!r){var u=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],l=e[d][2];for(var i=!0,a=0;a<r.length;a++)(!1&l||u>=l)&&Object.keys(o.O).every((function(e){return o.O[e](r[a])}))?r.splice(a--,1):(i=!1,l<u&&(u=l));if(i){e.splice(d--,1);var s=n();void 0!==s&&(t=s)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[r,n,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{44:"9c2716ff",204:"e630075c"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+".4857498d.css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dorm:";o.l=function(r,n,l,u){if(e[r])e[r].push(n);else{var i,a;if(void 0!==l)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var c=s[d];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+l){i=c;break}}i||(a=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+l),i.src=r),e[r]=[n];var p=function(t,o){i.onerror=i.onload=null,clearTimeout(g);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(o)})),t)return t(o)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),a&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,n){var l=document.createElement("link");l.rel="stylesheet",l.type="text/css";var u=function(o){if(l.onerror=l.onload=null,"load"===o.type)r();else{var u=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=u,a.request=i,l.parentNode.removeChild(l),n(a)}};return l.onerror=l.onload=u,l.href=t,o?o.parentNode.insertBefore(l,o.nextSibling):document.head.appendChild(l),l},t=function(e,t){for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],l=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(l===e||l===t))return n}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){n=u[r],l=n.getAttribute("data-href");if(l===e||l===t)return n}},r=function(r){return new Promise((function(n,l){var u=o.miniCssF(r),i=o.p+u;if(t(u,i))return n();e(r,i,null,n,l)}))},n={143:0};o.f.miniCss=function(e,t){var o={44:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var e={143:0};o.f.j=function(t,r){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var l=new Promise((function(o,r){n=e[t]=[o,r]}));r.push(n[2]=l);var u=o.p+o.u(t),i=new Error,a=function(r){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var l=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+l+": "+u+")",i.name="ChunkLoadError",i.type=l,i.request=u,n[1](i)}};o.l(u,a,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,l,u=r[0],i=r[1],a=r[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(a)var d=a(o)}for(t&&t(r);s<u.length;s++)l=u[s],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(d)},r=self["webpackChunkdorm"]=self["webpackChunkdorm"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(2741)}));r=o.O(r)})();
//# sourceMappingURL=app.c76f4736.js.map