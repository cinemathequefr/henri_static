import{S as e,i as r,s as t,e as s,t as a,a as l,c as i,b as n,d as c,f as o,g as h,h as f,j as d,k as u,l as m,m as v,n as p,o as g,p as E,q as I,r as D,u as F,v as V,w as M,x as w,H as T}from"./client.1db1e11f.js";import{l as b,f as A,a as y,d as $}from"./format.eaaaff95.js";import{M as k}from"./MainTitle.273a4e96.js";function q(e,r,t){const s=e.slice();return s[5]=r[t],s}function H(e,r,t){const s=e.slice();return s[2]=r[t],s}function j(e,r,t){const s=e.slice();return s[1]=r[t],s}function L(e,r,t){const s=e.slice();return s[2]=r[t],s}function U(e){let r,t,p,g,E=e[2].name+"";return{c(){r=s("a"),t=a(E),p=l(),this.h()},l(e){r=i(e,"A",{href:!0});var s=n(r);t=c(s,E),p=o(s),s.forEach(h),this.h()},h(){f(r,"href",g="#"+e[2].slug),d(r,"archived",e[2].isArchived)},m(e,s){u(e,r,s),m(r,t),m(r,p)},p(e,s){1&s&&E!==(E=e[2].name+"")&&v(t,E),1&s&&g!==(g="#"+e[2].slug)&&f(r,"href",g),1&s&&d(r,"archived",e[2].isArchived)},d(e){e&&h(r)}}}function x(e){let r,t,d,v,g,E,I,D,F,V,M,w,$,k,q,H,j,L,U,x,C,N,R,S,G,J,O,P,z,B,K,Q,W,X,Y,Z=A(e[1].artFr,e[1].titreFr)+"",_=y("<div class='sous-titre-fr'>","</div>",e[1].sousTitreFr)+"",ee=e[1].duree+"",re=e[1].realisateurs+"",te=e[1].annee+"",se=y("<div>","</div>",e[1].adaptation)+"",ae=y("<div>Avec ",".</div>",e[1].interpretation)+"",le=y("<div>","</div>",e[1].shortSynopsis||e[1].synopsis)+"",ie=y('<div class="rem">',"</div>",e[1].remarque)+"";return{c(){r=s("div"),t=s("div"),d=s("a"),v=s("img"),I=l(),D=s("div"),F=s("div"),M=l(),$=l(),k=s("div"),q=a(ee),j=l(),L=s("div"),U=s("div"),x=a(re),C=a(", "),N=a(te),R=l(),G=l(),O=l(),z=l(),K=l(),Q=s("a"),W=a("Voir le film"),Y=l(),this.h()},l(e){r=i(e,"DIV",{class:!0});var s=n(r);t=i(s,"DIV",{class:!0});var a=n(t);d=i(a,"A",{rel:!0,href:!0,class:!0});var l=n(d);v=i(l,"IMG",{src:!0,alt:!0}),I=o(l),D=i(l,"DIV",{class:!0});var f=n(D);F=i(f,"DIV",{});var u=n(F);M=o(u),u.forEach(h),f.forEach(h),$=o(l),k=i(l,"DIV",{class:!0});var m=n(k);q=c(m,ee),m.forEach(h),l.forEach(h),a.forEach(h),j=o(s),L=i(s,"DIV",{class:!0});var p=n(L);U=i(p,"DIV",{});var g=n(U);x=c(g,re),C=c(g,", "),N=c(g,te),g.forEach(h),R=o(p),G=o(p),O=o(p),z=o(p),K=o(p),Q=i(p,"A",{class:!0,rel:!0,href:!0});var E=n(Q);W=c(E,"Voir le film"),E.forEach(h),p.forEach(h),Y=o(s),s.forEach(h),this.h()},h(){v.src!==(g=b.isUndefined(e[1].thumb)?`https://www.cinematheque.fr/catalogues/restaurations-tirages-images/images/film/533x400/${e[1].pk}-1.jpg`:""+e[1].thumb)&&f(v,"src",g),f(v,"alt",E=A(e[1].artFr,e[1].titreFr)),V=new T(M),w=new T(null),f(D,"class","pick-title-container"),f(k,"class","duree"),f(d,"rel","prefetch"),f(d,"href",H="film/"+e[1].slug+"/#"),f(d,"class","pick-img"),f(t,"class","pick-img-container"),S=new T(G),J=new T(O),P=new T(z),B=new T(K),f(Q,"class","more"),f(Q,"rel","prefetch"),f(Q,"href",X="film/"+e[1].slug+"/"),f(L,"class","pick-film-info"),f(r,"class","pick")},m(e,s){u(e,r,s),m(r,t),m(t,d),m(d,v),m(d,I),m(d,D),m(D,F),V.m(Z,F),m(F,M),w.m(_,F),m(d,$),m(d,k),m(k,q),m(r,j),m(r,L),m(L,U),m(U,x),m(U,C),m(U,N),m(L,R),S.m(se,L),m(L,G),J.m(ae,L),m(L,O),P.m(le,L),m(L,z),B.m(ie,L),m(L,K),m(L,Q),m(Q,W),m(r,Y)},p:p,d(e){e&&h(r)}}}function C(e){let r,t=e[2].header.stub+"";return{c(){r=s("div"),this.h()},l(e){r=i(e,"DIV",{class:!0}),n(r).forEach(h),this.h()},h(){f(r,"class","stub"),d(r,"archived",e[2].isArchived)},m(e,s){u(e,r,s),r.innerHTML=t},p(e,s){1&s&&t!==(t=e[2].header.stub+"")&&(r.innerHTML=t),1&s&&d(r,"archived",e[2].isArchived)},d(e){e&&h(r)}}}function N(e){let r,t,l,o=$(e[5].dateUnpublished).format("D MMM")+"";return{c(){r=s("div"),t=a("Jusqu'au "),l=a(o),this.h()},l(e){r=i(e,"DIV",{class:!0});var s=n(r);t=c(s,"Jusqu'au "),l=c(s,o),s.forEach(h),this.h()},h(){f(r,"class","end")},m(e,s){u(e,r,s),m(r,t),m(r,l)},p(e,r){1&r&&o!==(o=$(e[5].dateUnpublished).format("D MMM")+"")&&v(l,o)},d(e){e&&h(r)}}}function R(e){let r,t;return{c(){r=s("div"),t=a("Film indisponible"),this.h()},l(e){r=i(e,"DIV",{class:!0});var s=n(r);t=c(s,"Film indisponible"),s.forEach(h),this.h()},h(){f(r,"class","end")},m(e,s){u(e,r,s),m(r,t)},p:p,d(e){e&&h(r)}}}function S(e){let r,t,p,g,E,I,D,F,V,M,w,T,b,$,k,q,H,j,L,U,x=e[5].duree+"",C=`${A(e[5].artFr,e[5].titreFr)}${y("string"==typeof e[5].sousTitreFr?e[5].sousTitreFr[0]===e[5].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[5].sousTitreFr)}`,S=e[5].realisateurs+"",G=e[5].annee+"";function J(e,r){return 3===e[5].status?R:e[5].dateUnpublished?N:void 0}let O=J(e),P=O&&O(e);return{c(){r=s("li"),t=s("a"),p=s("div"),g=s("img"),D=l(),F=s("div"),V=a(x),M=l(),w=s("div"),T=s("div"),b=l(),$=s("div"),k=a(S),q=a(", "),H=a(G),j=l(),P&&P.c(),U=l(),this.h()},l(e){r=i(e,"LI",{class:!0});var s=n(r);t=i(s,"A",{rel:!0,href:!0});var a=n(t);p=i(a,"DIV",{class:!0});var l=n(p);g=i(l,"IMG",{loading:!0,src:!0,alt:!0}),D=o(l),F=i(l,"DIV",{class:!0});var f=n(F);V=c(f,x),f.forEach(h),l.forEach(h),M=o(a),w=i(a,"DIV",{class:!0});var d=n(w);T=i(d,"DIV",{class:!0}),n(T).forEach(h),b=o(d),$=i(d,"DIV",{});var u=n($);k=c(u,S),q=c(u,", "),H=c(u,G),u.forEach(h),j=o(d),P&&P.l(d),d.forEach(h),a.forEach(h),U=o(s),s.forEach(h),this.h()},h(){f(g,"loading","lazy"),g.src!==(E=e[5].thumb)&&f(g,"src",E),f(g,"alt",I=A(e[5].artFr,e[5].titreFr)),f(F,"class","duree"),f(p,"class","img-container"),f(T,"class","titre"),f(w,"class","film-info"),f(t,"rel","prefetch"),f(t,"href",L="film/"+e[5].slug+"/"),f(r,"class","film"),d(r,"archived",e[5].isArchived)},m(e,s){u(e,r,s),m(r,t),m(t,p),m(p,g),m(p,D),m(p,F),m(F,V),m(t,M),m(t,w),m(w,T),T.innerHTML=C,m(w,b),m(w,$),m($,k),m($,q),m($,H),m(w,j),P&&P.m(w,null),m(r,U)},p(e,s){1&s&&g.src!==(E=e[5].thumb)&&f(g,"src",E),1&s&&I!==(I=A(e[5].artFr,e[5].titreFr))&&f(g,"alt",I),1&s&&x!==(x=e[5].duree+"")&&v(V,x),1&s&&C!==(C=`${A(e[5].artFr,e[5].titreFr)}${y("string"==typeof e[5].sousTitreFr?e[5].sousTitreFr[0]===e[5].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[5].sousTitreFr)}`)&&(T.innerHTML=C),1&s&&S!==(S=e[5].realisateurs+"")&&v(k,S),1&s&&G!==(G=e[5].annee+"")&&v(H,G),O===(O=J(e))&&P?P.p(e,s):(P&&P.d(1),P=O&&O(e),P&&(P.c(),P.m(w,null))),1&s&&L!==(L="film/"+e[5].slug+"/")&&f(t,"href",L),1&s&&d(r,"archived",e[5].isArchived)},d(e){e&&h(r),P&&P.d()}}}function G(e){let r,t,p,E,I,D,F,V,M=e[2].name+"",w=e[2].header.stub&&C(e),T=e[2].films,b=[];for(let r=0;r<T.length;r+=1)b[r]=S(q(e,T,r));return{c(){r=s("div"),t=s("h2"),p=a(M),I=l(),w&&w.c(),D=l(),F=s("ul");for(let e=0;e<b.length;e+=1)b[e].c();V=l(),this.h()},l(e){r=i(e,"DIV",{});var s=n(r);t=i(s,"H2",{class:!0,id:!0});var a=n(t);p=c(a,M),a.forEach(h),I=o(s),w&&w.l(s),D=o(s),F=i(s,"UL",{class:!0});var l=n(F);for(let e=0;e<b.length;e+=1)b[e].l(l);l.forEach(h),V=o(s),s.forEach(h),this.h()},h(){f(t,"class","collection"),f(t,"id",E=e[2].slug),d(t,"archived",e[2].isArchived),f(F,"class","grid")},m(e,s){u(e,r,s),m(r,t),m(t,p),m(r,I),w&&w.m(r,null),m(r,D),m(r,F);for(let e=0;e<b.length;e+=1)b[e].m(F,null);m(r,V)},p(e,s){if(1&s&&M!==(M=e[2].name+"")&&v(p,M),1&s&&E!==(E=e[2].slug)&&f(t,"id",E),1&s&&d(t,"archived",e[2].isArchived),e[2].header.stub?w?w.p(e,s):(w=C(e),w.c(),w.m(r,D)):w&&(w.d(1),w=null),1&s){let r;for(T=e[2].films,r=0;r<T.length;r+=1){const t=q(e,T,r);b[r]?b[r].p(t,s):(b[r]=S(t),b[r].c(),b[r].m(F,null))}for(;r<b.length;r+=1)b[r].d(1);b.length=T.length}},d(e){e&&h(r),w&&w.d(),g(b,e)}}}function J(e){let r,t,d,v,p,T,b,A,y,q,C,N,R;A=new k({});let S=e[0],J=[];for(let r=0;r<S.length;r+=1)J[r]=U(L(e,S,r));let O=e[1].length>0&&function(e){let r,t,d,v,p,E,I,D=1===e[1].length?"Le film":"Les films",F=$(e[1][0].datePublished).format("dddd D MMMM")+"",V=e[1],M=[];for(let r=0;r<V.length;r+=1)M[r]=x(j(e,V,r));return{c(){r=s("div"),t=s("div"),d=s("h2"),v=a(D),p=a(" du "),E=a(F),I=l();for(let e=0;e<M.length;e+=1)M[e].c();this.h()},l(e){r=i(e,"DIV",{class:!0});var s=n(r);t=i(s,"DIV",{class:!0});var a=n(t);d=i(a,"H2",{});var l=n(d);v=c(l,D),p=c(l," du "),E=c(l,F),l.forEach(h),a.forEach(h),I=o(s);for(let e=0;e<M.length;e+=1)M[e].l(s);s.forEach(h),this.h()},h(){f(t,"class","pick-label"),f(r,"class","pick-container")},m(e,s){u(e,r,s),m(r,t),m(t,d),m(d,v),m(d,p),m(d,E),m(r,I);for(let e=0;e<M.length;e+=1)M[e].m(r,null)},p(e,t){if(2&t){let s;for(V=e[1],s=0;s<V.length;s+=1){const a=j(e,V,s);M[s]?M[s].p(a,t):(M[s]=x(a),M[s].c(),M[s].m(r,null))}for(;s<M.length;s+=1)M[s].d(1);M.length=V.length}},d(e){e&&h(r),g(M,e)}}}(e),P=e[0],z=[];for(let r=0;r<P.length;r+=1)z[r]=G(H(e,P,r));return{c(){r=s("meta"),t=s("meta"),d=s("meta"),v=s("meta"),p=l(),T=s("section"),b=s("div"),E(A.$$.fragment),y=l(),q=s("div");for(let e=0;e<J.length;e+=1)J[e].c();C=l(),O&&O.c(),N=l();for(let e=0;e<z.length;e+=1)z[e].c();this.h()},l(e){const s=I('[data-svelte="svelte-2kporm"]',document.head);r=i(s,"META",{property:!0,content:!0}),t=i(s,"META",{property:!0,content:!0}),d=i(s,"META",{property:!0,content:!0}),v=i(s,"META",{property:!0,content:!0}),s.forEach(h),p=o(e),T=i(e,"SECTION",{});var a=n(T);b=i(a,"DIV",{class:!0});var l=n(b);D(A.$$.fragment,l),y=o(l),q=i(l,"DIV",{class:!0});var c=n(q);for(let e=0;e<J.length;e+=1)J[e].l(c);c.forEach(h),C=o(l),O&&O.l(l),N=o(l);for(let e=0;e<z.length;e+=1)z[e].l(l);l.forEach(h),a.forEach(h),this.h()},h(){document.title="\r\n    HENRI : Des films rares de la Cinémathèque française à voir en ligne\r\n  ",f(r,"property","og:url"),f(r,"content","https://www.cinematheque.fr/henri/"),f(t,"property","og:title"),f(t,"content","HENRI - Des films rares de la Cinémathèque française à voir en\r\n    ligne"),f(d,"property","og:image"),f(d,"content","https://www.cinematheque.fr/henri/logo-918x480.jpg"),f(v,"property","og:description"),f(v,"content","HENRI, la plateforme VOD de la Cinémathèque française vous propose\r\n    de découvrir gratuitement en ligne des films rares issus de ses collections."),f(q,"class","collections-list"),f(b,"class","container")},m(e,s){m(document.head,r),m(document.head,t),m(document.head,d),m(document.head,v),u(e,p,s),u(e,T,s),m(T,b),F(A,b,null),m(b,y),m(b,q);for(let e=0;e<J.length;e+=1)J[e].m(q,null);m(b,C),O&&O.m(b,null),m(b,N);for(let e=0;e<z.length;e+=1)z[e].m(b,null);R=!0},p(e,[r]){if(1&r){let t;for(S=e[0],t=0;t<S.length;t+=1){const s=L(e,S,t);J[t]?J[t].p(s,r):(J[t]=U(s),J[t].c(),J[t].m(q,null))}for(;t<J.length;t+=1)J[t].d(1);J.length=S.length}if(e[1].length>0&&O.p(e,r),1&r){let t;for(P=e[0],t=0;t<P.length;t+=1){const s=H(e,P,t);z[t]?z[t].p(s,r):(z[t]=G(s),z[t].c(),z[t].m(b,null))}for(;t<z.length;t+=1)z[t].d(1);z.length=P.length}},i(e){R||(V(A.$$.fragment,e),R=!0)},o(e){M(A.$$.fragment,e),R=!1},d(e){h(r),h(t),h(d),h(v),e&&h(p),e&&h(T),w(A),g(J,e),O&&O.d(),g(z,e)}}}async function O({params:e,query:r}){const t=await this.fetch("collections.json");if(200===t.status)return{collections:await t.json()};this.error(t.status,data.message)}function P(e,r,t){$.locale("fr");let{collections:s}=r,a=b(s).map(e=>e.films).flatten().filter(e=>2===e.status&&e.isPick).orderBy(e=>e.order).value();return e.$set=e=>{"collections"in e&&t(0,s=e.collections)},[s,a]}export default class extends e{constructor(e){super(),r(this,e,P,J,t,{collections:0})}}export{O as preload};
