// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=y.call(n,p,"e+0$1"),n=y.call(n,h,"e-0$1"),r.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var _=String.fromCharCode,T=isNaN,x=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,l,c,s,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",c=1,s=0;s<r.length;s++)if(f(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,T(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function S(r){return"string"==typeof r}function B(r){var e,t,n;if(!S(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,F=C.toString,O=C.__defineGetter__,M=C.__defineSetter__,P=C.__lookupGetter__,U=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,e)||U.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r};var N=I;function Y(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function $(r){var e=W[r];return"function"==typeof e?e:W.default}var G={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function Z(r){var e=G[r];return"function"==typeof e?e:G.default}var X={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function J(r){var e=X[r];return"function"==typeof e?e:X.default}var z={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function q(r){var e=z[r];return"function"==typeof e?e:z.default}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return D&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;function rr(r,e){return null!=r&&Q.call(r,e)}var er="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof er?er.toStringTag:"";var nr=H()?function(r){var e,t,n;if(null==r)return K.call(r);t=r[tr],e=rr(r,tr);try{r[tr]=void 0}catch(e){return K.call(r)}return n=K.call(r),e?r[tr]=t:delete r[tr],n}:function(r){return K.call(r)};var ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===nr(r)};function or(r){return null!==r&&"object"==typeof r}function ar(r){return or(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function ur(){return/^\s*function\s*([^(]*)/i}Y(or,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ir(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(or));var fr=/^\s*function\s*([^(]*)/i;function lr(r){var e,t,n;if(("Object"===(t=nr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return ar(r)?"Buffer":t}Y(ur,"REGEXP",fr);var cr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},sr="function"==typeof Float64Array;var yr="function"==typeof Float64Array?Float64Array:null;var pr="function"==typeof Float64Array?Float64Array:void 0;var hr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr([1,3.14,-3.14,NaN]),t=e,r=(sr&&t instanceof Float64Array||"[object Float64Array]"===nr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")},gr="function"==typeof Float32Array;var mr=Number.POSITIVE_INFINITY,wr="function"==typeof Float32Array?Float32Array:null;var br="function"==typeof Float32Array?Float32Array:void 0;var vr=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,5e40]),t=e,r=(gr&&t instanceof Float32Array||"[object Float32Array]"===nr(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===mr}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")},dr="function"==typeof Uint32Array;var Er="function"==typeof Uint32Array?Uint32Array:null;var Ar="function"==typeof Uint32Array?Uint32Array:void 0;var _r=function(){var r,e,t;if("function"!=typeof Er)return!1;try{e=new Er(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(dr&&t instanceof Uint32Array||"[object Uint32Array]"===nr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")},Tr="function"==typeof Int32Array;var xr="function"==typeof Int32Array?Int32Array:null;var jr="function"==typeof Int32Array?Int32Array:void 0;var kr=function(){var r,e,t;if("function"!=typeof xr)return!1;try{e=new xr([1,3.14,-3.14,2147483648]),t=e,r=(Tr&&t instanceof Int32Array||"[object Int32Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")},Vr="function"==typeof Uint16Array;var Lr="function"==typeof Uint16Array?Uint16Array:null;var Rr="function"==typeof Uint16Array?Uint16Array:void 0;var Sr=function(){var r,e,t;if("function"!=typeof Lr)return!1;try{e=new Lr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Vr&&t instanceof Uint16Array||"[object Uint16Array]"===nr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Rr:function(){throw new Error("not implemented")},Br="function"==typeof Int16Array;var Ir="function"==typeof Int16Array?Int16Array:null;var Cr="function"==typeof Int16Array?Int16Array:void 0;var Fr=function(){var r,e,t;if("function"!=typeof Ir)return!1;try{e=new Ir([1,3.14,-3.14,32768]),t=e,r=(Br&&t instanceof Int16Array||"[object Int16Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Cr:function(){throw new Error("not implemented")},Or="function"==typeof Uint8Array;var Mr="function"==typeof Uint8Array?Uint8Array:null;var Pr="function"==typeof Uint8Array?Uint8Array:void 0;var Ur=function(){var r,e,t;if("function"!=typeof Mr)return!1;try{e=new Mr(e=[1,3.14,-3.14,256,257]),t=e,r=(Or&&t instanceof Uint8Array||"[object Uint8Array]"===nr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Pr:function(){throw new Error("not implemented")},Nr="function"==typeof Uint8ClampedArray;var Yr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Wr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var $r=function(){var r,e,t;if("function"!=typeof Yr)return!1;try{e=new Yr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Nr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===nr(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Wr:function(){throw new Error("not implemented")},Gr="function"==typeof Int8Array;var Zr="function"==typeof Int8Array?Int8Array:null;var Xr="function"==typeof Int8Array?Int8Array:void 0;var Jr=function(){var r,e,t;if("function"!=typeof Zr)return!1;try{e=new Zr([1,3.14,-3.14,128]),t=e,r=(Gr&&t instanceof Int8Array||"[object Int8Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};function zr(r){return"number"==typeof r}var qr=Number,Dr=qr.prototype.toString;var Hr=H();function Kr(r){return"object"==typeof r&&(r instanceof qr||(Hr?function(r){try{return Dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===nr(r)))}function Qr(r){return zr(r)||Kr(r)}Y(Qr,"isPrimitive",zr),Y(Qr,"isObject",Kr);var re=qr.NEGATIVE_INFINITY,ee=Math.floor;function te(r){return ee(r)===r}function ne(r){return r<mr&&r>re&&te(r)}function ie(r){return zr(r)&&ne(r)}function oe(r){return Kr(r)&&ne(r.valueOf())}function ae(r){return ie(r)||oe(r)}function ue(r){return ie(r)&&r>=0}function fe(r){return oe(r)&&r.valueOf()>=0}function le(r){return ue(r)||fe(r)}Y(ae,"isPrimitive",ie),Y(ae,"isObject",oe),Y(le,"isPrimitive",ue),Y(le,"isObject",fe);function ce(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&te(r.length)&&r.length>=0&&r.length<=4294967295}function se(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&te(r.length)&&r.length>=0&&r.length<=9007199254740991}var ye="function"==typeof ArrayBuffer;function pe(r){return ye&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===nr(r)}function he(r){return"object"==typeof r&&null!==r&&!ir(r)}var ge=/./;function me(r){return"boolean"==typeof r}var we=Boolean,be=Boolean.prototype.toString;var ve=H();function de(r){return"object"==typeof r&&(r instanceof we||(ve?function(r){try{return be.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===nr(r)))}function Ee(r){return me(r)||de(r)}function Ae(){return new Function("return this;")()}Y(Ee,"isPrimitive",me),Y(Ee,"isObject",de);var _e="object"==typeof self?self:null,Te="object"==typeof window?window:null,xe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},je="object"==typeof xe?xe:null,ke="object"==typeof globalThis?globalThis:null;var Ve=function(r){if(arguments.length){if(!me(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ae()}if(ke)return ke;if(_e)return _e;if(Te)return Te;if(je)return je;throw new Error("unexpected error. Unable to resolve global object.")}(),Le=Ve.document&&Ve.document.childNodes,Re=Int8Array;var Se="function"==typeof ge||"object"==typeof Re||"function"==typeof Le?function(r){return lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?lr(r).toLowerCase():e};function Be(r){return"function"===Se(r)}function Ie(r,e){if(!(this instanceof Ie))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!zr(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!zr(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Y(Ie,"BYTES_PER_ELEMENT",8),Y(Ie.prototype,"BYTES_PER_ELEMENT",8),Y(Ie.prototype,"byteLength",16),Y(Ie.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Ie.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Ce="function"==typeof Math.fround?Math.fround:null,Fe=new vr(1);var Oe="function"==typeof Ce?Ce:function(r){return Fe[0]=r,Fe[0]};function Me(r,e){if(!(this instanceof Me))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!zr(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!zr(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Oe(r)}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Oe(e)}),this}function Pe(r){return r instanceof Ie||r instanceof Me||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Ue(r){return te(r/2)}function Ne(){return"function"==typeof er&&"symbol"==typeof er("foo")&&rr(er,"iterator")&&"symbol"==typeof er.iterator}Y(Me,"BYTES_PER_ELEMENT",4),Y(Me.prototype,"BYTES_PER_ELEMENT",4),Y(Me.prototype,"byteLength",8),Y(Me.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Me.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Ye=Ne()?Symbol.iterator:null;function We(r,e,t){N(r,e,{configurable:!1,enumerable:!1,get:t})}function $e(r){return r.re}function Ge(r){return r.im}function Ze(r,e){return new vr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Xe(r,e){return new hr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Je(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ce(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Pe(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push($e(n),Ge(n))}return e}function ze(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ce(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Pe(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push($e(o),Ge(o))}return n}function qe(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Pe(n=e[i]))return null;r[o]=$e(n),r[o+1]=Ge(n),o+=2}return r}var De=2*vr.BYTES_PER_ELEMENT,He=Ne();function Ke(r){return r instanceof tt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Qe(r){return r===tt||"Complex128Array"===r.name}function rt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===De}function et(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*De}function tt(){var r,e,t,n;if(e=arguments.length,!(this instanceof tt))return 0===e?new tt:1===e?new tt(arguments[0]):2===e?new tt(arguments[0],arguments[1]):new tt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new vr(0);else if(1===e)if(ue(arguments[0]))t=new vr(2*arguments[0]);else if(se(arguments[0]))if((n=(t=arguments[0]).length)&&ir(t)&&Pe(t[0])){if(null===(t=qe(new vr(2*n),t))){if(!Ue(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new vr(arguments[0])}}else{if(rt(t))t=Ze(t,0);else if(et(t))t=Xe(t,0);else if(!Ue(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new vr(t)}else if(pe(arguments[0])){if(!te((t=arguments[0]).byteLength/De))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",De,t.byteLength));t=new vr(t)}else{if(!he(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===He)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Be(t[Ye]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Be((t=t[Ye]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Je(t))instanceof Error)throw t;t=new vr(t)}else{if(!pe(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ue(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!te(r/De))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",De,r));if(2===e){if(!te((n=t.byteLength-r)/De))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",De,n));t=new vr(t,r)}else{if(!ue(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*De>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*De));t=new vr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function nt(r){return r.re}function it(r){return r.im}function ot(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ce(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Pe(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(nt(n),it(n))}return e}function at(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ce(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Pe(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(nt(o),it(o))}return n}function ut(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Pe(n=e[i]))return null;r[o]=nt(n),r[o+1]=it(n),o+=2}return r}Y(tt,"BYTES_PER_ELEMENT",De),Y(tt,"name","Complex64Array"),Y(tt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Be(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(Ke(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Pe(c=n.call(e,r.get(s),s)))o[y]=$e(c),o[y+1]=Ge(c);else{if(!(ce(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(se(r)){if(n){for(f=r.length,u=r.get&&r.set?J("default"):$("default"),s=0;s<f;s++)if(!Pe(u(r,s))){l=!0;break}if(l){if(!Ue(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Pe(c=n.call(e,u(r,s),s)))o[y]=$e(c),o[y+1]=Ge(c);else{if(!(ce(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(he(r)&&He&&Be(r[Ye])){if(!Be((o=r[Ye]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?ze(o,n,e):Je(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(tt,"of",(function(){var r,e;if(!Be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),We(tt.prototype,"buffer",(function(){return this._buffer.buffer})),We(tt.prototype,"byteLength",(function(){return this._buffer.byteLength})),We(tt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(tt.prototype,"BYTES_PER_ELEMENT",tt.BYTES_PER_ELEMENT),Y(tt.prototype,"copyWithin",(function(r,e){if(!Ke(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(tt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!Ke(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Me(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ye&&Y(t,Ye,(function(){return e.entries()})),t})),Y(tt.prototype,"get",(function(r){var e;if(!Ke(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ue(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Me((e=this._buffer)[r*=2],e[r+1])})),We(tt.prototype,"length",(function(){return this._length})),Y(tt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!Ke(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ue(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Pe(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=$e(r),void(n[t+1]=Ge(r))}if(Ke(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*De,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new vr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!se(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Pe(r[f])){o=!0;break}if(o){if(!Ue(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*De,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new vr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=$e(u),n[t+1]=Ge(u),t+=2}}));var ft=2*hr.BYTES_PER_ELEMENT,lt=Ne();function ct(r){return r instanceof ht||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function st(r){return r===ht||"Complex64Array"===r.name}function yt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ft/2}function pt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ft}function ht(){var r,e,t,n;if(e=arguments.length,!(this instanceof ht))return 0===e?new ht:1===e?new ht(arguments[0]):2===e?new ht(arguments[0],arguments[1]):new ht(arguments[0],arguments[1],arguments[2]);if(0===e)t=new hr(0);else if(1===e)if(ue(arguments[0]))t=new hr(2*arguments[0]);else if(se(arguments[0]))if((n=(t=arguments[0]).length)&&ir(t)&&Pe(t[0])){if(null===(t=ut(new hr(2*n),t))){if(!Ue(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new hr(arguments[0])}}else{if(yt(t))t=Ze(t,0);else if(pt(t))t=Xe(t,0);else if(!Ue(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new hr(t)}else if(pe(arguments[0])){if(!te((t=arguments[0]).byteLength/ft))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ft,t.byteLength));t=new hr(t)}else{if(!he(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===lt)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Be(t[Ye]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Be((t=t[Ye]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=ot(t))instanceof Error)throw t;t=new hr(t)}else{if(!pe(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ue(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!te(r/ft))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ft,r));if(2===e){if(!te((n=t.byteLength-r)/ft))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ft,n));t=new hr(t,r)}else{if(!ue(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ft>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ft));t=new hr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(ht,"BYTES_PER_ELEMENT",ft),Y(ht,"name","Complex128Array"),Y(ht,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Be(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ct(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Pe(c=n.call(e,r.get(s),s)))o[y]=nt(c),o[y+1]=it(c);else{if(!(ce(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(se(r)){if(n){for(f=r.length,u=r.get&&r.set?J("default"):$("default"),s=0;s<f;s++)if(!Pe(u(r,s))){l=!0;break}if(l){if(!Ue(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Pe(c=n.call(e,u(r,s),s)))o[y]=nt(c),o[y+1]=it(c);else{if(!(ce(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(he(r)&&lt&&Be(r[Ye])){if(!Be((o=r[Ye]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?at(o,n,e):ot(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(ht,"of",(function(){var r,e;if(!Be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),We(ht.prototype,"buffer",(function(){return this._buffer.buffer})),We(ht.prototype,"byteLength",(function(){return this._buffer.byteLength})),We(ht.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(ht.prototype,"BYTES_PER_ELEMENT",ht.BYTES_PER_ELEMENT),Y(ht.prototype,"copyWithin",(function(r,e){if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(ht.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ie(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ye&&Y(t,Ye,(function(){return e.entries()})),t})),Y(ht.prototype,"get",(function(r){var e;if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ue(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ie((e=this._buffer)[r*=2],e[r+1])})),We(ht.prototype,"length",(function(){return this._length})),Y(ht.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ue(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Pe(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=nt(r),void(n[t+1]=it(r))}if(ct(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*ft,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new hr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!se(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Pe(r[f])){o=!0;break}if(o){if(!Ue(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*ft,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new hr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=nt(u),n[t+1]=it(u),t+=2}}));var gt=[hr,vr,kr,_r,Fr,Sr,Jr,Ur,$r,tt,ht],mt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],wt=mt.length;function bt(r){var e,t=function(r){var e;if(ir(r))return"generic";if(ar(r))return null;for(e=0;e<wt;e++)if(r instanceof gt[e])return mt[e];return cr[lr(r)]||null}(r);return"function"==typeof(e=r).get&&"function"==typeof e.set?{accessorProtocol:!0,accessors:[J(t),q(t)]}:{accessorProtocol:!1,accessors:[$(t),Z(t)]}}function vt(r){var e=bt(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}function dt(r,e,t,n,i,o){var a,u,f,l,c;for(a=e.data,f=e.accessors[0],u=e.accessors[1],l=n,c=0;c<r;c++)u(a,l,i.call(o,f(a,l),c,l,e)),l+=t;return e}function Et(r,e,t,n,i){var o,a,u;if(r<=0)return e;if(o=t<0?(1-r)*t:0,(a=vt(e)).accessorProtocol)return dt(r,a,t,o,n,i),a.data;for(u=0;u<r;u++)e[o]=n.call(i,e[o],u,o,e),o+=t;return e}function At(r,e,t,n,i,o){var a,u,f;if(r<=0)return e;if((u=vt(e)).accessorProtocol)return dt(r,u,t,n,i,o),u.data;for(a=n,f=0;f<r;f++)e[a]=i.call(o,e[a],f,a,e),a+=t;return e}Y(Et,"ndarray",At);export{Et as default,At as ndarray};
//# sourceMappingURL=mod.js.map
