import{S as e,i as n,s as t,e as s,w as o,b as a,g as r,x as c,d as l,j as i,l as u,k as d,A as f,n as m,a as p,f as h,Y as g,K as $,o as y,L as v,t as x,_ as E,c as w,h as D,m as C,u as b,O as I,r as k,v as A,p as V}from"./client.3eef12a5.js";import{a as j,s as M,f as S}from"./index.b4493040.js";import"./_common-styles.9c34c28b.js";import{C as R,M as Y}from"./Modal.ce7015c6.js";function F(e){let n,t,p;return{c(){n=s("div"),t=s("div"),p=o(e[0]),this.h()},l(s){n=a(s,"DIV",{class:!0});var o=r(n);t=a(o,"DIV",{});var i=r(t);p=c(i,e[0]),i.forEach(l),o.forEach(l),this.h()},h(){i(n,"class","popup svelte-1eosodn")},m(e,s){u(e,n,s),d(n,t),d(t,p)},p(e,[n]){1&n&&f(p,e[0])},i:m,o:m,d(e){e&&l(n)}}}function L(e,n,t){let{message:s}=n;return e.$$set=e=>{"message"in e&&t(0,s=e.message)},[s]}class O extends e{constructor(e){super(),n(this,e,L,F,t,{message:0})}}function P(e){let n,t,o,c;return t=new R({props:{rating:null}}),{c(){n=s("div"),w(t.$$.fragment)},l(e){n=a(e,"DIV",{});var s=r(n);D(t.$$.fragment,s),s.forEach(l)},m(e,s){u(e,n,s),C(t,n,null),c=!0},p:m,i(e){c||(x(t.$$.fragment,e),b((()=>{o||(o=I(n,j,{x:-500,y:50,duration:300},!0)),o.run(1)})),c=!0)},o(e){y(t.$$.fragment,e),o||(o=I(n,j,{x:-500,y:50,duration:300},!1)),o.run(0),c=!1},d(e){e&&l(n),k(t),e&&o&&o.end()}}}function q(e){let n,t,o,c;return t=new R({props:{rating:e[0],clickableCategories:!e[6]&&"player"===e[7]}}),t.$on("select",e[10]),{c(){n=s("div"),w(t.$$.fragment)},l(e){n=a(e,"DIV",{});var s=r(n);D(t.$$.fragment,s),s.forEach(l)},m(e,s){u(e,n,s),C(t,n,null),c=!0},p(e,n){const s={};1&n&&(s.rating=e[0]),192&n&&(s.clickableCategories=!e[6]&&"player"===e[7]),t.$set(s)},i(e){c||(x(t.$$.fragment,e),b((()=>{o||(o=I(n,j,{x:-500,y:50,duration:300},!0)),o.run(1)})),c=!0)},o(e){y(t.$$.fragment,e),o||(o=I(n,j,{x:-500,y:50,duration:300},!1)),o.run(0),c=!1},d(e){e&&l(n),k(t),e&&o&&o.end()}}}function z(e){let n;return{c(){n=s("div")},l(e){n=a(e,"DIV",{}),r(n).forEach(l)},m(e,t){u(e,n,t)},p:m,i:m,o:m,d(e){e&&l(n)}}}function _(e){let n,t,o,c;return t=new R({props:{rating:null}}),{c(){n=s("div"),w(t.$$.fragment)},l(e){n=a(e,"DIV",{});var s=r(n);D(t.$$.fragment,s),s.forEach(l)},m(e,s){u(e,n,s),C(t,n,null),c=!0},p:m,i(e){c||(x(t.$$.fragment,e),b((()=>{o||(o=I(n,j,{x:500,y:-50,duration:600},!0)),o.run(1)})),c=!0)},o(e){y(t.$$.fragment,e),o||(o=I(n,j,{x:500,y:-50,duration:600},!1)),o.run(0),c=!1},d(e){e&&l(n),k(t),e&&o&&o.end()}}}function B(e){let n,t,o,c;return t=new R({props:{rating:e[1],clickableCategories:!1}}),{c(){n=s("div"),w(t.$$.fragment)},l(e){n=a(e,"DIV",{});var s=r(n);D(t.$$.fragment,s),s.forEach(l)},m(e,s){u(e,n,s),C(t,n,null),c=!0},p(e,n){const s={};2&n&&(s.rating=e[1]),t.$set(s)},i(e){c||(x(t.$$.fragment,e),b((()=>{o||(o=I(n,j,{x:500,y:-50,duration:600},!0)),o.run(1)})),c=!0)},o(e){y(t.$$.fragment,e),o||(o=I(n,j,{x:500,y:-50,duration:600},!1)),o.run(0),c=!1},d(e){e&&l(n),k(t),e&&o&&o.end()}}}function W(e){let n;return{c(){n=s("div")},l(e){n=a(e,"DIV",{}),r(n).forEach(l)},m(e,t){u(e,n,t)},p:m,i:m,o:m,d(e){e&&l(n)}}}function U(e){let n,t,m,E,w,D,C,b,I,k,A,V,j,M,S,R,Y,F;const L=[z,q,P],O=[];function U(e,n){return e[4]?0:e[0]?1:2}V=U(e),j=O[V]=L[V](e);const G=[W,B,_],K=[];function N(e,n){return e[5]?0:e[1]?1:2}return R=N(e),Y=K[R]=G[R](e),{c(){n=s("game-board"),t=s("play-area"),m=s("div"),E=o("You: "),w=o(e[2]),D=p(),C=s("div"),b=o("Dunstan the Fun Sponge: "),I=o(e[3]),k=p(),A=s("card-area"),j.c(),M=p(),S=s("card-area"),Y.c(),this.h()},l(s){n=a(s,"GAME-BOARD",{class:!0});var o=r(n);t=a(o,"PLAY-AREA",{class:!0});var i=r(t);m=a(i,"DIV",{class:!0});var u=r(m);E=c(u,"You: "),w=c(u,e[2]),u.forEach(l),D=h(i),C=a(i,"DIV",{class:!0});var d=r(C);b=c(d,"Dunstan the Fun Sponge: "),I=c(d,e[3]),d.forEach(l),k=h(i),A=a(i,"CARD-AREA",{});var f=r(A);j.l(f),f.forEach(l),M=h(i),S=a(i,"CARD-AREA",{});var p=r(S);Y.l(p),p.forEach(l),i.forEach(l),o.forEach(l),this.h()},h(){i(m,"class","score svelte-1uzxkqf"),i(C,"class","score svelte-1uzxkqf"),g(t,"class","svelte-1uzxkqf"),g(n,"class","svelte-1uzxkqf")},m(e,s){u(e,n,s),d(n,t),d(t,m),d(m,E),d(m,w),d(t,D),d(t,C),d(C,b),d(C,I),d(t,k),d(t,A),O[V].m(A,null),d(t,M),d(t,S),K[R].m(S,null),F=!0},p(e,[n]){(!F||4&n)&&f(w,e[2]),(!F||8&n)&&f(I,e[3]);let t=V;V=U(e),V===t?O[V].p(e,n):($(),y(O[t],1,1,(()=>{O[t]=null})),v(),j=O[V],j?j.p(e,n):(j=O[V]=L[V](e),j.c()),x(j,1),j.m(A,null));let s=R;R=N(e),R===s?K[R].p(e,n):($(),y(K[s],1,1,(()=>{K[s]=null})),v(),Y=K[R],Y?Y.p(e,n):(Y=K[R]=G[R](e),Y.c()),x(Y,1),Y.m(S,null))},i(e){F||(x(j),x(Y),F=!0)},o(e){y(j),y(Y),F=!1},d(e){e&&l(n),O[V].d(),K[R].d()}}}function G(e,n,t){var s=this&&this.__awaiter||function(e,n,t,s){return new(t||(t=Promise))((function(o,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function c(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,c)}l((s=s.apply(e,n||[])).next())}))};let{scores:o}=n;const a=E("simple-modal"),r=e=>new Promise((n=>setTimeout(n,e)));let c,l,i,u,d,f,m,p,h=null,g=null;const $={styleBg:{background:"none",top:0,left:0},styleWindow:{background:"rgba(0,0,0,0.8)",width:"fit-content"},styleContent:{},transitionWindow:M,styleCloseButton:{display:"none",cursor:"pointer",borderRadius:"30%",boxShadow:"0 0 0 1px #00000033"}},y=()=>{const e=(e=>{const n=[...e];for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n})(o);c=e.splice(e.length/2),l=e,t(2,i=c.length),t(3,u=l.length),t(7,p="player"),t(4,d=!1),t(5,f=!1),t(6,m=!1),D()},v=({message:e,onClose:n=(()=>{})})=>{const s=!m;t(6,m=!0);const o=()=>{a.close()};"undefined"!=typeof document&&document.addEventListener("keypress",o),a.open(O,{message:e},$,{onClose:()=>{"undefined"!=typeof document&&document.removeEventListener("keypress",o),n(),s&&t(6,m=!1)}})},x=e=>s(void 0,void 0,void 0,(function*(){"computer"===e?(t(5,f=!0),yield r(1e3),t(1,g=l.shift()),t(5,f=!1)):(t(4,d=!0),yield r(1e3),t(0,h=c.shift()),t(4,d=!1))})),w=e=>s(void 0,void 0,void 0,(function*(){t(6,m=!0);const n=e.category;yield x("player"===p?"computer":"player"),yield r(1e3);h[n]>=g[n]?(c.push(g),c.push(h),t(7,p="player"),v({message:"YOU WIN!!",onClose:D})):(l.push(g),l.push(h),t(7,p="computer"),v({message:"YOU LOSE!!",onClose:D})),t(2,i=c.length),t(3,u=l.length),0===i?v({message:"You have no cards left — Dunstan the Fun Sponge has won the game!",onClose:()=>y()}):0===u&&v({message:"Dunstan the Fun Sponge has no cards left — you have won the game!",onClose:()=>y()})})),D=()=>s(void 0,void 0,void 0,(function*(){if(t(6,m=!0),(g||h)&&(t(5,f=!0),t(4,d=!0),yield r(1e3),t(5,f=!1),t(4,d=!1)),"computer"===p?t(0,h=null):t(1,g=null),yield x(p),yield r(1e3),v({message:"computer"===p?"It's Dunstan the Fun Sponges's turn…":"It's your turn. Pick a category…",onClose:"player"===p?()=>t(6,m=!1):void 0}),yield r(2e3),a.close(),"computer"===p){const e=["battleyness","scandal","subjectivity","longevity","dynasty"],n=e[Math.floor(Math.random()*(e.length-1))];v({message:`Dunstan choses ${n}…`}),yield r(1e3),a.close(),w({player:"computer",category:n})}else t(6,m=!1)}));y();return e.$$set=e=>{"scores"in e&&t(9,o=e.scores)},[h,g,i,u,d,f,m,p,w,o,e=>w({player:"player",category:e.detail})]}class K extends e{constructor(e){super(),n(this,e,G,U,t,{scores:9})}}function N(e){let n,t,o,c,i;return t=new K({props:{scores:e[0]}}),{c(){n=s("div"),w(t.$$.fragment)},l(e){n=a(e,"DIV",{});var s=r(n);D(t.$$.fragment,s),s.forEach(l)},m(e,s){u(e,n,s),C(t,n,null),i=!0},p(e,n){const s={};1&n&&(s.scores=e[0]),t.$set(s)},i(e){i||(x(t.$$.fragment,e),b((()=>{c&&c.end(1),o||(o=A(n,S,{delay:300,duration:200})),o.start()})),i=!0)},o(e){y(t.$$.fragment,e),o&&o.invalidate(),c=V(n,S,{duration:200}),i=!1},d(e){e&&l(n),k(t),e&&c&&c.end()}}}function T(e){let n,t;return n=new Y({props:{$$slots:{default:[N]},$$scope:{ctx:e}}}),{c(){w(n.$$.fragment)},l(e){D(n.$$.fragment,e)},m(e,s){C(n,e,s),t=!0},p(e,[t]){const s={};3&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){t||(x(n.$$.fragment,e),t=!0)},o(e){y(n.$$.fragment,e),t=!1},d(e){k(n,e)}}}var H=function(e,n,t,s){return new(t||(t=Promise))((function(o,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function c(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,c)}l((s=s.apply(e,n||[])).next())}))};function J(){return H(this,void 0,void 0,(function*(){const e=yield this.fetch("data/monarchs.json"),n=yield e.json();if(200===e.status)return n;this.error(e.status,e.statusMessage)}))}function Q(e,n,t){let{scores:s}=n;return e.$$set=e=>{"scores"in e&&t(0,s=e.scores)},[s]}export default class extends e{constructor(e){super(),n(this,e,Q,T,t,{scores:0})}}export{J as preload};