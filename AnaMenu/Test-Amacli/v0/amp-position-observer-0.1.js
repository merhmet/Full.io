;
(self.AMP=self.AMP||[]).push({m:0,v:"2405022220000",n:"amp-position-observer",ev:"0.1",l:!0,f:function(t,i){!function(){function i(t,n){return(i=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,n)}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,i){if(i&&("object"===r(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function e(t,i){for(var n=[],r=0,s=0;s<t.length;s++){var e=t[s];i(e,s,t)?n.push(e):(r<s&&(t[r]=e),r++)}return r<t.length&&(t.length=r),n}Array.isArray;var o=Object.prototype;function u(t){return 1==(null==(i=t)?void 0:i.nodeType)?t.tagName.toLowerCase()+(t.id?"#".concat(t.id):""):t;var i}function h(t,i,n,r,s,o,h,f,c,l,a){return function(t,i){var n,r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Assertion failed";if(i)return i;t&&-1==s.indexOf(t)&&(s+=t);for(var o=3,h=s.split("%s"),f=h.shift(),c=[f];h.length;){var l=arguments[o++],a=h.shift();f+=u(l)+a,c.push(l,a.trim())}var v=new Error(f);throw v.messageArray=e(c,(function(t){return""!==t})),null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,v),v}("​​​",t,i,n,r,s,o,h,f,c,l,a)}function f(t){return h(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(null!=t?t:""),"Invalid length value: %s",t),t}o.hasOwnProperty,o.toString;var c="inside",l="bottom";function a(t,i,n,r){return{left:t,top:i,width:n,height:r,bottom:i+r,right:t+n,x:t,y:i}}function v(t,i){return t.top<i.top?"top":t.bottom>i.bottom?l:c}function p(t,i){return!(!t||!i)&&t.left==i.left&&t.top==i.top&&t.width==i.width&&t.height==i.height}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var d=self.__AMP_LOG;function m(t,i){throw new Error("failed to call initLogConstructor")}function b(t){return d.user||(d.user=y()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(d.user.win,t)?d.userForEmbed||(d.userForEmbed=y()):d.user}function y(t){return m()}function w(t,i,n,r,s,e,o,u,h,f,c){return t}function x(t,i,n,r,s,e,o,u,h,f,c){return b().assert(t,i,n,r,s,e,o,u,h,f,c)}function O(t,i){return g(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function j(t,i){return g(E(R(t)),i)}function R(t){return t.nodeType?(n=t,i=(n.ownerDocument||n).defaultView,O(i,"ampdoc")).getAmpDoc(t):t;var i,n}function E(t){var i=R(t);return i.isSingleDoc()?i.win:i}function g(t,i){w(F(t,i));var n=S(t)[i];return n.obj||(w(n.ctor),w(n.context),n.obj=new n.ctor(n.context),w(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function S(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function F(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var I=function(t){return j(t,"viewport")},M=function(){function t(t,i,n,r){this.element=i,this.Re=r,this.fidelity=n,this.turn=0==n?Math.floor(4*Math.random()):0,this.$R=null,this.Oo=I(t)}var i=t.prototype;return i.Ie=function(t){var i=this.$R;if(!(i&&p(i.positionRect,t.positionRect)&&p(i.viewportRect,t.viewportRect))){w(t.positionRect);var n,r,s=t.positionRect;t.relativePos=v(s,t.viewportRect),n=s,r=t.viewportRect,n.top<=r.bottom&&r.top<=n.bottom&&n.left<=r.right&&r.left<=n.right?(this.$R=t,this.Re(t)):this.$R&&(this.$R=null,t.positionRect=null,this.Re(t))}},i.update=function(t){var i=this;if(!t){if(0!=this.turn)return void this.turn--;0==this.fidelity&&(this.turn=4)}var n=this.Oo.getSize(),r=a(0,0,n.width,n.height);this.Oo.getClientRectAsync(this.element).then((function(t){i.Ie({positionRect:t,viewportRect:r,relativePos:null})}))},t}(),A=function(){function t(t){var i=this;this.qi=t,this.t=t.win,this.qR=[],this.To=O(this.t,"vsync"),this.Oo=I(t),this.Zy=[],this.HR=!1,this.QR=!1,this.WR=!1,this.ZR=function(t,i,n){var r=0,s=0,e=null;function o(){r=0;var n,u=500-(t.Date.now()-s);u>0?r=t.setTimeout(o,u):(n=e,e=null,i.apply(null,n))}return function(){s=t.Date.now();for(var i=arguments.length,n=new Array(i),u=0;u<i;u++)n[u]=arguments[u];e=n,r||(r=t.setTimeout(o,500))}}(this.t,(function(){i.HR=!1}))}var i=t.prototype;return i.observe=function(t,i,n){var r=this,s=new M(this.qi,t,i,n);return this.qR.push(s),this.WR||this.xF(),s.update(),function(){for(var t=0;t<r.qR.length;t++)if(r.qR[t]==s)return void r.OF(t)}},i.unobserve=function(t){for(var i=0;i<this.qR.length;i++)if(this.qR[i].element==t)return void this.OF(i);(d.dev||(d.dev=m())).error("POSITION_OBSERVER","cannot unobserve unobserved element")},i.OF=function(t){this.qR.splice(t,1),0==this.qR.length&&this.jF()},i.xF=function(){var t=this;this.WR=!0,this.Zy.push(this.Oo.onScroll((function(){t.RF()}))),this.Zy.push(this.Oo.onResize((function(){t.EF()})))},i.jF=function(){for(this.WR=!1;this.Zy.length;)this.Zy.pop()()},i.updateAllEntries=function(t){for(var i=0;i<this.qR.length;i++)this.qR[i].update(t)},i.RF=function(){this.ZR(),this.HR=!0,this.QR||this.SF()},i.EF=function(){this.updateAllEntries(!0)},i.SF=function(){var t=this;this.updateAllEntries(),this.QR=!0,this.HR?this.To.measure((function(){t.SF()})):this.QR=!1},t}();function B(t,i,n,r){var s={detail:n};if(Object.assign(s,r),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,s);var e=t.document.createEvent("CustomEvent");return e.initCustomEvent(i,!!s.bubbles,!!s.cancelable,n),e}var P="amp-position-observer",T=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}(u,t);var r,e,o=(r=u,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=n(r);if(e){var o=n(this).constructor;t=Reflect.construct(i,arguments,o)}else t=i.apply(this,arguments);return s(this,t)});function u(t){var i;return(i=o.call(this,t)).Fe=null,i.ut=null,i.Oo=null,i.pr=!1,i.FF=0,i.IF=0,i.MF="0",i.AF="0",i.BF=0,i.PF=0,i.nt=null,i.TF=null,i.$F=null,i.qF=0,i.CF=0,i.DF=!1,i.NF=!1,i}var p=u.prototype;return p.buildCallback=function(){this.getAmpDoc().whenFirstVisible().then(this.Ns.bind(this)),this.DF=this.element.hasAttribute("once")},p.Ns=function(){var t,i,n,r=this;this.xk(),this.Fe=(t=this.element,i="action",F(n=E(R(t)),i)?g(n,i):null),this.Oo=I(this.element),this.zF(),this.getAmpDoc().whenReady().then((function(){var t=r.LF();r.ut.observe(t,1,r.VF.bind(r))}))},p._F=function(){var t="enter",i=B(this.win,"".concat(P,".").concat(t),{});this.Fe.trigger(this.element,t,i,1)},p.kF=function(){var t="exit",i=B(this.win,"".concat(P,".").concat(t),{});this.Fe.trigger(this.element,t,i,1)},p.GF=function(){var t=this.Oo.getScrollTop(),i={"start-scroll-offset":t,"end-scroll-offset":t+this.CF,"initial-inview-percent":this.qF},n="scroll",r=B(this.win,"".concat(P,".").concat(n),{"percent":this.qF,"positionObserverData":i});this.Fe.trigger(this.element,n,r,1)},p.VF=function(t){if(!this.DF||!this.NF){var i=this.pr,n=this.nt&&this.nt.height;this.HF(t),this.nt=t.viewportRect,n!=t.viewportRect.height&&this.JF();var r,s=this.KF(t.viewportRect),e=t.positionRect;e?(r=v(e,s),this.if(e,s,r)):(this.pr=!1,r=t.relativePos),i&&!this.pr&&(this.qF=r==l?0:1,this.GF(),this.kF(),this.NF=!0),!i&&this.pr&&this._F(),this.pr&&(this.QF(e,s),this.GF())}},p.if=function(t,i,n){if(n!=c){var r="top"==n?this.FF:this.IF,s=t.height*r;this.pr=n==l?t.top<=i.bottom-s:t.bottom>=i.top+s}else this.pr=!0},p.QF=function(t,i){if(t){var n=t.height*this.IF+t.height*this.FF,r=i.height+t.height-n,s=Math.abs(t.top-this.BF-(i.height-t.height*this.IF));this.qF=s/r,this.CF=r-s}},p.xk=function(){var t=this.element.getAttribute("intersection-ratios");if(t){var i=t.trim().split(" ");this.FF=this.UF(i[0]),this.IF=this.FF,i[1]&&(this.IF=this.UF(i[1]))}var n=this.element.getAttribute("viewport-margins");if(n){var r=n.trim().split(" ");this.MF=r[0],this.AF=this.MF,r[1]&&(this.AF=r[1])}this.TF=this.element.getAttribute("target")},p.LF=function(){var t;return t=this.TF?b().assertElement(this.win.document.getElementById(this.TF),"No element found with id:"+this.TF):this.element.parentNode,this.win.document.body===t&&(t=this.win.document.documentElement),t},p.WF=function(t){var i,n,r,s=function(t){f(t);var i=/[a-z]+/i.exec(null!=t?t:"");return h(i,"Failed to read units from %s",t),i[0]}(t=f("number"==typeof(i=t)?i+"px":i&&/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(i)?/^\d+(\.\d+)?$/.test(i)?i+"px":i:void 0)),e="number"==typeof(n=r=parseFloat(t))&&isFinite(n)?r:void 0;return e?(x("px"==s||"vh"==s,"Only pixel or vh are valid as units for exclusion margins: "+t),"vh"==s&&(e=e/100*this.nt.height),e):0},p.UF=function(t){var i=parseFloat(t);return x(i>=0&&i<=1,"Ratios must be a decimal between 0 and 1: "+t),i},p.JF=function(){w(this.nt),w(this.AF),w(this.MF),this.BF=this.WF(this.MF),this.PF=this.WF(this.AF)},p.KF=function(t){return w(t),a(t.left,t.top+this.BF,t.width,t.height-this.PF-this.BF)},p.HF=function(t){this.$F||(this.$F=t.viewportRect.height);var i=this.$F-t.viewportRect.height,n=0;Math.abs(i)<150?n=i:this.$F=null,t.viewportRect=a(t.viewportRect.left,t.viewportRect.top,t.viewportRect.width,t.viewportRect.height+n)},p.zF=function(){var t,i,n,r;this.ut||(t=this.getAmpDoc(),i="position-observer",n=A,function(t,i,n,r,s,e){var o=S(t),u=o[n];u||(u=o[n]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),u.ctor||(u.ctor=r,u.context=i,u.sharedInstance=!1,u.resolve&&g(t,n))}(E(r=R(t)),r,i,n),this.ut=j(this.element,"position-observer"))},p.XF=function(){if(this.ut){var t=this.LF();this.ut.unobserve(t),this.ut=null}},u}(t.BaseElement);t.registerElement(P,T)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-position-observer-0.1.js.map