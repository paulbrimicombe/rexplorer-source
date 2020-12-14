import{S as e,i as t,s as n,e as s,a,c as i,q as o,b as r,d as c,f as l,h as d,j as m,k as f,l as g,m as u,t as h,o as $,r as p,C as F,g as R,u as k,v as w,p as v}from"./client.6b952357.js";import{f as x}from"./Banner.bf9b5b88.js";import"./_common-styles.9c34c28b.js";import{M as y}from"./Modal.a796229f.js";import{g as j,R as L,s as b}from"./RatingsPage.c83fe145.js";function E(e){let t,n,a,o,l;return n=new L({props:{ratingName:"English royal teams",linkedRatingName:"individual scores",ratingImageSrc:"king-and-queen.jpg",ratingImageAlt:"King and queen playing chess",linkSymbol:"",scores:e[3],sortField:e[0],showLinkedRatings:e[1],nameFilter:e[2]}}),n.$on("change",e[4]),{c(){t=s("div"),i(n.$$.fragment)},l(e){t=r(e,"DIV",{});var s=R(t);d(n.$$.fragment,s),s.forEach(c)},m(e,s){g(e,t,s),u(n,t,null),l=!0},p(e,t){const s={};8&t&&(s.scores=e[3]),1&t&&(s.sortField=e[0]),2&t&&(s.showLinkedRatings=e[1]),4&t&&(s.nameFilter=e[2]),n.$set(s)},i(e){l||(h(n.$$.fragment,e),k((()=>{o&&o.end(1),a||(a=w(t,x,{delay:300,duration:200})),a.start()})),l=!0)},o(e){$(n.$$.fragment,e),a&&a.invalidate(),o=v(t,x,{duration:200}),l=!1},d(e){e&&c(t),p(n),e&&o&&o.end()}}}function M(e){let t,n,F,R;return F=new y({props:{$$slots:{default:[E]},$$scope:{ctx:e}}}),{c(){t=s("meta"),n=a(),i(F.$$.fragment),this.h()},l(e){const s=o('[data-svelte="svelte-wjiebm"]',document.head);t=r(s,"META",{name:!0,content:!0}),s.forEach(c),n=l(e),d(F.$$.fragment,e),this.h()},h(){document.title="Rexplorer consort & monarch teams",m(t,"name","Description"),m(t,"content","Rexplorer for exploring Rex Factor scores for English Monarch & Consort teams")},m(e,s){f(document.head,t),g(e,n,s),u(F,e,s),R=!0},p(e,[t]){const n={};79&t&&(n.$$scope={dirty:t,ctx:e}),F.$set(n)},i(e){R||(h(F.$$.fragment,e),R=!0)},o(e){$(F.$$.fragment,e),R=!1},d(e){c(t),e&&c(n),p(F,e)}}}var q=function(e,t,n,s){return new(n||(n=Promise))((function(a,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((s=s.apply(e,t||[])).next())}))};function I(){return q(this,void 0,void 0,(function*(){const e=yield this.fetch("data/teams.json"),t=yield e.json();if(200===e.status)return((null==t?void 0:t.scores)||[]).forEach((e=>{e.linkedRatings=e.linkedRatings||[]})),t;this.error(e.status,t.message)}))}function S(e,t,n){const s=j();let{scores:a=[]}=t,{sortField:i=s.sortField}=t,{showLinkedRatings:o=s.showLinkedRatings}=t,{nameFilter:r=s.nameFilter}=t;F((()=>b({sortField:i,showLinkedRatings:o,nameFilter:r})));return e.$$set=e=>{"scores"in e&&n(3,a=e.scores),"sortField"in e&&n(0,i=e.sortField),"showLinkedRatings"in e&&n(1,o=e.showLinkedRatings),"nameFilter"in e&&n(2,r=e.nameFilter)},[i,o,r,a,e=>{n(0,i=e.detail.sortField),n(1,o=e.detail.showLinkedRatings),n(2,r=e.detail.nameFilter)}]}export default class extends e{constructor(e){super(),t(this,e,S,M,n,{scores:3,sortField:0,showLinkedRatings:1,nameFilter:2})}}export{I as preload};
