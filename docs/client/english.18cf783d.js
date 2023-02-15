import{S as e,i as t,s as r,h as s,t as a,q as n,j as i,b as l,k as o,d as c,u as f,e as h,m as u,f as m,g as d,o as p,n as g,M as v,l as E,x as $,y,v as w,z as b,p as F,w as T,A as I,B as k,F as j,C as D,D as M,N as q,O as A,P as V,I as C,H as U,E as N,r as O}from"./client.5643450a.js";import{d as R}from"./dayjs.min.3a401125.js";import{M as x,c as H}from"./count_films.92eea189.js";import{P as B}from"./PictoAge.588fcf5e.js";import{f as P}from"./format.9c9f1472.js";import{u as L}from"./update_pick_status.0fa554f5.js";function S(e){let t,r,E,$,y,w,b,F;return{c(){t=s("div"),r=s("button"),E=a("Film title"),$=n(),y=s("button"),w=a("Recently added"),this.h()},l(e){t=i(e,"DIV",{class:!0});var s=l(t);r=i(s,"BUTTON",{class:!0});var a=l(r);E=o(a,"Film title"),a.forEach(c),$=f(s),y=i(s,"BUTTON",{class:!0});var n=l(y);w=o(n,"Recently added"),n.forEach(c),s.forEach(c),this.h()},h(){h(r,"class","svelte-12rtm69"),u(r,"on","title"===e[0]),h(y,"class","svelte-12rtm69"),u(y,"on","recent"===e[0]),h(t,"class","svelte-12rtm69")},m(s,a){m(s,t,a),d(t,r),d(r,E),d(t,$),d(t,y),d(y,w),b||(F=[p(r,"click",e[1]),p(y,"click",e[2])],b=!0)},p(e,[t]){1&t&&u(r,"on","title"===e[0]),1&t&&u(y,"on","recent"===e[0])},i:g,o:g,d(e){e&&c(t),b=!1,v(F)}}}function z(e,t,r){let{key:s="recent"}=t;return e.$$set=e=>{"key"in e&&r(0,s=e.key)},e.$$.update=()=>{1&e.$$.dirty&&r(0,s)},[s,()=>{r(0,s="title")},()=>{r(0,s="recent")}]}class _ extends e{constructor(e){super(),t(this,e,z,S,r,{key:0})}}function W(e,t,r){const s=e.slice();return s[7]=t[r],s}function G(e){let t,r,s=`${P.artTitre(e[7].artFr,e[7].titreFr)}${P.beforeAfterStr("string"==typeof e[7].sousTitreFr?e[7].sousTitreFr[0]===e[7].sousTitreFr[0].toUpperCase()?".?!".indexOf(e[7].titreFr.slice(-1))>-1?" ":". ":" ":"","",e[7].sousTitreFr)}`;return{c(){t=new U(!1),r=N(),this.h()},l(e){t=O(e,!1),r=N(),this.h()},h(){t.a=r},m(e,a){t.m(s,e,a),m(e,r,a)},p(e,r){4&r&&s!==(s=`${P.artTitre(e[7].artFr,e[7].titreFr)}${P.beforeAfterStr("string"==typeof e[7].sousTitreFr?e[7].sousTitreFr[0]===e[7].sousTitreFr[0].toUpperCase()?".?!".indexOf(e[7].titreFr.slice(-1))>-1?" ":". ":" ":"","",e[7].sousTitreFr)}`)&&t.p(s)},d(e){e&&c(r),e&&t.d()}}}function J(e){let t,r,s=`${P.artTitre(e[7].artEn,e[7].titreEn)}`;return{c(){t=new U(!1),r=N(),this.h()},l(e){t=O(e,!1),r=N(),this.h()},h(){t.a=r},m(e,a){t.m(s,e,a),m(e,r,a)},p(e,r){4&r&&s!==(s=`${P.artTitre(e[7].artEn,e[7].titreEn)}`)&&t.p(s)},d(e){e&&c(r),e&&t.d()}}}function K(e){let t,r,n,f=R(e[7].dateUnpublished).format("MMM, D")+"";return{c(){t=s("div"),r=a("Until\r\n                  "),n=a(f),this.h()},l(e){t=i(e,"DIV",{class:!0});var s=l(t);r=o(s,"Until\r\n                  "),n=o(s,f),s.forEach(c),this.h()},h(){h(t,"class","end")},m(e,s){m(e,t,s),d(t,r),d(t,n)},p(e,t){4&t&&f!==(f=R(e[7].dateUnpublished).format("MMM, D")+"")&&F(n,f)},d(e){e&&c(t)}}}function Q(e){let t,r,p,g,v,E,j,D,M,q,A,V,C,U,N,O,R,x,H,L,S,z,_,W,Q,X,Y=e[7].duree+"",Z=e[7].realisateurs+"",ee=e[7].annee+"",te=e[7].en+"";function re(e,t){return e[7].titreEn?J:G}let se=re(e),ae=se(e);U=new B({props:{age:e[7].ageMin,size:"20"}});let ne=e[7].dateUnpublished&&K(e);return{c(){t=s("li"),r=s("a"),p=s("div"),g=s("img"),j=n(),D=s("div"),M=a(Y),q=n(),A=s("div"),V=s("div"),ae.c(),C=n(),$(U.$$.fragment),N=n(),O=s("div"),R=a(Z),x=a(", "),H=a(ee),L=n(),S=s("div"),z=a(te),_=n(),ne&&ne.c(),Q=n(),this.h()},l(e){t=i(e,"LI",{class:!0});var s=l(t);r=i(s,"A",{rel:!0,href:!0});var a=l(r);p=i(a,"DIV",{class:!0});var n=l(p);g=i(n,"IMG",{src:!0,alt:!0}),j=f(n),D=i(n,"DIV",{class:!0});var h=l(D);M=o(h,Y),h.forEach(c),n.forEach(c),q=f(a),A=i(a,"DIV",{class:!0});var u=l(A);V=i(u,"DIV",{class:!0});var m=l(V);ae.l(m),C=f(m),y(U.$$.fragment,m),m.forEach(c),N=f(u),O=i(u,"DIV",{});var d=l(O);R=o(d,Z),x=o(d,", "),H=o(d,ee),d.forEach(c),L=f(u),S=i(u,"DIV",{class:!0});var v=l(S);z=o(v,te),v.forEach(c),_=f(u),ne&&ne.l(u),u.forEach(c),a.forEach(c),Q=f(s),s.forEach(c),this.h()},h(){w(g.src,v=e[7].image.small)||h(g,"src",v),h(g,"alt",E=P.artTitre(e[7].artFr,e[7].titreFr)),h(D,"class","duree"),h(p,"class","img-container"),h(V,"class","titre"),h(S,"class","english-reason svelte-1pfh3fq"),h(A,"class","film-info"),h(r,"rel","prefetch"),h(r,"href",W="film/"+e[7].slug+"/"),h(t,"class","film"),u(t,"ispick",1===e[7].status)},m(e,s){m(e,t,s),d(t,r),d(r,p),d(p,g),d(p,j),d(p,D),d(D,M),d(r,q),d(r,A),d(A,V),ae.m(V,null),d(V,C),b(U,V,null),d(A,N),d(A,O),d(O,R),d(O,x),d(O,H),d(A,L),d(A,S),d(S,z),d(A,_),ne&&ne.m(A,null),d(t,Q),X=!0},p(e,s){(!X||4&s&&!w(g.src,v=e[7].image.small))&&h(g,"src",v),(!X||4&s&&E!==(E=P.artTitre(e[7].artFr,e[7].titreFr)))&&h(g,"alt",E),(!X||4&s)&&Y!==(Y=e[7].duree+"")&&F(M,Y),se===(se=re(e))&&ae?ae.p(e,s):(ae.d(1),ae=se(e),ae&&(ae.c(),ae.m(V,C)));const a={};4&s&&(a.age=e[7].ageMin),U.$set(a),(!X||4&s)&&Z!==(Z=e[7].realisateurs+"")&&F(R,Z),(!X||4&s)&&ee!==(ee=e[7].annee+"")&&F(H,ee),(!X||4&s)&&te!==(te=e[7].en+"")&&F(z,te),e[7].dateUnpublished?ne?ne.p(e,s):(ne=K(e),ne.c(),ne.m(A,null)):ne&&(ne.d(1),ne=null),(!X||4&s&&W!==(W="film/"+e[7].slug+"/"))&&h(r,"href",W),(!X||4&s)&&u(t,"ispick",1===e[7].status)},i(e){X||(T(U.$$.fragment,e),X=!0)},o(e){I(U.$$.fragment,e),X=!1},d(e){e&&c(t),ae.d(),k(U),ne&&ne.d()}}}function X(e){let t,r,u,p,g,v,E,w,U,N,O,R,H,B,P,L,S,z,G,J,K,X=e[2].length+"";function Y(t){e[4](t)}U=new x({props:{lang:"en",count:e[0]}});let Z={};void 0!==e[1]&&(Z.key=e[1]),S=new _({props:Z}),q.push((()=>A(S,"key",Y)));let ee=e[2],te=[];for(let t=0;t<ee.length;t+=1)te[t]=Q(W(e,ee,t));const re=e=>I(te[e],1,1,(()=>{te[e]=null}));return{c(){t=s("meta"),r=s("meta"),u=s("meta"),p=s("meta"),g=n(),v=s("section"),E=s("div"),w=s("h1"),$(U.$$.fragment),N=n(),O=s("article"),R=a("HENRI, Cinémathèque française's free VOD platform, offers a range of rare\r\n      cinematic gems from our film collection or presented in partnership with\r\n      directors, distributors, festivals or fellow archives from around the\r\n      world. We list below\r\n      "),H=s("span"),B=a(X),P=a(" films currently on view\r\n      that can be enjoyed by English-speaking audiences."),L=n(),$(S.$$.fragment),G=n(),J=s("ul");for(let e=0;e<te.length;e+=1)te[e].c();this.h()},l(e){const s=j("svelte-adnzvm",document.head);t=i(s,"META",{property:!0,content:!0}),r=i(s,"META",{property:!0,content:!0}),u=i(s,"META",{property:!0,content:!0}),p=i(s,"META",{property:!0,content:!0}),s.forEach(c),g=f(e),v=i(e,"SECTION",{});var a=l(v);E=i(a,"DIV",{class:!0});var n=l(E);w=i(n,"H1",{class:!0});var h=l(w);y(U.$$.fragment,h),h.forEach(c),N=f(n),O=i(n,"ARTICLE",{class:!0});var m=l(O);R=o(m,"HENRI, Cinémathèque française's free VOD platform, offers a range of rare\r\n      cinematic gems from our film collection or presented in partnership with\r\n      directors, distributors, festivals or fellow archives from around the\r\n      world. We list below\r\n      "),H=i(m,"SPAN",{class:!0});var d=l(H);B=o(d,X),d.forEach(c),P=o(m," films currently on view\r\n      that can be enjoyed by English-speaking audiences."),m.forEach(c),L=f(n),y(S.$$.fragment,n),G=f(n),J=i(n,"UL",{class:!0});var $=l(J);for(let e=0;e<te.length;e+=1)te[e].l($);$.forEach(c),n.forEach(c),a.forEach(c),this.h()},h(){document.title="Films in English - HENRI - La Cinémathèque française",h(t,"property","og:url"),h(t,"content","https://www.cinematheque.fr/henri/english"),h(r,"property","og:title"),h(r,"content","Films in English - HENRI - La Cinémathèque française"),h(u,"property","og:image"),h(u,"content","https://www.cinematheque.fr/henri/english.jpg"),h(p,"property","og:description"),h(p,"content","HENRI, Cinémathèque française's free VOD platform, offers a range of rare cinematic gems from our film collection or presented in partnership with directors, distributors, festivals or fellow archives from around the\r\nworld. And some of them can be enjoyed by English-speaking audiences."),h(w,"class","main-title"),h(H,"class","count svelte-1pfh3fq"),h(O,"class","svelte-1pfh3fq"),h(J,"class","grid"),h(E,"class","container")},m(e,s){d(document.head,t),d(document.head,r),d(document.head,u),d(document.head,p),m(e,g,s),m(e,v,s),d(v,E),d(E,w),b(U,w,null),d(E,N),d(E,O),d(O,R),d(O,H),d(H,B),d(O,P),d(E,L),b(S,E,null),d(E,G),d(E,J);for(let e=0;e<te.length;e+=1)te[e].m(J,null);K=!0},p(e,[t]){const r={};1&t&&(r.count=e[0]),U.$set(r),(!K||4&t)&&X!==(X=e[2].length+"")&&F(B,X);const s={};if(!z&&2&t&&(z=!0,s.key=e[1],V((()=>z=!1))),S.$set(s),4&t){let r;for(ee=e[2],r=0;r<ee.length;r+=1){const s=W(e,ee,r);te[r]?(te[r].p(s,t),T(te[r],1)):(te[r]=Q(s),te[r].c(),T(te[r],1),te[r].m(J,null))}for(C(),r=ee.length;r<te.length;r+=1)re(r);D()}},i(e){if(!K){T(U.$$.fragment,e),T(S.$$.fragment,e);for(let e=0;e<ee.length;e+=1)T(te[e]);K=!0}},o(e){I(U.$$.fragment,e),I(S.$$.fragment,e),te=te.filter(Boolean);for(let e=0;e<te.length;e+=1)I(te[e]);K=!1},d(e){c(t),c(r),c(u),c(p),e&&c(g),e&&c(v),k(U),k(S),M(te,e)}}}async function Y({params:e,query:t}){let r=await(await this.fetch("count.json")).json(),s=await this.fetch("headers.json");if(200===s.status)return s=await s.json(),{count:r,filmsEn:E(s).map((e=>e.films)).flatten().filter((e=>(1===e.status||2===e.status)&&e.en)).value()};this.error(res.status,data.message)}function Z(e,t,r){R.locale("en");let{count:s,filmsEn:a}=t;a=L(a),s=H(s);let n="recent",i={recent:E(a).orderBy([e=>e.datePublishedEn||e.datePublished,"order"],["asc","desc"]).reverse().value(),title:E(a).orderBy((e=>E.kebabCase(e.titreEn||e.titreFr))).value()},l=o(n);function o(e){return i[e]}return e.$$set=e=>{"count"in e&&r(0,s=e.count),"filmsEn"in e&&r(3,a=e.filmsEn)},e.$$.update=()=>{2&e.$$.dirty&&r(2,l=o(n))},[s,n,l,a,function(e){n=e,r(1,n)}]}export default class extends e{constructor(e){super(),t(this,e,Z,X,r,{count:0,filmsEn:3})}}export{Y as preload};
