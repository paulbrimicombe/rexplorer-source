import{u as t,_ as n,a as e,b as s,c as r,i as a,d as o,S as c,s as i,e as u,f,v as l,q as h,g as m,h as d,j as p,w as v,m as $,o as g,p as x,x as y,y as R,z as w,A as b,B as k,t as j,k as E,l as q}from"./client.3ceb566f.js";import"./_common-styles.9c34c28b.js";import{M,R as D}from"./Modal.f0d32868.js";function S(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=e(t);if(n){var o=e(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return s(this,r)}}function T(t){var n,e,s,r,a,o;return a=new D({props:{scores:t[0],linkedRatingName:"individual scores",linkSymbol:""}}),{c:function(){n=u("h1"),e=u("img"),s=j("\n    English Royal Teams"),r=f(),l(a.$$.fragment),this.h()},l:function(t){n=m(t,"H1",{class:!0});var o=E(n);e=m(o,"IMG",{width:!0,height:!0,src:!0,alt:!0,class:!0}),s=q(o,"\n    English Royal Teams"),o.forEach(d),r=p(t),v(a.$$.fragment,t),this.h()},h:function(){$(e,"width","64"),$(e,"height","64"),e.src!=="king-and-queen.webp"&&$(e,"src","king-and-queen.webp"),$(e,"alt","King and Queen playing chess"),$(e,"class","svelte-srnqf4"),$(n,"class","teams svelte-srnqf4")},m:function(t,c){x(t,n,c),g(n,e),g(n,s),x(t,r,c),y(a,t,c),o=!0},p:function(t,n){var e={};1&n&&(e.scores=t[0]),a.$set(e)},i:function(t){o||(w(a.$$.fragment,t),o=!0)},o:function(t){b(a.$$.fragment,t),o=!1},d:function(t){t&&d(n),t&&d(r),k(a,t)}}}function A(t){var n,e,s,r;return s=new M({props:{$$slots:{default:[T]},$$scope:{ctx:t}}}),{c:function(){n=u("meta"),e=f(),l(s.$$.fragment),this.h()},l:function(t){var r=h('[data-svelte="svelte-wjiebm"]',document.head);n=m(r,"META",{name:!0,content:!0}),r.forEach(d),e=p(t),v(s.$$.fragment,t),this.h()},h:function(){document.title="Rexplorer consort & monarch teams",$(n,"name","Description"),$(n,"content","Rexplorer for exploring Rex Factor scores for English Monarch & Consort teams")},m:function(t,a){g(document.head,n),x(t,e,a),y(s,t,a),r=!0},p:function(t,n){var e=R(n,1)[0],r={};3&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r)},i:function(t){r||(w(s.$$.fragment,t),r=!0)},o:function(t){b(s.$$.fragment,t),r=!1},d:function(t){d(n),t&&d(e),k(s,t)}}}var P=function(t,n,e,s){return new(e||(e=Promise))((function(r,a){function o(t){try{i(s.next(t))}catch(t){a(t)}}function c(t){try{i(s.throw(t))}catch(t){a(t)}}function i(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,c)}i((s=s.apply(t,n||[])).next())}))};function _(){return P(this,void 0,void 0,t.mark((function n(){var e,s;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("data/teams.json");case 2:return e=t.sent,t.next=5,e.json();case 5:if(s=t.sent,200!==e.status){t.next=11;break}return((null==s?void 0:s.scores)||[]).forEach((function(t){t.linkedRatings=t.linkedRatings||[]})),t.abrupt("return",s);case 11:this.error(e.status,s.message);case 12:case"end":return t.stop()}}),n,this)})))}function z(t,n,e){var s=n.scores,r=void 0===s?[]:s;return t.$$set=function(t){"scores"in t&&e(0,r=t.scores)},[r]}var B=function(t){n(s,c);var e=S(s);function s(t){var n;return r(this,s),n=e.call(this),a(o(n),t,z,A,i,{scores:0}),n}return s}();export default B;export{_ as preload};
