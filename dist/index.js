"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var q=l(function(D,y){
function b(e,r,a,u,c,n){var t,i,s,o,v;for(t=r.data,s=r.accessors[0],i=r.accessors[1],o=u,v=0;v<e;v++)i(t,o,c.call(n,s(t,o),v,o,r)),o+=a;return r}y.exports=b
});var f=l(function(E,d){
var j=require('@stdlib/array-base-arraylike2object/dist'),m=q();function O(e,r,a,u,c,n){var t,i,s;if(e<=0)return r;if(i=j(r),i.accessorProtocol)return m(e,i,a,u,c,n),i.data;for(t=u,s=0;s<e;s++)r[t]=c.call(n,r[t],s,t,r),t+=a;return r}d.exports=O
});var g=l(function(F,p){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=f();function k(e,r,a,u,c){return R(e,r,a,P(e,a),u,c)}p.exports=k
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=g(),z=f();w(B,"ndarray",z);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
