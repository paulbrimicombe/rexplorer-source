import{u as t,_ as n,a as e,b as s,c as r,i as a,d as c,S as o,s as i,e as u,v as f,q as l,g as h,h as m,w as d,o as p,x as v,y as $,z as g,A as y,B as x,f as w,t as R,j as k,k as b,l as j,m as q,p as E}from"./client.cc3ba5ac.js";import"./_common-styles.9c34c28b.js";import{M,R as S}from"./Modal.2f528126.js";function D(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=e(t);if(n){var c=e(this).constructor;r=Reflect.construct(a,arguments,c)}else r=a.apply(this,arguments);return s(this,r)}}function P(t){var n,e,s,r,a,c;return a=new S({props:{scores:t[0],linkedRatingName:"individual scores",linkSymbol:""}}),{c:function(){n=w("h1"),e=w("img"),s=R("\n    English Royal Teams"),r=u(),f(a.$$.fragment),this.h()},l:function(t){n=k(t,"H1",{class:!0});var c=b(n);e=k(c,"IMG",{width:!0,height:!0,src:!0,alt:!0,class:!0}),s=j(c,"\n    English Royal Teams"),c.forEach(h),r=m(t),d(a.$$.fragment,t),this.h()},h:function(){q(e,"width","64"),q(e,"height","64"),e.src!=="king-and-queen.webp"&&q(e,"src","king-and-queen.webp"),q(e,"alt","King and Queen playing chess"),q(e,"class","svelte-srnqf4"),q(n,"class","teams svelte-srnqf4")},m:function(t,o){p(t,n,o),E(n,e),E(n,s),p(t,r,o),v(a,t,o),c=!0},p:function(t,n){var e={};1&n&&(e.scores=t[0]),a.$set(e)},i:function(t){c||(g(a.$$.fragment,t),c=!0)},o:function(t){y(a.$$.fragment,t),c=!1},d:function(t){t&&h(n),t&&h(r),x(a,t)}}}function T(t){var n,e,s;return e=new M({props:{$$slots:{default:[P]},$$scope:{ctx:t}}}),{c:function(){n=u(),f(e.$$.fragment),this.h()},l:function(t){l('[data-svelte="svelte-ofgtr0"]',document.head).forEach(h),n=m(t),d(e.$$.fragment,t),this.h()},h:function(){document.title="Rexplorer"},m:function(t,r){p(t,n,r),v(e,t,r),s=!0},p:function(t,n){var s=$(n,1)[0],r={};3&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i:function(t){s||(g(e.$$.fragment,t),s=!0)},o:function(t){y(e.$$.fragment,t),s=!1},d:function(t){t&&h(n),x(e,t)}}}var _=function(t,n,e,s){return new(e||(e=Promise))((function(r,a){function c(t){try{i(s.next(t))}catch(t){a(t)}}function o(t){try{i(s.throw(t))}catch(t){a(t)}}function i(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,o)}i((s=s.apply(t,n||[])).next())}))};function z(){return _(this,void 0,void 0,t.mark((function n(){var e,s;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("data/teams.json");case 2:return e=t.sent,t.next=5,e.json();case 5:if(s=t.sent,200!==e.status){t.next=11;break}return((null==s?void 0:s.scores)||[]).forEach((function(t){t.linkedRatings=t.linkedRatings||[]})),t.abrupt("return",s);case 11:this.error(e.status,s.message);case 12:case"end":return t.stop()}}),n,this)})))}function A(t,n,e){var s=n.scores,r=void 0===s?[]:s;return t.$$set=function(t){"scores"in t&&e(0,r=t.scores)},[r]}var B=function(t){n(s,o);var e=D(s);function s(t){var n;return r(this,s),n=e.call(this),a(c(n),t,A,T,i,{scores:0}),n}return s}();export default B;export{z as preload};