import{u as n,_ as t,a as r,b as s,c as e,i as c,d as o,S as a,s as i,e as u,f,v as h,q as l,g as m,h as p,j as d,w as v,m as $,o as g,p as x,x as w,y,z as R,A as E,B as b,t as M,k as j,l as k}from"./client.89b370e9.js";import"./_common-styles.9c34c28b.js";import{M as q,R as D}from"./Modal.2ddad7ce.js";function A(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,c=r(n);if(t){var o=r(this).constructor;e=Reflect.construct(c,arguments,o)}else e=c.apply(this,arguments);return s(this,e)}}function P(n){var t,r,s,e,c,o;return c=new D({props:{scores:n[0],linkedRatingName:"consorts"}}),{c:function(){t=u("h1"),r=u("img"),s=M("\n    English Monarchs"),e=f(),h(c.$$.fragment),this.h()},l:function(n){t=m(n,"H1",{class:!0});var o=j(t);r=m(o,"IMG",{width:!0,height:!0,src:!0,alt:!0,class:!0}),s=k(o,"\n    English Monarchs"),o.forEach(p),e=d(n),v(c.$$.fragment,n),this.h()},h:function(){$(r,"width","64"),$(r,"height","64"),r.src!=="english-monarch-crown.webp"&&$(r,"src","english-monarch-crown.webp"),$(r,"alt","English monarch crown"),$(r,"class","svelte-srnqf4"),$(t,"class","monarchs svelte-srnqf4")},m:function(n,a){x(n,t,a),g(t,r),g(t,s),x(n,e,a),w(c,n,a),o=!0},p:function(n,t){var r={};1&t&&(r.scores=n[0]),c.$set(r)},i:function(n){o||(R(c.$$.fragment,n),o=!0)},o:function(n){E(c.$$.fragment,n),o=!1},d:function(n){n&&p(t),n&&p(e),b(c,n)}}}function S(n){var t,r,s,e;return s=new q({props:{$$slots:{default:[P]},$$scope:{ctx:n}}}),{c:function(){t=u("meta"),r=f(),h(s.$$.fragment),this.h()},l:function(n){var e=l('[data-svelte="svelte-yx9k2o"]',document.head);t=m(e,"META",{name:!0,content:!0}),e.forEach(p),r=d(n),v(s.$$.fragment,n),this.h()},h:function(){document.title="Rexplorer monarchs",$(t,"name","Description"),$(t,"content","Rexplorer for exploring Rex Factor scores for English Monarchs")},m:function(n,c){g(document.head,t),x(n,r,c),w(s,n,c),e=!0},p:function(n,t){var r=y(t,1)[0],e={};3&r&&(e.$$scope={dirty:r,ctx:n}),s.$set(e)},i:function(n){e||(R(s.$$.fragment,n),e=!0)},o:function(n){E(s.$$.fragment,n),e=!1},d:function(n){p(t),n&&p(r),b(s,n)}}}var _=function(n,t,r,s){return new(r||(r=Promise))((function(e,c){function o(n){try{i(s.next(n))}catch(n){c(n)}}function a(n){try{i(s.throw(n))}catch(n){c(n)}}function i(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(n){n(t)}))).then(o,a)}i((s=s.apply(n,t||[])).next())}))};function z(){return _(this,void 0,void 0,n.mark((function t(){var r,s;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.fetch("data/monarchs.json");case 2:return r=n.sent,n.next=5,r.json();case 5:if(s=n.sent,200!==r.status){n.next=11;break}return((null==s?void 0:s.scores)||[]).forEach((function(n){n.linkedRatings=n.consorts||[]})),n.abrupt("return",s);case 11:this.error(r.status,s.message);case 12:case"end":return n.stop()}}),t,this)})))}function B(n,t,r){var s=t.scores,e=void 0===s?[]:s;return n.$$set=function(n){"scores"in n&&r(0,e=n.scores)},[e]}var F=function(n){t(s,a);var r=A(s);function s(n){var t;return e(this,s),t=r.call(this),c(o(t),n,B,S,i,{scores:0}),t}return s}();export default F;export{z as preload};
