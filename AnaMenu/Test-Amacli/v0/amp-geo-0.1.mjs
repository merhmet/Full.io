;
(self.AMP=self.AMP||[]).push({m:1,v:"2405022220000",n:"amp-geo",ev:"0.1",l:!0,f:function(t,n){(()=>{var n,{isArray:o}=Array,{hasOwnProperty:e,toString:i}=Object.prototype;function r(t){const n=Object.create(null);return t&&Object.assign(n,t),n}function s(t){return JSON.parse(t)}function u(t,n){const{length:o}=t;for(let e=0;e<o;e++)n(t[e],e)}var c=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function l(t,n=""){try{return decodeURIComponent(t)}catch(t){return n}}function a(t){const n=r();if(!t)return n;let o;for(;o=c.exec(t);){const t=l(o[1],o[1]),e=o[2]?l(o[2].replace(/\+/g," "),o[2]):"";n[t]=e}return n}function h(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}function d(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.push.apply(o,e)}return o}function f(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?d(Object(o),!0).forEach((function(n){h(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))}))}return t}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var p=self.__AMP_LOG;function v(t,n){throw new Error("failed to call initLogConstructor")}function m(t){return p.user||(p.user=A()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(p.user.win,t)?p.userForEmbed||(p.userForEmbed=A()):p.user}function A(t){return v()}function O(){return p.dev||(p.dev=v())}function P(t,n,o,e,i,r,s,u,c,l,a){return t}function b(t,n){return I(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function g(t){return t.nodeType?(o=t,n=(o.ownerDocument||o).defaultView,b(n,"ampdoc")).getAmpDoc(t):t;var n,o}function I(t,n){P(y(t,n));const o=function(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return o.obj||(P(o.ctor),P(o.context),o.obj=new o.ctor(o.context),P(o.obj),o.context=null,o.resolve&&o.resolve(o.obj)),o.obj}function y(t,n){const o=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!o||!o.ctor)}var E="__AMP__EXPERIMENT_TOGGLES",_=t=>function(t,n){const o=function(t){const n=g(t);return n.isSingleDoc()?n.win:n}(g(t));return y(o,n)?I(o,n):null}(t,"url"),T={"preset-eea":["AT","BE","BG","CQ","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","LV","LI","LT","LU","MT","NL","NO","PL","PT","RO","SK","SI","ES","SE","GB","AX","IC","EA","GF","PF","TF","GI","GP","GG","JE","MQ","YT","NC","RE","BL","MF","PM","SJ","VA","WF","EZ","CH"],"preset-us-ca":["us-ca"]},C=(()=>self.AMP.config.urls)(),R="amp-geo",S="amp-iso-subdivision-",w=new RegExp("amp-iso-country-(\\w+)"),j=new RegExp("amp-iso-subdivision-(\\w{2}-\\w{1,3})"),G="ampGeo",M=/^(?:(\w{2})(?:\s(\w{2}-\w{1,3}))?)?\s*/,$=new RegExp("^amp-iso-country-|^amp-geo-group-|^"+S,"i"),L="unknown",N=class extends t.BaseElement{static prerenderAllowed(){return!0}constructor(t){super(t),this.Gv=0,this.nc=!1,this.Lv=L,this.Nv=L,this.Hv=[],this.Uv=[]}buildCallback(){const{children:t}=this.element;var n,o;t.length&&this.Jv(1===t.length&&"SCRIPT"==(n=t[0]).tagName&&"APPLICATION/JSON"==(null===(o=n.getAttribute("type"))||void 0===o?void 0:o.toUpperCase()),`${R} can only have one <script type="application/json"> child`);const e=t.length?function(t,n){try{return s(t)}catch(t){return null==n||n(),null}}(t[0].textContent,(()=>this.Jv(!1,`${R} Unable to parse JSON`))):{},i=this.Bv(e||{});V.resolve(i)}Jv(t,n){return t||(V.resolve(null),function(t,n,o,e,i,r,s,u,c,l,a){return m().assert(t,n,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}(t,n))}Dv(){return"tr                          "}Zv(t){const e=t.getBody(),i=t.getRootNode().documentElement,u=(null==i?void 0:i.className.match(w))||e.className.match(w),c=M.exec(this.Dv()),l=function(t){const{location:n}=t||self;return a(n.originalHash||n.hash)}(this.win)["amp-geo"];if(l&&null!==(h=this.win.AMP_CONFIG)&&void 0!==h&&h.canary){const t=M.exec(l.toLowerCase());t[1]&&(this.Lv=t[1],t[2]&&(this.Nv=t[2]),this.Gv=2)}else if(!u||_(this.element).isProxyOrigin(this.win.location)&&!function(t,n){const e=function(t){var n,e,i,u,c;if(t[E])return t[E];t[E]=r();const l=t[E],h=f(f({},null!==(n=t.AMP_CONFIG)&&void 0!==n?n:{}),null!==(e=t.AMP_EXP)&&void 0!==e?e:s((null===(i=t.__AMP_EXP)||void 0===i?void 0:i.textContent)||"{}"));for(const t in h){const n=h[t];"number"==typeof n&&n>=0&&n<=1&&(l[t]=Math.random()<n)}const d=null===(u=t.AMP_CONFIG)||void 0===u?void 0:u["allow-doc-opt-in"];if(o(d)&&d.length){const n=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(n){var p;const t=(null===(p=n.getAttribute("content"))||void 0===p?void 0:p.split(","))||[];for(const n of t)d.includes(n)&&(l[n]=!0)}}Object.assign(l,function(t){var n;let o="";try{var e;"localStorage"in t&&(o=null!==(e=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==e?e:"")}catch(t){}const i=(null===(n=o)||void 0===n?void 0:n.split(/\s*,\s*/g))||[],s=r();for(const t of i)t&&("-"==t[0]?s[t.substr(1)]=!1:s[t]=!0);return s}(t));const v=null===(c=t.AMP_CONFIG)||void 0===c?void 0:c["allow-url-opt-in"];if(o(v)&&v.length){const n=a(t.location.originalHash||t.location.hash);for(const t of v){const o=n[`e-${t}`];"1"==o&&(l[t]=!0),"0"==o&&(l[t]=!1)}}return l}(t);return!!e["amp-geo-ssr"]}(this.win))c[1]?(this.Gv=0,this.Lv=c[1].toLowerCase(),c[2]&&(this.Nv=c[2].toLowerCase())):""===c[0]&&C.geoApi?this.Gv=3:""===c[0]&&(this.nc=!0,O().error(R,"GEONOTPATCHED: amp-geo served unpatched, ISO country not set"));else{this.Gv=1,this.Lv=u[1];const t=(null==i?void 0:i.className.match(j))||e.className.match(j);t&&(this.Nv=t[1])}var h;return 3!==this.Gv?n||(n=Promise.resolve(void 0)):this.Xv().then((t=>{if(t){const{country:n,subdivision:o}=t;this.Lv=n,o&&(this.Nv=`${n}-${o}`)}else this.nc=!0,O().error(R,"GEONOTPATCHED: amp-geo served unpatched and API response not valid, ISO country not set")}))}Yv(t){return"string"!=typeof t?(m().error(R,"geoApiUrl must be a string URL"),null):_(this.element).isSecure(t)?t:(m().error(R,"geoApiUrl must be secure (https)"),null)}Xv(){const t=this.Yv(C.geoApi);return t?(n=this.win,I(n,"timer")).timeoutPromise(6e4,(t=>b(this.win,"xhr"))().fetchJson(t,{mode:"cors",method:"GET",credentials:"omit"}).then((t=>t.json())).then((t=>/^[a-z]{2}$/i.test(t.country)?{country:t.country.toLowerCase(),subdivision:/^[a-z0-9]{1,3}$/i.test(t.subdivision)?t.subdivision.toLowerCase():null}:(m().error(R,'Invalid API response, expected schema not matched for property "country"'),null))).catch((t=>(m().error(R,"XHR country request failed",t),null))),"Timeout (60 sec) reached waiting for API response").catch((t=>(m().error(R,t),null))):Promise.resolve(null);var n}Kv(t){const n=t.ISOCountryGroups,e="<amp-geo> ISOCountryGroups";var r;n&&(this.Jv((r=n,"[object Object]"===i.call(r)),`${e} must be an object`),this.Uv=Object.keys(n),this.Uv.forEach((t=>{this.Jv(/^[a-z]+[a-z0-9]*$/i.test(t)&&!/^amp/.test(t),`${e}[${t}] name is invalid`),this.Jv(o(n[t]),`${e}[${t}] must be an array`),this.Qv(n[t])&&this.Hv.push(t)})))}Qv(t){const n=t.reduce(((t,n)=>/^preset-/.test(n)?(this.Jv(o(T[n]),`<amp-geo> preset ${n} not found`),t.concat(T[n])):(n===L||/^[a-zA-Z]{2}(?:-[0-9a-zA-Z]{1,3})?$/.test(n)?t.push(n):m().error(R," country %s not valid, will be ignored",n),t)),[]).map((t=>t.toLowerCase()));return n.includes(this.Lv)||this.Nv!==L&&n.includes(this.Nv)}Wv(t,n){const o=new Set;if(n){const{classList:t}=n;u(t,(t=>{$.test(t)&&o.add(t)}))}const{classList:e}=t;return u(e,(t=>{$.test(t)&&o.add(t)})),o}Bv(t){const n=this.getAmpDoc(),o={};return n.whenReady().then((()=>n.waitForBodyOpen())).then((t=>this.Zv(n).then((()=>t)))).then((e=>{const i=n.getRootNode().documentElement;this.Kv(t);let r=new Set;switch(this.Gv){case 2:r=this.Wv(e,i);case 0:case 3:o.ISOCountry=this.Lv,o.ISOSubdivision=this.Nv;const s=this.Hv.map((t=>(o[t]=!0,"amp-geo-group-"+t)));this.Hv.length||s.push("amp-geo-no-group"),this.nc&&s.push("amp-geo-error"),o.ISOCountryGroups=this.Hv,s.push("amp-iso-country-"+this.Lv),this.Nv!==L&&s.push(S+this.Nv),this.mutateElement((()=>{const u=i&&i.classList,{classList:c}=e;if(r.add("amp-geo-pending"),r.forEach((t=>{c.remove(t),u&&u.remove(t)})),s.forEach((t=>{u&&u.add(t),c.add(t)})),t.AmpBind){const t=n.getElementById(G);t&&t.parentNode.removeChild(t);const i=n.win.document.createElement("amp-state"),r=n.win.document.createElement("script");r.setAttribute("type","application/json"),r.textContent=JSON.stringify(o),i.appendChild(r),i.id=G,e.appendChild(i)}}),i)}return{ISOCountry:this.Lv,ISOSubdivision:this.Nv,matchedISOCountryGroups:this.Hv,allISOCountryGroups:this.Uv,isInCountryGroup:this.isInCountryGroup.bind(this)}}))}isInCountryGroup(t){const n=t.trim().split(/,\s*/);return n.filter((t=>this.Uv.indexOf(t)>=0)).length!==n.length?1:n.filter((t=>this.Hv.indexOf(t)>=0)).length>0?2:3}},V=null;V=new class{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}},t.registerElement(R,N),t.registerServiceForDoc("geo",(function(){return V.promise}))})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-geo-0.1.mjs.map