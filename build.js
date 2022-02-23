<<<<<<< Updated upstream
!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/website/",t(t.s=19)}([function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=r(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(i(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(i(n.parts[a]));u[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+g+'~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(y){var i=p++;r=d||(d=a()),t=o.bind(null,r,i,!1),n=o.bind(null,r,i,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function o(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(g,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(27),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,h=function(){},m=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,a){v=n,m=a||{};var i=l(e,t);return r(i),function(t){for(var n=[],a=0;a<i.length;a++){var o=i[a],s=u[o.id];s.refs--,n.push(s)}t?(i=l(e,t),r(i)):i=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r,a,i){var o,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(o=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId=a);var u;if(i?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=u):r&&(u=r),u){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=u,l.render=function(e,t){return u.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:o,exports:s,options:l}}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=n(28),a=n(35),i=n(41),o=n(45),s=n(50),c=n(54),l=n(58),u=n(62),f=n(66);t.a={components:{wsNavBar:r.a,frontPage:a.a,introPage:i.a,workHistory:o.a,educationHistory:s.a,hobbiesSection:c.a,resumeSection:f.a,boxingSection:l.a,brownieSection:u.a},name:"app",data:function(){return{navList:[{link:"introPage",name:"Introduction"},{link:"workHistory",name:"Work"},{link:"educationHistory",name:"Education"},{link:"resumeSection",name:"Resume"},{link:"boxingSection",name:"Boxing App"},{link:"brownieSection",name:"Brownie Point App"},{link:"hobbiesSection",name:"Hobbies"}]}}}},function(e,t,n){"use strict";t.a={components:{},data:function(){return{navShow:!1,childNavData:[]}},methods:{},props:{navData:{type:Array,default:function(){return[]}}},beforeMount:function(){this.childNavData=this.navData}}},function(e,t,n){e.exports=n.p+"IMG_2417B.png?b7fef4fd7952ac718ec3299d2cffa00e"},function(e,t,n){"use strict";t.a={components:{},data:function(){return{}},methods:{}}},function(e,t,n){"use strict";t.a={components:{},data:function(){return{}},methods:{}}},function(e,t,n){e.exports=n.p+"Brad_Camp_Muir.jpg?1f57afa17a2d42d92ac3299d68a1a3c8"},function(e,t,n){"use strict";t.a={components:{},data:function(){return{}},methods:{}}},function(e,t,n){"use strict";t.a={components:{},data:function(){return{}},methods:{toggleClasslist:function(){"none"==classList.style.display?classList.style.display="block":classList.style.display="none"}}}},function(e,t,n){"use strict";t.a={components:{},data:function(){return{modalDisplay:{display:"none"},currentImageSrc:"",images:[{footer:"Twin Falls, WA",location:"src/assets/images/IMG_0407.jpg"},{footer:"Stillaguamish River, Lime Kiln Trail, WA",location:"src/assets/images/IMG_0397.jpg"},{footer:"Stillaguamish River, Lime Kiln Trail, WA",location:"src/assets/images/IMG_0269.jpg"},{footer:"Bridal Veil Falls Trail, WA",location:"src/assets/images/IMG_2145.jpg"},{footer:"Mt. Si, Little Si Trail, WA",location:"src/assets/images/IMG_0467.jpg"},{footer:"Lake Serene, WA",location:"src/assets/images/IMG_2196.jpg"},{footer:"Japanese Garden, Portland, Oregon",location:"src/assets/images/Portland_Background.jpg"},{footer:"Cooper River, WA",location:"src/assets/images/IMG_2417.jpg"},{footer:"Cooper River, WA",location:"src/assets/images/IMG_2425.jpg"}]}},methods:{toggleModal:function(e){console.log(e),"block"==this.modalDisplay.display?this.modalDisplay.display="none":(this.modalDisplay.display="block",this.currentImageSrc=this.images[e].location)}}}},function(e,t,n){e.exports=n.p+"IMG_1151.jpg?46138833740df0a19b3e74a7be2c62d9"},function(e,t,n){"use strict";t.a={components:{},data:function(){return{}},methods:{}}},function(e,t,n){e.exports=n.p+"Boxing_App_Image.png?d3831a1a7fd3ce3ff69915fb688e366d"},function(e,t,n){"use strict";t.a={components:{},data:function(){return{}},methods:{}}},function(e,t,n){e.exports=n.p+"browniepointsimage.jpg?54b6a195110ed8b767b874d887cc7a15"},function(e,t,n){"use strict";t.a={components:{},data:function(){return{}},methods:{}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(20),a=n(24);new r.a({el:"#app",render:function(e){return e(a.a)}})},function(e,t,n){"use strict";(function(e,n){function r(e){return void 0===e||null===e}function a(e){return void 0!==e&&null!==e}function i(e){return!0===e}function o(e){return!1===e}function s(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function c(e){return null!==e&&"object"==typeof e}function l(e){return"[object Object]"===ki.call(e)}function u(e){return"[object RegExp]"===ki.call(e)}function f(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function d(e){return a(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||l(e)&&e.toString===ki?JSON.stringify(e,null,2):String(e)}function v(e){var t=parseFloat(e);return isNaN(t)?e:t}function h(e,t){for(var n=Object.create(null),r=e.split(","),a=0;a<r.length;a++)n[r[a]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function m(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function g(e,t){return Ai.call(e,t)}function y(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}function _(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function b(e,t){return e.bind(t)}function w(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function x(e,t){for(var n in t)e[n]=t[n];return e}function C(e){for(var t={},n=0;n<e.length;n++)e[n]&&x(t,e[n]);return t}function k(e,t,n){}function $(e,t){if(e===t)return!0;var n=c(e),r=c(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var a=Array.isArray(e),i=Array.isArray(t);if(a&&i)return e.length===t.length&&e.every(function(e,n){return $(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(a||i)return!1;var o=Object.keys(e),s=Object.keys(t);return o.length===s.length&&o.every(function(n){return $(e[n],t[n])})}catch(e){return!1}}function S(e,t){for(var n=0;n<e.length;n++)if($(e[n],t))return n;return-1}function A(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function I(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function T(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function O(e){if(!Hi.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function E(e){return"function"==typeof e&&/native code/.test(e.toString())}function M(e){lo.push(e),co.target=e}function j(){lo.pop(),co.target=lo[lo.length-1]}function L(e){return new uo(void 0,void 0,void 0,String(e))}function P(e){var t=new uo(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}function D(e){go=e}function N(e,t){e.__proto__=t}function R(e,t,n){for(var r=0,a=n.length;r<a;r++){var i=n[r];T(e,i,t[i])}}function F(e,t){if(c(e)&&!(e instanceof uo)){var n;return g(e,"__ob__")&&e.__ob__ instanceof yo?n=e.__ob__:go&&!ro()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new yo(e)),t&&n&&n.vmCount++,n}}function B(e,t,n,r,a){var i=new co,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var s=o&&o.get,c=o&&o.set;s&&!c||2!==arguments.length||(n=e[t]);var l=!a&&F(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return co.target&&(i.depend(),l&&(l.dep.depend(),Array.isArray(t)&&W(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!==t&&r!==r||s&&!c||(c?c.call(e,t):n=t,l=!a&&F(t),i.notify())}})}}function H(e,t,n){if(Array.isArray(e)&&f(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(B(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function U(e,t){if(Array.isArray(e)&&f(t))return void e.splice(t,1);var n=e.__ob__;e._isVue||n&&n.vmCount||g(e,t)&&(delete e[t],n&&n.dep.notify())}function W(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&W(t)}function z(e,t){if(!t)return e;for(var n,r,a,i=io?Reflect.ownKeys(t):Object.keys(t),o=0;o<i.length;o++)"__ob__"!==(n=i[o])&&(r=e[n],a=t[n],g(e,n)?r!==a&&l(r)&&l(a)&&z(r,a):H(e,n,a));return e}function G(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,a="function"==typeof e?e.call(n,n):e;return r?z(r,a):a}:t?e?function(){return z("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function V(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?J(n):n}function J(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function K(e,t,n,r){var a=Object.create(e||null);return t?x(a,t):a}function q(e,t){var n=e.props;if(n){var r,a,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(a=n[r])&&(i=Ti(a),o[i]={type:null});else if(l(n))for(var s in n)a=n[s],i=Ti(s),o[i]=l(a)?a:{type:a};e.props=o}}function X(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var a=0;a<n.length;a++)r[n[a]]={from:n[a]};else if(l(n))for(var i in n){var o=n[i];r[i]=l(o)?x({from:i},o):{from:o}}}}function Z(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function Q(e,t,n){function r(r){var a=_o[r]||wo;s[r]=a(e[r],t[r],n,r)}if("function"==typeof t&&(t=t.options),q(t,n),X(t,n),Z(t),!t._base&&(t.extends&&(e=Q(e,t.extends,n)),t.mixins))for(var a=0,i=t.mixins.length;a<i;a++)e=Q(e,t.mixins[a],n);var o,s={};for(o in e)r(o);for(o in t)g(e,o)||r(o);return s}function Y(e,t,n,r){if("string"==typeof n){var a=e[t];if(g(a,n))return a[n];var i=Ti(n);if(g(a,i))return a[i];var o=Oi(i);if(g(a,o))return a[o];return a[n]||a[i]||a[o]}}function ee(e,t,n,r){var a=t[e],i=!g(n,e),o=n[e],s=ae(Boolean,a.type);if(s>-1)if(i&&!g(a,"default"))o=!1;else if(""===o||o===Mi(e)){var c=ae(String,a.type);(c<0||s<c)&&(o=!0)}if(void 0===o){o=te(r,a,e);var l=go;D(!0),F(o),D(l)}return o}function te(e,t,n){if(g(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==ne(t.type)?r.call(e):r}}function ne(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function re(e,t){return ne(e)===ne(t)}function ae(e,t){if(!Array.isArray(t))return re(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(re(t[n],e))return n;return-1}function ie(e,t,n){M();try{if(t)for(var r=t;r=r.$parent;){var a=r.$options.errorCaptured;if(a)for(var i=0;i<a.length;i++)try{var o=!1===a[i].call(r,e,t,n);if(o)return}catch(e){se(e,r,"errorCaptured hook")}}se(e,t,n)}finally{j()}}function oe(e,t,n,r,a){var i;try{i=n?e.apply(t,n):e.call(t),i&&!i._isVue&&d(i)&&!i._handled&&(i.catch(function(e){return ie(e,r,a+" (Promise/async)")}),i._handled=!0)}catch(e){ie(e,r,a)}return i}function se(e,t,n){if(Fi.errorHandler)try{return Fi.errorHandler.call(null,e,t,n)}catch(t){t!==e&&ce(t,null,"config.errorHandler")}ce(e,t,n)}function ce(e,t,n){if(!Wi&&!zi||"undefined"==typeof console)throw e;console.error(e)}function le(){ko=!1;var e=Co.slice(0);Co.length=0;for(var t=0;t<e.length;t++)e[t]()}function ue(e,t){var n;if(Co.push(function(){if(e)try{e.call(t)}catch(e){ie(e,t,"nextTick")}else n&&n(t)}),ko||(ko=!0,bo()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}function fe(e){de(e,To),To.clear()}function de(e,t){var n,r,a=Array.isArray(e);if(!(!a&&!c(e)||Object.isFrozen(e)||e instanceof uo)){if(e.__ob__){var i=e.__ob__.dep.id;if(t.has(i))return;t.add(i)}if(a)for(n=e.length;n--;)de(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)de(e[r[n]],t)}}function pe(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return oe(r,null,arguments,t,"v-on handler");for(var a=r.slice(),i=0;i<a.length;i++)oe(a[i],null,e,t,"v-on handler")}return n.fns=e,n}function ve(e,t,n,a,o,s){var c,l,u,f;for(c in e)l=e[c],u=t[c],f=Oo(c),r(l)||(r(u)?(r(l.fns)&&(l=e[c]=pe(l,s)),i(f.once)&&(l=e[c]=o(f.name,l,f.capture)),n(f.name,l,f.capture,f.passive,f.params)):l!==u&&(u.fns=l,e[c]=u));for(c in t)r(e[c])&&(f=Oo(c),a(f.name,t[c],f.capture))}function he(e,t,n){function o(){n.apply(this,arguments),m(s.fns,o)}e instanceof uo&&(e=e.data.hook||(e.data.hook={}));var s,c=e[t];r(c)?s=pe([o]):a(c.fns)&&i(c.merged)?(s=c,s.fns.push(o)):s=pe([c,o]),s.merged=!0,e[t]=s}function me(e,t,n){var i=t.options.props;if(!r(i)){var o={},s=e.attrs,c=e.props;if(a(s)||a(c))for(var l in i){var u=Mi(l);ge(o,c,l,u,!0)||ge(o,s,l,u,!1)}return o}}function ge(e,t,n,r,i){if(a(t)){if(g(t,n))return e[n]=t[n],i||delete t[n],!0;if(g(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function ye(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function _e(e){return s(e)?[L(e)]:Array.isArray(e)?we(e):void 0}function be(e){return a(e)&&a(e.text)&&o(e.isComment)}function we(e,t){var n,o,c,l,u=[];for(n=0;n<e.length;n++)o=e[n],r(o)||"boolean"==typeof o||(c=u.length-1,l=u[c],Array.isArray(o)?o.length>0&&(o=we(o,(t||"")+"_"+n),be(o[0])&&be(l)&&(u[c]=L(l.text+o[0].text),o.shift()),u.push.apply(u,o)):s(o)?be(l)?u[c]=L(l.text+o):""!==o&&u.push(L(o)):be(o)&&be(l)?u[c]=L(l.text+o.text):(i(e._isVList)&&a(o.tag)&&r(o.key)&&a(t)&&(o.key="__vlist"+t+"_"+n+"__"),u.push(o)));return u}function xe(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}function Ce(e){var t=ke(e.$options.inject,e);t&&(D(!1),Object.keys(t).forEach(function(n){B(e,n,t[n])}),D(!0))}function ke(e,t){if(e){for(var n=Object.create(null),r=io?Reflect.ownKeys(e):Object.keys(e),a=0;a<r.length;a++){var i=r[a];if("__ob__"!==i){for(var o=e[i].from,s=t;s;){if(s._provided&&g(s._provided,o)){n[i]=s._provided[o];break}s=s.$parent}if(!s&&"default"in e[i]){var c=e[i].default;n[i]="function"==typeof c?c.call(t):c}}}return n}}function $e(e,t){if(!e||!e.length)return{};for(var n={},r=0,a=e.length;r<a;r++){var i=e[r],o=i.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,i.context!==t&&i.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(i);else{var s=o.slot,c=n[s]||(n[s]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var l in n)n[l].every(Se)&&delete n[l];return n}function Se(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Ae(e,t,n){var r,a=Object.keys(t).length>0,i=e?!!e.$stable:!a,o=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(i&&n&&n!==Ci&&o===n.$key&&!a&&!n.$hasNormal)return n;r={};for(var s in e)e[s]&&"$"!==s[0]&&(r[s]=Ie(t,s,e[s]))}else r={};for(var c in t)c in r||(r[c]=Te(t,c));return e&&Object.isExtensible(e)&&(e._normalized=r),T(r,"$stable",i),T(r,"$key",o),T(r,"$hasNormal",a),r}function Ie(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});return e=e&&"object"==typeof e&&!Array.isArray(e)?[e]:_e(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function Te(e,t){return function(){return e[t]}}function Oe(e,t){var n,r,i,o,s;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(c(e))if(io&&e[Symbol.iterator]){n=[];for(var l=e[Symbol.iterator](),u=l.next();!u.done;)n.push(t(u.value,n.length)),u=l.next()}else for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)s=o[r],n[r]=t(e[s],s,r);return a(n)||(n=[]),n._isVList=!0,n}function Ee(e,t,n,r){var a,i=this.$scopedSlots[e];i?(n=n||{},r&&(n=x(x({},r),n)),a=i(n)||t):a=this.$slots[e]||t;var o=n&&n.slot;return o?this.$createElement("template",{slot:o},a):a}function Me(e){return Y(this.$options,"filters",e,!0)||Pi}function je(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function Le(e,t,n,r,a){var i=Fi.keyCodes[t]||n;return a&&r&&!Fi.keyCodes[t]?je(a,r):i?je(i,e):r?Mi(r)!==t:void 0}function Pe(e,t,n,r,a){if(n)if(c(n)){Array.isArray(n)&&(n=C(n));var i;for(var o in n)!function(o){if("class"===o||"style"===o||Si(o))i=e;else{var s=e.attrs&&e.attrs.type;i=r||Fi.mustUseProp(t,s,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=Ti(o),l=Mi(o);if(!(c in i||l in i)&&(i[o]=n[o],a)){(e.on||(e.on={}))["update:"+o]=function(e){n[o]=e}}}(o)}else;return e}function De(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t?r:(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Re(r,"__static__"+e,!1),r)}function Ne(e,t,n){return Re(e,"__once__"+t+(n?"_"+n:""),!0),e}function Re(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&Fe(e[r],t+"_"+r,n);else Fe(e,t,n)}function Fe(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Be(e,t){if(t)if(l(t)){var n=e.on=e.on?x({},e.on):{};for(var r in t){var a=n[r],i=t[r];n[r]=a?[].concat(a,i):i}}else;return e}function He(e,t,n,r){t=t||{$stable:!n};for(var a=0;a<e.length;a++){var i=e[a];Array.isArray(i)?He(i,t,n):i&&(i.proxy&&(i.fn.proxy=!0),t[i.key]=i.fn)}return r&&(t.$key=r),t}function Ue(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function We(e,t){return"string"==typeof e?t+e:e}function ze(e){e._o=Ne,e._n=v,e._s=p,e._l=Oe,e._t=Ee,e._q=$,e._i=S,e._m=De,e._f=Me,e._k=Le,e._b=Pe,e._v=L,e._e=po,e._u=He,e._g=Be,e._d=Ue,e._p=We}function Ge(e,t,n,r,a){var o,s=this,c=a.options;g(r,"_uid")?(o=Object.create(r),o._original=r):(o=r,r=r._original);var l=i(c._compiled),u=!l;this.data=e,this.props=t,this.children=n,this.parent=r,this.listeners=e.on||Ci,this.injections=ke(c.inject,r),this.slots=function(){return s.$slots||Ae(e.scopedSlots,s.$slots=$e(n,r)),s.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ae(e.scopedSlots,this.slots())}}),l&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Ae(e.scopedSlots,this.$slots)),c._scopeId?this._c=function(e,t,n,a){var i=et(o,e,t,n,a,u);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=r),i}:this._c=function(e,t,n,r){return et(o,e,t,n,r,u)}}function Ve(e,t,n,r,i){var o=e.options,s={},c=o.props;if(a(c))for(var l in c)s[l]=ee(l,c,t||Ci);else a(n.attrs)&&Ke(s,n.attrs),a(n.props)&&Ke(s,n.props);var u=new Ge(n,s,i,r,e),f=o.render.call(null,u._c,u);if(f instanceof uo)return Je(f,n,u.parent,o,u);if(Array.isArray(f)){for(var d=_e(f)||[],p=new Array(d.length),v=0;v<d.length;v++)p[v]=Je(d[v],n,u.parent,o,u);return p}}function Je(e,t,n,r,a){var i=P(e);return i.fnContext=n,i.fnOptions=r,t.slot&&((i.data||(i.data={})).slot=t.slot),i}function Ke(e,t){for(var n in t)e[Ti(n)]=t[n]}function qe(e,t,n,o,s){if(!r(e)){var l=n.$options._base;if(c(e)&&(e=l.extend(e)),"function"==typeof e){var u;if(r(e.cid)&&(u=e,void 0===(e=st(u,l))))return ot(u,t,n,o,s);t=t||{},Ut(e),a(t.model)&&Ye(e.options,t);var f=me(t,e,s);if(i(e.options.functional))return Ve(e,f,t,n,o);var d=t.on;if(t.on=t.nativeOn,i(e.options.abstract)){var p=t.slot;t={},p&&(t.slot=p)}Ze(t);var v=e.options.name||s;return new uo("vue-component-"+e.cid+(v?"-"+v:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:f,listeners:d,tag:s,children:o},u)}}}function Xe(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return a(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function Ze(e){for(var t=e.hook||(e.hook={}),n=0;n<jo.length;n++){var r=jo[n],a=t[r],i=Mo[r];a===i||a&&a._merged||(t[r]=a?Qe(i,a):i)}}function Qe(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function Ye(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var i=t.on||(t.on={}),o=i[r],s=t.model.callback;a(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(i[r]=[s].concat(o)):i[r]=s}function et(e,t,n,r,a,o){return(Array.isArray(n)||s(n))&&(a=r,r=n,n=void 0),i(o)&&(a=Po),tt(e,t,n,r,a)}function tt(e,t,n,r,i){if(a(n)&&a(n.__ob__))return po();if(a(n)&&a(n.is)&&(t=n.is),!t)return po();Array.isArray(r)&&"function"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===Po?r=_e(r):i===Lo&&(r=ye(r));var o,s;if("string"==typeof t){var c;s=e.$vnode&&e.$vnode.ns||Fi.getTagNamespace(t),o=Fi.isReservedTag(t)?new uo(Fi.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!a(c=Y(e.$options,"components",t))?new uo(t,n,r,void 0,void 0,e):qe(c,n,e,r,t)}else o=qe(t,n,e,r);return Array.isArray(o)?o:a(o)?(a(s)&&nt(o,s),a(n)&&rt(n),o):po()}function nt(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),a(e.children))for(var o=0,s=e.children.length;o<s;o++){var c=e.children[o];a(c.tag)&&(r(c.ns)||i(n)&&"svg"!==c.tag)&&nt(c,t,n)}}function rt(e){c(e.style)&&fe(e.style),c(e.class)&&fe(e.class)}function at(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,r=n&&n.context;e.$slots=$e(t._renderChildren,r),e.$scopedSlots=Ci,e._c=function(t,n,r,a){return et(e,t,n,r,a,!1)},e.$createElement=function(t,n,r,a){return et(e,t,n,r,a,!0)};var a=n&&n.data;B(e,"$attrs",a&&a.attrs||Ci,null,!0),B(e,"$listeners",t._parentListeners||Ci,null,!0)}function it(e,t){return(e.__esModule||io&&"Module"===e[Symbol.toStringTag])&&(e=e.default),c(e)?t.extend(e):e}function ot(e,t,n,r,a){var i=po();return i.asyncFactory=e,i.asyncMeta={data:t,context:n,children:r,tag:a},i}function st(e,t){if(i(e.error)&&a(e.errorComp))return e.errorComp;if(a(e.resolved))return e.resolved;var n=Do;if(n&&a(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),i(e.loading)&&a(e.loadingComp))return e.loadingComp;if(n&&!a(e.owners)){var o=e.owners=[n],s=!0,l=null,u=null;n.$on("hook:destroyed",function(){return m(o,n)});var f=function(e){for(var t=0,n=o.length;t<n;t++)o[t].$forceUpdate();e&&(o.length=0,null!==l&&(clearTimeout(l),l=null),null!==u&&(clearTimeout(u),u=null))},p=A(function(n){e.resolved=it(n,t),s?o.length=0:f(!0)}),v=A(function(t){a(e.errorComp)&&(e.error=!0,f(!0))}),h=e(p,v);return c(h)&&(d(h)?r(e.resolved)&&h.then(p,v):d(h.component)&&(h.component.then(p,v),a(h.error)&&(e.errorComp=it(h.error,t)),a(h.loading)&&(e.loadingComp=it(h.loading,t),0===h.delay?e.loading=!0:l=setTimeout(function(){l=null,r(e.resolved)&&r(e.error)&&(e.loading=!0,f(!1))},h.delay||200)),a(h.timeout)&&(u=setTimeout(function(){u=null,r(e.resolved)&&v(null)},h.timeout)))),s=!1,e.loading?e.loadingComp:e.resolved}}function ct(e){return e.isComment&&e.asyncFactory}function lt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(a(n)&&(a(n.componentOptions)||ct(n)))return n}}function ut(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&vt(e,t)}function ft(e,t){Eo.$on(e,t)}function dt(e,t){Eo.$off(e,t)}function pt(e,t){var n=Eo;return function r(){null!==t.apply(null,arguments)&&n.$off(e,r)}}function vt(e,t,n){Eo=e,ve(t,n||{},ft,dt,pt,e),Eo=void 0}function ht(e){var t=No;return No=e,function(){No=t}}function mt(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function gt(e,t,n){e.$el=t,e.$options.render||(e.$options.render=po),xt(e,"beforeMount");var r;return r=function(){e._update(e._render(),n)},new Ko(e,r,k,{before:function(){e._isMounted&&!e._isDestroyed&&xt(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,xt(e,"mounted")),e}function yt(e,t,n,r,a){var i=r.data.scopedSlots,o=e.$scopedSlots,s=!!(i&&!i.$stable||o!==Ci&&!o.$stable||i&&e.$scopedSlots.$key!==i.$key),c=!!(a||e.$options._renderChildren||s);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=a,e.$attrs=r.data.attrs||Ci,e.$listeners=n||Ci,t&&e.$options.props){D(!1);for(var l=e._props,u=e.$options._propKeys||[],f=0;f<u.length;f++){var d=u[f],p=e.$options.props;l[d]=ee(d,p,t,e)}D(!0),e.$options.propsData=t}n=n||Ci;var v=e.$options._parentListeners;e.$options._parentListeners=n,vt(e,n,v),c&&(e.$slots=$e(a,r.context),e.$forceUpdate())}function _t(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function bt(e,t){if(t){if(e._directInactive=!1,_t(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)bt(e.$children[n]);xt(e,"activated")}}function wt(e,t){if(!(t&&(e._directInactive=!0,_t(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)wt(e.$children[n]);xt(e,"deactivated")}}function xt(e,t){M();var n=e.$options[t],r=t+" hook";if(n)for(var a=0,i=n.length;a<i;a++)oe(n[a],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),j()}function Ct(){Wo=Ro.length=Fo.length=0,Bo={},Ho=Uo=!1}function kt(){zo=Go(),Uo=!0;var e,t;for(Ro.sort(function(e,t){return e.id-t.id}),Wo=0;Wo<Ro.length;Wo++)e=Ro[Wo],e.before&&e.before(),t=e.id,Bo[t]=null,e.run();var n=Fo.slice(),r=Ro.slice();Ct(),At(n),$t(r),ao&&Fi.devtools&&ao.emit("flush")}function $t(e){for(var t=e.length;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&xt(r,"updated")}}function St(e){e._inactive=!1,Fo.push(e)}function At(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,bt(e[t],!0)}function It(e){var t=e.id;if(null==Bo[t]){if(Bo[t]=!0,Uo){for(var n=Ro.length-1;n>Wo&&Ro[n].id>e.id;)n--;Ro.splice(n+1,0,e)}else Ro.push(e);Ho||(Ho=!0,ue(kt))}}function Tt(e,t,n){qo.get=function(){return this[t][n]},qo.set=function(e){this[t][n]=e},Object.defineProperty(e,n,qo)}function Ot(e){e._watchers=[];var t=e.$options;t.props&&Et(e,t.props),t.methods&&Rt(e,t.methods),t.data?Mt(e):F(e._data={},!0),t.computed&&Lt(e,t.computed),t.watch&&t.watch!==Qi&&Ft(e,t.watch)}function Et(e,t){var n=e.$options.propsData||{},r=e._props={},a=e.$options._propKeys=[],i=!e.$parent;i||D(!1);for(var o in t)!function(i){a.push(i);var o=ee(i,t,n,e);B(r,i,o),i in e||Tt(e,"_props",i)}(o);D(!0)}function Mt(e){var t=e.$options.data;t=e._data="function"==typeof t?jt(t,e):t||{},l(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,a=(e.$options.methods,n.length);a--;){var i=n[a];r&&g(r,i)||I(i)||Tt(e,"_data",i)}F(t,!0)}function jt(e,t){M();try{return e.call(t,t)}catch(e){return ie(e,t,"data()"),{}}finally{j()}}function Lt(e,t){var n=e._computedWatchers=Object.create(null),r=ro();for(var a in t){var i=t[a],o="function"==typeof i?i:i.get;r||(n[a]=new Ko(e,o||k,k,Xo)),a in e||Pt(e,a,i)}}function Pt(e,t,n){var r=!ro();"function"==typeof n?(qo.get=r?Dt(t):Nt(n),qo.set=k):(qo.get=n.get?r&&!1!==n.cache?Dt(t):Nt(n.get):k,qo.set=n.set||k),Object.defineProperty(e,t,qo)}function Dt(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),co.target&&t.depend(),t.value}}function Nt(e){return function(){return e.call(this,this)}}function Rt(e,t){e.$options.props;for(var n in t)e[n]="function"!=typeof t[n]?k:ji(t[n],e)}function Ft(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var a=0;a<r.length;a++)Bt(e,n,r[a]);else Bt(e,n,r)}}function Bt(e,t,n,r){return l(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Ht(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var a=r.componentOptions;n.propsData=a.propsData,n._parentListeners=a.listeners,n._renderChildren=a.children,n._componentTag=a.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Ut(e){var t=e.options;if(e.super){var n=Ut(e.super);if(n!==e.superOptions){e.superOptions=n;var r=Wt(e);r&&x(e.extendOptions,r),t=e.options=Q(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Wt(e){var t,n=e.options,r=e.sealedOptions;for(var a in n)n[a]!==r[a]&&(t||(t={}),t[a]=n[a]);return t}function zt(e){this._init(e)}function Gt(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=w(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}function Vt(e){e.mixin=function(e){return this.options=Q(this.options,e),this}}function Jt(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,a=e._Ctor||(e._Ctor={});if(a[r])return a[r];var i=e.name||n.options.name,o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Q(n.options,e),o.super=n,o.options.props&&Kt(o),o.options.computed&&qt(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,Ni.forEach(function(e){o[e]=n[e]}),i&&(o.options.components[i]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=x({},o.options),a[r]=o,o}}function Kt(e){var t=e.options.props;for(var n in t)Tt(e.prototype,"_props",n)}function qt(e){var t=e.options.computed;for(var n in t)Pt(e.prototype,n,t[n])}function Xt(e){Ni.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function Zt(e){return e&&(e.Ctor.options.name||e.tag)}function Qt(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:!!u(e)&&e.test(t)}function Yt(e,t){var n=e.cache,r=e.keys,a=e._vnode;for(var i in n){var o=n[i];if(o){var s=Zt(o.componentOptions);s&&!t(s)&&en(n,i,r,a)}}}function en(e,t,n,r){var a=e[t];!a||r&&a.tag===r.tag||a.componentInstance.$destroy(),e[t]=null,m(n,t)}function tn(e){for(var t=e.data,n=e,r=e;a(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(t=nn(r.data,t));for(;a(n=n.parent);)n&&n.data&&(t=nn(t,n.data));return rn(t.staticClass,t.class)}function nn(e,t){return{staticClass:an(e.staticClass,t.staticClass),class:a(e.class)?[e.class,t.class]:t.class}}function rn(e,t){return a(e)||a(t)?an(e,on(t)):""}function an(e,t){return e?t?e+" "+t:e:t||""}function on(e){return Array.isArray(e)?sn(e):c(e)?cn(e):"string"==typeof e?e:""}function sn(e){for(var t,n="",r=0,i=e.length;r<i;r++)a(t=on(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function cn(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function ln(e){return ks(e)?"svg":"math"===e?"math":void 0}function un(e){if(!Wi)return!0;if(Ss(e))return!1;if(e=e.toLowerCase(),null!=As[e])return As[e];var t=document.createElement(e);return e.indexOf("-")>-1?As[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:As[e]=/HTMLUnknownElement/.test(t.toString())}function fn(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function dn(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)}function pn(e,t){return document.createElementNS(xs[e],t)}function vn(e){return document.createTextNode(e)}function hn(e){return document.createComment(e)}function mn(e,t,n){e.insertBefore(t,n)}function gn(e,t){e.removeChild(t)}function yn(e,t){e.appendChild(t)}function _n(e){return e.parentNode}function bn(e){return e.nextSibling}function wn(e){return e.tagName}function xn(e,t){e.textContent=t}function Cn(e,t){e.setAttribute(t,"")}function kn(e,t){var n=e.data.ref;if(a(n)){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?m(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}function $n(e,t){return e.key===t.key&&(e.tag===t.tag&&e.isComment===t.isComment&&a(e.data)===a(t.data)&&Sn(e,t)||i(e.isAsyncPlaceholder)&&e.asyncFactory===t.asyncFactory&&r(t.asyncFactory.error))}function Sn(e,t){if("input"!==e.tag)return!0;var n,r=a(n=e.data)&&a(n=n.attrs)&&n.type,i=a(n=t.data)&&a(n=n.attrs)&&n.type;return r===i||Is(r)&&Is(i)}function An(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,a(i)&&(o[i]=r);return o}function In(e,t){(e.data.directives||t.data.directives)&&Tn(e,t)}function Tn(e,t){var n,r,a,i=e===Es,o=t===Es,s=On(e.data.directives,e.context),c=On(t.data.directives,t.context),l=[],u=[];for(n in c)r=s[n],a=c[n],r?(a.oldValue=r.value,a.oldArg=r.arg,Mn(a,"update",t,e),a.def&&a.def.componentUpdated&&u.push(a)):(Mn(a,"bind",t,e),a.def&&a.def.inserted&&l.push(a));if(l.length){var f=function(){for(var n=0;n<l.length;n++)Mn(l[n],"inserted",t,e)};i?he(t,"insert",f):f()}if(u.length&&he(t,"postpatch",function(){for(var n=0;n<u.length;n++)Mn(u[n],"componentUpdated",t,e)}),!i)for(n in s)c[n]||Mn(s[n],"unbind",e,e,o)}function On(e,t){var n=Object.create(null);if(!e)return n;var r,a;for(r=0;r<e.length;r++)a=e[r],a.modifiers||(a.modifiers=Ls),n[En(a)]=a,a.def=Y(t.$options,"directives",a.name,!0);return n}function En(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Mn(e,t,n,r,a){var i=e.def&&e.def[t];if(i)try{i(n.elm,e,n,r,a)}catch(r){ie(r,n.context,"directive "+e.name+" "+t+" hook")}}function jn(e,t){var n=t.componentOptions;if(!(a(n)&&!1===n.Ctor.options.inheritAttrs||r(e.data.attrs)&&r(t.data.attrs))){var i,o,s=t.elm,c=e.data.attrs||{},l=t.data.attrs||{};a(l.__ob__)&&(l=t.data.attrs=x({},l));for(i in l)o=l[i],c[i]!==o&&Ln(s,i,o);(Ji||qi)&&l.value!==c.value&&Ln(s,"value",l.value);for(i in c)r(l[i])&&(_s(i)?s.removeAttributeNS(ys,bs(i)):vs(i)||s.removeAttribute(i))}}function Ln(e,t,n){e.tagName.indexOf("-")>-1?Pn(e,t,n):gs(t)?ws(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):vs(t)?e.setAttribute(t,ms(t,n)):_s(t)?ws(n)?e.removeAttributeNS(ys,bs(t)):e.setAttributeNS(ys,t,n):Pn(e,t,n)}function Pn(e,t,n){if(ws(n))e.removeAttribute(t);else{if(Ji&&!Ki&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}function Dn(e,t){var n=t.elm,i=t.data,o=e.data;if(!(r(i.staticClass)&&r(i.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var s=tn(t),c=n._transitionClasses;a(c)&&(s=an(s,on(c))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}function Nn(e){function t(){(o||(o=[])).push(e.slice(v,a).trim()),v=a+1}var n,r,a,i,o,s=!1,c=!1,l=!1,u=!1,f=0,d=0,p=0,v=0;for(a=0;a<e.length;a++)if(r=n,n=e.charCodeAt(a),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(l)96===n&&92!==r&&(l=!1);else if(u)47===n&&92!==r&&(u=!1);else if(124!==n||124===e.charCodeAt(a+1)||124===e.charCodeAt(a-1)||f||d||p){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:l=!0;break;case 40:p++;break;case 41:p--;break;case 91:d++;break;case 93:d--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=a-1,m=void 0;h>=0&&" "===(m=e.charAt(h));h--);m&&Rs.test(m)||(u=!0)}}else void 0===i?(v=a+1,i=e.slice(0,a).trim()):t();if(void 0===i?i=e.slice(0,a).trim():0!==v&&t(),o)for(a=0;a<o.length;a++)i=Rn(i,o[a]);return i}function Rn(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),a=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==a?","+a:a)}function Fn(e,t){console.error("[Vue compiler]: "+e)}function Bn(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Hn(e,t,n,r,a){(e.props||(e.props=[])).push(Zn({name:t,value:n,dynamic:a},r)),e.plain=!1}function Un(e,t,n,r,a){(a?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[])).push(Zn({name:t,value:n,dynamic:a},r)),e.plain=!1}function Wn(e,t,n,r){e.attrsMap[t]=n,e.attrsList.push(Zn({name:t,value:n},r))}function zn(e,t,n,r,a,i,o,s){(e.directives||(e.directives=[])).push(Zn({name:t,rawName:n,value:r,arg:a,isDynamicArg:i,modifiers:o},s)),e.plain=!1}function Gn(e,t,n){return n?"_p("+t+',"'+e+'")':e+t}function Vn(e,t,n,r,a,i,o,s){r=r||Ci,r.right?s?t="("+t+")==='click'?'contextmenu':("+t+")":"click"===t&&(t="contextmenu",delete r.right):r.middle&&(s?t="("+t+")==='click'?'mouseup':("+t+")":"click"===t&&(t="mouseup")),r.capture&&(delete r.capture,t=Gn("!",t,s)),r.once&&(delete r.once,t=Gn("~",t,s)),r.passive&&(delete r.passive,t=Gn("&",t,s));var c;r.native?(delete r.native,c=e.nativeEvents||(e.nativeEvents={})):c=e.events||(e.events={});var l=Zn({value:n.trim(),dynamic:s},o);r!==Ci&&(l.modifiers=r);var u=c[t];Array.isArray(u)?a?u.unshift(l):u.push(l):c[t]=u?a?[l,u]:[u,l]:l,e.plain=!1}function Jn(e,t){return e.rawAttrsMap[":"+t]||e.rawAttrsMap["v-bind:"+t]||e.rawAttrsMap[t]}function Kn(e,t,n){var r=qn(e,":"+t)||qn(e,"v-bind:"+t);if(null!=r)return Nn(r);if(!1!==n){var a=qn(e,t);if(null!=a)return JSON.stringify(a)}}function qn(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var a=e.attrsList,i=0,o=a.length;i<o;i++)if(a[i].name===t){a.splice(i,1);break}return n&&delete e.attrsMap[t],r}function Xn(e,t){for(var n=e.attrsList,r=0,a=n.length;r<a;r++){var i=n[r];if(t.test(i.name))return n.splice(r,1),i}}function Zn(e,t){return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),e}function Qn(e,t,n){var r=n||{},a=r.number,i=r.trim,o="$$v";i&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),a&&(o="_n("+o+")");var s=Yn(t,o);e.model={value:"("+t+")",expression:JSON.stringify(t),callback:"function ($$v) {"+s+"}"}}function Yn(e,t){var n=er(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function er(e){if(e=e.trim(),ts=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<ts-1)return as=e.lastIndexOf("."),as>-1?{exp:e.slice(0,as),key:'"'+e.slice(as+1)+'"'}:{exp:e,key:null};for(ns=e,as=is=os=0;!nr();)rs=tr(),rr(rs)?ir(rs):91===rs&&ar(rs);return{exp:e.slice(0,is),key:e.slice(is+1,os)}}function tr(){return ns.charCodeAt(++as)}function nr(){return as>=ts}function rr(e){return 34===e||39===e}function ar(e){var t=1;for(is=as;!nr();)if(e=tr(),rr(e))ir(e);else if(91===e&&t++,93===e&&t--,0===t){os=as;break}}function ir(e){for(var t=e;!nr()&&(e=tr())!==t;);}function or(e,t,n){ss=n;var r=t.value,a=t.modifiers,i=e.tag,o=e.attrsMap.type;if(e.component)return Qn(e,r,a),!1;if("select"===i)lr(e,r,a);else if("input"===i&&"checkbox"===o)sr(e,r,a);else if("input"===i&&"radio"===o)cr(e,r,a);else if("input"===i||"textarea"===i)ur(e,r,a);else if(!Fi.isReservedTag(i))return Qn(e,r,a),!1;return!0}function sr(e,t,n){var r=n&&n.number,a=Kn(e,"value")||"null",i=Kn(e,"true-value")||"true",o=Kn(e,"false-value")||"false";Hn(e,"checked","Array.isArray("+t+")?_i("+t+","+a+")>-1"+("true"===i?":("+t+")":":_q("+t+","+i+")")),Vn(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+i+"):("+o+");if(Array.isArray($$a)){var $$v="+(r?"_n("+a+")":a)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Yn(t,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Yn(t,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Yn(t,"$$c")+"}",null,!0)}function cr(e,t,n){var r=n&&n.number,a=Kn(e,"value")||"null";a=r?"_n("+a+")":a,Hn(e,"checked","_q("+t+","+a+")"),Vn(e,"change",Yn(t,a),null,!0)}function lr(e,t,n){var r=n&&n.number,a='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})",i="var $$selectedVal = "+a+";";i=i+" "+Yn(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Vn(e,"change",i,null,!0)}function ur(e,t,n){var r=e.attrsMap.type,a=n||{},i=a.lazy,o=a.number,s=a.trim,c=!i&&"range"!==r,l=i?"change":"range"===r?Fs:"input",u="$event.target.value";s&&(u="$event.target.value.trim()"),o&&(u="_n("+u+")");var f=Yn(t,u);c&&(f="if($event.target.composing)return;"+f),Hn(e,"value","("+t+")"),Vn(e,l,f,null,!0),(s||o)&&Vn(e,"blur","$forceUpdate()")}function fr(e){if(a(e[Fs])){var t=Ji?"change":"input";e[t]=[].concat(e[Fs],e[t]||[]),delete e[Fs]}a(e[Bs])&&(e.change=[].concat(e[Bs],e.change||[]),delete e[Bs])}function dr(e,t,n){var r=cs;return function a(){null!==t.apply(null,arguments)&&vr(e,a,n,r)}}function pr(e,t,n,r){if(Hs){var a=zo,i=t;t=i._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=a||e.timeStamp<=0||e.target.ownerDocument!==document)return i.apply(this,arguments)}}cs.addEventListener(e,t,Yi?{capture:n,passive:r}:n)}function vr(e,t,n,r){(r||cs).removeEventListener(e,t._wrapper||t,n)}function hr(e,t){if(!r(e.data.on)||!r(t.data.on)){var n=t.data.on||{},a=e.data.on||{};cs=t.elm,fr(n),ve(n,a,pr,vr,dr,t.context),cs=void 0}}function mr(e,t){if(!r(e.data.domProps)||!r(t.data.domProps)){var n,i,o=t.elm,s=e.data.domProps||{},c=t.data.domProps||{};a(c.__ob__)&&(c=t.data.domProps=x({},c));for(n in s)n in c||(o[n]="");for(n in c){if(i=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),i===s[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=i;var l=r(i)?"":String(i);gr(o,l)&&(o.value=l)}else if("innerHTML"===n&&ks(o.tagName)&&r(o.innerHTML)){ls=ls||document.createElement("div"),ls.innerHTML="<svg>"+i+"</svg>";for(var u=ls.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;u.firstChild;)o.appendChild(u.firstChild)}else if(i!==s[n])try{o[n]=i}catch(e){}}}}function gr(e,t){return!e.composing&&("OPTION"===e.tagName||yr(e,t)||_r(e,t))}function yr(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}function _r(e,t){var n=e.value,r=e._vModifiers;if(a(r)){if(r.number)return v(n)!==v(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}function br(e){var t=wr(e.style);return e.staticStyle?x(e.staticStyle,t):t}function wr(e){return Array.isArray(e)?C(e):"string"==typeof e?zs(e):e}function xr(e,t){var n,r={};if(t)for(var a=e;a.componentInstance;)(a=a.componentInstance._vnode)&&a.data&&(n=br(a.data))&&x(r,n);(n=br(e.data))&&x(r,n);for(var i=e;i=i.parent;)i.data&&(n=br(i.data))&&x(r,n);return r}function Cr(e,t){var n=t.data,i=e.data;if(!(r(n.staticStyle)&&r(n.style)&&r(i.staticStyle)&&r(i.style))){var o,s,c=t.elm,l=i.staticStyle,u=i.normalizedStyle||i.style||{},f=l||u,d=wr(t.data.style)||{};t.data.normalizedStyle=a(d.__ob__)?x({},d):d;var p=xr(t,!0);for(s in f)r(p[s])&&Js(c,s,"");for(s in p)(o=p[s])!==f[s]&&Js(c,s,null==o?"":o)}}function kr(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Zs).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function $r(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Zs).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Sr(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&x(t,Qs(e.name||"v")),x(t,e),t}return"string"==typeof e?Qs(e):void 0}}function Ar(e){oc(function(){oc(e)})}function Ir(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),kr(e,t))}function Tr(e,t){e._transitionClasses&&m(e._transitionClasses,t),$r(e,t)}function Or(e,t,n){var r=Er(e,t),a=r.type,i=r.timeout,o=r.propCount;if(!a)return n();var s=a===ec?rc:ic,c=0,l=function(){e.removeEventListener(s,u),n()},u=function(t){t.target===e&&++c>=o&&l()};setTimeout(function(){c<o&&l()},i+1),e.addEventListener(s,u)}function Er(e,t){var n,r=window.getComputedStyle(e),a=(r[nc+"Delay"]||"").split(", "),i=(r[nc+"Duration"]||"").split(", "),o=Mr(a,i),s=(r[ac+"Delay"]||"").split(", "),c=(r[ac+"Duration"]||"").split(", "),l=Mr(s,c),u=0,f=0;return t===ec?o>0&&(n=ec,u=o,f=i.length):t===tc?l>0&&(n=tc,u=l,f=c.length):(u=Math.max(o,l),n=u>0?o>l?ec:tc:null,f=n?n===ec?i.length:c.length:0),{type:n,timeout:u,propCount:f,hasTransform:n===ec&&sc.test(r[nc+"Property"])}}function Mr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return jr(t)+jr(e[n])}))}function jr(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Lr(e,t){var n=e.elm;a(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=Sr(e.data.transition);if(!r(i)&&!a(n._enterCb)&&1===n.nodeType){for(var o=i.css,s=i.type,l=i.enterClass,u=i.enterToClass,f=i.enterActiveClass,d=i.appearClass,p=i.appearToClass,h=i.appearActiveClass,m=i.beforeEnter,g=i.enter,y=i.afterEnter,_=i.enterCancelled,b=i.beforeAppear,w=i.appear,x=i.afterAppear,C=i.appearCancelled,k=i.duration,$=No,S=No.$vnode;S&&S.parent;)$=S.context,S=S.parent;var I=!$._isMounted||!e.isRootInsert;if(!I||w||""===w){var T=I&&d?d:l,O=I&&h?h:f,E=I&&p?p:u,M=I?b||m:m,j=I&&"function"==typeof w?w:g,L=I?x||y:y,P=I?C||_:_,D=v(c(k)?k.enter:k),N=!1!==o&&!Ki,R=Nr(j),F=n._enterCb=A(function(){N&&(Tr(n,E),Tr(n,O)),F.cancelled?(N&&Tr(n,T),P&&P(n)):L&&L(n),n._enterCb=null});e.data.show||he(e,"insert",function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),j&&j(n,F)}),M&&M(n),N&&(Ir(n,T),Ir(n,O),Ar(function(){Tr(n,T),F.cancelled||(Ir(n,E),R||(Dr(D)?setTimeout(F,D):Or(n,s,F)))})),e.data.show&&(t&&t(),j&&j(n,F)),N||R||F()}}}function Pr(e,t){function n(){C.cancelled||(!e.data.show&&i.parentNode&&((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),p&&p(i),b&&(Ir(i,u),Ir(i,d),Ar(function(){Tr(i,u),C.cancelled||(Ir(i,f),w||(Dr(x)?setTimeout(C,x):Or(i,l,C)))})),h&&h(i,C),b||w||C())}var i=e.elm;a(i._enterCb)&&(i._enterCb.cancelled=!0,i._enterCb());var o=Sr(e.data.transition);if(r(o)||1!==i.nodeType)return t();if(!a(i._leaveCb)){var s=o.css,l=o.type,u=o.leaveClass,f=o.leaveToClass,d=o.leaveActiveClass,p=o.beforeLeave,h=o.leave,m=o.afterLeave,g=o.leaveCancelled,y=o.delayLeave,_=o.duration,b=!1!==s&&!Ki,w=Nr(h),x=v(c(_)?_.leave:_),C=i._leaveCb=A(function(){i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),b&&(Tr(i,f),Tr(i,d)),C.cancelled?(b&&Tr(i,u),g&&g(i)):(t(),m&&m(i)),i._leaveCb=null});y?y(n):n()}}function Dr(e){return"number"==typeof e&&!isNaN(e)}function Nr(e){if(r(e))return!1;var t=e.fns;return a(t)?Nr(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Rr(e,t){!0!==t.data.show&&Lr(t)}function Fr(e,t,n){Br(e,t,n),(Ji||qi)&&setTimeout(function(){Br(e,t,n)},0)}function Br(e,t,n){var r=t.value,a=e.multiple;if(!a||Array.isArray(r)){for(var i,o,s=0,c=e.options.length;s<c;s++)if(o=e.options[s],a)i=S(r,Ur(o))>-1,o.selected!==i&&(o.selected=i);else if($(Ur(o),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));a||(e.selectedIndex=-1)}}function Hr(e,t){return t.every(function(t){return!$(t,e)})}function Ur(e){return"_value"in e?e._value:e.value}function Wr(e){e.target.composing=!0}function zr(e){e.target.composing&&(e.target.composing=!1,Gr(e.target,"input"))}function Gr(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Vr(e){return!e.componentInstance||e.data&&e.data.transition?e:Vr(e.componentInstance._vnode)}function Jr(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Jr(lt(t.children)):e}function Kr(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var a=n._parentListeners;for(var i in a)t[Ti(i)]=a[i];return t}function qr(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function Xr(e){for(;e=e.parent;)if(e.data.transition)return!0}function Zr(e,t){return t.key===e.key&&t.tag===e.tag}function Qr(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Yr(e){e.data.newPos=e.elm.getBoundingClientRect()}function ea(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,a=t.top-n.top;if(r||a){e.data.moved=!0;var i=e.elm.style;i.transform=i.WebkitTransform="translate("+r+"px,"+a+"px)",i.transitionDuration="0s"}}function ta(e,t){var n=t?Nc(t):Pc;if(n.test(e)){for(var r,a,i,o=[],s=[],c=n.lastIndex=0;r=n.exec(e);){a=r.index,a>c&&(s.push(i=e.slice(c,a)),o.push(JSON.stringify(i)));var l=Nn(r[1].trim());o.push("_s("+l+")"),s.push({"@binding":l}),c=a+r[0].length}return c<e.length&&(s.push(i=e.slice(c)),o.push(JSON.stringify(i))),{expression:o.join("+"),tokens:s}}}function na(e,t){var n=(t.warn,qn(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=Kn(e,"class",!1);r&&(e.classBinding=r)}function ra(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function aa(e,t){var n=(t.warn,qn(e,"style"));if(n){e.staticStyle=JSON.stringify(zs(n))}var r=Kn(e,"style",!1);r&&(e.styleBinding=r)}function ia(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}function oa(e,t){var n=t?al:rl;return e.replace(n,function(e){return nl[e]})}function sa(e,t){function n(t){u+=t,e=e.substring(t)}function r(e,n,r){var a,s;if(null==n&&(n=u),null==r&&(r=u),e)for(s=e.toLowerCase(),a=o.length-1;a>=0&&o[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var c=o.length-1;c>=a;c--)t.end&&t.end(o[c].tag,n,r);o.length=a,i=a&&o[a-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,r):"p"===s&&(t.start&&t.start(e,[],!1,n,r),t.end&&t.end(e,n,r))}for(var a,i,o=[],s=t.expectHTML,c=t.isUnaryTag||Li,l=t.canBeLeftOpenTag||Li,u=0;e;){if(a=e,i&&el(i)){var f=0,d=i.toLowerCase(),p=tl[d]||(tl[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i")),v=e.replace(p,function(e,n,r){return f=r.length,el(d)||"noscript"===d||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),ol(d,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});u+=e.length-v.length,e=v,r(d,u-f,u)}else{var h=e.indexOf("<");if(0===h){if(Qc.test(e)){var m=e.indexOf("--\x3e");if(m>=0){t.shouldKeepComment&&t.comment(e.substring(4,m),u,u+m+3),n(m+3);continue}}if(Yc.test(e)){var g=e.indexOf("]>");if(g>=0){n(g+2);continue}}var y=e.match(Zc);if(y){n(y[0].length);continue}var _=e.match(Xc);if(_){var b=u;n(_[0].length),r(_[1],b,u);continue}var w=function(){var t=e.match(Kc);if(t){var r={tagName:t[1],attrs:[],start:u};n(t[0].length);for(var a,i;!(a=e.match(qc))&&(i=e.match(Gc)||e.match(zc));)i.start=u,n(i[0].length),i.end=u,r.attrs.push(i);if(a)return r.unarySlash=a[1],n(a[0].length),r.end=u,r}}();if(w){!function(e){var n=e.tagName,a=e.unarySlash;s&&("p"===i&&Wc(n)&&r(i),l(n)&&i===n&&r(n));for(var u=c(n)||!!a,f=e.attrs.length,d=new Array(f),p=0;p<f;p++){var v=e.attrs[p],h=v[3]||v[4]||v[5]||"",m="a"===n&&"href"===v[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;d[p]={name:v[1],value:oa(h,m)}}u||(o.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:d,start:e.start,end:e.end}),i=n),t.start&&t.start(n,d,u,e.start,e.end)}(w),ol(w.tagName,e)&&n(1);continue}}var x=void 0,C=void 0,k=void 0;if(h>=0){for(C=e.slice(h);!(Xc.test(C)||Kc.test(C)||Qc.test(C)||Yc.test(C)||(k=C.indexOf("<",1))<0);)h+=k,C=e.slice(h);x=e.substring(0,h)}h<0&&(x=e),x&&n(x.length),t.chars&&x&&t.chars(x,u-x.length,u)}if(e===a){t.chars&&t.chars(e);break}}r()}function ca(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:Ta(t),rawAttrsMap:{},parent:n,children:[]}}function la(e,t){function n(e){if(r(e),u||e.processed||(e=da(e,t)),s.length||e===i||i.if&&(e.elseif||e.else)&&ba(i,{exp:e.elseif,block:e}),o&&!e.forbidden)if(e.elseif||e.else)ya(e,o);else{if(e.slotScope){var n=e.slotTarget||'"default"';(o.scopedSlots||(o.scopedSlots={}))[n]=e}o.children.push(e),e.parent=o}e.children=e.children.filter(function(e){return!e.slotScope}),r(e),e.pre&&(u=!1),Ic(e.tag)&&(f=!1);for(var a=0;a<Ac.length;a++)Ac[a](e,t)}function r(e){if(!f)for(var t;(t=e.children[e.children.length-1])&&3===t.type&&" "===t.text;)e.children.pop()}Cc=t.warn||Fn,Ic=t.isPreTag||Li,Tc=t.mustUseProp||Li,Oc=t.getTagNamespace||Li;var a=t.isReservedTag||Li;Ec=function(e){return!!e.component||!a(e.tag)},$c=Bn(t.modules,"transformNode"),Sc=Bn(t.modules,"preTransformNode"),Ac=Bn(t.modules,"postTransformNode"),kc=t.delimiters;var i,o,s=[],c=!1!==t.preserveWhitespace,l=t.whitespace,u=!1,f=!1;return sa(e,{warn:Cc,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,outputSourceRange:t.outputSourceRange,start:function(e,r,a,c,l){var d=o&&o.ns||Oc(e);Ji&&"svg"===d&&(r=Ma(r));var p=ca(e,r,o);d&&(p.ns=d),Ea(p)&&!ro()&&(p.forbidden=!0);for(var v=0;v<Sc.length;v++)p=Sc[v](p,t)||p;u||(ua(p),p.pre&&(u=!0)),Ic(p.tag)&&(f=!0),u?fa(p):p.processed||(ha(p),ga(p),wa(p)),i||(i=p),a?n(p):(o=p,s.push(p))},end:function(e,t,r){var a=s[s.length-1];s.length-=1,o=s[s.length-1],n(a)},chars:function(e,t,n){if(o&&(!Ji||"textarea"!==o.tag||o.attrsMap.placeholder!==e)){var r=o.children;if(e=f||e.trim()?Oa(o)?e:_l(e):r.length?l?"condense"===l&&gl.test(e)?"":" ":c?" ":"":""){f||"condense"!==l||(e=e.replace(yl," "));var a,i;!u&&" "!==e&&(a=ta(e,kc))?i={type:2,expression:a.expression,tokens:a.tokens,text:e}:" "===e&&r.length&&" "===r[r.length-1].text||(i={type:3,text:e}),i&&r.push(i)}}},comment:function(e,t,n){if(o){var r={type:3,text:e,isComment:!0};o.children.push(r)}}}),i}function ua(e){null!=qn(e,"v-pre")&&(e.pre=!0)}function fa(e){var t=e.attrsList,n=t.length;if(n)for(var r=e.attrs=new Array(n),a=0;a<n;a++)r[a]={name:t[a].name,value:JSON.stringify(t[a].value)},null!=t[a].start&&(r[a].start=t[a].start,r[a].end=t[a].end);else e.pre||(e.plain=!0)}function da(e,t){pa(e),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,va(e),xa(e),ka(e),$a(e);for(var n=0;n<$c.length;n++)e=$c[n](e,t)||e;return Sa(e),e}function pa(e){var t=Kn(e,"key");if(t){e.key=t}}function va(e){var t=Kn(e,"ref");t&&(e.ref=t,e.refInFor=Aa(e))}function ha(e){var t;if(t=qn(e,"v-for")){var n=ma(t);n&&x(e,n)}}function ma(e){var t=e.match(ll);if(t){var n={};n.for=t[2].trim();var r=t[1].trim().replace(fl,""),a=r.match(ul);return a?(n.alias=r.replace(ul,"").trim(),n.iterator1=a[1].trim(),a[2]&&(n.iterator2=a[2].trim())):n.alias=r,n}}function ga(e){var t=qn(e,"v-if");if(t)e.if=t,ba(e,{exp:t,block:e});else{null!=qn(e,"v-else")&&(e.else=!0);var n=qn(e,"v-else-if");n&&(e.elseif=n)}}function ya(e,t){var n=_a(t.children);n&&n.if&&ba(n,{exp:e.elseif,block:e})}function _a(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}function ba(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function wa(e){null!=qn(e,"v-once")&&(e.once=!0)}function xa(e){var t;"template"===e.tag?(t=qn(e,"scope"),e.slotScope=t||qn(e,"slot-scope")):(t=qn(e,"slot-scope"))&&(e.slotScope=t);var n=Kn(e,"slot");if(n&&(e.slotTarget='""'===n?'"default"':n,e.slotTargetDynamic=!(!e.attrsMap[":slot"]&&!e.attrsMap["v-bind:slot"]),"template"===e.tag||e.slotScope||Un(e,"slot",n,Jn(e,"slot"))),"template"===e.tag){var r=Xn(e,ml);if(r){var a=Ca(r),i=a.name,o=a.dynamic;e.slotTarget=i,e.slotTargetDynamic=o,e.slotScope=r.value||bl}}else{var s=Xn(e,ml);if(s){var c=e.scopedSlots||(e.scopedSlots={}),l=Ca(s),u=l.name,f=l.dynamic,d=c[u]=ca("template",[],e);d.slotTarget=u,d.slotTargetDynamic=f,d.children=e.children.filter(function(e){if(!e.slotScope)return e.parent=d,!0}),d.slotScope=s.value||bl,e.children=[],e.plain=!1}}}function Ca(e){var t=e.name.replace(ml,"");return t||"#"!==e.name[0]&&(t="default"),dl.test(t)?{name:t.slice(1,-1),dynamic:!0}:{name:'"'+t+'"',dynamic:!1}}function ka(e){"slot"===e.tag&&(e.slotName=Kn(e,"name"))}function $a(e){var t;(t=Kn(e,"is"))&&(e.component=t),null!=qn(e,"inline-template")&&(e.inlineTemplate=!0)}function Sa(e){var t,n,r,a,i,o,s,c,l=e.attrsList;for(t=0,n=l.length;t<n;t++)if(r=a=l[t].name,i=l[t].value,cl.test(r))if(e.hasBindings=!0,o=Ia(r.replace(cl,"")),o&&(r=r.replace(hl,"")),vl.test(r))r=r.replace(vl,""),i=Nn(i),c=dl.test(r),c&&(r=r.slice(1,-1)),o&&(o.prop&&!c&&"innerHtml"===(r=Ti(r))&&(r="innerHTML"),o.camel&&!c&&(r=Ti(r)),o.sync&&(s=Yn(i,"$event"),c?Vn(e,'"update:"+('+r+")",s,null,!1,Cc,l[t],!0):(Vn(e,"update:"+Ti(r),s,null,!1,Cc,l[t]),Mi(r)!==Ti(r)&&Vn(e,"update:"+Mi(r),s,null,!1,Cc,l[t])))),o&&o.prop||!e.component&&Tc(e.tag,e.attrsMap.type,r)?Hn(e,r,i,l[t],c):Un(e,r,i,l[t],c);else if(sl.test(r))r=r.replace(sl,""),c=dl.test(r),c&&(r=r.slice(1,-1)),Vn(e,r,i,o,!1,Cc,l[t],c);else{r=r.replace(cl,"");var u=r.match(pl),f=u&&u[1];c=!1,f&&(r=r.slice(0,-(f.length+1)),dl.test(f)&&(f=f.slice(1,-1),c=!0)),zn(e,r,a,i,f,c,o,l[t])}else{Un(e,r,JSON.stringify(i),l[t]),!e.component&&"muted"===r&&Tc(e.tag,e.attrsMap.type,r)&&Hn(e,r,"true",l[t])}}function Aa(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Ia(e){var t=e.match(hl);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Ta(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Oa(e){return"script"===e.tag||"style"===e.tag}function Ea(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Ma(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];wl.test(r.name)||(r.name=r.name.replace(xl,""),t.push(r))}return t}function ja(e,t){if("input"===e.tag){var n=e.attrsMap;if(!n["v-model"])return;var r;if((n[":type"]||n["v-bind:type"])&&(r=Kn(e,"type")),n.type||r||!n["v-bind"]||(r="("+n["v-bind"]+").type"),r){var a=qn(e,"v-if",!0),i=a?"&&("+a+")":"",o=null!=qn(e,"v-else",!0),s=qn(e,"v-else-if",!0),c=La(e);ha(c),Wn(c,"type","checkbox"),da(c,t),c.processed=!0,c.if="("+r+")==='checkbox'"+i,ba(c,{exp:c.if,block:c});var l=La(e);qn(l,"v-for",!0),Wn(l,"type","radio"),da(l,t),ba(c,{exp:"("+r+")==='radio'"+i,block:l});var u=La(e);return qn(u,"v-for",!0),Wn(u,":type",r),da(u,t),ba(c,{exp:a,block:u}),o?c.else=!0:s&&(c.elseif=s),c}}}function La(e){return ca(e.tag,e.attrsList.slice(),e.parent)}function Pa(e,t){t.value&&Hn(e,"textContent","_s("+t.value+")",t)}function Da(e,t){t.value&&Hn(e,"innerHTML","_s("+t.value+")",t)}function Na(e,t){e&&(Mc=Al(t.staticKeys||""),jc=t.isReservedTag||Li,Fa(e),Ba(e,!1))}function Ra(e){return h("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(e?","+e:""))}function Fa(e){if(e.static=Ha(e),1===e.type){if(!jc(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Fa(r),r.static||(e.static=!1)}if(e.ifConditions)for(var a=1,i=e.ifConditions.length;a<i;a++){var o=e.ifConditions[a].block;Fa(o),o.static||(e.static=!1)}}}function Ba(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)Ba(e.children[n],t||!!e.for);if(e.ifConditions)for(var a=1,i=e.ifConditions.length;a<i;a++)Ba(e.ifConditions[a].block,t)}}function Ha(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||$i(e.tag)||!jc(e.tag)||Ua(e)||!Object.keys(e).every(Mc))))}function Ua(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function Wa(e,t){var n=t?"nativeOn:":"on:",r="",a="";for(var i in e){var o=za(e[i]);e[i]&&e[i].dynamic?a+=i+","+o+",":r+='"'+i+'":'+o+","}return r="{"+r.slice(0,-1)+"}",a?n+"_d("+r+",["+a.slice(0,-1)+"])":n+r}function za(e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return za(e)}).join(",")+"]";var t=Ol.test(e.value),n=Il.test(e.value),r=Ol.test(e.value.replace(Tl,""));if(e.modifiers){var a="",i="",o=[];for(var s in e.modifiers)if(Ll[s])i+=Ll[s],El[s]&&o.push(s);else if("exact"===s){var c=e.modifiers;i+=jl(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else o.push(s);o.length&&(a+=Ga(o)),i&&(a+=i);return"function($event){"+a+(t?"return "+e.value+"($event)":n?"return ("+e.value+")($event)":r?"return "+e.value:e.value)+"}"}return t||n?e.value:"function($event){"+(r?"return "+e.value:e.value)+"}"}function Ga(e){return"if(!$event.type.indexOf('key')&&"+e.map(Va).join("&&")+")return null;"}function Va(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=El[e],r=Ml[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}function Ja(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}}function Ka(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}}function qa(e,t){var n=new Dl(t);return{render:"with(this){return "+(e?Xa(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function Xa(e,t){if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return Za(e,t);if(e.once&&!e.onceProcessed)return Qa(e,t);if(e.for&&!e.forProcessed)return ti(e,t);if(e.if&&!e.ifProcessed)return Ya(e,t);if("template"!==e.tag||e.slotTarget||t.pre){if("slot"===e.tag)return hi(e,t);var n;if(e.component)n=mi(e.component,e,t);else{var r;(!e.plain||e.pre&&t.maybeComponent(e))&&(r=ni(e,t));var a=e.inlineTemplate?null:li(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(a?","+a:"")+")"}for(var i=0;i<t.transforms.length;i++)n=t.transforms[i](e,n);return n}return li(e,t)||"void 0"}function Za(e,t){e.staticProcessed=!0;var n=t.pre;return e.pre&&(t.pre=e.pre),t.staticRenderFns.push("with(this){return "+Xa(e,t)+"}"),t.pre=n,"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function Qa(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Ya(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+Xa(e,t)+","+t.onceId+++","+n+")":Xa(e,t)}return Za(e,t)}function Ya(e,t,n,r){return e.ifProcessed=!0,ei(e.ifConditions.slice(),t,n,r)}function ei(e,t,n,r){function a(e){return n?n(e,t):e.once?Qa(e,t):Xa(e,t)}if(!e.length)return r||"_e()";var i=e.shift();return i.exp?"("+i.exp+")?"+a(i.block)+":"+ei(e,t,n,r):""+a(i.block)}function ti(e,t,n,r){var a=e.for,i=e.alias,o=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+a+"),function("+i+o+s+"){return "+(n||Xa)(e,t)+"})"}function ni(e,t){var n="{",r=ri(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var a=0;a<t.dataGenFns.length;a++)n+=t.dataGenFns[a](e);if(e.attrs&&(n+="attrs:"+gi(e.attrs)+","),e.props&&(n+="domProps:"+gi(e.props)+","),e.events&&(n+=Wa(e.events,!1)+","),e.nativeEvents&&(n+=Wa(e.nativeEvents,!0)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=ii(e,e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var i=ai(e,t);i&&(n+=i+",")}return n=n.replace(/,$/,"")+"}",e.dynamicAttrs&&(n="_b("+n+',"'+e.tag+'",'+gi(e.dynamicAttrs)+")"),e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function ri(e,t){var n=e.directives;if(n){var r,a,i,o,s="directives:[",c=!1;for(r=0,a=n.length;r<a;r++){i=n[r],o=!0;var l=t.directives[i.name];l&&(o=!!l(e,i,t.warn)),o&&(c=!0,s+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?",arg:"+(i.isDynamicArg?i.arg:'"'+i.arg+'"'):"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},")}return c?s.slice(0,-1)+"]":void 0}}function ai(e,t){var n=e.children[0];if(n&&1===n.type){var r=qa(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function ii(e,t,n){var r=e.for||Object.keys(t).some(function(e){var n=t[e];return n.slotTargetDynamic||n.if||n.for||si(n)}),a=!!e.if;if(!r)for(var i=e.parent;i;){if(i.slotScope&&i.slotScope!==bl||i.for){r=!0;break}i.if&&(a=!0),i=i.parent}var o=Object.keys(t).map(function(e){return ci(t[e],n)}).join(",");return"scopedSlots:_u(["+o+"]"+(r?",null,true":"")+(!r&&a?",null,false,"+oi(o):"")+")"}function oi(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}function si(e){return 1===e.type&&("slot"===e.tag||e.children.some(si))}function ci(e,t){var n=e.attrsMap["slot-scope"];if(e.if&&!e.ifProcessed&&!n)return Ya(e,t,ci,"null");if(e.for&&!e.forProcessed)return ti(e,t,ci);var r=e.slotScope===bl?"":String(e.slotScope),a="function("+r+"){return "+("template"===e.tag?e.if&&n?"("+e.if+")?"+(li(e,t)||"undefined")+":undefined":li(e,t)||"undefined":Xa(e,t))+"}",i=r?"":",proxy:true";return"{key:"+(e.slotTarget||'"default"')+",fn:"+a+i+"}"}function li(e,t,n,r,a){var i=e.children;if(i.length){var o=i[0];if(1===i.length&&o.for&&"template"!==o.tag&&"slot"!==o.tag){var s=n?t.maybeComponent(o)?",1":",0":"";return""+(r||Xa)(o,t)+s}var c=n?ui(i,t.maybeComponent):0,l=a||di;return"["+i.map(function(e){return l(e,t)}).join(",")+"]"+(c?","+c:"")}}function ui(e,t){for(var n=0,r=0;r<e.length;r++){var a=e[r];if(1===a.type){if(fi(a)||a.ifConditions&&a.ifConditions.some(function(e){return fi(e.block)})){n=2;break}(t(a)||a.ifConditions&&a.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}function fi(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function di(e,t){return 1===e.type?Xa(e,t):3===e.type&&e.isComment?vi(e):pi(e)}function pi(e){return"_v("+(2===e.type?e.expression:yi(JSON.stringify(e.text)))+")"}function vi(e){return"_e("+JSON.stringify(e.text)+")"}function hi(e,t){var n=e.slotName||'"default"',r=li(e,t),a="_t("+n+(r?","+r:""),i=e.attrs||e.dynamicAttrs?gi((e.attrs||[]).concat(e.dynamicAttrs||[]).map(function(e){return{name:Ti(e.name),value:e.value,dynamic:e.dynamic}})):null,o=e.attrsMap["v-bind"];return!i&&!o||r||(a+=",null"),i&&(a+=","+i),o&&(a+=(i?"":",null")+","+o),a+")"}function mi(e,t,n){var r=t.inlineTemplate?null:li(t,n,!0);return"_c("+e+","+ni(t,n)+(r?","+r:"")+")"}function gi(e){for(var t="",n="",r=0;r<e.length;r++){var a=e[r],i=yi(a.value);a.dynamic?n+=a.name+","+i+",":t+='"'+a.name+'":'+i+","}return t="{"+t.slice(0,-1)+"}",n?"_d("+t+",["+n.slice(0,-1)+"])":t}function yi(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function _i(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),k}}function bi(e){var t=Object.create(null);return function(n,r,a){r=x({},r);r.warn;delete r.warn;var i=r.delimiters?String(r.delimiters)+n:n;if(t[i])return t[i];var o=e(n,r),s={},c=[];return s.render=_i(o.render,c),s.staticRenderFns=o.staticRenderFns.map(function(e){return _i(e,c)}),t[i]=s}}function wi(e){return Lc=Lc||document.createElement("div"),Lc.innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',Lc.innerHTML.indexOf("&#10;")>0}function xi(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var Ci=Object.freeze({}),ki=Object.prototype.toString,$i=h("slot,component",!0),Si=h("key,ref,slot,slot-scope,is"),Ai=Object.prototype.hasOwnProperty,Ii=/-(\w)/g,Ti=y(function(e){return e.replace(Ii,function(e,t){return t?t.toUpperCase():""})}),Oi=y(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Ei=/\B([A-Z])/g,Mi=y(function(e){return e.replace(Ei,"-$1").toLowerCase()}),ji=Function.prototype.bind?b:_,Li=function(e,t,n){return!1},Pi=function(e){return e},Di="data-server-rendered",Ni=["component","directive","filter"],Ri=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],Fi={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Li,isReservedAttr:Li,isUnknownElement:Li,getTagNamespace:k,parsePlatformTagName:Pi,mustUseProp:Li,async:!0,_lifecycleHooks:Ri},Bi=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/,Hi=new RegExp("[^"+Bi.source+".$_\\d]"),Ui="__proto__"in{},Wi="undefined"!=typeof window,zi="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,Gi=zi&&WXEnvironment.platform.toLowerCase(),Vi=Wi&&window.navigator.userAgent.toLowerCase(),Ji=Vi&&/msie|trident/.test(Vi),Ki=Vi&&Vi.indexOf("msie 9.0")>0,qi=Vi&&Vi.indexOf("edge/")>0,Xi=(Vi&&Vi.indexOf("android"),Vi&&/iphone|ipad|ipod|ios/.test(Vi)||"ios"===Gi),Zi=(Vi&&/chrome\/\d+/.test(Vi),Vi&&/phantomjs/.test(Vi),Vi&&Vi.match(/firefox\/(\d+)/)),Qi={}.watch,Yi=!1;if(Wi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Yi=!0}}),window.addEventListener("test-passive",null,eo)}catch(e){}var to,no,ro=function(){return void 0===to&&(to=!Wi&&!zi&&void 0!==e&&(e.process&&"server"===e.process.env.VUE_ENV)),to},ao=Wi&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,io="undefined"!=typeof Symbol&&E(Symbol)&&"undefined"!=typeof Reflect&&E(Reflect.ownKeys);no="undefined"!=typeof Set&&E(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var oo=k,so=0,co=function(){this.id=so++,this.subs=[]};co.prototype.addSub=function(e){this.subs.push(e)},co.prototype.removeSub=function(e){m(this.subs,e)},co.prototype.depend=function(){co.target&&co.target.addDep(this)},co.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},co.target=null;var lo=[],uo=function(e,t,n,r,a,i,o,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=a,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},fo={child:{configurable:!0}};fo.child.get=function(){return this.componentInstance},Object.defineProperties(uo.prototype,fo);var po=function(e){void 0===e&&(e="");var t=new uo;return t.text=e,t.isComment=!0,t},vo=Array.prototype,ho=Object.create(vo);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=vo[e];T(ho,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var a,i=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":a=n;break;case"splice":a=n.slice(2)}return a&&o.observeArray(a),o.dep.notify(),i})});var mo=Object.getOwnPropertyNames(ho),go=!0,yo=function(e){this.value=e,this.dep=new co,this.vmCount=0,T(e,"__ob__",this),Array.isArray(e)?(Ui?N(e,ho):R(e,ho,mo),this.observeArray(e)):this.walk(e)};yo.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)B(e,t[n])},yo.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)F(e[t])};var _o=Fi.optionMergeStrategies;_o.data=function(e,t,n){return n?G(e,t,n):t&&"function"!=typeof t?e:G(e,t)},Ri.forEach(function(e){_o[e]=V}),Ni.forEach(function(e){_o[e+"s"]=K}),_o.watch=function(e,t,n,r){if(e===Qi&&(e=void 0),t===Qi&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var a={};x(a,e);for(var i in t){var o=a[i],s=t[i];o&&!Array.isArray(o)&&(o=[o]),a[i]=o?o.concat(s):Array.isArray(s)?s:[s]}return a},_o.props=_o.methods=_o.inject=_o.computed=function(e,t,n,r){if(!e)return t;var a=Object.create(null);return x(a,e),t&&x(a,t),a},_o.provide=G;var bo,wo=function(e,t){return void 0===t?e:t},xo=!1,Co=[],ko=!1;if("undefined"!=typeof Promise&&E(Promise)){var $o=Promise.resolve();bo=function(){$o.then(le),Xi&&setTimeout(k)},xo=!0}else if(Ji||"undefined"==typeof MutationObserver||!E(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())bo=void 0!==n&&E(n)?function(){n(le)}:function(){setTimeout(le,0)};else{var So=1,Ao=new MutationObserver(le),Io=document.createTextNode(String(So));Ao.observe(Io,{characterData:!0}),bo=function(){So=(So+1)%2,Io.data=String(So)},xo=!0}var To=new no,Oo=y(function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}});ze(Ge.prototype);var Eo,Mo={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;Mo.prepatch(n,n)}else{(e.componentInstance=Xe(e,No)).$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions;yt(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,xt(n,"mounted")),e.data.keepAlive&&(t._isMounted?St(n):bt(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?wt(t,!0):t.$destroy())}},jo=Object.keys(Mo),Lo=1,Po=2,Do=null,No=null,Ro=[],Fo=[],Bo={},Ho=!1,Uo=!1,Wo=0,zo=0,Go=Date.now;if(Wi&&!Ji){var Vo=window.performance;Vo&&"function"==typeof Vo.now&&Go()>document.createEvent("Event").timeStamp&&(Go=function(){return Vo.now()})}var Jo=0,Ko=function(e,t,n,r,a){this.vm=e,a&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Jo,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new no,this.newDepIds=new no,this.expression="","function"==typeof t?this.getter=t:(this.getter=O(t),this.getter||(this.getter=k)),this.value=this.lazy?void 0:this.get()};Ko.prototype.get=function(){M(this);var e,t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;ie(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(e),j(),this.cleanupDeps()}return e},Ko.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Ko.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Ko.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():It(this)},Ko.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||c(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){ie(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},Ko.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ko.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},Ko.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var qo={enumerable:!0,configurable:!0,get:k,set:k},Xo={lazy:!0},Zo=0;!function(e){e.prototype._init=function(e){var t=this;t._uid=Zo++,t._isVue=!0,e&&e._isComponent?Ht(t,e):t.$options=Q(Ut(t.constructor),e||{},t),t._renderProxy=t,t._self=t,mt(t),ut(t),at(t),xt(t,"beforeCreate"),Ce(t),Ot(t),xe(t),xt(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(zt),function(e){var t={};t.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=H,e.prototype.$delete=U,e.prototype.$watch=function(e,t,n){var r=this;if(l(t))return Bt(r,e,t,n);n=n||{},n.user=!0;var a=new Ko(r,e,t,n);if(n.immediate)try{t.call(r,a.value)}catch(e){ie(e,r,'callback for immediate watcher "'+a.expression+'"')}return function(){a.teardown()}}}(zt),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var a=0,i=e.length;a<i;a++)r.$on(e[a],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,a=e.length;r<a;r++)n.$off(e[r],t);return n}var i=n._events[e];if(!i)return n;if(!t)return n._events[e]=null,n;for(var o,s=i.length;s--;)if((o=i[s])===t||o.fn===t){i.splice(s,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?w(n):n;for(var r=w(arguments,1),a='event handler for "'+e+'"',i=0,o=n.length;i<o;i++)oe(n[i],t,r,t,a)}return t}}(zt),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,a=n._vnode,i=ht(n);n._vnode=e,n.$el=a?n.__patch__(a,e):n.__patch__(n.$el,e,t,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){xt(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||m(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),xt(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(zt),function(e){ze(e.prototype),e.prototype.$nextTick=function(e){return ue(e,this)},e.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t._parentVnode;r&&(e.$scopedSlots=Ae(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;var a;try{Do=e,a=n.call(e._renderProxy,e.$createElement)}catch(t){ie(t,e,"render"),a=e._vnode}finally{Do=null}return Array.isArray(a)&&1===a.length&&(a=a[0]),a instanceof uo||(a=po()),a.parent=r,a}}(zt);var Qo=[String,RegExp,Array],Yo={name:"keep-alive",abstract:!0,props:{include:Qo,exclude:Qo,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)en(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){Yt(e,function(e){return Qt(t,e)})}),this.$watch("exclude",function(t){Yt(e,function(e){return!Qt(t,e)})})},render:function(){var e=this.$slots.default,t=lt(e),n=t&&t.componentOptions;if(n){var r=Zt(n),a=this,i=a.include,o=a.exclude;if(i&&(!r||!Qt(i,r))||o&&r&&Qt(o,r))return t;var s=this,c=s.cache,l=s.keys,u=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[u]?(t.componentInstance=c[u].componentInstance,m(l,u),l.push(u)):(c[u]=t,l.push(u),this.max&&l.length>parseInt(this.max)&&en(c,l[0],l,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}},es={KeepAlive:Yo};!function(e){var t={};t.get=function(){return Fi},Object.defineProperty(e,"config",t),e.util={warn:oo,extend:x,mergeOptions:Q,defineReactive:B},e.set=H,e.delete=U,e.nextTick=ue,e.observable=function(e){return F(e),e},e.options=Object.create(null),Ni.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,x(e.options.components,es),Gt(e),Vt(e),Jt(e),Xt(e)}(zt),Object.defineProperty(zt.prototype,"$isServer",{get:ro}),Object.defineProperty(zt.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(zt,"FunctionalRenderContext",{value:Ge}),zt.version="2.6.10";var ts,ns,rs,as,is,os,ss,cs,ls,us,fs=h("style,class"),ds=h("input,textarea,option,select,progress"),ps=function(e,t,n){return"value"===n&&ds(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},vs=h("contenteditable,draggable,spellcheck"),hs=h("events,caret,typing,plaintext-only"),ms=function(e,t){return ws(t)||"false"===t?"false":"contenteditable"===e&&hs(t)?t:"true"},gs=h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),ys="http://www.w3.org/1999/xlink",_s=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},bs=function(e){return _s(e)?e.slice(6,e.length):""},ws=function(e){return null==e||!1===e},xs={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Cs=h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ks=h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),$s=function(e){return"pre"===e},Ss=function(e){return Cs(e)||ks(e)},As=Object.create(null),Is=h("text,number,password,search,email,tel,url"),Ts=Object.freeze({createElement:dn,createElementNS:pn,createTextNode:vn,createComment:hn,insertBefore:mn,removeChild:gn,appendChild:yn,parentNode:_n,nextSibling:bn,tagName:wn,setTextContent:xn,setStyleScope:Cn}),Os={create:function(e,t){kn(t)},update:function(e,t){e.data.ref!==t.data.ref&&(kn(e,!0),kn(t))},destroy:function(e){kn(e,!0)}},Es=new uo("",{},[]),Ms=["create","activate","update","remove","destroy"],js={create:In,update:In,destroy:function(e){In(e,Es)}},Ls=Object.create(null),Ps=[Os,js],Ds={create:jn,update:jn},Ns={create:Dn,update:Dn},Rs=/[\w).+\-_$\]]/,Fs="__r",Bs="__c",Hs=xo&&!(Zi&&Number(Zi[1])<=53),Us={create:hr,update:hr},Ws={create:mr,update:mr},zs=y(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),Gs=/^--/,Vs=/\s*!important$/,Js=function(e,t,n){if(Gs.test(t))e.style.setProperty(t,n);else if(Vs.test(n))e.style.setProperty(Mi(t),n.replace(Vs,""),"important");else{var r=qs(t);if(Array.isArray(n))for(var a=0,i=n.length;a<i;a++)e.style[r]=n[a];else e.style[r]=n}},Ks=["Webkit","Moz","ms"],qs=y(function(e){if(us=us||document.createElement("div").style,"filter"!==(e=Ti(e))&&e in us)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Ks.length;n++){var r=Ks[n]+t;if(r in us)return r}}),Xs={create:Cr,update:Cr},Zs=/\s+/,Qs=y(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Ys=Wi&&!Ki,ec="transition",tc="animation",nc="transition",rc="transitionend",ac="animation",ic="animationend";Ys&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(nc="WebkitTransition",rc="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(ac="WebkitAnimation",ic="webkitAnimationEnd"));var oc=Wi?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()},sc=/\b(transform|all)(,|$)/,cc=Wi?{create:Rr,activate:Rr,remove:function(e,t){!0!==e.data.show?Pr(e,t):t()}}:{},lc=[Ds,Ns,Us,Ws,Xs,cc],uc=lc.concat(Ps),fc=function(e){function t(e){return new uo(E.tagName(e).toLowerCase(),{},[],void 0,e)}function n(e,t){function n(){0==--n.listeners&&o(e)}return n.listeners=t,n}function o(e){var t=E.parentNode(e);a(t)&&E.removeChild(t,e)}function c(e,t,n,r,o,s,c){if(a(e.elm)&&a(s)&&(e=s[c]=P(e)),e.isRootInsert=!o,!l(e,t,n,r)){var u=e.data,f=e.children,v=e.tag;a(v)?(e.elm=e.ns?E.createElementNS(e.ns,v):E.createElement(v,e),g(e),p(e,f,t),a(u)&&m(e,t),d(n,e.elm,r)):i(e.isComment)?(e.elm=E.createComment(e.text),d(n,e.elm,r)):(e.elm=E.createTextNode(e.text),d(n,e.elm,r))}}function l(e,t,n,r){var o=e.data;if(a(o)){var s=a(e.componentInstance)&&o.keepAlive;if(a(o=o.hook)&&a(o=o.init)&&o(e,!1),a(e.componentInstance))return u(e,t),d(n,e.elm,r),i(s)&&f(e,t,n,r),!0}}function u(e,t){a(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,v(e)?(m(e,t),g(e)):(kn(e),t.push(e))}function f(e,t,n,r){for(var i,o=e;o.componentInstance;)if(o=o.componentInstance._vnode,a(i=o.data)&&a(i=i.transition)){for(i=0;i<T.activate.length;++i)T.activate[i](Es,o);t.push(o);break}d(n,e.elm,r)}function d(e,t,n){a(e)&&(a(n)?E.parentNode(n)===e&&E.insertBefore(e,t,n):E.appendChild(e,t))}function p(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)c(t[r],n,e.elm,null,!0,t,r);else s(e.text)&&E.appendChild(e.elm,E.createTextNode(String(e.text)))}function v(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return a(e.tag)}function m(e,t){for(var n=0;n<T.create.length;++n)T.create[n](Es,e);A=e.data.hook,a(A)&&(a(A.create)&&A.create(Es,e),a(A.insert)&&t.push(e))}function g(e){var t;if(a(t=e.fnScopeId))E.setStyleScope(e.elm,t);else for(var n=e;n;)a(t=n.context)&&a(t=t.$options._scopeId)&&E.setStyleScope(e.elm,t),n=n.parent;a(t=No)&&t!==e.context&&t!==e.fnContext&&a(t=t.$options._scopeId)&&E.setStyleScope(e.elm,t)}function y(e,t,n,r,a,i){for(;r<=a;++r)c(n[r],i,e,t,!1,n,r)}function _(e){var t,n,r=e.data;if(a(r))for(a(t=r.hook)&&a(t=t.destroy)&&t(e),t=0;t<T.destroy.length;++t)T.destroy[t](e);if(a(t=e.children))for(n=0;n<e.children.length;++n)_(e.children[n])}function b(e,t,n,r){for(;n<=r;++n){var i=t[n];a(i)&&(a(i.tag)?(w(i),_(i)):o(i.elm))}}function w(e,t){if(a(t)||a(e.data)){var r,i=T.remove.length+1;for(a(t)?t.listeners+=i:t=n(e.elm,i),a(r=e.componentInstance)&&a(r=r._vnode)&&a(r.data)&&w(r,t),r=0;r<T.remove.length;++r)T.remove[r](e,t);a(r=e.data.hook)&&a(r=r.remove)?r(e,t):t()}else o(e.elm)}function x(e,t,n,i,o){for(var s,l,u,f,d=0,p=0,v=t.length-1,h=t[0],m=t[v],g=n.length-1,_=n[0],w=n[g],x=!o;d<=v&&p<=g;)r(h)?h=t[++d]:r(m)?m=t[--v]:$n(h,_)?(k(h,_,i,n,p),h=t[++d],_=n[++p]):$n(m,w)?(k(m,w,i,n,g),m=t[--v],w=n[--g]):$n(h,w)?(k(h,w,i,n,g),x&&E.insertBefore(e,h.elm,E.nextSibling(m.elm)),h=t[++d],w=n[--g]):$n(m,_)?(k(m,_,i,n,p),x&&E.insertBefore(e,m.elm,h.elm),m=t[--v],_=n[++p]):(r(s)&&(s=An(t,d,v)),l=a(_.key)?s[_.key]:C(_,t,d,v),r(l)?c(_,i,e,h.elm,!1,n,p):(u=t[l],$n(u,_)?(k(u,_,i,n,p),t[l]=void 0,x&&E.insertBefore(e,u.elm,h.elm)):c(_,i,e,h.elm,!1,n,p)),_=n[++p]);d>v?(f=r(n[g+1])?null:n[g+1].elm,y(e,f,n,p,g,i)):p>g&&b(e,t,d,v)}function C(e,t,n,r){for(var i=n;i<r;i++){var o=t[i];if(a(o)&&$n(e,o))return i}}function k(e,t,n,o,s,c){if(e!==t){a(t.elm)&&a(o)&&(t=o[s]=P(t));var l=t.elm=e.elm;if(i(e.isAsyncPlaceholder))return void(a(t.asyncFactory.resolved)?S(e.elm,t,n):t.isAsyncPlaceholder=!0);if(i(t.isStatic)&&i(e.isStatic)&&t.key===e.key&&(i(t.isCloned)||i(t.isOnce)))return void(t.componentInstance=e.componentInstance);var u,f=t.data;a(f)&&a(u=f.hook)&&a(u=u.prepatch)&&u(e,t);var d=e.children,p=t.children;if(a(f)&&v(t)){for(u=0;u<T.update.length;++u)T.update[u](e,t);a(u=f.hook)&&a(u=u.update)&&u(e,t)}r(t.text)?a(d)&&a(p)?d!==p&&x(l,d,p,n,c):a(p)?(a(e.text)&&E.setTextContent(l,""),y(l,null,p,0,p.length-1,n)):a(d)?b(l,d,0,d.length-1):a(e.text)&&E.setTextContent(l,""):e.text!==t.text&&E.setTextContent(l,t.text),a(f)&&a(u=f.hook)&&a(u=u.postpatch)&&u(e,t)}}function $(e,t,n){if(i(n)&&a(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}function S(e,t,n,r){var o,s=t.tag,c=t.data,l=t.children;if(r=r||c&&c.pre,t.elm=e,i(t.isComment)&&a(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(a(c)&&(a(o=c.hook)&&a(o=o.init)&&o(t,!0),a(o=t.componentInstance)))return u(t,n),!0;if(a(s)){if(a(l))if(e.hasChildNodes())if(a(o=c)&&a(o=o.domProps)&&a(o=o.innerHTML)){if(o!==e.innerHTML)return!1}else{for(var f=!0,d=e.firstChild,v=0;v<l.length;v++){if(!d||!S(d,l[v],n,r)){f=!1;break}d=d.nextSibling}if(!f||d)return!1}else p(t,l,n);if(a(c)){var h=!1;for(var g in c)if(!M(g)){h=!0,m(t,n);break}!h&&c.class&&fe(c.class)}}else e.data!==t.text&&(e.data=t.text);return!0}var A,I,T={},O=e.modules,E=e.nodeOps;for(A=0;A<Ms.length;++A)for(T[Ms[A]]=[],I=0;I<O.length;++I)a(O[I][Ms[A]])&&T[Ms[A]].push(O[I][Ms[A]]);var M=h("attrs,class,staticClass,staticStyle,key");return function(e,n,o,s){if(r(n))return void(a(e)&&_(e));var l=!1,u=[];if(r(e))l=!0,c(n,u);else{var f=a(e.nodeType);if(!f&&$n(e,n))k(e,n,u,null,null,s);else{if(f){if(1===e.nodeType&&e.hasAttribute(Di)&&(e.removeAttribute(Di),o=!0),i(o)&&S(e,n,u))return $(n,u,!0),e;e=t(e)}var d=e.elm,p=E.parentNode(d);if(c(n,u,d._leaveCb?null:p,E.nextSibling(d)),a(n.parent))for(var h=n.parent,m=v(n);h;){for(var g=0;g<T.destroy.length;++g)T.destroy[g](h);if(h.elm=n.elm,m){for(var y=0;y<T.create.length;++y)T.create[y](Es,h);var w=h.data.hook.insert;if(w.merged)for(var x=1;x<w.fns.length;x++)w.fns[x]()}else kn(h);h=h.parent}a(p)?b(p,[e],0,0):a(e.tag)&&_(e)}}return $(n,u,l),n.elm}}({nodeOps:Ts,modules:uc});Ki&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Gr(e,"input")});var dc={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?he(n,"postpatch",function(){dc.componentUpdated(e,t,n)}):Fr(e,t,n.context),e._vOptions=[].map.call(e.options,Ur)):("textarea"===n.tag||Is(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Wr),e.addEventListener("compositionend",zr),e.addEventListener("change",zr),Ki&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Fr(e,t,n.context);var r=e._vOptions,a=e._vOptions=[].map.call(e.options,Ur);if(a.some(function(e,t){return!$(e,r[t])})){(e.multiple?t.value.some(function(e){return Hr(e,a)}):t.value!==t.oldValue&&Hr(t.value,a))&&Gr(e,"change")}}}},pc={bind:function(e,t,n){var r=t.value;n=Vr(n);var a=n.data&&n.data.transition,i=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&a?(n.data.show=!0,Lr(n,function(){e.style.display=i})):e.style.display=r?i:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&(n=Vr(n),n.data&&n.data.transition?(n.data.show=!0,r?Lr(n,function(){e.style.display=e.__vOriginalDisplay}):Pr(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,a){a||(e.style.display=e.__vOriginalDisplay)}},vc={model:dc,show:pc},hc={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},mc=function(e){return e.tag||ct(e)},gc=function(e){return"show"===e.name},yc={name:"transition",props:hc,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(mc),n.length)){var r=this.mode,a=n[0];if(Xr(this.$vnode))return a;var i=Jr(a);if(!i)return a;if(this._leaving)return qr(e,a);var o="__transition-"+this._uid+"-";i.key=null==i.key?i.isComment?o+"comment":o+i.tag:s(i.key)?0===String(i.key).indexOf(o)?i.key:o+i.key:i.key;var c=(i.data||(i.data={})).transition=Kr(this),l=this._vnode,u=Jr(l);if(i.data.directives&&i.data.directives.some(gc)&&(i.data.show=!0),u&&u.data&&!Zr(i,u)&&!ct(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var f=u.data.transition=x({},c);if("out-in"===r)return this._leaving=!0,he(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),qr(e,a);if("in-out"===r){if(ct(i))return l;var d,p=function(){d()};he(c,"afterEnter",p),he(c,"enterCancelled",p),he(f,"delayLeave",function(e){d=e})}}return a}}},_c=x({tag:String,moveClass:String},hc);delete _c.mode;var bc={props:_c,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var a=ht(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,a(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,a=this.$slots.default||[],i=this.children=[],o=Kr(this),s=0;s<a.length;s++){var c=a[s];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))i.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){for(var l=[],u=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d)}this.kept=e(t,null,l),this.removed=u}return e(t,null,i)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Qr),e.forEach(Yr),e.forEach(ea),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Ir(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(rc,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(rc,e),n._moveCb=null,Tr(n,t))})}}))},methods:{hasMove:function(e,t){if(!Ys)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){$r(n,e)}),kr(n,t),n.style.display="none",this.$el.appendChild(n);var r=Er(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}},wc={Transition:yc,TransitionGroup:bc};zt.config.mustUseProp=ps,zt.config.isReservedTag=Ss,zt.config.isReservedAttr=fs,zt.config.getTagNamespace=ln,zt.config.isUnknownElement=un,x(zt.options.directives,vc),x(zt.options.components,wc),zt.prototype.__patch__=Wi?fc:k,zt.prototype.$mount=function(e,t){return e=e&&Wi?fn(e):void 0,gt(this,e,t)},Wi&&setTimeout(function(){Fi.devtools&&ao&&ao.emit("init",zt)},0);var xc,Cc,kc,$c,Sc,Ac,Ic,Tc,Oc,Ec,Mc,jc,Lc,Pc=/\{\{((?:.|\r?\n)+?)\}\}/g,Dc=/[-.*+?^${}()|[\]\/\\]/g,Nc=y(function(e){var t=e[0].replace(Dc,"\\$&"),n=e[1].replace(Dc,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),Rc={staticKeys:["staticClass"],transformNode:na,genData:ra},Fc={staticKeys:["staticStyle"],transformNode:aa,genData:ia},Bc={decode:function(e){return xc=xc||document.createElement("div"),xc.innerHTML=e,xc.textContent}},Hc=h("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Uc=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Wc=h("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),zc=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Gc=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Vc="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+Bi.source+"]*",Jc="((?:"+Vc+"\\:)?"+Vc+")",Kc=new RegExp("^<"+Jc),qc=/^\s*(\/?)>/,Xc=new RegExp("^<\\/"+Jc+"[^>]*>"),Zc=/^<!DOCTYPE [^>]+>/i,Qc=/^<!\--/,Yc=/^<!\[/,el=h("script,style,textarea",!0),tl={},nl={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},rl=/&(?:lt|gt|quot|amp|#39);/g,al=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,il=h("pre,textarea",!0),ol=function(e,t){return e&&il(e)&&"\n"===t[0]},sl=/^@|^v-on:/,cl=/^v-|^@|^:/,ll=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,ul=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,fl=/^\(|\)$/g,dl=/^\[.*\]$/,pl=/:(.*)$/,vl=/^:|^\.|^v-bind:/,hl=/\.[^.\]]+(?=[^\]]*$)/g,ml=/^v-slot(:|$)|^#/,gl=/[\r\n]/,yl=/\s+/g,_l=y(Bc.decode),bl="_empty_",wl=/^xmlns:NS\d+/,xl=/^NS\d+:/,Cl={preTransformNode:ja},kl=[Rc,Fc,Cl],$l={model:or,text:Pa,html:Da},Sl={expectHTML:!0,modules:kl,directives:$l,isPreTag:$s,isUnaryTag:Hc,mustUseProp:ps,canBeLeftOpenTag:Uc,isReservedTag:Ss,getTagNamespace:ln,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(kl)},Al=y(Ra),Il=/^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/,Tl=/\([^)]*?\);*$/,Ol=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,El={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Ml={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},jl=function(e){return"if("+e+")return null;"},Ll={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:jl("$event.target !== $event.currentTarget"),ctrl:jl("!$event.ctrlKey"),shift:jl("!$event.shiftKey"),alt:jl("!$event.altKey"),meta:jl("!$event.metaKey"),left:jl("'button' in $event && $event.button !== 0"),middle:jl("'button' in $event && $event.button !== 1"),right:jl("'button' in $event && $event.button !== 2")},Pl={on:Ja,bind:Ka,cloak:k},Dl=function(e){this.options=e,this.warn=e.warn||Fn,this.transforms=Bn(e.modules,"transformCode"),this.dataGenFns=Bn(e.modules,"genData"),this.directives=x(x({},Pl),e.directives);var t=e.isReservedTag||Li;this.maybeComponent=function(e){return!!e.component||!t(e.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1},Nl=(new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),function(e){return function(t){function n(n,r){var a=Object.create(t),i=[],o=[],s=function(e,t,n){(n?o:i).push(e)};if(r){r.modules&&(a.modules=(t.modules||[]).concat(r.modules)),r.directives&&(a.directives=x(Object.create(t.directives||null),r.directives));for(var c in r)"modules"!==c&&"directives"!==c&&(a[c]=r[c])}a.warn=s;var l=e(n.trim(),a);return l.errors=i,l.tips=o,l}return{compile:n,compileToFunctions:bi(n)}}}(function(e,t){var n=la(e.trim(),t);!1!==t.optimize&&Na(n,t);var r=qa(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}})),Rl=Nl(Sl),Fl=(Rl.compile,Rl.compileToFunctions),Bl=!!Wi&&wi(!1),Hl=!!Wi&&wi(!0),Ul=y(function(e){var t=fn(e);return t&&t.innerHTML}),Wl=zt.prototype.$mount;zt.prototype.$mount=function(e,t){if((e=e&&fn(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Ul(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=xi(e));if(r){var a=Fl(r,{outputSourceRange:!1,shouldDecodeNewlines:Bl,shouldDecodeNewlinesForHref:Hl,delimiters:n.delimiters,comments:n.comments},this),i=a.render,o=a.staticRenderFns;n.render=i,n.staticRenderFns=o}}return Wl.call(this,e,t)},zt.compile=Fl,t.a=zt}).call(t,n(3),n(21).setImmediate)},function(e,t,n){(function(e){function r(e,t){this._id=e,this._clearFn=t}var a=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,a,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,a,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(a,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(22),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(t,n(3))},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return l[c]=r,s(c),c++}function a(e){delete l[e]}function i(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function o(e){if(u)setTimeout(o,0,e);else{var t=l[e];if(t){u=!0;try{i(t)}finally{a(e),u=!1}}}}if(!e.setImmediate){var s,c=1,l={},u=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){s=function(e){t.nextTick(function(){o(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&o(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),s=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){o(e.data)},s=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;s=function(t){var n=f.createElement("script");n.onreadystatechange=function(){o(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){s=function(e){setTimeout(o,0,e)}}(),d.setImmediate=r,d.clearImmediate=a}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(3),n(23))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function o(){h&&p&&(h=!1,p.length?v=p.concat(v):m=-1,v.length&&s())}function s(){if(!h){var e=a(o);h=!0;for(var t=v.length;t;){for(p=v,v=[];++m<t;)p&&p[m].run();m=-1,t=v.length}p=null,h=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var u,f,d=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(e){u=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,v=[],h=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.push(new c(e,t)),1!==v.length||h||a(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){n(25)}var a=n(4),i=n(72),o=n(2),s=r,c=o(a.a,i.a,!1,s,"data-v-096cab50",null);t.a=c.exports},function(e,t,n){var r=n(26);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("023ccfea",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var i=t[a],o=i[0],s=i[1],c=i[2],l=i[3],u={id:e+":"+a,css:s,media:c,sourceMap:l};r[o]?r[o].parts.push(u):n.push(r[o]={id:o,parts:[u]})}return n}},function(e,t,n){"use strict";function r(e){n(29)}var a=n(5),i=n(31),o=n(2),s=r,c=o(a.a,i.a,!1,s,"data-v-17698950",null);t.a=c.exports},function(e,t,n){var r=n(30);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("6e7f9b34",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"#navButton[data-v-17698950]{height:40px;width:40px;position:fixed;top:25px;left:10px;padding:5px;background-color:var(--info);border-radius:7px;box-shadow:4px 4px 8px 4px rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);z-index:100}#navButton[data-v-17698950]:hover{background-color:var(--primary)}#navMenu[data-v-17698950]{position:fixed;top:75px;left:10px;box-shadow:4px 4px 8px 4px rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);z-index:100}#navList[data-v-17698950]{padding:0;list-style-type:none;margin:0;z-index:100}.navLi[data-v-17698950],.navLink[data-v-17698950]{margin:0;background-color:var(--info)}.navLink[data-v-17698950]{text-align:left;color:var(--nav_font_main);list-style-type:none;padding:10px;border:1px solid var(--primary);text-decoration:none;width:100%;display:block}.navLink[data-v-17698950]:hover{background-color:var(--nav_font_sec);text-decoration:none}@media only screen and (max-width:600px){#navButton[data-v-17698950]{height:30px;width:30px;top:5px;left:5px}#navMenu[data-v-17698950]{top:60px;left:5px}}",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{attrs:{id:"navButton",src:n(32)},on:{click:function(t){e.navShow=!e.navShow}}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.navShow,expression:"navShow"}],attrs:{id:"navMenu"}},[r("ul",{attrs:{id:"navList"},on:{click:function(t){e.navShow=!e.navShow}}},[e._l(e.childNavData,function(t,n){return r("li",{key:n,staticClass:"navLi"},[r("a",{staticClass:"navLink",attrs:{href:"#"+t.link}},[e._v(e._s(t.name))])])}),e._v(" "),e._m(0),e._v(" "),e._m(1)],2)])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"navLi"},[r("a",{staticClass:"navLink",attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://www.github.com/torothin"}},[r("img",{attrs:{src:n(33),height:"22px"}})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"navLi"},[r("a",{staticClass:"navLink",attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/brad-duvall-65949250"}},[r("img",{attrs:{src:n(34),height:"17px"}})])])}],i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){e.exports=n.p+"menu_icon_white.png?25f0989cb2b987916f404b230e97901d"},function(e,t,n){e.exports=n.p+"GitHub_Logo_White.png?064ace4777ac86d7627f455f36975452"},function(e,t,n){e.exports=n.p+"Logo-2CRev-28px-R.png?25b9b26ab5ff2ffce05cf6f1a4ecea91"},function(e,t,n){"use strict";function r(e){n(36)}var a=n(7),i=n(40),o=n(2),s=r,c=o(a.a,i.a,!1,s,"data-v-1ece3f89",null);t.a=c.exports},function(e,t,n){var r=n(37);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("8c9997ea",r,!0,{})},function(e,t,n){var r=n(38);t=e.exports=n(0)(!1),t.push([e.i,"#frontPageContainer[data-v-1ece3f89]{height:100vh}#frontPage[data-v-1ece3f89]{top:0;height:100vh;width:100%;background-color:#000;position:absolute}#frontPageImage[data-v-1ece3f89]{position:absolute;width:100%;background-image:url("+r(n(39))+");opacity:.6;height:100%;background-size:120%;background-repeat:no-repeat;background-position:50%}#frontPageText[data-v-1ece3f89]{top:15px}#bottomFrontPageText[data-v-1ece3f89],#frontPageText[data-v-1ece3f89]{position:absolute;text-align:center;height:100px;width:100%;color:#fff;font-size:25px}#bottomFrontPageText[data-v-1ece3f89]{bottom:0}@media (orientation:portrait){#frontPageImage[data-v-1ece3f89]{background-image:url("+r(n(6))+");background-size:150%}}@media only screen and (max-width:770px){#frontPageImage[data-v-1ece3f89]{background-image:url("+r(n(6))+");background-size:180%}}",""])},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t,n){e.exports=n.p+"IMG_2417.jpg?e1639f5d17e208ff800599c022c3b6c7"},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"frontPageContainer"}},[n("div",{attrs:{id:"frontPage"}},[n("div",{attrs:{id:"frontPageImage"}}),e._v(" "),n("div",{attrs:{id:"frontPageText"}},[e._v("\n       \n       Lost in the woods . . .\n\n     ")]),e._v(" "),n("div",{attrs:{id:"bottomFrontPageText"}},[e._v("\n\n         Way out ...\n         "),n("div",{attrs:{id:"bottomFrontPageImage"}},[n("img",{staticStyle:{height:"60px",width:"100px"},attrs:{src:"src/assets/images/downArrowWhite.png"}})])])])])}],i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){n(42)}var a=n(8),i=n(44),o=n(2),s=r,c=o(a.a,i.a,!1,s,"data-v-78b74e38",null);t.a=c.exports},function(e,t,n){var r=n(43);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("20e7f5ad",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"componentCont",attrs:{id:"introPage"}},[r("div",{staticClass:"jumbotron"},[r("h1",[e._v("Heyo, my name is Brad Duvall")]),e._v(" "),r("p"),e._v(" "),r("hr",{staticClass:"my-4"}),e._v(" "),r("div",{staticClass:"rightImageContainer"},[r("img",{staticClass:"imageRight",attrs:{src:n(9),alt:"Me!!"}})]),e._v(" "),r("p",{staticClass:"lead"},[e._v("I am looking for Software Development work.")]),e._v(" "),r("p",[e._v("Thanks to my wife, I had the opportunity to make a career change from being a Materials and Process Engineer to a Software Developer. I have spent the last two years learning programming fundamentals and software development.  I have been enjoying the experience and I look forward to starting my new career as soon as possible.")]),e._v(" "),r("div",{staticClass:"bottomImageContainer"},[r("img",{staticClass:"imageRight",attrs:{src:n(9),alt:"Me!!"}})])])])}],i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){n(46)}var a=n(10),i=n(48),o=n(2),s=r,c=o(a.a,i.a,!1,s,"data-v-47127c77",null);t.a=c.exports},function(e,t,n){var r=n(47);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("a11e199e",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"componentCont"},[r("div",{staticClass:"jumbotron"},[r("h1",[e._v("Work History")]),e._v(" "),r("hr",{staticClass:"my-4"}),e._v(" "),r("div",{staticClass:"rightImageContainer"},[r("img",{staticClass:"imageRight",attrs:{src:n(49)}})]),e._v(" "),r("p",{staticClass:"lead"},[e._v("B/E Aerospace (2015-2016)")]),e._v(" "),r("p",[e._v("I joined B/E Aerospace - ALCI as a Materials and Process Engineer. I was part of Materials team which maintained process specifications for manufacturing, testing, and fire properties. I wrote several test plans for new polymers, polymer suppliers and manufacture’s. Every test plan and specification was thoroughly checked by our customers (Boeing) to ensure quality of the product.\n\n         ")]),e._v(" "),r("p",[e._v("I moved to the new Sustain team where I helped to ensure that post production repairs were performed to standards on products delivered to Boeing's customers. While in the sustain team I performed routine tasks such as approving designs to ensure they meet process specifications, checking repair methods and processes, and checking designs to ensure they meet FAA fire safety requirements.\n\n         ")]),e._v(" "),r("p"),e._v(" "),r("p",{staticClass:"lead"},[e._v("Exotic Metals (2011-2015)")]),e._v(" "),r("p",[e._v("While working at Exotic Metals forming company, I was part of a brand new R&D group as a Research Engineer, charged to bring the company’s manufacturing capability up to date and on into the future. Projects such as 3D metal printing, testing new Titanium and Nickel Alloys, and new forming technologies and manufacturing technologies are just examples of projects I was involved in while in the R&D team.\n\n         ")]),e._v(" "),r("p",[e._v("Projects I directly participated in include Hybrid plastic/titanium structures, High Temperature Forming, forming measuring techniques, and GTAW improvement studies. While in the R&D team I developed engineering skills such as Project Management, specification writing, drawing interpretation, and 3D modeling. I became an expert in Titanium and Nickel Alloys, being the first point of contact for suppliers wanting to introduce a new alloy.\n\n         ")]),e._v(" "),r("p",{staticClass:"lead"},[e._v("Modumetal, Inc. (2010-2011)")]),e._v(" "),r("p",[e._v("As an intern at Modumetal, I used the research skills I developed while at college. I worked for a Project Engineer helping his team to generate and analyze data through mechanical testing of iron nickel nano-laminates.  We also tested for corrosion resistance using salt spray tanks and measured deposition coverage and thickness. One of my projects was to develop a guide for placement of electrodes in a deposition tank to obtain uniform thickness laminate deposits. I modeled various electrode configurations using Comsol software creating visualization of current paths through the electrolytic baths used in the lamination process.\n\n         ")]),e._v(" "),r("p",{staticClass:"lead"},[e._v("US Navy (2000-2006)")]),e._v(" "),r("p",[e._v('I enlisted in the US Navy in 2000 as a Nuclear Mechanic, working in the engine room for a nuclear aircraft carrier. Every "nuke" (Nuclear Technician) went through a rigorous training program where we learned Thermodynamics, Nuclear Physics and Marine Engineering. I was then sent to the USS Abraham Lincoln (CVN-72), serving a sea tour for four and a half years. The Abraham Lincoln was part of Operation Enduring Freedom, Operation Iraqi Freedom and the 2004 Indian Ocean earthquake relief effort in Sumatra. I completed my six year enlistment in 2006 with an Honorable Discharge.\n           \n         ')])])])}],i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){e.exports=n.p+"jobicon.png?61810d0dc4e4c7abb3635f31852c9c6f"},function(e,t,n){"use strict";function r(e){n(51)}var a=n(11),i=n(53),o=n(2),s=r,c=o(a.a,i.a,!1,s,"data-v-bc8af082",null);t.a=c.exports},function(e,t,n){var r=n(52);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("09afe70f",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"#classList[data-v-bc8af082]{background-color:var(--success);padding:10px;margin-top:10px;box-shadow:4px 4px 8px 4px rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);text-align:left;width:100%}.classUL[data-v-bc8af082]{color:var(--info)}#classListBtn[data-v-bc8af082]{background-color:var(--info);color:var(--success)}",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"componentCont"},[n("div",{staticClass:"jumbotron"},[n("h1",[e._v("My Education")]),e._v(" "),n("hr",{staticClass:"my-4"}),e._v(" "),n("p",{staticClass:"lead"},[e._v("UW Bothell (2017-2018)")]),e._v(" "),e._m(0),e._v(" "),n("p",[e._v("Prior to attending UW Bothell, I began my programming journey by taking online courses.  I took courses on Udemy, EDX.org and Coursera.  These courses helped prepare me for entrance into the Graduate Certificate program.\n        ")]),e._v(" "),n("button",{staticClass:"btn",attrs:{id:"classListBtn"},on:{click:e.toggleClasslist}},[e._v("Class List")]),e._v(" "),e._m(1),e._v(" "),n("p"),e._v(" "),n("p",{staticClass:"lead"},[e._v("UW Seattle (2009-2011)")]),e._v(" "),e._m(2),e._v(" "),n("p",{staticClass:"lead"},[e._v("Northgate CC (2006-2009)")]),e._v(" "),e._m(3)])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("I obtained a "),n("b",[e._v("Graduate Certificate in Software Design & Development")]),e._v(", in 2018, where I learned software development in C++. During my time in this program I learned about object-oriented programming, data structures and algorithms. I also learn about various project management styles such as Waterfall, Kanban, and Agile software development.  While in this program I completed 12 projects on-time and per specification.  \n        ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"div-shadowed",staticStyle:{display:"none"},attrs:{id:"classList"}},[n("p"),e._v(" "),n("ul",{staticClass:"classUL"},[e._v(" Grad Cert Courses\n            "),n("li",[e._v("CSS 501 Data Structures and Object-Oriented Programming I")]),e._v(" "),n("li",[e._v("CSS 502 Data Structures and Object-Oriented Programming II")]),e._v(" "),n("li",[e._v("CSS 503 Systems Programming")]),e._v(" "),n("li",[e._v("CSS 506 Software Development Processes")]),e._v(" "),n("li",[e._v("CSS 507 Software Modeling Techniques")]),e._v(" "),n("li",[e._v("CSS 508 Software Testing and Quality")])]),e._v(" "),n("ul",{staticClass:"classUL"},[e._v(" Online Courses\n            "),n("li",[e._v("Vue JS Tutorial")]),e._v(" "),n("li",[e._v("The Complete JavaScript Course 2018: Build Real Projects")]),e._v(" "),n("li",[e._v("HKUSTx COMP102.2x Introduction to Java Programming - Part 2")]),e._v(" "),n("li",[e._v("HKUSTx COMP102.1x Introduction to Java Programming - Part 1")]),e._v(" "),n("li",[e._v("MITx 6.00.1x Introduction to Computer Science and Programming Using Python")]),e._v(" "),n("li",[e._v("Solve 100 Python Exercises to Boost your Python Skills")]),e._v(" "),n("li",[e._v("The Python Mega Course: Build 10 Real World Applications")])]),e._v(" "),n("p")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("After transferring to UW Seattle, I earned a "),n("b",[e._v("BS in Material Science and Engineering")]),e._v(" in 2011. While at UW, I learned about metal alloys, polymers and composite systems. I took courses in material testing to gain insights into the strengths and weakness of various materials and their applications. I also learned how to research academic topics and and write research papers. My undergrad research capstone was the development of a Copper Nickel Electrodeposition method using nano-laminate technology. The method was used by a MSE Graduate to study nano-laminate material properties.\n        ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("After leaving the Navy, I started my education at North Seattle Community College. I earned an "),n("b",[e._v("Associate of Science")]),e._v(", in 2009, as part of the transfer requirements. My class load included Physics, Chemistry, Calculus and Thermodynamics.")])}],i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){n(55)}var a=n(12),i=n(57),o=n(2),s=r,c=o(a.a,i.a,!1,s,"data-v-f6e12982",null);t.a=c.exports},function(e,t,n){var r=n(56);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("7717909e",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"ul[data-v-f6e12982]{display:flex;flex-wrap:wrap;list-style-type:none;padding:0}li[data-v-f6e12982]{max-width:300px;flex-grow:1;flex-basis:300px;padding:5px;margin:20px auto}.modal[data-v-f6e12982]{position:fixed;top:0;right:0;bottom:0;left:0;display:none;z-index:1050;overflow:hidden;outline:0;height:100%}.modal-open .modal[data-v-f6e12982]{overflow-x:hidden;overflow-y:scroll}.modal-content[data-v-f6e12982]{width:60%;margin:auto;pointer-events:auto;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:10px;outline:0}.modal-body[data-v-f6e12982]{padding:1rem;max-height:calc(100vh - 50px);overflow-y:auto}.modal-header[data-v-f6e12982]{border-bottom:0 solid #e9ecef}.iframe-container[data-v-f6e12982]{overflow:hidden;padding-top:56.25%;position:relative;width:90%;margin:10px auto;box-shadow:4px 4px 8px 4px rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.iframe-container iframe[data-v-f6e12982]{border:0;height:100%;left:0;position:absolute;top:0;width:100%}.iframe-container-4x3[data-v-f6e12982]{padding-top:75%}.card[data-v-f6e12982]{background-color:var(--info);box-shadow:4px 4px 8px 4px rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.card-footer[data-v-f6e12982]{color:var(--nav_font_main);text-align:center}",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"componentCont"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("div",{attrs:{id:"imageBlock"}},[n("ul",e._l(e.images,function(t,r){return n("li",{key:r,on:{click:function(t){return e.toggleModal(r)}}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("img",{staticClass:"card-img",attrs:{id:r,src:t.location}})]),e._v(" "),n("div",{staticClass:"card-footer"},[e._v(e._s(t.footer))])])])}),0)]),e._v(" "),n("div",{staticClass:"modal",style:e.modalDisplay,attrs:{id:"myModal"}},[n("div",{staticClass:"modal-backdrop"},[n("div",{staticClass:"modal-header"},[n("span",{staticClass:"close",on:{click:function(t){return e.toggleModal(0)}}},[e._v("×")])]),e._v(" "),n("div",{staticClass:"modal-body"},[n("img",{staticClass:"modal-content",attrs:{src:e.currentImageSrc}})])])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"jumbotron"},[r("h1",[e._v("Hobbies")]),e._v(" "),r("hr",{staticClass:"my-4"}),e._v(" "),r("p",{staticClass:"lead"},[e._v("Martial Arts")]),e._v(" "),r("p",[e._v("All of my life I have wanted to do some form of martial art.  Around 2014 I finally decided to give it a try. My wife and I decided to try a self defense class that was designed around using Wing Chun (see IP Man) as a base. Three years later and I get my first Black Belt equivalent.")]),e._v(" "),r("p",[e._v("While learning Wing Chun I was introduced to Muay Thai (Thai Boxing) and fell in love. The sport provided a wonderful workout and was very challenging. I moved to Alpha Martial Arts where I learn from Kru Alberto Ramirez at Chaisai Muay Thai where I currently hold a green sash. I also study a bit of Escrima and would like to try Kenjitsu and BJJ in the future.")]),e._v(" "),r("p",{staticClass:"lead"},[e._v("Hiking and Camping")]),e._v(" "),r("p",[e._v("A summer hobby that my wife and I enjoy is to go hiking. We regularly head out toward Darrington, WA to explore the many hiking trails. Our most difficult hike to date was the hike to Camp Muir on Mt Rainier.  A few buddies and I regularly go camping in the off seasons around Roslyn and Lake Cle Elum.")]),e._v(" "),r("p",{staticClass:"lead"},[e._v("Gaming")]),e._v(" "),r("p",[e._v("I spend some of my free time playing games on my PC. I enjoy MMORPGs and RPGs such as World of Warcraft and Skyrim. My wife and I enjoy the challenge of end game content in groups several nights a week.")]),e._v(" "),r("div",{staticClass:"rightImageContainer"},[r("img",{staticClass:"imageRight",attrs:{src:n(13)}})]),e._v(" "),r("p",{staticClass:"lead"},[e._v("Doge")]),e._v(" "),r("p",[e._v("Our dog, Major, is a well behaved, shy, Boxer mix. We rescued her from PAWS in Lynnwood, WA in December of 2017. Major has been a challenge because of her shyness and skittishness. We have managed to get her out of her shell and regularly take her to a dog park where she meets new dogs and people. Originally, we believed she was a Black Mouth Cur but the DNA test showed her as mainly a boxer with a little bit of Australian Cattle Dog, Border Collie and Shetland Shepherd.")]),e._v(" "),r("div",{staticClass:"bottomImageContainer"},[r("img",{staticClass:"imageRight",attrs:{src:n(13)}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"iframe-container"},[n("iframe",{attrs:{src:"https://www.youtube.com/embed/LzL3onF5lXw",allowfullscreen:""}})])}],i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){n(59)}var a=n(14),i=n(61),o=n(2),s=r,c=o(a.a,i.a,!1,s,"data-v-d5b367ba",null);t.a=c.exports},function(e,t,n){var r=n(60);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("43c4ef12",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"componentCont",attrs:{id:"boxingPageContainer"}},[r("div",{staticClass:"jumbotron"},[r("h1",[e._v("Boxing App")]),e._v(" "),r("p"),e._v(" "),r("hr",{staticClass:"my-4"}),e._v(" "),r("div",{staticClass:"rightImageContainer"},[r("img",{staticClass:"imageRight",attrs:{src:n(15)}})]),e._v(" "),r("p",[e._v("An idea came to me in my Muay Thai class one day.  What if I had an app that called out random combinations for me on a timer.  I thought to myself, “I can build that”.  Initially, the app was going to be for mobile devices.  I had tinkered around with swift in the past, so I started to think iOS first then maybe android.  I realized that I needed to be sure that I wasn’t the only one that might use something like this because jumping straight to mobile might be a bigger leap than necessary.  I looked at JavaScript and realized I could build it using JavaScript.")]),e._v(" "),r("p",[e._v("I implementing some feedback I received from classmates and the head instructor for my class.  The experience was very useful in learning front end development because every browser handles the web app a little differently.  I plan to implement several features and then rebuild it for mobile devices.")]),e._v(" "),r("div",{staticClass:"bottomImageContainer"},[r("img",{staticClass:"imageRight",attrs:{src:n(15)}})]),e._v(" "),r("div",{staticClass:"linkCont"},[r("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://torothin.github.io/torothin.boxing.github.io/"}},[e._v("Boxing App Link (opens in a new tab)")])])])])}],i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){n(63)}var a=n(16),i=n(65),o=n(2),s=r,c=o(a.a,i.a,!1,s,"data-v-592c9a59",null);t.a=c.exports},function(e,t,n){var r=n(64);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("3fd101e2",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"componentCont"},[r("div",{staticClass:"jumbotron"},[r("h1",[e._v("Brownie Points App")]),e._v(" "),r("p"),e._v(" "),r("hr",{staticClass:"my-4"}),e._v(" "),r("div",{staticClass:"rightImageContainer"},[r("img",{staticClass:"imageRight",attrs:{src:n(17)}})]),e._v(" "),r("p",[e._v("One thing I have always struggled with is to complete all the goals I've had at any point and to complete them regularly.  I seen and used several apps that take advantage of the psychological affects of gaining levels, experience and rewards for completing things like walking 10,000 steps or eating under a specified calorie count, etc.  I thought to myself, I could do something like this for completing any goals I want to create.")]),e._v(" "),r("p",[e._v("I created to Brownie Points app in hopes of creating good long term habits through a reward system.  I have been learning javascript because of the power and accessibility of web apps on browsers.  This app utilizes Bootstrap 3 and pure javascript while saving all user data in local storage.")]),e._v(" "),r("p",[e._v("For the future, I would like to complete all the features desired and to use AWS to save user data in a more long term and safer way.")]),e._v(" "),r("div",{staticClass:"bottomImageContainer"},[r("img",{staticClass:"imageRight",attrs:{src:n(17)}})]),e._v(" "),r("div",{staticClass:"linkCont"},[r("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://torothin.github.io/browniepoints/"}},[e._v("Brownie Points App Link (opens in a new tab)")])])])])}],i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){n(67)}var a=n(18),i=n(69),o=n(2),s=r,c=o(a.a,i.a,!1,s,"data-v-02d9297b",null);t.a=c.exports},function(e,t,n){var r=n(68);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("71d39dea",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".jumbotron[data-v-02d9297b]{width:95%}",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"componentCont"},[r("div",{staticClass:"jumbotron"},[r("h1",[e._v("Resumé")]),e._v(" "),r("hr",{staticClass:"my-4"}),e._v(" "),r("div",[r("img",{staticClass:"card-img",attrs:{src:n(70)}}),e._v(" "),r("p"),e._v(" "),r("img",{staticClass:"card-img",attrs:{src:n(71)}})]),e._v(" "),r("div",{staticClass:"linkCont"},[r("a",{attrs:{href:"../assets/resume/resume.pdf",download:"Brad Duvall's Resume"}},[e._v("Download Resumé")])])])])}],i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){e.exports=n.p+"resume1.jpg?c54e3e294e3bccbb710fd83357c79ca7"},function(e,t,n){e.exports=n.p+"resume2.jpg?69cd5bfac3688a2b459019213bc950b1"},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("wsNavBar",{attrs:{navData:e.navList}}),e._v(" "),n("frontPage"),e._v(" "),n("introPage",{attrs:{id:"introPage"}}),e._v(" "),n("workHistory",{attrs:{id:"workHistory"}}),e._v(" "),n("educationHistory",{attrs:{id:"educationHistory"}}),e._v(" "),n("resumeSection",{attrs:{id:"resumeSection"}}),e._v(" "),n("boxingSection",{attrs:{id:"boxingSection"}}),e._v(" "),n("brownieSection",{attrs:{id:"brownieSection"}}),e._v(" "),n("hobbiesSection",{attrs:{id:"hobbiesSection"}})],1)},a=[],i={render:r,staticRenderFns:a};t.a=i}]);
=======
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(26)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_wsNavBar_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_frontPage_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_introPage_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_workHistory_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_educationHistory_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_hobbiesPage_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_boxingPage_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_browniePage_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_resumePage_vue__ = __webpack_require__(66);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    'wsNavBar': __WEBPACK_IMPORTED_MODULE_0__components_wsNavBar_vue__["a" /* default */],
    'frontPage': __WEBPACK_IMPORTED_MODULE_1__components_frontPage_vue__["a" /* default */],
    'introPage': __WEBPACK_IMPORTED_MODULE_2__components_introPage_vue__["a" /* default */],
    'workHistory': __WEBPACK_IMPORTED_MODULE_3__components_workHistory_vue__["a" /* default */],
    'educationHistory': __WEBPACK_IMPORTED_MODULE_4__components_educationHistory_vue__["a" /* default */],
    'hobbiesSection': __WEBPACK_IMPORTED_MODULE_5__components_hobbiesPage_vue__["a" /* default */],
    'resumeSection': __WEBPACK_IMPORTED_MODULE_8__components_resumePage_vue__["a" /* default */],
    'boxingSection': __WEBPACK_IMPORTED_MODULE_6__components_boxingPage_vue__["a" /* default */],
    'brownieSection': __WEBPACK_IMPORTED_MODULE_7__components_browniePage_vue__["a" /* default */]
  },

  name: 'app',

  data: function () {
    return {
      //stores component sections for use as nav shortcuts
      navList: [{
        link: 'introPage',
        name: 'Introduction'
      }, {
        link: 'workHistory',
        name: 'Work'
      }, {
        link: 'educationHistory',
        name: 'Education'
      }, {
        link: 'resumeSection',
        name: 'Resume'
      }, {
        link: 'boxingSection',
        name: 'Boxing App'
      }, {
        link: 'brownieSection',
        name: 'Brownie Point App'
      }, {
        link: 'hobbiesSection',
        name: 'Hobbies'
      }]
    };
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Imports

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function () {
        return {
            navShow: false,
            childNavData: []
        };
    },
    methods: {},
    props: {
        navData: {
            type: Array,
            default: function () {
                return [];
            }
        }
    },
    beforeMount: function () {
        this.childNavData = this.navData;
    }

});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "IMG_2417B.png?eae3459789be702e112b8a0132c36789";

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Imports

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function () {
        return {};
    },
    methods: {}
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Imports

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function () {
        return {};
    },
    methods: {}
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Brad_Camp_Muir.jpg?1f57afa17a2d42d92ac3299d68a1a3c8";

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Imports

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function () {
        return {};
    },
    methods: {}
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Imports

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function () {
        return {};
    },
    methods: {
        toggleClasslist: function () {
            if (classList.style.display == 'none') {
                classList.style.display = 'block';
            } else {
                classList.style.display = 'none';
            }
        }
    }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Imports


