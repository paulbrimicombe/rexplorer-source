function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(r)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}function l(t,e,r,s){return t[1]&&s?n(r.ctx.slice(),t[1](s(e))):r.ctx}function u(t,e,n,r,s,o,a){const c=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(c){const s=l(e,n,r,a);t.p(s,c)}}function f(t){return null==t?"":t}const d="undefined"!=typeof window;let p=d?()=>window.performance.now():()=>Date.now(),h=d?t=>requestAnimationFrame(t):t;const m=new Set;function g(t){m.forEach((e=>{e.c(t)||(m.delete(e),e.f())})),0!==m.size&&h(g)}function $(t){let e;return 0===m.size&&h(g),{promise:new Promise((n=>{m.add(e={c:t,f:n})})),abort(){m.delete(e)}}}function v(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function b(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function S(){return w(" ")}function x(){return w("")}function k(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function P(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function R(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t,e,n){e in t?t[e]=n:R(t,e,n)}function C(t){return Array.from(t.childNodes)}function j(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):E(e)}function L(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return w(e)}function O(t){return L(t," ")}function I(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e){t.value=null==e?"":e}function q(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function U(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function J(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function M(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}function B(t,e=document.body){return Array.from(e.querySelectorAll(t))}const D=new Set;let K,z=0;function H(t,e,n,r,s,o,a,c=0){const i=16.666/r;let l="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*o(t);l+=100*t+`%{${a(r,1-r)}}\n`}const u=l+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,d=t.ownerDocument;D.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(E("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${r}ms linear ${s}ms 1 both`,z+=1,f}function V(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-r.length;s&&(t.style.animation=r.join(", "),z-=s,z||h((()=>{z||(D.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),D.clear())})))}function F(t){K=t}function Y(){if(!K)throw new Error("Function called outside component initialization");return K}function G(t){Y().$$.before_update.push(t)}function W(t){Y().$$.after_update.push(t)}function X(){const t=Y();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const s=M(e,n);r.slice().forEach((e=>{e.call(t,s)}))}}}function Q(t,e){Y().$$.context.set(t,e)}function Z(t){return Y().$$.context.get(t)}function tt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const et=[],nt=[],rt=[],st=[],ot=Promise.resolve();let at=!1;function ct(t){rt.push(t)}let it=!1;const lt=new Set;function ut(){if(!it){it=!0;do{for(let t=0;t<et.length;t+=1){const e=et[t];F(e),ft(e.$$)}for(F(null),et.length=0;nt.length;)nt.pop()();for(let t=0;t<rt.length;t+=1){const e=rt[t];lt.has(e)||(lt.add(e),e())}rt.length=0}while(et.length);for(;st.length;)st.pop()();at=!1,it=!1,lt.clear()}}function ft(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ct)}}let dt;function pt(){return dt||(dt=Promise.resolve(),dt.then((()=>{dt=null}))),dt}function ht(t,e,n){t.dispatchEvent(M(`${e?"intro":"outro"}${n}`))}const mt=new Set;let gt;function $t(){gt={r:0,c:[],p:gt}}function vt(){gt.r||o(gt.c),gt=gt.p}function yt(t,e){t&&t.i&&(mt.delete(t),t.i(e))}function _t(t,e,n,r){if(t&&t.o){if(mt.has(t))return;mt.add(t),gt.c.push((()=>{mt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const bt={duration:0};function Et(n,r,s){let o,c,i=r(n,s),l=!1,u=0;function f(){o&&V(n,o)}function d(){const{delay:r=0,duration:s=300,easing:a=e,tick:d=t,css:h}=i||bt;h&&(o=H(n,0,1,s,r,a,h,u++)),d(0,1);const m=p()+r,g=m+s;c&&c.abort(),l=!0,ct((()=>ht(n,!0,"start"))),c=$((t=>{if(l){if(t>=g)return d(1,0),ht(n,!0,"end"),f(),l=!1;if(t>=m){const e=a((t-m)/s);d(e,1-e)}}return l}))}let h=!1;return{start(){h||(V(n),a(i)?(i=i(),pt().then(d)):d())},invalidate(){h=!1},end(){l&&(f(),l=!1)}}}function wt(n,r,s){let c,i=r(n,s),l=!0;const u=gt;function f(){const{delay:r=0,duration:s=300,easing:a=e,tick:f=t,css:d}=i||bt;d&&(c=H(n,1,0,s,r,a,d));const h=p()+r,m=h+s;ct((()=>ht(n,!1,"start"))),$((t=>{if(l){if(t>=m)return f(0,1),ht(n,!1,"end"),--u.r||o(u.c),!1;if(t>=h){const e=a((t-h)/s);f(1-e,e)}}return l}))}return u.r+=1,a(i)?pt().then((()=>{i=i(),f()})):f(),{end(t){t&&i.tick&&i.tick(1,0),l&&(c&&V(n,c),l=!1)}}}function St(n,r,s,c){let i=r(n,s),l=c?0:1,u=null,f=null,d=null;function h(){d&&V(n,d)}function m(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(r){const{delay:s=0,duration:a=300,easing:c=e,tick:g=t,css:v}=i||bt,y={start:p()+s,b:r};r||(y.group=gt,gt.r+=1),u||f?f=y:(v&&(h(),d=H(n,l,r,a,s,c,v)),r&&g(0,1),u=m(y,a),ct((()=>ht(n,r,"start"))),$((t=>{if(f&&t>f.start&&(u=m(f,a),f=null,ht(n,u.b,"start"),v&&(h(),d=H(n,l,u.b,u.duration,0,c,i.css))),u)if(t>=u.end)g(l=u.b,1-l),ht(n,u.b,"end"),f||(u.b?h():--u.group.r||o(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*c(e/u.duration),g(l,1-l)}return!(!u&&!f)})))}return{run(t){a(i)?pt().then((()=>{i=i(),g(t)})):g(t)},end(){h(),u=f=null}}}function xt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function kt(t){return"object"==typeof t&&null!==t?t:{}}function Pt(t){t&&t.c()}function At(t,e){t&&t.l(e)}function Rt(t,e,n){const{fragment:s,on_mount:c,on_destroy:i,after_update:l}=t.$$;s&&s.m(e,n),ct((()=>{const e=c.map(r).filter(a);i?i.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(ct)}function Nt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ct(t,e){-1===t.$$.dirty[0]&&(et.push(t),at||(at=!0,ot.then(ut)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function jt(e,n,r,a,c,i,l=[-1]){const u=K;F(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:l,skip_bound:!1};let p=!1;if(d.ctx=r?r(e,f,((t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),p&&Ct(e,t)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=C(n.target);d.fragment&&d.fragment.l(t),t.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&yt(e.$$.fragment),Rt(e,n.target,n.anchor),ut()}F(u)}class Lt{$destroy(){Nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class Ot extends Lt{constructor(t){if(!t||!t.target&&!t.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}const It=[];function Tt(e,n=t){let r;const s=[];function o(t){if(c(e,t)&&(e=t,r)){const t=!It.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),It.push(n,e)}if(t){for(let t=0;t<It.length;t+=2)It[t][0](It[t+1]);It.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const qt={};function Ut(e){let n,r,s,a,c,i,l,u,f,d,p,h,m,g,$,b,x,A,N,I,T,U,J,M,B,D,K,z,H,V,F,Y,G,W,X;return{c(){n=E("nav"),r=E("a"),s=w("MENU"),c=S(),i=E("blocker"),u=S(),f=E("ul"),d=E("li"),p=E("a"),h=w("Home"),g=S(),$=E("li"),b=E("a"),x=w("English Monarchs"),N=S(),I=E("li"),T=E("a"),U=w("English Consorts"),M=S(),B=E("li"),D=E("a"),K=w("English Royal Teams"),H=S(),V=E("li"),F=E("a"),Y=w("About"),this.h()},l(t){n=j(t,"NAV",{class:!0});var e=C(n);r=j(e,"A",{href:!0,id:!0,class:!0,style:!0});var o=C(r);s=L(o,"MENU"),o.forEach(_),c=O(e),i=j(e,"BLOCKER",{style:!0,class:!0}),C(i).forEach(_),u=O(e),f=j(e,"UL",{style:!0,class:!0});var a=C(f);d=j(a,"LI",{class:!0});var l=C(d);p=j(l,"A",{"aria-current":!0,href:!0,class:!0});var m=C(p);h=L(m,"Home"),m.forEach(_),l.forEach(_),g=O(a),$=j(a,"LI",{class:!0});var v=C($);b=j(v,"A",{"aria-current":!0,href:!0,class:!0});var y=C(b);x=L(y,"English Monarchs"),y.forEach(_),v.forEach(_),N=O(a),I=j(a,"LI",{class:!0});var E=C(I);T=j(E,"A",{"aria-current":!0,href:!0,class:!0});var w=C(T);U=L(w,"English Consorts"),w.forEach(_),E.forEach(_),M=O(a),B=j(a,"LI",{class:!0});var S=C(B);D=j(S,"A",{"aria-current":!0,href:!0,class:!0});var k=C(D);K=L(k,"English Royal Teams"),k.forEach(_),S.forEach(_),H=O(a),V=j(a,"LI",{class:!0});var P=C(V);F=j(P,"A",{"aria-current":!0,href:!0,class:!0});var A=C(F);Y=L(A,"About"),A.forEach(_),P.forEach(_),a.forEach(_),e.forEach(_),this.h()},h(){R(r,"href","."),R(r,"id","menu-button"),R(r,"class","icon svelte-1851n80"),R(r,"style",a=e[1]?"":"border-left: 1px solid #fff"),R(i,"style",l=e[1]?"display: block":""),R(i,"class","svelte-1851n80"),R(p,"aria-current",m=void 0===e[0]?"page":void 0),R(p,"href","."),R(p,"class","svelte-1851n80"),R(d,"class","svelte-1851n80"),R(b,"aria-current",A="monarchs"===e[0]?"page":void 0),R(b,"href","monarchs"),R(b,"class","svelte-1851n80"),R($,"class","svelte-1851n80"),R(T,"aria-current",J="consorts"===e[0]?"page":void 0),R(T,"href","consorts"),R(T,"class","svelte-1851n80"),R(I,"class","svelte-1851n80"),R(D,"aria-current",z="teams"===e[0]?"page":void 0),R(D,"href","teams"),R(D,"class","svelte-1851n80"),R(B,"class","svelte-1851n80"),R(F,"aria-current",G="about"===e[0]?"page":void 0),R(F,"href","about"),R(F,"class","svelte-1851n80"),R(V,"class","svelte-1851n80"),q(f,"--opacity",e[1]?100:0),q(f,"--pointer-events",e[1]?"all":"none"),R(f,"class","svelte-1851n80"),R(n,"class","svelte-1851n80")},m(t,o){y(t,n,o),v(n,r),v(r,s),v(n,c),v(n,i),v(n,u),v(n,f),v(f,d),v(d,p),v(p,h),v(f,g),v(f,$),v($,b),v(b,x),v(f,N),v(f,I),v(I,T),v(T,U),v(f,M),v(f,B),v(B,D),v(D,K),v(f,H),v(f,V),v(V,F),v(F,Y),W||(X=[k(r,"click",P(e[2])),k(i,"click",e[3]),k(p,"click",e[4]),k(b,"click",e[5]),k(T,"click",e[6]),k(D,"click",e[7]),k(F,"click",e[8])],W=!0)},p(t,[e]){2&e&&a!==(a=t[1]?"":"border-left: 1px solid #fff")&&R(r,"style",a),2&e&&l!==(l=t[1]?"display: block":"")&&R(i,"style",l),1&e&&m!==(m=void 0===t[0]?"page":void 0)&&R(p,"aria-current",m),1&e&&A!==(A="monarchs"===t[0]?"page":void 0)&&R(b,"aria-current",A),1&e&&J!==(J="consorts"===t[0]?"page":void 0)&&R(T,"aria-current",J),1&e&&z!==(z="teams"===t[0]?"page":void 0)&&R(D,"aria-current",z),1&e&&G!==(G="about"===t[0]?"page":void 0)&&R(F,"aria-current",G),2&e&&q(f,"--opacity",t[1]?100:0),2&e&&q(f,"--pointer-events",t[1]?"all":"none")},i:t,o:t,d(t){t&&_(n),W=!1,o(X)}}}function Jt(t,e,n){let{segment:r}=e,s=!1;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r,s,()=>n(1,s=!s),()=>n(1,s=!1),()=>n(1,s=!1),()=>n(1,s=!1),()=>n(1,s=!1),()=>n(1,s=!1),()=>n(1,s=!1)]}class Mt extends Lt{constructor(t){super(),jt(this,t,Jt,Ut,c,{segment:0})}}function Bt(t){let e,n,r,s;e=new Mt({props:{segment:t[0]}});const o=t[2].default,a=i(o,t,t[1],null);return{c(){Pt(e.$$.fragment),n=S(),r=E("main"),a&&a.c(),this.h()},l(t){At(e.$$.fragment,t),n=O(t),r=j(t,"MAIN",{class:!0});var s=C(r);a&&a.l(s),s.forEach(_),this.h()},h(){R(r,"class","svelte-1gokudb")},m(t,o){Rt(e,t,o),y(t,n,o),y(t,r,o),a&&a.m(r,null),s=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),a&&a.p&&2&n&&u(a,o,t,t[1],n,null,null)},i(t){s||(yt(e.$$.fragment,t),yt(a,t),s=!0)},o(t){_t(e.$$.fragment,t),_t(a,t),s=!1},d(t){Nt(e,t),t&&_(n),t&&_(r),a&&a.d(t)}}}function Dt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Kt extends Lt{constructor(t){super(),jt(this,t,Dt,Bt,c,{segment:0})}}function zt(t){let e,n,r=t[1].stack+"";return{c(){e=E("pre"),n=w(r)},l(t){e=j(t,"PRE",{});var s=C(e);n=L(s,r),s.forEach(_)},m(t,r){y(t,e,r),v(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&I(n,r)},d(t){t&&_(e)}}}function Ht(e){let n,r,s,o,a,c,i,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&zt(e);return{c(){r=S(),s=E("h1"),o=w(e[0]),a=S(),c=E("p"),i=w(f),l=S(),d&&d.c(),u=x(),this.h()},l(t){B('[data-svelte="svelte-1moakz"]',document.head).forEach(_),r=O(t),s=j(t,"H1",{class:!0});var n=C(s);o=L(n,e[0]),n.forEach(_),a=O(t),c=j(t,"P",{class:!0});var p=C(c);i=L(p,f),p.forEach(_),l=O(t),d&&d.l(t),u=x(),this.h()},h(){R(s,"class","svelte-17w3omn"),R(c,"class","svelte-17w3omn")},m(t,e){y(t,r,e),y(t,s,e),v(s,o),y(t,a,e),y(t,c,e),v(c,i),y(t,l,e),d&&d.m(t,e),y(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&I(o,t[0]),2&e&&f!==(f=t[1].message+"")&&I(i,f),t[2]&&t[1].stack?d?d.p(t,e):(d=zt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&_(r),t&&_(s),t&&_(a),t&&_(c),t&&_(l),d&&d.d(t),t&&_(u)}}}function Vt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Ft extends Lt{constructor(t){super(),jt(this,t,Vt,Ht,c,{status:0,error:1})}}function Yt(t){let e,r,s;const o=[t[4].props];var a=t[4].component;function c(t){let e={};for(let t=0;t<o.length;t+=1)e=n(e,o[t]);return{props:e}}return a&&(e=new a(c())),{c(){e&&Pt(e.$$.fragment),r=x()},l(t){e&&At(e.$$.fragment,t),r=x()},m(t,n){e&&Rt(e,t,n),y(t,r,n),s=!0},p(t,n){const s=16&n?xt(o,[kt(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){$t();const t=e;_t(t.$$.fragment,1,0,(()=>{Nt(t,1)})),vt()}a?(e=new a(c()),Pt(e.$$.fragment),yt(e.$$.fragment,1),Rt(e,r.parentNode,r)):e=null}else a&&e.$set(s)},i(t){s||(e&&yt(e.$$.fragment,t),s=!0)},o(t){e&&_t(e.$$.fragment,t),s=!1},d(t){t&&_(r),e&&Nt(e,t)}}}function Gt(t){let e,n;return e=new Ft({props:{error:t[0],status:t[1]}}),{c(){Pt(e.$$.fragment)},l(t){At(e.$$.fragment,t)},m(t,r){Rt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(yt(e.$$.fragment,t),n=!0)},o(t){_t(e.$$.fragment,t),n=!1},d(t){Nt(e,t)}}}function Wt(t){let e,n,r,s;const o=[Gt,Yt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){a[e].m(t,n),y(t,r,n),s=!0},p(t,s){let i=e;e=c(t),e===i?a[e].p(t,s):($t(),_t(a[i],1,1,(()=>{a[i]=null})),vt(),n=a[e],n?n.p(t,s):(n=a[e]=o[e](t),n.c()),yt(n,1),n.m(r.parentNode,r))},i(t){s||(yt(n),s=!0)},o(t){_t(n),s=!1},d(t){a[e].d(t),t&&_(r)}}}function Xt(t){let e,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Wt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=n(o,s[t]);return e=new Kt({props:o}),{c(){Pt(e.$$.fragment)},l(t){At(e.$$.fragment,t)},m(t,n){Rt(e,t,n),r=!0},p(t,[n]){const r=12&n?xt(s,[4&n&&{segment:t[2][0]},8&n&&kt(t[3].props)]):{};147&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(yt(e.$$.fragment,t),r=!0)},o(t){_t(e.$$.fragment,t),r=!1},d(t){Nt(e,t)}}}function Qt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;return W(l),Q(qt,r),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,a,c,i,r,l]}class Zt extends Lt{constructor(t){super(),jt(this,t,Qt,Xt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const te=[/^\/data\/consorts\.json$/,/^\/data\/monarchs\.json$/,/^\/data\/teams\.json$/],ee=[{js:()=>Promise.all([import("./index.d91b7114.js"),__inject_styles(["client-5d734afe.css","Banner-32dce54c.css","_common-styles-44d989e3.css","index-44064ba3.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./consorts.987324c6.js"),__inject_styles(["client-5d734afe.css","Banner-32dce54c.css","_common-styles-44d989e3.css","Modal-9a14eadc.css","consorts-8dab0f05.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./monarchs.dc407285.js"),__inject_styles(["client-5d734afe.css","Banner-32dce54c.css","_common-styles-44d989e3.css","Modal-9a14eadc.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.a8c12565.js"),__inject_styles(["client-5d734afe.css","Banner-32dce54c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./teams.8b171b58.js"),__inject_styles(["client-5d734afe.css","Banner-32dce54c.css","_common-styles-44d989e3.css","Modal-9a14eadc.css"])]).then((function(t){return t[0]}))}],ne=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/consorts\/?$/,parts:[{i:1}]},{pattern:/^\/monarchs\/?$/,parts:[{i:2}]},{pattern:/^\/about\/?$/,parts:[{i:3}]},{pattern:/^\/teams\/?$/,parts:[{i:4}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function re(t,e,n,r){return new(n||(n=Promise))((function(s,o){function a(t){try{i(r.next(t))}catch(t){o(t)}}function c(t){try{i(r.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}i((r=r.apply(t,e||[])).next())}))}function se(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let oe,ae=1;const ce="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ie={};let le,ue;function fe(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function de(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(le))return null;let e=t.pathname.slice(le.length);if(""===e&&(e="/"),!te.some((t=>t.test(e))))for(let n=0;n<ne.length;n+=1){const r=ne[n],s=r.pattern.exec(e);if(s){const n=fe(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function pe(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=se(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=de(s);if(o){ge(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),ce.pushState({id:oe},"",s.href)}}function he(){return{x:pageXOffset,y:pageYOffset}}function me(t){if(ie[oe]=he(),t.state){const e=de(new URL(location.href));e?ge(e,t.state.id):location.href=location.href}else ae=ae+1,function(t){oe=t}(ae),ce.replaceState({id:oe},"",location.href)}function ge(t,e,n,r){return re(this,void 0,void 0,(function*(){const s=!!e;if(s)oe=e;else{const t=he();ie[oe]=t,oe=e=++ae,ie[oe]=n?t:{x:0,y:0}}if(yield ue(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=ie[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),ie[oe]=n,s||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function $e(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let ve,ye=null;function _e(t){const e=se(t.target);e&&"prefetch"===e.rel&&function(t){const e=de(new URL(t,$e(document)));if(e)ye&&t===ye.href||(ye={href:t,promise:qe(e)}),ye.promise}(e.href)}function be(t){clearTimeout(ve),ve=setTimeout((()=>{_e(t)}),20)}function Ee(t,e={noscroll:!1,replaceState:!1}){const n=de(new URL(t,$e(document)));return n?(ce[e.replaceState?"replaceState":"pushState"]({id:oe},"",t),ge(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const we="undefined"!=typeof __SAPPER__&&__SAPPER__;let Se,xe,ke,Pe=!1,Ae=[],Re="{}";const Ne={page:function(t){const e=Tt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:Tt(null),session:Tt(we&&we.session)};let Ce,je,Le;function Oe(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Ie(t){return re(this,void 0,void 0,(function*(){Se&&Ne.preloading.set(!0);const e=function(t){return ye&&ye.href===t.href?ye.promise:qe(t)}(t),n=xe={},r=yield e,{redirect:s}=r;if(n===xe)if(s)yield Ee(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Te(n,e,Oe(e,t.page))}}))}function Te(t,e,n){return re(this,void 0,void 0,(function*(){Ne.page.set(n),Ne.preloading.set(!1),Se?Se.$set(e):(e.stores={page:{subscribe:Ne.page.subscribe},preloading:{subscribe:Ne.preloading.subscribe},session:Ne.session},e.level0={props:yield ke},e.notify=Ne.page.notify,Se=new Zt({target:Le,props:e,hydrate:!0})),Ae=t,Re=JSON.stringify(n.query),Pe=!0,je=!1}))}function qe(t){return re(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!ke){const t=()=>({});ke=we.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ce)}let c,i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map(((e,c)=>re(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==Re)return!0;const s=Ae[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const d=i++;if(!je&&!u&&Ae[c]&&Ae[c].part===e.i)return Ae[c];u=!1;const{default:p,preload:h}=yield ee[e.i].js();let m;return m=Pe||!we.preloaded[c+1]?h?yield h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ce):{}:we.preloaded[c+1],o[`level${d}`]={component:p,props:m,segment:f,match:l,part:e.i}})))))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}))}var Ue,Je,Me;Ne.session.subscribe((t=>re(void 0,void 0,void 0,(function*(){if(Ce=t,!Pe)return;je=!0;const e=de(new URL(location.href)),n=xe={},{redirect:r,props:s,branch:o}=yield qe(e);n===xe&&(r?yield Ee(r.location,{replaceState:!0}):yield Te(o,s,Oe(s,e.page)))})))),Ue={target:document.querySelector("#sapper")},Je=Ue.target,Le=Je,Me=we.baseUrl,le=Me,ue=Ie,"scrollRestoration"in ce&&(ce.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ce.scrollRestoration="auto"})),addEventListener("load",(()=>{ce.scrollRestoration="manual"})),addEventListener("click",pe),addEventListener("popstate",me),addEventListener("touchstart",_e),addEventListener("mousemove",be),we.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:a}=we;ke||(ke=s&&s[0]);const c={error:a,status:o,session:r,level0:{props:ke},level1:{props:{status:o,error:a},component:Ft},segments:s},i=fe(n);Te([],c,{host:t,path:e,query:i,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;ce.replaceState({id:ae},"",e);const n=de(new URL(location.href));if(n)return ge(n,ae,!0,t)}));export{n as $,I as A,q as B,b as C,x as D,i as E,k as F,A as G,P as H,u as I,X as J,N as K,W as L,G as M,$t as N,vt as O,U as P,T as Q,o as R,Lt as S,Z as T,tt as U,J as V,nt as W,a as X,xt as Y,kt as Z,St as _,S as a,Q as a0,Ot as a1,j as b,Pt as c,_ as d,E as e,O as f,C as g,At as h,jt as i,R as j,v as k,y as l,Rt as m,t as n,_t as o,wt as p,B as q,Nt as r,c as s,yt as t,ct as u,Et as v,e as w,w as x,L as y,f as z};

import __inject_styles from './inject_styles.5607aec6.js';