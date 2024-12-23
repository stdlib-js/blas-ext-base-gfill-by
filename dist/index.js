"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=l(function(D,y){
function j(e,r,t,c,s,i){var a,o,u,v,n;for(a=r.data,u=r.accessors[0],o=r.accessors[1],v=c,n=0;n<e;n++)o(a,v,s.call(i,u(a,v),n,v,r)),v+=t;return r}y.exports=j
});var p=l(function(E,q){
var P=require('@stdlib/array-base-arraylike2object/dist'),b=f();function m(e,r,t,c,s){var i,a,o;if(e<=0)return r;if(t<0?i=(1-e)*t:i=0,a=P(r),a.accessorProtocol)return b(e,a,t,i,c,s),a.data;for(o=0;o<e;o++)r[i]=c.call(s,r[i],o,i,r),i+=t;return r}q.exports=m
});var d=l(function(F,B){
var O=require('@stdlib/array-base-arraylike2object/dist'),R=f();function k(e,r,t,c,s,i){var a,o,u;if(e<=0)return r;if(o=O(r),o.accessorProtocol)return R(e,o,t,c,s,i),o.data;for(a=c,u=0;u<e;u++)r[a]=s.call(i,r[a],u,a,r),a+=t;return r}B.exports=k
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=p(),z=d();w(g,"ndarray",z);module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
