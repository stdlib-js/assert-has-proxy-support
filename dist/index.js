"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var a=o(function(v,t){
var i=require('@stdlib/utils-eval/dist');function s(){var e;try{i('"use strict"; var handler = { "get": function get( t, n ) { return t[ n ] * 100; } }; var target = { "beep": 3.14 }; var p = new Proxy( target, handler ); var x = p.beep; if ( x !== 314 ) { throw new Error( "native Proxy is not supported." ); }'),e=!0}catch(r){e=!1}return e}t.exports=s
});var u=a();module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
