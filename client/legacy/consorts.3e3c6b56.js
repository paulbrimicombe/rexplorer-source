import{G as t,_ as n,a as e,b as r,c as s,i as a,d as o,S as i,s as c,e as u,f,g as l,q as d,h as m,j as h,k as g,m as p,n as v,o as $,p as R,r as F,E as w,u as x,v as k,x as y,H as L,l as j,y as E,z as b,w as D}from"./client.2c142add.js";import{f as M}from"./Banner.f9451b32.js";import"./_common-styles.9c34c28b.js";import{M as I,g as S,R as A,s as N}from"./Modal.ce8fae44.js";function P(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=e(t);if(n){var o=e(this).constructor;s=Reflect.construct(a,arguments,o)}else s=a.apply(this,arguments);return r(this,s)}}function _(t){var n,e,r,s,a;return(e=new A({props:{ratingName:"English consorts",linkedRatingName:"monarchs",ratingImageSrc:"consort.jpg",ratingImageAlt:"English consort",scores:t[3],sortField:t[0],showLinkedRatings:t[1],nameFilter:t[2]}})).$on("change",t[4]),{c:function(){n=u("div"),l(e.$$.fragment)},l:function(t){n=m(t,"DIV",{});var r=j(n);p(e.$$.fragment,r),r.forEach(h)},m:function(t,r){R(t,n,r),F(e,n,null),a=!0},p:function(t,n){var r={};8&n&&(r.scores=t[3]),1&n&&(r.sortField=t[0]),2&n&&(r.showLinkedRatings=t[1]),4&n&&(r.nameFilter=t[2]),e.$set(r)},i:function(t){a||(x(e.$$.fragment,t),E((function(){s&&s.end(1),r||(r=b(n,M,{delay:300,duration:200})),r.start()})),a=!0)},o:function(t){k(e.$$.fragment,t),r&&r.invalidate(),s=D(n,M,{duration:200}),a=!1},d:function(t){t&&h(n),y(e),t&&s&&s.end()}}}function q(t){var n,e,r,s;return r=new I({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),{c:function(){n=u("meta"),e=f(),l(r.$$.fragment),this.h()},l:function(t){var s=d('[data-svelte="svelte-mm2tia"]',document.head);n=m(s,"META",{name:!0,content:!0}),s.forEach(h),e=g(t),p(r.$$.fragment,t),this.h()},h:function(){document.title="Rexplorer monarchs",v(n,"name","Description"),v(n,"content","Rexplorer for exploring Rex Factor scores for English Consorts")},m:function(t,a){$(document.head,n),R(t,e,a),F(r,t,a),s=!0},p:function(t,n){var e=w(n,1)[0],s={};79&e&&(s.$$scope={dirty:e,ctx:t}),r.$set(s)},i:function(t){s||(x(r.$$.fragment,t),s=!0)},o:function(t){k(r.$$.fragment,t),s=!1},d:function(t){h(n),t&&h(e),y(r,t)}}}var z=function(t,n,e,r){return new(e||(e=Promise))((function(s,a){function o(t){try{c(r.next(t))}catch(t){a(t)}}function i(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var n;t.done?s(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,i)}c((r=r.apply(t,n||[])).next())}))};function B(){return z(this,void 0,void 0,t.mark((function n(){var e,r;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("data/consorts.json");case 2:return e=t.sent,t.next=5,e.json();case 5:if(r=t.sent,200!==e.status){t.next=11;break}return((null==r?void 0:r.scores)||[]).forEach((function(t){t.linkedRatings=t.monarchs||[]})),t.abrupt("return",r);case 11:this.error(e.status,e.statusMessage);case 12:case"end":return t.stop()}}),n,this)})))}function C(t,n,e){var r=S(),s=n.scores,a=void 0===s?[]:s,o=n.sortField,i=void 0===o?r.sortField:o,c=n.showLinkedRatings,u=void 0===c?r.showLinkedRatings:c,f=n.nameFilter,l=void 0===f?r.nameFilter:f;L((function(){return N({sortField:i,showLinkedRatings:u,nameFilter:l})}));return t.$$set=function(t){"scores"in t&&e(3,a=t.scores),"sortField"in t&&e(0,i=t.sortField),"showLinkedRatings"in t&&e(1,u=t.showLinkedRatings),"nameFilter"in t&&e(2,l=t.nameFilter)},[i,u,l,a,function(t){e(0,i=t.detail.sortField),e(1,u=t.detail.showLinkedRatings),e(2,l=t.detail.nameFilter)}]}var G=function(t){n(r,i);var e=P(r);function r(t){var n;return s(this,r),n=e.call(this),a(o(n),t,C,q,c,{scores:3,sortField:0,showLinkedRatings:1,nameFilter:2}),n}return r}();export default G;export{B as preload};
