import{S as e,i as t,s as r,e as s,t as a,a as n,c as l,b as i,d as o,f as c,g as f,h,j as u,k as m,l as d,m as p,A as g,E as v,q as E,r as $,u as y,n as w,p as b,v as F,w as I,y as T,x as k,o as D,F as M,G as j,I as V,z as A,D as U,H as C}from"./client.2fa718f0.js";import{l as q,f as N,d as x,P as R,a as H}from"./PictoAge.ea6e58d6.js";import{M as O}from"./MainTitle.71893f73.js";function B(e){let t,r,E,$,y,w,b,F;return{c(){t=s("div"),r=s("button"),E=a("Film title"),$=n(),y=s("button"),w=a("Recently added"),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=i(t);r=l(s,"BUTTON",{class:!0});var a=i(r);E=o(a,"Film title"),a.forEach(c),$=f(s),y=l(s,"BUTTON",{class:!0});var n=i(y);w=o(n,"Recently added"),n.forEach(c),s.forEach(c),this.h()},h(){h(r,"class","svelte-12rtm69"),u(r,"on","title"===e[0]),h(y,"class","svelte-12rtm69"),u(y,"on","recent"===e[0]),h(t,"class","svelte-12rtm69")},m(s,a){m(s,t,a),d(t,r),d(r,E),d(t,$),d(t,y),d(y,w),b||(F=[p(r,"click",e[1]),p(y,"click",e[2])],b=!0)},p(e,[t]){1&t&&u(r,"on","title"===e[0]),1&t&&u(y,"on","recent"===e[0])},i:g,o:g,d(e){e&&c(t),b=!1,v(F)}}}function L(e,t,r){let{key:s="recent"}=t;return e.$set=e=>{"key"in e&&r(0,s=e.key)},e.$$.update=()=>{1&e.$$.dirty&&r(0,s)},[s,()=>{r(0,s="title")},()=>{r(0,s="recent")}]}class P extends e{constructor(e){super(),t(this,e,L,B,r,{key:0})}}function S(e,t,r){const s=e.slice();return s[6]=t[r],s}function z(e){let t,r,s=`${N(e[6].artFr,e[6].titreFr)}${H("string"==typeof e[6].sousTitreFr?e[6].sousTitreFr[0]===e[6].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[6].sousTitreFr)}`;return{c(){r=U(),this.h()},l(e){r=U(),this.h()},h(){t=new C(r)},m(e,a){t.m(s,e,a),m(e,r,a)},p(e,r){2&r&&s!==(s=`${N(e[6].artFr,e[6].titreFr)}${H("string"==typeof e[6].sousTitreFr?e[6].sousTitreFr[0]===e[6].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[6].sousTitreFr)}`)&&t.p(s)},d(e){e&&c(r),e&&t.d()}}}function G(e){let t,r,s=""+N(e[6].artEn,e[6].titreEn);return{c(){r=U(),this.h()},l(e){r=U(),this.h()},h(){t=new C(r)},m(e,a){t.m(s,e,a),m(e,r,a)},p(e,r){2&r&&s!==(s=""+N(e[6].artEn,e[6].titreEn))&&t.p(s)},d(e){e&&c(r),e&&t.d()}}}function W(e){let t,r,n,f=x(e[6].dateUnpublished).format("MMM, D")+"";return{c(){t=s("div"),r=a("Until\r\n                  "),n=a(f),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=i(t);r=o(s,"Until\r\n                  "),n=o(s,f),s.forEach(c),this.h()},h(){h(t,"class","end")},m(e,s){m(e,t,s),d(t,r),d(t,n)},p(e,t){2&t&&f!==(f=x(e[6].dateUnpublished).format("MMM, D")+"")&&w(n,f)},d(e){e&&c(t)}}}function J(e){let t,r,u,p,g,v,T,k,D,M,j,V,A,U,C,q,x,H,O,B,L,P,S,J,K,Q,X=e[6].duree+"",Y=e[6].realisateurs+"",Z=e[6].annee+"",_=e[6].en+"";function ee(e,t){return e[6].titreEn?G:z}let te=ee(e),re=te(e);U=new R({props:{age:e[6].ageMin,size:"20"}});let se=e[6].dateUnpublished&&W(e);return{c(){t=s("li"),r=s("a"),u=s("div"),p=s("img"),T=n(),k=s("div"),D=a(X),M=n(),j=s("div"),V=s("div"),re.c(),A=n(),E(U.$$.fragment),C=n(),q=s("div"),x=a(Y),H=a(", "),O=a(Z),B=n(),L=s("div"),P=a(_),S=n(),se&&se.c(),K=n(),this.h()},l(e){t=l(e,"LI",{class:!0});var s=i(t);r=l(s,"A",{rel:!0,href:!0});var a=i(r);u=l(a,"DIV",{class:!0});var n=i(u);p=l(n,"IMG",{src:!0,alt:!0}),T=f(n),k=l(n,"DIV",{class:!0});var h=i(k);D=o(h,X),h.forEach(c),n.forEach(c),M=f(a),j=l(a,"DIV",{class:!0});var m=i(j);V=l(m,"DIV",{class:!0});var d=i(V);re.l(d),A=f(d),$(U.$$.fragment,d),d.forEach(c),C=f(m),q=l(m,"DIV",{});var g=i(q);x=o(g,Y),H=o(g,", "),O=o(g,Z),g.forEach(c),B=f(m),L=l(m,"DIV",{class:!0});var v=i(L);P=o(v,_),v.forEach(c),S=f(m),se&&se.l(m),m.forEach(c),a.forEach(c),K=f(s),s.forEach(c),this.h()},h(){p.src!==(g=e[6].thumb)&&h(p,"src",g),h(p,"alt",v=N(e[6].artFr,e[6].titreFr)),h(k,"class","duree"),h(u,"class","img-container"),h(V,"class","titre"),h(L,"class","english-reason svelte-ejxa4k"),h(j,"class","film-info"),h(r,"rel","prefetch"),h(r,"href",J="film/"+e[6].slug+"/"),h(t,"class","film")},m(e,s){m(e,t,s),d(t,r),d(r,u),d(u,p),d(u,T),d(u,k),d(k,D),d(r,M),d(r,j),d(j,V),re.m(V,null),d(V,A),y(U,V,null),d(j,C),d(j,q),d(q,x),d(q,H),d(q,O),d(j,B),d(j,L),d(L,P),d(j,S),se&&se.m(j,null),d(t,K),Q=!0},p(e,t){(!Q||2&t&&p.src!==(g=e[6].thumb))&&h(p,"src",g),(!Q||2&t&&v!==(v=N(e[6].artFr,e[6].titreFr)))&&h(p,"alt",v),(!Q||2&t)&&X!==(X=e[6].duree+"")&&w(D,X),te===(te=ee(e))&&re?re.p(e,t):(re.d(1),re=te(e),re&&(re.c(),re.m(V,A)));const s={};2&t&&(s.age=e[6].ageMin),U.$set(s),(!Q||2&t)&&Y!==(Y=e[6].realisateurs+"")&&w(x,Y),(!Q||2&t)&&Z!==(Z=e[6].annee+"")&&w(O,Z),(!Q||2&t)&&_!==(_=e[6].en+"")&&w(P,_),e[6].dateUnpublished?se?se.p(e,t):(se=W(e),se.c(),se.m(j,null)):se&&(se.d(1),se=null),(!Q||2&t&&J!==(J="film/"+e[6].slug+"/"))&&h(r,"href",J)},i(e){Q||(b(U.$$.fragment,e),Q=!0)},o(e){F(U.$$.fragment,e),Q=!1},d(e){e&&c(t),re.d(),I(U),se&&se.d()}}}function K(e){let t,r,u,p,g,v,U,C,q,N,x,R,H,B,L,z,G,W,K,Q,X=e[1].length+"";function Y(t){e[3].call(null,t)}C=new O({props:{lang:"en"}});let Z={};void 0!==e[0]&&(Z.key=e[0]),z=new P({props:Z}),M.push(()=>j(z,"key",Y));let _=e[1],ee=[];for(let t=0;t<_.length;t+=1)ee[t]=J(S(e,_,t));const te=e=>F(ee[e],1,1,()=>{ee[e]=null});return{c(){t=s("meta"),r=s("meta"),u=s("meta"),p=s("meta"),g=n(),v=s("section"),U=s("div"),E(C.$$.fragment),q=n(),N=s("article"),x=a("HENRI, Cinémathèque française's free VOD platform, offers a range of rare\r\n      cinematic gems from our film collection or presented in partnership with\r\n      directors, distributors, festivals or fellow archives from around the\r\n      world. We list below\r\n      "),R=s("span"),H=a(X),B=a(" films currently on view\r\n      that can be enjoyed by English-speaking audiences."),L=n(),E(z.$$.fragment),W=n(),K=s("ul");for(let e=0;e<ee.length;e+=1)ee[e].c();this.h()},l(e){const s=T('[data-svelte="svelte-1e8lc1k"]',document.head);t=l(s,"META",{property:!0,content:!0}),r=l(s,"META",{property:!0,content:!0}),u=l(s,"META",{property:!0,content:!0}),p=l(s,"META",{property:!0,content:!0}),s.forEach(c),g=f(e),v=l(e,"SECTION",{});var a=i(v);U=l(a,"DIV",{class:!0});var n=i(U);$(C.$$.fragment,n),q=f(n),N=l(n,"ARTICLE",{class:!0});var h=i(N);x=o(h,"HENRI, Cinémathèque française's free VOD platform, offers a range of rare\r\n      cinematic gems from our film collection or presented in partnership with\r\n      directors, distributors, festivals or fellow archives from around the\r\n      world. We list below\r\n      "),R=l(h,"SPAN",{class:!0});var m=i(R);H=o(m,X),m.forEach(c),B=o(h," films currently on view\r\n      that can be enjoyed by English-speaking audiences."),h.forEach(c),L=f(n),$(z.$$.fragment,n),W=f(n),K=l(n,"UL",{class:!0});var d=i(K);for(let e=0;e<ee.length;e+=1)ee[e].l(d);d.forEach(c),n.forEach(c),a.forEach(c),this.h()},h(){document.title="Films in English - HENRI - La Cinémathèque française",h(t,"property","og:url"),h(t,"content","https://www.cinematheque.fr/henri/english"),h(r,"property","og:title"),h(r,"content","Films in English - HENRI - La Cinémathèque française"),h(u,"property","og:image"),h(u,"content","https://www.cinematheque.fr/henri/english.jpg"),h(p,"property","og:description"),h(p,"content","HENRI, Cinémathèque française's free VOD platform, offers a range of rare cinematic gems from our film collection or presented in partnership with directors, distributors, festivals or fellow archives from around the\r\nworld. And some of them can be enjoyed by English-speaking audiences."),h(R,"class","count svelte-ejxa4k"),h(N,"class","svelte-ejxa4k"),h(K,"class","grid"),h(U,"class","container")},m(e,s){d(document.head,t),d(document.head,r),d(document.head,u),d(document.head,p),m(e,g,s),m(e,v,s),d(v,U),y(C,U,null),d(U,q),d(U,N),d(N,x),d(N,R),d(R,H),d(N,B),d(U,L),y(z,U,null),d(U,W),d(U,K);for(let e=0;e<ee.length;e+=1)ee[e].m(K,null);Q=!0},p(e,[t]){(!Q||2&t)&&X!==(X=e[1].length+"")&&w(H,X);const r={};if(!G&&1&t&&(G=!0,r.key=e[0],V(()=>G=!1)),z.$set(r),2&t){let r;for(_=e[1],r=0;r<_.length;r+=1){const s=S(e,_,r);ee[r]?(ee[r].p(s,t),b(ee[r],1)):(ee[r]=J(s),ee[r].c(),b(ee[r],1),ee[r].m(K,null))}for(A(),r=_.length;r<ee.length;r+=1)te(r);k()}},i(e){if(!Q){b(C.$$.fragment,e),b(z.$$.fragment,e);for(let e=0;e<_.length;e+=1)b(ee[e]);Q=!0}},o(e){F(C.$$.fragment,e),F(z.$$.fragment,e),ee=ee.filter(Boolean);for(let e=0;e<ee.length;e+=1)F(ee[e]);Q=!1},d(e){c(t),c(r),c(u),c(p),e&&c(g),e&&c(v),I(C),I(z),D(ee,e)}}}async function Q({params:e,query:t}){let r=await this.fetch("collections-headers.json");if(200===r.status){r=await r.json();return{filmsEn:q(r).map(e=>e.films).flatten().filter(e=>!e.isArchived&&e.en).value()}}this.error(res.status,data.message)}function X(e,t,r){x.locale("en");let{filmsEn:s}=t,a="recent",n={recent:q(s).orderBy([e=>e.datePublishedEn||e.datePublished,"order"],["asc","desc"]).reverse().value(),title:q(s).orderBy(e=>q.kebabCase(e.titreEn||e.titreFr)).value()},l=i(a);function i(e){return n[e]}return e.$set=e=>{"filmsEn"in e&&r(2,s=e.filmsEn)},e.$$.update=()=>{1&e.$$.dirty&&r(1,l=i(a))},[a,l,s,function(e){a=e,r(0,a)}]}export default class extends e{constructor(e){super(),t(this,e,X,K,r,{filmsEn:2})}}export{Q as preload};
