import{G as t,_ as n,a as e,b as r,c as s,i as a,d as o,S as c,s as i,e as f,f as u,g as l,q as m,h,j as p,k as $,m as d,n as v,o as g,p as x,r as y,E as w,u as R,v as j,x as E,l as b,y as k,z as D,w as M}from"./client.a231fc87.js";import{B as P,f as S}from"./Banner.59eba8f6.js";import"./_common-styles.9c34c28b.js";import{M as z,R as A}from"./Modal.bf5294e2.js";function B(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=e(t);if(n){var o=e(this).constructor;s=Reflect.construct(a,arguments,o)}else s=a.apply(this,arguments);return r(this,s)}}function _(t){var n,e,r,s,a,o,c;return e=new P({props:{title:"English consorts",imagePath:"english-consort-crown.jpg",imageAlt:"English consort crown",imageSize:64}}),s=new A({props:{scores:t[0],linkedRatingName:"monarchs"}}),{c:function(){n=f("div"),l(e.$$.fragment),r=u(),l(s.$$.fragment)},l:function(t){n=h(t,"DIV",{});var a=b(n);d(e.$$.fragment,a),r=$(a),d(s.$$.fragment,a),a.forEach(p)},m:function(t,a){x(t,n,a),y(e,n,null),g(n,r),y(s,n,null),c=!0},p:function(t,n){var e={};1&n&&(e.scores=t[0]),s.$set(e)},i:function(t){c||(R(e.$$.fragment,t),R(s.$$.fragment,t),k((function(){o&&o.end(1),a||(a=D(n,S,{delay:300,duration:200})),a.start()})),c=!0)},o:function(t){j(e.$$.fragment,t),j(s.$$.fragment,t),a&&a.invalidate(),o=M(n,S,{duration:200}),c=!1},d:function(t){t&&p(n),E(e),E(s),t&&o&&o.end()}}}function q(t){var n,e,r,s;return r=new z({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),{c:function(){n=f("meta"),e=u(),l(r.$$.fragment),this.h()},l:function(t){var s=m('[data-svelte="svelte-mm2tia"]',document.head);n=h(s,"META",{name:!0,content:!0}),s.forEach(p),e=$(t),d(r.$$.fragment,t),this.h()},h:function(){document.title="Rexplorer monarchs",v(n,"name","Description"),v(n,"content","Rexplorer for exploring Rex Factor scores for English Consorts")},m:function(t,a){g(document.head,n),x(t,e,a),y(r,t,a),s=!0},p:function(t,n){var e=w(n,1)[0],s={};3&e&&(s.$$scope={dirty:e,ctx:t}),r.$set(s)},i:function(t){s||(R(r.$$.fragment,t),s=!0)},o:function(t){j(r.$$.fragment,t),s=!1},d:function(t){p(n),t&&p(e),E(r,t)}}}var C=function(t,n,e,r){return new(e||(e=Promise))((function(s,a){function o(t){try{i(r.next(t))}catch(t){a(t)}}function c(t){try{i(r.throw(t))}catch(t){a(t)}}function i(t){var n;t.done?s(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,c)}i((r=r.apply(t,n||[])).next())}))};function F(){return C(this,void 0,void 0,t.mark((function n(){var e,r;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("data/consorts.json");case 2:return e=t.sent,t.next=5,e.json();case 5:if(r=t.sent,200!==e.status){t.next=11;break}return((null==r?void 0:r.scores)||[]).forEach((function(t){t.linkedRatings=t.monarchs||[]})),t.abrupt("return",r);case 11:this.error(e.status,e.statusMessage);case 12:case"end":return t.stop()}}),n,this)})))}function G(t,n,e){var r=n.scores,s=void 0===r?[]:r;return t.$$set=function(t){"scores"in t&&e(0,s=t.scores)},[s]}var I=function(t){n(r,c);var e=B(r);function r(t){var n;return s(this,r),n=e.call(this),a(o(n),t,G,q,i,{scores:0}),n}return r}();export default I;export{F as preload};