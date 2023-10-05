"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=n(function(p,t){
var o=require('@stdlib/utils-eval/dist');function i(){var r;try{o('"use strict"; var handler = { "get": function get( t, n ) { return t[ n ] * 100; } }; var target = { "beep": 3.14 }; var p = new Proxy( target, handler ); var x = p.beep; if ( x !== 314 ) { throw new Error( "native Proxy is not supported." ); }'),r=!0}catch(e){r=!1}return r}t.exports=i
});var s=a();module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
