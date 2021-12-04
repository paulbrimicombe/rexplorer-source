import{H as n,_ as t,a as e,b as a,c as r,i as s,d as i,S as o,s as c,e as u,f,g as l,q as d,h as m,j as h,k as g,n as p,o as v,p as $,r as R,u as F,F as w,w as k,x,z as y,I as j,l as L,A as b,B as E,y as D}from"./client.84298140.js";import{f as I}from"./Banner.24091134.js";import"./_common-styles.9c34c28b.js";import{M}from"./Modal.f3f6184f.js";import{g as S,R as q,s as A}from"./RatingsPage.ada4d9b8.js";function P(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,s=e(n);if(t){var i=e(this).constructor;r=Reflect.construct(s,arguments,i)}else r=s.apply(this,arguments);return a(this,r)}}function B(n){var t,e,a,r,s;return(e=new q({props:{ratingName:"English royal teams",linkedRatingName:"individual scores",ratingImageSrc:"king-and-queen.jpg",ratingImageAlt:"King and queen playing chess",linkSymbol:"",scores:n[3],sortField:n[0],showLinkedRatings:n[1],nameFilter:n[2]}})).$on("change",n[4]),{c:function(){t=u("div"),l(e.$$.fragment)},l:function(n){t=m(n,"DIV",{});var a=L(t);p(e.$$.fragment,a),a.forEach(h)},m:function(n,a){R(n,t,a),F(e,t,null),s=!0},p:function(n,t){var a={};8&t&&(a.scores=n[3]),1&t&&(a.sortField=n[0]),2&t&&(a.showLinkedRatings=n[1]),4&t&&(a.nameFilter=n[2]),e.$set(a)},i:function(n){s||(k(e.$$.fragment,n),b((function(){r&&r.end(1),a||(a=E(t,I,{delay:300,duration:200})),a.start()})),s=!0)},o:function(n){x(e.$$.fragment,n),a&&a.invalidate(),r=D(t,I,{duration:200}),s=!1},d:function(n){n&&h(t),y(e),n&&r&&r.end()}}}function N(n){var t,e,a,r;return a=new M({props:{$$slots:{default:[B]},$$scope:{ctx:n}}}),{c:function(){t=u("meta"),e=f(),l(a.$$.fragment),this.h()},l:function(n){var r=d('[data-svelte="svelte-wjiebm"]',document.head);t=m(r,"META",{name:!0,content:!0}),r.forEach(h),e=g(n),p(a.$$.fragment,n),this.h()},h:function(){document.title="Rexplorer consort & monarch teams",v(t,"name","Description"),v(t,"content","Rexplorer for exploring Rex Factor scores for English Monarch & Consort teams")},m:function(n,s){$(document.head,t),R(n,e,s),F(a,n,s),r=!0},p:function(n,t){var e=w(t,1)[0],r={};79&e&&(r.$$scope={dirty:e,ctx:n}),a.$set(r)},i:function(n){r||(k(a.$$.fragment,n),r=!0)},o:function(n){x(a.$$.fragment,n),r=!1},d:function(n){h(t),n&&h(e),y(a,n)}}}var _=function(n,t,e,a){return new(e||(e=Promise))((function(r,s){function i(n){try{c(a.next(n))}catch(n){s(n)}}function o(n){try{c(a.throw(n))}catch(n){s(n)}}function c(n){var t;n.done?r(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(i,o)}c((a=a.apply(n,t||[])).next())}))};function z(){return _(this,void 0,void 0,n.mark((function t(){var e,a;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.fetch("data/teams.json");case 2:return e=n.sent,n.next=5,e.json();case 5:if(a=n.sent,200!==e.status){n.next=11;break}return((null==a?void 0:a.scores)||[]).forEach((function(n){n.linkedRatings=n.linkedRatings||[]})),n.abrupt("return",a);case 11:this.error(e.status,a.message);case 12:case"end":return n.stop()}}),t,this)})))}function C(n,t,e){var a=S(),r=t.scores,s=void 0===r?[]:r,i=t.sortField,o=void 0===i?a.sortField:i,c=t.showLinkedRatings,u=void 0===c?a.showLinkedRatings:c,f=t.nameFilter,l=void 0===f?a.nameFilter:f;j((function(){return A({sortField:o,showLinkedRatings:u,nameFilter:l})}));return n.$$set=function(n){"scores"in n&&e(3,s=n.scores),"sortField"in n&&e(0,o=n.sortField),"showLinkedRatings"in n&&e(1,u=n.showLinkedRatings),"nameFilter"in n&&e(2,l=n.nameFilter)},[o,u,l,s,function(n){e(0,o=n.detail.sortField),e(1,u=n.detail.showLinkedRatings),e(2,l=n.detail.nameFilter)}]}var H=function(n){t(a,o);var e=P(a);function a(n){var t;return r(this,a),t=e.call(this),s(i(t),n,C,N,c,{scores:3,sortField:0,showLinkedRatings:1,nameFilter:2}),t}return a}();export default H;export{z as preload};
