(function(t){function e(e){for(var n,u,i=e[0],s=e[1],c=e[2],l=0,p=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var s=r[u];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e2437449"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(t);var c=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(l);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,r[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"4d48":function(t,e,r){"use strict";r("ac12")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("h2",[t._v("Centro de Ayuda SEIF")]),r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),r("router-view")],1)},a=[],u={name:"App"},i=u,s=(r("5c0b"),r("2877")),c=Object(s["a"])(i,o,a,!1,null,null,null),l=c.exports,f=r("f309");n["a"].use(f["a"]);var p=new f["a"]({}),v=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-btn",t._g(t._b({attrs:{color:"orange"}},"v-btn",t.attrs,!1),t.on),[t._v("Añadir material de apoyo")])],1),r("v-flex",{attrs:{xs12:""}},[r("h2",[t._v("Nuestros Productos")])])],1),r("v-layout",{staticClass:"container-items",attrs:{row:"",wrap:"","justify-center":"","align-center":""}},t._l(t.items,(function(e,n){return r("v-flex",{key:"item"+n,staticClass:"item",attrs:{xs12:"",md4:"",sm4:""}},[r("div",{staticClass:"icon-item"}),r("p",[t._v(t._s(e.tituloitem))]),r("v-btn",t._g(t._b({attrs:{color:"orange"}},"v-btn",t.attrs,!1),t.on),[t._v("ver")])],1)})),1)],1)],1)},m=[],b={name:"Home",data:function(){return{items:[{imgurl:"006-browser.svg",tituloitem:"Seif"},{imgurl:"006-browser.svg",tituloitem:"Seif módulos"},{imgurl:"006-browser.svg",tituloitem:"Controller"},{imgurl:"006-browser.svg",tituloitem:"Visitantes robustos"},{imgurl:"006-browser.svg",tituloitem:"PTT"},{imgurl:"006-browser.svg",tituloitem:"Controlpharm"}]}},created:function(){}},g=b,h=(r("4d48"),r("6544")),y=r.n(h),w=r("8336"),_=r("a523"),x=r("0e8f"),j=r("a722"),O=Object(s["a"])(g,d,m,!1,null,"63531ab2",null),P=O.exports;y()(O,{VBtn:w["a"],VContainer:_["a"],VFlex:x["a"],VLayout:j["a"]}),n["a"].use(v["a"]);var C=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],k=new v["a"]({routes:C}),S=k;n["a"].config.productionTip=!1,new n["a"]({vuetify:p,router:S,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){},ac12:function(t,e,r){}});
//# sourceMappingURL=app.a813b272.js.map