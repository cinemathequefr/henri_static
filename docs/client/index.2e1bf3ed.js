import{S as e,i as r,s as t,e as s,t as a,a as l,c as i,b as n,d as c,f as o,g as h,h as d,j as f,k as u,l as m,m as p,n as v,o as g,q as E,p as F,r as D,u as I,v as M,w,H as b,x as V}from"./client.f9adb984.js";import{l as y,d as T,f as A,a as k}from"./format.b34ddf96.js";import"./dayjs_custom_locale_fr.260e95ab.js";import{M as H}from"./MainTitle.69353287.js";function $(e,r,t){const s=e.slice();return s[5]=r[t],s}function j(e,r,t){const s=e.slice();return s[2]=r[t],s}function q(e,r,t){const s=e.slice();return s[1]=r[t],s}function L(e,r,t){const s=e.slice();return s[2]=r[t],s}function U(e){let r,t,v,g,E=e[2].name+"";return{c(){r=s("a"),t=a(E),v=l(),this.h()},l(e){r=i(e,"A",{href:!0});var s=n(r);t=c(s,E),v=o(s),s.forEach(h),this.h()},h(){d(r,"href",g="#"+e[2].slug),f(r,"archived",e[2].isArchived)},m(e,s){u(e,r,s),m(r,t),m(r,v)},p(e,s){1&s&&E!==(E=e[2].name+"")&&p(t,E),1&s&&g!==(g="#"+e[2].slug)&&d(r,"href",g),1&s&&f(r,"archived",e[2].isArchived)},d(e){e&&h(r)}}}function x(e){let r,t,f,g,E,F,D,I=1===e[1].length?"Le film":"Les films",M=T(e[1][0].datePublished).format("dddd D MMMM")+"",w=e[1],b=[];for(let r=0;r<w.length;r+=1)b[r]=C(q(e,w,r));return{c(){r=s("div"),t=s("div"),f=s("h2"),g=a(I),E=a("\r\n            du\r\n            "),F=a(M),D=l();for(let e=0;e<b.length;e+=1)b[e].c();this.h()},l(e){r=i(e,"DIV",{class:!0});var s=n(r);t=i(s,"DIV",{class:!0});var a=n(t);f=i(a,"H2",{});var l=n(f);g=c(l,I),E=c(l,"\r\n            du\r\n            "),F=c(l,M),l.forEach(h),a.forEach(h),D=o(s);for(let e=0;e<b.length;e+=1)b[e].l(s);s.forEach(h),this.h()},h(){d(t,"class","pick-label"),d(r,"class","pick-container")},m(e,s){u(e,r,s),m(r,t),m(t,f),m(f,g),m(f,E),m(f,F),m(r,D);for(let e=0;e<b.length;e+=1)b[e].m(r,null)},p(e,t){if(2&t&&I!==(I=1===e[1].length?"Le film":"Les films")&&p(g,I),2&t&&M!==(M=T(e[1][0].datePublished).format("dddd D MMMM")+"")&&p(F,M),2&t){let s;for(w=e[1],s=0;s<w.length;s+=1){const a=q(e,w,s);b[s]?b[s].p(a,t):(b[s]=C(a),b[s].c(),b[s].m(r,null))}for(;s<b.length;s+=1)b[s].d(1);b.length=w.length}},d(e){e&&h(r),v(b,e)}}}function C(e){let r,t,f,v,g,E,F,D,I,M,w,V,T,H,$,j,q,L,U,x,C,N,P,S,R,_,G,J,O,z,B,K,Q,W,X,Y=A(e[1].artFr,e[1].titreFr)+"",Z=k("<div class='sous-titre-fr'>","</div>",e[1].sousTitreFr)+"",ee=e[1].duree+"",re=e[1].realisateurs+"",te=e[1].annee+"",se=k("<div>","</div>",e[1].adaptation)+"",ae=k("<div>Avec ",".</div>",e[1].interpretation)+"",le=k("<div>","</div>",e[1].shortSynopsis||e[1].synopsis)+"",ie=k('<div class="rem">',"</div>",e[1].remarque)+"";return{c(){r=s("div"),t=s("div"),f=s("a"),v=s("img"),F=l(),D=s("div"),I=s("div"),w=l(),T=l(),H=s("div"),$=a(ee),q=l(),L=s("div"),U=s("div"),x=a(re),C=a(", "),N=a(te),P=l(),R=l(),G=l(),O=l(),B=l(),K=s("a"),Q=a("Voir le film"),X=l(),this.h()},l(e){r=i(e,"DIV",{class:!0});var s=n(r);t=i(s,"DIV",{class:!0});var a=n(t);f=i(a,"A",{rel:!0,href:!0,class:!0});var l=n(f);v=i(l,"IMG",{src:!0,alt:!0}),F=o(l),D=i(l,"DIV",{class:!0});var d=n(D);I=i(d,"DIV",{});var u=n(I);w=o(u),u.forEach(h),d.forEach(h),T=o(l),H=i(l,"DIV",{class:!0});var m=n(H);$=c(m,ee),m.forEach(h),l.forEach(h),a.forEach(h),q=o(s),L=i(s,"DIV",{class:!0});var p=n(L);U=i(p,"DIV",{});var g=n(U);x=c(g,re),C=c(g,", "),N=c(g,te),g.forEach(h),P=o(p),R=o(p),G=o(p),O=o(p),B=o(p),K=i(p,"A",{class:!0,rel:!0,href:!0});var E=n(K);Q=c(E,"Voir le film"),E.forEach(h),p.forEach(h),X=o(s),s.forEach(h),this.h()},h(){v.src!==(g=y.isUndefined(e[1].thumb)?`https://www.cinematheque.fr/catalogues/restaurations-tirages-images/images/film/533x400/${e[1].pk}-1.jpg`:""+e[1].thumb)&&d(v,"src",g),d(v,"alt",E=A(e[1].artFr,e[1].titreFr)),M=new b(w),V=new b(null),d(D,"class","pick-title-container"),d(H,"class","duree"),d(f,"rel","prefetch"),d(f,"href",j="film/"+e[1].slug+"/"),d(f,"class","pick-img"),d(t,"class","pick-img-container"),S=new b(R),_=new b(G),J=new b(O),z=new b(B),d(K,"class","more"),d(K,"rel","prefetch"),d(K,"href",W="film/"+e[1].slug+"/"),d(L,"class","pick-film-info"),d(r,"class","pick")},m(e,s){u(e,r,s),m(r,t),m(t,f),m(f,v),m(f,F),m(f,D),m(D,I),M.m(Y,I),m(I,w),V.m(Z,I),m(f,T),m(f,H),m(H,$),m(r,q),m(r,L),m(L,U),m(U,x),m(U,C),m(U,N),m(L,P),S.m(se,L),m(L,R),_.m(ae,L),m(L,G),J.m(le,L),m(L,O),z.m(ie,L),m(L,B),m(L,K),m(K,Q),m(r,X)},p(e,r){2&r&&v.src!==(g=y.isUndefined(e[1].thumb)?`https://www.cinematheque.fr/catalogues/restaurations-tirages-images/images/film/533x400/${e[1].pk}-1.jpg`:""+e[1].thumb)&&d(v,"src",g),2&r&&E!==(E=A(e[1].artFr,e[1].titreFr))&&d(v,"alt",E),2&r&&Y!==(Y=A(e[1].artFr,e[1].titreFr)+"")&&M.p(Y),2&r&&Z!==(Z=k("<div class='sous-titre-fr'>","</div>",e[1].sousTitreFr)+"")&&V.p(Z),2&r&&ee!==(ee=e[1].duree+"")&&p($,ee),2&r&&j!==(j="film/"+e[1].slug+"/")&&d(f,"href",j),2&r&&re!==(re=e[1].realisateurs+"")&&p(x,re),2&r&&te!==(te=e[1].annee+"")&&p(N,te),2&r&&se!==(se=k("<div>","</div>",e[1].adaptation)+"")&&S.p(se),2&r&&ae!==(ae=k("<div>Avec ",".</div>",e[1].interpretation)+"")&&_.p(ae),2&r&&le!==(le=k("<div>","</div>",e[1].shortSynopsis||e[1].synopsis)+"")&&J.p(le),2&r&&ie!==(ie=k('<div class="rem">',"</div>",e[1].remarque)+"")&&z.p(ie),2&r&&W!==(W="film/"+e[1].slug+"/")&&d(K,"href",W)},d(e){e&&h(r)}}}function N(e){let r,t=e[2].header.stub+"";return{c(){r=s("div"),this.h()},l(e){r=i(e,"DIV",{class:!0}),n(r).forEach(h),this.h()},h(){d(r,"class","stub"),f(r,"archived",e[2].isArchived)},m(e,s){u(e,r,s),r.innerHTML=t},p(e,s){1&s&&t!==(t=e[2].header.stub+"")&&(r.innerHTML=t),1&s&&f(r,"archived",e[2].isArchived)},d(e){e&&h(r)}}}function P(e){let r,t,l,o=T(e[5].dateUnpublished).format("D MMM")+"";return{c(){r=s("div"),t=a("Jusqu'au\r\n                      "),l=a(o),this.h()},l(e){r=i(e,"DIV",{class:!0});var s=n(r);t=c(s,"Jusqu'au\r\n                      "),l=c(s,o),s.forEach(h),this.h()},h(){d(r,"class","end")},m(e,s){u(e,r,s),m(r,t),m(r,l)},p(e,r){1&r&&o!==(o=T(e[5].dateUnpublished).format("D MMM")+"")&&p(l,o)},d(e){e&&h(r)}}}function S(e){let r,t;return{c(){r=s("div"),t=a("Film indisponible"),this.h()},l(e){r=i(e,"DIV",{class:!0});var s=n(r);t=c(s,"Film indisponible"),s.forEach(h),this.h()},h(){d(r,"class","end")},m(e,s){u(e,r,s),m(r,t)},p:V,d(e){e&&h(r)}}}function R(e){let r,t,v,g,E,F,D,I,M,w,b,V,y,T,H,$,j,q,L,U,x=e[5].duree+"",C=`${A(e[5].artFr,e[5].titreFr)}${k("string"==typeof e[5].sousTitreFr?e[5].sousTitreFr[0]===e[5].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[5].sousTitreFr)}`,N=e[5].realisateurs+"",R=e[5].annee+"";function _(e,r){return 3===e[5].status?S:e[5].dateUnpublished?P:void 0}let G=_(e),J=G&&G(e);return{c(){r=s("li"),t=s("a"),v=s("div"),g=s("img"),D=l(),I=s("div"),M=a(x),w=l(),b=s("div"),V=s("div"),y=l(),T=s("div"),H=a(N),$=a(", "),j=a(R),q=l(),J&&J.c(),U=l(),this.h()},l(e){r=i(e,"LI",{class:!0});var s=n(r);t=i(s,"A",{rel:!0,href:!0});var a=n(t);v=i(a,"DIV",{class:!0});var l=n(v);g=i(l,"IMG",{loading:!0,src:!0,alt:!0}),D=o(l),I=i(l,"DIV",{class:!0});var d=n(I);M=c(d,x),d.forEach(h),l.forEach(h),w=o(a),b=i(a,"DIV",{class:!0});var f=n(b);V=i(f,"DIV",{class:!0}),n(V).forEach(h),y=o(f),T=i(f,"DIV",{});var u=n(T);H=c(u,N),$=c(u,", "),j=c(u,R),u.forEach(h),q=o(f),J&&J.l(f),f.forEach(h),a.forEach(h),U=o(s),s.forEach(h),this.h()},h(){d(g,"loading","lazy"),g.src!==(E=e[5].thumb)&&d(g,"src",E),d(g,"alt",F=A(e[5].artFr,e[5].titreFr)),d(I,"class","duree"),d(v,"class","img-container"),d(V,"class","titre"),d(b,"class","film-info"),d(t,"rel","prefetch"),d(t,"href",L="film/"+e[5].slug+"/"),d(r,"class","film"),f(r,"archived",e[5].isArchived)},m(e,s){u(e,r,s),m(r,t),m(t,v),m(v,g),m(v,D),m(v,I),m(I,M),m(t,w),m(t,b),m(b,V),V.innerHTML=C,m(b,y),m(b,T),m(T,H),m(T,$),m(T,j),m(b,q),J&&J.m(b,null),m(r,U)},p(e,s){1&s&&g.src!==(E=e[5].thumb)&&d(g,"src",E),1&s&&F!==(F=A(e[5].artFr,e[5].titreFr))&&d(g,"alt",F),1&s&&x!==(x=e[5].duree+"")&&p(M,x),1&s&&C!==(C=`${A(e[5].artFr,e[5].titreFr)}${k("string"==typeof e[5].sousTitreFr?e[5].sousTitreFr[0]===e[5].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[5].sousTitreFr)}`)&&(V.innerHTML=C),1&s&&N!==(N=e[5].realisateurs+"")&&p(H,N),1&s&&R!==(R=e[5].annee+"")&&p(j,R),G===(G=_(e))&&J?J.p(e,s):(J&&J.d(1),J=G&&G(e),J&&(J.c(),J.m(b,null))),1&s&&L!==(L="film/"+e[5].slug+"/")&&d(t,"href",L),1&s&&f(r,"archived",e[5].isArchived)},d(e){e&&h(r),J&&J.d()}}}function _(e){let r,t,g,E,F,D,I,M,w=e[2].name+"",b=e[2].header.stub&&N(e),V=e[2].films,y=[];for(let r=0;r<V.length;r+=1)y[r]=R($(e,V,r));return{c(){r=s("div"),t=s("h2"),g=a(w),F=l(),b&&b.c(),D=l(),I=s("ul");for(let e=0;e<y.length;e+=1)y[e].c();M=l(),this.h()},l(e){r=i(e,"DIV",{});var s=n(r);t=i(s,"H2",{class:!0,id:!0});var a=n(t);g=c(a,w),a.forEach(h),F=o(s),b&&b.l(s),D=o(s),I=i(s,"UL",{class:!0});var l=n(I);for(let e=0;e<y.length;e+=1)y[e].l(l);l.forEach(h),M=o(s),s.forEach(h),this.h()},h(){d(t,"class","collection"),d(t,"id",E=e[2].slug),f(t,"archived",e[2].isArchived),d(I,"class","grid")},m(e,s){u(e,r,s),m(r,t),m(t,g),m(r,F),b&&b.m(r,null),m(r,D),m(r,I);for(let e=0;e<y.length;e+=1)y[e].m(I,null);m(r,M)},p(e,s){if(1&s&&w!==(w=e[2].name+"")&&p(g,w),1&s&&E!==(E=e[2].slug)&&d(t,"id",E),1&s&&f(t,"archived",e[2].isArchived),e[2].header.stub?b?b.p(e,s):(b=N(e),b.c(),b.m(r,D)):b&&(b.d(1),b=null),1&s){let r;for(V=e[2].films,r=0;r<V.length;r+=1){const t=$(e,V,r);y[r]?y[r].p(t,s):(y[r]=R(t),y[r].c(),y[r].m(I,null))}for(;r<y.length;r+=1)y[r].d(1);y.length=V.length}},d(e){e&&h(r),b&&b.d(),v(y,e)}}}function G(e){let r,t,a,c,f,p,b,V,y,T,A,k,$,q;y=new H({});let C=e[0],N=[];for(let r=0;r<C.length;r+=1)N[r]=U(L(e,C,r));let P=e[1].length>0&&x(e),S=e[0],R=[];for(let r=0;r<S.length;r+=1)R[r]=_(j(e,S,r));return{c(){r=s("meta"),t=s("meta"),a=s("meta"),c=s("meta"),f=l(),p=s("section"),b=s("div"),V=s("h1"),g(y.$$.fragment),T=l(),A=s("div");for(let e=0;e<N.length;e+=1)N[e].c();k=l(),P&&P.c(),$=l();for(let e=0;e<R.length;e+=1)R[e].c();this.h()},l(e){const s=E('[data-svelte="svelte-2kporm"]',document.head);r=i(s,"META",{property:!0,content:!0}),t=i(s,"META",{property:!0,content:!0}),a=i(s,"META",{property:!0,content:!0}),c=i(s,"META",{property:!0,content:!0}),s.forEach(h),f=o(e),p=i(e,"SECTION",{});var l=n(p);b=i(l,"DIV",{class:!0});var d=n(b);V=i(d,"H1",{class:!0});var u=n(V);F(y.$$.fragment,u),u.forEach(h),T=o(d),A=i(d,"DIV",{class:!0});var m=n(A);for(let e=0;e<N.length;e+=1)N[e].l(m);m.forEach(h),k=o(d),P&&P.l(d),$=o(d);for(let e=0;e<R.length;e+=1)R[e].l(d);d.forEach(h),l.forEach(h),this.h()},h(){document.title="\r\n    HENRI : Des films rares de la Cinémathèque française à voir en ligne\r\n  ",d(r,"property","og:url"),d(r,"content","https://www.cinematheque.fr/henri/"),d(t,"property","og:title"),d(t,"content","HENRI - Des films rares de la Cinémathèque française à voir en\r\n    ligne"),d(a,"property","og:image"),d(a,"content","https://www.cinematheque.fr/henri/logo-918x480.jpg"),d(c,"property","og:description"),d(c,"content","HENRI, la plateforme VOD de la Cinémathèque française vous propose\r\n    de découvrir gratuitement en ligne des films rares issus de ses collections."),d(V,"class","svelte-14mm8il"),d(A,"class","collections-list"),d(b,"class","container")},m(e,s){m(document.head,r),m(document.head,t),m(document.head,a),m(document.head,c),u(e,f,s),u(e,p,s),m(p,b),m(b,V),D(y,V,null),m(b,T),m(b,A);for(let e=0;e<N.length;e+=1)N[e].m(A,null);m(b,k),P&&P.m(b,null),m(b,$);for(let e=0;e<R.length;e+=1)R[e].m(b,null);q=!0},p(e,[r]){if(1&r){let t;for(C=e[0],t=0;t<C.length;t+=1){const s=L(e,C,t);N[t]?N[t].p(s,r):(N[t]=U(s),N[t].c(),N[t].m(A,null))}for(;t<N.length;t+=1)N[t].d(1);N.length=C.length}if(e[1].length>0?P?P.p(e,r):(P=x(e),P.c(),P.m(b,$)):P&&(P.d(1),P=null),1&r){let t;for(S=e[0],t=0;t<S.length;t+=1){const s=j(e,S,t);R[t]?R[t].p(s,r):(R[t]=_(s),R[t].c(),R[t].m(b,null))}for(;t<R.length;t+=1)R[t].d(1);R.length=S.length}},i(e){q||(I(y.$$.fragment,e),q=!0)},o(e){M(y.$$.fragment,e),q=!1},d(e){h(r),h(t),h(a),h(c),e&&h(f),e&&h(p),w(y),v(N,e),P&&P.d(),v(R,e)}}}async function J({params:e,query:r}){let t=await this.fetch("collections-headers.json");if(200===t.status){t=await t.json();let e=y(t).map(e=>e.films).flatten().filter(e=>!e.isArchived&&e.isPick).orderBy(e=>e.order).map(e=>e.slug).value();return e=await Promise.all(y(e).map(async e=>{let r=await this.fetch(`film/${e}.json`);return r.status>=400?null:await r.json()}).value()),e=y.compact(e),{collectionsHeaders:t,pick:e}}this.error(res.status,data.message)}function O(e,r,t){T.locale("fr");let{collectionsHeaders:s}=r,{pick:a}=r;return e.$set=e=>{"collectionsHeaders"in e&&t(0,s=e.collectionsHeaders),"pick"in e&&t(1,a=e.pick)},[s,a]}export default class extends e{constructor(e){super(),r(this,e,O,G,t,{collectionsHeaders:0,pick:1})}}export{J as preload};