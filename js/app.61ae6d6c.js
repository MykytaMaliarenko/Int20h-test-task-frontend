(function(e){function t(t){for(var r,a,s=t[0],c=t[1],i=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function s(e){return c.p+"js/"+({input:"input",result:"result"}[e]||e)+"."+{input:"57638957",result:"ee346d1d"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={input:1,result:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({input:"input",result:"result"}[e]||e)+"."+{input:"b5ba82b1",result:"a2d36f10"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var i=u[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){i=f[s],l=i.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Int20h-test-task-frontend/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"036e":function(e,t,n){"use strict";var r=n("67d9"),a=n.n(r);a.a},"0429":function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return c}));var r="start",a="nextRound",o="end",u="addResult",s="isGuessed",c="setIsWaitingForGuessResults";t["g"]={START:r,NEXT_ROUND:a,END:o,ADD_RESULT:u,IS_GUESSED:s,SET_IS_WAITING_FOR_GUESS_RESULTS:c}},"0ec1":function(e,t,n){"use strict";var r=n("d3e5"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],u=(n("cf25"),n("2877")),s={},c=Object(u["a"])(s,a,o,!1,null,null,null),i=c.exports,l=(n("b0c0"),n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("AnonymousMessage",{attrs:{messages:["Hello!","Do you wanna play ?)"]}}),n("section",{staticClass:"button-container"},[n("button",{on:{click:e.begin}},[e._v("Do I have a choice...")])])],1)},d=[],p=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),m=n("7ed9"),b=n("2f62"),g=n("e5e2"),h=n("be12");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(p["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O,w={name:"Home",components:{AnonymousMessage:m["a"]},methods:y({},Object(b["d"])(g["a"].game,[h["a"].game.START]),{begin:function(){this.start(),this.$router.push({name:"input"})}})},j=w,R=(n("036e"),Object(u["a"])(j,f,d,!1,null,"a2186830",null)),P=R.exports,S=(n("99af"),n("96cf"),n("1da1")),_=n("abd8"),E=n("0429"),x=n("bc3a"),k=n.n(x),T=n("a7fe"),A=n.n(T),D={init:function(e){r["a"].use(A.a,k.a),r["a"].axios.defaults.baseURL=e},setHeader:function(){},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r["a"].axios.get("".concat(e,"/").concat(t)).catch((function(e){throw new Error("[RWV] ApiService ".concat(e))}))},post:function(e,t){return r["a"].axios.post("".concat(e),t)},update:function(e,t,n){return r["a"].axios.put("".concat(e,"/").concat(t),n)},put:function(e,t){return r["a"].axios.put("".concat(e),t)},delete:function(e){return r["a"].axios.delete(e).catch((function(e){throw new Error("[RWV] ApiService ".concat(e))}))}},G=D,C={makeGuess:function(e,t){var n=new FormData;return n.append("type",e),n.append("data",t),G.post("/guessMusic",n)}},M={round:0,roundResults:[],isWaitingForGuessResults:!1,isPlaying:!1},F=Object(p["a"])({},_["a"],function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,a=n.type,o=n.data,!a||!o){e.next=23;break}return r(E["e"],!0),e.prev=4,e.next=7,C.makeGuess(a,o);case 7:u=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](4),console.log({e:e.t0});case 13:if(200===u.status){e.next=21;break}if(404!==u.status){e.next=18;break}r(E["a"],{notFound:!0}),e.next=19;break;case 18:throw"bad status ".concat(u.status,": ").concat(u.statusText);case 19:e.next=22;break;case 21:r(E["a"],u.data);case 22:r(E["e"],!1);case 23:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t,n){return e.apply(this,arguments)}}()),I=(O={},Object(p["a"])(O,E["f"],(function(e){e.isPlaying=!0,e.round=1})),Object(p["a"])(O,E["d"],(function(e){e.round++})),Object(p["a"])(O,E["b"],(function(e){e.round=0,e.isPlaying=!1})),Object(p["a"])(O,E["c"],(function(e,t){e.roundResults[e.roundResults.length-1].isGuessed=t})),Object(p["a"])(O,E["a"],(function(e,t){e.roundResults.push(t)})),Object(p["a"])(O,E["e"],(function(e,t){e.isWaitingForGuessResults=t})),O),N={round:function(e){return e.round},roundResults:function(e){return e.roundResults},lastRoundResult:function(e){return 0!==e.roundResults.length?e.roundResults[e.roundResults.length-1]:{}},isPlaying:function(e){return e.isPlaying},isWaitingForGuessResults:function(e){return e.isWaitingForGuessResults}},L={namespaced:!0,state:M,actions:F,mutations:I,getters:N};r["a"].use(b["a"]);var U=new b["a"].Store({});U.registerModule(g["a"].game,L);var W=U;r["a"].use(l["a"]);var $=[{path:"/",name:"home",component:P},{path:"/input",name:"input",component:function(){return n.e("input").then(n.bind(null,"4d3f"))}},{path:"/guessPreview",name:"guessPreview",component:function(){return n.e("result").then(n.bind(null,"33d9"))}},{path:"/result",name:"result",component:function(){return n.e("result").then(n.bind(null,"eeac"))}},{path:"/end",name:"end",component:function(){return n.e("result").then(n.bind(null,"358a"))}}],q=new l["a"]({mode:"history",base:"/Int20h-test-task-frontend/",routes:$});q.beforeEach((function(e,t,n){!W.getters["".concat(g["b"],"/isPlaying")]||"home"!==e.name&&"end"!==e.name?0===W.getters["".concat(g["b"],"/roundResults")].length&&"end"===e.name?n({name:"input"}):W.getters["".concat(g["b"],"/isPlaying")]||"guessPreview"!==e.name?n():n({name:"home"}):n({name:"input"})}));var H=q,B=n("ecee"),J=n("c074"),K=n("ad3d");B["c"].add(J["d"],J["c"],J["a"],J["b"]),r["a"].component("font-awesome-icon",K["a"]),G.init("https://int20h-2020.herokuapp.com"),r["a"].config.productionTip=!1,new r["a"]({router:H,store:W,render:function(e){return e(i)}}).$mount("#app")},"67d9":function(e,t,n){},"7ed9":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"anonymous-message-container"},[n("div",{staticClass:"image"},[n("font-awesome-icon",{attrs:{icon:"question",size:"lg"}})],1),n("section",{staticClass:"messages"},e._l(e.messages,(function(t){return n("div",{staticClass:"message"},[e._v(" "+e._s(t)+" ")])})),0)])},a=[],o={name:"AnonymousMessage",props:{messages:{type:Array,required:!0}}},u=o,s=(n("0ec1"),n("2877")),c=Object(s["a"])(u,r,a,!1,null,"6b66cf58",null);t["a"]=c.exports},abd8:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="makeGuess";t["b"]={MAKE_GUESS:r}},be12:function(e,t,n){"use strict";var r=n("0429");t["a"]={game:r["g"]}},cf25:function(e,t,n){"use strict";var r=n("fea6"),a=n.n(r);a.a},d3e5:function(e,t,n){},e5e2:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var r="game";t["a"]={game:r}},fea6:function(e,t,n){}});
//# sourceMappingURL=app.61ae6d6c.js.map