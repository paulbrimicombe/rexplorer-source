import{S as t,i as s,s as e,e as l,c as a,h as n,l as r,d as o,a as c,t as i,f as h,b as u,g as d,w as f,k as v,x as y,n as g,y as $,z as p,A as m,B as E,j as w,C as R,D as b,E as B,m as O,o as x,p as k,r as C,u as A,v as q,F as L,G as N,H as S,I as T,J as j,K as W,L as P,M as _,N as I,O as D,P as z,Q as U,R as F,T as K,U as H,V as M,W as G,X as V,Y as Z,Z as Y,_ as J,$ as Q}from"./client.499e073d.js";function X(t){let s,e;return{c(){s=l("img"),this.h()},l(t){s=a(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){s.src!==(e="crown.svg")&&n(s,"src","crown.svg"),n(s,"alt","Rex Factor winner"),n(s,"class","svelte-dz4aq")},m(t,e){r(t,s,e)},d(t){t&&o(s)}}}function tt(t){let s,e,$,p,m,E,w,R,b,B,O,x,k,C,A,q,L,N,S,T,j,W,P,_,I,D,z,U,F,K,H,M,G,V,Z,Y,J,Q,tt,st,et,lt,at=t[0].name+"",nt=t[0].total+"",rt=t[0].battleyness+"",ot=t[0].scandal+"",ct=t[0].subjectivity+"",it=t[0].longevity+"",ht=t[0].dynasty+"",ut=t[0].rexFactor&&X();return{c(){s=l("card"),e=l("name"),$=l("span"),ut&&ut.c(),p=c(),m=i(at),E=c(),w=l("content"),R=l("portrait"),b=c(),B=l("total"),O=i(nt),x=c(),k=l("scores"),C=l("score"),A=l("bar"),q=i(" Battleyness "),L=i(rt),S=c(),T=l("score"),j=l("bar"),W=i(" Scandal "),P=i(ot),I=c(),D=l("score"),z=l("bar"),U=i(" Subjectivity "),F=i(ct),H=c(),M=l("score"),G=l("bar"),V=i(" Longevity "),Z=i(it),J=c(),Q=l("score"),tt=l("bar"),st=i(" Dynasty "),et=i(ht),this.h()},l(t){s=a(t,"CARD",{class:!0});var l=h(s);e=a(l,"NAME",{class:!0});var n=h(e);$=a(n,"SPAN",{class:!0});var r=h($);ut&&ut.l(r),p=u(r),m=d(r,at),r.forEach(o),n.forEach(o),E=u(l),w=a(l,"CONTENT",{class:!0});var c=h(w);R=a(c,"PORTRAIT",{style:!0,class:!0}),h(R).forEach(o),b=u(c),B=a(c,"TOTAL",{class:!0});var i=h(B);O=d(i,nt),i.forEach(o),x=u(c),k=a(c,"SCORES",{class:!0});var f=h(k);C=a(f,"SCORE",{class:!0});var v=h(C);A=a(v,"BAR",{style:!0,class:!0});var y=h(A);q=d(y," Battleyness "),L=d(y,rt),y.forEach(o),v.forEach(o),S=u(f),T=a(f,"SCORE",{class:!0});var g=h(T);j=a(g,"BAR",{style:!0,class:!0});var N=h(j);W=d(N," Scandal "),P=d(N,ot),N.forEach(o),g.forEach(o),I=u(f),D=a(f,"SCORE",{class:!0});var _=h(D);z=a(_,"BAR",{style:!0,class:!0});var K=h(z);U=d(K," Subjectivity "),F=d(K,ct),K.forEach(o),_.forEach(o),H=u(f),M=a(f,"SCORE",{class:!0});var Y=h(M);G=a(Y,"BAR",{style:!0,class:!0});var X=h(G);V=d(X," Longevity "),Z=d(X,it),X.forEach(o),Y.forEach(o),J=u(f),Q=a(f,"SCORE",{class:!0});var lt=h(Q);tt=a(lt,"BAR",{style:!0,class:!0});var dt=h(tt);st=d(dt," Dynasty "),et=d(dt,ht),dt.forEach(o),lt.forEach(o),f.forEach(o),c.forEach(o),l.forEach(o),this.h()},h(){n($,"class","svelte-dz4aq"),n(e,"class","svelte-dz4aq"),f(R,"background-image","url('portraits/"+t[0].name+".webp')"),n(R,"class","svelte-dz4aq"),n(B,"class","svelte-dz4aq"),n(A,"style",N=`width: ${100*t[0].battleyness/20}%`),n(A,"class","battleyness svelte-dz4aq"),n(C,"class","svelte-dz4aq"),n(j,"style",_=`width: ${100*t[0].scandal/20}%`),n(j,"class","scandal svelte-dz4aq"),n(T,"class","svelte-dz4aq"),n(z,"style",K=`width: ${100*t[0].subjectivity/20}%`),n(z,"class","subjectivity svelte-dz4aq"),n(D,"class","svelte-dz4aq"),n(G,"style",Y=`width: ${100*t[0].longevity/20}%`),n(G,"class","longevity svelte-dz4aq"),n(M,"class","svelte-dz4aq"),n(tt,"style",lt=`width: ${100*t[0].dynasty/20}%`),n(tt,"class","dynasty svelte-dz4aq"),n(Q,"class","svelte-dz4aq"),n(k,"class","svelte-dz4aq"),n(w,"class","svelte-dz4aq"),n(s,"class","svelte-dz4aq")},m(t,l){r(t,s,l),v(s,e),v(e,$),ut&&ut.m($,null),v($,p),v($,m),v(s,E),v(s,w),v(w,R),v(w,b),v(w,B),v(B,O),v(w,x),v(w,k),v(k,C),v(C,A),v(A,q),v(A,L),v(k,S),v(k,T),v(T,j),v(j,W),v(j,P),v(k,I),v(k,D),v(D,z),v(z,U),v(z,F),v(k,H),v(k,M),v(M,G),v(G,V),v(G,Z),v(k,J),v(k,Q),v(Q,tt),v(tt,st),v(tt,et)},p(t,[s]){t[0].rexFactor?ut||(ut=X(),ut.c(),ut.m($,p)):ut&&(ut.d(1),ut=null),1&s&&at!==(at=t[0].name+"")&&y(m,at),1&s&&f(R,"background-image","url('portraits/"+t[0].name+".webp')"),1&s&&nt!==(nt=t[0].total+"")&&y(O,nt),1&s&&rt!==(rt=t[0].battleyness+"")&&y(L,rt),1&s&&N!==(N=`width: ${100*t[0].battleyness/20}%`)&&n(A,"style",N),1&s&&ot!==(ot=t[0].scandal+"")&&y(P,ot),1&s&&_!==(_=`width: ${100*t[0].scandal/20}%`)&&n(j,"style",_),1&s&&ct!==(ct=t[0].subjectivity+"")&&y(F,ct),1&s&&K!==(K=`width: ${100*t[0].subjectivity/20}%`)&&n(z,"style",K),1&s&&it!==(it=t[0].longevity+"")&&y(Z,it),1&s&&Y!==(Y=`width: ${100*t[0].longevity/20}%`)&&n(G,"style",Y),1&s&&ht!==(ht=t[0].dynasty+"")&&y(et,ht),1&s&&lt!==(lt=`width: ${100*t[0].dynasty/20}%`)&&n(tt,"style",lt)},i:g,o:g,d(t){t&&o(s),ut&&ut.d()}}}function st(t,s,e){let{rating:l}=s;return t.$$set=t=>{"rating"in t&&e(0,l=t.rating)},[l]}class et extends t{constructor(t){super(),s(this,t,st,tt,e,{rating:0})}}function lt(t){let s,e,c;return{c(){s=l("badge"),e=l("img"),this.h()},l(t){s=a(t,"BADGE",{class:!0});var l=h(s);e=a(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(o),this.h()},h(){e.src!==(c="crown.svg")&&n(e,"src","crown.svg"),n(e,"alt","Rex Factor winner"),n(e,"class","svelte-1qa82xd"),n(s,"class","svelte-1qa82xd")},m(t,l){r(t,s,l),v(s,e)},d(t){t&&o(s)}}}function at(t){let s,e,f,E,w,R,b,B,O,x=t[0].total+"",k=t[0].name+"",C=t[0].rexFactor&&lt();return{c(){s=l("button"),e=l("total"),f=i(x),E=c(),w=l("name"),C&&C.c(),R=c(),b=i(k),this.h()},l(t){s=a(t,"BUTTON",{class:!0});var l=h(s);e=a(l,"TOTAL",{class:!0});var n=h(e);f=d(n,x),n.forEach(o),E=u(l),w=a(l,"NAME",{class:!0});var r=h(w);C&&C.l(r),R=u(r),b=d(r,k),r.forEach(o),l.forEach(o),this.h()},h(){n(e,"class","svelte-1qa82xd"),n(w,"class","svelte-1qa82xd"),n(s,"class","svelte-1qa82xd")},m(l,a){r(l,s,a),v(s,e),v(e,f),v(s,E),v(s,w),C&&C.m(w,null),v(w,R),v(w,b),B||(O=$(s,"click",p(m(t[2]))),B=!0)},p(t,[s]){1&s&&x!==(x=t[0].total+"")&&y(f,x),t[0].rexFactor?C||(C=lt(),C.c(),C.m(w,R)):C&&(C.d(1),C=null),1&s&&k!==(k=t[0].name+"")&&y(b,k)},i:g,o:g,d(t){t&&o(s),C&&C.d(),B=!1,O()}}}function nt(t,s,e){const l=E();let{rating:a}=s;return t.$$set=t=>{"rating"in t&&e(0,a=t.rating)},[a,l,()=>l("select",a)]}class rt extends t{constructor(t){super(),s(this,t,nt,at,e,{rating:0})}}function ot(t){let s,e,f,y,$,p,m,E,R,b,B,O,x,k,C,A,q,L,N,S,T,j,W,P,_;return{c(){s=l("breakdown"),e=l("breakdown-row"),f=l("bar"),y=i(" "),p=c(),m=l("breakdown-row"),E=l("bar"),R=i(" "),B=c(),O=l("breakdown-row"),x=l("bar"),k=i(" "),A=c(),q=l("breakdown-row"),L=l("bar"),N=i(" "),T=c(),j=l("breakdown-row"),W=l("bar"),P=i(" "),this.h()},l(t){s=a(t,"BREAKDOWN",{class:!0});var l=h(s);e=a(l,"BREAKDOWN-ROW",{class:!0});var n=h(e);f=a(n,"BAR",{style:!0,class:!0});var r=h(f);y=d(r," "),r.forEach(o),n.forEach(o),p=u(l),m=a(l,"BREAKDOWN-ROW",{class:!0});var c=h(m);E=a(c,"BAR",{style:!0,class:!0});var i=h(E);R=d(i," "),i.forEach(o),c.forEach(o),B=u(l),O=a(l,"BREAKDOWN-ROW",{class:!0});var v=h(O);x=a(v,"BAR",{style:!0,class:!0});var g=h(x);k=d(g," "),g.forEach(o),v.forEach(o),A=u(l),q=a(l,"BREAKDOWN-ROW",{class:!0});var $=h(q);L=a($,"BAR",{style:!0,class:!0});var w=h(L);N=d(w," "),w.forEach(o),$.forEach(o),T=u(l),j=a(l,"BREAKDOWN-ROW",{class:!0});var b=h(j);W=a(b,"BAR",{style:!0,class:!0});var C=h(W);P=d(C," "),C.forEach(o),b.forEach(o),l.forEach(o),this.h()},h(){n(f,"style",$=`width: ${t[1]?100*t[0].battleyness/20:0}%`),n(f,"class","battleyness svelte-1h770x7"),w(e,"class","svelte-1h770x7"),n(E,"style",b=`width: ${t[1]?100*t[0].scandal/20:0}%`),n(E,"class","scandal svelte-1h770x7"),w(m,"class","svelte-1h770x7"),n(x,"style",C=`width: ${t[1]?100*t[0].subjectivity/20:0}%`),n(x,"class","subjectivity svelte-1h770x7"),w(O,"class","svelte-1h770x7"),n(L,"style",S=`width: ${t[1]?100*t[0].longevity/20:0}%`),n(L,"class","longevity svelte-1h770x7"),w(q,"class","svelte-1h770x7"),n(W,"style",_=`width: ${t[1]?100*t[0].dynasty/20:0}%`),n(W,"class","dynasty svelte-1h770x7"),w(j,"class","svelte-1h770x7"),n(s,"class","svelte-1h770x7")},m(t,l){r(t,s,l),v(s,e),v(e,f),v(f,y),v(s,p),v(s,m),v(m,E),v(E,R),v(s,B),v(s,O),v(O,x),v(x,k),v(s,A),v(s,q),v(q,L),v(L,N),v(s,T),v(s,j),v(j,W),v(W,P)},p(t,[s]){3&s&&$!==($=`width: ${t[1]?100*t[0].battleyness/20:0}%`)&&n(f,"style",$),3&s&&b!==(b=`width: ${t[1]?100*t[0].scandal/20:0}%`)&&n(E,"style",b),3&s&&C!==(C=`width: ${t[1]?100*t[0].subjectivity/20:0}%`)&&n(x,"style",C),3&s&&S!==(S=`width: ${t[1]?100*t[0].longevity/20:0}%`)&&n(L,"style",S),3&s&&_!==(_=`width: ${t[1]?100*t[0].dynasty/20:0}%`)&&n(W,"style",_)},i:g,o:g,d(t){t&&o(s)}}}function ct(t,s,e){let{rating:l}=s,a=!1;return R((()=>{a||setTimeout((()=>{e(1,a=!0)}),100)})),t.$$set=t=>{"rating"in t&&e(0,l=t.rating)},[l,a]}class it extends t{constructor(t){super(),s(this,t,ct,ot,e,{rating:0})}}function ht(t){let s,e,c,u,f,$,p,m=t[0][t[1]]+"";return{c(){s=l("highlight-bar"),e=l("bar-background"),c=l("bar"),u=i(" "),f=i(m),this.h()},l(t){s=a(t,"HIGHLIGHT-BAR",{class:!0});var l=h(s);e=a(l,"BAR-BACKGROUND",{class:!0});var n=h(e);c=a(n,"BAR",{style:!0,class:!0});var r=h(c);u=d(r," "),f=d(r,m),r.forEach(o),n.forEach(o),l.forEach(o),this.h()},h(){n(c,"style",$=`width: ${t[3]?100*t[0][t[1]]/t[2]:0}%;`),n(c,"class",p=b(t[1])+" svelte-h6msbg"),w(e,"class","svelte-h6msbg"),w(s,"class","svelte-h6msbg")},m(t,l){r(t,s,l),v(s,e),v(e,c),v(c,u),v(c,f)},p(t,[s]){3&s&&m!==(m=t[0][t[1]]+"")&&y(f,m),15&s&&$!==($=`width: ${t[3]?100*t[0][t[1]]/t[2]:0}%;`)&&n(c,"style",$),2&s&&p!==(p=b(t[1])+" svelte-h6msbg")&&n(c,"class",p)},i:g,o:g,d(t){t&&o(s)}}}function ut(t,s,e){let l,{rating:a}=s,{scoreHighlight:n}=s;B((()=>{e(2,l="total"===n?100:20)}));let r=!1;return R((()=>{r||setTimeout((()=>{e(3,r=!0)}),100)})),t.$$set=t=>{"rating"in t&&e(0,a=t.rating),"scoreHighlight"in t&&e(1,n=t.scoreHighlight)},[a,n,l,r]}class dt extends t{constructor(t){super(),s(this,t,ut,ht,e,{rating:0,scoreHighlight:1})}}function ft(t,s,e){const l=t.slice();return l[22]=s[e],l}function vt(t,s,e){const l=t.slice();return l[25]=s[e],l}function yt(t){let s,e,n,c;return e=new dt({props:{rating:t[22],scoreHighlight:t[3]}}),{c(){s=l("score-summary"),O(e.$$.fragment),this.h()},l(t){s=a(t,"SCORE-SUMMARY",{style:!0,class:!0});var l=h(s);x(e.$$.fragment,l),l.forEach(o),this.h()},h(){w(s,"style",n=`\n            --col-span: ${t[10](t[22],t[5])};\n            --row-span: ${t[22].linkedRatings.length}`),w(s,"class","svelte-4qvxyj")},m(t,l){r(t,s,l),k(e,s,null),c=!0},p(t,l){const a={};4&l&&(a.rating=t[22]),8&l&&(a.scoreHighlight=t[3]),e.$set(a),(!c||36&l&&n!==(n=`\n            --col-span: ${t[10](t[22],t[5])};\n            --row-span: ${t[22].linkedRatings.length}`))&&w(s,"style",n)},i(t){c||(C(e.$$.fragment,t),c=!0)},o(t){A(e.$$.fragment,t),c=!1},d(t){t&&o(s),q(e)}}}function gt(t){let s,e,l=t[22].linkedRatings,a=[];for(let s=0;s<l.length;s+=1)a[s]=$t(vt(t,l,s));const n=t=>A(a[t],1,1,(()=>{a[t]=null}));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();s=S()},l(t){for(let s=0;s<a.length;s+=1)a[s].l(t);s=S()},m(t,l){for(let s=0;s<a.length;s+=1)a[s].m(t,l);r(t,s,l),e=!0},p(t,e){if(262&e){let r;for(l=t[22].linkedRatings,r=0;r<l.length;r+=1){const n=vt(t,l,r);a[r]?(a[r].p(n,e),C(a[r],1)):(a[r]=$t(n),a[r].c(),C(a[r],1),a[r].m(s.parentNode,s))}for(L(),r=l.length;r<a.length;r+=1)n(r);N()}},i(t){if(!e){for(let t=0;t<l.length;t+=1)C(a[t]);e=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)A(a[t]);e=!1},d(t){T(a,t),t&&o(s)}}}function $t(t){let s,e,f,g,$,p,m,E,R,b,B,L,N;return m=new rt({props:{rating:t[25]}}),m.$on("select",(function(){return t[17](t[25])})),B=new it({props:{rating:t[22]}}),{c(){s=l("linked-ruler"),e=l("linked-to"),f=l("span"),g=i(t[1]),$=c(),p=l("ruler-title"),O(m.$$.fragment),R=c(),b=l("ruler-bars"),O(B.$$.fragment),L=c(),this.h()},l(l){s=a(l,"LINKED-RULER",{class:!0});var n=h(s);e=a(n,"LINKED-TO",{style:!0,class:!0});var r=h(e);f=a(r,"SPAN",{class:!0});var c=h(f);g=d(c,t[1]),c.forEach(o),$=u(r),p=a(r,"RULER-TITLE",{class:!0});var i=h(p);x(m.$$.fragment,i),i.forEach(o),r.forEach(o),R=u(n),b=a(n,"RULER-BARS",{class:!0});var v=h(b);x(B.$$.fragment,v),v.forEach(o),L=u(n),n.forEach(o),this.h()},h(){n(f,"class","svelte-4qvxyj"),w(p,"class","svelte-4qvxyj"),w(e,"style",E="--col-start: 4"),w(e,"class","svelte-4qvxyj"),w(b,"class","svelte-4qvxyj"),w(s,"class","svelte-4qvxyj")},m(t,l){r(t,s,l),v(s,e),v(e,f),v(f,g),v(e,$),v(e,p),k(m,p,null),v(s,R),v(s,b),k(B,b,null),v(s,L),N=!0},p(s,e){t=s,(!N||2&e)&&y(g,t[1]);const l={};4&e&&(l.rating=t[25]),m.$set(l);const a={};4&e&&(a.rating=t[22]),B.$set(a)},i(t){N||(C(m.$$.fragment,t),C(B.$$.fragment,t),N=!0)},o(t){A(m.$$.fragment,t),A(B.$$.fragment,t),N=!1},d(t){t&&o(s),q(m),q(B)}}}function pt(t){let s,e,i,d,y,g,$,p,m,E,R,b,B;d=new rt({props:{rating:t[22]}}),d.$on("select",(function(){return t[16](t[22])})),p=new it({props:{rating:t[22]}});let S=t[4]&&yt(t),T=t[5]&&gt(t);return{c(){s=l("ruler"),e=l("ruler-details"),i=l("ruler-title"),O(d.$$.fragment),g=c(),$=l("ruler-bars"),O(p.$$.fragment),E=c(),S&&S.c(),R=c(),T&&T.c(),b=c(),this.h()},l(t){s=a(t,"RULER",{class:!0});var l=h(s);e=a(l,"RULER-DETAILS",{class:!0});var n=h(e);i=a(n,"RULER-TITLE",{style:!0,class:!0});var r=h(i);x(d.$$.fragment,r),r.forEach(o),g=u(n),$=a(n,"RULER-BARS",{"data-last-col":!0,style:!0,class:!0});var c=h($);x(p.$$.fragment,c),c.forEach(o),E=u(n),S&&S.l(n),n.forEach(o),R=u(l),T&&T.l(l),b=u(l),l.forEach(o),this.h()},h(){w(i,"style",y=`--row-span: ${t[22].linkedRatings.length}`),w(i,"class","svelte-4qvxyj"),w($,"data-last-col",m=!t[4]),f($,"--row-span",t[22].linkedRatings.length),f($,"--col-span",t[9](t[22],t[5],t[4])),f($,"--display",t[4]?"none":"flex"),w($,"class","svelte-4qvxyj"),w(e,"class","svelte-4qvxyj"),n(s,"class","svelte-4qvxyj")},m(t,l){r(t,s,l),v(s,e),v(e,i),k(d,i,null),v(e,g),v(e,$),k(p,$,null),v(e,E),S&&S.m(e,null),v(s,R),T&&T.m(s,null),v(s,b),B=!0},p(l,a){t=l;const n={};4&a&&(n.rating=t[22]),d.$set(n),(!B||4&a&&y!==(y=`--row-span: ${t[22].linkedRatings.length}`))&&w(i,"style",y);const r={};4&a&&(r.rating=t[22]),p.$set(r),(!B||16&a&&m!==(m=!t[4]))&&w($,"data-last-col",m),(!B||4&a)&&f($,"--row-span",t[22].linkedRatings.length),(!B||52&a)&&f($,"--col-span",t[9](t[22],t[5],t[4])),(!B||16&a)&&f($,"--display",t[4]?"none":"flex"),t[4]?S?(S.p(t,a),16&a&&C(S,1)):(S=yt(t),S.c(),C(S,1),S.m(e,null)):S&&(L(),A(S,1,1,(()=>{S=null})),N()),t[5]?T?(T.p(t,a),32&a&&C(T,1)):(T=gt(t),T.c(),C(T,1),T.m(s,b)):T&&(L(),A(T,1,1,(()=>{T=null})),N())},i(t){B||(C(d.$$.fragment,t),C(p.$$.fragment,t),C(S),C(T),B=!0)},o(t){A(d.$$.fragment,t),A(p.$$.fragment,t),A(S),A(T),B=!1},d(t){t&&o(s),q(d),q(p),S&&S.d(),T&&T.d()}}}function mt(t){let s,e,f,g,p,E,w,R,b,B,O,x,k,q,S,I,D,z,U,F,K,H,M,G,V,Z,Y,J,Q,X,tt,st,et,lt,at,nt,rt,ot,ct=t[2],it=[];for(let s=0;s<ct.length;s+=1)it[s]=pt(ft(t,ct,s));const ht=t=>A(it[t],1,1,(()=>{it[t]=null}));return{c(){s=l("form"),e=l("field"),f=l("label"),g=i("Sort"),p=c(),E=l("select"),w=l("option"),R=i("Chronological"),b=l("option"),B=i("Total score"),O=l("option"),x=i("Battleyness"),k=l("option"),q=i("Scandal"),S=l("option"),I=i("Subjectivity"),D=l("option"),z=i("Longevity"),U=l("option"),F=i("Dynasty"),K=c(),H=l("field"),M=l("label"),G=i("Show\n      "),V=i(t[0]),Z=i("?\n      "),Y=l("input"),J=c(),Q=l("field"),X=l("label"),tt=i("Filter by name"),st=c(),et=l("input"),lt=c(),at=l("rulers");for(let t=0;t<it.length;t+=1)it[t].c();this.h()},l(l){s=a(l,"FORM",{class:!0});var n=h(s);e=a(n,"FIELD",{class:!0});var r=h(e);f=a(r,"LABEL",{for:!0});var c=h(f);g=d(c,"Sort"),c.forEach(o),p=u(r),E=a(r,"SELECT",{id:!0});var i=h(E);w=a(i,"OPTION",{value:!0});var v=h(w);R=d(v,"Chronological"),v.forEach(o),b=a(i,"OPTION",{value:!0});var y=h(b);B=d(y,"Total score"),y.forEach(o),O=a(i,"OPTION",{value:!0});var $=h(O);x=d($,"Battleyness"),$.forEach(o),k=a(i,"OPTION",{value:!0});var m=h(k);q=d(m,"Scandal"),m.forEach(o),S=a(i,"OPTION",{value:!0});var C=h(S);I=d(C,"Subjectivity"),C.forEach(o),D=a(i,"OPTION",{value:!0});var A=h(D);z=d(A,"Longevity"),A.forEach(o),U=a(i,"OPTION",{value:!0});var L=h(U);F=d(L,"Dynasty"),L.forEach(o),i.forEach(o),r.forEach(o),K=u(n),H=a(n,"FIELD",{class:!0});var N=h(H);M=a(N,"LABEL",{for:!0});var T=h(M);G=d(T,"Show\n      "),V=d(T,t[0]),Z=d(T,"?\n      "),Y=a(T,"INPUT",{type:!0,id:!0}),T.forEach(o),N.forEach(o),J=u(n),Q=a(n,"FIELD",{class:!0});var j=h(Q);X=a(j,"LABEL",{for:!0});var W=h(X);tt=d(W,"Filter by name"),W.forEach(o),st=u(j),et=a(j,"INPUT",{type:!0,id:!0,class:!0}),j.forEach(o),n.forEach(o),lt=u(l),at=a(l,"RULERS",{class:!0});var P=h(at);for(let t=0;t<it.length;t+=1)it[t].l(P);P.forEach(o),this.h()},h(){n(f,"for","sort-field"),w.__value="index",w.value=w.__value,b.__value="total",b.value=b.__value,O.__value="battleyness",O.value=O.__value,k.__value="scandal",k.value=k.__value,S.__value="subjectivity",S.value=S.__value,D.__value="longevity",D.value=D.__value,U.__value="dynasty",U.value=U.__value,n(E,"id","sort-field"),void 0===t[3]&&j((()=>t[13].call(E))),n(e,"class","svelte-4qvxyj"),n(Y,"type","checkbox"),n(Y,"id","show-linked-ratings"),n(M,"for","show-linked-ratings"),n(H,"class","svelte-4qvxyj"),n(X,"for","name-filter"),n(et,"type","text"),n(et,"id","name-filter"),n(et,"class","svelte-4qvxyj"),n(Q,"class","svelte-4qvxyj"),n(s,"class","svelte-4qvxyj"),n(at,"class","svelte-4qvxyj")},m(l,a){r(l,s,a),v(s,e),v(e,f),v(f,g),v(e,p),v(e,E),v(E,w),v(w,R),v(E,b),v(b,B),v(E,O),v(O,x),v(E,k),v(k,q),v(E,S),v(S,I),v(E,D),v(D,z),v(E,U),v(U,F),W(E,t[3]),v(s,K),v(s,H),v(H,M),v(M,G),v(M,V),v(M,Z),v(M,Y),Y.checked=t[5],v(s,J),v(s,Q),v(Q,X),v(X,tt),v(Q,st),v(Q,et),P(et,t[6]),r(l,lt,a),r(l,at,a);for(let t=0;t<it.length;t+=1)it[t].m(at,null);t[18](at),nt=!0,rt||(ot=[$(E,"change",t[13]),$(Y,"change",t[14]),$(et,"input",t[15]),$(et,"select",m(t[12]))],rt=!0)},p(t,[s]){if(8&s&&W(E,t[3]),(!nt||1&s)&&y(V,t[0]),32&s&&(Y.checked=t[5]),64&s&&et.value!==t[6]&&P(et,t[6]),1854&s){let e;for(ct=t[2],e=0;e<ct.length;e+=1){const l=ft(t,ct,e);it[e]?(it[e].p(l,s),C(it[e],1)):(it[e]=pt(l),it[e].c(),C(it[e],1),it[e].m(at,null))}for(L(),e=ct.length;e<it.length;e+=1)ht(e);N()}},i(t){if(!nt){for(let t=0;t<ct.length;t+=1)C(it[t]);nt=!0}},o(t){it=it.filter(Boolean);for(let t=0;t<it.length;t+=1)A(it[t]);nt=!1},d(e){e&&o(s),e&&o(lt),e&&o(at),T(it,e),t[18](null),rt=!1,_(ot)}}}function Et(t,s,e){let{scores:l=[]}=s,{linkedRatingName:a="linked ratings"}=s,{linkSymbol:n="⚭"}=s,r=l,o=null,c=!1,i=!1,h=null,u=null;const d=I("simple-modal");B((()=>{e(4,c=o&&"index"!==o&&"total"!==o),e(2,r=l),v(),y()}));const f=t=>{d.open(et,{rating:t},{styleWindow:{width:"fit-content",background:"rgba(0,0,0,0)"},styleContent:{padding:0}})},v=()=>{if(!h)return void e(2,r=l||[]);const t=h.toLocaleLowerCase();e(2,r=l.filter((s=>s.name.toLocaleLowerCase().includes(t))))},y=()=>{o&&e(2,r=r.sort(((t,s)=>t[o]===s[o]?0:"index"===o?t[o]>s[o]?1:-1:t[o]>s[o]?-1:1)))};return t.$$set=t=>{"scores"in t&&e(11,l=t.scores),"linkedRatingName"in t&&e(0,a=t.linkedRatingName),"linkSymbol"in t&&e(1,n=t.linkSymbol)},[a,n,r,o,c,i,h,u,f,(t,s,e)=>e?1:t.linkedRatings.length&&s?2:4,(t,s)=>{let e=1;return t.linkedRatings.length&&s||(e+=2),e},l,function(s){D(t,s)},function(){o=z(this),e(3,o)},function(){i=this.checked,e(5,i)},function(){h=this.value,e(6,h)},t=>f(t),t=>f(t),function(t){U[t?"unshift":"push"]((()=>{u=t,e(7,u)}))}]}class wt extends t{constructor(t){super(),s(this,t,Et,mt,e,{scores:11,linkedRatingName:0,linkSymbol:1})}}function Rt(t,{delay:s=0,duration:e=400,easing:l=F}){const a=+getComputedStyle(t).opacity;return{delay:s,duration:e,easing:l,css:t=>"opacity: "+t*a}}function bt(t){let s,e,i,d,f,y,g,p,m,E,w,R=t[0].closeButton&&Bt(t);const b=[t[2]];var B=t[1];function S(t){let s={};for(let t=0;t<b.length;t+=1)s=Y(s,b[t]);return{props:s}}return B&&(y=new B(S())),{c(){s=l("div"),e=l("div"),i=l("div"),R&&R.c(),d=c(),f=l("div"),y&&O(y.$$.fragment),this.h()},l(t){s=a(t,"DIV",{class:!0,style:!0});var l=h(s);e=a(l,"DIV",{class:!0});var n=h(e);i=a(n,"DIV",{class:!0,role:!0,"aria-modal":!0,style:!0});var r=h(i);R&&R.l(r),d=u(r),f=a(r,"DIV",{class:!0,style:!0});var c=h(f);y&&x(y.$$.fragment,c),c.forEach(o),r.forEach(o),n.forEach(o),l.forEach(o),this.h()},h(){n(f,"class","content svelte-fnsfcv"),n(f,"style",t[12]),n(i,"class","window svelte-fnsfcv"),n(i,"role","dialog"),n(i,"aria-modal","true"),n(i,"style",t[11]),n(e,"class","window-wrap svelte-fnsfcv"),n(s,"class","bg svelte-fnsfcv"),n(s,"style",t[10])},m(l,a){r(l,s,a),v(s,e),v(e,i),R&&R.m(i,null),v(i,d),v(i,f),y&&k(y,f,null),t[35](i),t[36](e),t[37](s),m=!0,E||(w=[$(i,"introstart",(function(){K(t[6])&&t[6].apply(this,arguments)})),$(i,"outrostart",(function(){K(t[7])&&t[7].apply(this,arguments)})),$(i,"introend",(function(){K(t[8])&&t[8].apply(this,arguments)})),$(i,"outroend",(function(){K(t[9])&&t[9].apply(this,arguments)})),$(s,"click",t[19])],E=!0)},p(e,l){(t=e)[0].closeButton?R?(R.p(t,l),1&l[0]&&C(R,1)):(R=Bt(t),R.c(),C(R,1),R.m(i,d)):R&&(L(),A(R,1,1,(()=>{R=null})),N());const a=4&l[0]?H(b,[M(t[2])]):{};if(B!==(B=t[1])){if(y){L();const t=y;A(t.$$.fragment,1,0,(()=>{q(t,1)})),N()}B?(y=new B(S()),O(y.$$.fragment),C(y.$$.fragment,1),k(y,f,null)):y=null}else B&&y.$set(a);(!m||4096&l[0])&&n(f,"style",t[12]),(!m||2048&l[0])&&n(i,"style",t[11]),(!m||1024&l[0])&&n(s,"style",t[10])},i(e){m||(C(R),y&&C(y.$$.fragment,e),j((()=>{g||(g=G(i,t[15],t[0].transitionWindowProps,!0)),g.run(1)})),j((()=>{p||(p=G(s,t[14],t[0].transitionBgProps,!0)),p.run(1)})),m=!0)},o(e){A(R),y&&A(y.$$.fragment,e),g||(g=G(i,t[15],t[0].transitionWindowProps,!1)),g.run(0),p||(p=G(s,t[14],t[0].transitionBgProps,!1)),p.run(0),m=!1},d(e){e&&o(s),R&&R.d(),y&&q(y),t[35](null),e&&g&&g.end(),t[36](null),t[37](null),e&&p&&p.end(),E=!1,_(w)}}}function Bt(t){let s,e,l,a,n;const c=[xt,Ot],i=[];function h(t,e){return 1&e[0]&&(s=!!t[16](t[0].closeButton)),s?0:1}return e=h(t,[-1]),l=i[e]=c[e](t),{c(){l.c(),a=S()},l(t){l.l(t),a=S()},m(t,s){i[e].m(t,s),r(t,a,s),n=!0},p(t,s){let n=e;e=h(t,s),e===n?i[e].p(t,s):(L(),A(i[n],1,1,(()=>{i[n]=null})),N(),l=i[e],l?l.p(t,s):(l=i[e]=c[e](t),l.c()),C(l,1),l.m(a.parentNode,a))},i(t){n||(C(l),n=!0)},o(t){A(l),n=!1},d(t){i[e].d(t),t&&o(a)}}}function Ot(t){let s,e,c;return{c(){s=l("button"),this.h()},l(t){s=a(t,"BUTTON",{class:!0,style:!0}),h(s).forEach(o),this.h()},h(){n(s,"class","close svelte-fnsfcv"),n(s,"style",t[13])},m(l,a){r(l,s,a),e||(c=$(s,"click",t[17]),e=!0)},p(t,e){8192&e[0]&&n(s,"style",t[13])},i:g,o:g,d(t){t&&o(s),e=!1,c()}}}function xt(t){let s,e,l;var a=t[0].closeButton;function n(t){return{props:{onClose:t[17]}}}return a&&(s=new a(n(t))),{c(){s&&O(s.$$.fragment),e=S()},l(t){s&&x(s.$$.fragment,t),e=S()},m(t,a){s&&k(s,t,a),r(t,e,a),l=!0},p(t,l){if(a!==(a=t[0].closeButton)){if(s){L();const t=s;A(t.$$.fragment,1,0,(()=>{q(t,1)})),N()}a?(s=new a(n(t)),O(s.$$.fragment),C(s.$$.fragment,1),k(s,e.parentNode,e)):s=null}},i(t){l||(s&&C(s.$$.fragment,t),l=!0)},o(t){s&&A(s.$$.fragment,t),l=!1},d(t){t&&o(e),s&&q(s,t)}}}function kt(t){let s,e,l,a,n=t[1]&&bt(t);const i=t[34].default,h=V(i,t,t[33],null);return{c(){n&&n.c(),s=c(),h&&h.c()},l(t){n&&n.l(t),s=u(t),h&&h.l(t)},m(o,c){n&&n.m(o,c),r(o,s,c),h&&h.m(o,c),e=!0,l||(a=$(window,"keydown",t[18]),l=!0)},p(t,e){t[1]?n?(n.p(t,e),2&e[0]&&C(n,1)):(n=bt(t),n.c(),C(n,1),n.m(s.parentNode,s)):n&&(L(),A(n,1,1,(()=>{n=null})),N()),h&&h.p&&4&e[1]&&Z(h,i,t,t[33],e,null,null)},i(t){e||(C(n),C(h,t),e=!0)},o(t){A(n),A(h,t),e=!1},d(t){n&&n.d(t),t&&o(s),h&&h.d(t),l=!1,a()}}}function Ct(t,s,e){let{$$slots:l={},$$scope:a}=s;const n=J,r=Q;let{key:o="simple-modal"}=s,{closeButton:c=!0}=s,{closeOnEsc:i=!0}=s,{closeOnOuterClick:h=!0}=s,{styleBg:u={top:0,left:0}}=s,{styleWindow:d={}}=s,{styleContent:f={}}=s,{styleCloseButton:v={}}=s,{setContext:y=n}=s,{transitionBg:g=Rt}=s,{transitionBgProps:$={duration:250}}=s,{transitionWindow:p=g}=s,{transitionWindowProps:m=$}=s;const E={closeButton:c,closeOnEsc:i,closeOnOuterClick:h,styleBg:u,styleWindow:d,styleContent:f,styleCloseButton:v,transitionBg:g,transitionBgProps:$,transitionWindow:p,transitionWindowProps:m};let w,R,b,B={...E},O=null,x=null;const k=t=>Object.keys(t).reduce(((s,e)=>`${s}; ${(t=>t.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase())(e)}: ${t[e]}`),""),C=()=>{};let A=C,q=C,L=C,N=C;const S=(t={})=>{e(7,q=t.onClose||q),e(9,N=t.onClosed||N),e(1,O=null),e(2,x=null)};let T,j,W,P,_,I;return y(o,{open:(t,s={},l={},a={})=>{e(1,O=t),e(2,x=s),e(0,B={...E,...l}),e(6,A=a.onOpen||C),e(7,q=a.onClose||C),e(8,L=a.onOpened||C),e(9,N=a.onClosed||C)},close:S}),t.$$set=t=>{"key"in t&&e(20,o=t.key),"closeButton"in t&&e(21,c=t.closeButton),"closeOnEsc"in t&&e(22,i=t.closeOnEsc),"closeOnOuterClick"in t&&e(23,h=t.closeOnOuterClick),"styleBg"in t&&e(24,u=t.styleBg),"styleWindow"in t&&e(25,d=t.styleWindow),"styleContent"in t&&e(26,f=t.styleContent),"styleCloseButton"in t&&e(27,v=t.styleCloseButton),"setContext"in t&&e(28,y=t.setContext),"transitionBg"in t&&e(29,g=t.transitionBg),"transitionBgProps"in t&&e(30,$=t.transitionBgProps),"transitionWindow"in t&&e(31,p=t.transitionWindow),"transitionWindowProps"in t&&e(32,m=t.transitionWindowProps),"$$scope"in t&&e(33,a=t.$$scope)},t.$$.update=()=>{1&t.$$.dirty[0]&&e(10,T=k(B.styleBg)),1&t.$$.dirty[0]&&e(11,j=k(B.styleWindow)),1&t.$$.dirty[0]&&e(12,W=k(B.styleContent)),1&t.$$.dirty[0]&&e(13,P=k(B.styleCloseButton)),1&t.$$.dirty[0]&&e(14,_=B.transitionBg),1&t.$$.dirty[0]&&e(15,I=B.transitionWindow)},[B,O,x,w,R,b,A,q,L,N,T,j,W,P,_,I,t=>r&&r.isPrototypeOf&&r.isPrototypeOf(t),S,t=>{if(B.closeOnEsc&&O&&"Escape"===t.key&&(t.preventDefault(),S()),O&&"Tab"===t.key){const s=b.querySelectorAll("*"),e=Array.from(s).filter((t=>t.tabIndex>=0));let l=e.indexOf(document.activeElement);-1===l&&t.shiftKey&&(l=0),l+=e.length+(t.shiftKey?-1:1),l%=e.length,e[l].focus(),t.preventDefault()}},t=>{!B.closeOnOuterClick||t.target!==w&&t.target!==R||(t.preventDefault(),S())},o,c,i,h,u,d,f,v,y,g,$,p,m,a,l,function(t){U[t?"unshift":"push"]((()=>{b=t,e(5,b)}))},function(t){U[t?"unshift":"push"]((()=>{R=t,e(4,R)}))},function(t){U[t?"unshift":"push"]((()=>{w=t,e(3,w)}))}]}class At extends t{constructor(t){super(),s(this,t,Ct,kt,e,{key:20,closeButton:21,closeOnEsc:22,closeOnOuterClick:23,styleBg:24,styleWindow:25,styleContent:26,styleCloseButton:27,setContext:28,transitionBg:29,transitionBgProps:30,transitionWindow:31,transitionWindowProps:32},[-1,-1])}}export{At as M,wt as R};
