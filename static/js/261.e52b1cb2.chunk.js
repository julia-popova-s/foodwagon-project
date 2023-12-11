/*! For license information please see 261.e52b1cb2.chunk.js.LICENSE.txt */
(self.webpackChunkfoodwagon_online_shop=self.webpackChunkfoodwagon_online_shop||[]).push([[261],{5095:(e,t,r)=>{var n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,d="object"==typeof self&&self&&self.Object===Object&&self,s=f||d||Function("return this")(),p=Object.prototype.toString,m=Math.max,y=Math.min,g=function(){return s.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==o}(e))return n;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=c.test(e);return r||u.test(e)?l(e.slice(2),r?2:8):a.test(e)?n:+e}e.exports=function(e,t,r){var n,o,i,a,c,u,l=0,f=!1,d=!1,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,i=o;return n=o=void 0,l=t,a=e.apply(i,r)}function h(e){var r=e-u;return void 0===u||r>=t||r<0||d&&e-l>=i}function E(){var e=g();if(h(e))return O(e);c=setTimeout(E,function(e){var r=t-(e-u);return d?y(r,i-(e-l)):r}(e))}function O(e){return c=void 0,s&&n?p(e):(n=o=void 0,a)}function w(){var e=g(),r=h(e);if(n=arguments,o=this,u=e,r){if(void 0===c)return function(e){return l=e,c=setTimeout(E,t),f?p(e):a}(u);if(d)return c=setTimeout(E,t),p(u)}return void 0===c&&(c=setTimeout(E,t)),a}return t=b(t)||0,v(r)&&(f=!!r.leading,i=(d="maxWait"in r)?m(b(r.maxWait)||0,t):i,s="trailing"in r?!!r.trailing:s),w.cancel=function(){void 0!==c&&clearTimeout(c),l=0,n=u=o=c=void 0},w.flush=function(){return void 0===c?a:O(g())},w}},8175:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>u});var n=r(2791),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};var i=function(e){var t=e.animate,r=void 0===t||t,i=e.animateBegin,a=e.backgroundColor,c=void 0===a?"#f5f6f7":a,u=e.backgroundOpacity,l=void 0===u?1:u,f=e.baseUrl,d=void 0===f?"":f,s=e.children,p=e.foregroundColor,m=void 0===p?"#eee":p,y=e.foregroundOpacity,g=void 0===y?1:y,v=e.gradientRatio,b=void 0===v?2:v,h=e.gradientDirection,E=void 0===h?"left-right":h,O=e.uniqueKey,w=e.interval,x=void 0===w?.25:w,j=e.rtl,k=void 0!==j&&j,U=e.speed,C=void 0===U?1.2:U,T=e.style,D=void 0===T?{}:T,I=e.title,P=void 0===I?"Loading...":I,S=e.beforeMask,M=void 0===S?null:S,N=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),R=O||Math.random().toString(36).substring(6),V=R+"-diff",$=R+"-animated-diff",_=R+"-aria",B=k?{transform:"scaleX(-1)"}:null,q="0; "+x+"; 1",K=C+"s",W="top-bottom"===E?"rotate(90)":void 0;return(0,n.createElement)("svg",o({"aria-labelledby":_,role:"img",style:o(o({},D),B)},N),P?(0,n.createElement)("title",{id:_},P):null,M&&(0,n.isValidElement)(M)?M:null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+d+"#"+V+")",style:{fill:"url("+d+"#"+$+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:V},s),(0,n.createElement)("linearGradient",{id:$,gradientTransform:W},(0,n.createElement)("stop",{offset:"0%",stopColor:c,stopOpacity:l},r&&(0,n.createElement)("animate",{attributeName:"offset",values:-b+"; "+-b+"; 1",keyTimes:q,dur:K,repeatCount:"indefinite",begin:i})),(0,n.createElement)("stop",{offset:"50%",stopColor:m,stopOpacity:g},r&&(0,n.createElement)("animate",{attributeName:"offset",values:-b/2+"; "+-b/2+"; "+(1+b/2),keyTimes:q,dur:K,repeatCount:"indefinite",begin:i})),(0,n.createElement)("stop",{offset:"100%",stopColor:c,stopOpacity:l},r&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+b),keyTimes:q,dur:K,repeatCount:"indefinite",begin:i})))))},a=function(e){return e.children?(0,n.createElement)(i,o({},e)):(0,n.createElement)(c,o({},e))},c=function(e){return(0,n.createElement)(a,o({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const u=a},4261:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});const n={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let o;const i=new Uint8Array(16);function a(){if(!o&&(o="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(i)}const c=[];for(let f=0;f<256;++f)c.push((f+256).toString(16).slice(1));function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]}const l=function(e,t,r){if(n.randomUUID&&!t&&!e)return n.randomUUID();const o=(e=e||{}).random||(e.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=o[e];return t}return u(o)}}}]);
//# sourceMappingURL=261.e52b1cb2.chunk.js.map