/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function () {
        return {
            modalDisplay: {
                display: 'none'
            },
            currentImageSrc: '',
            images: [{
                footer: 'Twin Falls, WA',
                location: 'src/assets/images/IMG_0407.jpg'
            }, {
                footer: 'Stillaguamish River, Lime Kiln Trail, WA',
                location: 'src/assets/images/IMG_0397.jpg'
            }, {
                footer: 'Stillaguamish River, Lime Kiln Trail, WA',
                location: 'src/assets/images/IMG_0269.jpg'
            }, {
                footer: 'Bridal Veil Falls Trail, WA',
                location: 'src/assets/images/IMG_2145.jpg'
            }, {
                footer: 'Mt. Si, Little Si Trail, WA',
                location: 'src/assets/images/IMG_0467.jpg'
            }, {
                footer: 'Lake Serene, WA',
                location: 'src/assets/images/IMG_2196.jpg'
            }, {
                footer: 'Cooper River, WA',
                location: 'src/assets/images/IMG_2417.jpg'
            }, {
                footer: 'Cooper River, WA',
                location: 'src/assets/images/IMG_2425.jpg'
            }]

        };
    },
    methods: {
        toggleModal: function (id) {
            if (this.modalDisplay.display == 'block') {
                this.modalDisplay.display = 'none';
            } else {
                this.modalDisplay.display = 'block';
                this.currentImageSrc = this.images[id].location;
            }
        }

    }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Imports

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function () {
        return {};
    },
    methods: {}
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Boxing_App_Image.png?d3831a1a7fd3ce3ff69915fb688e366d";

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Imports

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function () {
        return {};
    },
    methods: {}
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "browniepointsimage.png?cef026fc5122a3471c9445e1365080e7";

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Imports

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function () {
        return {};
    },
    methods: {}
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(23);



