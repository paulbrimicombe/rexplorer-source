import{S as t,i as n,s,e,a,c as o,q as r,b as c,d as i,f as m,h as l,j as f,k as u,l as $,m as d,t as h,o as g,r as p,g as v,u as x,v as y,p as j}from"./client.23a57bc1.js";import{B as w,f as E}from"./Banner.e270d466.js";import"./_common-styles.9c34c28b.js";import{M as R,R as k}from"./Modal.7d373481.js";function M(t){let n,s,r,f,R,M,b;return s=new w({props:{title:"English monarchs",imagePath:"english-monarch-crown.jpg",imageAlt:"English monarch crown",imageSize:64}}),f=new k({props:{scores:t[0],linkedRatingName:"consorts"}}),{c(){n=e("div"),o(s.$$.fragment),r=a(),o(f.$$.fragment)},l(t){n=c(t,"DIV",{});var e=v(n);l(s.$$.fragment,e),r=m(e),l(f.$$.fragment,e),e.forEach(i)},m(t,e){$(t,n,e),d(s,n,null),u(n,r),d(f,n,null),b=!0},p(t,n){const s={};1&n&&(s.scores=t[0]),f.$set(s)},i(t){b||(h(s.$$.fragment,t),h(f.$$.fragment,t),x((()=>{M&&M.end(1),R||(R=y(n,E,{delay:300,duration:200})),R.start()})),b=!0)},o(t){g(s.$$.fragment,t),g(f.$$.fragment,t),R&&R.invalidate(),M=j(n,E,{duration:200}),b=!1},d(t){t&&i(n),p(s),p(f),t&&M&&M.end()}}}function b(t){let n,s,v,x;return v=new R({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),{c(){n=e("meta"),s=a(),o(v.$$.fragment),this.h()},l(t){const e=r('[data-svelte="svelte-yx9k2o"]',document.head);n=c(e,"META",{name:!0,content:!0}),e.forEach(i),s=m(t),l(v.$$.fragment,t),this.h()},h(){document.title="Rexplorer monarchs",f(n,"name","Description"),f(n,"content","Rexplorer for exploring Rex Factor scores for English Monarchs")},m(t,e){u(document.head,n),$(t,s,e),d(v,t,e),x=!0},p(t,[n]){const s={};3&n&&(s.$$scope={dirty:n,ctx:t}),v.$set(s)},i(t){x||(h(v.$$.fragment,t),x=!0)},o(t){g(v.$$.fragment,t),x=!1},d(t){i(n),t&&i(s),p(v,t)}}}var A=function(t,n,s,e){return new(s||(s=Promise))((function(a,o){function r(t){try{i(e.next(t))}catch(t){o(t)}}function c(t){try{i(e.throw(t))}catch(t){o(t)}}function i(t){var n;t.done?a(t.value):(n=t.value,n instanceof s?n:new s((function(t){t(n)}))).then(r,c)}i((e=e.apply(t,n||[])).next())}))};function B(){return A(this,void 0,void 0,(function*(){const t=yield this.fetch("data/monarchs.json"),n=yield t.json();if(200===t.status)return((null==n?void 0:n.scores)||[]).forEach((t=>{t.linkedRatings=t.consorts||[]})),n;this.error(t.status,n.message)}))}function D(t,n,s){let{scores:e=[]}=n;return t.$$set=t=>{"scores"in t&&s(0,e=t.scores)},[e]}export default class extends t{constructor(t){super(),n(this,t,D,b,s,{scores:0})}}export{B as preload};