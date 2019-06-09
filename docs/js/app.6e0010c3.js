(function(e){function t(t){for(var r,i,a=t[0],u=t[1],p=t[2],c=0,h=[];c<a.length;c++)i=a[c],o[i]&&h.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(h.length)h.shift()();return s.push.apply(s,p||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var p=0;p<a.length;p++)t(a[p]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1466:function(e,t,n){"use strict";var r=n("a1bf"),o=n.n(r);o.a},"156c":function(e,t,n){"use strict";var r=n("cde0"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[e._m(0),n("p",[e._v("A fully working Vue.js terminal emulator.")]),n("vue-command",{attrs:{"help-timeout":1250,commands:e.commands,"show-help":""}}),e._m(1)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("a",{attrs:{href:"https://github.com/ndabAP/vue-command"}},[e._v("vue-command")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("      "),n("code",[e._v("\n$ npm i --save vue-command\n      ")]),e._v("\n    ")])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-command",on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.mutatePointerHandler(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.mutatePointerHandler(t)}],keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.autocomplete(t))}}},[n("div",{staticClass:"term",class:{"white-bg":e.whiteTheme,"dark-bg":!e.whiteTheme}},[e.hideBar?e._e():n("div",{staticClass:"term-bar"},[n("span",{staticClass:"term-title",class:{"dark-font":e.whiteTheme,"white-font":!e.whiteTheme}},[e._v("\n        "+e._s(e.title)+"\n      ")])]),n("div",{ref:"term-std",staticClass:"term-std"},[n("div",{staticClass:"term-cont"},[e.showIntro?n("div",{class:{"white-font":!e.whiteTheme,"dark-font":e.whiteTheme}},[e._v("\n          "+e._s(e.intro)+"\n        ")]):e._e(),n("stdin",{attrs:{bus:e.bus,"hide-prompt":e.hidePrompt,"is-in-progress":e.isInProgress,"is-last":0===e.progress,prompt:e.prompt,"help-text":e.helpText,"keep-prompt":e.keepPrompt,"help-timeout":e.helpTimeout,"show-help":e.showHelp,"white-theme":e.whiteTheme,uid:e._uid},on:{handle:e.handle,typing:e.setCurrent}}),e._l(e.history,function(t,r){return n("div",{key:r},[n("stdout",{staticClass:"term-stdout",attrs:{"white-theme":e.whiteTheme,stdout:t}}),n("stdin",{attrs:{bus:e.bus,"hide-prompt":e.hidePrompt,"is-in-progress":e.isInProgress,"is-last":r===e.progress-1,"last-command":e.last,prompt:e.prompt,"help-text":e.helpText,"keep-prompt":e.keepPrompt,"help-timeout":e.helpTimeout,"show-help":e.showHelp,"white-theme":e.whiteTheme,uid:e._uid},on:{handle:e.handle,typing:e.setCurrent}})],1)})],2)])])])},a=[],u=(n("96cf"),n("3b8d")),p=(n("f559"),n("55dd"),n("c5f6"),n("3852")),l=n.n(p),c=n("a59b"),h=n.n(c),d=n("0644"),m=n.n(d),f=n("d623"),y=n.n(f),w=n("13ea"),v=n.n(w),b=n("c641"),k=n.n(b),g=n("ec69"),_=n.n(g),x=n("3a0e"),P=n.n(x),T=n("66c7"),O=n.n(T),C=n("5add"),j=n.n(C),$=n("afab"),B=n.n($),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLast||!e.isInProgress,expression:"!isLast || !isInProgress"}]},[e.hidePrompt?e._e():n("span",{staticClass:"term-ps",class:{"dark-font":e.whiteTheme,"white-font":!e.whiteTheme}},[e.isLast||!e.keepPrompt?[e._v(e._s(e.prompt))]:e._e(),!e.isLast&&e.keepPrompt?[e._v(e._s(e.localPrompt))]:e._e()],2),n("span",{staticClass:"term-stdin"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.command,expression:"command"}],ref:"input",class:{"dark-font":e.whiteTheme,"white-font":!e.whiteTheme},attrs:{autofocus:e.isLast,disabled:!e.isLast,placeholder:e.placeholder,type:"text"},domProps:{value:e.command},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handle(t)},input:function(t){t.target.composing||(e.command=t.target.value)}}})])])},S=[],L=n("b8ce"),E=n.n(L),H={props:{bus:{type:Object,required:!0},helpText:{type:String},helpTimeout:{type:Number},hidePrompt:{type:Boolean,default:!1},isInProgress:{type:Boolean,default:!1},isLast:{type:Boolean,default:!1,required:!0},lastCommand:{type:String,default:""},keepPrompt:{type:Boolean,default:!1},prompt:{type:String},showHelp:{type:Boolean,default:!1},uid:{type:Number,required:!0},whiteTheme:{type:Boolean}},data:function(){return{command:"",isDisabled:!1,placeholder:"",localPrompt:""}},created:function(){var e=this;setTimeout(function(){e.isLast&&e.showHelp&&(e.placeholder=e.helpText)},this.helpTimeout)},mounted:function(){var e=this;this.$refs.input.scrollIntoView(),this.$refs.input.focus(),this.bus.$on("autocomplete",function(t){var n=t.command,r=t.uid;e.isLast&&e.uid===r&&(e.command=n)})},methods:{handle:function(){this.isInProgress||(this.localPrompt=this.prompt,this.$emit("handle",this.command),this.placeholder="")}},watch:{lastCommand:function(){!v()(this.lastCommand)&&this.isLast&&(this.command=E()(this.lastCommand))},command:function(){this.$emit("typing",this.command)},isInProgress:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.isInProgress||!this.isLast){e.next=5;break}return e.next=3,this.$nextTick();case 3:this.$refs.input.scrollIntoView(),this.$refs.input.focus();case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},D=H,N=(n("1466"),n("2877")),U=Object(N["a"])(D,I,S,!1,null,null,null),A=U.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{class:{"dark-font":e.whiteTheme,"white-font":!e.whiteTheme},domProps:{innerHTML:e._s(e.stdout)}})},q=[],R={props:{stdout:{type:String,default:""},whiteTheme:{type:Boolean}}},V=R,F=(n("7d05"),Object(N["a"])(V,M,q,!1,null,null,null)),J=F.exports,W="Tab",z="ArrowUp",G="ArrowDown",K=new r["a"],Q={props:{commands:{type:Object,required:!0},helpTimeout:{type:Number,default:4e3},keepPrompt:{type:Boolean,default:!1},hideBar:{type:Boolean,default:!1},hidePrompt:{type:Boolean,default:!1},intro:{type:String,default:"Fasten your seatbelts!"},showHelp:{type:Boolean,default:!1},showIntro:{type:Boolean,default:!1},title:{type:String,default:"neil@moon: ~"},prompt:{type:String,default:"~neil@moon:#"},helpText:{type:String,default:"Type help"},whiteTheme:{type:Boolean,default:!1},yargsOptions:{type:Object,default:function(){return{}}}},components:{Stdin:A,Stdout:J},data:function(){return{bus:K,history:[],isInProgress:!1,executed:[],current:"",last:"",pointer:0}},computed:{progress:{get:function(){return y()(this.history)}}},watch:{},methods:{mutatePointerHandler:function(e){var t=e.key;t===z&&this.pointer>0?(this.pointer--,this.last=this.executed[this.pointer]):t===G&&this.pointer<y()(this.executed)-1&&(this.pointer++,this.last=this.executed[this.pointer])},autocomplete:function(e){var t=this;e.key!==W||v()(this.current)||k()(_()(this.commands).sort(),function(e){if(e.startsWith(t.current))return t.bus.$emit("autocomplete",{command:e,uid:t._uid}),!1})},setCurrent:function(e){this.current=e},handle:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,o,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=O()(t),n=h()(B()(t,this.yargsOptions)._),!v()(n)){e.next=6;break}this.history.push(null),e.next=22;break;case 6:if(o=m()(this.executed),o=j()(o,t),o.push(t),this.executed=o,this.pointer=y()(o),!l()(this.commands,n)){e.next=21;break}return this.history.push(""),this.isInProgress=!0,e.next=16,Promise.resolve(P()(this.commands,n,B()(t,this.yargsOptions)));case 16:s=e.sent,r["a"].set(this.history,y()(this.history)-1,s),this.isInProgress=!1,e.next=22;break;case 21:this.history.push("".concat(t,": command not found"));case 22:this.setCurrent("");case 23:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},X=Q,Y=(n("156c"),Object(N["a"])(X,i,a,!1,null,null,null)),Z=Y.exports,ee={components:{VueCommand:Z},data:function(){return{commands:{pokedex:function(e){var t=e.color,n=e._;return t&&"pikachu"===n[1]?"yellow":"Usage: pokedex pokemon [option]<br><br>\n\n          Example: pokedex pikachu --color\n        "},help:function(){return"Usage: pokedex pokemon [option]<br><br>\n\n        Example: pokedex pikachu --color\n      "}}}}},te=ee,ne=(n("5c0b"),Object(N["a"])(te,o,s,!1,null,null,null)),re=ne.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(re)}}).$mount("#app")},5865:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"7d05":function(e,t,n){"use strict";var r=n("5865"),o=n.n(r);o.a},a1bf:function(e,t,n){},be69:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="be69"},cde0:function(e,t,n){}});
//# sourceMappingURL=app.6e0010c3.js.map