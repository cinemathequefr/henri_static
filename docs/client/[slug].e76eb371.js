import{S as e,i as t,s,y as i,z as r,k as a,e as l,t as n,b as c,c as o,d,h as m,f as u,g as h,j as p,A as f,l as v,B as g,C as E,D as w,E as b,v as y,w as $,p as F,r as k,u as I,x as V,m as q,H as x,o as C,q as D,F as A,G as M}from"./client.6a0f9918.js";import{f as T,a as P,_ as H,d as N}from"./format.a6af0c31.js";function R(e){let t,s=!e[3]&&U(e);return{c(){s&&s.c(),t=r()},l(e){s&&s.l(e),t=r()},m(e,i){s&&s.m(e,i),a(e,t,i)},p(e,i){e[3]?s&&(s.d(1),s=null):s?s.p(e,i):((s=U(e)).c(),s.m(t.parentNode,t))},d(e){s&&s.d(e),e&&u(t)}}}function U(e){let t,s,i,r,w,b,y,$,F,k,I,V,q,x,C,D,A;return{c(){t=l("div"),s=l("div"),i=n("Ce film comporte des images susceptibles de heurter la sensibilité de\r\n          certains spectateurs. Pour cette raison, il est déconseillé aux moins\r\n          de 16 ans."),r=c(),w=l("div"),b=l("label"),y=l("input"),$=c(),F=l("span"),k=c(),I=l("label"),V=n("Je confirme avoir pris connaissance de l'avertissement accompagnant\r\n            la diffusion de ce film."),q=c(),x=l("button"),C=n("Voir le film"),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=d(t);s=o(a,"DIV",{class:!0});var l=d(s);i=m(l,"Ce film comporte des images susceptibles de heurter la sensibilité de\r\n          certains spectateurs. Pour cette raison, il est déconseillé aux moins\r\n          de 16 ans."),l.forEach(u),r=h(a),w=o(a,"DIV",{class:!0});var n=d(w);b=o(n,"LABEL",{class:!0});var c=d(b);y=o(c,"INPUT",{id:!0,type:!0,class:!0}),$=h(c),F=o(c,"SPAN",{class:!0}),d(F).forEach(u),c.forEach(u),k=h(n),I=o(n,"LABEL",{class:!0,for:!0});var p=d(I);V=m(p,"Je confirme avoir pris connaissance de l'avertissement accompagnant\r\n            la diffusion de ce film."),p.forEach(u),n.forEach(u),q=h(a),x=o(a,"BUTTON",{disabled:!0,class:!0});var f=d(x);C=m(f,"Voir le film"),f.forEach(u),a.forEach(u),this.h()},h(){p(s,"class","restrict-message svelte-y73eq5"),p(y,"id","check"),p(y,"type","checkbox"),p(y,"class","svelte-y73eq5"),p(F,"class","checkbox-custom svelte-y73eq5"),p(b,"class","checkbox-container svelte-y73eq5"),p(I,"class","checkbox-label svelte-y73eq5"),p(I,"for","check"),p(w,"class","restrict-agree svelte-y73eq5"),x.disabled=D=!e[2],p(x,"class","svelte-y73eq5"),p(t,"class","restrict svelte-y73eq5"),f(t,"is-pick",e[1])},m(l,n,c){a(l,t,n),v(t,s),v(s,i),v(t,r),v(t,w),v(w,b),v(b,y),y.checked=e[2],v(b,$),v(b,F),v(w,k),v(w,I),v(I,V),v(t,q),v(t,x),v(x,C),c&&g(A),A=[E(y,"change",e[7]),E(x,"click",e[4])]},p(e,s){4&s&&(y.checked=e[2]),4&s&&D!==(D=!e[2])&&(x.disabled=D),2&s&&f(t,"is-pick",e[1])},d(e){e&&u(t),g(A)}}}function j(e){let t,s,r;const n=e[6].default,m=i(n,e,e[5],null);let f=e[0]&&R(e);return{c(){t=l("div"),m&&m.c(),s=c(),f&&f.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);m&&m.l(i),s=h(i),f&&f.l(i),i.forEach(u),this.h()},h(){p(t,"class","restrict-container svelte-y73eq5")},m(e,i){a(e,t,i),m&&m.m(t,null),v(t,s),f&&f.m(t,null),r=!0},p(e,[s]){m&&m.p&&32&s&&m.p(w(n,e,e[5],null),b(n,e[5],s,null)),e[0]?f?f.p(e,s):((f=R(e)).c(),f.m(t,null)):f&&(f.d(1),f=null)},i(e){r||(y(m,e),r=!0)},o(e){$(m,e),r=!1},d(e){e&&u(t),m&&m.d(e),f&&f.d()}}}function L(e,t,s){let{isRestricted:i=!1}=t,{isPick:r=!1}=t,a=!1,l=!1;let{$$slots:n={},$$scope:c}=t;return e.$set=(e=>{"isRestricted"in e&&s(0,i=e.isRestricted),"isPick"in e&&s(1,r=e.isPick),"$$scope"in e&&s(5,c=e.$$scope)}),[i,r,a,l,function(){s(3,l=!0)},c,n,function(){a=this.checked,s(2,a)}]}class B extends e{constructor(e){super(),t(this,e,L,j,s,{isRestricted:0,isPick:1})}}function S(e,t,s){const i=e.slice();return i[2]=t[s],i}function J(e){let t,s;const i=new B({props:{isRestricted:e[0].restrict,isPick:e[0].isPick,$$slots:{default:[O]},$$scope:{ctx:e}}});return{c(){t=l("div"),F(i.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var s=d(t);k(i.$$.fragment,s),s.forEach(u),this.h()},h(){p(t,"class","video-wrapper")},m(e,r){a(e,t,r),I(i,t,null),s=!0},p(e,t){const s={};1&t&&(s.isRestricted=e[0].restrict),1&t&&(s.isPick=e[0].isPick),33&t&&(s.$$scope={dirty:t,ctx:e}),i.$set(s)},i(e){s||(y(i.$$.fragment,e),s=!0)},o(e){$(i.$$.fragment,e),s=!1},d(e){e&&u(t),V(i)}}}function O(e){let t,s,i,r;return{c(){t=l("div"),s=l("iframe"),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);s=o(i,"IFRAME",{title:!0,sandbox:!0,src:!0,frameborder:!0,allow:!0,allowfullscreen:!0}),d(s).forEach(u),i.forEach(u),this.h()},h(){p(s,"title",i=T(e[0].artFr,e[0].titreFr)),p(s,"sandbox","allow-same-origin allow-scripts allow-popups"),s.src!==(r="https://player.vimeo.com/video/"+e[0].vimeo+"?color=7db3af")&&p(s,"src",r),p(s,"frameborder","0"),p(s,"allow","fullscreen"),s.allowFullscreen=!0,p(t,"class","video-container")},m(e,i){a(e,t,i),v(t,s)},p(e,t){1&t&&i!==(i=T(e[0].artFr,e[0].titreFr))&&p(s,"title",i),1&t&&s.src!==(r="https://player.vimeo.com/video/"+e[0].vimeo+"?color=7db3af")&&p(s,"src",r)},d(e){e&&u(t)}}}function z(e){let t,s,i,r=N(e[0].dateUnpublished).format("dddd D MMMM, HH[h]mm")+"";return{c(){t=l("div"),s=n("Film disponible jusqu'au "),i=n(r),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=d(t);s=m(a,"Film disponible jusqu'au "),i=m(a,r),a.forEach(u),this.h()},h(){p(t,"class","end")},m(e,r){a(e,t,r),v(t,s),v(t,i)},p(e,t){1&t&&r!==(r=N(e[0].dateUnpublished).format("dddd D MMMM, HH[h]mm")+"")&&q(i,r)},d(e){e&&u(t)}}}function G(e){let t,s,i=T(e[0].artVo,e[0].titreVo)+"";return{c(){t=l("div"),s=n(i),this.h()},l(e){t=o(e,"DIV",{class:!0});var r=d(t);s=m(r,i),r.forEach(u),this.h()},h(){p(t,"class","titre-vo colored")},m(e,i){a(e,t,i),v(t,s)},p(e,t){1&t&&i!==(i=T(e[0].artVo,e[0].titreVo)+"")&&q(s,i)},d(e){e&&u(t)}}}function K(e){let t,s,i,r=e[0].titreNx+"",f=e[0].titreVo&&Q(e);return{c(){t=l("div"),s=n(r),i=c(),f&&f.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=d(t);s=m(a,r),i=h(a),f&&f.l(a),a.forEach(u),this.h()},h(){p(t,"class","titre-vo colored")},m(e,r){a(e,t,r),v(t,s),v(t,i),f&&f.m(t,null)},p(e,i){1&i&&r!==(r=e[0].titreNx+"")&&q(s,r),e[0].titreVo?f?f.p(e,i):((f=Q(e)).c(),f.m(t,null)):f&&(f.d(1),f=null)},d(e){e&&u(t),f&&f.d()}}}function Q(e){let t,s,i,r=T(e[0].artVo,e[0].titreVo)+"";return{c(){t=n("["),s=n(r),i=n("]")},l(e){t=m(e,"["),s=m(e,r),i=m(e,"]")},m(e,r){a(e,t,r),a(e,s,r),a(e,i,r)},p(e,t){1&t&&r!==(r=T(e[0].artVo,e[0].titreVo)+"")&&q(s,r)},d(e){e&&u(t),e&&u(s),e&&u(i)}}}function W(e){let t;return{c(){t=l("span"),this.h()},l(e){t=o(e,"SPAN",{class:!0}),d(t).forEach(u),this.h()},h(){p(t,"class","iscc")},m(e,s){a(e,t,s)},d(e){e&&u(t)}}}function X(e){let t,s,i,r,n,m,f,g,E=e[0].presentation.title+"";return{c(){t=l("div"),s=l("div"),i=l("div"),r=l("iframe"),f=c(),g=l("p"),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=d(t);s=o(a,"DIV",{class:!0});var l=d(s);i=o(l,"DIV",{class:!0});var n=d(i);r=o(n,"IFRAME",{title:!0,sandbox:!0,src:!0,frameborder:!0,allowfullscreen:!0}),d(r).forEach(u),n.forEach(u),f=h(l),g=o(l,"P",{class:!0}),d(g).forEach(u),l.forEach(u),a.forEach(u),this.h()},h(){p(r,"title",n=e[0].presentation.title),p(r,"sandbox","allow-same-origin allow-scripts allow-popups"),r.src!==(m="https://cinematheque.tube/videos/embed/"+e[0].presentation.videoId+"?subtitle=fr&title=0&warningTitle=0")&&p(r,"src",m),p(r,"frameborder","0"),r.allowFullscreen=!0,p(i,"class","video-container"),p(g,"class","title"),p(s,"class","video-wrapper presentation"),p(t,"class","presentation")},m(e,l){a(e,t,l),v(t,s),v(s,i),v(i,r),v(s,f),v(s,g),g.innerHTML=E},p(e,t){1&t&&n!==(n=e[0].presentation.title)&&p(r,"title",n),1&t&&r.src!==(m="https://cinematheque.tube/videos/embed/"+e[0].presentation.videoId+"?subtitle=fr&title=0&warningTitle=0")&&p(r,"src",m),1&t&&E!==(E=e[0].presentation.title+"")&&(g.innerHTML=E)},d(e){e&&u(t)}}}function Y(e){let t,s,i=!(!H.isUndefined(e[0].isCatFilm)&&!1===e[0].isCatFilm),r=i&&Z(e),n=e[0].links||[],m=[];for(let t=0;t<n.length;t+=1)m[t]=_(S(e,n,t));return{c(){t=l("div"),r&&r.c(),s=c();for(let e=0;e<m.length;e+=1)m[e].c()},l(e){t=o(e,"DIV",{});var i=d(t);r&&r.l(i),s=h(i);for(let e=0;e<m.length;e+=1)m[e].l(i);i.forEach(u)},m(e,i){a(e,t,i),r&&r.m(t,null),v(t,s);for(let e=0;e<m.length;e+=1)m[e].m(t,null)},p(e,a){if(1&a&&(i=!(!H.isUndefined(e[0].isCatFilm)&&!1===e[0].isCatFilm)),i?r?r.p(e,a):((r=Z(e)).c(),r.m(t,s)):r&&(r.d(1),r=null),1&a){let s;for(n=e[0].links||[],s=0;s<n.length;s+=1){const i=S(e,n,s);m[s]?m[s].p(i,a):(m[s]=_(i),m[s].c(),m[s].m(t,null))}for(;s<m.length;s+=1)m[s].d(1);m.length=n.length}},d(e){e&&u(t),r&&r.d(),C(m,e)}}}function Z(e){let t,s,i,r,c,h=T(e[0].artFr,e[0].titreFr)+"";return{c(){t=l("a"),s=n("Plus de détails sur « "),i=n(h),r=n(" »\r\n              sur le Catalogue des restaurations et tirages de la Cinémathèque\r\n              française"),this.h()},l(e){t=o(e,"A",{class:!0,href:!0});var a=d(t);s=m(a,"Plus de détails sur « "),i=m(a,h),r=m(a," »\r\n              sur le Catalogue des restaurations et tirages de la Cinémathèque\r\n              française"),a.forEach(u),this.h()},h(){p(t,"class","catfilm colored"),p(t,"href",c="https://www.cinematheque.fr/catalogues/restaurations-tirages/film.php?id="+e[0].pk)},m(e,l){a(e,t,l),v(t,s),v(t,i),v(t,r)},p(e,s){1&s&&h!==(h=T(e[0].artFr,e[0].titreFr)+"")&&q(i,h),1&s&&c!==(c="https://www.cinematheque.fr/catalogues/restaurations-tirages/film.php?id="+e[0].pk)&&p(t,"href",c)},d(e){e&&u(t)}}}function _(e){let t,s,i,r,n=e[2].text+"";return{c(){t=l("a"),i=c(),this.h()},l(e){t=o(e,"A",{class:!0,href:!0});var s=d(t);i=h(s),s.forEach(u),this.h()},h(){s=new x(n,i),p(t,"class","catfilm colored"),p(t,"href",r=e[2].url)},m(e,r){a(e,t,r),s.m(t),v(t,i)},p(e,i){1&i&&n!==(n=e[2].text+"")&&s.p(n),1&i&&r!==(r=e[2].url)&&p(t,"href",r)},d(e){e&&u(t)}}}function ee(e){let t,s,i,r,g,E,w,b,F,k,I,V,C,N,R,U,j,L,B,S,O,Q,Z,_,ee,te,se,ie,re,ae,le,ne,ce,oe,de,me,ue,he,pe,fe,ve,ge,Ee,we,be,ye,$e,Fe,ke,Ie,Ve,qe,xe=e[0].collection+"",Ce=`${T(e[0].artFr,e[0].titreFr)}${P('<div class="sous-titre-fr">',"</div>",e[0].sousTitreFr)}`+"",De=e[0].realisateurs+"",Ae=P(""," / ",e[0].pays)+"",Me=e[0].annee+"",Te=e[0].duree+"",Pe=P(" / ","",e[0].version)+"",He=P("<div>","</div>",e[0].adaptation)+"",Ne=P("<div>Avec ",".</div>",e[0].interpretation)+"",Re=P("<div>Accompagnement musical par ",".</div>",e[0].accompagnement)+"",Ue=P('<div class="rem">',"</div>",e[0].remarque)+"",je=P('<div class="synopsis">',"</div>",e[0].synopsis)+"",Le=P("<div>","</div>",e[0].restauration)+"",Be=P("<hr><div>","</div>",e[0].comment)+"",Se=!(!H.isUndefined(e[0].isCatFilm)&&!1===e[0].isCatFilm)||e[0].links;document.title=I="\r\n    "+T(e[0].artFr,e[0].titreFr)+" ("+e[0].realisateurs+", "+e[0].annee+") -\r\n    HENRI - La Cinémathèque française\r\n  ";let Je=e[0].videoId&&J(e),Oe=e[0].dateUnpublished&&z(e);function ze(e,t){return e[0].titreNx?K:e[0].titreVo?G:void 0}let Ge=ze(e),Ke=Ge&&Ge(e),Qe=e[0].isCC&&W(),We=e[0].presentation&&e[0].presentation.videoId&&X(e),Xe=Se&&Y(e);return{c(){t=l("meta"),s=l("meta"),r=l("meta"),E=l("meta"),b=l("meta"),F=l("meta"),k=l("meta"),V=c(),C=l("section"),N=l("div"),Je&&Je.c(),R=c(),U=l("article"),Oe&&Oe.c(),j=c(),L=l("div"),B=l("div"),S=n(xe),O=c(),Q=l("div"),Z=l("h1"),_=c(),Ke&&Ke.c(),ee=c(),te=l("div"),se=n(De),ie=c(),re=l("div"),ae=n(Ae),le=n(Me),ne=n(" / "),ce=n(Te),oe=n(Pe),de=c(),Qe&&Qe.c(),me=c(),he=c(),fe=c(),ge=c(),we=c(),ye=c(),Fe=c(),We&&We.c(),ke=c(),Ve=c(),Xe&&Xe.c(),this.h()},l(e){const i=D('[data-svelte="svelte-ghaj6h"]',document.head);t=o(i,"META",{property:!0,content:!0}),s=o(i,"META",{property:!0,content:!0}),r=o(i,"META",{property:!0,content:!0}),E=o(i,"META",{property:!0,content:!0}),b=o(i,"META",{property:!0,content:!0}),F=o(i,"META",{property:!0,content:!0}),k=o(i,"META",{property:!0,content:!0}),i.forEach(u),V=h(e),C=o(e,"SECTION",{class:!0});var a=d(C);N=o(a,"DIV",{class:!0});var l=d(N);Je&&Je.l(l),R=h(l),U=o(l,"ARTICLE",{});var n=d(U);Oe&&Oe.l(n),j=h(n),L=o(n,"DIV",{});var c=d(L);B=o(c,"DIV",{class:!0});var p=d(B);S=m(p,xe),p.forEach(u),c.forEach(u),O=h(n),Q=o(n,"DIV",{class:!0});var f=d(Q);Z=o(f,"H1",{class:!0}),d(Z).forEach(u),_=h(f),Ke&&Ke.l(f),f.forEach(u),ee=h(n),te=o(n,"DIV",{class:!0});var v=d(te);se=m(v,De),v.forEach(u),ie=h(n),re=o(n,"DIV",{});var g=d(re);ae=m(g,Ae),le=m(g,Me),ne=m(g," / "),ce=m(g,Te),oe=m(g,Pe),de=h(g),Qe&&Qe.l(g),g.forEach(u),me=h(n),he=h(n),fe=h(n),ge=h(n),we=h(n),ye=h(n),Fe=h(n),We&&We.l(n),ke=h(n),Ve=h(n),Xe&&Xe.l(n),n.forEach(u),l.forEach(u),a.forEach(u),this.h()},h(){p(t,"property","og:title"),p(t,"content",e[1]),p(s,"property","og:url"),p(s,"content",i="https://www.cinematheque.fr/henri/film/"+e[0].slug+"/"),p(r,"property","og:description"),p(r,"content",g=e[0].synopsis),p(E,"property","og:image"),p(E,"content",w=H.isUndefined(e[0].thumb)?`https://www.cinematheque.fr/catalogues/restaurations-tirages-images/images/film/533x400/${e[0].pk}-1.jpg`:`${e[0].thumb}`),p(b,"property","og:image:type"),p(b,"content","image/jpeg"),p(F,"property","og:image:width"),p(F,"content","533"),p(k,"property","og:image:height"),p(k,"content","400"),p(B,"class","collection"),p(Z,"class","colored"),p(Q,"class","titre-film"),p(te,"class","realisateurs"),ue=new x(He,he),pe=new x(Ne,fe),ve=new x(Re,ge),Ee=new x(Ue,we),be=new x(je,ye),$e=new x(Le,Fe),Ie=new x(Be,Ve),p(N,"class","container"),p(C,"class","film-page"),f(C,"ispick",e[0].isPick)},m(e,i){v(document.head,t),v(document.head,s),v(document.head,r),v(document.head,E),v(document.head,b),v(document.head,F),v(document.head,k),a(e,V,i),a(e,C,i),v(C,N),Je&&Je.m(N,null),v(N,R),v(N,U),Oe&&Oe.m(U,null),v(U,j),v(U,L),v(L,B),v(B,S),v(U,O),v(U,Q),v(Q,Z),Z.innerHTML=Ce,v(Q,_),Ke&&Ke.m(Q,null),v(U,ee),v(U,te),v(te,se),v(U,ie),v(U,re),v(re,ae),v(re,le),v(re,ne),v(re,ce),v(re,oe),v(re,de),Qe&&Qe.m(re,null),v(U,me),ue.m(U),v(U,he),pe.m(U),v(U,fe),ve.m(U),v(U,ge),Ee.m(U),v(U,we),be.m(U),v(U,ye),$e.m(U),v(U,Fe),We&&We.m(U,null),v(U,ke),Ie.m(U),v(U,Ve),Xe&&Xe.m(U,null),qe=!0},p(e,[t]){(!qe||1&t&&i!==(i="https://www.cinematheque.fr/henri/film/"+e[0].slug+"/"))&&p(s,"content",i),(!qe||1&t&&g!==(g=e[0].synopsis))&&p(r,"content",g),(!qe||1&t&&w!==(w=H.isUndefined(e[0].thumb)?`https://www.cinematheque.fr/catalogues/restaurations-tirages-images/images/film/533x400/${e[0].pk}-1.jpg`:`${e[0].thumb}`))&&p(E,"content",w),(!qe||1&t)&&I!==(I="\r\n    "+T(e[0].artFr,e[0].titreFr)+" ("+e[0].realisateurs+", "+e[0].annee+") -\r\n    HENRI - La Cinémathèque française\r\n  ")&&(document.title=I),e[0].videoId?Je?(Je.p(e,t),y(Je,1)):((Je=J(e)).c(),y(Je,1),Je.m(N,R)):Je&&(M(),$(Je,1,1,()=>{Je=null}),A()),e[0].dateUnpublished?Oe?Oe.p(e,t):((Oe=z(e)).c(),Oe.m(U,j)):Oe&&(Oe.d(1),Oe=null),(!qe||1&t)&&xe!==(xe=e[0].collection+"")&&q(S,xe),(!qe||1&t)&&Ce!==(Ce=`${T(e[0].artFr,e[0].titreFr)}${P('<div class="sous-titre-fr">',"</div>",e[0].sousTitreFr)}`+"")&&(Z.innerHTML=Ce),Ge===(Ge=ze(e))&&Ke?Ke.p(e,t):(Ke&&Ke.d(1),(Ke=Ge&&Ge(e))&&(Ke.c(),Ke.m(Q,null))),(!qe||1&t)&&De!==(De=e[0].realisateurs+"")&&q(se,De),(!qe||1&t)&&Ae!==(Ae=P(""," / ",e[0].pays)+"")&&q(ae,Ae),(!qe||1&t)&&Me!==(Me=e[0].annee+"")&&q(le,Me),(!qe||1&t)&&Te!==(Te=e[0].duree+"")&&q(ce,Te),(!qe||1&t)&&Pe!==(Pe=P(" / ","",e[0].version)+"")&&q(oe,Pe),e[0].isCC?Qe||((Qe=W()).c(),Qe.m(re,null)):Qe&&(Qe.d(1),Qe=null),(!qe||1&t)&&He!==(He=P("<div>","</div>",e[0].adaptation)+"")&&ue.p(He),(!qe||1&t)&&Ne!==(Ne=P("<div>Avec ",".</div>",e[0].interpretation)+"")&&pe.p(Ne),(!qe||1&t)&&Re!==(Re=P("<div>Accompagnement musical par ",".</div>",e[0].accompagnement)+"")&&ve.p(Re),(!qe||1&t)&&Ue!==(Ue=P('<div class="rem">',"</div>",e[0].remarque)+"")&&Ee.p(Ue),(!qe||1&t)&&je!==(je=P('<div class="synopsis">',"</div>",e[0].synopsis)+"")&&be.p(je),(!qe||1&t)&&Le!==(Le=P("<div>","</div>",e[0].restauration)+"")&&$e.p(Le),e[0].presentation&&e[0].presentation.videoId?We?We.p(e,t):((We=X(e)).c(),We.m(U,ke)):We&&(We.d(1),We=null),(!qe||1&t)&&Be!==(Be=P("<hr><div>","</div>",e[0].comment)+"")&&Ie.p(Be),1&t&&(Se=!(!H.isUndefined(e[0].isCatFilm)&&!1===e[0].isCatFilm)||e[0].links),Se?Xe?Xe.p(e,t):((Xe=Y(e)).c(),Xe.m(U,null)):Xe&&(Xe.d(1),Xe=null),1&t&&f(C,"ispick",e[0].isPick)},i(e){qe||(y(Je),qe=!0)},o(e){$(Je),qe=!1},d(e){u(t),u(s),u(r),u(E),u(b),u(F),u(k),e&&u(V),e&&u(C),Je&&Je.d(),Oe&&Oe.d(),Ke&&Ke.d(),Qe&&Qe.d(),We&&We.d(),Xe&&Xe.d()}}}async function te({params:e,query:t}){const s=await this.fetch(`film/${e.slug}.json`),i=await s.json();if(200===s.status)return{film:i};this.error(s.status,i.message)}function se(e,t,s){N.locale("fr");let{film:i}=t;const r=`${T(i.artFr,i.titreFr)} (${i.realisateurs}, ${i.annee}) à voir en ligne sur HENRI, la plateforme de nos collections films`;return e.$set=(e=>{"film"in e&&s(0,i=e.film)}),[i,r]}export default class extends e{constructor(e){super(),t(this,e,se,ee,s,{film:0})}}export{te as preload};