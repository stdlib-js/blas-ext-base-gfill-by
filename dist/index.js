"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=l(function(D,y){
function b(e,r,t,u,c,n){var a,i,s,o,v;for(a=r.data,s=r.accessors[0],i=r.accessors[1],o=u,v=0;v<e;v++)i(a,o,c.call(n,s(a,o),v,o,r)),o+=t;return r}y.exports=b
});var f=l(function(E,d){
var j=require('@stdlib/array-base-arraylike2object/dist'),m=q();function O(e,r,t,u,c,n){var a,i,s;if(e<=0)return r;if(i=j(r),i.accessorProtocol)return m(e,i,t,u,c,n),i.data;for(a=u,s=0;s<e;s++)r[a]=c.call(n,r[a],s,a,r),a+=t;return r}d.exports=O
});var g=l(function(F,p){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=f();function k(e,r,t,u,c){return R(e,r,t,P(e,t),u,c)}p.exports=k
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=g(),z=f();w(B,"ndarray",z);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
