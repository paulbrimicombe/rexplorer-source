import{u as t,_ as n,a as s,b as r,c as e,i as c,d as a,S as o,s as i,e as u,v as f,q as h,g as l,h as m,w as p,o as v,x as $,y as d,z as g,A as w,B as x,f as y,t as R,j as b,k as j,l as E,m as k,p as M}from"./client.cc3ba5ac.js";import"./_common-styles.9c34c28b.js";import{M as q,R as D}from"./Modal.2f528126.js";function P(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,c=s(t);if(n){var a=s(this).constructor;e=Reflect.construct(c,arguments,a)}else e=c.apply(this,arguments);return r(this,e)}}function S(t){var n,s,r,e,c,a;return c=new D({props:{scores:t[0],linkedRatingName:"consorts"}}),{c:function(){n=y("h1"),s=y("img"),r=R("\n    English Monarchs"),e=u(),f(c.$$.fragment),this.h()},l:function(t){n=b(t,"H1",{class:!0});var a=j(n);s=b(a,"IMG",{width:!0,height:!0,src:!0,alt:!0,class:!0}),r=E(a,"\n    English Monarchs"),a.forEach(l),e=m(t),p(c.$$.fragment,t),this.h()},h:function(){k(s,"width","64"),k(s,"height","64"),s.src!=="english-monarch-crown.webp"&&k(s,"src","english-monarch-crown.webp"),k(s,"alt","English monarch crown"),k(s,"class","svelte-srnqf4"),k(n,"class","monarchs svelte-srnqf4")},m:function(t,o){v(t,n,o),M(n,s),M(n,r),v(t,e,o),$(c,t,o),a=!0},p:function(t,n){var s={};1&n&&(s.scores=t[0]),c.$set(s)},i:function(t){a||(g(c.$$.fragment,t),a=!0)},o:function(t){w(c.$$.fragment,t),a=!1},d:function(t){t&&l(n),t&&l(e),x(c,t)}}}function _(t){var n,s,r;return s=new q({props:{$$slots:{default:[S]},$$scope:{ctx:t}}}),{c:function(){n=u(),f(s.$$.fragment),this.h()},l:function(t){h('[data-svelte="svelte-ofgtr0"]',document.head).forEach(l),n=m(t),p(s.$$.fragment,t),this.h()},h:function(){document.title="Rexplorer"},m:function(t,e){v(t,n,e),$(s,t,e),r=!0},p:function(t,n){var r=d(n,1)[0],e={};3&r&&(e.$$scope={dirty:r,ctx:t}),s.$set(e)},i:function(t){r||(g(s.$$.fragment,t),r=!0)},o:function(t){w(s.$$.fragment,t),r=!1},d:function(t){t&&l(n),x(s,t)}}}var z=function(t,n,s,r){return new(s||(s=Promise))((function(e,c){function a(t){try{i(r.next(t))}catch(t){c(t)}}function o(t){try{i(r.throw(t))}catch(t){c(t)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(t){t(n)}))).then(a,o)}i((r=r.apply(t,n||[])).next())}))};function A(){return z(this,void 0,void 0,t.mark((function n(){var s,r;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("data/monarchs.json");case 2:return s=t.sent,t.next=5,s.json();case 5:if(r=t.sent,200!==s.status){t.next=11;break}return((null==r?void 0:r.scores)||[]).forEach((function(t){t.linkedRatings=t.consorts||[]})),t.abrupt("return",r);case 11:this.error(s.status,r.message);case 12:case"end":return t.stop()}}),n,this)})))}function B(t,n,s){var r=n.scores,e=void 0===r?[]:r;return t.$$set=function(t){"scores"in t&&s(0,e=t.scores)},[e]}var G=function(t){n(r,o);var s=P(r);function r(t){var n;return e(this,r),n=s.call(this),c(a(n),t,B,_,i,{scores:0}),n}return r}();export default G;export{A as preload};