import{S as e,i as t,s as r,a as s,c as a,b as l,d as i,e as n,f as o,g as c,n as h,l as f,h as u,t as d,j as p,k as m,m as g,o as v,p as b,q as w,r as E,u as M,v as $,w as D,x as T,y,z as I,A as F,B as V,C as A,H as k,D as S}from"./client.8a323165.js";import{d as j,P as x}from"./PictoAge.a98babe9.js";import"./dayjs_custom_locale_fr.b7076d40.js";import{M as P}from"./MainTitle.8b7a19e3.js";import{f as q}from"./format.8f4473bb.js";function z(e){let t,r,f;return{c(){t=s("svg"),r=s("path"),f=s("path"),this.h()},l(e){t=a(e,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0},1);var s=l(t);r=a(s,"path",{fill:!0,d:!0},1),l(r).forEach(i),f=a(s,"path",{fill:!0,d:!0},1),l(f).forEach(i),s.forEach(i),this.h()},h(){n(r,"fill",e[0]),n(r,"d","M95.906 121.003c6.903 0 12.5-5.597 12.5-12.5V51.511c0-6.904-5.597-12.5-12.5-12.5s-12.5 5.596-12.5 12.5v56.993c0 6.903 5.597 12.499 12.5 12.499zM95.909 127.807c-3.29 0-6.521 1.33-8.841 3.66-2.329 2.32-3.659 5.54-3.659 8.83s1.33 6.52 3.659 8.84c2.32 2.33 5.551 3.66 8.841 3.66s6.51-1.33 8.84-3.66c2.319-2.32 3.66-5.55 3.66-8.84s-1.341-6.51-3.66-8.83a12.581 12.581 0 00-8.84-3.66z"),n(f,"fill",e[0]),n(f,"d","M95.906 0C43.024 0 0 43.023 0 95.906s43.023 95.906 95.906 95.906 95.905-43.023 95.905-95.906S148.789 0 95.906 0zm0 176.812C51.294 176.812 15 140.518 15 95.906S51.294 15 95.906 15c44.611 0 80.905 36.294 80.905 80.906s-36.293 80.906-80.905 80.906z"),n(t,"xmlns","http://www.w3.org/2000/svg"),n(t,"viewBox","0 0 191.812 191.812"),n(t,"width",e[1]),n(t,"height",e[1])},m(e,s){o(e,t,s),c(t,r),c(t,f)},p(e,[s]){1&s&&n(r,"fill",e[0]),1&s&&n(f,"fill",e[0]),2&s&&n(t,"width",e[1]),2&s&&n(t,"height",e[1])},i:h,o:h,d(e){e&&i(t)}}}function L(e,t,r){let{color:s="#ffffff"}=t,{size:a=32}=t;return e.$$set=e=>{"color"in e&&r(0,s=e.color),"size"in e&&r(1,a=e.size)},[s,a]}class U extends e{constructor(e){super(),t(this,e,L,z,r,{color:0,size:1})}}var N=function(e){e.preventDefault();const t=e.currentTarget,r=new URL(t.href).hash.replace("#",""),s=document.getElementById(r);window.scrollTo({top:s.offsetTop,behavior:"smooth"}),history.pushState({top:s.offsetTop},null,`#${r}`)};const{window:C}=A;function H(e,t,r){const s=e.slice();return s[5]=t[r],s}function Y(e,t,r){const s=e.slice();return s[8]=t[r],s}function B(e,t,r){const s=e.slice();return s[3]=t[r],s}function R(e,t,r){const s=e.slice();return s[5]=t[r],s}function _(e){let t,r,s,h,f,b,w=e[5].section+"";return{c(){t=u("a"),r=u("span"),s=d(w),this.h()},l(e){t=a(e,"A",{href:!0});var n=l(t);r=a(n,"SPAN",{});var o=l(r);s=p(o,w),o.forEach(i),n.forEach(i),this.h()},h(){n(t,"href",h="#"+e[5].slug),m(t,"archived",0===e[5].countPublished)},m(e,a){o(e,t,a),c(t,r),c(r,s),f||(b=g(t,"click",N),f=!0)},p(e,r){2&r&&w!==(w=e[5].section+"")&&v(s,w),2&r&&h!==(h="#"+e[5].slug)&&n(t,"href",h),2&r&&m(t,"archived",0===e[5].countPublished)},d(e){e&&i(t),f=!1,b()}}}function G(e){let t,r,s,h,f,m,g,M,$,D=1===e[3].length?"Le film":"Les films",y=j(e[3][0].datePublished).format("dddd D MMMM").replace(" 1 "," 1<sup>er</sup> ")+"",V=e[3],A=[];for(let t=0;t<V.length;t+=1)A[t]=J(B(e,V,t));let x=e[2].dateNextPublication&&O(e);return{c(){t=u("div"),r=u("div"),s=u("h2"),h=d(D),f=d("\r\n            du\r\n            "),g=b();for(let e=0;e<A.length;e+=1)A[e].c();M=b(),x&&x.c(),this.h()},l(e){t=a(e,"DIV",{class:!0});var n=l(t);r=a(n,"DIV",{class:!0});var o=l(r);s=a(o,"H2",{});var c=l(s);h=p(c,D),f=p(c,"\r\n            du\r\n            "),c.forEach(i),o.forEach(i),g=w(n);for(let e=0;e<A.length;e+=1)A[e].l(n);M=w(n),x&&x.l(n),n.forEach(i),this.h()},h(){m=new k(null),n(r,"class","pick-label"),n(t,"class","pick-container")},m(e,a){o(e,t,a),c(t,r),c(r,s),c(s,h),c(s,f),m.m(y,s),c(t,g);for(let e=0;e<A.length;e+=1)A[e].m(t,null);c(t,M),x&&x.m(t,null),$=!0},p(e,r){if((!$||8&r)&&D!==(D=1===e[3].length?"Le film":"Les films")&&v(h,D),(!$||8&r)&&y!==(y=j(e[3][0].datePublished).format("dddd D MMMM").replace(" 1 "," 1<sup>er</sup> ")+"")&&m.p(y),8&r){let s;for(V=e[3],s=0;s<V.length;s+=1){const a=B(e,V,s);A[s]?A[s].p(a,r):(A[s]=J(a),A[s].c(),A[s].m(t,M))}for(;s<A.length;s+=1)A[s].d(1);A.length=V.length}e[2].dateNextPublication?x?(x.p(e,r),4&r&&E(x,1)):(x=O(e),x.c(),E(x,1),x.m(t,null)):x&&(S(),T(x,1,1,(()=>{x=null})),I())},i(e){$||(E(x),$=!0)},o(e){T(x),$=!1},d(e){e&&i(t),F(A,e),x&&x.d()}}}function J(e){let t,r,s,h,m,g,E,M,$,D,T,y,I,F,V,A,S,j,x,P,z,L,U,N,C,H,Y,B,R,_,G,J,O=q.artTitre(e[3].artFr,e[3].titreFr)+"",K=q.beforeAfterStr("<div class='sous-titre-fr'>","</div>",e[3].sousTitreFr)+"",Q=e[3].duree+"",W=e[3].realisateurs+"",X=e[3].annee+"",Z=q.beforeAfterStr("<div>","</div>",e[3].adaptation)+"",ee=q.beforeAfterStr("<div>Avec ",".</div>",e[3].interpretation)+"",te=q.beforeAfterStr("<div>","</div>",e[3].shortSynopsis||e[3].synopsis)+"";return{c(){t=u("div"),r=u("div"),s=u("a"),h=u("img"),E=b(),M=u("div"),$=u("div"),T=b(),I=b(),F=u("div"),V=d(Q),S=b(),j=u("div"),x=u("div"),P=d(W),z=d(", "),L=d(X),U=b(),C=b(),Y=b(),R=b(),_=u("a"),G=d("Voir le film"),this.h()},l(e){t=a(e,"DIV",{class:!0});var n=l(t);r=a(n,"DIV",{class:!0});var o=l(r);s=a(o,"A",{rel:!0,href:!0,class:!0});var c=l(s);h=a(c,"IMG",{src:!0,alt:!0}),E=w(c),M=a(c,"DIV",{class:!0});var f=l(M);$=a(f,"DIV",{});var u=l($);T=w(u),u.forEach(i),f.forEach(i),I=w(c),F=a(c,"DIV",{class:!0});var d=l(F);V=p(d,Q),d.forEach(i),c.forEach(i),o.forEach(i),S=w(n),j=a(n,"DIV",{class:!0});var m=l(j);x=a(m,"DIV",{});var g=l(x);P=p(g,W),z=p(g,", "),L=p(g,X),g.forEach(i),U=w(m),C=w(m),Y=w(m),R=w(m),_=a(m,"A",{class:!0,rel:!0,href:!0});var v=l(_);G=p(v,"Voir le film"),v.forEach(i),m.forEach(i),n.forEach(i),this.h()},h(){h.src!==(m=f.isUndefined(e[3].thumb)?`https://www.cinematheque.fr/catalogues/restaurations-tirages-images/images/film/533x400/${e[3].pk}-1.jpg`:`${e[3].thumb}`)&&n(h,"src",m),n(h,"alt",g=q.artTitre(e[3].artFr,e[3].titreFr)),D=new k(T),y=new k(null),n(M,"class","pick-title-container"),n(F,"class","duree"),n(s,"rel","prefetch"),n(s,"href",A="film/"+e[3].slug+"/"),n(s,"class","pick-img"),n(r,"class","pick-img-container"),N=new k(C),H=new k(Y),B=new k(R),n(_,"class","more"),n(_,"rel","prefetch"),n(_,"href",J="film/"+e[3].slug+"/"),n(j,"class","pick-film-info"),n(t,"class","pick")},m(e,a){o(e,t,a),c(t,r),c(r,s),c(s,h),c(s,E),c(s,M),c(M,$),D.m(O,$),c($,T),y.m(K,$),c(s,I),c(s,F),c(F,V),c(t,S),c(t,j),c(j,x),c(x,P),c(x,z),c(x,L),c(j,U),N.m(Z,j),c(j,C),H.m(ee,j),c(j,Y),B.m(te,j),c(j,R),c(j,_),c(_,G)},p(e,t){8&t&&h.src!==(m=f.isUndefined(e[3].thumb)?`https://www.cinematheque.fr/catalogues/restaurations-tirages-images/images/film/533x400/${e[3].pk}-1.jpg`:`${e[3].thumb}`)&&n(h,"src",m),8&t&&g!==(g=q.artTitre(e[3].artFr,e[3].titreFr))&&n(h,"alt",g),8&t&&O!==(O=q.artTitre(e[3].artFr,e[3].titreFr)+"")&&D.p(O),8&t&&K!==(K=q.beforeAfterStr("<div class='sous-titre-fr'>","</div>",e[3].sousTitreFr)+"")&&y.p(K),8&t&&Q!==(Q=e[3].duree+"")&&v(V,Q),8&t&&A!==(A="film/"+e[3].slug+"/")&&n(s,"href",A),8&t&&W!==(W=e[3].realisateurs+"")&&v(P,W),8&t&&X!==(X=e[3].annee+"")&&v(L,X),8&t&&Z!==(Z=q.beforeAfterStr("<div>","</div>",e[3].adaptation)+"")&&N.p(Z),8&t&&ee!==(ee=q.beforeAfterStr("<div>Avec ",".</div>",e[3].interpretation)+"")&&H.p(ee),8&t&&te!==(te=q.beforeAfterStr("<div>","</div>",e[3].shortSynopsis||e[3].synopsis)+"")&&B.p(te),8&t&&J!==(J="film/"+e[3].slug+"/")&&n(_,"href",J)},d(e){e&&i(t)}}}function O(e){let t,r,s,h,f,m,g,v=j(e[2].dateNextPublication).format("dddd D MMMM").replace(" 1 "," 1<sup>er</sup> ")+"";return r=new U({props:{color:"#ff4256",size:"16"}}),{c(){t=u("div"),M(r.$$.fragment),s=b(),h=u("span"),f=d("Le prochain film sera mis en ligne le\r\n              "),this.h()},l(e){t=a(e,"DIV",{class:!0});var n=l(t);$(r.$$.fragment,n),s=w(n),h=a(n,"SPAN",{});var o=l(h);f=p(o,"Le prochain film sera mis en ligne le\r\n              "),o.forEach(i),n.forEach(i),this.h()},h(){m=new k(null),n(t,"class","date-next-publication")},m(e,a){o(e,t,a),D(r,t,null),c(t,s),c(t,h),c(h,f),m.m(v,h),g=!0},p(e,t){(!g||4&t)&&v!==(v=j(e[2].dateNextPublication).format("dddd D MMMM").replace(" 1 "," 1<sup>er</sup> ")+"")&&m.p(v)},i(e){g||(E(r.$$.fragment,e),g=!0)},o(e){T(r.$$.fragment,e),g=!1},d(e){e&&i(t),y(r)}}}function K(e){let t,r=(e[5].stub||"")+"";return{c(){t=u("div"),this.h()},l(e){t=a(e,"DIV",{class:!0}),l(t).forEach(i),this.h()},h(){n(t,"class","stub"),m(t,"archived",0===e[5].countPublished)},m(e,s){o(e,t,s),t.innerHTML=r},p(e,s){2&s&&r!==(r=(e[5].stub||"")+"")&&(t.innerHTML=r),2&s&&m(t,"archived",0===e[5].countPublished)},d(e){e&&i(t)}}}function Q(e){let t,r,s,h=j(e[8].dateUnpublished).format(j().year()<j(e[8].dateUnpublished).year()?"D MMM YYYY":"D MMM")+"";return{c(){t=u("div"),r=d("Jusqu'au\r\n                    "),s=d(h),this.h()},l(e){t=a(e,"DIV",{class:!0});var n=l(t);r=p(n,"Jusqu'au\r\n                    "),s=p(n,h),n.forEach(i),this.h()},h(){n(t,"class","end")},m(e,a){o(e,t,a),c(t,r),c(t,s)},p(e,t){2&t&&h!==(h=j(e[8].dateUnpublished).format(j().year()<j(e[8].dateUnpublished).year()?"D MMM YYYY":"D MMM")+"")&&v(s,h)},d(e){e&&i(t)}}}function W(e){let t,r;return{c(){t=u("div"),r=d("Film indisponible"),this.h()},l(e){t=a(e,"DIV",{class:!0});var s=l(t);r=p(s,"Film indisponible"),s.forEach(i),this.h()},h(){n(t,"class","end")},m(e,s){o(e,t,s),c(t,r)},p:h,d(e){e&&i(t)}}}function X(e){let t,r,s,h,f,g,I,F,V,A,S,j,P,z,L,U,N,C,H,Y,B,R,_,G=e[8].duree+"",J=`${q.artTitre(e[8].artFr,e[8].titreFr)}${q.beforeAfterStr("string"==typeof e[8].sousTitreFr?e[8].sousTitreFr[0]===e[8].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[8].sousTitreFr)}`,O=e[8].realisateurs+"",K=e[8].annee+"";function X(e,t){return 3===e[8].status?W:e[8].dateUnpublished?Q:void 0}L=new x({props:{age:e[8].ageMin,size:"20"}});let Z=X(e),ee=Z&&Z(e);return{c(){t=u("li"),r=u("a"),s=u("div"),h=u("img"),I=b(),F=u("div"),V=d(G),A=b(),S=u("div"),j=u("div"),z=b(),M(L.$$.fragment),U=b(),N=u("div"),C=d(O),H=d(", "),Y=d(K),B=b(),ee&&ee.c(),this.h()},l(e){t=a(e,"LI",{class:!0});var n=l(t);r=a(n,"A",{rel:!0,href:!0});var o=l(r);s=a(o,"DIV",{class:!0});var c=l(s);h=a(c,"IMG",{loading:!0,src:!0,alt:!0}),I=w(c),F=a(c,"DIV",{class:!0});var f=l(F);V=p(f,G),f.forEach(i),c.forEach(i),A=w(o),S=a(o,"DIV",{class:!0});var u=l(S);j=a(u,"DIV",{class:!0});var d=l(j);z=w(d),$(L.$$.fragment,d),d.forEach(i),U=w(u),N=a(u,"DIV",{});var m=l(N);C=p(m,O),H=p(m,", "),Y=p(m,K),m.forEach(i),B=w(u),ee&&ee.l(u),u.forEach(i),o.forEach(i),n.forEach(i),this.h()},h(){n(h,"loading","lazy"),h.src!==(f=e[8].thumb)&&n(h,"src",f),n(h,"alt",g=q.artTitre(e[8].artFr,e[8].titreFr)),n(F,"class","duree"),n(s,"class","img-container"),P=new k(z),n(j,"class","titre"),n(S,"class","film-info"),n(r,"rel","prefetch"),n(r,"href",R="film/"+e[8].slug+"/"),n(t,"class","film"),m(t,"ispick",1===e[8].status),m(t,"archived",3===e[8].status)},m(e,a){o(e,t,a),c(t,r),c(r,s),c(s,h),c(s,I),c(s,F),c(F,V),c(r,A),c(r,S),c(S,j),P.m(J,j),c(j,z),D(L,j,null),c(S,U),c(S,N),c(N,C),c(N,H),c(N,Y),c(S,B),ee&&ee.m(S,null),_=!0},p(e,s){(!_||2&s&&h.src!==(f=e[8].thumb))&&n(h,"src",f),(!_||2&s&&g!==(g=q.artTitre(e[8].artFr,e[8].titreFr)))&&n(h,"alt",g),(!_||2&s)&&G!==(G=e[8].duree+"")&&v(V,G),(!_||2&s)&&J!==(J=`${q.artTitre(e[8].artFr,e[8].titreFr)}${q.beforeAfterStr("string"==typeof e[8].sousTitreFr?e[8].sousTitreFr[0]===e[8].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[8].sousTitreFr)}`)&&P.p(J);const a={};2&s&&(a.age=e[8].ageMin),L.$set(a),(!_||2&s)&&O!==(O=e[8].realisateurs+"")&&v(C,O),(!_||2&s)&&K!==(K=e[8].annee+"")&&v(Y,K),Z===(Z=X(e))&&ee?ee.p(e,s):(ee&&ee.d(1),ee=Z&&Z(e),ee&&(ee.c(),ee.m(S,null))),(!_||2&s&&R!==(R="film/"+e[8].slug+"/"))&&n(r,"href",R),2&s&&m(t,"ispick",1===e[8].status),2&s&&m(t,"archived",3===e[8].status)},i(e){_||(E(L.$$.fragment,e),_=!0)},o(e){T(L.$$.fragment,e),_=!1},d(e){e&&i(t),y(L),ee&&ee.d()}}}function Z(e){let t,r,s,h,f,g,M,$,D,y=e[5].section+"",V=e[5].stub&&K(e),A=e[5].films,k=[];for(let t=0;t<A.length;t+=1)k[t]=X(Y(e,A,t));const j=e=>T(k[e],1,1,(()=>{k[e]=null}));return{c(){t=u("div"),r=u("h2"),s=d(y),f=b(),V&&V.c(),g=b(),M=u("ul");for(let e=0;e<k.length;e+=1)k[e].c();$=b(),this.h()},l(e){t=a(e,"DIV",{});var n=l(t);r=a(n,"H2",{class:!0,id:!0});var o=l(r);s=p(o,y),o.forEach(i),f=w(n),V&&V.l(n),n.forEach(i),g=w(e),M=a(e,"UL",{class:!0});var c=l(M);for(let e=0;e<k.length;e+=1)k[e].l(c);$=w(c),c.forEach(i),this.h()},h(){n(r,"class","collection"),n(r,"id",h=e[5].slug),m(r,"archived",0===e[5].countPublished),n(M,"class","grid")},m(e,a){o(e,t,a),c(t,r),c(r,s),c(t,f),V&&V.m(t,null),o(e,g,a),o(e,M,a);for(let e=0;e<k.length;e+=1)k[e].m(M,null);c(M,$),D=!0},p(e,a){if((!D||2&a)&&y!==(y=e[5].section+"")&&v(s,y),(!D||2&a&&h!==(h=e[5].slug))&&n(r,"id",h),2&a&&m(r,"archived",0===e[5].countPublished),e[5].stub?V?V.p(e,a):(V=K(e),V.c(),V.m(t,null)):V&&(V.d(1),V=null),2&a){let t;for(A=e[5].films,t=0;t<A.length;t+=1){const r=Y(e,A,t);k[t]?(k[t].p(r,a),E(k[t],1)):(k[t]=X(r),k[t].c(),E(k[t],1),k[t].m(M,$))}for(S(),t=A.length;t<k.length;t+=1)j(t);I()}},i(e){if(!D){for(let e=0;e<A.length;e+=1)E(k[e]);D=!0}},o(e){k=k.filter(Boolean);for(let e=0;e<k.length;e+=1)T(k[e]);D=!1},d(e){e&&i(t),V&&V.d(),e&&i(g),e&&i(M),F(k,e)}}}function ee(e){let t,r,s,h,f,d,p,m,v,A,k,j,x,q,z,L;v=new P({props:{count:e[0]}});let U=e[1],N=[];for(let t=0;t<U.length;t+=1)N[t]=_(R(e,U,t));let Y=e[3].length>0&&G(e),B=e[1],J=[];for(let t=0;t<B.length;t+=1)J[t]=Z(H(e,B,t));const O=e=>T(J[e],1,1,(()=>{J[e]=null}));return{c(){t=u("meta"),r=u("meta"),s=u("meta"),h=u("meta"),f=b(),d=u("section"),p=u("div"),m=u("h1"),M(v.$$.fragment),A=b(),k=u("div");for(let e=0;e<N.length;e+=1)N[e].c();j=b(),Y&&Y.c(),x=b();for(let e=0;e<J.length;e+=1)J[e].c();this.h()},l(e){const n=V('[data-svelte="svelte-1weqqqq"]',document.head);t=a(n,"META",{property:!0,content:!0}),r=a(n,"META",{property:!0,content:!0}),s=a(n,"META",{property:!0,content:!0}),h=a(n,"META",{property:!0,content:!0}),n.forEach(i),f=w(e),d=a(e,"SECTION",{});var o=l(d);p=a(o,"DIV",{class:!0});var c=l(p);m=a(c,"H1",{class:!0});var u=l(m);$(v.$$.fragment,u),u.forEach(i),A=w(c),k=a(c,"DIV",{class:!0});var g=l(k);for(let e=0;e<N.length;e+=1)N[e].l(g);g.forEach(i),j=w(c),Y&&Y.l(c),x=w(c);for(let e=0;e<J.length;e+=1)J[e].l(c);c.forEach(i),o.forEach(i),this.h()},h(){document.title="\r\n    HENRI : Des films rares de la Cinémathèque française à voir en ligne\r\n  ",n(t,"property","og:url"),n(t,"content","https://www.cinematheque.fr/henri/"),n(r,"property","og:title"),n(r,"content","HENRI - Des films rares de la Cinémathèque française à voir en ligne"),n(s,"property","og:image"),n(s,"content","https://www.cinematheque.fr/henri/logo-918x480.jpg"),n(h,"property","og:description"),n(h,"content","HENRI, la plateforme VOD de la Cinémathèque française vous propose\r\n    de découvrir gratuitement en ligne des films rares issus de ses collections."),n(m,"class","main-title"),n(k,"class","collections-list"),n(p,"class","container")},m(a,l){c(document.head,t),c(document.head,r),c(document.head,s),c(document.head,h),o(a,f,l),o(a,d,l),c(d,p),c(p,m),D(v,m,null),c(p,A),c(p,k);for(let e=0;e<N.length;e+=1)N[e].m(k,null);c(p,j),Y&&Y.m(p,null),c(p,x);for(let e=0;e<J.length;e+=1)J[e].m(p,null);q=!0,z||(L=g(C,"popstate",e[4]),z=!0)},p(e,[t]){const r={};if(1&t&&(r.count=e[0]),v.$set(r),2&t){let r;for(U=e[1],r=0;r<U.length;r+=1){const s=R(e,U,r);N[r]?N[r].p(s,t):(N[r]=_(s),N[r].c(),N[r].m(k,null))}for(;r<N.length;r+=1)N[r].d(1);N.length=U.length}if(e[3].length>0?Y?(Y.p(e,t),8&t&&E(Y,1)):(Y=G(e),Y.c(),E(Y,1),Y.m(p,x)):Y&&(S(),T(Y,1,1,(()=>{Y=null})),I()),2&t){let r;for(B=e[1],r=0;r<B.length;r+=1){const s=H(e,B,r);J[r]?(J[r].p(s,t),E(J[r],1)):(J[r]=Z(s),J[r].c(),E(J[r],1),J[r].m(p,null))}for(S(),r=B.length;r<J.length;r+=1)O(r);I()}},i(e){if(!q){E(v.$$.fragment,e),E(Y);for(let e=0;e<B.length;e+=1)E(J[e]);q=!0}},o(e){T(v.$$.fragment,e),T(Y),J=J.filter(Boolean);for(let e=0;e<J.length;e+=1)T(J[e]);q=!1},d(e){i(t),i(r),i(s),i(h),e&&i(f),e&&i(d),y(v),F(N,e),Y&&Y.d(),F(J,e),z=!1,L()}}}async function te({params:e,query:t}){this.fetch("pick.json");let r=await(await this.fetch("count.json")).json(),s=await(await this.fetch("global.json")).json(),a=await this.fetch("headers.json");if(200===a.status){return a=await a.json(),{count:r,headers:a,pick:await Promise.all(f(a).map((e=>e.films)).flatten().filter((e=>1===e.status)).orderBy((e=>e.order)).map((async e=>{let t=await this.fetch(`film/${e.slug}.json`);if(t.status>=400)return null;let r=await t.json();return f({}).assign(e,f(r).pick(["section","synopsis","shortSynopsis","interpretation","adaptation"]).value()).value()})).value()),globalData:s}}this.error(res.status,data.message)}function re(e,t,r){j.locale("fr");let{count:s}=t,{headers:a}=t,{pick:l}=t,{globalData:i}=t;return e.$$set=e=>{"count"in e&&r(0,s=e.count),"headers"in e&&r(1,a=e.headers),"pick"in e&&r(3,l=e.pick),"globalData"in e&&r(2,i=e.globalData)},[s,a,i,l,e=>{window.scrollTo({top:e.state&&e.state.top||0,behavior:"smooth"})}]}export default class extends e{constructor(e){super(),t(this,e,re,ee,r,{count:0,headers:1,pick:3,globalData:2})}}export{te as preload};
