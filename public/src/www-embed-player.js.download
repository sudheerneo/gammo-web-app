(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function p(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
p("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
p("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=q(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ha(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ha(d,e)&&(a[e]=d[e])}return a};
p("Object.assign",function(a){return a||ia});
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ja(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
function r(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.aa=b.prototype}
function qa(){this.D=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.m=0;this.A=this.j=null}
function ra(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
qa.prototype.u=function(a){this.i=a};
function ta(a,b){a.j={vb:b,zb:!0};a.h=a.m||a.o}
qa.prototype.return=function(a){this.j={return:a};this.h=this.o};
function u(a,b,c){a.h=c;return{value:b}}
qa.prototype.s=function(a){this.h=a};
function ua(a,b,c){a.m=b;void 0!=c&&(a.o=c)}
function va(a,b){a.h=b;a.m=0}
function xa(a){a.m=0;var b=a.j.vb;a.j=null;return b}
function ya(a){a.A=[a.j];a.m=0;a.o=0}
function za(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.zb?a.h=a.m||a.o:void 0!=b.s&&a.o<b.s?(a.h=b.s,a.j=null):a.h=a.o:a.h=0}
function Aa(a){this.h=new qa;this.i=a}
function Ba(a,b){ra(a.h);var c=a.h.l;if(c)return Ca(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Da(a)}
function Ca(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.D=!1,e;var f=e.value}catch(g){return a.h.l=null,ta(a.h,g),Da(a)}a.h.l=null;d.call(a.h,f);return Da(a)}
function Da(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.D=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ta(a.h,c)}a.h.D=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.zb)throw b.vb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ea(a){this.next=function(b){ra(a.h);a.h.l?b=Ca(a,a.h.l.next,b,a.h.u):(a.h.u(b),b=Da(a));return b};
this.throw=function(b){ra(a.h);a.h.l?b=Ca(a,a.h.l["throw"],b,a.h.u):(ta(a.h,b),b=Da(a));return b};
this.return=function(b){return Ba(a,b)};
this[Symbol.iterator]=function(){return this}}
function Fa(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Fa(new Ea(new Aa(a)))}
function Ga(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
p("Reflect",function(a){return a?a:{}});
p("Reflect.construct",function(){return ka});
p("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
p("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.D=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(n){k||(k=!0,m.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.S),reject:g(this.o)}};
b.prototype.S=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ga(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.L(g):this.m(g)}};
b.prototype.L=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.qa(h,g):this.m(g)};
b.prototype.o=function(g){this.u(2,g)};
b.prototype.m=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Z();this.A()};
b.prototype.Z=function(){var g=this;e(function(){if(g.K()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.K=function(){if(this.D)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ga=function(g){var h=this.l();g.Ka(h.resolve,h.reject)};
b.prototype.qa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(z,v){return"function"==typeof z?function(C){try{m(z(C))}catch(D){n(D)}}:v}
var m,n,t=new b(function(z,v){m=z;n=v});
this.Ka(k(g,m),k(h,n));return t};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ka=function(g,h){function k(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(k):this.i.push(k);this.D=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=q(g),n=m.next();!n.done;n=m.next())d(n.value).Ka(h,k)})};
b.all=function(g){var h=q(g),k=h.next();return k.done?d([]):new b(function(m,n){function t(C){return function(D){z[C]=D;v--;0==v&&m(z)}}
var z=[],v=0;do z.push(void 0),v++,d(k.value).Ka(t(z.length-1),n),k=h.next();while(!k.done)})};
return b});
p("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=q(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ha(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),n=new a([[k,2],[m,3]]);if(2!=n.get(k)||3!=n.get(m))return!1;n.delete(k);n.set(m,4);return!n.has(k)&&4==n.get(m)}catch(t){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ha(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=m;return this};
b.prototype.get=function(k){return d(k)&&ha(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.h)?delete k[g][this.h]:!1};
return b});
p("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.h;return ea(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var n=h.data_[m];if(n&&ha(h.data_,m))for(h=0;h<n.length;h++){var t=n[h];if(k!==k&&t.key!==t.key||k===t.key)return{id:m,list:n,index:h,entry:t}}return{id:m,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=q(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(q([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),n=m.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(t){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
p("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
p("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
p("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
p("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
p("Object.setPrototypeOf",function(a){return a||pa});
p("Set",function(a){function b(c){this.h=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
p("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push([d,b[d]]);return c}});
p("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
p("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
p("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
p("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
p("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
p("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
p("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
p("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
p("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push(b[d]);return c}});
var x=this||self;function y(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function A(a,b){a=a.split(".");b=b||x;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ja(){}
function Ka(a){a.ma=void 0;a.getInstance=function(){return a.ma?a.ma:a.ma=new a}}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Oa(a){return Object.prototype.hasOwnProperty.call(a,Pa)&&a[Pa]||(a[Pa]=++Qa)}
var Pa="closure_uid_"+(1E9*Math.random()>>>0),Qa=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ua=Sa:Ua=Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(a,b){y(a,b,void 0)}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.oo=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Ob=b)}
Xa($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function qb(){var a=B("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;function xb(){if(void 0===wb){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){x.console&&x.console.error(c.message)}wb=a}else wb=a}return wb}
;function yb(a,b){this.j=a===zb&&b||""}
yb.prototype.i=!0;yb.prototype.h=function(){return this.j};
function Ab(a){return new yb(zb,a)}
var zb={};Ab("");var Bb={};function Cb(a){this.j=Bb===Bb?a:"";this.i=!0}
Cb.prototype.h=function(){return this.j.toString()};
Cb.prototype.toString=function(){return this.j.toString()};function Db(a,b){this.j=b===Eb?a:""}
Db.prototype.i=!0;Db.prototype.h=function(){return this.j.toString()};
Db.prototype.toString=function(){return this.j+""};
function Fb(a){if(a instanceof Db&&a.constructor===Db)return a.j;La(a);return"type_error:TrustedResourceUrl"}
var Eb={};function Gb(a){var b=xb();a=b?b.createScriptURL(a):a;return new Db(a,Eb)}
;var Hb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Ib(a,b){this.j=b===Jb?a:""}
Ib.prototype.i=!0;Ib.prototype.h=function(){return this.j.toString()};
Ib.prototype.toString=function(){return this.j.toString()};
function Kb(a){if(a instanceof Ib&&a.constructor===Ib)return a.j;La(a);return"type_error:SafeUrl"}
var Lb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Jb={};function Mb(){var a=x.navigator;return a&&(a=a.userAgent)?a:""}
function E(a){return-1!=Mb().indexOf(a)}
;function Nb(){return(E("Chrome")||E("CriOS"))&&!E("Edge")||E("Silk")}
;var Ob={};function Pb(a){this.j=Ob===Ob?a:"";this.i=!0}
Pb.prototype.h=function(){return this.j.toString()};
Pb.prototype.toString=function(){return this.j.toString()};function Qb(a,b){b instanceof Ib||b instanceof Ib||(b="object"==typeof b&&b.i?b.h():String(b),Lb.test(b)||(b="about:invalid#zClosurez"),b=new Ib(b,Jb));a.href=Kb(b)}
function Rb(a,b){a.rel="stylesheet";a.href=Fb(b).toString();(b=Sb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Tb(){return Sb("script[nonce]",void 0)}
var Ub=/^[\w+/_-]+[=]{0,2}$/;function Sb(a,b){b=(b||x).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Ub.test(a)?a:"":""}
;function Vb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Wb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xb(a){return a?decodeURI(a):a}
function Yb(a){return Xb(a.match(Wb)[3]||null)}
function Zb(a){var b=a.match(Wb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function $b(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)$b(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ac(a){var b=[],c;for(c in a)$b(c,a[c],b);return b.join("&")}
function bc(a,b){b=ac(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var cc=/#|$/;function dc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function ec(a){ec[" "](a);return a}
ec[" "]=Ja;var fc=E("Opera"),gc=E("Trident")||E("MSIE"),hc=E("Edge"),ic=E("Gecko")&&!(-1!=Mb().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),jc=-1!=Mb().toLowerCase().indexOf("webkit")&&!E("Edge"),kc=E("Android");function lc(){var a=x.document;return a?a.documentMode:void 0}
var mc;a:{var nc="",oc=function(){var a=Mb();if(ic)return/rv:([^\);]+)(\)|;)/.exec(a);if(hc)return/Edge\/([\d\.]+)/.exec(a);if(gc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jc)return/WebKit\/(\S+)/.exec(a);if(fc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
oc&&(nc=oc?oc[1]:"");if(gc){var pc=lc();if(null!=pc&&pc>parseFloat(nc)){mc=String(pc);break a}}mc=nc}var qc=mc,rc;if(x.document&&gc){var sc=lc();rc=sc?sc:parseInt(qc,10)||void 0}else rc=void 0;var tc=rc;var uc=dc()||E("iPod"),vc=E("iPad");!E("Android")||Nb();Nb();var wc=E("Safari")&&!(Nb()||E("Coast")||E("Opera")||E("Edge")||E("Edg/")||E("OPR")||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(dc()||E("iPad")||E("iPod"));var xc={},yc=null;
function zc(a,b){Ma(a);void 0===b&&(b=0);if(!yc){yc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));xc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===yc[h]&&(yc[h]=g)}}}b=xc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Ac="function"===typeof Uint8Array;var Bc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Cc(a){Object.isFrozen(a)||(Bc?a[Bc]|=1:void 0!==a.h?a.h|=1:Object.defineProperties(a,{h:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a}
;function Dc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Ec,Fc=Object.freeze(Cc([])),Gc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Hc(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.N[b+a.j]}
function G(a,b,c,d){b<a.l&&(void 0===d||!d)?a.N[b+a.j]=c:(a.i||(a.i=a.N[a.l+a.j]={}))[b]=c;return a}
function Ic(a,b,c){c=void 0===c?!1:c;var d=Hc(a,b,c);null==d&&(d=Fc);d===Fc&&(d=Cc(d.slice()),G(a,b,d,c));return d}
function Jc(a,b,c,d){(c=Kc(a,c))&&c!==b&&null!=d&&(a.h&&c in a.h&&(a.h[c]=void 0),G(a,c,void 0));return G(a,b,d)}
function Kc(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Hc(a,e)&&(0!==c&&G(a,c,void 0,!1),c=e)}return c}
function Lc(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=Hc(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);return a.h[c]=b}
function Mc(a,b,c,d){a.h||(a.h={});var e=a.h[c];if(!e){d=Ic(a,c,void 0===d?!1:d);e=[];for(var f=0;f<d.length;f++)e[f]=new b(d[f]);a.h[c]=e}return e}
function H(a,b,c,d){a.h||(a.h={});var e=c?c.N:c;a.h[b]=c;return G(a,b,e,void 0===d?!1:d)}
function Nc(a,b,c){var d=Oc;a.h||(a.h={});var e=c?c.N:c;a.h[b]=c;Jc(a,b,d,e)}
function Pc(a,b,c,d){var e=Mc(a,c,b,void 0===e?!1:e);c=d?d:new c;a=Ic(a,b);e.push(c);a.push(c.N)}
;function Qc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Ac&&null!=a&&a instanceof Uint8Array)return zc(a)}return a}
;function Rc(a,b){b=void 0===b?Sc:b;return Tc(a,b)}
function Uc(a,b){if(null!=a){if(Array.isArray(a))a=Tc(a,b);else if(Dc(a)){var c={},d;for(d in a)c[d]=Uc(a[d],b);a=c}else a=b(a);return a}}
function Tc(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Uc(c[d],b);if(Array.isArray(a)){var e;Bc?e=a[Bc]:e=a.h;a=!!((null==e?0:e)&1)}else a=!1;a&&Cc(c);return c}
function Vc(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Qc(a);return Array.isArray(a)?Rc(a,Vc):a}
function Sc(a){return Ac&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;var Wc;function Xc(a,b,c){var d=Wc;Wc=null;a||(a=d);d=this.constructor.i;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.h||0);this.h=void 0;this.N=a;a:{d=this.N.length;a=d-1;if(d&&(d=this.N[a],Dc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.N[a])?Array.isArray(d)&&Cc(d):this.N[a]=Fc;else{d=this.i||(this.i=this.N[this.l+this.j]={});var e=d[a];e?Array.isArray(e)&&
Cc(e):d[a]=Fc}}
Xc.prototype.toJSON=function(){var a=this.N;return Ec?a:Rc(a,Vc)};
Xc.prototype.clone=function(){var a=this.constructor,b=Rc(this.N);Wc=b;a=new a(b);Wc=null;Yc(a,this);return a};
Xc.prototype.toString=function(){return this.N.toString()};
function Zc(a,b){return Qc(b)}
function Yc(a,b){b.o&&(a.o=b.o.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Mc(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)Yc(f[g],e[g])}else(f=Lc(a,e.constructor,g,void 0,f))&&Yc(f,e)}}}}
;function $c(){Xc.apply(this,arguments)}
r($c,Xc);function ad(){var a={};Object.defineProperties($c,(a[Symbol.hasInstance]={value:Object[Symbol.hasInstance],configurable:!1,writable:!1,enumerable:!1},a))}
Gc&&ad();function bd(a,b){var c=this.h;if(this.isRepeated){var d=!0;d=void 0===d?!1:d;if(b){var e=Cc([]);for(var f=0;f<b.length;f++)e[f]=b[f].N;a.h||(a.h={});a.h[c]=b}else a.h&&(a.h[c]=void 0),e=Fc;a=G(a,c,e,d)}else a=H(a,c,b,!0);return a}
;function cd(a){x.setTimeout(function(){throw a;},0)}
;function I(){$c.apply(this,arguments)}
r(I,$c);function dd(){var a={};Object.defineProperties(I,(a[Symbol.hasInstance]={value:Object[Symbol.hasInstance],configurable:!1,writable:!1,enumerable:!1},a))}
Gc&&dd();function ed(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function fd(a){this.i=!1;var b=a.program;a=a.globalName;var c=new ed;this.j=c.promise;this.l=q((0,x[a].a)(b,function(d,e){Promise.resolve().then(function(){c.resolve({Nb:d,vc:e})})},!0)).next().value;
this.uc=c.promise.then(function(){})}
fd.prototype.snapshot=function(a){if(this.i)throw Error("Already disposed");return this.j.then(function(b){var c=b.Nb;return new Promise(function(d){c(function(e){d(e)},[a.qb,
a.wc])})})};
fd.prototype.dispose=function(){this.i=!0;this.j.then(function(a){(a=a.vc)&&a()})};
fd.prototype.h=function(){return this.i};var gd=window;Ab("csi.gstatic.com");Ab("googleads.g.doubleclick.net");Ab("partner.googleadservices.com");Ab("pubads.g.doubleclick.net");Ab("securepubads.g.doubleclick.net");Ab("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var hd={};function id(){}
function jd(a){this.h=a}
r(jd,id);jd.prototype.toString=function(){return this.h};
var kd=new jd("about:invalid#zTSz",hd);function ld(a){if(a instanceof id)if(a instanceof jd)a=a.h;else throw Error("");else a=Kb(a);return a}
;function md(a,b){a.src=Fb(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function nd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=nd.prototype;l.clone=function(){return new nd(this.x,this.y)};
l.equals=function(a){return a instanceof nd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function od(a,b){this.width=a;this.height=b}
l=od.prototype;l.clone=function(){return new od(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function pd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function qd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function rd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function sd(a){var b=td;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ud(){var a=[];sd(function(b){a.push(b)});
return a}
var td={Lc:"allow-forms",Mc:"allow-modals",Nc:"allow-orientation-lock",Oc:"allow-pointer-lock",Pc:"allow-popups",Qc:"allow-popups-to-escape-sandbox",Rc:"allow-presentation",Sc:"allow-same-origin",Tc:"allow-scripts",Uc:"allow-top-navigation",Vc:"allow-top-navigation-by-user-activation"},vd=bb(function(){return ud()});
function wd(){var a=xd(),b={};db(vd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function xd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function yd(a){this.isValid=a}
function zd(a){return new yd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ad=[zd("data"),zd("http"),zd("https"),zd("mailto"),zd("ftp"),new yd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Bd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Cd=(new Date).getTime();var Dd=new function(a,b){this.flag=a;this.defaultValue=void 0===b?!1:b}(1959,!0);function Ed(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Fd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(t){for(var z=g,v=0;64>v;v+=4)z[v/4]=t[v]<<24|t[v+1]<<16|t[v+2]<<8|t[v+3];for(v=16;80>v;v++)t=z[v-3]^z[v-8]^z[v-14]^z[v-16],z[v]=(t<<1|t>>>31)&4294967295;t=e[0];var C=e[1],D=e[2],F=e[3],P=e[4];for(v=0;80>v;v++){if(40>v)if(20>v){var U=F^C&(D^F);var W=1518500249}else U=C^D^F,W=1859775393;else 60>v?(U=C&D|F&(C|D),W=2400959708):(U=C^D^F,W=3395469782);U=((t<<5|t>>>27)&4294967295)+U+P+W+z[v]&4294967295;P=F;F=D;D=(C<<30|C>>>2)&4294967295;C=t;t=U}e[0]=e[0]+t&4294967295;e[1]=e[1]+C&4294967295;e[2]=
e[2]+D&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+P&4294967295}
function c(t,z){if("string"===typeof t){t=unescape(encodeURIComponent(t));for(var v=[],C=0,D=t.length;C<D;++C)v.push(t.charCodeAt(C));t=v}z||(z=t.length);v=0;if(0==m)for(;v+64<z;)b(t.slice(v,v+64)),v+=64,n+=64;for(;v<z;)if(f[m++]=t[v++],n++,64==m)for(m=0,b(f);v+64<z;)b(t.slice(v,v+64)),v+=64,n+=64}
function d(){var t=[],z=8*n;56>m?c(h,56-m):c(h,64-(m-56));for(var v=63;56<=v;v--)f[v]=z&255,z>>>=8;b(f);for(v=z=0;5>v;v++)for(var C=24;0<=C;C-=8)t[z++]=e[v]>>C&255;return t}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,n;a();return{reset:a,update:c,digest:d,Rb:function(){for(var t=d(),z="",v=0;v<t.length;v++)z+="0123456789ABCDEF".charAt(Math.floor(t[v]/16))+"0123456789ABCDEF".charAt(t[v]%16);return z}}}
;function Gd(a,b,c){var d=String(x.location.href);return d&&a&&b?[b,Hd(Ed(d),a,c||null)].join(" "):null}
function Hd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),Id(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=Id(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Id(a){var b=Fd();b.update(a);return b.Rb().toLowerCase()}
;var Jd={};function Kd(a){this.h=a||{cookie:""}}
l=Kd.prototype;l.isEnabled=function(){if(!x.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Qa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ao;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Qa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Hb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Qa:0,path:b,domain:c});return d};
l.ab=function(){return Ld(this).keys};
l.isEmpty=function(){return!this.h.cookie};
l.clear=function(){for(var a=Ld(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Ld(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Hb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Md=new Kd("undefined"==typeof document?null:document);function Nd(a){return!!Jd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Od(a){a=void 0===a?!1:a;var b=x.__SAPISID||x.__APISID||x.__3PSAPISID||x.__OVERRIDE_SID;Nd(a)&&(b=b||x.__1PSAPISID);if(b)return!0;var c=new Kd(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");Nd(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Pd(a,b,c,d){(a=x[a])||(a=(new Kd(document)).get(b));return a?Gd(a,c,d):null}
function Qd(a){var b=void 0===b?!1:b;var c=Ed(String(x.location.href)),d=[];if(Od(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?x.__SAPISID:x.__APISID;e||(e=new Kd(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Gd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Nd(b)&&((b=Pd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Pd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Rd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Sd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?Sd.apply(null,d):Rd(d)}}
;function J(){this.D=this.D;this.o=this.o}
J.prototype.D=!1;J.prototype.h=function(){return this.D};
J.prototype.dispose=function(){this.D||(this.D=!0,this.H())};
function Td(a,b){a.D?b():(a.o||(a.o=[]),a.o.push(b))}
J.prototype.H=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function Ud(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Ud.prototype.stopPropagation=function(){this.j=!0};
Ud.prototype.preventDefault=function(){this.defaultPrevented=!0};function Vd(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Wd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Xd[c])c=Xd[c];else{c=String(c);if(!Xd[c]){var f=/function\s+([^\(]+)/m.exec(c);Xd[c]=f?f[1]:"[Anonymous]"}c=Xd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Wd(a,b){b||(b={});b[Yd(a)]=!0;var c=a.stack||"";(a=a.Ob)&&!b[Yd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Wd(a,b));return c}
function Yd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Xd={};var Zd=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{x.addEventListener("test",Ja,b),x.removeEventListener("test",Ja,b)}catch(c){}return a}();function $d(a,b){Ud.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Xa($d,Ud);var ae={2:"touch",3:"pen",4:"mouse"};
$d.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(ic){a:{try{ec(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ae[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&$d.aa.preventDefault.call(this)};
$d.prototype.stopPropagation=function(){$d.aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
$d.prototype.preventDefault=function(){$d.aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var be="closure_listenable_"+(1E6*Math.random()|0);var ce=0;function de(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Na=e;this.key=++ce;this.Aa=this.Ja=!1}
function ee(a){a.Aa=!0;a.listener=null;a.proxy=null;a.src=null;a.Na=null}
;function fe(a){this.src=a;this.listeners={};this.h=0}
fe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ge(a,b,d,e);-1<g?(b=a[g],c||(b.Ja=!1)):(b=new de(b,this.src,f,!!d,e),b.Ja=c,a.push(b));return b};
fe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ge(e,b,c,d);return-1<b?(ee(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function he(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(ee(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ge(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Aa&&f.listener==b&&f.capture==!!c&&f.Na==d)return e}return-1}
;var ie="closure_lm_"+(1E6*Math.random()|0),je={},ke=0;function le(a,b,c,d,e){if(d&&d.once)me(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)le(a,b[f],c,d,e);else c=ne(c),a&&a[be]?a.W(b,c,Na(d)?!!d.capture:!!d,e):oe(a,b,c,!1,d,e)}
function oe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=pe(a);h||(a[ie]=h=new fe(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=qe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Zd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(re(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ke++}}
function qe(){function a(c){return b.call(a.src,a.listener,c)}
var b=se;return a}
function me(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)me(a,b[f],c,d,e);else c=ne(c),a&&a[be]?a.i.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):oe(a,b,c,!0,d,e)}
function te(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)te(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=ne(c),a&&a[be])?a.i.remove(String(b),c,d,e):a&&(a=pe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ge(b,c,d,e)),(c=-1<a?b[a]:null)&&ue(c))}
function ue(a){if("number"!==typeof a&&a&&!a.Aa){var b=a.src;if(b&&b[be])he(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(re(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ke--;(c=pe(b))?(he(c,a),0==c.h&&(c.src=null,b[ie]=null)):ee(a)}}}
function re(a){return a in je?je[a]:je[a]="on"+a}
function se(a,b){if(a.Aa)a=!0;else{b=new $d(b,this);var c=a.listener,d=a.Na||a.src;a.Ja&&ue(a);a=c.call(d,b)}return a}
function pe(a){a=a[ie];return a instanceof fe?a:null}
var ve="__closure_events_fn_"+(1E9*Math.random()>>>0);function ne(a){if("function"===typeof a)return a;a[ve]||(a[ve]=function(b){return a.handleEvent(b)});
return a[ve]}
;function we(){J.call(this);this.i=new fe(this);this.Z=this;this.K=null}
Xa(we,J);we.prototype[be]=!0;we.prototype.addEventListener=function(a,b,c,d){le(this,a,b,c,d)};
we.prototype.removeEventListener=function(a,b,c,d){te(this,a,b,c,d)};
function xe(a,b){var c=a.K;if(c){var d=[];for(var e=1;c;c=c.K)d.push(c),++e}a=a.Z;c=b.type||b;"string"===typeof b?b=new Ud(b,a):b instanceof Ud?b.target=b.target||a:(e=b,b=new Ud(c,a),vb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=ye(g,c,!0,b)&&e}b.j||(g=b.h=a,e=ye(g,c,!0,b)&&e,b.j||(e=ye(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=ye(g,c,!1,b)&&e}
we.prototype.H=function(){we.aa.H.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ee(d[e]);delete a.listeners[c];a.h--}}this.K=null};
we.prototype.W=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function ye(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Aa&&g.capture==c){var h=g.listener,k=g.Na||g.src;g.Ja&&he(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function ze(a){we.call(this);var b=this;this.A=this.l=0;this.V=null!=a?a:{M:function(e,f){return setTimeout(e,f)},
U:clearTimeout};var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return w(function(e){return u(e,Ae(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||Be(this)}
r(ze,we);ze.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.V.U(this.A);delete ze.h};
ze.prototype.G=function(){return this.j};
function Be(a){a.A=a.V.M(function(){var b;return w(function(c){if(1==c.h)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.s(3):u(c,Ae(a),3):u(c,Ae(a),3);Be(a);c.h=0})},3E4)}
function Ae(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ua(h,2,3),d&&(a.l=a.V.M(function(){d.abort()},b||2E4)),u(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:ya(h);a.u=void 0;a.l&&(a.V.U(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?xe(a,"networkstatus-online"):xe(a,"networkstatus-offline"));c(g);za(h);break;case 2:xa(h),g=!1,h.s(3)}})})}
;var Ce={Vn:"WEB_DISPLAY_MODE_UNKNOWN",Rn:"WEB_DISPLAY_MODE_BROWSER",Tn:"WEB_DISPLAY_MODE_MINIMAL_UI",Un:"WEB_DISPLAY_MODE_STANDALONE",Sn:"WEB_DISPLAY_MODE_FULLSCREEN"};function De(){this.data_=[];this.h=-1}
De.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
De.prototype.get=function(a){return!!this.data_[a]};
function Ee(a){-1==a.h&&(a.h=gb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Fe(){var a={};this.B=function(b,c){return null!=a[b]?a[b]:c}}
;function Ge(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Ge.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function He(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Ie;function Je(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=qd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ob;c.ob=null;e()}};
return function(e){d.next={ob:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function Ke(){this.i=this.h=null}
Ke.prototype.add=function(a,b){var c=Le.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ke.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Le=new Ge(function(){return new Me},function(a){return a.reset()});
function Me(){this.next=this.scope=this.h=null}
Me.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Me.prototype.reset=function(){this.next=this.scope=this.h=null};function Ne(a,b){Oe||Pe();Qe||(Oe(),Qe=!0);Re.add(a,b)}
var Oe;function Pe(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);Oe=function(){a.then(Se)}}else Oe=function(){var b=Se;
"function"!==typeof x.setImmediate||x.Window&&x.Window.prototype&&!E("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(Ie||(Ie=Je()),Ie(b)):x.setImmediate(b)}}
var Qe=!1,Re=new Ke;function Se(){for(var a;a=Re.remove();){try{a.h.call(a.scope)}catch(b){cd(b)}He(Le,a)}Qe=!1}
;function Te(a,b){this.h=a[x.Symbol.iterator]();this.i=b;this.j=0}
Te.prototype[Symbol.iterator]=function(){return this};
Te.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function Ue(a,b){return new Te(a,b)}
;function Ve(){this.blockSize=-1}
;function We(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Xa(We,Ve);We.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Xe(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
We.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)Xe(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Xe(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Xe(this,e);f=0;break}}this.i=f;this.l+=b}};
We.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;Xe(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Ye(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ze(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function $e(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ye(a).match(/\S+/g)||[],b=0<=cb(a,b));return b}
function af(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):$e(a,"inverted-hdpi")&&Ze(a,Array.prototype.filter.call(a.classList?a.classList:Ye(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var bf="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function cf(){}
cf.prototype.da=function(){throw bf;};
cf.prototype.next=function(){return df};
var df={done:!0,value:void 0};function ef(a){return{value:a,done:!1}}
function ff(a){if(a.done)throw bf;return a.value}
cf.prototype.T=function(){return this};function gf(a){if(a instanceof hf||a instanceof jf||a instanceof kf)return a;if("function"==typeof a.da)return new hf(function(){return lf(a)});
if("function"==typeof a[Symbol.iterator])return new hf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.T)return new hf(function(){return lf(a.T())});
throw Error("Not an iterator or iterable.");}
function lf(a){if(!(a instanceof cf))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.da();break}catch(d){if(d!==bf)throw d;b=!0}return{value:c,done:b}}}}
function hf(a){this.h=a}
hf.prototype.T=function(){return new jf(this.h())};
hf.prototype[Symbol.iterator]=function(){return new kf(this.h())};
hf.prototype.i=function(){return new kf(this.h())};
function jf(a){this.h=a}
r(jf,cf);jf.prototype.da=function(){var a=this.h.next();if(a.done)throw bf;return a.value};
jf.prototype.next=function(){return this.h.next()};
jf.prototype[Symbol.iterator]=function(){return new kf(this.h)};
jf.prototype.i=function(){return new kf(this.h)};
function kf(a){hf.call(this,function(){return a});
this.j=a}
r(kf,hf);kf.prototype.next=function(){return this.j.next()};function mf(a,b){this.i={};this.h=[];this.ja=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof mf)for(c=a.ab(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=mf.prototype;l.ab=function(){nf(this);return this.h.concat()};
l.has=function(a){return of(this.i,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||pf;nf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function pf(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.i={};this.ja=this.size=this.h.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return of(this.i,a)?(delete this.i[a],--this.size,this.ja++,this.h.length>2*this.size&&nf(this),!0):!1};
function nf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];of(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],of(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
l.get=function(a,b){return of(this.i,a)?this.i[a]:b};
l.set=function(a,b){of(this.i,a)||(this.size+=1,this.h.push(a),this.ja++);this.i[a]=b};
l.forEach=function(a,b){for(var c=this.ab(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new mf(this)};
l.keys=function(){return gf(this.T(!0)).i()};
l.values=function(){return gf(this.T(!1)).i()};
l.entries=function(){var a=this;return Ue(this.keys(),function(b){return[b,a.get(b)]})};
l.T=function(a){nf(this);var b=0,c=this.ja,d=this,e=new cf;e.next=function(){if(c!=d.ja)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return df;var g=d.h[b++];return ef(a?g:d.i[g])};
var f=e.next;e.da=function(){return ff(f.call(e))};
return e};
function of(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function qf(a){rf();return Gb(a)}
var rf=Ja;function sf(a){var b=[];tf(new uf,a,b);return b.join("")}
function uf(){}
function tf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),tf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),vf(d,c),c.push(":"),tf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":vf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var wf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},xf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function vf(a,b){b.push('"',a.replace(xf,function(c){var d=wf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),wf[c]=d);return d}),'"')}
;function yf(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function zf(a){this.h=0;this.D=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=Ja)try{var b=this;a.call(void 0,function(c){Af(b,2,c)},function(c){Af(b,3,c)})}catch(c){Af(this,3,c)}}
function Bf(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Bf.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Cf=new Ge(function(){return new Bf},function(a){a.reset()});
function Df(a,b,c){var d=Cf.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Ef(a){return new zf(function(b,c){c(a)})}
zf.prototype.then=function(a,b,c){return Ff(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
zf.prototype.$goog_Thenable=!0;function Gf(a,b){return Ff(a,null,b,void 0)}
zf.prototype.cancel=function(a){if(0==this.h){var b=new Hf(a);Ne(function(){If(this,b)},this)}};
function If(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?If(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Jf(c),Kf(c,e,3,b)))}a.j=null}else Af(a,3,b)}
function Lf(a,b){a.i||2!=a.h&&3!=a.h||Mf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Ff(a,b,c,d){var e=Df(null,null,null);e.h=new zf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Hf?g(h):f(k)}catch(m){g(m)}}:g});
e.h.j=a;Lf(a,e);return e.h}
zf.prototype.A=function(a){this.h=0;Af(this,2,a)};
zf.prototype.K=function(a){this.h=0;Af(this,3,a)};
function Af(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.A,f=a.K;if(d instanceof zf){Lf(d,Df(e||Ja,f||null,a));var g=!0}else if(yf(d))d.then(e,f,a),g=!0;else{if(Na(d))try{var h=d.then;if("function"===typeof h){Nf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.D=c,a.h=b,a.j=null,Mf(a),3!=b||c instanceof Hf||Of(a,c))}}
function Nf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Mf(a){a.m||(a.m=!0,Ne(a.u,a))}
function Jf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
zf.prototype.u=function(){for(var a;a=Jf(this);)Kf(this,a,this.h,this.D);this.m=!1};
function Kf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,Pf(b,c,d);else try{b.j?b.i.call(b.context):Pf(b,c,d)}catch(e){Qf.call(null,e)}He(Cf,b)}
function Pf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Of(a,b){a.o=!0;Ne(function(){a.o&&Qf.call(null,b)})}
var Qf=cd;function Hf(a){$a.call(this,a)}
Xa(Hf,$a);Hf.prototype.name="cancel";function K(a){J.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
Xa(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function Rf(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.wa(b)}}
l.wa=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ja):(c&&jb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
l.ka=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Sf(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.wa(c)}}return 0!=e}return!1};
function Sf(a,b,c){Ne(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.wa,this),delete this.j[a])}else this.i.length=0,this.j={}};
l.H=function(){K.aa.H.call(this);this.clear();this.l.length=0};function Tf(a){this.h=a}
Tf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,sf(b))};
Tf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Tf.prototype.remove=function(a){this.h.remove(a)};function Uf(a){this.h=a}
Xa(Uf,Tf);function Vf(a){this.data=a}
function Wf(a){return void 0===a||a instanceof Vf?a:new Vf(a)}
Uf.prototype.set=function(a,b){Uf.aa.set.call(this,a,Wf(b))};
Uf.prototype.i=function(a){a=Uf.aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Uf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Xf(a){this.h=a}
Xa(Xf,Uf);Xf.prototype.set=function(a,b,c){if(b=Wf(b)){if(c){if(c<Date.now()){Xf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Xf.aa.set.call(this,a,b)};
Xf.prototype.i=function(a){var b=Xf.aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Xf.prototype.remove.call(this,a);else return b}};function Yf(){}
;function Zf(){}
Xa(Zf,Yf);Zf.prototype[Symbol.iterator]=function(){return gf(this.T(!0)).i()};
Zf.prototype.clear=function(){var a=Array.from(this);a=q(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function $f(a){this.h=a}
Xa($f,Zf);l=$f.prototype;l.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeItem(a)};
l.T=function(a){var b=0,c=this.h,d=new cf;d.next=function(){if(b>=c.length)return df;var f=c.key(b++);if(a)return ef(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return ef(f)};
var e=d.next;d.da=function(){return ff(e.call(d))};
return d};
l.clear=function(){this.h.clear()};
l.key=function(a){return this.h.key(a)};function ag(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Xa(ag,$f);function bg(a,b){this.i=a;this.h=null;var c;if(c=gc)c=!(9<=Number(tc));if(c){cg||(cg=new mf);this.h=cg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),cg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Xa(bg,Zf);var dg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},cg=null;function eg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return dg[b]})}
l=bg.prototype;l.isAvailable=function(){return!!this.h};
l.set=function(a,b){this.h.setAttribute(eg(a),b);fg(this)};
l.get=function(a){a=this.h.getAttribute(eg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeAttribute(eg(a));fg(this)};
l.T=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new cf;d.next=function(){if(b>=c.length)return df;var f=c[b++];if(a)return ef(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return ef(f)};
var e=d.next;d.da=function(){return ff(e.call(d))};
return d};
l.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);fg(this)};
function fg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function gg(a,b){this.i=a;this.h=b+"::"}
Xa(gg,Zf);gg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
gg.prototype.get=function(a){return this.i.get(this.h+a)};
gg.prototype.remove=function(a){this.i.remove(this.h+a)};
gg.prototype.T=function(a){var b=this.i.T(!0),c=this,d=new cf;d.next=function(){try{var f=b.da()}catch(g){if(g===bf)return df;throw g;}for(;f.substr(0,c.h.length)!=c.h;)try{f=b.da()}catch(g){if(g===bf)return df;throw g;}return ef(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.da=function(){return ff(e.call(d))};
return d};function hg(a){I.call(this,a)}
r(hg,I);hg.prototype.getKey=function(){return Hc(this,1)};
hg.prototype.getValue=function(){return Hc(this,2===Kc(this,ig)?2:-1)};
hg.prototype.setValue=function(a){return Jc(this,2,ig,a)};
var ig=[2,3,4,5,6];function jg(a){I.call(this,a)}
r(jg,I);function kg(a){I.call(this,a)}
r(kg,I);function lg(a){I.call(this,a)}
r(lg,I);function mg(a){I.call(this,a,-1,ng)}
r(mg,I);mg.prototype.getPlayerType=function(){return Hc(this,36)};
mg.prototype.setHomeGroupInfo=function(a){return H(this,81,a)};
var ng=[9,66,24,32,86,100,101];function og(a){I.call(this,a,-1,pg)}
r(og,I);var pg=[15,26,28];function qg(a){I.call(this,a)}
r(qg,I);qg.prototype.setToken=function(a){return G(this,2,a)};function rg(a){I.call(this,a,-1,sg)}
r(rg,I);rg.prototype.setSafetyMode=function(a){return G(this,5,a)};
var sg=[12];function tg(a){I.call(this,a,-1,ug)}
r(tg,I);var ug=[12];function vg(a){I.call(this,a)}
r(vg,I);var wg={qh:0,ah:1,hh:2,ih:4,nh:8,jh:16,kh:32,ph:64,oh:128,dh:256,fh:512,mh:1024,eh:2048,gh:4096,bh:8192,lh:16384};function xg(a){I.call(this,a)}
r(xg,I);function yg(a,b){H(a,1,b)}
xg.prototype.Y=function(a){G(this,2,a)};
function zg(a){I.call(this,a)}
r(zg,I);function Ag(a,b){H(a,1,b)}
;function Bg(a){I.call(this,a,-1,Cg)}
r(Bg,I);Bg.prototype.Y=function(a){G(this,1,a)};
function Dg(a,b){H(a,2,b)}
var Cg=[3];function Eg(a){I.call(this,a)}
r(Eg,I);Eg.prototype.Y=function(a){G(this,1,a)};function Fg(a){I.call(this,a)}
r(Fg,I);Fg.prototype.Y=function(a){G(this,1,a)};function Gg(a){I.call(this,a)}
r(Gg,I);Gg.prototype.Y=function(a){G(this,1,a)};function Hg(a){I.call(this,a)}
r(Hg,I);function Ig(a){I.call(this,a)}
r(Ig,I);function Jg(a){I.call(this,a,-1,Kg)}
r(Jg,I);Jg.prototype.getPlayerType=function(){var a=Hc(this,7);return null==a?0:a};
Jg.prototype.setVideoId=function(a){return G(this,19,a)};
function Lg(a){I.call(this,a)}
r(Lg,I);Lg.prototype.getId=function(){var a=Hc(this,2);return null==a?"":a};
var Kg=[83,68];function Mg(a){I.call(this,a)}
r(Mg,I);function Ng(a){I.call(this,a)}
r(Ng,I);function Og(a){I.call(this,a)}
r(Og,I);function Pg(a){I.call(this,a,424)}
r(Pg,I);
var Oc=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,413,414,415,416,417,418,419,420,423,117];function Qg(a){I.call(this,a)}
r(Qg,I);function Rg(a){I.call(this,a)}
r(Rg,I);Rg.prototype.setVideoId=function(a){return Jc(this,1,Sg,a)};
Rg.prototype.getPlaylistId=function(){return Hc(this,2===Kc(this,Sg)?2:-1)};
var Sg=[1,2];function Tg(a){I.call(this,a,-1,Ug)}
r(Tg,I);var Ug=[3];function Vg(a){I.call(this,a,1)}
r(Vg,I);function Wg(a){I.call(this,a)}
r(Wg,I);var Xg;Xg=new function(a,b,c,d){this.h=a;this.fieldName=b;this.isRepeated=d;this.i=bd}(406606992,{so:0},Wg,0);function Yg(){Wg.apply(this,arguments)}
r(Yg,Wg);function Zg(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var $g=x.window,ah,bh,ch=(null==$g?void 0:null==(ah=$g.yt)?void 0:ah.config_)||(null==$g?void 0:null==(bh=$g.ytcfg)?void 0:bh.data_)||{},dh,eh=(null==$g?void 0:null==(dh=$g.ytcfg)?void 0:dh.obfuscatedData_)||[];function fh(){Vg.apply(this,arguments)}
r(fh,Vg);var gh=new fh(eh),hh=ch.EXPERIMENT_FLAGS;if(!hh||!hh.jspb_i18n_extension){var ih=new Yg;Xg.i(gh,ih)}y("yt.config_",ch,void 0);y("yt.configJspb_",eh,void 0);function jh(){Zg(ch,arguments)}
function B(a,b){return a in ch?ch[a]:b}
function kh(a){return B(a,void 0)}
;function L(a){a=lh(a);return"string"===typeof a&&"false"===a?!1:!!a}
function mh(a,b){a=lh(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function nh(){return B("EXPERIMENTS_TOKEN","")}
function lh(a){var b=B("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:B("EXPERIMENT_FLAGS",{})[a]}
function oh(){var a=[],b=B("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=B("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var ph={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},qh={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var rh=0,sh=jc?"webkit":ic?"moz":gc?"ms":fc?"o":"";y("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++rh},void 0);var th=[];function uh(a){th.forEach(function(b){return b(a)})}
function vh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){wh(b)}}:a}
function wh(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=B("ERRORS",[]),e.push([a,"ERROR",b,c,d]),jh("ERRORS",e));uh(a)}
function xh(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=B("ERRORS",[]),e.push([a,"WARNING",b,c,d]),jh("ERRORS",e))}
;var yh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function zh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in yh||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Ah(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
zh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
zh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
zh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=x.ytEventsEventsListeners||{};y("ytEventsEventsListeners",nb,void 0);var Bh=x.ytEventsEventsCounter||{count:0};y("ytEventsEventsCounter",Bh,void 0);
function Ch(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Dh=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Eh(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ch(a,b,c,d);if(e)return e;e=++Bh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new zh(h);if(!rd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new zh(h);
h.currentTarget=a;return c.call(a,h)};
g=vh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Dh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function Fh(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Dh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;var Gh=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Hh(a,b){"function"===typeof a&&(a=vh(a));return window.setTimeout(a,b)}
function Ih(a){window.clearTimeout(a)}
;function Jh(a){this.K=a;this.i=null;this.m=0;this.A=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.S=Eh(window,"mousemove",Ua(this.Z,this));a=Ua(this.L,this);"function"===typeof a&&(a=vh(a));this.ga=window.setInterval(a,25)}
Xa(Jh,J);Jh.prototype.Z=function(a){void 0===a.h&&Ah(a);var b=a.h;void 0===a.i&&Ah(a);this.i=new nd(b,a.i)};
Jh.prototype.L=function(){if(this.i){var a=Gh();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.K();this.u=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
Jh.prototype.H=function(){window.clearInterval(this.ga);Fh(this.S)};function Kh(){}
function Lh(a,b){return Mh(a,0,b)}
Kh.prototype.M=function(a,b){return Mh(a,1,b)};
function Nh(a,b){Mh(a,2,b)}
function Oh(a){var b=A("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Ph(){Kh.apply(this,arguments)}
r(Ph,Kh);function Qh(){Ph.h||(Ph.h=new Ph);return Ph.h}
function Mh(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Hh(a,c||0)}
Ph.prototype.U=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):Ih(a)}};
Ph.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Ph.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};var Rh=Qh();var Sh={};
function Th(a){var b=void 0===a?{}:a;a=void 0===b.ec?!1:b.ec;b=void 0===b.Tb?!0:b.Tb;if(null==A("_lact",window)){var c=parseInt(B("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&Uh();Eh(document,"keydown",Uh);Eh(document,"keyup",Uh);Eh(document,"mousedown",Uh);Eh(document,"mouseup",Uh);a?Eh(window,"touchmove",function(){Vh("touchmove",200)},{passive:!0}):(Eh(window,"resize",function(){Vh("resize",200)}),b&&Eh(window,"scroll",function(){Vh("scroll",200)}));
new Jh(function(){Vh("mouse",100)});
Eh(document,"touchstart",Uh,{passive:!0});Eh(document,"touchend",Uh,{passive:!0})}}
function Vh(a,b){Sh[a]||(Sh[a]=!0,Rh.M(function(){Uh();Sh[a]=!1},b))}
function Uh(){null==A("_lact",window)&&Th();var a=Date.now();y("_lact",a,window);-1==A("_fact",window)&&y("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function Wh(){var a=A("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function Xh(){var a=Yh;A("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a,void 0)}
function Zh(a){y("yt.ads.biscotti.lastId_",a,void 0)}
;var $h=/^[\w.]*$/,ai={q:!0,search_query:!0};function bi(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=ci(f[0]||""),h=ci(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(t){var k=t,m=f[0],n=String(bi);k.args=[{key:m,value:f[1],query:a,method:di==n?"unchanged":n}];ai.hasOwnProperty(m)||xh(k)}}return c}
var di=String(bi);function ei(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];db(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function fi(a){"?"==a.charAt(0)&&(a=a.substr(1));return bi(a,"&")}
function gi(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),fi(1<a.length?a[1]:a[0])):{}}
function hi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=fi(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return bc(a,e)+d}
function ii(a){if(!b)var b=window.location.href;var c=a.match(Wb)[1]||null,d=Yb(a);c&&d?(a=a.match(Wb),b=b.match(Wb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Yb(b)==d&&(Number(b.match(Wb)[4]||null)||null)==(Number(a.match(Wb)[4]||null)||null):!0;return a}
function ci(a){return a&&a.match($h)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ji(a){var b=ki;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Cd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(hb){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?gd:g;try{var h=g.history.length}catch(hb){h=0}e.u_his=h;var k;e.u_h=null==(k=gd.screen)?void 0:k.height;var m;e.u_w=null==(m=gd.screen)?void 0:m.width;var n;e.u_ah=null==(n=gd.screen)?void 0:n.availHeight;var t;e.u_aw=
null==(t=gd.screen)?void 0:t.availWidth;var z;e.u_cd=null==(z=gd.screen)?void 0:z.colorDepth}catch(hb){}h=b.h;try{var v=h.screenX;var C=h.screenY}catch(hb){}try{var D=h.outerWidth;var F=h.outerHeight}catch(hb){}try{var P=h.innerWidth;var U=h.innerHeight}catch(hb){}try{var W=h.screenLeft;var Ra=h.screenTop}catch(hb){}try{P=h.innerWidth,U=h.innerHeight}catch(hb){}try{var Y=h.screen.availWidth;var wa=h.screen.availTop}catch(hb){}v=[W,Ra,v,C,Y,wa,D,F,P,U];try{var Q=(b.h.top||window).document,sa="CSS1Compat"==
Q.compatMode?Q.documentElement:Q.body;var Za=(new od(sa.clientWidth,sa.clientHeight)).round()}catch(hb){Za=new od(-12245933,-12245933)}Q=Za;Za={};sa=new De;x.SVGElement&&x.document.createElementNS&&sa.set(0);C=wd();C["allow-top-navigation-by-user-activation"]&&sa.set(1);C["allow-popups-to-escape-sandbox"]&&sa.set(2);x.crypto&&x.crypto.subtle&&sa.set(3);x.TextDecoder&&x.TextEncoder&&sa.set(4);sa=Ee(sa);Za.bc=sa;Za.bih=Q.height;Za.biw=Q.width;Za.brdim=v.join();b=b.i;Q="ma";Fe.ma&&Fe.hasOwnProperty(Q)?
Q=Fe.ma:(sa=new Fe,Fe.ma=sa,Fe.hasOwnProperty(Q),Q=sa);b=(Za.vis=Q.B(Dd.flag,Dd.defaultValue)&&b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Za.wgl=!!gd.WebGLRenderingContext,Za);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ki=new function(){var a=window.document;this.h=window;this.i=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return ei(ji(a))},void 0);Date.now();var li="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function mi(){if(!li)return null;var a=li();return"open"in a?a:null}
function ni(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var oi={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},pi="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa("client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag jsfeat jsmode mods".split(" "))),qi=!1;
function ri(a,b){b=void 0===b?{}:b;var c=ii(a),d=L("web_ajax_ignore_global_headers_if_set"),e;for(e in oi){var f=B(oi[e]);!f||!c&&Yb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Yb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Yb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Yb(a))b["X-YouTube-Ad-Signals"]=ei(ji(void 0));return b}
function si(a){var b=window.location.search,c=Yb(a);L("debug_handle_relative_url_for_query_forward_killswitch")||c||!ii(a)||(c=document.location.hostname);var d=Xb(a.match(Wb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=fi(b),f={};db(pi,function(g){e[g]&&(f[g]=e[g])});
return hi(a,f||{},!1)}
function ti(a,b){var c=b.format||"JSON";a=ui(a,b);var d=vi(a,b),e=!1,f=wi(a,function(k){if(!e){e=!0;h&&Ih(h);var m=ni(k),n=null,t=400<=k.status&&500>k.status,z=500<=k.status&&600>k.status;if(m||t||z)n=xi(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(n&&n.return_code,10);break a;case "RAW":m=!0;break a}m=!!n}n=n||{};t=b.context||x;m?b.onSuccess&&b.onSuccess.call(t,k,n):b.onError&&b.onError.call(t,k,n);b.onFinish&&b.onFinish.call(t,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Hh(function(){e||(e=!0,f.abort(),Ih(h),g.call(b.context||x,f))},b.timeout)}return f}
function ui(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=B("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=hi(a,b||{},!0);return a}
function vi(a,b){var c=B("XSRF_FIELD_NAME",void 0),d=B("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=kh("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Yb(a)&&!b.withCredentials&&Yb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=fi(e),vb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):ac(e));f=e||f&&!ob(f);!qi&&f&&"POST"!=
b.method&&(qi=!0,wh(Error("AJAX request with postData should use POST")));return e}
function xi(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,xh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?yi(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=zi(g)})}d&&Ai(e);
return e}
function Ai(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Ab("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=xb();d=e?e.createHTML(d):d;a[c]=new Pb(d)}else Ai(a[b])}}
function yi(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function zi(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function wi(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&vh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=mi();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;L("debug_forward_web_query_parameters")&&(a=si(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ri(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Bi=x.ytPubsubPubsubInstance||new K,Ci=x.ytPubsubPubsubSubscribedKeys||{},Di=x.ytPubsubPubsubTopicToKeys||{},Ei=x.ytPubsubPubsubIsSynchronous||{};function Fi(a,b){var c=Gi();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Ci[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Ei[a]?f():Hh(f,0)}catch(g){wh(g)}},void 0);
Ci[d]=!0;Di[a]||(Di[a]=[]);Di[a].push(d);return d}return 0}
function Hi(a){var b=Gi();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),db(a,function(c){b.unsubscribeByKey(c);delete Ci[c]}))}
function Ii(a,b){var c=Gi();c&&c.publish.apply(c,arguments)}
function Ji(a){var b=Gi();if(b)if(b.clear(a),a)Ki(a);else for(var c in Di)Ki(c)}
function Gi(){return x.ytPubsubPubsubInstance}
function Ki(a){Di[a]&&(a=Di[a],db(a,function(b){Ci[b]&&delete Ci[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.wa;K.prototype.publish=K.prototype.ka;K.prototype.clear=K.prototype.clear;y("ytPubsubPubsubInstance",Bi,void 0);y("ytPubsubPubsubTopicToKeys",Di,void 0);y("ytPubsubPubsubIsSynchronous",Ei,void 0);y("ytPubsubPubsubSubscribedKeys",Ci,void 0);var Li=window,M=Li.ytcsi&&Li.ytcsi.now?Li.ytcsi.now:Li.performance&&Li.performance.timing&&Li.performance.now&&Li.performance.timing.navigationStart?function(){return Li.performance.timing.navigationStart+Li.performance.now()}:function(){return(new Date).getTime()};var Mi=mh("initial_gel_batch_timeout",2E3),Ni=Math.pow(2,16)-1,Oi=void 0;function Pi(){this.j=this.h=this.i=0}
var Qi=new Pi,Ri=new Pi,Si=!0,Ti=x.ytLoggingTransportGELQueue_||new Map;y("ytLoggingTransportGELQueue_",Ti,void 0);var Ui=x.ytLoggingTransportGELProtoQueue_||new Map;y("ytLoggingTransportGELProtoQueue_",Ui,void 0);var Vi=x.ytLoggingTransportTokensToCttTargetIds_||{};y("ytLoggingTransportTokensToCttTargetIds_",Vi,void 0);var Wi=x.ytLoggingTransportTokensToJspbCttTargetIds_||{};y("ytLoggingTransportTokensToJspbCttTargetIds_",Wi,void 0);
function Xi(a,b){if("log_event"===a.endpoint){var c=Yi(a),d=Ti.get(c)||[];Ti.set(c,d);d.push(a.payload);Zi(b,d,c)}}
function $i(a,b){if("log_event"===a.endpoint){var c=Yi(a,!0),d=Ui.get(c)||[];Ui.set(c,d);d.push(a.payload);Zi(b,d,c,!0)}}
function Zi(a,b,c,d){d=void 0===d?!1:d;a&&(Oi=new a);a=mh("tvhtml5_logging_max_batch")||mh("web_logging_max_batch")||100;var e=M(),f=d?Ri.j:Qi.j;b.length>=a?aj({writeThenSend:!0},L("flush_only_full_queue")?c:void 0,d):10<=e-f&&(bj(d),d?Ri.j=e:Qi.j=e)}
function cj(a,b){if("log_event"===a.endpoint){var c=Yi(a),d=new Map;d.set(c,[a.payload]);b&&(Oi=new b);return new zf(function(e){Oi&&Oi.isReady()?dj(d,e,{bypassNetworkless:!0},!0):e()})}}
function ej(a,b){if("log_event"===a.endpoint){var c=Yi(a,!0),d=new Map;d.set(c,[a.payload]);b&&(Oi=new b);return new zf(function(e){Oi&&Oi.isReady()?fj(d,e,{bypassNetworkless:!0},!0):e()})}}
function Yi(a,b){var c="";if(a.xa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Rg;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Jc(d,2,Sg,c.playlistId);Wi[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Vi[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function aj(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new zf(function(d){c?(Ih(Ri.i),Ih(Ri.h),Ri.h=0):(Ih(Qi.i),Ih(Qi.h),Qi.h=0);if(Oi&&Oi.isReady())if(void 0!==b)if(c){var e=new Map,f=Ui.get(b)||[];e.set(b,f);fj(e,d,a);Ui.delete(b)}else e=new Map,f=Ti.get(b)||[],e.set(b,f),dj(e,d,a),Ti.delete(b);else c?(fj(Ui,d,a),Ui.clear()):(dj(Ti,d,a),Ti.clear());else bj(c),d()})}
function bj(a){a=void 0===a?!1:a;if(L("web_gel_timeout_cap")&&(!a&&!Qi.h||a&&!Ri.h)){var b=Hh(function(){aj({writeThenSend:!0},void 0,a)},6E4);
a?Ri.h=b:Qi.h=b}Ih(a?Ri.i:Qi.i);b=B("LOGGING_BATCH_TIMEOUT",mh("web_gel_debounce_ms",1E4));L("shorten_initial_gel_batch_timeout")&&Si&&(b=Mi);b=Hh(function(){aj({writeThenSend:!0},void 0,a)},b);
a?Ri.i=b:Qi.i=b}
function dj(a,b,c,d){var e=Oi;c=void 0===c?{}:c;var f=Math.round(M()),g=a.size;a=q(a);for(var h=a.next();!h.done;h=a.next()){var k=q(h.value);h=k.next().value;var m=k=k.next().value;k=tb({context:gj(e.config_||hj())});k.events=m;(m=Vi[h])&&ij(k,h,m);delete Vi[h];h="visitorOnlyApprovedKey"===h;jj(k,f,h);kj(c);lj(e,"log_event",k,mj(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
Si=!1}}
function fj(a,b,c,d){var e=Oi;c=void 0===c?{}:c;var f=Math.round(M()),g=a.size;a=q(a);for(var h=a.next();!h.done;h=a.next()){var k=q(h.value);h=k.next().value;var m=k=k.next().value;k=new Tg;var n=nj(e.config_||hj());H(k,1,n);for(n=0;n<m.length;n++)Pc(k,3,Pg,m[n]);(m=Wi[h])&&oj(k,h,m);delete Wi[h];h="visitorOnlyApprovedKey"===h;pj(k,f,h);kj(c);a:{Ec=!0;try{var t=JSON.stringify(k.toJSON(),Zc);break a}finally{Ec=!1}t=void 0}k=t;h=mj(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;lj(e,"log_event","",h);Si=!1}}
function kj(a){L("always_send_and_write")&&(a.writeThenSend=!1)}
function mj(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Bb:a,xa:b,po:!!e,headers:{},postBodyFormat:"",postBody:""}}
function jj(a,b,c){a.requestTimeMs=String(b);L("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=B("EVENT_ID",void 0))&&(c=qj(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function pj(a,b,c){G(a,2,b);if(!c&&(b=B("EVENT_ID",void 0))){c=qj();var d=new Qg;G(d,1,b);G(d,2,c);H(a,5,d)}}
function qj(){var a=B("BATCH_CLIENT_COUNTER",void 0)||0;a||(a=Math.floor(Math.random()*Ni/2));a++;a>Ni&&(a=1);jh("BATCH_CLIENT_COUNTER",a);return a}
function ij(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function oj(a,b,c){if(Hc(c,1===Kc(c,Sg)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,4,c);a=Lc(a,tg,1)||new tg;c=Lc(a,rg,3)||new rg;var e=new qg;e.setToken(b);G(e,1,d);Pc(c,12,qg,e);H(a,3,c)}
;var rj=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",rj,void 0);
function sj(a,b,c,d){d=void 0===d?{}:d;if(L("lr_drop_other_and_business_payloads")){if(qh[a]||ph[a])return}else if(L("lr_drop_other_payloads")&&qh[a])return;var e={},f=Math.round(d.timestamp||M());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Wh();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};L("log_sequence_info_on_gel_web")&&d.X&&(a=e.context,b=d.X,b={index:tj(b),groupKey:b},a.sequence=b,d.ub&&delete rj[d.X]);(d.mc?cj:Xi)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
xa:d.xa},c)}
function tj(a){rj[a]=a in rj?rj[a]+1:0;return rj[a]}
;function uj(a){var b=this;this.h=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.h=c})}
function vj(){if(!x.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return x.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":x.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":x.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":x.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
function wj(){var a=vj();a=Object.keys(Ce).indexOf(a);return-1===a?null:a}
;function xj(a,b,c,d,e){Md.set(""+a,b,{Qa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function yj(a){return Md.get(""+a,void 0)}
function zj(){if(!Md.isEnabled())return!1;if(!Md.isEmpty())return!0;Md.set("TESTCOOKIESENABLED","1",{Qa:60});if("1"!==Md.get("TESTCOOKIESENABLED"))return!1;Md.remove("TESTCOOKIESENABLED");return!0}
;var Aj=A("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",Aj,void 0);function Bj(){this.h=B("ALT_PREF_COOKIE_NAME","PREF");this.i=B("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=yj(this.h);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Aj[d]=c.toString())}}}
Bj.prototype.get=function(a,b){Cj(a);Dj(a);a=void 0!==Aj[a]?Aj[a].toString():null;return null!=a?a:b?b:""};
Bj.prototype.set=function(a,b){Cj(a);Dj(a);if(null==b)throw Error("ExpectedNotNull");Aj[a]=b.toString()};
function Ej(a){return!!((Fj("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
Bj.prototype.remove=function(a){Cj(a);Dj(a);delete Aj[a]};
Bj.prototype.clear=function(){for(var a in Aj)delete Aj[a]};
function Dj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Cj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Fj(a){a=void 0!==Aj[a]?Aj[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ka(Bj);var Gj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Hj={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Ij={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Jj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Kj(){var a=x.navigator;return a?a.connection:void 0}
function Lj(){var a=Kj();if(a){var b=Gj[a.type||"unknown"]||"CONN_UNKNOWN";a=Gj[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Mj(){var a=Kj();if(null!=a&&a.effectiveType)return Jj.hasOwnProperty(a.effectiveType)?Jj[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Nj(){return"INNERTUBE_API_KEY"in ch&&"INNERTUBE_API_VERSION"in ch}
function hj(){return{innertubeApiKey:B("INNERTUBE_API_KEY",void 0),innertubeApiVersion:B("INNERTUBE_API_VERSION",void 0),cb:B("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),eb:B("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Vb:B("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),yb:B("INNERTUBE_CONTEXT_HL",void 0),xb:B("INNERTUBE_CONTEXT_GL",void 0),Wb:B("INNERTUBE_HOST_OVERRIDE",void 0)||"",Yb:!!B("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Xb:!!B("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:B("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function gj(a){var b={client:{hl:a.yb,gl:a.xb,clientName:a.eb,clientVersion:a.innertubeContextClientVersion,configInfo:a.cb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=x.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=nh();""!==c&&(b.client.experimentsToken=c);c=oh();0<c.length&&(b.request={internalExperimentFlags:c});Oj(a,void 0,b);Pj(a,void 0,b);Qj(void 0,b);Rj(a,void 0,b);Sj(void 0,b);B("DELEGATED_SESSION_ID")&&!L("pageid_as_header_web")&&(b.user=
{onBehalfOfUser:B("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=q(Object.entries(fi(B("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=q(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function nj(a){var b=new tg,c=new mg;G(c,1,a.yb);G(c,2,a.xb);G(c,16,a.Vb);G(c,17,a.innertubeContextClientVersion);if(a.cb){var d=a.cb,e=new jg;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);H(c,62,e)}(d=x.devicePixelRatio)&&1!=d&&G(c,65,d);d=nh();""!==d&&G(c,54,d);d=oh();if(0<d.length){e=new og;for(var f=0;f<d.length;f++){var g=new hg;G(g,1,d[f].key);g.setValue(d[f].value);Pc(e,15,hg,g)}H(b,
5,e)}Oj(a,c);Pj(a,c);Qj(c);Rj(a,c);Sj(c);B("DELEGATED_SESSION_ID")&&!L("pageid_as_header_web")&&(a=new rg,G(a,3,B("DELEGATED_SESSION_ID")));a=q(Object.entries(fi(B("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=q(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);H(b,1,c);return b}
function Oj(a,b,c){a=a.eb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Lc(b,kg,96)||new kg;var d=wj();null!==d&&G(c,3,d);H(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=vj())}
function Pj(a,b,c){a=a.eb;if(("WEB_REMIX"===a||76===a)&&!L("music_web_display_mode_killswitch"))if(b){var d;c=null!=(d=Lc(b,lg,70))?d:new lg;d=wj();null!==d&&G(c,10,d);H(b,70,c)}else if(c){var e;c.client.Ab=null!=(e=c.client.Ab)?e:{};c.client.Ab.webDisplayMode=vj()}}
function Qj(a,b){var c;if(L("web_log_memory_total_kbytes")&&(null==(c=x.navigator)?0:c.deviceMemory)){var d;c=null==(d=x.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Rj(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Lc(b,jg,62))?d:new jg;G(c,6,a.appInstallData);H(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Sj(a,b){var c=Lj();c&&(a?G(a,61,Hj[c]):b&&(b.client.connectionType=c));L("web_log_effective_connection_type")&&(c=Mj())&&(a?G(a,94,Ij[c]):b&&(b.client.effectiveConnectionType=c))}
function Tj(a,b,c){c=void 0===c?{}:c;var d={};L("enable_web_eom_visitor_data")&&B("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":B("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||B("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.no||B("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().mo:b=Qd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=B("SESSION_INDEX",0),L("pageid_as_header_web")&&(d["X-Goog-PageId"]=B("DELEGATED_SESSION_ID")));return d}
;function Uj(a){a=Object.assign({},a);delete a.Authorization;var b=Qd();if(b){var c=new We;c.update(B("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=zc(c.digest(),3)}return a}
;function Vj(a){var b=new ag;(b=b.isAvailable()?a?new gg(b,a):b:null)||(a=new bg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Xf(a):null;this.i=document.domain||window.location.hostname}
Vj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(sf(b))}catch(f){return}else e=escape(b);xj(a,e,c,this.i)};
Vj.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=yj(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Vj.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Md.remove(""+a,"/",void 0===b?"youtube.com":b)};var Wj;function Xj(){Wj||(Wj=new Vj("yt.innertube"));return Wj}
function Yj(a,b,c,d){if(d)return null;d=Xj().get("nextId",!0)||1;var e=Xj().get("requests",!0)||{};e[d]={method:a,request:b,authState:Uj(c),requestTime:Math.round(M())};Xj().set("nextId",d+1,86400,!0);Xj().set("requests",e,86400,!0);return d}
function Zj(a){var b=Xj().get("requests",!0)||{};delete b[a];Xj().set("requests",b,86400,!0)}
function ak(a){var b=Xj().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(M())-d.requestTime)){var e=d.authState,f=Uj(Tj(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(M())),lj(a,d.method,e,{}));delete b[c]}}Xj().set("requests",b,86400,!0)}}
;var bk=uc||vc;function ck(a){var b=Mb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var dk=function(){var a;return function(){a||(a=new Vj("ytidb"));return a}}();
function ek(){var a;return null==(a=dk())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var fk=[],gk,hk=!1;function ik(){var a={};for(gk=new jk(void 0===a.handleError?kk:a.handleError,void 0===a.logEvent?lk:a.logEvent);0<fk.length;)switch(a=fk.shift(),a.type){case "ERROR":gk.handleError(a.payload);break;case "EVENT":gk.logEvent(a.eventType,a.payload)}}
function mk(a){hk||(gk?gk.handleError(a):(fk.push({type:"ERROR",payload:a}),10<fk.length&&fk.shift()))}
function nk(a,b){hk||(gk?gk.logEvent(a,b):(fk.push({type:"EVENT",eventType:a,payload:b}),10<fk.length&&fk.shift()))}
;function ok(a){var b=Ga.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
r(ok,Error);function pk(){try{return qk(),!0}catch(a){return!1}}
function qk(){if(void 0!==B("DATASYNC_ID",void 0))return B("DATASYNC_ID",void 0);throw new ok("Datasync ID not set","unknown");}
;function rk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function sk(a){return a.substr(0,a.indexOf(":"))||a}
;var tk={},uk=(tk.AUTH_INVALID="No user identifier specified.",tk.EXPLICIT_ABORT="Transaction was explicitly aborted.",tk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",tk.MISSING_INDEX="Index not created.",tk.MISSING_OBJECT_STORES="Object stores not created.",tk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",tk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",tk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
tk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",tk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",tk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",tk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",tk),vk={},wk=(vk.AUTH_INVALID="ERROR",vk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",vk.EXPLICIT_ABORT="IGNORED",vk.IDB_NOT_SUPPORTED="ERROR",vk.MISSING_INDEX=
"WARNING",vk.MISSING_OBJECT_STORES="ERROR",vk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",vk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",vk.QUOTA_EXCEEDED="WARNING",vk.QUOTA_MAYBE_EXCEEDED="WARNING",vk.UNKNOWN_ABORT="WARNING",vk.INCOMPATIBLE_DB_VERSION="WARNING",vk),xk={},yk=(xk.AUTH_INVALID=!1,xk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,xk.EXPLICIT_ABORT=!1,xk.IDB_NOT_SUPPORTED=!1,xk.MISSING_INDEX=!1,xk.MISSING_OBJECT_STORES=!1,xk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,xk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,xk.QUOTA_EXCEEDED=!1,xk.QUOTA_MAYBE_EXCEEDED=!0,xk.UNKNOWN_ABORT=!0,xk.INCOMPATIBLE_DB_VERSION=!1,xk);function zk(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?uk[a]:c;d=void 0===d?wk[a]:d;e=void 0===e?yk[a]:e;ok.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,zk.prototype)}
r(zk,ok);function Ak(a,b){zk.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},uk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ak.prototype)}
r(Ak,zk);function Bk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Bk.prototype)}
r(Bk,Error);var Ck=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Dk(a,b,c,d){b=sk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof zk)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new zk("QUOTA_EXCEEDED",a);if(wc&&"UnknownError"===e.name)return new zk("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Bk)return new zk("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ck.some(function(f){return e.message.includes(f)}))return new zk("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new zk("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Cb:e.name})];e.level="WARNING";return e}
function Ek(a,b,c){var d=ek();return new zk("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Fk(a){if(!a)throw Error();throw a;}
function Gk(a){return a}
function Hk(a){this.h=a}
function Ik(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=q(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=q(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Ik.all=function(a){return new Ik(new Hk(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={oa:0};f.oa<a.length;f={oa:f.oa},++f.oa)Jk(Ik.resolve(a[f.oa]).then(function(g){return function(h){d[g.oa]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
Ik.resolve=function(a){return new Ik(new Hk(function(b,c){a instanceof Ik?a.then(b,c):b(a)}))};
Ik.reject=function(a){return new Ik(new Hk(function(b,c){c(a)}))};
Ik.prototype.then=function(a,b){var c=this,d=null!=a?a:Gk,e=null!=b?b:Fk;return new Ik(new Hk(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Kk(c,c,d,f,g)}),c.onRejected.push(function(){Lk(c,c,e,f,g)})):"FULFILLED"===c.state.status?Kk(c,c,d,f,g):"REJECTED"===c.state.status&&Lk(c,c,e,f,g)}))};
function Jk(a,b){a.then(void 0,b)}
function Kk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Ik?Mk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Lk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Ik?Mk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Mk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Ik?Mk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Nk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ok(a){return new Promise(function(b,c){Nk(a,b,c)})}
function Pk(a){return new Ik(new Hk(function(b,c){Nk(a,b,c)}))}
;function Qk(a,b){return new Ik(new Hk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Rk(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(M());this.i=!1}
l=Rk.prototype;l.add=function(a,b,c){return Sk(this,[a],{mode:"readwrite",O:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Sk(this,[a],{mode:"readwrite",O:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Sk(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).count(b)})};
function Tk(a,b,c){a=a.h.createObjectStore(b,c);return new Uk(a)}
l.delete=function(a,b){return Sk(this,[a],{mode:"readwrite",O:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Sk(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).get(b)})};
function Vk(a,b){return Sk(a,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(c){c=c.objectStore("LogsRequestsStore");return Pk(c.h.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Sk(a,b,c,d){var e,f,g,h,k,m,n,t,z,v,C,D;return w(function(F){switch(F.h){case 1:var P={mode:"readonly",O:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?P.mode=c:Object.assign(P,c);e=P;a.transactionCount++;f=e.O?3:1;g=0;case 2:if(h){F.s(3);break}g++;k=Math.round(M());ua(F,4);m=a.h.transaction(b,e.mode);P=new Wk(m);P=Xk(P,d);return u(F,P,6);case 6:return n=F.i,t=Math.round(M()),Yk(a,k,t,g,void 0,b.join(),e),F.return(n);case 4:z=xa(F);v=Math.round(M());C=Dk(z,a.h.name,b.join(),a.h.version);
if((D=C instanceof zk&&!C.h)||g>=f)Yk(a,k,v,g,C,b.join(),e),h=C;F.s(2);break;case 3:return F.return(Promise.reject(h))}})}
function Yk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof zk&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&nk("QUOTA_EXCEEDED",{dbName:sk(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof zk&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),nk("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Zk(a,!1,d,f,b,g.tag),mk(e)):Zk(a,!0,d,f,b,g.tag)}
function Zk(a,b,c,d,e,f){nk("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.h.name};
function Uk(a){this.h=a}
l=Uk.prototype;l.add=function(a,b){return Pk(this.h.add(a,b))};
l.autoIncrement=function(){return this.h.autoIncrement};
l.clear=function(){return Pk(this.h.clear()).then(function(){})};
l.count=function(a){return Pk(this.h.count(a))};
function $k(a,b){return al(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?$k(this,a):Pk(this.h.delete(a))};
l.get=function(a){return Pk(this.h.get(a))};
l.index=function(a){try{return new bl(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Bk(a,this.h.name);throw b;}};
l.getName=function(){return this.h.name};
l.keyPath=function(){return this.h.keyPath};
function al(a,b,c){a=a.h.openCursor(b.query,b.direction);return cl(a).then(function(d){return Qk(d,c)})}
function Wk(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=zk;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Xk(a,b){var c=new Promise(function(d,e){try{Jk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return q(d).next().value})}
Wk.prototype.abort=function(){this.h.abort();this.i=!0;throw new zk("EXPLICIT_ABORT");};
Wk.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Uk(a),this.j.set(a,b));return b};
function bl(a){this.h=a}
l=bl.prototype;l.count=function(a){return Pk(this.h.count(a))};
l.delete=function(a){return dl(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Pk(this.h.get(a))};
l.getKey=function(a){return Pk(this.h.getKey(a))};
l.keyPath=function(){return this.h.keyPath};
l.unique=function(){return this.h.unique};
function dl(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return cl(a).then(function(d){return Qk(d,c)})}
function el(a,b){this.request=a;this.cursor=b}
function cl(a){return Pk(a).then(function(b){return b?new el(a,b):null})}
l=el.prototype;l.advance=function(a){this.cursor.advance(a);return cl(this.request)};
l.continue=function(a){this.cursor.continue(a);return cl(this.request)};
l.delete=function(){return Pk(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Pk(this.cursor.update(a))};function fl(a,b,c){return new Promise(function(d,e){function f(){z||(z=new Rk(g.result,{closed:t}));return z}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.yc,n=c.upgrade,t=c.closed,z;g.addEventListener("upgradeneeded",function(v){try{if(null===v.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");v.dataLoss&&"none"!==v.dataLoss&&nk("IDB_DATA_CORRUPTED",{reason:v.dataLossMessage||"unknown reason",dbName:sk(a)});var C=f(),D=new Wk(g.transaction);
n&&n(C,function(F){return v.oldVersion<F&&v.newVersion>=F},D);
D.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var v=g.result;k&&v.addEventListener("versionchange",function(){k(f())});
v.addEventListener("close",function(){nk("IDB_UNEXPECTEDLY_CLOSED",{dbName:sk(a),dbVersion:v.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function gl(a,b,c){c=void 0===c?{}:c;return fl(a,b,c)}
function hl(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.h)return ua(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),u(g,Ok(c),4);
if(2!=g.h)return va(g,0);f=xa(g);throw Dk(f,a,"",-1);})}
;function il(a){return new Promise(function(b){Nh(function(){b()},a)})}
function jl(a,b){this.name=a;this.options=b;this.l=!0;this.m=this.o=0;this.i=500}
jl.prototype.j=function(a,b,c){c=void 0===c?{}:c;return gl(a,b,c)};
jl.prototype.delete=function(a){a=void 0===a?{}:a;return hl(this.name,a)};
function kl(a,b){return new zk("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function ll(a,b){if(!b)throw Ek("openWithToken",sk(a.name));return a.open()}
jl.prototype.open=function(){function a(){var f,g,h,k,m,n,t,z,v,C;return w(function(D){switch(D.h){case 1:return g=null!=(f=Error().stack)?f:"",ua(D,2),u(D,c.j(c.name,c.options.version,e),4);case 4:h=D.i;for(var F=c.options,P=[],U=q(Object.keys(F.za)),W=U.next();!W.done;W=U.next()){W=W.value;var Ra=F.za[W],Y=void 0===Ra.hc?Number.MAX_VALUE:Ra.hc;!(h.h.version>=Ra.Xa)||h.h.version>=Y||h.h.objectStoreNames.contains(W)||P.push(W)}k=P;if(0===k.length){D.s(5);break}m=Object.keys(c.options.za);n=h.objectStoreNames();
if(c.m<mh("ytidb_reopen_db_retries",0))return c.m++,h.close(),mk(new zk("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:n})),D.return(a());if(!(c.o<mh("ytidb_remake_db_retries",1))){D.s(6);break}c.o++;if(!L("ytidb_remake_db_enable_backoff_delay")){D.s(7);break}return u(D,il(c.i),8);case 8:c.i*=2;case 7:return u(D,c.delete(),9);case 9:return mk(new zk("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:n})),D.return(a());
case 6:throw new Ak(n,m);case 5:return D.return(h);case 2:t=xa(D);if(t instanceof DOMException?"VersionError"!==t.name:"DOMError"in self&&t instanceof DOMError?"VersionError"!==t.name:!(t instanceof Object&&"message"in t)||"An attempt was made to open a database using a lower version than the existing version."!==t.message){D.s(10);break}return u(D,c.j(c.name,void 0,Object.assign({},e,{upgrade:void 0})),11);case 11:z=D.i;v=z.h.version;if(void 0!==c.options.version&&v>c.options.version+1)throw z.close(),
c.l=!1,kl(c,v);return D.return(z);case 10:throw b(),t instanceof Error&&!L("ytidb_async_stack_killswitch")&&(t.stack=t.stack+"\n"+g.substring(g.indexOf("\n")+1)),Dk(t,c.name,"",null!=(C=c.options.version)?C:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw kl(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,yc:b,upgrade:this.options.upgrade};return this.h=d=a()};var ml=new jl("YtIdbMeta",{za:{databases:{Xa:1}},upgrade:function(a,b){b(1)&&Tk(a,"databases",{keyPath:"actualName"})}});
function nl(a,b){var c;return w(function(d){if(1==d.h)return u(d,ll(ml,b),2);c=d.i;return d.return(Sk(c,["databases"],{O:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Pk(f.h.put(a,void 0)).then(function(){})})}))})}
function ol(a,b){var c;return w(function(d){if(1==d.h)return a?u(d,ll(ml,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function pl(a,b){var c,d;return w(function(e){return 1==e.h?(c=[],u(e,ll(ml,b),2)):3!=e.h?(d=e.i,u(e,Sk(d,["databases"],{O:!0,mode:"readonly"},function(f){c.length=0;return al(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function ql(a){return pl(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function rl(a,b){return pl(function(c){return void 0!==c.userIdentifier&&!a.includes(c.userIdentifier)},b)}
;var sl,tl=new function(){}(new function(){});
function ul(){var a,b,c,d;return w(function(e){switch(e.h){case 1:a=ek();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=bk)f=/WebKit\/([0-9]+)/.exec(Mb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Mb()),f=!(f&&602<=parseInt(f[1],10)));if(f||hc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ua(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return u(e,nl(d,tl),4);case 4:return u(e,ol("yt-idb-test-do-not-use",tl),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function vl(){if(void 0!==sl)return sl;hk=!0;return sl=ul().then(function(a){hk=!1;var b;if(null!=(b=dk())&&b.h){var c;b={hasSucceededOnce:(null==(c=ek())?void 0:c.hasSucceededOnce)||a};var d;null==(d=dk())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function wl(){return A("ytglobal.idbToken_")||void 0}
function xl(){var a=wl();return a?Promise.resolve(a):vl().then(function(b){(b=b?tl:void 0)&&y("ytglobal.idbToken_",b,void 0);return b})}
;var yl=0;function zl(a){yl||(yl=Rh.M(function(){var b,c,d,e,f;return w(function(g){switch(g.h){case 1:return u(g,xl(),2);case 2:b=g.i;if(!b)return g.return();c=!0;ua(g,3);return u(g,rl(a,b),5);case 5:d=g.i;if(!d.length){c=!1;g.s(6);break}e=d[0];return u(g,hl(e.actualName),7);case 7:return u(g,ol(e.actualName,b),6);case 6:va(g,4);break;case 3:f=xa(g),mk(f),c=!1;case 4:Rh.U(yl),yl=0,c&&zl(a),g.h=0}})}))}
new ed;function Al(a){if(!pk())throw a=new zk("AUTH_INVALID",{dbName:a}),mk(a),a;var b=qk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Bl(a,b,c,d){var e,f,g,h,k,m;return w(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",u(n,xl(),2);case 2:g=n.i;if(!g)throw h=Ek("openDbImpl",a,b),L("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),mk(h),h;rk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Al(a);ua(n,3);return u(n,nl(k,g),5);case 5:return u(n,gl(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return m=xa(n),ua(n,7),u(n,ol(k.actualName,g),9);case 9:va(n,
8);break;case 7:xa(n);case 8:throw m;}})}
function Cl(a,b,c){c=void 0===c?{}:c;return Bl(a,b,!1,c)}
function Dl(a,b,c){c=void 0===c?{}:c;return Bl(a,b,!0,c)}
function El(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.h)return u(e,xl(),2);if(3!=e.h){c=e.i;if(!c)return e.return();rk(a);d=Al(a);return u(e,hl(d.actualName,b),3)}return u(e,ol(d.actualName,c),0)})}
function Fl(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.h?u(e,hl(d.actualName,b),2):u(e,ol(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Gl(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.h)return u(d,xl(),2);if(3!=d.h){b=d.i;if(!b)return d.return();rk("LogsDatabaseV2");return u(d,ql(b),3)}c=d.i;return u(d,Fl(c,a,b),0)})}
function Hl(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.h)return u(d,xl(),2);if(3!=d.h){c=d.i;if(!c)return d.return();rk(a);return u(d,hl(a,b),3)}return u(d,ol(a,c),0)})}
;function Il(a){this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.sa=function(){};
this.now=Date.now;this.ya=!1;var b;this.Jb=null!=(b=a.Jb)?b:100;var c;this.Hb=null!=(c=a.Hb)?c:1;var d;this.Fb=null!=(d=a.Fb)?d:2592E6;var e;this.Db=null!=(e=a.Db)?e:12E4;var f;this.Gb=null!=(f=a.Gb)?f:5E3;var g;this.v=null!=(g=a.v)?g:void 0;this.Ma=!!a.Ma;var h;this.La=null!=(h=a.La)?h:.1;var k;this.Sa=null!=(k=a.Sa)?k:10;a.handleError&&(this.handleError=a.handleError);a.sa&&(this.sa=a.sa);a.ya&&(this.ya=a.ya);this.B=a.B;this.V=a.V;this.J=a.J;this.I=a.I;this.ea=a.ea;this.ib=a.ib;this.hb=a.hb;this.v&&
(!this.B||this.B("networkless_logging"))&&Jl(this)}
function Jl(a){a.v&&!a.ya&&(a.h=!0,a.Ma&&Math.random()<=a.La&&a.J.Pb(a.v),Kl(a),a.I.G()&&a.Ca(),a.B&&!a.B("use_new_nwl_initialization")&&(a.I.W(a.ib,a.Ca.bind(a)),a.I.W(a.hb,a.nb.bind(a))))}
l=Il.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J.set(d,this.v).then(function(e){d.id=e;c.I.G()&&Ll(c,d)}).catch(function(e){Ll(c,d);
Ml(c,e)})}else this.ea(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.v&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.B&&this.B("nwl_skip_retry")&&(e.skipRetry=c);if(this.I.G()||this.B&&this.B("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.h)return u(k,d.J.set(e,d.v).catch(function(m){Ml(d,m)}),2);
f(g,h);k.h=0})}}this.ea(a,b,e.skipRetry)}else this.J.set(e,this.v).catch(function(g){d.ea(a,b,e.skipRetry);
Ml(d,g)})}else this.ea(a,b,this.B&&this.B("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.J.ra(d.id,c.v):e=!0;c.I.ca&&c.B&&c.B("vss_network_hint")&&c.I.ca(!0);f(g,h)};
this.ea(d.url,d.options);this.J.set(d,this.v).then(function(g){d.id=g;e&&c.J.ra(d.id,c.v)}).catch(function(g){Ml(c,g)})}else this.ea(a,b)};
l.Ca=function(){var a=this;if(!this.v)throw Ek("throttleSend");this.i||(this.i=this.V.M(function(){var b;return w(function(c){if(1==c.h)return u(c,a.J.wb("NEW",a.v),2);if(3!=c.h)return b=c.i,b?u(c,Ll(a,b),3):(a.nb(),c.return());a.i&&(a.i=0,a.Ca());c.h=0})},this.Jb))};
l.nb=function(){this.V.U(this.i);this.i=0};
function Ll(a,b){var c,d;return w(function(e){switch(e.h){case 1:if(!a.v)throw c=Ek("immediateSend"),c;if(void 0===b.id){e.s(2);break}return u(e,a.J.Zb(b.id,a.v),3);case 3:(d=e.i)?b=d:a.sa(Error("The request cannot be found in the database."));case 2:if(Nl(a,b,a.Fb)){e.s(4);break}a.sa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return u(e,a.J.ra(b.id,a.v),5);case 5:return e.return();case 4:b.skipRetry||(b=Ol(a,b));if(!b){e.s(0);break}if(!b.skipRetry||
void 0===b.id){e.s(8);break}return u(e,a.J.ra(b.id,a.v),8);case 8:a.ea(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Ol(a,b){if(!a.v)throw Ek("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.h){case 1:g=Pl(f);if(!(a.B&&a.B("nwl_consider_error_code")&&g||a.B&&!a.B("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Sa)){m.s(2);break}if(!a.I.fa){m.s(3);break}return u(m,a.I.fa(),3);case 3:if(a.I.G()){m.s(2);break}c(e,f);if(!a.B||!a.B("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.s(6);break}return u(m,a.J.jb(b.id,a.v,!1),6);case 6:return m.return();case 2:if(a.B&&a.B("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Sa)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.s(8);break}return b.sendCount<a.Hb?u(m,a.J.jb(b.id,a.v),12):u(m,a.J.ra(b.id,a.v),8);case 12:a.V.M(function(){a.I.G()&&a.Ca()},a.Gb);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.s(2):u(h,a.J.ra(b.id,a.v),2);a.I.ca&&a.B&&a.B("vss_network_hint")&&a.I.ca(!0);d(e,f);h.h=0})};
return b}
function Nl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Kl(a){if(!a.v)throw Ek("retryQueuedRequests");a.J.wb("QUEUED",a.v).then(function(b){b&&!Nl(a,b,a.Db)?a.V.M(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):u(c,a.J.jb(b.id,a.v),2);Kl(a);c.h=0})}):a.I.G()&&a.Ca()})}
function Ml(a,b){a.Kb&&!a.I.G()?a.Kb(b):a.handleError(b)}
function Pl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Ql(a,b){this.version=a;this.args=b}
;function Rl(a,b){this.topic=a;this.h=b}
Rl.prototype.toString=function(){return this.topic};var Sl=A("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.wa;K.prototype.publish=K.prototype.ka;K.prototype.clear=K.prototype.clear;y("ytPubsub2Pubsub2Instance",Sl,void 0);var Tl=A("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",Tl,void 0);var Ul=A("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",Ul,void 0);var Vl=A("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",Vl,void 0);
y("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Wl(a,b){var c=Xl();c&&c.publish.call(c,a.toString(),a,b)}
function Yl(a){var b=Zl,c=Xl();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Tl[d])try{if(f&&b instanceof Rl&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ja){var m=new h;h.ja=m.version}var n=h.ja}catch(F){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var t=n.construct;
var z=k.args,v=z.length;if(0<v){var C=Array(v);for(k=0;k<v;k++)C[k]=z[k];var D=C}else D=[];f=t.call(n,h,D)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){wh(F)}},Vl[b.toString()]?A("yt.scheduler.instance")?Rh.M(g):Hh(g,0):g())});
Tl[d]=!0;Ul[b.toString()]||(Ul[b.toString()]=[]);Ul[b.toString()].push(d);return d}
function $l(){var a=am,b=Yl(function(c){a.apply(void 0,arguments);bm(b)});
return b}
function bm(a){var b=Xl();b&&("number"===typeof a&&(a=[a]),db(a,function(c){b.unsubscribeByKey(c);delete Tl[c]}))}
function Xl(){return A("ytPubsub2Pubsub2Instance")}
;function cm(a,b){jl.call(this,a,b);this.options=b;rk(a)}
r(cm,jl);function dm(a,b){var c;return function(){c||(c=new cm(a,b));return c}}
cm.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.kb?Dl:Cl)(a,b,Object.assign({},c))};
cm.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.kb?Hl:El)(this.name,a)};
function em(a,b){return dm(a,b)}
;var fm;
function gm(){if(fm)return fm();var a={};fm=em("LogsDatabaseV2",{za:(a.LogsRequestsStore={Xa:2},a),kb:!1,upgrade:function(b,c,d){c(2)&&Tk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return fm()}
;function hm(a){return ll(gm(),a)}
function im(a,b){var c,d,e,f;return w(function(g){if(1==g.h)return c={startTime:M(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},u(g,hm(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:B("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),u(g,Vk(d,e),3);f=g.i;c.zc=M();jm(c);return g.return(f)})}
function km(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.h)return c={startTime:M(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},u(m,hm(b),2);if(3!=m.h)return d=m.i,e=B("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,M()],h=IDBKeyRange.bound(f,g),k=void 0,u(m,Sk(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(n){return dl(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(t){t.getValue()&&(k=t.getValue(),"NEW"===a&&(k.status="QUEUED",
t.update(k)))})}),3);
c.zc=M();jm(c);return m.return(k)})}
function lm(a,b){var c;return w(function(d){if(1==d.h)return u(d,hm(b),2);c=d.i;return d.return(Sk(c,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Pk(f.h.put(g,void 0)).then(function(){return g})})}))})}
function mm(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.h)return u(e,hm(b),2);d=e.i;return e.return(Sk(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Pk(g.h.put(h,void 0)).then(function(){return h})):Ik.resolve(void 0)})}))})}
function nm(a,b){var c;return w(function(d){if(1==d.h)return u(d,hm(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function om(a){var b,c;return w(function(d){if(1==d.h)return u(d,hm(a),2);b=d.i;c=M()-2592E6;return u(d,Sk(b,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){return al(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function pm(){return w(function(a){return u(a,Gl(),0)})}
function jm(a){L("nwl_csi_killswitch")||.01>=Math.random()&&Wl("nwl_transaction_latency_payload",a)}
;var qm={},rm=em("ServiceWorkerLogsDatabase",{za:(qm.SWHealthLog={Xa:1},qm),kb:!0,upgrade:function(a,b){b(1)&&Tk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function sm(a){return ll(rm(),a)}
function tm(a){var b,c;return w(function(d){if(1==d.h)return u(d,sm(a),2);b=d.i;c=M()-2592E6;return u(d,Sk(b,["SWHealthLog"],{mode:"readwrite",O:!0},function(e){return al(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function um(a){var b;return w(function(c){if(1==c.h)return u(c,sm(a),2);b=c.i;return u(c,b.clear("SWHealthLog"),0)})}
;var vm={},wm=0;
function xm(a){var b=void 0===b?"":b;if(a)if(b)wi(a,void 0,"POST",b,void 0);else if(B("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))wi(a,void 0,"GET","",void 0);else{b:{try{var c=new ab({url:a});if(c.j&&c.i||c.l){var d=Xb(a.match(Wb)[5]||null),e;if(!(e=!d||!d.endsWith("/aclk"))){var f=a.search(cc);d:{for(b=0;0<=(b=a.indexOf("ri",b))&&b<f;){var g=a.charCodeAt(b-1);if(38==g||63==g){var h=a.charCodeAt(b+2);if(!h||61==h||38==h||35==h){var k=b;break d}}b+=3}k=-1}if(0>k)var m=null;else{var n=a.indexOf("&",k);if(0>
n||n>f)n=f;k+=3;m=decodeURIComponent(a.substr(k,n-k).replace(/\+/g," "))}e="1"!==m}var t=!e;break b}}catch(v){}t=!1}if(t){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(v){}z=!1}t=z?!0:!1}else t=!1;t||ym(a)}}
function ym(a){var b=new Image,c=""+wm++;vm[c]=b;b.onload=b.onerror=function(){delete vm[c]};
b.src=a}
;function zm(){this.h=new Map;this.i=!1}
function Am(){if(!zm.h){var a=A("yt.networkRequestMonitor.instance")||new zm;y("yt.networkRequestMonitor.instance",a,void 0);zm.h=a}return zm.h}
zm.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
zm.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
zm.prototype.removeParams=function(a){return a.split("?")[0]};
zm.prototype.removeParams=zm.prototype.removeParams;zm.prototype.isEndpointCFR=zm.prototype.isEndpointCFR;zm.prototype.requestComplete=zm.prototype.requestComplete;zm.getInstance=Am;var Bm;function Cm(){Bm||(Bm=new Vj("yt.offline"));return Bm}
function Dm(a){if(L("offline_error_handling")){var b=Cm().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Cm().set("errors",b,2592E3,!0)}}
function Em(){if(L("offline_error_handling")){var a=Cm().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new ok(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;wh(c)}Cm().set("errors",{},2592E3,!0)}}}
;var Fm=mh("network_polling_interval",3E4);function N(){we.call(this);this.L=0;this.S=this.m=!1;this.l=this.bb();L("use_shared_nsm")?(ze.h||(ze.h=new ze(Rh)),this.j=ze.h):(Gm(this),Hm(this))}
r(N,we);function Im(){if(!N.h){var a=A("yt.networkStatusManager.instance")||new N;y("yt.networkStatusManager.instance",a,void 0);N.h=a}return N.h}
l=N.prototype;l.G=function(){if(L("use_shared_nsm")&&this.j){var a;return null==(a=this.j)?void 0:a.G()}return this.l};
l.ca=function(a){if(L("use_shared_nsm")&&this.j){var b;null!=(b=this.j)&&(b.j=a)}else a!==this.l&&(this.l=a)};
l.ac=function(a){!L("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.L||Jm(this))};
l.bb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Sb=function(){this.S=!0};
l.W=function(a,b){return L("use_shared_nsm")&&this.j?this.j.W(a,b):we.prototype.W.call(this,a,b)};
function Hm(a){window.addEventListener("online",function(){return w(function(b){if(1==b.h)return u(b,a.fa(),2);a.S&&Em();b.h=0})})}
function Gm(a){window.addEventListener("offline",function(){return w(function(b){return u(b,a.fa(),0)})})}
function Jm(a){a.L=Lh(function(){return w(function(b){if(1==b.h)return a.l?a.bb()||!a.m?b.s(3):u(b,a.fa(),3):u(b,a.fa(),3);Jm(a);b.h=0})},Fm)}
l.fa=function(a){var b=this;if(L("use_shared_nsm")&&this.j){var c=Ae(this.j,a);c.then(function(d){L("use_cfr_monitor")&&Am().requestComplete("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g,h;return w(function(k){switch(k.h){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,ua(k,2,3),e&&(b.A=Rh.M(function(){e.abort()},a||2E4)),u(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ya(k);L("use_cfr_monitor")&&Am().requestComplete("generate_204",h);b.u=void 0;b.A&&Rh.U(b.A);h!==b.l&&(b.l=h,b.l&&b.m?xe(b,"ytnetworkstatus-online"):b.m&&xe(b,"ytnetworkstatus-offline"));d(h);za(k);break;case 2:xa(k),h=!1,k.s(3)}})})};
N.prototype.sendNetworkCheckRequest=N.prototype.fa;N.prototype.listen=N.prototype.W;N.prototype.enableErrorFlushing=N.prototype.Sb;N.prototype.getWindowStatus=N.prototype.bb;N.prototype.monitorNetworkStatusChange=N.prototype.ac;N.prototype.networkStatusHint=N.prototype.ca;N.prototype.isNetworkAvailable=N.prototype.G;N.getInstance=Im;function Km(a){a=void 0===a?{}:a;we.call(this);var b=this;this.l=this.L=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";L("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.j=Im();var c=A("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.tb);a.Pa&&!L("use_shared_nsm")&&(c=A("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=A("yt.networkStatusManager.instance.listen").bind(this.j))a.Ua?
(this.Ua=a.Ua,c(this.u,function(){Lm(b,"publicytnetworkstatus-online");L("use_shared_nsm")&&a.Pa&&Em()}),c(this.m,function(){Lm(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){xe(b,"publicytnetworkstatus-online");
L("use_shared_nsm")&&a.Pa&&Em()}),c(this.m,function(){xe(b,"publicytnetworkstatus-offline")}))}
r(Km,we);Km.prototype.G=function(){var a=A("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Km.prototype.ca=function(a){var b=A("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Km.prototype.fa=function(a){var b=this,c;return w(function(d){c=A("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return L("skip_network_check_if_cfr")&&Am().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ca((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.G())})):c?d.return(c(a)):d.return(!0)})};
function Lm(a,b){a.Ua?a.l?(Rh.U(a.L),a.L=Rh.M(function(){a.A!==b&&(xe(a,b),a.A=b,a.l=M())},a.Ua-(M()-a.l))):(xe(a,b),a.A=b,a.l=M()):xe(a,b)}
;var Mm;function Nm(){Il.call(this,{J:{Pb:om,ra:nm,wb:km,Zb:lm,jb:mm,set:im},I:Om(),handleError:wh,sa:xh,ea:Pm,now:M,Kb:Dm,V:Qh(),ib:"publicytnetworkstatus-online",hb:"publicytnetworkstatus-offline",Ma:!0,La:.1,Sa:mh("potential_esf_error_limit",10),B:L,ya:!(pk()&&Qm())});this.j=new ed;L("networkless_immediately_drop_all_requests")&&pm();Hl("LogsDatabaseV2")}
r(Nm,Il);function Rm(){var a=A("yt.networklessRequestController.instance");a||(a=new Nm,y("yt.networklessRequestController.instance",a,void 0),L("networkless_logging")&&xl().then(function(b){a.v=b;Jl(a);a.j.resolve();a.Ma&&Math.random()<=a.La&&a.v&&tm(a.v);L("networkless_immediately_drop_sw_health_store")&&Sm(a)}));
return a}
Nm.prototype.writeThenSend=function(a,b){b||(b={});pk()||(this.h=!1);Il.prototype.writeThenSend.call(this,a,b)};
Nm.prototype.sendThenWrite=function(a,b,c){b||(b={});pk()||(this.h=!1);Il.prototype.sendThenWrite.call(this,a,b,c)};
Nm.prototype.sendAndWrite=function(a,b){b||(b={});pk()||(this.h=!1);Il.prototype.sendAndWrite.call(this,a,b)};
Nm.prototype.awaitInitialization=function(){return this.j.promise};
function Sm(a){var b;w(function(c){if(!a.v)throw b=Ek("clearSWHealthLogsDb"),b;return c.return(um(a.v).catch(function(d){a.handleError(d)}))})}
function Pm(a,b,c){L("use_cfr_monitor")&&Tm(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(M());c&&0===Object.keys(b).length?xm(a):ti(a,b)}
function Om(){Mm||(Mm=new Km({Pa:!0,tb:!0}));return Mm}
function Tm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Am().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Am().requestComplete(a,!0);d(e,f)}}
function Qm(){return L("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==Yb(document.location.toString()):!0}
;var Um=!1,Vm=0,Wm=0,Xm,Ym=x.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Um,potentialEsfErrorCounter:Wm};y("ytNetworklessLoggingInitializationOptions",Ym,void 0);
function Zm(){var a;w(function(b){switch(b.h){case 1:return u(b,xl(),2);case 2:a=b.i;if(!a||!pk()&&!L("nwl_init_require_datasync_id_killswitch")||!Qm()){b.s(0);break}Um=!0;Ym.isNwlInitialized=Um;if(!L("use_new_nwl_initialization")){b.s(4);break}return u(b,Rm().awaitInitialization(),5);case 5:return $m().W("publicytnetworkstatus-online",an),$m().W("publicytnetworkstatus-offline",bn),b.return();case 4:return u(b,Hl("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.s(7);break}return u(b,om(a),8);
case 8:return u(b,tm(a),7);case 7:cn();$m().G()&&an();$m().W("publicytnetworkstatus-online",an);$m().W("publicytnetworkstatus-offline",bn);if(!L("networkless_immediately_drop_sw_health_store")){b.s(10);break}return u(b,dn(),10);case 10:if(L("networkless_immediately_drop_all_requests"))return u(b,pm(),0);b.s(0)}})}
function en(a,b){function c(d){var e=$m().G();if(!fn()||!d||e&&L("vss_networkless_bypass_write"))gn(a,b);else{var f={url:a,options:b,timestamp:M(),status:"NEW",sendCount:0};im(f,d).then(function(g){f.id=g;$m().G()&&hn(f)}).catch(function(g){hn(f);
$m().G()?wh(g):Dm(g)})}}
b=void 0===b?{}:b;L("skip_is_supported_killswitch")?xl().then(function(d){c(d)}):c(wl())}
function jn(a,b){function c(d){if(fn()&&d){var e={url:a,options:b,timestamp:M(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){L("use_cfr_monitor")&&Am().requestComplete(e.url,!0);void 0!==e.id?nm(e.id,d):f=!0;L("vss_network_hint")&&$m().ca(!0);g(k,m)};
if(L("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){Am().requestComplete(e.url,!1);h(k,m)}}gn(e.url,e.options);
im(e,d).then(function(k){e.id=k;f&&nm(e.id,d)}).catch(function(k){$m().G()?wh(k):Dm(k)})}else gn(a,b)}
b=void 0===b?{}:b;L("skip_is_supported_killswitch")?xl().then(function(d){c(d)}):c(wl())}
function an(){var a=wl();if(!a)throw Ek("throttleSend");Vm||(Vm=Rh.M(function(){var b;return w(function(c){if(1==c.h)return u(c,km("NEW",a),2);if(3!=c.h)return b=c.i,b?u(c,hn(b),3):(bn(),c.return());Vm&&(Vm=0,an());c.h=0})},100))}
function bn(){Rh.U(Vm);Vm=0}
function hn(a){var b,c,d;return w(function(e){switch(e.h){case 1:b=wl();if(!b)throw c=Ek("immediateSend"),c;if(void 0===a.id){e.s(2);break}return u(e,lm(a.id,b),3);case 3:(d=e.i)?a=d:xh(Error("The request cannot be found in the database."));case 2:if(kn(a,2592E6)){e.s(4);break}xh(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.s(5);break}return u(e,nm(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=ln(a));var f=a,g,h;if(null==f?0:null==(g=f.options)?
0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(M());a=f;if(!a){e.s(0);break}if(!a.skipRetry||void 0===a.id){e.s(8);break}return u(e,nm(a.id,b),8);case 8:gn(a.url,a.options,!!a.skipRetry),e.h=0}})}
function ln(a){var b=wl();if(!b)throw Ek("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.h){case 1:L("use_cfr_monitor")&&Am().requestComplete(a.url,!1);g=Pl(f);if(!(L("nwl_consider_error_code")&&g||!L("nwl_consider_error_code")&&mn()<=mh("potential_esf_error_limit",10))){m.s(2);break}if(L("skip_checking_network_on_cfr_failure")&&(!L("skip_checking_network_on_cfr_failure")||Am().isEndpointCFR(a.url))){m.s(3);break}return u(m,$m().fa(),3);case 3:if($m().G()){m.s(2);break}c(e,f);if(!L("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.s(6);break}return u(m,mm(a.id,b,!1),6);case 6:return m.return();case 2:if(L("nwl_consider_error_code")&&!g&&mn()>mh("potential_esf_error_limit",10))return m.return();A("ytNetworklessLoggingInitializationOptions")&&Ym.potentialEsfErrorCounter++;Wm++;if(void 0===(null==(k=a)?void 0:k.id)){m.s(8);break}return 1>a.sendCount?u(m,mm(a.id,b),12):u(m,nm(a.id,b),8);case 12:Rh.M(function(){$m().G()&&an()},5E3);
case 8:c(e,f),m.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.h)return L("use_cfr_monitor")&&Am().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.s(2):u(h,nm(a.id,b),2);L("vss_network_hint")&&$m().ca(!0);d(e,f);h.h=0})};
return a}
function kn(a,b){a=a.timestamp;return M()-a>=b?!1:!0}
function cn(){var a=wl();if(!a)throw Ek("retryQueuedRequests");km("QUEUED",a).then(function(b){b&&!kn(b,12E4)?Rh.M(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):u(c,mm(b.id,a),2);cn();c.h=0})}):$m().G()&&an()})}
function dn(){var a,b;return w(function(c){a=wl();if(!a)throw b=Ek("clearSWHealthLogsDb"),b;return c.return(um(a).catch(function(d){wh(d)}))})}
function $m(){if(L("use_new_nwl"))return Om();Xm||(Xm=new Km({Pa:!0,tb:!0}));return Xm}
function gn(a,b,c){c&&0===Object.keys(b).length?xm(a):ti(a,b)}
function fn(){return A("ytNetworklessLoggingInitializationOptions")?Ym.isNwlInitialized:Um}
function mn(){return A("ytNetworklessLoggingInitializationOptions")?Ym.potentialEsfErrorCounter:Wm}
;function nn(a){var b=this;this.config_=null;a?this.config_=a:Nj()&&(this.config_=hj());Lh(function(){ak(b)},5E3)}
nn.prototype.isReady=function(){!this.config_&&Nj()&&(this.config_=hj());return!!this.config_};
function lj(a,b,c,d){function e(C){C=void 0===C?!1:C;var D;if(d.retry&&"www.youtube-nocookie.com"!=h&&(C||L("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(D=Yj(b,c,m,k)),D)){var F=g.onSuccess,P=g.onFetchSuccess;g.onSuccess=function(U,W){Zj(D);F(U,W)};
c.onFetchSuccess=function(U,W){Zj(D);P(U,W)}}try{C&&d.retry&&!d.Bb.bypassNetworkless?(g.method="POST",d.Bb.writeThenSend?L("use_new_nwl")?Rm().writeThenSend(v,g):en(v,g):L("use_new_nwl")?Rm().sendAndWrite(v,g):jn(v,g)):(g.method="POST",g.postParams||(g.postParams={}),ti(v,g))}catch(U){if("InvalidAccessError"==U.name)D&&(Zj(D),D=0),xh(Error("An extension is blocking network request."));
else throw U;}D&&Lh(function(){ak(a)},5E3)}
!B("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&xh(new ok("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new ok("innertube xhrclient not ready",b,c,d);wh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(C,D){if(d.onSuccess)d.onSuccess(D)},
onFetchSuccess:function(C){if(d.onSuccess)d.onSuccess(C)},
onError:function(C,D){if(d.onError)d.onError(D)},
onFetchError:function(C){if(d.onError)d.onError(C)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Wb)&&(h=f);var k=a.config_.Yb||!1,m=Tj(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,t={alt:"json"},z=a.config_.Xb&&f;z=z&&f.startsWith("Bearer");z||(t.key=a.config_.innertubeApiKey);var v=hi(""+h+n,t||{},!0);L("use_new_nwl")&&Rm().h||!L("use_new_nwl")&&
fn()?vl().then(function(C){e(C)}):e(!1)}
;function lk(a,b,c){c=void 0===c?{}:c;var d=nn;B("ytLoggingEventsDefaultDisabled",!1)&&nn==nn&&(d=null);sj(a,b,d,c)}
;var on=[{gb:function(a){return"Cannot read property '"+a.key+"'"},
Ra:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{gb:function(a){return"Cannot call '"+a.key+"'"},
Ra:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{gb:function(a){return a.key+" is not defined"},
Ra:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var qn={ia:[],ha:[{la:pn,weight:500}]};function pn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function rn(){this.ha=[];this.ia=[]}
var sn;function tn(){if(!sn){var a=sn=new rn;a.ia.length=0;a.ha.length=0;qn.ia&&a.ia.push.apply(a.ia,qn.ia);qn.ha&&a.ha.push.apply(a.ha,qn.ha)}return sn}
;var un=new K;function vn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=wn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=wn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=wn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function wn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function xn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=yn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=vn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?yn(e+".ve",f,g,h):0;d+=g;d+=yn(e,a[e],b,c);if(500<d)break}}else c[b]=zn(a),d+=c[b].length;else c[b]=zn(a),d+=c[b].length;return d}
function yn(a,b,c,d){c+="."+a;a=zn(b);d[c]=a;return c.length+a.length}
function zn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var An=new Set,Bn=0,Cn=0,Dn=0,En=[],Fn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function kk(a){Gn(a)}
function Hn(a){Gn(a,"WARNING")}
function Gn(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||B("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),L("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=Bn))){d=En;var g=Vd(a);e=g.message||"Unknown Error";f=g.name||"UnknownError";var h=g.stack||a.i||"Not available";if(h.startsWith(f+": "+e)){var k=h.split("\n");k.shift();h=k.join("\n")}k=g.lineNumber||"Not available";g=g.fileName||"Not available";var m=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var n=0;n<a.args.length&&!(m=xn(a.args[n],"params."+n,c,m),500<=m);n++);else if(a.hasOwnProperty("params")&&
a.params){var t=a.params;if("object"===typeof a.params)for(n in t){if(t[n]){var z="params."+n,v=zn(t[n]);c[z]=v;m+=z.length+v.length;if(500<m)break}}else c.params=zn(t)}if(d.length)for(n=0;n<d.length&&!(m=xn(d[n],"params.context."+n,c,m),500<=m);n++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);n={message:e,name:f,lineNumber:k,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(n.lineNumber=n.lineNumber+":"+c);if("IGNORED"===a.level)a=
0;else a:{a=tn();c=q(a.ia);for(d=c.next();!d.done;d=c.next())if(d=d.value,n.message&&n.message.match(d.uo)){a=d.weight;break a}a=q(a.ha);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.la(n)){a=c.weight;break a}a=1}n.sampleWeight=a;a=q(on);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Ra[n.name])for(e=q(c.Ra[n.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=n.message.match(f.regexp)){n.params["params.error.original"]=d[0];e=f.groups;f={};for(k=0;k<e.length;k++)f[e[k]]=d[k+1],n.params["params.error."+
e[k]]=d[k+1];n.message=c.gb(f);break}n.params||(n.params={});a=tn();n.params["params.errorServiceSignature"]="msg="+a.ia.length+"&cb="+a.ha.length;n.params["params.serviceWorker"]="false";x.document&&x.document.querySelectorAll&&(n.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Ab("sample").constructor!==yb&&(n.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(n);if(0!==n.sampleWeight&&!An.has(n.message)){"ERROR"===
b?(un.ka("handleError",n),L("record_app_crashed_web")&&0===Dn&&1===n.sampleWeight&&(Dn++,a={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},L("report_client_error_with_app_crash_ks")||(a.systemHealth={crashData:{clientError:{logMessage:{message:n.message}}}}),lk("appCrashed",a)),Cn++):"WARNING"===b&&un.ka("handleWarning",n);if(L("kevlar_gel_error_routing")){a=b;b:{c=q(Fn);for(d=c.next();!d.done;d=c.next())if(ck(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:n.stack};n.fileName&&
(d.filename=n.fileName);c=n.lineNumber&&n.lineNumber.split?n.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:n.message,errorClassName:n.name,sampleWeight:n.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};
e={pageUrl:window.location.href,kvPairs:[]};B("FEXP_EXPERIMENTS")&&(e.experimentIds=B("FEXP_EXPERIMENTS"));f=B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);k=ch.EXPERIMENT_FLAGS;if((!k||!k.web_disable_gel_stp_ecatcher_killswitch)&&f)for(g=q(Object.keys(f)),k=g.next();!k.done;k=g.next())k=k.value,e.kvPairs.push({key:k,value:String(f[k])});if(f=n.params)for(g=q(Object.keys(f)),k=g.next();!k.done;k=g.next())k=k.value,e.kvPairs.push({key:"client."+k,value:String(f[k])});f=kh("SERVER_NAME");k=kh("SERVER_VERSION");
f&&k&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:k}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(lk("clientError",c),("ERROR"===a||L("errors_flush_gel_always_killswitch"))&&aj())}if(!L("suppress_error_204_logging")){a=n.params||{};b={urlParams:{a:"logerror",t:"jserror",type:n.name,msg:n.message.substr(0,250),line:n.lineNumber,level:b,"client.name":a.name},postParams:{url:B("PAGE_NAME",window.location.href),file:n.fileName},method:"POST"};a.version&&
(b["client.version"]=a.version);if(b.postParams){n.stack&&(b.postParams.stack=n.stack);c=q(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=q(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=B("SERVER_NAME",void 0);c=B("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}ti(B("ECATCHER_REPORT_HOST","")+"/error_204",b)}try{An.add(n.message)}catch(C){}Bn++}}}
function In(a){var b=Ga.apply(1,arguments),c=a;c.args||(c.args=[]);c.args.push.apply(c.args,fa(b))}
;function Jn(){this.register=new Map}
function Kn(a){a=q(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.xo("ABORTED")}
Jn.prototype.clear=function(){Kn(this);this.register.clear()};
var Ln=new Jn;var Mn=Date.now().toString();
function Nn(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Mn)for(a=1,b=0;b<Mn.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Mn.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var On,Pn=x.ytLoggingDocDocumentNonce_;Pn||(Pn=Nn(),Wa("ytLoggingDocDocumentNonce_",Pn));On=Pn;var Qn={mg:0,md:1,ud:2,Oj:3,og:4,Kn:5,Ek:6,em:7,Gl:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function Rn(a){this.h=a}
function Sn(a){return new Rn({trackingParams:a})}
Rn.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Rn.prototype.getAsJspb=function(){var a=new vg;void 0!==this.h.trackingParams?G(a,1,this.h.trackingParams):(void 0!==this.h.veType&&G(a,2,this.h.veType),void 0!==this.h.veCounter&&G(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&G(a,3,this.h.elementIndex));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();H(a,7,b)}void 0!==this.h.youtubeData&&H(a,8,this.h.jspbYoutubeData);return a};
Rn.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Rn.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Tn(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Un(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Vn(a){return B(Un(void 0===a?0:a),void 0)}
y("yt_logging_screen.getRootVeType",Vn,void 0);function Wn(a){return(a=Vn(void 0===a?0:a))?new Rn({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Xn(){var a=B("csn-to-ctt-auth-info");a||(a={},jh("csn-to-ctt-auth-info",a));return a}
function Yn(a){a=void 0===a?0:a;var b=B(Tn(a));if(!b&&!B("USE_CSN_FALLBACK",!0))return null;b||!L("use_undefined_csn_any_layer")&&0!=a||(b="UNDEFINED_CSN");return b?b:null}
y("yt_logging_screen.getCurrentCsn",Yn,void 0);function Zn(a,b,c){var d=Xn();(c=Yn(c))&&delete d[c];b&&(d[a]=b)}
function $n(a){return Xn()[a]}
y("yt_logging_screen.getCttAuthInfo",$n,void 0);function ao(a,b,c,d){c=void 0===c?0:c;if(a!==B(Tn(c))||b!==B(Un(c)))Zn(a,d,c),jh(Tn(c),a),jh(Un(c),b),b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:On,clientScreenNonce:a};L("use_default_heartbeat_client")?lk("foregroundHeartbeatScreenAssociated",e):sj("foregroundHeartbeatScreenAssociated",e,nn)}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
y("yt_logging_screen.setCurrentScreen",ao,void 0);var bo=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",bo,void 0);function co(a){Zg(bo,arguments)}
;var eo={ld:3611,Ac:27686,Bc:85013,Cc:23462,Ec:42016,Fc:62407,Gc:26926,Dc:43781,Hc:51236,Ic:79148,Jc:50160,Kc:77504,Wc:87907,Xc:18630,Yc:54445,Zc:80935,bd:105675,cd:37521,dd:47786,ed:98349,fd:123695,gd:6827,hd:29434,jd:7282,kd:124448,od:32276,nd:76278,pd:93911,qd:106531,rd:27259,sd:27262,td:27263,vd:21759,wd:27107,xd:62936,yd:49568,zd:38408,Ad:80637,Bd:68727,Cd:68728,Dd:80353,Ed:80356,Fd:74610,Gd:45707,Hd:83962,Id:83970,Jd:46713,Kd:89711,Ld:74612,Md:93265,Nd:74611,Od:131380,Qd:128979,Rd:139311,Sd:128978,
Pd:131391,Td:105350,Vd:139312,Wd:134800,Ud:131392,Yd:113533,Zd:93252,ae:99357,ce:94521,de:114252,ee:113532,ge:94522,be:94583,he:88E3,ie:139580,je:93253,ke:93254,le:94387,me:94388,ne:93255,oe:97424,Xd:72502,pe:110111,qe:76019,se:117092,te:117093,re:89431,ue:110466,we:77240,xe:60508,ye:137401,ze:137402,Ae:137046,Be:73393,Ce:113534,De:92098,Ee:131381,Fe:84517,Ge:83759,He:80357,Ie:86113,Je:72598,Ke:72733,Le:107349,Me:124275,Ne:118203,Oe:133275,Pe:133274,Qe:133272,Re:133273,Se:133276,Te:144507,Ue:143247,
Ve:143248,We:143249,Xe:143250,Ye:143251,Ze:144401,bf:117431,af:133797,cf:128572,df:133405,ef:117429,ff:117430,gf:117432,hf:120080,jf:117259,kf:121692,lf:132972,mf:133051,nf:133658,pf:132971,qf:97615,sf:143359,rf:143356,uf:143361,tf:143358,wf:143360,vf:143357,xf:142303,yf:143353,zf:143354,Af:144479,Bf:143355,Cf:31402,Ef:133624,Ff:133623,Gf:133622,Df:133621,Hf:84774,If:95117,Jf:98930,Kf:98931,Lf:98932,Mf:43347,Nf:129889,Of:45474,Pf:100352,Qf:84758,Rf:98443,Sf:117985,Tf:74613,Uf:74614,Vf:64502,Wf:136032,
Xf:74615,Yf:74616,Zf:122224,ag:74617,cg:77820,dg:74618,eg:93278,fg:93274,gg:93275,hg:93276,ig:22110,jg:29433,kg:133798,lg:132295,ng:120541,pg:82047,qg:113550,rg:75836,sg:75837,tg:42352,ug:84512,vg:76065,wg:75989,xg:16623,yg:32594,zg:27240,Ag:32633,Bg:74858,Dg:3945,Cg:16989,Eg:45520,Fg:25488,Gg:25492,Hg:25494,Ig:55760,Jg:14057,Kg:18451,Lg:57204,Mg:57203,Ng:17897,Og:57205,Pg:18198,Qg:17898,Rg:17909,Sg:43980,Tg:46220,Ug:11721,Vg:49954,Wg:96369,Xg:3854,Yg:56251,Zg:25624,rh:16906,sh:99999,th:68172,uh:27068,
vh:47973,wh:72773,xh:26970,yh:26971,zh:96805,Ah:17752,Bh:73233,Ch:109512,Dh:22256,Eh:14115,Fh:22696,Gh:89278,Hh:89277,Ih:109513,Jh:43278,Kh:43459,Lh:43464,Mh:89279,Nh:43717,Oh:55764,Ph:22255,Qh:89281,Rh:40963,Sh:43277,Th:43442,Uh:91824,Vh:120137,Wh:96367,Xh:36850,Yh:72694,Zh:37414,ai:36851,ci:124863,bi:121343,di:73491,fi:54473,gi:43375,hi:46674,ii:143815,ji:139095,ki:144402,li:32473,mi:72901,ni:72906,oi:50947,ri:50612,si:50613,ti:50942,vi:84938,wi:84943,xi:84939,yi:84941,zi:84944,Ai:84940,Bi:84942,
Ci:35585,Di:51926,Ei:79983,Fi:63238,Gi:18921,Hi:63241,Ii:57893,Ji:41182,Ki:135732,Li:33424,Mi:22207,Ni:42993,Oi:36229,Pi:22206,Qi:22205,Ri:18993,Si:19001,Ti:18990,Ui:18991,Vi:18997,Wi:18725,Xi:19003,Yi:36874,Zi:44763,aj:33427,bj:67793,cj:22182,dj:37091,ej:34650,fj:50617,gj:47261,hj:22287,ij:25144,jj:97917,kj:62397,lj:125598,mj:137935,nj:36961,oj:108035,pj:27426,qj:27857,rj:27846,sj:27854,tj:69692,uj:61411,vj:39299,wj:38696,xj:62520,yj:36382,zj:108701,Aj:50663,Bj:36387,Cj:14908,Dj:37533,Ej:105443,
Fj:61635,Gj:62274,Hj:133818,Ij:65702,Jj:65703,Kj:65701,Lj:76256,Mj:37671,Nj:49953,Pj:36216,Qj:28237,Rj:39553,Sj:29222,Tj:26107,Uj:38050,Vj:26108,Xj:120745,Wj:26109,Yj:26110,Zj:66881,ak:28236,bk:14586,ck:57929,dk:74723,ek:44098,fk:44099,ik:23528,jk:61699,gk:134104,hk:134103,kk:59149,lk:101951,mk:97346,nk:118051,pk:95102,qk:64882,rk:119505,sk:63595,tk:63349,uk:95101,vk:75240,wk:27039,xk:68823,yk:21537,zk:83464,Ak:75707,Bk:83113,Ck:101952,Dk:101953,Fk:79610,Gk:125755,Hk:24402,Ik:24400,Jk:32925,Kk:57173,
Lk:122502,Mk:145268,Nk:138480,Ok:64423,Pk:64424,Qk:33986,Rk:100828,Sk:129089,Tk:21409,Xk:135155,Yk:135156,Zk:135157,al:135158,bl:135159,dl:135160,fl:135161,il:135162,jl:135163,kl:135164,ll:135165,ml:135166,Uk:11070,Vk:11074,Wk:17880,nl:14001,pl:30709,ql:30707,rl:30711,sl:30710,ul:30708,ol:26984,vl:63648,wl:63649,xl:51879,yl:111059,zl:5754,Al:20445,Cl:130975,Bl:130976,Dl:110386,El:113746,Fl:66557,Hl:17310,Il:28631,Jl:21589,Kl:68012,Ll:60480,Ml:138664,Nl:141121,Ol:31571,Pl:141978,Ql:76980,Rl:41577,
Sl:45469,Tl:38669,Ul:13768,Vl:13777,Wl:141842,Xl:62985,Yl:4724,Zl:59369,am:43927,bm:43928,cm:12924,dm:100355,gm:56219,hm:27669,im:10337,fm:47896,jm:122629,lm:139723,km:139722,mm:121258,nm:107598,om:127991,pm:96639,qm:107536,rm:130169,sm:96661,tm:96658,um:116646,vm:121122,wm:96660,xm:127738,ym:127083,zm:104443,Am:96659,Bm:106442,Cm:134840,Dm:63667,Em:63668,Fm:63669,Gm:130686,Hm:78314,Im:55761,Jm:127098,Km:134841,Lm:96368,Mm:67374,Nm:48992,Om:49956,Pm:31961,Qm:26388,Rm:23811,Sm:5E4,Tm:126250,Um:96370,
Vm:47355,Wm:47356,Xm:37935,Ym:45521,Zm:21760,an:83769,bn:49977,cn:49974,dn:93497,en:93498,fn:34325,gn:140759,hn:115803,jn:123707,kn:100081,ln:35309,mn:68314,nn:25602,pn:100339,qn:143516,rn:59018,sn:18248,tn:50625,un:9729,vn:37168,wn:37169,xn:21667,yn:16749,zn:18635,An:39305,Bn:18046,Cn:53969,Dn:8213,En:93926,Fn:102852,Gn:110099,Hn:22678,In:69076,Jn:137575,Ln:139224,Mn:100856,Nn:17736,On:3832,Pn:55759,Qn:64031,Wn:93044,Xn:93045,Yn:34388,Zn:17657,ao:17655,bo:39579,co:39578,eo:77448,fo:8196,ho:11357,
jo:69877,ko:8197,lo:82039};function fo(){var a=sb(go),b;return Gf(new zf(function(c,d){a.onSuccess=function(e){ni(e)?c(new ho(e)):d(new io("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new io("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new io("Request timed out","net.timeout",e))};
b=ti("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Hf&&b.abort();
return Ef(c)})}
function io(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(io,$a);function ho(a){this.xhr=a}
;function jo(){this.i=0;this.h=null}
jo.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),yf(a)?a:ko(a)):2===this.i&&b?(a=b.call(c,this.h),yf(a)?a:lo(a)):this};
jo.prototype.getValue=function(){return this.h};
jo.prototype.$goog_Thenable=!0;function lo(a){var b=new jo;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function ko(a){var b=new jo;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function mo(){if(Od())return!0;var a=B("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||bk&&ck("applewebkit")&&!ck("version")&&(!ck("safari")||ck("gsa/"))||kc&&ck("version/")?!0:(a=yj("CONSENT"))?a.startsWith("YES+"):!0}
;function no(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof oo;this.isTimeout=a instanceof io&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Hf}
r(no,$a);no.prototype.name="BiscottiError";function oo(){$a.call(this,"Biscotti ID is missing from server")}
r(oo,$a);oo.prototype.name="BiscottiMissingError";var go={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},po=null;function Yh(){if(L("disable_biscotti_fetch_entirely_for_all_web_clients"))return Ef(Error("Biscotti id fetching has been disabled entirely."));if(!mo())return Ef(Error("User has not consented - not fetching biscotti id."));if("1"==qb())return Ef(Error("Biscotti ID is not available in private embed mode"));po||(po=Gf(fo().then(qo),function(a){return ro(2,a)}));
return po}
function qo(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new oo;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new oo;a=a.id;Zh(a);po=ko(a);so(18E5,2);return a}
function ro(a,b){b=new no(b);Zh("");po=lo(b);0<a&&so(12E4,a-1);throw b;}
function so(a,b){Hh(function(){Gf(fo().then(qo,function(c){return ro(b,c)}),Ja)},a)}
function to(){try{var a=A("yt.ads.biscotti.getId_");return a?a():Yh()}catch(b){return Ef(b)}}
;function uo(a){if("1"!=qb()){a&&Xh();try{to().then(function(){},function(){}),Hh(uo,18E5)}catch(b){wh(b)}}}
;function vo(){this.xc=!0}
function wo(a){var b={},c=Qd([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(B("SESSION_INDEX",0)),c=isNaN(c)?0:c),b["X-Goog-AuthUser"]=c,"INNERTUBE_HOST_OVERRIDE"in ch||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in ch&&(b["X-Goog-PageId"]=B("DELEGATED_SESSION_ID")));return b}
;var xo={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var yo=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]),zo=["/fashion","/feed/fashion_destination","/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ"];function Ao(){var a=void 0===a?window.location.href:a;if(L("kevlar_disable_theme_param"))return null;var b=Xb(a.match(Wb)[5]||null);if(Bo(b))return"USER_INTERFACE_THEME_DARK";try{var c=gi(a).theme;return yo.get(c)||null}catch(d){}return null}
function Bo(a){var b=zo.map(function(c){return c.toLowerCase()});
return!L("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1}
;function Co(){this.h={};if(this.i=zj()){var a=yj("CONSISTENCY");a&&Do(this,{encryptedTokenJarContents:a})}}
Co.prototype.handleResponse=function(a,b){var c,d;b=(null==(c=b.ba.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar)&&this.replace(b,a)};
Co.prototype.replace=function(a,b){a=q(a);for(var c=a.next();!c.done;c=a.next())delete this.h[c.value.encryptedTokenJarContents];Do(this,b)};
function Do(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&xj("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Eo=window.location.hostname.split(".").slice(-2).join(".");function Fo(){var a=B("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===B("INNERTUBE_CLIENT_NAME")&&(this.h=Go(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Ho;Fo.getInstance=function(){Ho=A("yt.clientLocationService.instance");Ho||(Ho=new Fo,y("yt.clientLocationService.instance",Ho,void 0));return Ho};
Fo.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=1E7*this.i.coords.latitude,a.client.locationInfo.longitudeE7=1E7*this.i.coords.longitude,a.client.locationInfo.horizontalAccuracyMeters=this.i.coords.accuracy,a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
Fo.prototype.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===B("INNERTUBE_CLIENT_NAME")?(this.h=Go(this))&&this.h.set("yt-location-playability-token",a,15552E3):xj("YT_CL",JSON.stringify({loctok:a}),15552E3,Eo,!0))};
function Go(a){return void 0===a.h?new Vj("yt-client-location"):a.h}
Fo.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition)||!L("web_enable_browser_geolocation_api")&&!L("enable_handoff_location_2fa_on_mweb"))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;L("enable_handoff_location_2fa_on_mweb")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
Fo.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Io(a,b){var c;if((null==(c=a.signalServiceEndpoint)?0:c.signal)&&b.Ba&&(c=b.Ba[a.signalServiceEndpoint.signal]))return c();var d;if((null==(d=a.continuationCommand)?0:d.request)&&b.Qb&&(d=b.Qb[a.continuationCommand.request]))return d();for(var e in a)if(b.pb[e]&&(a=b.pb[e]))return a()}
;var Jo=Symbol("injectionDeps");function Ko(){this.name="NETWORK_SLI_TOKEN"}
Ko.prototype.toString=function(){return"InjectionToken("+this.name+")"};function Lo(a){return function(){return new a}}
;var Mo={},No=(Mo.WEB_UNPLUGGED="^unplugged/",Mo.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Mo.WEB_UNPLUGGED_OPS="^unplugged/",Mo.WEB_UNPLUGGED_PUBLIC="^unplugged/",Mo.WEB_CREATOR="^creator/",Mo.WEB_KIDS="^kids/",Mo.WEB_EXPERIMENTS="^experiments/",Mo.WEB_MUSIC="^music/",Mo.WEB_REMIX="^music/",Mo.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Mo.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Mo);
function Oo(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=No[b];if(c){var d=new RegExp(c),e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(No).forEach(function(g){var h=q(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Po(a,b){return{method:void 0===b?"POST":b,mode:ii(a)?"same-origin":"cors",credentials:ii(a)?"same-origin":"include"}}
;function Qo(){}
Qo.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?xo:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=B("INNERTUBE_CONTEXT");if(g){g=tb(g);L("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=B("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Bj.getInstance();var m="USER_INTERFACE_THEME_LIGHT";Ej(165)?m="USER_INTERFACE_THEME_DARK":Ej(174)?m="USER_INTERFACE_THEME_LIGHT":!L("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:Ao()||m;h.userInterfaceTheme=k;if(!f){if(k=
Lj())h.connectionType=k;L("web_log_effective_connection_type")&&(k=Mj())&&(g.client.effectiveConnectionType=k)}var n;if(L("web_log_memory_total_kbytes")&&(null==(n=x.navigator)?0:n.deviceMemory)){var t;n=null==(t=x.navigator)?void 0:t.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}t=gi(x.location.href);!L("web_populate_internal_geo_killswitch")&&t.internalcountrycode&&(h.internalGeo=t.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:x.location.href},L("kevlar_woffle")&&
uj.h&&(h.mainAppWebInfo.pwaInstallabilityStatus=uj.h.h?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=vj(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!L("web_lr_app_quality_killswitch")&&(t=B("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:t})),t=B("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:t}));
if(!L("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var z=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(Q){}z=void 0}z&&(h.timeZone=z)}(z=nh())?h.experimentsToken=z:delete h.experimentsToken;z=oh();Co.h||(Co.h=new Co);h=Co.h.h;t=[];n=0;for(var v in h)t[n++]=h[v];g.request=Object.assign({},g.request,{internalExperimentFlags:z,consistencyTokenJars:t});!L("web_prequest_context_killswitch")&&(v=B("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
v);z=Bj.getInstance();v=Ej(58);z=z.get("gsml","");g.user=Object.assign({},g.user);v&&(g.user.enableSafetyMode=v);z&&(g.user.lockedSafetyMode=!0);L("warm_op_csn_cleanup")?e&&(f=Yn())&&(g.clientScreenNonce=f):!f&&(f=Yn())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=A("yt.mdx.remote.remoteClient_"))g.remoteClient=d;L("web_enable_client_location_service")&&Fo.getInstance().setLocationOnInnerTubeContext(g);try{var C=ji(void 0),D=C.bid;delete C.bid;g.adSignalsInfo={params:[],
bid:D};var F=q(Object.entries(C));for(var P=F.next();!P.done;P=F.next()){var U=q(P.value),W=U.next().value,Ra=U.next().value;C=W;D=Ra;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:C,value:""+D})}}catch(Q){Gn(Q)}F=g}else Gn(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(P=this.h(a)){this.i(F,P,b);var Y;b="/youtubei/v1/"+Oo(this.j());var wa;(a=null==(Y=a.commandMetadata)?void 0:null==(wa=Y.webCommandMetadata)?void 0:wa.apiUrl)&&(b=a);Y=b;(wa=B("INNERTUBE_HOST_OVERRIDE"))&&
(Y=String(wa)+String(Zb(Y)));wa={};wa.key=B("INNERTUBE_API_KEY");L("json_condensed_response")&&(wa.prettyPrint="false");Y=hi(Y,wa||{},!1);Y={input:Y,ta:Po(Y),ba:F,config:Object.assign({},void 0)};Y.config.Ia?Y.config.Ia.identity=c:Y.config.Ia={identity:c};return Y}Gn(new ok("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(Qo.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Ro(){}
r(Ro,Qo);Ro.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",ta:Po("/getDatasyncIdsEndpoint","GET"),ba:{}}};
Ro.prototype.j=function(){return[]};
Ro.prototype.h=function(){};
Ro.prototype.i=function(){};var So={},To=(So.GET_DATASYNC_IDS=Lo(Ro),So);function Uo(a){var b=Ga.apply(1,arguments);if(!Vo(a)||b.some(function(e){return!Vo(e)}))throw Error("Only objects may be merged.");
var c=a;b=q(b);for(var d=b.next();!d.done;d=b.next())Wo(c,d.value);return c}
function Wo(a,b){for(var c in b)if(Vo(b[c])){if(c in a&&!Vo(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Wo(a[c],b[c])}else if(Xo(b[c])){if(c in a&&!Xo(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Yo(a[c],b[c])}else a[c]=b[c];return a}
function Yo(a,b){b=q(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Vo(c)?a.push(Wo({},c)):Xo(c)?a.push(Yo([],c)):a.push(c);return a}
function Vo(a){return"object"===typeof a&&!Array.isArray(a)}
function Xo(a){return"object"===typeof a&&Array.isArray(a)}
;function Zo(a,b){Ql.call(this,1,arguments);this.timer=b}
r(Zo,Ql);var $o=new Rl("aft-recorded",Zo);var ap=window;function bp(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var O=ap.performance||ap.mozPerformance||ap.msPerformance||ap.webkitPerformance||new bp;var cp=!1,dp={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},
ep=Ua(O.clearResourceTimings||O.webkitClearResourceTimings||O.mozClearResourceTimings||O.msClearResourceTimings||O.oClearResourceTimings||Ja,O);function fp(a){var b=gp(a);if(b.aft)return b.aft;a=B((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function hp(){var a;if(L("csi_use_performance_navigation_timing")){var b,c,d,e=null==O?void 0:null==(a=O.getEntriesByType)?void 0:null==(b=a.call(O,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=ip(e.requestStart),e.responseEnd=ip(e.responseEnd),e.redirectStart=ip(e.redirectStart),e.redirectEnd=ip(e.redirectEnd),e.domainLookupEnd=ip(e.domainLookupEnd),e.connectStart=ip(e.connectStart),e.connectEnd=ip(e.connectEnd),e.responseStart=ip(e.responseStart),
e.secureConnectionStart=ip(e.secureConnectionStart),e.domainLookupStart=ip(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=O.timing}else a=O.timing;return a}
function jp(){return L("csi_use_time_origin")&&O.timeOrigin?Math.floor(O.timeOrigin):O.timing.navigationStart}
function ip(a){return Math.round(jp()+a)}
function kp(a){y("ytglobal.timing"+(a||"")+"ready_",!0,void 0)}
function lp(a){return A("ytcsi."+(a||"")+"data_")||mp(a)}
function np(a){a=lp(a);a.info||(a.info={});return a.info}
function gp(a){a=lp(a);a.tick||(a.tick={});return a.tick}
function op(a){a=lp(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function pp(a){a=op(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function qp(a){var b=lp(a).nonce;b||(b=Nn(),lp(a).nonce=b);return b}
function mp(a){var b={tick:{},info:{}};y("ytcsi."+(a||"")+"data_",b,void 0);return b}
function rp(a){var b=gp(a||""),c=fp(a);c&&!cp&&(Wl($o,new Zo(Math.round(c-b._start),a)),cp=!0)}
function sp(a,b){for(var c=q(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!sp(a[d],b[d]))return!1;return!0}
;function tp(){if(O.getEntriesByType){var a=O.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return ip(a.startTime)}a=O.timing;
return a.cc?Math.max(0,a.cc):0}
;function up(){var a=A("ytcsi.debug");a||(a=[],y("ytcsi.debug",a,void 0),y("ytcsi.reference",{},void 0));return a}
function vp(a){a=a||"";var b=wp();if(b[a])return b[a];var c=up(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
function wp(){var a=A("ytcsi.reference");if(a)return a;up();return A("ytcsi.reference")}
;var R={},xp=(R.auto_search="LATENCY_ACTION_AUTO_SEARCH",R.ad_to_ad="LATENCY_ACTION_AD_TO_AD",R.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",R["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",R.app_startup="LATENCY_ACTION_APP_STARTUP",R["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",R["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",R["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",R.browse="LATENCY_ACTION_BROWSE",R.cast_splash="LATENCY_ACTION_CAST_SPLASH",
R.channels="LATENCY_ACTION_CHANNELS",R.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",R["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",R["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",R["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",R["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",R["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",R["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",R["channel.music"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",R["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",R["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",R["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",R["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",R.chips="LATENCY_ACTION_CHIPS",R["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",R["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",R.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
R.embed="LATENCY_ACTION_EMBED",R.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",R.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",R.explore="LATENCY_ACTION_EXPLORE",R.home="LATENCY_ACTION_HOME",R.library="LATENCY_ACTION_LIBRARY",R.live="LATENCY_ACTION_LIVE",R.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",R.onboarding="LATENCY_ACTION_ONBOARDING",R.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",R.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",R.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",R.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",R["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",R["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",R.prebuffer="LATENCY_ACTION_PREBUFFER",R.prefetch="LATENCY_ACTION_PREFETCH",R.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",R.profile_switcher="LATENCY_ACTION_LOGIN",R.reel_watch="LATENCY_ACTION_REEL_WATCH",R.results="LATENCY_ACTION_RESULTS",
R.search_ui="LATENCY_ACTION_SEARCH_UI",R.search_suggest="LATENCY_ACTION_SUGGEST",R.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",R.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",R.seek="LATENCY_ACTION_PLAYER_SEEK",R.settings="LATENCY_ACTION_SETTINGS",R.tenx="LATENCY_ACTION_TENX",R.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",R.watch="LATENCY_ACTION_WATCH",R.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",R["watch,watch7"]="LATENCY_ACTION_WATCH",R["watch,watch7_html5"]="LATENCY_ACTION_WATCH",
R["watch,watch7ad"]="LATENCY_ACTION_WATCH",R["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",R.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",R.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",R["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",R["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",R["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",R["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",R["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",R["video.live_settings"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",R["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",R["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",R["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",R.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",R.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",R.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",R),S={},yp=(S.ad_allowed="adTypesAllowed",S.yt_abt="adBreakType",
S.ad_cpn="adClientPlaybackNonce",S.ad_docid="adVideoId",S.yt_ad_an="adNetworks",S.ad_at="adType",S.aida="appInstallDataAgeMs",S.browse_id="browseId",S.p="httpProtocol",S.t="transportProtocol",S.cs="commandSource",S.cpn="clientPlaybackNonce",S.ccs="creatorInfo.creatorCanaryState",S.ctop="creatorInfo.topEntityType",S.csn="clientScreenNonce",S.docid="videoId",S.GetHome_rid="requestIds",S.GetSearch_rid="requestIds",S.GetPlayer_rid="requestIds",S.GetWatchNext_rid="requestIds",S.GetBrowse_rid="requestIds",
S.GetLibrary_rid="requestIds",S.is_continuation="isContinuation",S.is_nav="isNavigation",S.b_p="kabukiInfo.browseParams",S.is_prefetch="kabukiInfo.isPrefetch",S.is_secondary_nav="kabukiInfo.isSecondaryNav",S.nav_type="kabukiInfo.navigationType",S.prev_browse_id="kabukiInfo.prevBrowseId",S.query_source="kabukiInfo.querySource",S.voz_type="kabukiInfo.vozType",S.yt_lt="loadType",S.mver="creatorInfo.measurementVersion",S.yt_ad="isMonetized",S.nr="webInfo.navigationReason",S.nrsu="navigationRequestedSameUrl",
S.pnt="performanceNavigationTiming",S.prt="playbackRequiresTap",S.plt="playerInfo.playbackType",S.pis="playerInfo.playerInitializedState",S.paused="playerInfo.isPausedOnLoad",S.yt_pt="playerType",S.fmt="playerInfo.itag",S.yt_pl="watchInfo.isPlaylist",S.yt_pre="playerInfo.preloadType",S.yt_ad_pr="prerollAllowed",S.pa="previousAction",S.yt_red="isRedSubscriber",S.rce="mwebInfo.responseContentEncoding",S.rc="resourceInfo.resourceCache",S.scrh="screenHeight",S.scrw="screenWidth",S.st="serverTimeMs",S.ssdm=
"shellStartupDurationMs",S.br_trs="tvInfo.bedrockTriggerState",S.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",S.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",S.label="tvInfo.label",S.is_mdx="tvInfo.isMdx",S.preloaded="tvInfo.isPreloaded",S.aac_type="tvInfo.authAccessCredentialType",S.upg_player_vis="playerInfo.visibilityState",S.query="unpluggedInfo.query",S.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",S.yt_vst="videoStreamType",S.vph="viewportHeight",S.vpw="viewportWidth",
S.yt_vis="isVisible",S.rcl="mwebInfo.responseContentLength",S.GetSettings_rid="requestIds",S.GetTrending_rid="requestIds",S.GetMusicSearchSuggestions_rid="requestIds",S.REQUEST_ID="requestIds",S),zp="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Ap={},Bp=(Ap.ccs="CANARY_STATE_",Ap.mver="MEASUREMENT_VERSION_",Ap.pis="PLAYER_INITIALIZED_STATE_",Ap.yt_pt="LATENCY_PLAYER_",Ap.pa="LATENCY_ACTION_",Ap.ctop="TOP_ENTITY_TYPE_",Ap.yt_vst="VIDEO_STREAM_TYPE_",Ap),Cp="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Dp(a){return xp[a]||"LATENCY_ACTION_UNKNOWN"}
function Ep(a,b,c){c=op(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in yp){c=yp[a];0<=cb(zp,c)&&(b=!!b);a in Bp&&"string"===typeof b&&(b=Bp[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Uo({},d)}0<=cb(Cp,a)||Hn(new ok("Unknown label logged with GEL CSI",a))}
;var T={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_SHOPPING_IN_APP:124,
LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,
LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,
LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CAST:120,
LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,
LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,
LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,
LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,
LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,
LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,
LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_UNKNOWN:0};T[T.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";T[T.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";
T[T.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";T[T.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";T[T.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";T[T.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";T[T.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";T[T.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";T[T.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";
T[T.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";T[T.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";T[T.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";T[T.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";T[T.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";T[T.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";T[T.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";
T[T.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";T[T.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";T[T.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";T[T.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";T[T.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";T[T.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";
T[T.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";T[T.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";T[T.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";T[T.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";T[T.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";T[T.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";
T[T.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";T[T.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";T[T.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";T[T.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";T[T.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";T[T.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";T[T.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";
T[T.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";T[T.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";T[T.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";T[T.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";T[T.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";T[T.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";
T[T.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";T[T.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";T[T.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";T[T.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";T[T.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";T[T.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";T[T.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";
T[T.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";T[T.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";T[T.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";T[T.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";T[T.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";T[T.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";T[T.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";T[T.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";
T[T.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";T[T.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";T[T.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";T[T.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";T[T.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";T[T.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";
T[T.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";T[T.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";T[T.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";T[T.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";T[T.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";T[T.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";T[T.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
T[T.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";T[T.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";T[T.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";T[T.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";T[T.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";T[T.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
T[T.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";T[T.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";T[T.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";T[T.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";T[T.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";T[T.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";T[T.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";T[T.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
T[T.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";T[T.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";T[T.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";T[T.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";T[T.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";T[T.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";
T[T.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";T[T.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";T[T.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";T[T.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";T[T.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";T[T.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
T[T.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";T[T.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";T[T.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";T[T.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";T[T.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";T[T.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";
T[T.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";T[T.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";T[T.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";T[T.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";T[T.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";T[T.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
T[T.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";T[T.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";T[T.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";T[T.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";T[T.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";T[T.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
T[T.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";T[T.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";T[T.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";T[T.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";T[T.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";T[T.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";
T[T.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";T[T.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";T[T.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";T[T.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";T[T.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";T[T.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";T[T.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";T[T.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";
T[T.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";T[T.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";T[T.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";T[T.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";T[T.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";T[T.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";T[T.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";
T[T.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";T[T.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";T[T.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";T[T.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";T[T.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";T[T.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";T[T.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";T[T.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";
T[T.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";T[T.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";T[T.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";T[T.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";T[T.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";T[T.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";T[T.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";T[T.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";T[T.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";
T[T.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";T[T.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Fp={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Fp[Fp.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";Fp[Fp.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Fp[Fp.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var V={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};V[V.CONN_INVALID]="CONN_INVALID";V[V.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";V[V.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";V[V.CONN_WIFI_METERED]="CONN_WIFI_METERED";V[V.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";V[V.CONN_DISCO]="CONN_DISCO";
V[V.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";V[V.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";V[V.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";V[V.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";V[V.CONN_WIFI]="CONN_WIFI";V[V.CONN_NONE]="CONN_NONE";V[V.CONN_UNKNOWN]="CONN_UNKNOWN";V[V.CONN_DEFAULT]="CONN_DEFAULT";
var X={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};X[X.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
X[X.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";X[X.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";X[X.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";X[X.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";X[X.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";X[X.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
X[X.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";X[X.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";X[X.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";X[X.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";X[X.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";X[X.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";X[X.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";X[X.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
X[X.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";X[X.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";X[X.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";X[X.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";X[X.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";X[X.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";X[X.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";X[X.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
X[X.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";X[X.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";X[X.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";X[X.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Gp={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Gp[Gp.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Gp[Gp.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Gp[Gp.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Gp[Gp.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Gp[Gp.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Gp[Gp.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Gp[Gp.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Gp[Gp.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Hp={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Hp[Hp.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Hp[Hp.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Hp[Hp.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Hp[Hp.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Ip={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Ip[Ip.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Ip[Ip.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Jp={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Jp[Jp.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Jp[Jp.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Jp[Jp.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Jp[Jp.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Jp[Jp.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Jp[Jp.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Kp={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Kp[Kp.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Kp[Kp.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Kp[Kp.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Kp[Kp.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Lp={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Lp[Lp.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Lp[Lp.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Lp[Lp.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Mp={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Mp[Mp.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Mp[Mp.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Mp[Mp.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Np=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",Np,void 0);function Op(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||M());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Wh();d=new Og;G(d,1,c.timestamp||!isFinite(e)?-1:e);if(L("log_sequence_info_on_gel_web")&&c.X){e=c.X;var f=tj(e),g=new Ng;G(g,2,f);G(g,1,e);H(d,3,g);c.ub&&delete Np[c.X]}H(a,33,d);(c.mc?ej:$i)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,xa:c.xa},b)}
;function Pp(a,b){b=void 0===b?{}:b;var c=!1;B("ytLoggingEventsDefaultDisabled",!1)&&nn===nn&&(c=!0);Op(a,c?null:nn,b)}
;function Qp(a,b,c){var d=new Pg;Nc(d,72,a);c?Op(d,c,b):Pp(d,b)}
function Rp(a,b,c){var d=new Pg;Nc(d,73,a);c?Op(d,c,b):Pp(d,b)}
function Sp(a,b,c){var d=new Pg;Nc(d,78,a);c?Op(d,c,b):Pp(d,b)}
function Tp(a,b,c){var d=new Pg;Nc(d,208,a);c?Op(d,c,b):Pp(d,b)}
function Up(a,b,c){var d=new Pg;Nc(d,156,a);c?Op(d,c,b):Pp(d,b)}
function Vp(a,b,c){var d=new Pg;Nc(d,215,a);c?Op(d,c,b):Pp(d,b)}
;var Wp=x.ytLoggingLatencyUsageStats_||{};y("ytLoggingLatencyUsageStats_",Wp,void 0);function Xp(){this.h=0}
function Yp(){Xp.h||(Xp.h=new Xp);return Xp.h}
Xp.prototype.tick=function(a,b,c,d){Zp(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},L("web_csi_via_jspb")?(d=new Mg,G(d,1,a),G(d,2,b),a=new Pg,Nc(a,5,d),Pp(a,c)):lk("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Xp.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Zp(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,lk("latencyActionInfo",a,{cttAuthInfo:c}))};
Xp.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Zp(this,"info_"+d+"_"+b)||(G(a,2,b),b={cttAuthInfo:c},c=new Pg,Nc(c,7,a),Pp(c,b))};
Xp.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Zp(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,lk("latencyActionSpan",a,{cttAuthInfo:c}))};
function Zp(a,b){Wp[b]=Wp[b]||{count:0};var c=Wp[b];c.count++;c.time=M();a.h||(a.h=Lh(function(){var d=M(),e;for(e in Wp)Wp[e]&&6E4<d-Wp[e].time&&delete Wp[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new ok("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Hn(c)),!0):!1}
;function $p(){var a=["ol"];vp("").info.actionType="embed";a&&jh("TIMING_AFT_KEYS",a);jh("TIMING_ACTION","embed");a=B("TIMING_INFO",{});for(var b in a)a.hasOwnProperty(b)&&aq(b,a[b]);b={isNavigation:!0,actionType:Dp(kh("TIMING_ACTION"))};if(a=kh("PREVIOUS_ACTION"))b.previousAction=Dp(a);if(a=B("CLIENT_PROTOCOL"))b.httpProtocol=a;if(a=B("CLIENT_TRANSPORT"))b.transportProtocol=a;(a=Yn())&&"UNDEFINED_CSN"!==a&&(b.clientScreenNonce=a);a=bq();if(1===a||-1===a)b.isVisible=!0;a=np();b.loadType="cold";var c=
hp(),d=jp();d&&(Z("srt",c.responseStart),1!==a.prerender&&Z("_start",d,void 0));a=tp();0<a&&Z("fpt",a);a=hp();a.isPerformanceNavigationTiming&&cq({performanceNavigationTiming:!0},void 0);Z("nreqs",a.requestStart,void 0);Z("nress",a.responseStart,void 0);Z("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Z("nrs",a.redirectStart,void 0),Z("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(Z("ndnss",a.domainLookupStart,void 0),Z("ndnse",a.domainLookupEnd,void 0));0<
a.connectEnd-a.connectStart&&(Z("ntcps",a.connectStart,void 0),Z("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=jp()&&0<a.connectEnd-a.secureConnectionStart&&(Z("nstcps",a.secureConnectionStart,void 0),Z("ntcpe",a.connectEnd,void 0));O&&"getEntriesByType"in O&&dq();a=[];if(document.querySelector&&O&&O.getEntriesByName)for(var e in dp)dp.hasOwnProperty(e)&&(c=dp[e],eq(e,c)&&a.push(c));if(0<a.length)for(b.resourceInfo=[],e=q(a),a=e.next();!a.done;a=e.next())b.resourceInfo.push({resourceCache:a.value});
cq(b);e=np();b=pp();if("cold"===e.yt_lt||"cold"===b.loadType){a=gp();c=op();c=c.gelTicks?c.gelTicks:c.gelTicks={};for(var f in a)f in c||Z(f,a[f]);f={};a=!1;c=q(Object.keys(e));for(d=c.next();!d.done;d=c.next())d=d.value,(d=Ep(d,e[d]))&&!sp(pp(void 0),d)&&(Uo(b,d),Uo(f,d),a=!0);a&&cq(f)}kp();f=kh("TIMING_ACTION");A("ytglobal.timingready_")&&f&&"_start"in gp(void 0)&&fp()&&rp()}
function aq(a,b,c){null!==b&&(np(c)[a]=b,(a=Ep(a,b,c))&&cq(a,c))}
function cq(a,b){if(L("web_csi_via_jspb")){var c=new Jg,d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++)switch(d[e]){case "actionType":G(c,1,T[a[e]]);break;case "clientActionNonce":G(c,2,a[e]);break;case "clientScreenNonce":G(c,4,a[e]);break;case "actionVisualElement":H(c,88,a[e]);break;case "loadType":G(c,3,a[e]);break;case "isFirstInstall":G(c,55,a[e]);break;case "networkType":G(c,5,Fp[a[e]]);break;case "connectionType":G(c,26,V[a[e]]);break;case "detailedConnectionType":G(c,27,X[a[e]]);
break;case "isVisible":G(c,6,a[e]);break;case "playerType":G(c,7,Gp[a[e]]);break;case "clientPlaybackNonce":G(c,8,a[e]);break;case "adClientPlaybackNonce":G(c,28,a[e]);break;case "previousCpn":G(c,77,a[e]);break;case "targetCpn":G(c,76,a[e]);break;case "isMonetized":G(c,9,a[e]);break;case "isPrerollAllowed":G(c,16,a[e]);break;case "isPrerollShown":G(c,17,a[e]);break;case "adType":G(c,12,a[e]);break;case "adTypesAllowed":G(c,36,a[e]);break;case "adNetworks":G(c,37,a[e]);break;case "previousAction":G(c,
13,T[a[e]]);break;case "isRedSubscriber":G(c,14,a[e]);break;case "serverTimeMs":G(c,15,a[e]);break;case "spinnerInfo":H(c,18,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":G(c,20,a[e]);break;case "targetVideoId":G(c,78,a[e]);break;case "adBreakType":G(c,21,Hp[a[e]]);break;case "isNavigation":G(c,25,a[e]);break;case "viewportHeight":G(c,29,a[e]);break;case "viewportWidth":G(c,30,a[e]);break;case "screenHeight":G(c,84,a[e]);break;case "screenWidth":G(c,85,a[e]);break;case "browseId":G(c,
31,a[e]);break;case "isCacheHit":G(c,32,a[e]);break;case "httpProtocol":G(c,33,a[e]);break;case "transportProtocol":G(c,34,a[e]);break;case "searchQuery":G(c,41,a[e]);break;case "isContinuation":G(c,42,a[e]);break;case "availableProcessors":G(c,43,a[e]);break;case "sdk":G(c,44,a[e]);break;case "isLocalStream":G(c,45,a[e]);break;case "navigationRequestedSameUrl":G(c,64,a[e]);break;case "shellStartupDurationMs":G(c,70,a[e]);break;case "appInstallDataAgeMs":G(c,73,a[e]);break;case "latencyActionError":G(c,
71,Ip[a[e]]);break;case "actionStep":G(c,79,a[e]);break;case "jsHeapSizeLimit":G(c,80,a[e]);break;case "totalJsHeapSize":G(c,81,a[e]);break;case "usedJsHeapSize":G(c,82,a[e]);break;case "resourceInfo":Pc(c,83,Ig,a[e]);break;case "sourceVideoDurationMs":G(c,90,a[e]);break;case "playerInfo":H(c,22,a[e]);break;case "commentInfo":H(c,23,a[e]);break;case "mdxInfo":H(c,24,a[e]);break;case "watchInfo":H(c,35,a[e]);break;case "adPrebufferedTimeSecs":G(c,39,a[e]);break;case "thumbnailLoadInfo":H(c,40,a[e]);
break;case "creatorInfo":H(c,46,a[e]);break;case "unpluggedInfo":H(c,50,a[e]);break;case "isLivestream":G(c,47,a[e]);break;case "liveStreamMode":G(c,91,Jp[a[e]]);break;case "adCpn2":G(c,48,a[e]);break;case "adDaiDriftMillis":G(c,49,a[e]);break;case "videoStreamType":G(c,53,Kp[a[e]]);break;case "reelInfo":H(c,54,a[e]);break;case "subscriptionsFeedInfo":H(c,72,a[e]);break;case "playbackRequiresTap":G(c,56,a[e]);break;case "requestIds":Pc(c,68,Lg,a[e]);break;case "mediaBrowserActionInfo":H(c,58,a[e]);
break;case "performanceNavigationTiming":G(c,67,a[e]);break;case "musicLoadActionInfo":H(c,69,a[e]);break;case "transactionType":G(c,74,Lp[a[e]]);break;case "shoppingInfo":H(c,75,a[e]);break;case "prefetchInfo":H(c,86,a[e]);break;case "accelerationSession":H(c,87,a[e]);break;case "playerRotationType":G(c,101,Mp[a[e]]);break;case "webInfo":H(c,38,a[e]);break;case "tvInfo":H(c,51,a[e]);break;case "kabukiInfo":H(c,52,a[e]);break;case "mwebInfo":H(c,59,a[e]);break;case "musicInfo":H(c,65,a[e]);break;
case "allowedPreroll":G(c,10,a[e]);break;case "shownPreroll":G(c,11,a[e]);break;case "getHomeRequestId":G(c,57,a[e]);break;case "getSearchRequestId":G(c,60,a[e]);break;case "getPlayerRequestId":G(c,61,a[e]);break;case "getWatchNextRequestId":G(c,62,a[e]);break;case "getBrowseRequestId":G(c,63,a[e]);break;case "getLibraryRequestId":G(c,66,a[e])}a=op(b);a.jspbInfos||(a.jspbInfos=[]);a.jspbInfos.push(c);vp(b||"").jspbInfo.push(c);a=qp(b);b=lp(b).cttAuthInfo;Yp().jspbInfo(c,a,b)}else c=vp(b||""),Uo(c.info,
a),Uo(pp(b),a),c=qp(b),b=lp(b).cttAuthInfo,Yp().info(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;O.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),O.mark(d))}vp(c||"").tick[a]=b||M();d=op(c);d.gelTicks&&(d.gelTicks[a]=!0);d=gp(c);var e=b||M();d[a]=e;e=qp(c);var f=lp(c).cttAuthInfo;if("_start"===a){var g=Yp();Zp(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},L("web_csi_via_jspb")?(f=new Hg,G(f,1,e),e=new Pg,Nc(e,6,f),Pp(e,b)):lk("latencyActionBaselined",{clientActionNonce:e},b))}else Yp().tick(a,e,b,f);rp(c);return d[a]}
function fq(){var a=qp(void 0);requestAnimationFrame(function(){setTimeout(function(){a===qp(void 0)&&Z("ol",void 0,void 0)},0)})}
function bq(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=sh+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function eq(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Tb()&&a.setAttribute("nonce",Tb());return c?(a=O.getEntriesByName(c))&&a[0]&&(a=a[0],c=jp(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function dq(){var a=window.location.protocol,b=O.getEntriesByType("resource");b=eb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",ip(b.startTime)),Z("wffe",ip(b.responseEnd)))}
var gq=window;gq.ytcsi&&(gq.ytcsi.info=aq,gq.ytcsi.tick=Z);var hq=["consistency","mss","client_location","entities","store"];function iq(a,b,c,d,e){this.o=a;this.I=b;this.l=c;this.m=d;this.j=e;this.i=void 0;this.h=new Map;a.Ba||(a.Ba={});a.Ba=Object.assign({},To,a.Ba)}
function jq(a,b,c,d,e){if(void 0!==iq.h){if(d=iq.h,a=[a!==d.o,b!==d.I,c!==d.l,!1,!1,void 0!==d.i],a.some(function(f){return f}))throw new ok("InnerTubeTransportService is already initialized",a);
}else iq.h=new iq(a,b,c,d,e)}
function kq(){var a=iq.h,b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?xo:c;var d=Io(b,a.o);if(!d)return Ef(new ok("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new zf(function(f){var g,h,k;return w(function(m){if(1==m.h)return h="cors"===(null==(g=e.ta)?void 0:g.mode)?"cors":void 0,u(m,lq(a,e.config,h),2);k=m.i;f(mq(a,e,k));m.h=0})}):Ef(new ok("Error: Failed to build request for command.",b))}
function mq(a,b,c){var d,e,f,g,h,k,m,n,t,z,v,C,D,F,P,U,W,Ra,Y,wa;return w(function(Q){switch(Q.h){case 1:Q.s(2);break;case 3:if((d=Q.i)&&!d.isExpired())return Q.return(Promise.resolve(d.h()));case 2:if((f=null==(e=b.config)?void 0:e.yo)&&a.h.has(f)&&L("web_memoize_inflight_requests"))return Q.return(a.h.get(f));if(null==(g=b)?0:null==(h=g.ba)?0:h.context)for(k=q([]),m=k.next();!m.done;m=k.next())n=m.value,n.wo(b.ba.context);if(null==(t=a.i)?0:t.l(b.input,b.ba))return Q.return(a.i.j(b.input,b.ba));
z=JSON.stringify(b.ba);b.ta=Object.assign({},b.ta,{headers:c});v=Object.assign({},b.ta);"POST"===b.ta.method&&(v=Object.assign({},v,{body:z}));(null==(C=b.config)?0:C.ic)&&Z(b.config.ic);D=a.I.fetch(b.input,v,b.config);f&&a.h.set(f,D);return u(Q,D,4);case 4:F=Q.i;f&&a.h.has(f)&&a.h.delete(f);(null==(P=b.config)?0:P.jc)&&Z(b.config.jc);if(F||null==(U=a.i)||!U.h(b.input,b.ba)){Q.s(5);break}return u(Q,a.i.i(b.input,b.ba),6);case 6:F=Q.i;case 5:if(L("web_ordered_response_processors")&&F&&a.j)for(W=q(hq),
m=W.next();!m.done;m=W.next())Ra=m.value,a.j[Ra]&&a.j[Ra].handleResponse(F,b);else if(F&&a.m)for(Y=q(a.m),m=Y.next();!m.done;m=Y.next())wa=m.value,wa.handleResponse(F,b);return Q.return(F)}})}
function lq(a,b,c){return w(function(d){if(a.l.xc){var e=d.return,f,g=null==b?void 0:null==(f=b.Ia)?void 0:f.sessionIndex;f=wo({sessionIndex:g});f=Object.assign({},nq(c),f);d=e.call(d,f)}else d=d.return(oq(b,c));return d})}
function oq(a,b){var c,d,e,f;return w(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Ia)?void 0:d.sessionIndex;var h=wo({sessionIndex:e});if(!(h instanceof zf)){var k=new zf(Ja);Af(k,2,h);h=k}return u(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},nq(b),f)))})}
function nq(a){var b={"Content-Type":"application/json"};L("enable_web_eom_visitor_data")&&B("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=B("EOM_VISITOR_DATA"):B("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=B("VISITOR_DATA"));"cors"!==a&&((a=B("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=B("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=B("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),L("forward_domain_admin_state_on_embeds")&&(a=
B("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var pq=["share/get_web_player_share_panel"],qq=["feedback"],rq=["notification/modify_channel_preference"],sq=["browse/edit_playlist"],tq=["subscription/subscribe"],uq=["subscription/unsubscribe"];function vq(){}
r(vq,Qo);vq.prototype.j=function(){return tq};
vq.prototype.h=function(a){return a.subscribeEndpoint};
vq.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(vq.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function wq(){}
r(wq,Qo);wq.prototype.j=function(){return uq};
wq.prototype.h=function(a){return a.unsubscribeEndpoint};
wq.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(wq.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function xq(){}
r(xq,Qo);xq.prototype.j=function(){return qq};
xq.prototype.h=function(a){return a.feedbackEndpoint};
xq.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(xq.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function yq(){}
r(yq,Qo);yq.prototype.j=function(){return rq};
yq.prototype.h=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
yq.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function zq(){}
r(zq,Qo);zq.prototype.j=function(){return sq};
zq.prototype.h=function(a){return a.playlistEditEndpoint};
zq.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Aq(){}
r(Aq,Qo);Aq.prototype.j=function(){return pq};
Aq.prototype.h=function(a){return a.webPlayerShareEntityServiceEndpoint};
Aq.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Bq=new Ko;function Cq(){}
Cq.prototype.fetch=function(a,b){var c=this,d,e,f;return w(function(g){if(1==g.h){d=new window.Request(a,b);if(L("web_fetch_promise_cleanup_killswitch"))return g.return(Promise.resolve(fetch(d).then(function(h){return c.handleResponse(h)}).catch(function(h){Hn(h)})));
ua(g,3);return u(g,fetch(d),5)}if(3!=g.h)return e=g.i,g.return(c.handleResponse(e));f=xa(g);Hn(f);return g.return(void 0)})};
Cq.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok||(b=b.then(function(c){Hn(new ok("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Cq[Jo]=[new function(a){this.key=a}(Bq)];var Dq;function Eq(a){Ql.call(this,1,arguments);this.csn=a}
r(Eq,Ql);var Zl=new Rl("screen-created",Eq),Fq=[],Hq=Gq,Iq=0;function Jq(a,b,c,d,e,f,g){function h(){Hn(new ok("newScreen() parent element does not have a VE - rootVe",b))}
var k=Hq();f=new Rn({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,X:k};if(L("il_via_jspb")){var m=new xg;m.Y(k);yg(m,f.getAsJspb());c&&c.visualElement?(f=new zg,c.clientScreenNonce&&G(f,2,c.clientScreenNonce),Ag(f,c.visualElement.getAsJspb()),g&&G(f,4,wg[g]),H(m,5,f)):c&&h();d&&G(m,3,d);Up(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=g)):
c&&h(),d&&(f.cloneCsn=d),a?sj("screenCreated",f,a,e):lk("screenCreated",f,e);Wl(Zl,new Eq(k));return k}
function Kq(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:$n(b),
X:b};d=q(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(ob(g)||!g.trackingParams&&!g.veType)&&Hn(Error("Child VE logged with no data"));if(L("il_via_jspb")){var h=new Bg;h.Y(b);Dg(h,c.getAsJspb());fb(e,function(k){k=k.getAsJspb();Pc(h,3,vg,k)});
"UNDEFINED_CSN"==b?Lq("visualElementAttached",h,f):Vp(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:fb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?Lq("visualElementAttached",c,f):a?sj("visualElementAttached",c,a,f):lk("visualElementAttached",c,f)}
function Gq(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return zc(b,3)}
function Lq(a,b,c){Fq.push({payloadName:a,payload:b,options:c});Iq||(Iq=$l())}
function am(a){if(Fq){for(var b=q(Fq),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(L("il_via_jspb"))switch(c.payload.Y(a.csn),c.payloadName){case "screenCreated":Up(c.payload,c.options);break;case "visualElementAttached":Vp(c.payload,c.options);break;case "visualElementShown":Qp(c.payload,c.options);break;case "visualElementHidden":Rp(c.payload,c.options);break;case "visualElementGestured":Sp(c.payload,c.options);break;case "visualElementStateChanged":Tp(c.payload,c.options);break;default:Hn(new ok("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,sj(c.payloadName,c.payload,null,c.options);Fq.length=0}Iq=0}
;function Mq(){this.i=new Set;this.h=new Set;this.j=new Map}
Mq.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ka(Mq);function Nq(){this.o=[];this.D=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.u=new Map}
function Oq(a,b,c){c=void 0===c?0:c;b.then(function(d){a.i.has(c)&&a.j&&a.j();var e=Yn(c),f=Wn(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Kq(a.client,e,f,[Sn(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Kq(a.client,e,f,[Sn(d.playerResponse.trackingParams)])}})}
function Pq(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.o.push([b,c]);else{var e=Yn(d);c=c||Wn(d);e&&c&&Kq(a.client,e,c,[b])}}
Nq.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Yn(void 0===c?0:c)){a=this.client;var e=Sn(d);var f="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";d={cttAuthInfo:$n(c),X:c};if(L("il_via_jspb")){var g=new Eg;g.Y(c);e=e.getAsJspb();H(g,2,e);G(g,4,wg[f]);b&&H(g,3,void 0);"UNDEFINED_CSN"==c?Lq("visualElementGestured",g,d):Sp(g,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:f},b&&(f.clientData=b),"UNDEFINED_CSN"==c?Lq("visualElementGestured",f,d):a?sj("visualElementGestured",
f,a,d):lk("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function Qq(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Rq(a,b,c);var f=Wn(c.layer);if(f){for(var g=q(a.o),h=g.next();!h.done;h=g.next())h=h.value,Pq(a,h[0],h[1]||f,c.layer);f=q(a.D);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Yn(g);var m=k[0]||Wn(g);if(h&&m){g=a.client;var n=k[1];k={cttAuthInfo:$n(h),X:h};L("il_via_jspb")?(n=new Gg,n.Y(h),m=m.getAsJspb(),H(n,2,m),"UNDEFINED_CSN"==h?Lq("visualElementStateChanged",n,k):Tp(n,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:n},"UNDEFINED_CSN"==h?Lq("visualElementStateChanged",m,k):g?sj("visualElementStateChanged",m,g,k):lk("visualElementStateChanged",m,k))}}}};
Yn(c.layer)||a.j();if(c.sb)for(var d=q(c.sb),e=d.next();!e.done;e=d.next())Oq(a,e.value,c.layer);else Gn(Error("Delayed screen needs a data promise."))}
function Rq(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.dc?c.dc:c.layer;var e=Yn(d);d=Wn(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=B("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=Jq(a.client,b,f,c.rb,c.cttAuthInfo,g,c.to)}catch(m){In(m,{zo:b,rootVe:d,parentVisualElement:void 0,qo:e,vo:f,rb:c.rb});Gn(m);return}ao(k,b,
c.layer,c.cttAuthInfo);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=L("screen_manager_skip_hide_killswitch"))){a:{b=q(Object.values(Qn));for(f=b.next();!f.done;f=b.next())if(Yn(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:$n(e),X:e,ub:g},L("il_via_jspb")?(h=new Fg,h.Y(e),d=d.getAsJspb(),H(h,2,d),G(h,4,g?16:8),"UNDEFINED_CSN"==e?Lq("visualElementHidden",h,f):Rp(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?Lq("visualElementHidden",
d,f):b?sj("visualElementHidden",d,b,f):lk("visualElementHidden",d,f)));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");cq({clientScreenNonce:k});Mq.getInstance().clear();d=Wn(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(L("web_mark_root_visible")||L("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:$n(e),X:e},L("il_via_jspb")?(b=new Fg,b.Y(e),f=d.getAsJspb(),H(b,2,f),G(b,4,1),"UNDEFINED_CSN"==e?Lq("visualElementShown",b,k):Qp(b,k,void 0)):(b={csn:e,ve:d.getAsJson(),eventType:1},
"UNDEFINED_CSN"==e?Lq("visualElementShown",b,k):lk("visualElementShown",b,k)));a.i.delete(c.layer||0);a.j=void 0;e=q(a.u);for(k=e.next();!k.done;k=e.next())b=q(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Pq(a,k,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(m){Gn(m)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Gn(m)}}}
;function Sq(){var a;return w(function(b){if(1==b.h)return u(b,kq(),2);if(a=b.i)return a.errorMetadata?(Gn(Error("Datasync IDs fetch responded with "+a.errorMetadata.code+": "+a.error)),b.return(void 0)):b.return(a.ro);Hn(Error("Network request to get Datasync IDs failed."));return b.return(void 0)})}
;var Tq=x.caches,Uq;function Vq(a){var b=a.indexOf(":");return-1===b?{Cb:a}:{Cb:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Wq(){return w(function(a){if(void 0!==Uq)return a.return(Uq);Uq=new Promise(function(b){var c;return w(function(d){switch(d.h){case 1:return ua(d,2),u(d,Tq.open("test-only"),4);case 4:return u(d,Tq.delete("test-only"),5);case 5:va(d,3);break;case 2:if(c=xa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Uq)})}
function Xq(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.h)return u(k,Wq(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return u(k,Tq.keys(),3)}c=k.i;d=q(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Vq(f),h=g.datasyncId,!h||a.includes(h)||b.push(Tq.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(n){return n})}))})}
;function Yq(){Sq().then(function(a){if(a&&(zl(a),Xq(a),L("clear_user_partitioned_ls"))){var b=void 0===b?{}:b;"_start"in gp("cupls")&&Z("aa",void 0,"cupls");var c=wp();c.cupls&&delete c.cupls;var d={timerName:"cupls",info:{},tick:{},span:{},jspbInfo:[]};up().push(d);c.cupls=d;mp("cupls");ep();lp("cupls").useGel=!0;vp("cupls").info.actionType="cupls";b.cttAuthInfo&&(lp("cupls").cttAuthInfo=b.cttAuthInfo);jh("cuplsTIMING_ACTION","cupls");Z("_start",b.startTime,"cupls");b={actionType:Dp("cupls")};(c=
Yn())&&"UNDEFINED_CSN"!==c&&(b.clientScreenNonce=c);cq(b,"cupls");kp("cupls");Z("cuplss",void 0,"cupls");try{try{var e=!!self.localStorage}catch(t){e=!1}if(e)for(var f=Object.keys(window.localStorage),g=q(f),h=g.next();!h.done;h=g.next()){var k=h.value;var m=k.match(/(.*)::.*::.*/);var n=null!==m?m[1]:void 0;e=n;void 0===e||a.includes(e)||self.localStorage.removeItem(k)}Z("cuplsc",void 0,"cupls")}catch(t){Gn(t),Z("cuplse",void 0,"cupls")}}})}
function Zq(){var a=new Km;Rh.M(function(){a.G()?Yq():a.i.add("publicytnetworkstatus-online",Yq,!0,void 0,void 0)})}
;function $q(a){a&&(a.dataset?a.dataset[ar("loaded")]="true":a.setAttribute("data-loaded","true"))}
function br(a,b){return a?a.dataset?a.dataset[ar(b)]:a.getAttribute("data-"+b):null}
var cr={};function ar(a){return cr[a]||(cr[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var dr=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,er=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function fr(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(dr,""),c=c.replace(er,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else gr(a,b,c)}
function gr(a,b,c){c=void 0===c?null:c;var d=hr(a),e=document.getElementById(d),f=e&&br(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Fi(d,b),b=""+Oa(b),ir[b]=f),g||(e=jr(a,d,function(){br(e,"loaded")||($q(e),Ii(d),Hh(Va(Ji,d),0))},c)))}
function jr(a,b,c,d){d=void 0===d?null:d;var e=qd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);md(e,qf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function kr(a){a=hr(a);var b=document.getElementById(a);b&&(Ji(a),b.parentNode.removeChild(b))}
function lr(a,b){a&&b&&(a=""+Oa(b),(a=ir[a])&&Hi(a))}
function hr(a){var b=document.createElement("a");Qb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Vb(a)}
var ir={};var mr=[],nr=!1;function or(){if(!L("disable_biscotti_fetch_for_ad_blocker_detection")&&!L("disable_biscotti_fetch_entirely_for_all_web_clients")&&mo()&&"1"!=qb()){var a=function(){nr=!0;"google_ad_status"in window?jh("DCLKSTAT",1):jh("DCLKSTAT",2)};
try{fr("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}mr.push(Rh.M(function(){if(!(nr||"google_ad_status"in window)){try{lr("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}nr=!0;jh("DCLKSTAT",3)}},5E3))}}
function pr(){var a=Number(B("DCLKSTAT",0));return isNaN(a)?0:a}
;function qr(){this.state=1;this.h=null}
l=qr.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Ab("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=xb())?f.createScript(e):e,e=(new Cb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Ab("From proto message. b/166824318"),d=Gb(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());rr(this,e,
d,a.program,b,c)}else Hn(Error("Cannot initialize botguard without program"))};
function rr(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,fr(c,function(){window[g]?sr(a,d,g,e):(a.state=3,kr(c),Hn(new ok("Unable to load Botguard","from "+c)))},f)):b?(f=qd("SCRIPT"),f.textContent=b,f.nonce=Tb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?sr(a,d,g,e):(a.state=4,Hn(new ok("Unable to load Botguard from JS")))):Hn(new ok("Unable to load VM; no url or JS provided"))}
l.isInitialized=function(){return!!this.h};
l.getState=function(){return this.state};
function sr(a,b,c,d){a.state=5;try{var e=new fd({program:b,globalName:c});e.uc.then(function(){a.state=6;d&&d(b)});
tr(a,e)}catch(f){a.state=7,f instanceof Error&&Hn(f)}}
l.invoke=function(a){a=void 0===a?{}:a;if(this.h){var b=this.h;a={qb:a};if(b.i)throw Error("Already disposed");b=b.l([a.qb,a.wc])}else b=null;return b};
l.dispose=function(){tr(this,null);this.state=8};
function tr(a,b){Rd(a.h);a.h=b}
;var ur=new qr;function vr(){return ur.isInitialized()}
function wr(a){a=void 0===a?{}:a;return ur.invoke(a)}
;function xr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Qh():d;this.l=c;this.j=d;this.i=new ed;this.h=a;a={};c=q(this.h.entries());for(d=c.next();!d.done;a={va:a.va,Da:a.Da},d=c.next()){var e=q(d.value);d=e.next().value;e=e.next().value;a.Da=d;a.va=e;d=function(f){return function(){f.va.fb();b.h[f.Da].Ta=!0;b.h.every(function(g){return!0===g.Ta})&&b.i.resolve()}}(a);
e=Mh(d,yr(this,a.va));this.h[a.Da]=Object.assign({},a.va,{fb:d,Oa:e})}}
function zr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return yr(a,a.h[e])-yr(a,a.h[d])});
b=q(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.Oa||c.Ta||(a.j.U(c.Oa),Mh(c.fb,10))}
xr.prototype.cancel=function(){for(var a=q(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Oa||b.Ta||this.j.U(b.Oa),b.Ta=!0;this.i.resolve()};
function yr(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function Ar(a){this.state=a;this.plugins=[];this.m=void 0}
Ar.prototype.install=function(){this.plugins.push.apply(this.plugins,fa(Ga.apply(0,arguments)))};
Ar.prototype.transition=function(a,b){var c=this,d=this.D.find(function(f){return f.from===c.state&&f.C===a});
if(d){this.j&&(zr(this.j),this.j=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Br(this,e,this.m),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Br(a,b,c){return function(){var d=Ga.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
Qh();var g={};e=q(e);for(var h=e.next();!h.done;g={Ea:g.Ea},h=e.next())g.Ea=h.value,Oh(function(k){return function(){k.Ea.la.apply(k.Ea,fa(d))}}(g));
f=f.map(function(k){var m;return{fb:function(){k.la.apply(k,fa(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.j=new xr(f))}}
da.Object.defineProperties(Ar.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Cr(a){Ar.call(this,void 0===a?"document_active":a);var b=this;this.m=10;this.h=new Map;this.D=[{from:"document_active",C:"document_disposed_preventable",action:this.u},{from:"document_active",C:"document_disposed",action:this.l},{from:"document_disposed_preventable",C:"document_disposed",action:this.l},{from:"document_disposed_preventable",C:"flush_logs",action:this.o},{from:"document_disposed_preventable",C:"document_active",action:this.i},{from:"document_disposed",C:"flush_logs",action:this.o},
{from:"document_disposed",C:"document_active",action:this.i},{from:"document_disposed",C:"document_disposed",action:function(){}},
{from:"flush_logs",C:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",c)});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",c)})}
r(Cr,Ar);Cr.prototype.u=function(a,b){if(!this.h.get("document_disposed_preventable")&&(a(b),(null==b?0:b.defaultPrevented)||(null==b?0:b.returnValue))){b.returnValue||(b.returnValue=!0);b.defaultPrevented||b.preventDefault();this.h=new Map;this.transition("document_active");return}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Cr.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Cr.prototype.o=function(a,b){a(b);this.transition("document_active")};
Cr.prototype.i=function(){this.h=new Map};function Dr(a){Ar.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.D=[{from:"document_visibility_unknown",C:"document_visible",action:this.i},{from:"document_visibility_unknown",C:"document_hidden",action:this.h},{from:"document_visibility_unknown",C:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",C:"document_backgrounded",action:this.l},{from:"document_visible",C:"document_hidden",action:this.h},{from:"document_visible",C:"document_foregrounded",action:this.o},
{from:"document_visible",C:"document_visible",action:this.i},{from:"document_foregrounded",C:"document_visible",action:this.i},{from:"document_foregrounded",C:"document_hidden",action:this.h},{from:"document_foregrounded",C:"document_foregrounded",action:this.o},{from:"document_hidden",C:"document_visible",action:this.i},{from:"document_hidden",C:"document_backgrounded",action:this.l},{from:"document_hidden",C:"document_hidden",action:this.h},{from:"document_backgrounded",C:"document_hidden",action:this.h},
{from:"document_backgrounded",C:"document_backgrounded",action:this.l},{from:"document_backgrounded",C:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",c):b.transition("document_hidden",c)});
L("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",c)}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",c)}))}
r(Dr,Ar);Dr.prototype.i=function(a,b){a(b);L("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Dr.prototype.h=function(a,b){a(b);L("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Dr.prototype.l=function(a,b){a(b)};
Dr.prototype.o=function(a,b){a(b)};function Er(){this.h=new Cr;this.i=new Dr}
Er.prototype.install=function(){var a=Ga.apply(0,arguments);this.h.install.apply(this.h,fa(a));this.i.install.apply(this.i,fa(a))};function Fr(){Er.call(this);var a={};this.install((a.document_disposed={la:this.j},a));a={};this.install((a.flush_logs={la:this.l},a))}
var Gr;r(Fr,Er);Fr.prototype.l=function(){lk("finalPayload",{csn:Yn()})};
Fr.prototype.j=function(){Kn(Ln)};function Hr(){}
Hr.getInstance=function(){var a=A("ytglobal.storage_");a||(a=new Hr,y("ytglobal.storage_",a,void 0));return a};
Hr.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Ir()):d.return()})};
function Ir(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
y("ytglobal.storageClass_",Hr,void 0);function jk(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=mh("ytidb_transaction_ended_event_rate_limit",.02)}
jk.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":L("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":L("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Jr(this,b);break;case "TRANSACTION_ENDED":this.j&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Jr(a,b){Hr.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Kr(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Kr(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Kr(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;var Lr=window;
function Mr(){var a=Lr.uaChPolyfill.state;if(0===a.type)lk("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&a.syntheticUa===b,d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),Gn(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);lk("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),lk("clientHintsPolyfillDiagnostics",
b))}}
var Nr=!1;function Or(){var a;1===(null==(a=Lr.uaChPolyfill)?void 0:a.state.type)?Nr||(Lr.uaChPolyfill.onReady=Or,Nr=!0):Lr.uaChPolyfill&&Mr()}
;function Pr(a,b,c){J.call(this);var d=this;c=c||B("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.K="*";this.l=c;this.sessionId=null;this.channel="widget";this.L=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.L&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.K=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=cb(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.A)}
r(Pr,J);Pr.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.K)}catch(d){xh(d)}}};
Pr.prototype.H=function(){window.removeEventListener("message",this.A);J.prototype.H.call(this)};function Qr(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Pr(!!B("WIDGET_ID_ENFORCE")),b=this.fc.bind(this);a.m=b;a.u=null;this.h.channel="widget";if(a=B("WIDGET_ID"))this.h.sessionId=a}
l=Qr.prototype;l.fc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,Rr(this,a)),this.j[a]=!0)):this.lb(a,b,c)};
l.lb=function(){};
function Rr(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Ub=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Za());this.sendMessage("onReady");db(this.i,this.Ib,this);this.i=[]};
l.Za=function(){return null};
function Sr(a,b){a.sendMessage("infoDelivery",b)}
l.Ib=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Ib({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.h=null};function Tr(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Ur(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Vr(a,b,c,d){if(Na(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Wr(a){Qr.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.qc.bind(this));this.addEventListener("onVolumeChange",this.sc.bind(this));this.addEventListener("onApiChange",this.kc.bind(this));this.addEventListener("onPlaybackQualityChange",this.nc.bind(this));this.addEventListener("onPlaybackRateChange",this.oc.bind(this));this.addEventListener("onStateChange",this.pc.bind(this));this.addEventListener("onWebglSettingsChanged",
this.tc.bind(this))}
r(Wr,Qr);l=Wr.prototype;
l.lb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Tr(a)){var d=b;if(Na(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Ur(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Ur(e);break;case "loadPlaylist":case "cuePlaylist":e=Vr(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Tr(a)&&Sr(this,this.Za())}};
l.onReady=function(){var a=this.Ub.bind(this);this.h.i=a};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.Za=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.pc=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Sr(this,a)};
l.nc=function(a){Sr(this,{playbackQuality:a})};
l.oc=function(a){Sr(this,{playbackRate:a})};
l.kc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.sc=function(){Sr(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.qc=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Sr(this,a)};
l.tc=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Sr(this,a)};
l.dispose=function(){Qr.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Xr(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Eb,this)}
r(Xr,J);l=Xr.prototype;l.start=function(){this.started||this.h()||(this.started=!0,this.connection.na("RECEIVING"))};
l.na=function(a,b){this.started&&!this.h()&&this.connection.na(a,b)};
l.Eb=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Yr(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Zr(a,c))&&this.na(a,c))}}};
l.addListener=function(a){if(!(a in this.i)){var b=this.lc.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
l.lc=function(a,b){this.started&&!this.h()&&this.connection.na(a,this.Ya(a,b))};
l.Ya=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
l.H=function(){var a=this.connection;a.h()||Rf(a.i,"command",this.Eb,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.H.call(this)};function $r(a,b){Xr.call(this,b);this.api=a;this.start()}
r($r,Xr);$r.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
$r.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Yr(a,b){switch(a){case "loadVideoById":return a=Ur(b),[a];case "cueVideoById":return a=Ur(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Vr(b),[a];case "cuePlaylist":return a=Vr(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Zr(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
$r.prototype.Ya=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Xr.prototype.Ya.call(this,a,b)};
$r.prototype.H=function(){Xr.prototype.H.call(this);delete this.api};function as(a){a=void 0===a?!1:a;J.call(this);this.i=new K(a);Td(this,Va(Rd,this.i))}
Xa(as,J);as.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
as.prototype.l=function(a,b){this.h()||this.i.ka.apply(this.i,arguments)};function bs(a,b,c){as.call(this);this.j=a;this.destination=b;this.id=c}
r(bs,as);bs.prototype.na=function(a,b){this.h()||this.j.na(this.destination,this.id,a,b)};
bs.prototype.H=function(){this.destination=this.j=null;as.prototype.H.call(this)};function cs(a,b,c){J.call(this);this.destination=a;this.origin=c;this.i=Eh(window,"message",this.j.bind(this));this.connection=new bs(this,a,b);Td(this,Va(Rd,this.connection))}
r(cs,J);cs.prototype.na=function(a,b,c,d){this.h()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(sf(a),this.origin))};
cs.prototype.j=function(a){var b;if(b=!this.h())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h()||c.l("command",b.command,b.data,a.origin))}};
cs.prototype.H=function(){Fh(this.i);this.destination=null;J.prototype.H.call(this)};function ds(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||sb(b);this.assets=a.assets||{};this.attrs=a.attrs||sb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
ds.prototype.clone=function(){var a=new ds,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==La(c)?a[b]=sb(c):a[b]=c}return a};var es=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function fs(a){a=a||"";if(window.spf){var b=a.match(es);spf.style.load(a,b?b[1]:"",void 0)}else gs(a)}
function gs(a){var b=hs(a),c=document.getElementById(b),d=c&&br(c,"loaded");d||c&&!d||(c=is(a,b,function(){br(c,"loaded")||($q(c),Ii(b),Hh(Va(Ji,b),0))}))}
function is(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=qf(a);Rb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function hs(a){var b=qd("A");Ab("This URL is never added to the DOM");Qb(b,new Ib(a,Jb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Vb(a)}
;function js(){J.call(this);this.i=[]}
r(js,J);js.prototype.H=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.la,void 0)}J.prototype.H.call(this)};function ks(){js.apply(this,arguments)}
r(ks,js);function ls(a,b,c,d){J.call(this);var e=this;this.L=b;this.webPlayerContextConfig=d;this.Va=!1;this.api={};this.Fa=this.u=null;this.S=new K;this.i={};this.ga=this.Ga=this.elementId=this.Wa=this.config=null;this.Z=!1;this.l=this.A=null;this.Ha={};this.Lb=["onReady"];this.lastError=null;this.mb=NaN;this.K={};this.Mb=new ks(this);this.qa=0;this.j=this.m=a;Td(this,Va(Rd,this.S));ms(this);ns(this);Td(this,Va(Rd,this.Mb));c?this.qa=Hh(function(){e.loadNewVideoConfig(c)},0):d&&(os(this),ps(this))}
r(ls,J);l=ls.prototype;l.getId=function(){return this.L};
l.loadNewVideoConfig=function(a){if(!this.h()){this.qa&&(Ih(this.qa),this.qa=0);var b=a||{};b instanceof ds||(b=new ds(b));this.config=b;this.setConfig(a);ps(this);this.isReady()&&qs(this)}};
function os(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.L,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.L:a.config.attrs.id=a.L);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.Wa=a;this.config=rs(a);os(this);if(!this.Ga){var b;this.Ga=ss(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=Bd(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=Bd(Number(a)||a))};
function qs(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function ts(a){var b=!0,c=us(a);c&&a.config&&(a=vs(a),b=br(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function ps(a){if(!a.h()&&!a.Z){var b=ts(a);if(b&&"html5"===(us(a)?"html5":null))a.ga="html5",a.isReady()||ws(a);else if(xs(a),a.ga="html5",b&&a.l&&a.m)a.m.appendChild(a.l),ws(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=ys(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.config?rs(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);ws(a)};
a.Z=!0;b?a.A():(fr(vs(a),a.A),(b=zs(a))&&fs(b),As(a)&&!c&&y("yt.player.Application.create",null,void 0))}}}
function us(a){var b=pd(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function ws(a){if(!a.h()){var b=us(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Z=!1;if(!ys(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Bs(a)}else a.mb=Hh(function(){ws(a)},50)}}
function Bs(a){ms(a);a.Va=!0;var b=us(a);if(b){a.u=Cs(a,b,"addEventListener");a.Fa=Cs(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Cs(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.u&&a.u(g,a.i[g]);qs(a);a.Ga&&a.Ga(a.api);a.S.ka("onReady",a.api)}
function Cs(a,b,c){var d=b[c];return function(){var e=Ga.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Hn(f))}}}
function ms(a){a.Va=!1;if(a.Fa)for(var b in a.i)a.i.hasOwnProperty(b)&&a.Fa(b,a.i[b]);for(var c in a.K)a.K.hasOwnProperty(c)&&Ih(Number(c));a.K={};a.u=null;a.Fa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Wa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Va};
function ns(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Ii("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Ii("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Ii("a11y-announce",b)})}
l.addEventListener=function(a,b){var c=this,d=ss(this,b);d&&(0<=cb(this.Lb,a)||this.i[a]||(b=Ds(this,a),this.u&&this.u(a,b)),this.S.subscribe(a,d),"onReady"===a&&this.isReady()&&Hh(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.h()||(b=ss(this,b))&&Rf(this.S,a,b)};
function ss(a,b){var c=b;if("string"===typeof b){if(a.Ha[b])return a.Ha[b];c=function(){var d=Ga.apply(0,arguments),e=A(b);if(e)try{e.apply(x,d)}catch(f){Gn(f)}};
a.Ha[b]=c}return c?c:null}
function Ds(a,b){var c="ytPlayer"+b+a.L;a.i[b]=c;x[c]=function(d){var e=Hh(function(){if(!a.h()){a.S.ka(b,null!=d?d:void 0);var f=a.K,g=String(e);g in f&&delete f[g]}},0);
pb(a.K,String(e))};
return c}
l.getPlayerType=function(){return this.ga||(us(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function xs(a){a.cancel();ms(a);a.ga=null;a.config&&(a.config.loaded=!1);var b=us(a);b&&(ts(a)||!As(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.A&&lr(vs(this),this.A);Ih(this.mb);this.Z=!1};
l.H=function(){xs(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Gn(b)}this.Ha=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(x[this.i[a]]=null);this.Wa=this.config=this.api=null;delete this.m;delete this.j;J.prototype.H.call(this)};
function As(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function vs(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function zs(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function ys(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===bi(c||"","&")[b]}
function rs(a){for(var b={},c=q(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?sb(e):e}return b}
;var Es={},Fs="player_uid_"+(1E9*Math.random()>>>0);function Gs(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?pd(d):d;var e=Fs+"_"+Oa(d),f=Es[e];if(f&&c)return Hs(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new ls(d,e,a,b);Es[e]=f;Ii("player-added",f.api);Td(f,function(){delete Es[f.getId()]});
return f.api}
function Hs(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Is=null,Js=null,Ks=null;function Ls(){var a=Is.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Ms(a,b,c){a="ST-"+Vb(a).toString(36);b=b?ac(b):"";c=c||5;mo()&&xj(a,b,c)}
;function Ns(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=B("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=B("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Yb(window.location.href);g&&f.push(g);g=Yb(d);if(0<=cb(f,g)||!g&&0==d.lastIndexOf("/",0))if(L("autoescape_tempdata_url")&&(f=document.createElement("a"),Qb(f,d),d=f.href),d&&(d=Zb(d),f=d.indexOf("#"),d=0>f?d:d.substr(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Yn()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Ms(d,b,h)}else Ms(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var n=void 0===n?window:n;c=n.location;a=bc(a,k)+m;var t=void 0===t?Ad:t;a:{t=void 0===t?Ad:t;for(k=0;k<t.length;++k)if(m=t[k],m instanceof yd&&m.isValid(a)){t=new jd(a,hd);break a}t=void 0}c.href=ld(t||kd)}return!0}
;y("yt.setConfig",jh,void 0);y("yt.config.set",jh,void 0);y("yt.setMsg",co,void 0);y("yt.msgs.set",co,void 0);y("yt.logging.errors.log",Gn,void 0);
y("writeEmbed",function(){var a=B("PLAYER_CONFIG",void 0);if(!a){var b=B("PLAYER_VARS",void 0);b&&(a={args:b})}uo(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=B("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);L("embeds_js_api_set_1p_cookie")&&(c=gi(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));$p();
if((c=B("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=gi(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Is=Gs(a,c,!1)}else Is=Gs(a);Is.addEventListener("onVideoDataChange",Ls);a=B("POST_MESSAGE_ID","player");B("ENABLE_JS_API")?Ks=new Wr(Is):B("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Js=new cs(window.parent,
a,b),Ks=new $r(Is,Js.connection));or();L("ytidb_create_logger_embed_killswitch")||ik();L("flush_gel_on_teardown")&&(a={},Gr||(Gr=new Fr),Gr.install((a.flush_logs={la:function(){aj()}},a)));
L("networkless_logging_web_embedded")&&(L("embeds_web_enable_new_nwl")?Rm():Zm());L("embeds_enable_ua_ch_polyfill")&&Or();L("ytidb_clear_embedded_player")&&Rh.M(function(){if(!Dq){var e={pb:{feedbackEndpoint:Lo(xq),modifyChannelNotificationPreferenceEndpoint:Lo(yq),playlistEditEndpoint:Lo(zq),subscribeEndpoint:Lo(vq),unsubscribeEndpoint:Lo(wq),webPlayerShareEntityServiceEndpoint:Lo(Aq)}},f=L("web_enable_client_location_service")?Fo.getInstance():void 0,g=[],h={};f&&(g.push(f),h.client_location=f);
if(void 0===k){vo.h||(vo.h=new vo);var k=vo.h}if(void 0===m){Cq.h||(Cq.h=new Cq);var m=Cq.h}jq(e,m,k,g,h);Dq=iq.h}Zq()})},void 0);
var Os=vh(function(){fq();var a=Bj.getInstance(),b=Ej(119),c=1<window.devicePixelRatio;if(document.body&&$e(document.body,"exp-invert-logo"))if(c&&!$e(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!$e(d,"inverted-hdpi")){var e=Ye(d);Ze(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&$e(document.body,"inverted-hdpi")&&af();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Fj(b)||0;d=c?d|67108864:d&-67108865;0==d?delete Aj[b]:(c=d.toString(16),
Aj[b]=c.toString());c=!0;L("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Aj)d.push(f+"="+encodeURIComponent(String(Aj[f])));xj(b,d.join("&"),63072E3,a.i,c)}Nq.h||(Nq.h=new Nq);a=Nq.h;f=16623;var g=void 0===g?{}:g;Object.values(eo).includes(f)||(Hn(new ok("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.o=[];a.D=[];g.sb?Qq(a,f,g):Rq(a,f,g)}),Ps=vh(function(){Is&&Is.sendAbandonmentPing&&Is.sendAbandonmentPing();
B("PL_ATT")&&ur.dispose();for(var a=0,b=mr.length;a<b;a++)Rh.U(mr[a]);mr.length=0;kr("//static.doubleclick.net/instream/ad_status.js");nr=!1;jh("DCLKSTAT",0);Sd(Ks,Js);Is&&(Is.removeEventListener("onVideoDataChange",Ls),Is.destroy())});
window.addEventListener?(window.addEventListener("load",Os),window.addEventListener("unload",Ps)):window.attachEvent&&(window.attachEvent("onload",Os),window.attachEvent("onunload",Ps));Wa("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||vr);Wa("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||wr);Wa("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||pr);
Wa("yt.player.exports.navigate",A("yt.player.exports.navigate")||Ns);Wa("yt.util.activity.init",A("yt.util.activity.init")||Th);Wa("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||Wh);Wa("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||Uh);}).call(this);
