import{S as e,i as t,s,e as r,a,t as n,c as i,b as l,f as c,d as o,g as h,h as f,j as u,k as d,l as m,m as p,o as E,q as g,p as v,r as w,u as I,v as y,w as F,n as T,z as b,H as M}from"./client.cbe465f9.js";import{l as $,f as q,d as D,a as A}from"./format.b34ddf96.js";import{M as V}from"./MainTitle.6368049f.js";function N(e,t,s){const r=e.slice();return r[1]=t[s],r}function R(e){let t,s,r=`${q(e[1].artFr,e[1].titreFr)}${A("string"==typeof e[1].sousTitreFr?e[1].sousTitreFr[0]===e[1].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[1].sousTitreFr)}`;return{c(){s=b(),this.h()},l(e){s=b(),this.h()},h(){t=new M(s)},m(e,a){t.m(r,e,a),d(e,s,a)},p(e,s){1&s&&r!==(r=`${q(e[1].artFr,e[1].titreFr)}${A("string"==typeof e[1].sousTitreFr?e[1].sousTitreFr[0]===e[1].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[1].sousTitreFr)}`)&&t.p(r)},d(e){e&&h(s),e&&t.d()}}}function U(e){let t,s,r=""+q(e[1].artEn,e[1].titreEn);return{c(){s=b(),this.h()},l(e){s=b(),this.h()},h(){t=new M(s)},m(e,a){t.m(r,e,a),d(e,s,a)},p(e,s){1&s&&r!==(r=""+q(e[1].artEn,e[1].titreEn))&&t.p(r)},d(e){e&&h(s),e&&t.d()}}}function C(e){let t,s,a,c=D(e[1].dateUnpublished).format("MMM, D")+"";return{c(){t=r("div"),s=n("Until\r\n                  "),a=n(c),this.h()},l(e){t=i(e,"DIV",{class:!0});var r=l(t);s=o(r,"Until\r\n                  "),a=o(r,c),r.forEach(h),this.h()},h(){f(t,"class","end")},m(e,r){d(e,t,r),m(t,s),m(t,a)},p(e,t){1&t&&c!==(c=D(e[1].dateUnpublished).format("MMM, D")+"")&&p(a,c)},d(e){e&&h(t)}}}function H(e){let t,s,E,g,v,w,I,y,F,T,b,M,$,D,A,V,N,H,j,L,k,x,O,S=e[1].duree+"",z=e[1].realisateurs+"",B=e[1].annee+"",P=e[1].en+"";function G(e,t){return e[1].titreEn?U:R}let J=G(e),K=J(e),Q=e[1].dateUnpublished&&C(e);return{c(){t=r("li"),s=r("a"),E=r("div"),g=r("img"),I=a(),y=r("div"),F=n(S),T=a(),b=r("div"),M=r("div"),K.c(),$=a(),D=r("div"),A=n(z),V=n(", "),N=n(B),H=a(),j=r("div"),L=n(P),k=a(),Q&&Q.c(),O=a(),this.h()},l(e){t=i(e,"LI",{class:!0});var r=l(t);s=i(r,"A",{rel:!0,href:!0});var a=l(s);E=i(a,"DIV",{class:!0});var n=l(E);g=i(n,"IMG",{loading:!0,src:!0,alt:!0}),I=c(n),y=i(n,"DIV",{class:!0});var f=l(y);F=o(f,S),f.forEach(h),n.forEach(h),T=c(a),b=i(a,"DIV",{class:!0});var u=l(b);M=i(u,"DIV",{class:!0});var d=l(M);K.l(d),d.forEach(h),$=c(u),D=i(u,"DIV",{});var m=l(D);A=o(m,z),V=o(m,", "),N=o(m,B),m.forEach(h),H=c(u),j=i(u,"DIV",{class:!0});var p=l(j);L=o(p,P),p.forEach(h),k=c(u),Q&&Q.l(u),u.forEach(h),a.forEach(h),O=c(r),r.forEach(h),this.h()},h(){f(g,"loading","lazy"),g.src!==(v=e[1].thumb)&&f(g,"src",v),f(g,"alt",w=q(e[1].artFr,e[1].titreFr)),f(y,"class","duree"),f(E,"class","img-container"),f(M,"class","titre"),f(j,"class","english-reason svelte-1w90qd8"),f(b,"class","film-info"),f(s,"rel","prefetch"),f(s,"href",x="film/"+e[1].slug+"/"),f(t,"class","film"),u(t,"archived",e[1].isArchived)},m(e,r){d(e,t,r),m(t,s),m(s,E),m(E,g),m(E,I),m(E,y),m(y,F),m(s,T),m(s,b),m(b,M),K.m(M,null),m(b,$),m(b,D),m(D,A),m(D,V),m(D,N),m(b,H),m(b,j),m(j,L),m(b,k),Q&&Q.m(b,null),m(t,O)},p(e,r){1&r&&g.src!==(v=e[1].thumb)&&f(g,"src",v),1&r&&w!==(w=q(e[1].artFr,e[1].titreFr))&&f(g,"alt",w),1&r&&S!==(S=e[1].duree+"")&&p(F,S),J===(J=G(e))&&K?K.p(e,r):(K.d(1),K=J(e),K&&(K.c(),K.m(M,null))),1&r&&z!==(z=e[1].realisateurs+"")&&p(A,z),1&r&&B!==(B=e[1].annee+"")&&p(N,B),1&r&&P!==(P=e[1].en+"")&&p(L,P),e[1].dateUnpublished?Q?Q.p(e,r):(Q=C(e),Q.c(),Q.m(b,null)):Q&&(Q.d(1),Q=null),1&r&&x!==(x="film/"+e[1].slug+"/")&&f(s,"href",x),1&r&&u(t,"archived",e[1].isArchived)},d(e){e&&h(t),K.d(),Q&&Q.d()}}}function j(e){let t,s,u,b,M,$,q,D,A,R,U,C,j,L,k,x,O,S,z,B=e[0].length+"";D=new V({});let P=e[0],G=[];for(let t=0;t<P.length;t+=1)G[t]=H(N(e,P,t));return{c(){t=r("meta"),s=r("meta"),u=r("meta"),b=r("meta"),M=a(),$=r("section"),q=r("div"),E(D.$$.fragment),A=a(),R=r("article"),U=n("HENRI is Cinémathèque française's free and worldwide VOD platform."),C=r("br"),j=a(),L=r("span"),k=n(B),x=n("\r\n      films currently on view are accessible to English-speaking audiences."),O=a(),S=r("ul");for(let e=0;e<G.length;e+=1)G[e].c();this.h()},l(e){const r=g('[data-svelte="svelte-6gqv35"]',document.head);t=i(r,"META",{property:!0,content:!0}),s=i(r,"META",{property:!0,content:!0}),u=i(r,"META",{property:!0,content:!0}),b=i(r,"META",{property:!0,content:!0}),r.forEach(h),M=c(e),$=i(e,"SECTION",{});var a=l($);q=i(a,"DIV",{class:!0});var n=l(q);v(D.$$.fragment,n),A=c(n),R=i(n,"ARTICLE",{class:!0});var f=l(R);U=o(f,"HENRI is Cinémathèque française's free and worldwide VOD platform."),C=i(f,"BR",{}),j=c(f),L=i(f,"SPAN",{class:!0});var d=l(L);k=o(d,B),d.forEach(h),x=o(f,"\r\n      films currently on view are accessible to English-speaking audiences."),f.forEach(h),O=c(n),S=i(n,"UL",{class:!0});var m=l(S);for(let e=0;e<G.length;e+=1)G[e].l(m);m.forEach(h),n.forEach(h),a.forEach(h),this.h()},h(){document.title="HENRI in English - HENRI - La Cinémathèque française",f(t,"property","og:url"),f(t,"content","https://www.cinematheque.fr/henri/"),f(s,"property","og:title"),f(s,"content","HENRI in English - HENRI - La Cinémathèque française"),f(u,"property","og:image"),f(u,"content","https://www.cinematheque.fr/henri/logo-918x480.jpg"),f(b,"property","og:description"),f(b,"content","A list of the films currently on view on HENRI that are accessible to English-speaking audiences."),f(L,"class","count svelte-1w90qd8"),f(R,"class","svelte-1w90qd8"),f(S,"class","grid"),f(q,"class","container")},m(e,r){m(document.head,t),m(document.head,s),m(document.head,u),m(document.head,b),d(e,M,r),d(e,$,r),m($,q),w(D,q,null),m(q,A),m(q,R),m(R,U),m(R,C),m(R,j),m(R,L),m(L,k),m(R,x),m(q,O),m(q,S);for(let e=0;e<G.length;e+=1)G[e].m(S,null);z=!0},p(e,[t]){if((!z||1&t)&&B!==(B=e[0].length+"")&&p(k,B),1&t){let s;for(P=e[0],s=0;s<P.length;s+=1){const r=N(e,P,s);G[s]?G[s].p(r,t):(G[s]=H(r),G[s].c(),G[s].m(S,null))}for(;s<G.length;s+=1)G[s].d(1);G.length=P.length}},i(e){z||(I(D.$$.fragment,e),z=!0)},o(e){y(D.$$.fragment,e),z=!1},d(e){h(t),h(s),h(u),h(b),e&&h(M),e&&h($),F(D),T(G,e)}}}async function L({params:e,query:t}){let s=await this.fetch("collections-headers.json");if(200===s.status){s=await s.json();return{filmsEn:$(s).map(e=>e.films).flatten().filter(e=>!e.isArchived&&e.en).orderBy(e=>e.datePublished).reverse().value()}}this.error(res.status,data.message)}function k(e,t,s){D.locale("en");let{filmsEn:r}=t;return e.$set=e=>{"filmsEn"in e&&s(0,r=e.filmsEn)},[r]}export default class extends e{constructor(e){super(),t(this,e,k,j,s,{filmsEn:0})}}export{L as preload};