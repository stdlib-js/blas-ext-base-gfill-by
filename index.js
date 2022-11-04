// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function c(e,t){return e[t]}function f(e,t){return e.get(t)}function s(e,t,r){e[t]=r}function _(e,t,r){e.set(r,t)}function d(e){var t=Boolean(e.get&&e.set);return{data:e,accessors:t,getter:t?f:c,setter:t?_:s}}function p(e,t,r,n,o,a){var i,u,l,c,f;for(i=t.data,l=t.getter,u=t.setter,c=n,f=0;f<e;f++)u(i,c,o.call(a,l(i,c),f,c,t)),c+=r;return t}function y(e,t,r,n,o){var a,i,u;if(e<=0)return t;if(a=r<0?(1-e)*r:0,(i=d(t)).accessors)return p(e,i,r,a,n,o),i.data;for(u=0;u<e;u++)t[a]=n.call(o,t[a],u,a,t),a+=r;return t}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,s,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),s="get"in r,_="set"in r,f&&(s||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(e,t,r.get),_&&i&&i.call(e,t,r.set),e},e(y,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n,o,a){var i,u,l;if(e<=0)return t;if((u=d(t)).accessors)return p(e,u,r,n,o,a),u.data;for(i=n,l=0;l<e;l++)t[i]=o.call(a,t[i],l,i,t),i+=r;return t}}),y},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).gfillBy=t();
//# sourceMappingURL=index.js.map