new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__App_vue__["a" /* default */])
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (false) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (false
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (false
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "production" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    false
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i], vm);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
  if (!valid && haveExpectedTypes) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

function assertType (value, type, vm) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    try {
      valid = value instanceof type;
    } catch (e) {
      warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
      valid = false;
    }
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

var functionTypeCheckRE = /^\s*function (\w+)/;

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  // check if we need to specify expected value
  if (
    expectedTypes.length === 1 &&
    isExplicable(expectedType) &&
    isExplicable(typeof value) &&
    !isBoolean(expectedType, receivedType)
  ) {
    message += " with value " + (styleValue(value, expectedType));
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + (styleValue(value, receivedType)) + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
function isExplicable (value) {
  return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (false) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (
      !vnode ||
      (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) // #9658, #10391
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallbackRender,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {
        warn('slot v-bind without argument expects an Object', this);
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes =
      scopedSlotFn(props) ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  } else {
    nodes =
      this.$slots[name] ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
  return eventKeyCode === undefined
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (false) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (false) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  // we know it's MountedComponentVNode but flow doesn't
  vnode,
  // activeInstance in lifecycle state
  parent
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (false) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
    (!newScopedSlots && vm.$scopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (false) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        var info = "callback for watcher \"" + (this.expression) + "\"";
        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      } else if (vm.$options.methods && key in vm.$options.methods) {
        warn(("The computed property \"" + key + "\" is already defined as a method."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (false) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      var info = "callback for immediate watcher \"" + (watcher.expression) + "\"";
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (false
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */





function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var entry = cache[key];
    if (entry) {
      var name = entry.name;
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var entry = cache[key];
  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  methods: {
    cacheVNode: function cacheVNode() {
      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var vnodeToCache = ref.vnodeToCache;
      var keyToCache = ref.keyToCache;
      if (vnodeToCache) {
        var tag = vnodeToCache.tag;
        var componentInstance = vnodeToCache.componentInstance;
        var componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag: tag,
          componentInstance: componentInstance,
        };
        keys.push(keyToCache);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
        this.vnodeToCache = null;
      }
    }
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.cacheVNode();
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  updated: function updated () {
    this.cacheVNode();
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.14';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.asyncFactory === b.asyncFactory && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (false) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    false
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (false) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (false) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (false) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        false
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (false
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (false) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (false) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (false) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (false) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (false
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /[ \f\t\r\n]+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!(
    el.component ||
    el.attrsMap[':is'] ||
    el.attrsMap['v-bind:is'] ||
    !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag))
  ); };
  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        if (false) {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else if (false) {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (false) {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "production" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        if (false) {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (false) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        if (false) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (false) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anything as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (false) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (false) {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (false) {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (false) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (false) {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (false) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (false) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        if (false) {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        if (false) {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else if (false) {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (false) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          false
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (false) {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (false) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      false
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + ".apply(null, arguments)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ").apply(null, arguments)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (false) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  // fix #11483, Root level <script> tags should not be rendered.
  var code = ast ? (ast.tag === 'script' ? 'null' : genElement(ast, state)) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "production" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (false
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (false) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? (",function(){return " + children + "}") : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stripped = exp.replace(stripStringRE, '');
  var keywordMatch = stripped.match(unaryOperatorsRE);
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

function checkFunctionParameterExpression (exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn(
      "invalid function parameter expression: " + (e.message) + " in\n\n" +
      "    " + exp + "\n\n" +
      "  Raw expression: " + (text.trim()) + "\n",
      range
    );
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (false) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (false) {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (false) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (false) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      if (false) {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "production" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (false) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (false) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (false) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "production" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (false) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3), __webpack_require__(20).setImmediate))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(21);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(22)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4af45894_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(70);
function injectStyle (ssrContext) {
  __webpack_require__(24)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4af45894"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4af45894_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("b390d35c", content, true, {});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wsNavBar_vue__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49ba7e98_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wsNavBar_vue__ = __webpack_require__(30);
function injectStyle (ssrContext) {
  __webpack_require__(28)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-49ba7e98"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wsNavBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49ba7e98_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wsNavBar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("317bd852", content, true, {});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "#navButton[data-v-49ba7e98]{height:40px;width:40px;position:fixed;top:25px;left:10px;padding:5px;background-color:var(--info);border-radius:7px;box-shadow:4px 4px 8px 4px rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);z-index:100}#navButton[data-v-49ba7e98]:hover{background-color:var(--primary)}#navMenu[data-v-49ba7e98]{position:fixed;top:75px;left:10px;box-shadow:4px 4px 8px 4px rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);z-index:100}#navList[data-v-49ba7e98]{padding:0;list-style-type:none;margin:0;z-index:100}.navLi[data-v-49ba7e98],.navLink[data-v-49ba7e98]{margin:0;background-color:var(--info)}.navLink[data-v-49ba7e98]{text-align:left;color:var(--nav_font_main);list-style-type:none;padding:10px;border:1px solid var(--primary);text-decoration:none;width:100%;display:block}.navLink[data-v-49ba7e98]:hover{background-color:var(--nav_font_sec);text-decoration:none}@media only screen and (max-width:600px){#navButton[data-v-49ba7e98]{height:30px;width:30px;top:5px;left:5px}#navMenu[data-v-49ba7e98]{top:60px;left:5px}}", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{attrs:{"id":"navButton","src":__webpack_require__(31)},on:{"click":function($event){_vm.navShow = !_vm.navShow}}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.navShow),expression:"navShow"}],attrs:{"id":"navMenu"}},[_c('ul',{attrs:{"id":"navList"},on:{"click":function($event){_vm.navShow = !_vm.navShow}}},[_vm._l((_vm.childNavData),function(nav,item){return _c('li',{key:item,staticClass:"navLi"},[_c('a',{staticClass:"navLink",attrs:{"href":'#'+nav.link}},[_vm._v(_vm._s(nav.name))])])}),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1)],2)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"navLi"},[_c('a',{staticClass:"navLink",attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://www.github.com/torothin"}},[_c('img',{attrs:{"src":__webpack_require__(32),"height":"22px"}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"navLi"},[_c('a',{staticClass:"navLink",attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://www.linkedin.com/in/brad-duvall-65949250"}},[_c('img',{attrs:{"src":__webpack_require__(33),"height":"17px"}})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "menu_icon_white.png?25f0989cb2b987916f404b230e97901d";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "GitHub_Logo_White.png?064ace4777ac86d7627f455f36975452";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Logo-2CRev-28px-R.png?25b9b26ab5ff2ffce05cf6f1a4ecea91";

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_frontPage_vue__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0aaf07af_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_frontPage_vue__ = __webpack_require__(39);
function injectStyle (ssrContext) {
  __webpack_require__(35)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0aaf07af"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_frontPage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0aaf07af_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_frontPage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("d6a60bfa", content, true, {});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(37);
exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "#frontPageContainer[data-v-0aaf07af]{height:100vh}#frontPage[data-v-0aaf07af]{top:0;height:100vh;width:100%;background-color:#000;position:absolute}#frontPageImage[data-v-0aaf07af]{position:absolute;width:100%;background-image:url(" + escape(__webpack_require__(38)) + ");opacity:.6;height:100%;background-size:120%;background-repeat:no-repeat;background-position:50%}#frontPageText[data-v-0aaf07af]{top:15px}#bottomFrontPageText[data-v-0aaf07af],#frontPageText[data-v-0aaf07af]{position:absolute;text-align:center;height:100px;width:100%;color:#fff;font-size:25px}#bottomFrontPageText[data-v-0aaf07af]{bottom:0}@media (orientation:portrait){#frontPageImage[data-v-0aaf07af]{background-image:url(" + escape(__webpack_require__(6)) + ");background-size:150%}}@media only screen and (max-width:770px){#frontPageImage[data-v-0aaf07af]{background-image:url(" + escape(__webpack_require__(6)) + ");background-size:180%}}", ""]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "IMG_2417.jpg?e73e38c41215c616d460c4139d5d0712";

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"frontPageContainer"}},[_c('div',{attrs:{"id":"frontPage"}},[_c('div',{attrs:{"id":"frontPageImage"}}),_vm._v(" "),_c('div',{attrs:{"id":"frontPageText"}},[_vm._v("\n       \n       Lost in the woods . . .\n\n     ")]),_vm._v(" "),_c('div',{attrs:{"id":"bottomFrontPageText"}},[_vm._v("\n\n         Way out ...\n         "),_c('div',{attrs:{"id":"bottomFrontPageImage"}},[_c('img',{staticStyle:{"height":"60px","width":"100px"},attrs:{"src":"src/assets/images/downArrowWhite.png"}})])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_introPage_vue__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71676dfd_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_introPage_vue__ = __webpack_require__(43);
function injectStyle (ssrContext) {
  __webpack_require__(41)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-71676dfd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_introPage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71676dfd_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_introPage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("82556fb0", content, true, {});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"componentCont",attrs:{"id":"introPage"}},[_c('div',{staticClass:"jumbotron"},[_c('h1',[_vm._v("Heyo, my name is Brad \"Allan\" Duvall")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('hr',{staticClass:"my-4"}),_vm._v(" "),_c('div',{staticClass:"rightImageContainer"},[_c('img',{staticClass:"imageRight",attrs:{"src":__webpack_require__(9),"alt":"Me!!"}})]),_vm._v(" "),_c('p',{staticClass:"lead"},[_vm._v("I am a Software Development looking for new opportunities.")]),_vm._v(" "),_c('p',[_vm._v("I had the opportunity to make a career change from being a Materials and Process Engineer to a Software Developer. For the last year I have been working in L2 support at Guidewire software. I have always been interested in becoming a manager and I am looking for new opportunities in the Tech Industry")]),_vm._v(" "),_c('div',{staticClass:"bottomImageContainer"},[_c('img',{staticClass:"imageRight",attrs:{"src":__webpack_require__(9),"alt":"Me!!"}})])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_workHistory_vue__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fe3d78e0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_workHistory_vue__ = __webpack_require__(47);
function injectStyle (ssrContext) {
  __webpack_require__(45)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fe3d78e0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_workHistory_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fe3d78e0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_workHistory_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("bbaee006", content, true, {});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"componentCont"},[_c('div',{staticClass:"jumbotron"},[_c('h1',[_vm._v("Work History")]),_vm._v(" "),_c('hr',{staticClass:"my-4"}),_vm._v(" "),_c('div',{staticClass:"rightImageContainer"},[_c('img',{staticClass:"imageRight",attrs:{"src":__webpack_require__(48)}})]),_vm._v(" "),_c('p',{staticClass:"lead"},[_vm._v("Guidewire Software (2021-Present)")]),_vm._v(" "),_c('p',[_vm._v("After some time of looking for developer work I began working at Guidewire Software.  Guidewire has given me the opportunity to learn aspects of AWS Cloud Platforms.  Guidewire Software has been in the business of Insurance Software and has moved from On-Premise licensing to AWS Hosted Platforms.  Part of the job is to handle tickets and bugs reported by the customer as L2 support.  To handle on-prem tickets, I certified in Guidewires on-prem versions of BillingCenter learning SQL and Gosu, a version of Java.  My next certification will be Guidewires Digital Products Suite.  These products are Front-End centric using Angular and React Javascript libraries.\n\n         ")]),_vm._v(" "),_c('p',{staticClass:"lead"},[_vm._v("B/E Aerospace (2015-2016)")]),_vm._v(" "),_c('p',[_vm._v("I joined B/E Aerospace - ALCI as a Materials and Process Engineer. I was part of Materials team which maintained process specifications for manufacturing, testing, and fire properties. I wrote several test plans for new polymers, polymer suppliers and manufacture’s. Every test plan and specification was thoroughly checked by our customers (Boeing) to ensure quality of the product.\n\n         ")]),_vm._v(" "),_c('p',[_vm._v("I moved to the new Sustain team where I helped to ensure that post production repairs were performed to standards on products delivered to Boeing's customers. While in the sustain team I performed routine tasks such as approving designs to ensure they meet process specifications, checking repair methods and processes, and checking designs to ensure they meet FAA fire safety requirements.\n\n         ")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',{staticClass:"lead"},[_vm._v("Exotic Metals (2011-2015)")]),_vm._v(" "),_c('p',[_vm._v("While working at Exotic Metals forming company, I was part of a brand new R&D group as a Research Engineer, charged to bring the company’s manufacturing capability up to date and on into the future. Projects such as 3D metal printing, testing new Titanium and Nickel Alloys, and new forming technologies and manufacturing technologies are just examples of projects I was involved in while in the R&D team.\n\n         ")]),_vm._v(" "),_c('p',[_vm._v("Projects I directly participated in include Hybrid plastic/titanium structures, High Temperature Forming, forming measuring techniques, and GTAW improvement studies. While in the R&D team I developed engineering skills such as Project Management, specification writing, drawing interpretation, and 3D modeling. I became an expert in Titanium and Nickel Alloys, being the first point of contact for suppliers wanting to introduce a new alloy.\n\n         ")]),_vm._v(" "),_c('p',{staticClass:"lead"},[_vm._v("Modumetal, Inc. (2010-2011)")]),_vm._v(" "),_c('p',[_vm._v("As an intern at Modumetal, I used the research skills I developed while at college. I worked for a Project Engineer helping his team to generate and analyze data through mechanical testing of iron nickel nano-laminates.  We also tested for corrosion resistance using salt spray tanks and measured deposition coverage and thickness. One of my projects was to develop a guide for placement of electrodes in a deposition tank to obtain uniform thickness laminate deposits. I modeled various electrode configurations using Comsol software creating visualization of current paths through the electrolytic baths used in the lamination process.\n\n         ")]),_vm._v(" "),_c('p',{staticClass:"lead"},[_vm._v("US Navy (2000-2006)")]),_vm._v(" "),_c('p',[_vm._v("I enlisted in the US Navy in 2000 as a Nuclear Mechanic, working in the engine room for a nuclear aircraft carrier. Every \"nuke\" (Nuclear Technician) went through a rigorous training program where we learned Thermodynamics, Nuclear Physics and Marine Engineering. I was then sent to the USS Abraham Lincoln (CVN-72), serving a sea tour for four and a half years. The Abraham Lincoln was part of Operation Enduring Freedom, Operation Iraqi Freedom and the 2004 Indian Ocean earthquake relief effort in Sumatra. I completed my six year enlistment in 2006 with an Honorable Discharge.\n           \n         ")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jobicon.png?115b24a9d818931b1b6c756239b55bbd";

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_educationHistory_vue__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f35ac3a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_educationHistory_vue__ = __webpack_require__(52);
function injectStyle (ssrContext) {
  __webpack_require__(50)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7f35ac3a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_educationHistory_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f35ac3a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_educationHistory_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("5ec5c142", content, true, {});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "#classList[data-v-7f35ac3a]{background-color:var(--success);padding:10px;margin-top:10px;box-shadow:4px 4px 8px 4px rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);text-align:left;width:100%}.classUL[data-v-7f35ac3a]{color:var(--info)}#classListBtn[data-v-7f35ac3a]{background-color:var(--info);color:var(--success)}", ""]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"componentCont"},[_c('div',{staticClass:"jumbotron"},[_c('h1',[_vm._v("My Education")]),_vm._v(" "),_c('hr',{staticClass:"my-4"}),_vm._v(" "),_c('p',{staticClass:"lead"},[_vm._v("UW Bothell (2017-2018)")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('p',[_vm._v("Prior to attending UW Bothell, I began my programming journey by taking online courses.  I took courses on Udemy, EDX.org and Coursera.  These courses helped prepare me for entrance into the Graduate Certificate program.\n        ")]),_vm._v(" "),_c('button',{staticClass:"btn",attrs:{"id":"classListBtn"},on:{"click":_vm.toggleClasslist}},[_vm._v("Class List")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',{staticClass:"lead"},[_vm._v("UW Seattle (2009-2011)")]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('p',{staticClass:"lead"},[_vm._v("Northgate CC (2006-2009)")]),_vm._v(" "),_vm._m(3)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("I obtained a "),_c('b',[_vm._v("Graduate Certificate in Software Design & Development")]),_vm._v(", in 2018, where I learned software development in C++. During my time in this program I learned about object-oriented programming, data structures and algorithms. I also learn about various project management styles such as Waterfall, Kanban, and Agile software development.  While in this program I completed 12 projects on-time and per specification.  \n        ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"div-shadowed",staticStyle:{"display":"none"},attrs:{"id":"classList"}},[_c('p'),_vm._v(" "),_c('ul',{staticClass:"classUL"},[_vm._v(" Grad Cert Courses\n            "),_c('li',[_vm._v("CSS 501 Data Structures and Object-Oriented Programming I")]),_vm._v(" "),_c('li',[_vm._v("CSS 502 Data Structures and Object-Oriented Programming II")]),_vm._v(" "),_c('li',[_vm._v("CSS 503 Systems Programming")]),_vm._v(" "),_c('li',[_vm._v("CSS 506 Software Development Processes")]),_vm._v(" "),_c('li',[_vm._v("CSS 507 Software Modeling Techniques")]),_vm._v(" "),_c('li',[_vm._v("CSS 508 Software Testing and Quality")])]),_vm._v(" "),_c('ul',{staticClass:"classUL"},[_vm._v(" Online Courses\n            "),_c('li',[_vm._v("Vue JS Tutorial")]),_vm._v(" "),_c('li',[_vm._v("The Complete JavaScript Course 2018: Build Real Projects")]),_vm._v(" "),_c('li',[_vm._v("HKUSTx COMP102.2x Introduction to Java Programming - Part 2")]),_vm._v(" "),_c('li',[_vm._v("HKUSTx COMP102.1x Introduction to Java Programming - Part 1")]),_vm._v(" "),_c('li',[_vm._v("MITx 6.00.1x Introduction to Computer Science and Programming Using Python")]),_vm._v(" "),_c('li',[_vm._v("Solve 100 Python Exercises to Boost your Python Skills")]),_vm._v(" "),_c('li',[_vm._v("The Python Mega Course: Build 10 Real World Applications")])]),_vm._v(" "),_c('p')])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("After transferring to UW Seattle, I earned a "),_c('b',[_vm._v("BS in Material Science and Engineering")]),_vm._v(" in 2011. While at UW, I learned about metal alloys, polymers and composite systems. I took courses in material testing to gain insights into the strengths and weakness of various materials and their applications. I also learned how to research academic topics and and write research papers. My undergrad research capstone was the development of a Copper Nickel Electrodeposition method using nano-laminate technology. The method was used by a MSE Graduate to study nano-laminate material properties.\n        ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("After leaving the Navy, I started my education at North Seattle Community College. I earned an "),_c('b',[_vm._v("Associate of Science")]),_vm._v(", in 2009, as part of the transfer requirements. My class load included Physics, Chemistry, Calculus and Thermodynamics.")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hobbiesPage_vue__ = __webpack_require__(12);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90fd5a2c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_hobbiesPage_vue__ = __webpack_require__(56);
function injectStyle (ssrContext) {
  __webpack_require__(54)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-90fd5a2c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hobbiesPage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90fd5a2c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_hobbiesPage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("072f679a", content, true, {});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "ul[data-v-90fd5a2c]{display:flex;flex-wrap:wrap;list-style-type:none;padding:0}li[data-v-90fd5a2c]{max-width:300px;flex-grow:1;flex-basis:300px;padding:5px;margin:20px auto}.modal[data-v-90fd5a2c]{position:fixed;top:0;right:0;bottom:0;left:0;display:none;z-index:1050;overflow:hidden;outline:0;height:100%}.modal-open .modal[data-v-90fd5a2c]{overflow-x:hidden;overflow-y:scroll}.modal-content[data-v-90fd5a2c]{width:60%;margin:auto;pointer-events:auto;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:10px;outline:0}.modal-body[data-v-90fd5a2c]{padding:1rem;max-height:calc(100vh - 50px);overflow-y:auto}.modal-header[data-v-90fd5a2c]{border-bottom:0 solid #e9ecef}.iframe-container[data-v-90fd5a2c]{overflow:hidden;padding-top:56.25%;position:relative;width:90%;margin:10px auto;box-shadow:4px 4px 8px 4px rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.iframe-container iframe[data-v-90fd5a2c]{border:0;height:100%;left:0;position:absolute;top:0;width:100%}.iframe-container-4x3[data-v-90fd5a2c]{padding-top:75%}.card[data-v-90fd5a2c]{background-color:var(--info);box-shadow:4px 4px 8px 4px rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.card-footer[data-v-90fd5a2c]{color:var(--nav_font_main);text-align:center}", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"componentCont"},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{attrs:{"id":"imageBlock"}},[_c('ul',_vm._l((_vm.images),function(image,index){return _c('li',{key:index,on:{"click":function($event){return _vm.toggleModal(index)}}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('img',{staticClass:"card-img",attrs:{"alt":image.footer,"id":index,"src":image.location}})]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_vm._v(_vm._s(image.footer))])])])}),0)]),_vm._v(" "),_c('div',{staticClass:"modal",style:(_vm.modalDisplay),attrs:{"id":"myModal"}},[_c('div',{staticClass:"modal-backdrop"},[_c('div',{staticClass:"modal-header"},[_c('span',{staticClass:"close",on:{"click":function($event){return _vm.toggleModal(0)}}},[_vm._v("×")])]),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('img',{staticClass:"modal-content",attrs:{"src":_vm.currentImageSrc}})])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jumbotron"},[_c('h1',[_vm._v("Hobbies")]),_vm._v(" "),_c('hr',{staticClass:"my-4"}),_vm._v(" "),_c('p',{staticClass:"lead"},[_vm._v("Martial Arts")]),_vm._v(" "),_c('p',[_vm._v("All of my life I have wanted to do some form of martial art.  Around 2014 I finally decided to give it a try. My wife, at the time, and I decided to try a self defense class that was designed around using Wing Chun (see IP Man) as a base. Three years later and I get my first Black Belt equivalent.")]),_vm._v(" "),_c('p',[_vm._v("While learning Wing Chun I was introduced to Muay Thai (Thai Boxing) and fell in love. The sport provided a wonderful workout and was very challenging. I moved to Alpha Martial Arts where I learn from Kru Alberto Ramirez at Chaisai Muay Thai where I currently hold a green sash. I also study a bit of Escrima and would like to try Kenjitsu and BJJ in the future.")]),_vm._v(" "),_c('p',{staticClass:"lead"},[_vm._v("Hiking and Camping")]),_vm._v(" "),_c('p',[_vm._v("A summer hobby that I enjoy is to go hiking. We regularly head out toward Darrington, WA to explore the many hiking trails. Our most difficult hike to date was the hike to Camp Muir on Mt Rainier.  A few buddies and I regularly go camping in the off seasons around Roslyn and Lake Cle Elum.")]),_vm._v(" "),_c('p',{staticClass:"lead"},[_vm._v("Gaming")]),_vm._v(" "),_c('p',[_vm._v("I spend some of my free time playing games on my PC. I enjoy MMORPGs and RPGs such as World of Warcraft and Skyrim. ")]),_vm._v(" "),_c('p',{staticClass:"lead"},[_vm._v("Shooting")]),_vm._v(" "),_c('p',[_vm._v("Several years ago I started taking gun safety classes.  I started with the basics of a 101 class and have moved to more advanced classes.  Prior to working at Guidewire, I worked at a local gun range where I learned a great deal about gun safety.  I am slowly working up to competing in some local shooting competitions ")]),_vm._v(" "),_c('div',{staticClass:"bottomImageContainer"},[_c('img',{staticClass:"imageRight",attrs:{"alt":"dog","src":__webpack_require__(57)}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"iframe-container"},[_c('iframe',{attrs:{"src":"https://www.youtube.com/embed/LzL3onF5lXw","allowfullscreen":""}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "IMG_1151.jpg?46138833740df0a19b3e74a7be2c62d9";

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_boxingPage_vue__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1681066f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_boxingPage_vue__ = __webpack_require__(61);
function injectStyle (ssrContext) {
  __webpack_require__(59)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1681066f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_boxingPage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1681066f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_boxingPage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("5dfd342e", content, true, {});

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"componentCont",attrs:{"id":"boxingPageContainer"}},[_c('div',{staticClass:"jumbotron"},[_c('h1',[_vm._v("Boxing App")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('hr',{staticClass:"my-4"}),_vm._v(" "),_c('div',{staticClass:"rightImageContainer"},[_c('img',{staticClass:"imageRight",attrs:{"src":__webpack_require__(14)}})]),_vm._v(" "),_c('p',[_vm._v("An idea came to me in my Muay Thai class one day.  What if I had an app that called out random combinations for me on a timer.  I thought to myself, “I can build that”.  Initially, the app was going to be for mobile devices.  I had tinkered around with swift in the past, so I started to think iOS first then maybe android.  I realized that I needed to be sure that I wasn’t the only one that might use something like this because jumping straight to mobile might be a bigger leap than necessary.  I looked at JavaScript and realized I could build it using JavaScript.")]),_vm._v(" "),_c('p',[_vm._v("I implementing some feedback I received from classmates and the head instructor for my class.  The experience was very useful in learning front end development because every browser handles the web app a little differently.  I plan to implement several features and then rebuild it for mobile devices.")]),_vm._v(" "),_c('div',{staticClass:"bottomImageContainer"},[_c('img',{staticClass:"imageRight",attrs:{"src":__webpack_require__(14)}})]),_vm._v(" "),_c('div',{staticClass:"linkCont"},[_c('a',{attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://torothin.github.io/torothin.boxing.github.io/"}},[_vm._v("Boxing App Link (opens in a new tab)")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_browniePage_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0270fd48_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_browniePage_vue__ = __webpack_require__(65);
function injectStyle (ssrContext) {
  __webpack_require__(63)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0270fd48"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_browniePage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0270fd48_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_browniePage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("0e9919fe", content, true, {});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"componentCont"},[_c('div',{staticClass:"jumbotron"},[_c('h1',[_vm._v("Brownie Points App")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('hr',{staticClass:"my-4"}),_vm._v(" "),_c('div',{staticClass:"rightImageContainer"},[_c('img',{staticClass:"imageRight",attrs:{"src":__webpack_require__(16)}})]),_vm._v(" "),_c('p',[_vm._v("One thing I have always struggled with is to complete all the goals I've had at any point and to complete them regularly.  I seen and used several apps that take advantage of the psychological affects of gaining levels, experience and rewards for completing things like walking 10,000 steps or eating under a specified calorie count, etc.  I thought to myself, I could do something like this for completing any goals I want to create.")]),_vm._v(" "),_c('p',[_vm._v("I created to Brownie Points app in hopes of creating good long term habits through a reward system.  I have been learning javascript because of the power and accessibility of web apps on browsers.  This app utilizes Bootstrap 3 and pure javascript while saving all user data in local storage.")]),_vm._v(" "),_c('p',[_vm._v("A newer version has been uploaded which implements cloud storage and authentication through Firebase web services.  Future updates will include a login/signup page and goal editting. ")]),_vm._v(" "),_c('div',{staticClass:"bottomImageContainer"},[_c('img',{staticClass:"imageRight",attrs:{"src":__webpack_require__(16)}})]),_vm._v(" "),_c('div',{staticClass:"linkCont"},[_c('a',{attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://torothin.github.io/browniepoints/"}},[_vm._v("(Vue Version) Brownie Points App Link (opens in a new tab)")]),_vm._v(" "),_c('a',{attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://torothin.github.io/browniepointsv4/"}},[_vm._v("(React Version) Brownie Points App Link (opens in a new tab)")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_resumePage_vue__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ad93aa7_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_resumePage_vue__ = __webpack_require__(69);
function injectStyle (ssrContext) {
  __webpack_require__(67)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7ad93aa7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_resumePage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ad93aa7_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_resumePage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("48c41938", content, true, {});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.push([module.i, "@import url(https://themes.googleusercontent.com/fonts/css?kit=OPeqXG-QxW3ZD8BtmPikfA);", ""]);

// module
exports.push([module.i, ".lst-kix_kzcswdo3kqyg-2>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}.lst-kix_kzcswdo3kqyg-4>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}.lst-kix_x1j4i7graejw-2>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}.lst-kix_kzcswdo3kqyg-1>li[data-v-7ad93aa7]:before,.lst-kix_x1j4i7graejw-4>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}.lst-kix_kzcswdo3kqyg-5>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}.lst-kix_x1j4i7graejw-1>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}.lst-kix_x1j4i7graejw-5>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}ul.lst-kix_7gap31uvo5l4-1[data-v-7ad93aa7],ul.lst-kix_7gap31uvo5l4-2[data-v-7ad93aa7],ul.lst-kix_7gap31uvo5l4-3[data-v-7ad93aa7],ul.lst-kix_7gap31uvo5l4-4[data-v-7ad93aa7]{list-style-type:none}.lst-kix_x1j4i7graejw-0>li[data-v-7ad93aa7]:before,.lst-kix_x1j4i7graejw-6>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}.lst-kix_x1j4i7graejw-8>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}ul.lst-kix_7gap31uvo5l4-0[data-v-7ad93aa7]{list-style-type:none}.lst-kix_kzcswdo3kqyg-3>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}.lst-kix_x1j4i7graejw-7>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}ul.lst-kix_7gap31uvo5l4-5[data-v-7ad93aa7],ul.lst-kix_7gap31uvo5l4-6[data-v-7ad93aa7],ul.lst-kix_7gap31uvo5l4-7[data-v-7ad93aa7],ul.lst-kix_7gap31uvo5l4-8[data-v-7ad93aa7]{list-style-type:none}.lst-kix_kzcswdo3kqyg-0>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}ul.lst-kix_midwv9t781tv-0[data-v-7ad93aa7]{list-style-type:none}.lst-kix_rxfiug1ccmse-0>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}.lst-kix_rxfiug1ccmse-1>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}ul.lst-kix_midwv9t781tv-1[data-v-7ad93aa7],ul.lst-kix_midwv9t781tv-2[data-v-7ad93aa7],ul.lst-kix_midwv9t781tv-3[data-v-7ad93aa7],ul.lst-kix_midwv9t781tv-4[data-v-7ad93aa7],ul.lst-kix_midwv9t781tv-5[data-v-7ad93aa7],ul.lst-kix_midwv9t781tv-6[data-v-7ad93aa7],ul.lst-kix_midwv9t781tv-7[data-v-7ad93aa7],ul.lst-kix_midwv9t781tv-8[data-v-7ad93aa7]{list-style-type:none}.lst-kix_midwv9t781tv-7>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}.lst-kix_9fubixh9cul-2>li[data-v-7ad93aa7]:before,.lst-kix_midwv9t781tv-8>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}ul.lst-kix_9fubixh9cul-0[data-v-7ad93aa7]{list-style-type:none}.lst-kix_9fubixh9cul-1>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}ul.lst-kix_9fubixh9cul-5[data-v-7ad93aa7],ul.lst-kix_9fubixh9cul-6[data-v-7ad93aa7],ul.lst-kix_rxfiug1ccmse-5[data-v-7ad93aa7]{list-style-type:none}.lst-kix_9fubixh9cul-6>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}ul.lst-kix_9fubixh9cul-8[data-v-7ad93aa7],ul.lst-kix_rxfiug1ccmse-4[data-v-7ad93aa7],ul.lst-kix_rxfiug1ccmse-7[data-v-7ad93aa7]{list-style-type:none}.lst-kix_midwv9t781tv-0>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}ul.lst-kix_9fubixh9cul-7[data-v-7ad93aa7],ul.lst-kix_rxfiug1ccmse-6[data-v-7ad93aa7]{list-style-type:none}.lst-kix_9fubixh9cul-0>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}ul.lst-kix_9fubixh9cul-2[data-v-7ad93aa7],ul.lst-kix_rxfiug1ccmse-1[data-v-7ad93aa7]{list-style-type:none}.lst-kix_midwv9t781tv-1>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}ul.lst-kix_9fubixh9cul-1[data-v-7ad93aa7]{list-style-type:none}.lst-kix_9fubixh9cul-7>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}.lst-kix_9fubixh9cul-8>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}ul.lst-kix_9fubixh9cul-3[data-v-7ad93aa7],ul.lst-kix_9fubixh9cul-4[data-v-7ad93aa7],ul.lst-kix_rxfiug1ccmse-0[data-v-7ad93aa7],ul.lst-kix_rxfiug1ccmse-2[data-v-7ad93aa7],ul.lst-kix_rxfiug1ccmse-3[data-v-7ad93aa7]{list-style-type:none}.lst-kix_midwv9t781tv-3>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}.lst-kix_midwv9t781tv-2>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}.lst-kix_midwv9t781tv-4>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}ul.lst-kix_rxfiug1ccmse-8[data-v-7ad93aa7]{list-style-type:none}.lst-kix_9fubixh9cul-5>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}.lst-kix_kzcswdo3kqyg-6>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}.lst-kix_kzcswdo3kqyg-8>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}.lst-kix_9fubixh9cul-3>li[data-v-7ad93aa7]:before,.lst-kix_midwv9t781tv-6>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}.lst-kix_9fubixh9cul-4>li[data-v-7ad93aa7]:before,.lst-kix_kzcswdo3kqyg-7>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}.lst-kix_midwv9t781tv-5>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}.lst-kix_6qifmjwecg1p-1>li[data-v-7ad93aa7]:before,.lst-kix_7gap31uvo5l4-1>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}.lst-kix_6qifmjwecg1p-2>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}.lst-kix_6qifmjwecg1p-0>li[data-v-7ad93aa7]:before,.lst-kix_6qifmjwecg1p-3>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}.lst-kix_6qifmjwecg1p-4>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}.lst-kix_7gap31uvo5l4-0>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}.lst-kix_7gap31uvo5l4-4>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}.lst-kix_7gap31uvo5l4-5>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}.lst-kix_7gap31uvo5l4-7>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}.lst-kix_7gap31uvo5l4-6>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}.lst-kix_7gap31uvo5l4-8>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}ul.lst-kix_cf1zxfybmywq-0[data-v-7ad93aa7],ul.lst-kix_cf1zxfybmywq-1[data-v-7ad93aa7],ul.lst-kix_cf1zxfybmywq-2[data-v-7ad93aa7],ul.lst-kix_cf1zxfybmywq-3[data-v-7ad93aa7],ul.lst-kix_cf1zxfybmywq-8[data-v-7ad93aa7],ul.lst-kix_x1j4i7graejw-0[data-v-7ad93aa7],ul.lst-kix_x1j4i7graejw-1[data-v-7ad93aa7],ul.lst-kix_x1j4i7graejw-2[data-v-7ad93aa7],ul.lst-kix_x1j4i7graejw-3[data-v-7ad93aa7],ul.lst-kix_x1j4i7graejw-8[data-v-7ad93aa7]{list-style-type:none}.lst-kix_cf1zxfybmywq-7>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}ul.lst-kix_cf1zxfybmywq-5[data-v-7ad93aa7],ul.lst-kix_cf1zxfybmywq-6[data-v-7ad93aa7],ul.lst-kix_cf1zxfybmywq-7[data-v-7ad93aa7],ul.lst-kix_x1j4i7graejw-6[data-v-7ad93aa7],ul.lst-kix_x1j4i7graejw-7[data-v-7ad93aa7]{list-style-type:none}.lst-kix_cf1zxfybmywq-8>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}ul.lst-kix_cf1zxfybmywq-4[data-v-7ad93aa7],ul.lst-kix_x1j4i7graejw-4[data-v-7ad93aa7],ul.lst-kix_x1j4i7graejw-5[data-v-7ad93aa7]{list-style-type:none}.lst-kix_7gap31uvo5l4-3>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}.lst-kix_7gap31uvo5l4-2>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}ul.lst-kix_6qifmjwecg1p-1[data-v-7ad93aa7],ul.lst-kix_6qifmjwecg1p-2[data-v-7ad93aa7],ul.lst-kix_6qifmjwecg1p-3[data-v-7ad93aa7],ul.lst-kix_6qifmjwecg1p-4[data-v-7ad93aa7],ul.lst-kix_6qifmjwecg1p-5[data-v-7ad93aa7],ul.lst-kix_6qifmjwecg1p-6[data-v-7ad93aa7],ul.lst-kix_6qifmjwecg1p-7[data-v-7ad93aa7],ul.lst-kix_6qifmjwecg1p-8[data-v-7ad93aa7]{list-style-type:none}.lst-kix_cf1zxfybmywq-6>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}ul.lst-kix_6qifmjwecg1p-0[data-v-7ad93aa7],ul.lst-kix_kzcswdo3kqyg-7[data-v-7ad93aa7]{list-style-type:none}.lst-kix_cf1zxfybmywq-5>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}ul.lst-kix_kzcswdo3kqyg-8[data-v-7ad93aa7]{list-style-type:none}.lst-kix_rxfiug1ccmse-6>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}ul.lst-kix_kzcswdo3kqyg-5[data-v-7ad93aa7],ul.lst-kix_kzcswdo3kqyg-6[data-v-7ad93aa7]{list-style-type:none}.lst-kix_cf1zxfybmywq-3>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}.lst-kix_rxfiug1ccmse-4>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}.lst-kix_rxfiug1ccmse-5>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}.lst-kix_cf1zxfybmywq-1>li[data-v-7ad93aa7]:before,.lst-kix_cf1zxfybmywq-4>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}ul.lst-kix_kzcswdo3kqyg-0[data-v-7ad93aa7]{list-style-type:none}.lst-kix_rxfiug1ccmse-3>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}.lst-kix_rxfiug1ccmse-2>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}ul.lst-kix_kzcswdo3kqyg-1[data-v-7ad93aa7],ul.lst-kix_kzcswdo3kqyg-3[data-v-7ad93aa7],ul.lst-kix_kzcswdo3kqyg-4[data-v-7ad93aa7]{list-style-type:none}.lst-kix_cf1zxfybmywq-2>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}ul.lst-kix_kzcswdo3kqyg-2[data-v-7ad93aa7]{list-style-type:none}.lst-kix_cf1zxfybmywq-0>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}.lst-kix_rxfiug1ccmse-7>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}.lst-kix_6qifmjwecg1p-8>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}.lst-kix_6qifmjwecg1p-7>li[data-v-7ad93aa7]:before{content:\"\\25CB    \"}.lst-kix_6qifmjwecg1p-5>li[data-v-7ad93aa7]:before,.lst-kix_rxfiug1ccmse-8>li[data-v-7ad93aa7]:before{content:\"\\25A0    \"}.lst-kix_6qifmjwecg1p-6>li[data-v-7ad93aa7]:before,.lst-kix_x1j4i7graejw-3>li[data-v-7ad93aa7]:before{content:\"\\25CF    \"}ol[data-v-7ad93aa7]{margin:0;padding:0}table td[data-v-7ad93aa7],table th[data-v-7ad93aa7]{padding:0}.c18[data-v-7ad93aa7]{background-color:#fff;color:#222;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:Arial;font-style:normal}.c4[data-v-7ad93aa7]{font-size:10pt}.c4[data-v-7ad93aa7],.c6[data-v-7ad93aa7]{color:#000;font-weight:400;text-decoration:none;vertical-align:baseline;font-family:Arial;font-style:normal}.c6[data-v-7ad93aa7]{font-size:14pt}.c0[data-v-7ad93aa7]{color:red;font-size:10pt}.c0[data-v-7ad93aa7],.c9[data-v-7ad93aa7]{font-weight:400;text-decoration:none;vertical-align:baseline;font-family:Arial;font-style:normal}.c9[data-v-7ad93aa7]{color:#000;font-size:11pt}.c15[data-v-7ad93aa7]{padding-top:16pt;padding-bottom:4pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:center}.c1[data-v-7ad93aa7]{text-align:left}.c1[data-v-7ad93aa7],.c10[data-v-7ad93aa7]{padding-top:0;padding-bottom:0;line-height:1.15;orphans:2;widows:2}.c10[data-v-7ad93aa7]{text-align:center}.c17[data-v-7ad93aa7]{color:#000;text-decoration:none;vertical-align:baseline;font-family:Arial;font-style:normal}.c19[data-v-7ad93aa7]{background-color:#fff;font-size:10.5pt;font-family:Roboto;color:#3c4043;font-weight:400}.c11[data-v-7ad93aa7]{text-decoration-skip-ink:none;-webkit-text-decoration-skip:none;color:#15c;text-decoration:underline}.c12[data-v-7ad93aa7]{background-color:#fff;max-width:468pt;padding:72pt}.c5[data-v-7ad93aa7]{margin-left:18pt;padding-left:0}.c16[data-v-7ad93aa7]{color:inherit;text-decoration:inherit}.c2[data-v-7ad93aa7]{font-size:10pt;font-weight:700}.c3[data-v-7ad93aa7]{padding:0;margin:0}.c7[data-v-7ad93aa7]{font-size:10pt}.c8[data-v-7ad93aa7]{height:11pt}.c13[data-v-7ad93aa7]{margin-left:18pt}.c14[data-v-7ad93aa7]{margin-left:36pt}.title[data-v-7ad93aa7]{color:#000;font-size:26pt;padding-bottom:3pt}.subtitle[data-v-7ad93aa7],.title[data-v-7ad93aa7]{padding-top:0;font-family:Arial;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle[data-v-7ad93aa7]{color:#666;font-size:15pt;padding-bottom:16pt}li[data-v-7ad93aa7],p[data-v-7ad93aa7]{color:#000;font-size:11pt;font-family:Arial}p[data-v-7ad93aa7]{margin:0}h1[data-v-7ad93aa7]{padding-top:20pt;font-size:20pt}h1[data-v-7ad93aa7],h2[data-v-7ad93aa7]{color:#000;padding-bottom:6pt;font-family:Arial;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2[data-v-7ad93aa7]{padding-top:18pt;font-size:16pt}h3[data-v-7ad93aa7]{padding-top:16pt;color:#000;font-size:14pt;padding-bottom:4pt;font-family:Arial;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:center}h4[data-v-7ad93aa7]{padding-top:14pt;font-size:12pt}h4[data-v-7ad93aa7],h5[data-v-7ad93aa7]{color:#666;padding-bottom:4pt;font-family:Arial;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5[data-v-7ad93aa7],h6[data-v-7ad93aa7]{padding-top:12pt;font-size:11pt}h6[data-v-7ad93aa7]{color:#666;padding-bottom:4pt;font-family:Arial;line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}", ""]);

// exports


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"componentCont"},[_c('div',{staticClass:"jumbotron"},[_c('h1',[_vm._v("Resumé")]),_vm._v(" "),_c('hr',{staticClass:"my-4"}),_vm._v(" "),_c('div',{staticStyle:{"background-color":"white","padding":"20px"}},[_c('p',{staticClass:"c1 c8"},[_c('span',{staticClass:"c9"})]),_c('p',{staticClass:"c1"},[_c('span',{staticClass:"c19"},[_vm._v("A new Software Engineer (formerly Materials Engineer with 6 years of industry experience) looking to join a Front End of Full Stack team as a junior developer.")])]),_c('hr'),_c('p',{staticClass:"c1 c8"},[_c('span',{staticClass:"c4"})]),_c('h3',{staticClass:"c15",attrs:{"id":"h.hwawjup5t6h5"}},[_c('span',{staticClass:"c6"},[_vm._v("Technical Qualifications")])]),_c('ul',{staticClass:"c3 lst-kix_kzcswdo3kqyg-0 start"},[_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("Graduate Certificate in Software Design and Development from UW Bothell. ")])]),_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c7"},[_vm._v("Completed projects in")]),_c('span',{staticClass:"c7"},[_vm._v(" JavaScript, VueJS, React, Firebase WS, C++, Python, and Java.")])]),_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c7"},[_vm._v("As a Materials Engineer worked in multi-disciplinary, agile teams in aerospace manufacturing.  Wrote documentation and specifications for manufacturing.  Worked ")]),_c('span',{staticClass:"c7"},[_vm._v("directly")]),_c('span',{staticClass:"c4"},[_vm._v(" with customers to reduce cost and improve manufacturing methodologies.")])]),_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("As a Nuclear Mechanic in the US Navy, supervised nuclear propulsion teams during wartime, ensured continuous operation of mission critical equipment and maintained safety protocols.")])])]),_c('h3',{staticClass:"c15",attrs:{"id":"h.lcb5d27j4c1g"}},[_c('span',{staticClass:"c6"},[_vm._v("Software Projects")])]),_c('ul',{staticClass:"c3 lst-kix_6qifmjwecg1p-0 start"},[_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c2"},[_vm._v("Brownie Points WebApp")]),_c('span',[_vm._v(" ")]),_c('span',{staticClass:"c11 c7"},[_c('a',{staticClass:"c16",attrs:{"href":"https://www.google.com/url?q=https://torothin.github.io/browniepoints/&sa=D&ust=1570310751715000"}},[_vm._v("Link")])]),_c('span',{staticClass:"c4"},[_vm._v(" ( 2018 - 2019 )")])])]),_c('p',{staticClass:"c1 c13"},[_c('span',{staticClass:"c4"},[_vm._v("Designed and implemented a web app that allows users to track daily, weekly, and monthly goals, with a gamification twist. By completing the goals, the user gains experience points, levels up and earns rewards. Iterated through several versions: v1 in plain JavaScript, BootStrap, LocalStorage and deployed via Github Pages; v2 rewrite in VueJS and added Firebase authentication and NoSQL db; v3 (in progress) rewrite using React and Redux.")])]),_c('ul',{staticClass:"c3 lst-kix_6qifmjwecg1p-0"},[_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c2"},[_vm._v("E-Commerce Website")]),_c('span',{staticClass:"c7"},[_vm._v(" ")]),_c('span',{staticClass:"c7 c11"},[_c('a',{staticClass:"c16",attrs:{"href":"https://www.google.com/url?q=https://torothin.github.io/crwn-clothing/&sa=D&ust=1570310751715000"}},[_vm._v("Link")])]),_c('span',{staticClass:"c4"},[_vm._v("  ( 2019 )")])])]),_c('p',{staticClass:"c1 c13"},[_c('span',{staticClass:"c4"},[_vm._v("(In Progress) Building a React e-commerce app utilizing Redux, Reselect, Router, Firebase NoSQL database and authentication.  Deployed using GitHub Pages and adding Stripe payment processing functionality.  App is part of the “Complete React Developer” course on Udemy.com.")])]),_c('ul',{staticClass:"c3 lst-kix_6qifmjwecg1p-0"},[_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c2"},[_vm._v("Shadow-Boxing")]),_c('span',{staticClass:"c2"},[_vm._v(" WebApp")]),_c('span',[_vm._v(" ")]),_c('span',{staticClass:"c11 c7"},[_c('a',{staticClass:"c16",attrs:{"href":"https://www.google.com/url?q=https://torothin.github.io/torothin.boxing.github.io/&sa=D&ust=1570310751716000"}},[_vm._v("Link")])]),_c('span',{staticClass:"c4"},[_vm._v("  ( 2018 )")])])]),_c('p',{staticClass:"c1 c13"},[_c('span',{staticClass:"c4"},[_vm._v("Created a web app for vocalizing random kick-boxing combinations to help Muay Thai training. Used Bootstrap, CSS, HTML and JavaScript.  Users have options to adjust timer length, combination length, frequency, and include pre-made combinations.  Requested and incorporated feedback from three early users.")])]),_c('h3',{staticClass:"c15",attrs:{"id":"h.pj00lvm7565n"}},[_c('span',{staticClass:"c6"},[_vm._v("Education")])]),_c('p',{staticClass:"c1"},[_c('span',{staticClass:"c2"},[_vm._v("University of Washington")]),_c('span',{staticClass:"c4"},[_vm._v("                        Bothell, WA                                 [  2017 - 2018  ]")])]),_c('ul',{staticClass:"c3 lst-kix_x1j4i7graejw-0 start"},[_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("Graduate Certificate in Software Design and Development, GPA: 3.5/4.0")])]),_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("CS fundamentals: data structures and algorithms, systems programming, and software engineering life cycle and modeling.")])])]),_c('p',{staticClass:"c10"},[_c('span',{staticClass:"c4"},[_vm._v("           Class Projects, C++ ")])]),_c('ul',{staticClass:"c3 lst-kix_x1j4i7graejw-0"},[_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("OOP Group Project: Worked with a partner to design and develop an inventory tracking system using BST for quick sorting and storage of media inventory.  Used hash tables to store and quickly access customer data.  Designed a class hierarchy to make the inventory extensible for many media types and genres. Used hash tables to store and quickly access customer data. Used a manager class to manipulate inventory and customer objects.")])]),_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("Multithreading, Sleeping Barber Problem: Transformed a single process, single thread sleeping barber problem code sample into a multiple thread, multiple barber simulation. Used pthreads and asynchronous communication to implement multiple barbers with no memory leaks and no deadlocks.")])])]),_c('p',{staticClass:"c1 c8"},[_c('span',{staticClass:"c4"})]),_c('p',{staticClass:"c1"},[_c('span',{staticClass:"c2"},[_vm._v("University of Washington")]),_c('span',{staticClass:"c4"},[_vm._v("                        Seattle, WA                                 [  2009 - 2011  ]")])]),_c('ul',{staticClass:"c3 lst-kix_midwv9t781tv-0 start"},[_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c7"},[_vm._v("Bachelor of Science Material Science and Engineering")])])]),_c('h3',{staticClass:"c15",attrs:{"id":"h.qr91jmw3gt8w"}},[_c('span',[_vm._v("Work Experience")])]),_c('p',{staticClass:"c1 c8"},[_c('span',{staticClass:"c9"})]),_c('p',{staticClass:"c1"},[_c('span',{staticClass:"c2"},[_vm._v("B/E Aerospace ALCI")]),_c('span',{staticClass:"c4"},[_vm._v("                                Everett, WA                                 [  2015 - 2016  ]")])]),_c('p',{staticClass:"c1"},[_c('span',{staticClass:"c4"},[_vm._v("Materials and Process Engineer")])]),_c('ul',{staticClass:"c3 lst-kix_7gap31uvo5l4-0 start"},[_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("Maintained and updated materials and process specifications with customer approvals.")])]),_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("Wrote a repair manual for minor repairs of plastic and composite materials meeting internal and external (FAA and Boeing) requirements saving upwards of $50,000 per lavatory for B/E")])]),_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("Led a team of engineers to replace a 3M hook and loop fire retardant product, on a short deadline, finding a suitable alternative which met FAA and customer requirements.")])])]),_c('p',{staticClass:"c1 c8"},[_c('span',{staticClass:"c2 c17"})]),_c('p',{staticClass:"c1"},[_c('span',{staticClass:"c2"},[_vm._v("Exotic Metals Forming Company")]),_c('span',{staticClass:"c4"},[_vm._v("                Kent, WA                                 [  2011 - 2015  ]")])]),_c('p',{staticClass:"c1"},[_c('span',{staticClass:"c4"},[_vm._v("Research Engineer I, II")])]),_c('ul',{staticClass:"c3 lst-kix_cf1zxfybmywq-0 start"},[_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("Analyzed and tested new titanium and nickel alloys to determine applicability for new product development.   ")])]),_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("Worked closely with suppliers to reduce cost, material weight, and boost ability to withstand increasing jet engine exhaust temperatures.")])]),_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("Collaborated with Finite Element Analysis software firms to determine the capability of FEA modeling and simulation of forming welded joints.")])])]),_c('p',{staticClass:"c1 c8 c14"},[_c('span',{staticClass:"c4"})]),_c('p',{staticClass:"c1"},[_c('span',{staticClass:"c2"},[_vm._v("Modumetal Inc.")]),_c('span',{staticClass:"c4"},[_vm._v("                                  Seattle, WA                                 [  2010 - 2011  ]")])]),_c('p',{staticClass:"c1"},[_c('span',{staticClass:"c4"},[_vm._v("Project Engineer Intern")])]),_c('ul',{staticClass:"c3 lst-kix_9fubixh9cul-0 start"},[_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("Discovered optimal surface treatment of steel substrates prior to Modumetal deposition which resulted in more robust process control.")])]),_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("Provided electrochemical cell computer models for several modeling software vendors.  Contributed to a key contract by modeling parts to predict electrodeposited coating thicknesses.")])])]),_c('p',{staticClass:"c1 c8 c14"},[_c('span',{staticClass:"c4"})]),_c('p',{staticClass:"c1"},[_c('span',{staticClass:"c2"},[_vm._v("United States Navy")]),_c('span',{staticClass:"c4"},[_vm._v("                                  Everett, WA                                 [  2000 - 2006  ]")])]),_c('p',{staticClass:"c1"},[_c('span',{staticClass:"c4"},[_vm._v("Nuclear Machinist Mate PO2 (E-5)")])]),_c('ul',{staticClass:"c3 lst-kix_9fubixh9cul-0"},[_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c4"},[_vm._v("\n            Supervised a team as lead enlisted supervisor, ensuring safe and continued operation of nuclear propulsion plant during war time operations such as “Operation Iraqi Freedom”.\n            ")])]),_c('li',{staticClass:"c1 c5"},[_c('span',{staticClass:"c7"},[_vm._v("Confidential security clearance.")])])])]),_vm._v(" "),_c('div',{staticClass:"linkCont"},[_c('a',{attrs:{"href":"src/assets/resume/Duvall_Resume_2019.pdf","download":"Brad Duvall's Resume"}},[_vm._v("Download Resumé")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('wsNavBar',{attrs:{"navData":_vm.navList}}),_vm._v(" "),_c('frontPage'),_vm._v(" "),_c('introPage',{attrs:{"id":"introPage"}}),_vm._v(" "),_c('workHistory',{attrs:{"id":"workHistory"}}),_vm._v(" "),_c('educationHistory',{attrs:{"id":"educationHistory"}}),_vm._v(" "),_c('resumeSection',{attrs:{"id":"resumeSection"}}),_vm._v(" "),_c('boxingSection',{attrs:{"id":"boxingSection"}}),_vm._v(" "),_c('brownieSection',{attrs:{"id":"brownieSection"}}),_vm._v(" "),_c('hobbiesSection',{attrs:{"id":"hobbiesSection"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
>>>>>>> Stashed changes
//# sourceMappingURL=build.js.map