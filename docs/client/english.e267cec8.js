import{S as e,i as t,s as r,e as s,t as a,a as n,c as l,b as i,d as o,g as c,f,h,j as u,k as d,l as m,z as p,x as v,A as g,m as E,o as y,q as $,p as w,r as b,u as T,v as I,w as k,n as F,B as D,C as M,D as j,E as A,H as U}from"./client.5c6f40f9.js";import{l as V,f as C,d as N,a as q}from"./format.b34ddf96.js";import{M as x}from"./MainTitle.25186648.js";function R(e){let t,r,E,y,$,w,b,T;return{c(){t=s("div"),r=s("button"),E=a("Title A-Z"),y=n(),$=s("button"),w=a("Recently added"),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=i(t);r=l(s,"BUTTON",{class:!0});var a=i(r);E=o(a,"Title A-Z"),a.forEach(c),y=f(s),$=l(s,"BUTTON",{class:!0});var n=i($);w=o(n,"Recently added"),n.forEach(c),s.forEach(c),this.h()},h(){h(r,"class","svelte-zv7mfi"),u(r,"on","title"===e[0]),h($,"class","svelte-zv7mfi"),u($,"on","recent"===e[0]),h(t,"class","svelte-zv7mfi")},m(s,a){d(s,t,a),m(t,r),m(r,E),m(t,y),m(t,$),m($,w),b||(T=[p(r,"click",e[1]),p($,"click",e[2])],b=!0)},p(e,[t]){1&t&&u(r,"on","title"===e[0]),1&t&&u($,"on","recent"===e[0])},i:v,o:v,d(e){e&&c(t),b=!1,g(T)}}}function H(e,t,r){let{key:s="recent"}=t;return e.$set=e=>{"key"in e&&r(0,s=e.key)},e.$$.update=()=>{1&e.$$.dirty&&r(0,s)},[s,()=>{r(0,s="title")},()=>{r(0,s="recent")}]}class B extends e{constructor(e){super(),t(this,e,H,R,r,{key:0})}}function L(e,t,r){const s=e.slice();return s[6]=t[r],s}function O(e){let t,r,s=`${C(e[6].artFr,e[6].titreFr)}${q("string"==typeof e[6].sousTitreFr?e[6].sousTitreFr[0]===e[6].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[6].sousTitreFr)}`;return{c(){r=A(),this.h()},l(e){r=A(),this.h()},h(){t=new U(r)},m(e,a){t.m(s,e,a),d(e,r,a)},p(e,r){2&r&&s!==(s=`${C(e[6].artFr,e[6].titreFr)}${q("string"==typeof e[6].sousTitreFr?e[6].sousTitreFr[0]===e[6].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[6].sousTitreFr)}`)&&t.p(s)},d(e){e&&c(r),e&&t.d()}}}function z(e){let t,r,s=""+C(e[6].artEn,e[6].titreEn);return{c(){r=A(),this.h()},l(e){r=A(),this.h()},h(){t=new U(r)},m(e,a){t.m(s,e,a),d(e,r,a)},p(e,r){2&r&&s!==(s=""+C(e[6].artEn,e[6].titreEn))&&t.p(s)},d(e){e&&c(r),e&&t.d()}}}function S(e){let t,r,n,f=N(e[6].dateUnpublished).format("MMM, D")+"";return{c(){t=s("div"),r=a("Until\r\n                  "),n=a(f),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=i(t);r=o(s,"Until\r\n                  "),n=o(s,f),s.forEach(c),this.h()},h(){h(t,"class","end")},m(e,s){d(e,t,s),m(t,r),m(t,n)},p(e,t){2&t&&f!==(f=N(e[6].dateUnpublished).format("MMM, D")+"")&&E(n,f)},d(e){e&&c(t)}}}function P(e){let t,r,u,p,v,g,y,$,w,b,T,I,k,F,D,M,j,A,U,V,N,q,x,R=e[6].duree+"",H=e[6].realisateurs+"",B=e[6].annee+"",L=e[6].en+"";function P(e,t){return e[6].titreEn?z:O}let W=P(e),Z=W(e),G=e[6].dateUnpublished&&S(e);return{c(){t=s("li"),r=s("a"),u=s("div"),p=s("img"),y=n(),$=s("div"),w=a(R),b=n(),T=s("div"),I=s("div"),Z.c(),k=n(),F=s("div"),D=a(H),M=a(", "),j=a(B),A=n(),U=s("div"),V=a(L),N=n(),G&&G.c(),x=n(),this.h()},l(e){t=l(e,"LI",{class:!0});var s=i(t);r=l(s,"A",{rel:!0,href:!0});var a=i(r);u=l(a,"DIV",{class:!0});var n=i(u);p=l(n,"IMG",{src:!0,alt:!0}),y=f(n),$=l(n,"DIV",{class:!0});var h=i($);w=o(h,R),h.forEach(c),n.forEach(c),b=f(a),T=l(a,"DIV",{class:!0});var d=i(T);I=l(d,"DIV",{class:!0});var m=i(I);Z.l(m),m.forEach(c),k=f(d),F=l(d,"DIV",{});var v=i(F);D=o(v,H),M=o(v,", "),j=o(v,B),v.forEach(c),A=f(d),U=l(d,"DIV",{class:!0});var g=i(U);V=o(g,L),g.forEach(c),N=f(d),G&&G.l(d),d.forEach(c),a.forEach(c),x=f(s),s.forEach(c),this.h()},h(){p.src!==(v=e[6].thumb)&&h(p,"src",v),h(p,"alt",g=C(e[6].artFr,e[6].titreFr)),h($,"class","duree"),h(u,"class","img-container"),h(I,"class","titre"),h(U,"class","english-reason svelte-ejxa4k"),h(T,"class","film-info"),h(r,"rel","prefetch"),h(r,"href",q="film/"+e[6].slug+"/"),h(t,"class","film")},m(e,s){d(e,t,s),m(t,r),m(r,u),m(u,p),m(u,y),m(u,$),m($,w),m(r,b),m(r,T),m(T,I),Z.m(I,null),m(T,k),m(T,F),m(F,D),m(F,M),m(F,j),m(T,A),m(T,U),m(U,V),m(T,N),G&&G.m(T,null),m(t,x)},p(e,t){2&t&&p.src!==(v=e[6].thumb)&&h(p,"src",v),2&t&&g!==(g=C(e[6].artFr,e[6].titreFr))&&h(p,"alt",g),2&t&&R!==(R=e[6].duree+"")&&E(w,R),W===(W=P(e))&&Z?Z.p(e,t):(Z.d(1),Z=W(e),Z&&(Z.c(),Z.m(I,null))),2&t&&H!==(H=e[6].realisateurs+"")&&E(D,H),2&t&&B!==(B=e[6].annee+"")&&E(j,B),2&t&&L!==(L=e[6].en+"")&&E(V,L),e[6].dateUnpublished?G?G.p(e,t):(G=S(e),G.c(),G.m(T,null)):G&&(G.d(1),G=null),2&t&&q!==(q="film/"+e[6].slug+"/")&&h(r,"href",q)},d(e){e&&c(t),Z.d(),G&&G.d()}}}function W(e){let t,r,u,p,v,g,A,U,V,C,N,q,R,H,O,z,S,W,Z,G,J=e[1].length+"";function K(t){e[3].call(null,t)}U=new x({props:{lang:"en"}});let Q={};void 0!==e[0]&&(Q.key=e[0]),z=new B({props:Q}),D.push(()=>M(z,"key",K));let X=e[1],Y=[];for(let t=0;t<X.length;t+=1)Y[t]=P(L(e,X,t));return{c(){t=s("meta"),r=s("meta"),u=s("meta"),p=s("meta"),v=n(),g=s("section"),A=s("div"),y(U.$$.fragment),V=n(),C=s("article"),N=a("HENRI, Cinémathèque française's free VOD platform, offers a range of rare\r\n      cinematic gems from our film collection or presented in partnership with\r\n      directors, distributors, festivals or fellow archives from around the\r\n      world. We list below\r\n      "),q=s("span"),R=a(J),H=a(" films currently on view\r\n      that can be enjoyed by English-speaking audiences."),O=n(),y(z.$$.fragment),W=n(),Z=s("ul");for(let e=0;e<Y.length;e+=1)Y[e].c();this.h()},l(e){const s=$('[data-svelte="svelte-39mlqw"]',document.head);t=l(s,"META",{property:!0,content:!0}),r=l(s,"META",{property:!0,content:!0}),u=l(s,"META",{property:!0,content:!0}),p=l(s,"META",{property:!0,content:!0}),s.forEach(c),v=f(e),g=l(e,"SECTION",{});var a=i(g);A=l(a,"DIV",{class:!0});var n=i(A);w(U.$$.fragment,n),V=f(n),C=l(n,"ARTICLE",{class:!0});var h=i(C);N=o(h,"HENRI, Cinémathèque française's free VOD platform, offers a range of rare\r\n      cinematic gems from our film collection or presented in partnership with\r\n      directors, distributors, festivals or fellow archives from around the\r\n      world. We list below\r\n      "),q=l(h,"SPAN",{class:!0});var d=i(q);R=o(d,J),d.forEach(c),H=o(h," films currently on view\r\n      that can be enjoyed by English-speaking audiences."),h.forEach(c),O=f(n),w(z.$$.fragment,n),W=f(n),Z=l(n,"UL",{class:!0});var m=i(Z);for(let e=0;e<Y.length;e+=1)Y[e].l(m);m.forEach(c),n.forEach(c),a.forEach(c),this.h()},h(){document.title="HENRI in English - HENRI - La Cinémathèque française",h(t,"property","og:url"),h(t,"content","https://www.cinematheque.fr/henri/"),h(r,"property","og:title"),h(r,"content","Films for English speakers - HENRI - La Cinémathèque française"),h(u,"property","og:image"),h(u,"content","https://www.cinematheque.fr/henri/logo-918x480.jpg"),h(p,"property","og:description"),h(p,"content","A list of the films currently on view on HENRI that are accessible to English-speaking audiences."),h(q,"class","count svelte-ejxa4k"),h(C,"class","svelte-ejxa4k"),h(Z,"class","grid"),h(A,"class","container")},m(e,s){m(document.head,t),m(document.head,r),m(document.head,u),m(document.head,p),d(e,v,s),d(e,g,s),m(g,A),b(U,A,null),m(A,V),m(A,C),m(C,N),m(C,q),m(q,R),m(C,H),m(A,O),b(z,A,null),m(A,W),m(A,Z);for(let e=0;e<Y.length;e+=1)Y[e].m(Z,null);G=!0},p(e,[t]){(!G||2&t)&&J!==(J=e[1].length+"")&&E(R,J);const r={};if(!S&&1&t&&(S=!0,r.key=e[0],j(()=>S=!1)),z.$set(r),2&t){let r;for(X=e[1],r=0;r<X.length;r+=1){const s=L(e,X,r);Y[r]?Y[r].p(s,t):(Y[r]=P(s),Y[r].c(),Y[r].m(Z,null))}for(;r<Y.length;r+=1)Y[r].d(1);Y.length=X.length}},i(e){G||(T(U.$$.fragment,e),T(z.$$.fragment,e),G=!0)},o(e){I(U.$$.fragment,e),I(z.$$.fragment,e),G=!1},d(e){c(t),c(r),c(u),c(p),e&&c(v),e&&c(g),k(U),k(z),F(Y,e)}}}async function Z({params:e,query:t}){let r=await this.fetch("collections-headers.json");if(200===r.status){r=await r.json();return{filmsEn:V(r).map(e=>e.films).flatten().filter(e=>!e.isArchived&&e.en).value()}}this.error(res.status,data.message)}function G(e,t,r){N.locale("en");let{filmsEn:s}=t,a="recent",n={recent:V(s).orderBy(e=>e.datePublished).reverse().value(),title:V(s).orderBy(e=>V.kebabCase(e.titreEn||e.titreFr)).value()},l=i(a);function i(e){return n[e]}return e.$set=e=>{"filmsEn"in e&&r(2,s=e.filmsEn)},e.$$.update=()=>{1&e.$$.dirty&&r(1,l=i(a))},[a,l,s,function(e){a=e,r(0,a)}]}export default class extends e{constructor(e){super(),t(this,e,G,W,r,{filmsEn:2})}}export{Z as preload};
