function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function c(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t,e,n,r,s,o,a){const i=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(i){const s=l(e,n,r,a);t.p(s,i)}}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function v(){return $(" ")}function y(){return $("")}function E(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function _(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?g(e):m(e)}function S(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return $(e)}function x(t){return S(t," ")}function L(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function R(t,e,n){t.classList[n?"add":"remove"](e)}function A(t,e=document.body){return Array.from(e.querySelectorAll(t))}class C{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=m(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)p(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}let P;function N(t){P=t}function q(){if(!P)throw new Error("Function called outside component initialization");return P}const O=[],U=[],I=[],k=[],D=Promise.resolve();let T=!1;function H(t){I.push(t)}let V=!1;const B=new Set;function J(){if(!V){V=!0;do{for(let t=0;t<O.length;t+=1){const e=O[t];N(e),F(e.$$)}for(O.length=0;U.length;)U.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];B.has(e)||(B.add(e),e())}I.length=0}while(O.length);for(;k.length;)k.pop()();T=!1,V=!1,B.clear()}}function F(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const K=new Set;let M;function z(){M={r:0,c:[],p:M}}function G(){M.r||s(M.c),M=M.p}function Y(t,e){t&&t.i&&(K.delete(t),t.i(e))}function W(t,e,n,r){if(t&&t.o){if(K.has(t))return;K.add(t),M.c.push(()=>{K.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function X(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(r[t]=1);for(const t in i)s[t]||(n[t]=i[t],s[t]=1);t[o]=i}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Q(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,e){t&&t.l(e)}function et(t,e,r){const{fragment:a,on_mount:i,on_destroy:c,after_update:l}=t.$$;a&&a.m(e,r),H(()=>{const e=i.map(n).filter(o);c?c.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(H)}function nt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){-1===t.$$.dirty[0]&&(O.push(t),T||(T=!0,D.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(e,n,o,a,i,c,l=[-1]){const u=P;N(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(p.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=s)&&(p.bound[t]&&p.bound[t](s),d&&rt(e,t)),n}):[],p.update(),d=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=b(n.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();n.intro&&Y(e.$$.fragment),et(e,n.target,n.anchor),J()}N(u)}class ot{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const at=[];function it(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!at.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),at.push(n,e)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return s.push(c),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const ct={},lt=()=>({});function ut(e){let n,r,s,o,a,i,c,l,u,d,g,y,E,L,j,R;return{c(){n=m("nav"),r=m("ul"),s=m("li"),o=m("a"),a=$("Les films"),c=v(),l=m("li"),u=m("a"),d=$("À propos"),y=v(),E=m("li"),L=m("a"),j=$("English"),this.h()},l(t){n=_(t,"NAV",{class:!0});var e=b(n);r=_(e,"UL",{class:!0});var i=b(r);s=_(i,"LI",{class:!0});var f=b(s);o=_(f,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var p=b(o);a=S(p,"Les films"),p.forEach(h),f.forEach(h),c=x(i),l=_(i,"LI",{class:!0});var m=b(l);u=_(m,"A",{"aria-current":!0,href:!0,class:!0});var g=b(u);d=S(g,"À propos"),g.forEach(h),m.forEach(h),y=x(i),E=_(i,"LI",{class:!0});var $=b(E);L=_($,"A",{"aria-current":!0,href:!0,class:!0});var v=b(L);j=S(v,"English"),v.forEach(h),$.forEach(h),i.forEach(h),e.forEach(h),this.h()},h(){w(o,"rel","prefetch"),w(o,"aria-current",i=void 0===e[0]?"les-films":void 0),w(o,"href","./"),w(o,"class","svelte-1er7d6j"),w(s,"class","svelte-1er7d6j"),w(u,"aria-current",g="a-propos"===e[0]?"a-propos":void 0),w(u,"href","a-propos/"),w(u,"class","svelte-1er7d6j"),w(l,"class","svelte-1er7d6j"),w(L,"aria-current",R="english"===e[0]?"english":void 0),w(L,"href","english/"),w(L,"class","svelte-1er7d6j"),w(E,"class","svelte-1er7d6j"),w(r,"class","svelte-1er7d6j"),w(n,"class","svelte-1er7d6j")},m(t,e){p(t,n,e),f(n,r),f(r,s),f(s,o),f(o,a),f(r,c),f(r,l),f(l,u),f(u,d),f(r,y),f(r,E),f(E,L),f(L,j)},p(t,[e]){1&e&&i!==(i=void 0===t[0]?"les-films":void 0)&&w(o,"aria-current",i),1&e&&g!==(g="a-propos"===t[0]?"a-propos":void 0)&&w(u,"aria-current",g),1&e&&R!==(R="english"===t[0]?"english":void 0)&&w(L,"aria-current",R)},i:t,o:t,d(t){t&&h(n)}}}function ft(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class pt extends ot{constructor(t){super(),st(this,t,ft,ut,a,{segment:0})}}function ht(e){let n,r,s,o,a,i,c,l;return{c(){n=m("footer"),r=m("section"),s=m("div"),o=$("© 2020 La Cinémathèque française\r\n      "),a=m("ul"),i=m("li"),c=m("a"),l=$("Conditions générales d'utilisation"),this.h()},l(t){n=_(t,"FOOTER",{class:!0});var e=b(n);r=_(e,"SECTION",{});var u=b(r);s=_(u,"DIV",{class:!0});var f=b(s);o=S(f,"© 2020 La Cinémathèque française\r\n      "),a=_(f,"UL",{class:!0});var p=b(a);i=_(p,"LI",{});var d=b(i);c=_(d,"A",{href:!0,class:!0});var m=b(c);l=S(m,"Conditions générales d'utilisation"),m.forEach(h),d.forEach(h),p.forEach(h),f.forEach(h),u.forEach(h),e.forEach(h),this.h()},h(){w(c,"href","cgu/"),w(c,"class","svelte-wn1rpr"),w(a,"class","svelte-wn1rpr"),w(s,"class","container"),w(n,"class","svelte-wn1rpr")},m(t,e){p(t,n,e),f(n,r),f(r,s),f(s,o),f(s,a),f(a,i),f(i,c),f(c,l)},p:t,i:t,o:t,d(t){t&&h(n)}}}class dt extends ot{constructor(t){super(),st(this,t,null,ht,a,{})}}function mt(e){let n,r;return{c(){n=m("script"),this.h()},l(t){const e=A('[data-svelte="svelte-a2kvt3"]',document.head);n=_(e,"SCRIPT",{async:!0,src:!0}),b(n).forEach(h),e.forEach(h),this.h()},h(){n.async=!0,n.src!==(r="https://www.googletagmanager.com/gtag/js?id="+e[0])&&w(n,"src",r)},m(t,e){f(document.head,n)},p(t,[e]){1&e&&n.src!==(r="https://www.googletagmanager.com/gtag/js?id="+t[0])&&w(n,"src",r)},i:t,o:t,d(t){h(n)}}}function gt(t,e,n){let r,{stores:s}=e,{id:o}=e;"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",o));const{page:a}=s();return i(t,a,t=>n(3,r=t)),t.$set=t=>{"stores"in t&&n(2,s=t.stores),"id"in t&&n(0,o=t.id)},t.$$.update=()=>{9&t.$$.dirty&&"undefined"!=typeof gtag&&window.gtag("config",o,{page_path:r.path})},[o,a,s]}class $t extends ot{constructor(t){super(),st(this,t,gt,mt,a,{stores:2,id:0})}}function vt(t){let e,n,r,s,o,a,i;e=new $t({props:{stores:he,id:yt}}),r=new pt({props:{segment:t[0]}});const l=t[2].default,f=c(l,t,t[1],null);return a=new dt({}),{c(){Z(e.$$.fragment),n=v(),Z(r.$$.fragment),s=v(),f&&f.c(),o=v(),Z(a.$$.fragment)},l(t){tt(e.$$.fragment,t),n=x(t),tt(r.$$.fragment,t),s=x(t),f&&f.l(t),o=x(t),tt(a.$$.fragment,t)},m(t,c){et(e,t,c),p(t,n,c),et(r,t,c),p(t,s,c),f&&f.m(t,c),p(t,o,c),et(a,t,c),i=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),r.$set(n),f&&f.p&&2&e&&u(f,l,t,t[1],e,null,null)},i(t){i||(Y(e.$$.fragment,t),Y(r.$$.fragment,t),Y(f,t),Y(a.$$.fragment,t),i=!0)},o(t){W(e.$$.fragment,t),W(r.$$.fragment,t),W(f,t),W(a.$$.fragment,t),i=!1},d(t){nt(e,t),t&&h(n),nt(r,t),t&&h(s),f&&f.d(t),t&&h(o),nt(a,t)}}}let yt="UA-12333853-2";function Et(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class wt extends ot{constructor(t){super(),st(this,t,Et,vt,a,{segment:0})}}function bt(t){let e,n,r=t[1].stack+"";return{c(){e=m("pre"),n=$(r)},l(t){e=_(t,"PRE",{});var s=b(e);n=S(s,r),s.forEach(h)},m(t,r){p(t,e,r),f(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&L(n,r)},d(t){t&&h(e)}}}function _t(e){let n,r,s,o,a,i,c,l,u,d,g,y,E,j,R=e[1].message+"";document.title=n="Erreur "+e[0]+" - HENRI - La Cinémathèque française";let C=e[2]&&e[1].stack&&bt(e);return{c(){r=v(),s=m("section"),o=m("div"),a=m("h1"),i=$("Erreur "),c=$(e[0]),l=v(),u=m("p"),d=$("Une erreur s'est produite."),g=v(),y=m("p"),E=$(R),j=v(),C&&C.c(),this.h()},l(t){A('[data-svelte="svelte-51xwef"]',document.head).forEach(h),r=x(t),s=_(t,"SECTION",{class:!0});var n=b(s);o=_(n,"DIV",{class:!0});var f=b(o);a=_(f,"H1",{});var p=b(a);i=S(p,"Erreur "),c=S(p,e[0]),p.forEach(h),l=x(f),u=_(f,"P",{});var m=b(u);d=S(m,"Une erreur s'est produite."),m.forEach(h),g=x(f),y=_(f,"P",{});var $=b(y);E=S($,R),$.forEach(h),j=x(f),C&&C.l(f),f.forEach(h),n.forEach(h),this.h()},h(){w(o,"class","container"),w(s,"class","svelte-wjy1ya")},m(t,e){p(t,r,e),p(t,s,e),f(s,o),f(o,a),f(a,i),f(a,c),f(o,l),f(o,u),f(u,d),f(o,g),f(o,y),f(y,E),f(o,j),C&&C.m(o,null)},p(t,[e]){1&e&&n!==(n="Erreur "+t[0]+" - HENRI - La Cinémathèque française")&&(document.title=n),1&e&&L(c,t[0]),2&e&&R!==(R=t[1].message+"")&&L(E,R),t[2]&&t[1].stack?C?C.p(t,e):(C=bt(t),C.c(),C.m(o,null)):C&&(C.d(1),C=null)},i:t,o:t,d(t){t&&h(r),t&&h(s),C&&C.d()}}}function St(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class xt extends ot{constructor(t){super(),st(this,t,St,_t,a,{status:0,error:1})}}function Lt(t){let n,r,s;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&Z(n.$$.fragment),r=y()},l(t){n&&tt(n.$$.fragment,t),r=y()},m(t,e){n&&et(n,t,e),p(t,r,e),s=!0},p(t,e){const s=16&e?X(o,[Q(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){z();const t=n;W(t.$$.fragment,1,0,()=>{nt(t,1)}),G()}a?(n=new a(i()),Z(n.$$.fragment),Y(n.$$.fragment,1),et(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&Y(n.$$.fragment,t),s=!0)},o(t){n&&W(n.$$.fragment,t),s=!1},d(t){t&&h(r),n&&nt(n,t)}}}function jt(t){let e,n;return e=new xt({props:{error:t[0],status:t[1]}}),{c(){Z(e.$$.fragment)},l(t){tt(e.$$.fragment,t)},m(t,r){et(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Rt(t){let e,n,r,s;const o=[jt,Lt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),r=y()},l(t){n.l(t),r=y()},m(t,n){a[e].m(t,n),p(t,r,n),s=!0},p(t,s){let c=e;e=i(t),e===c?a[e].p(t,s):(z(),W(a[c],1,1,()=>{a[c]=null}),G(),n=a[e],n||(n=a[e]=o[e](t),n.c()),Y(n,1),n.m(r.parentNode,r))},i(t){s||(Y(n),s=!0)},o(t){W(n),s=!1},d(t){a[e].d(t),t&&h(r)}}}function At(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Rt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new wt({props:o}),{c(){Z(n.$$.fragment)},l(t){tt(n.$$.fragment,t)},m(t,e){et(n,t,e),r=!0},p(t,[e]){const r=12&e?X(s,[4&e&&{segment:t[2][0]},8&e&&Q(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(Y(n.$$.fragment,t),r=!0)},o(t){W(n.$$.fragment,t),r=!1},d(t){nt(n,t)}}}function Ct(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,f,p;return u=l,q().$$.after_update.push(u),f=ct,p=r,q().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,a,i,c,r,l]}class Pt extends ot{constructor(t){super(),st(this,t,Ct,At,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Nt=[/^\/collections-headers\.json$/,/^\/collections\.json$/,/^\/film\/([^\/]+?)\.json$/],qt=[{js:()=>import("./index.f6679743.js"),css:[]},{js:()=>import("./a-propos.0710b61a.js"),css:[]},{js:()=>import("./english.40bbaa13.js"),css:[]},{js:()=>import("./[slug].0f2ea231.js"),css:[]},{js:()=>import("./cgu.15d20f04.js"),css:[]}],Ot=(Ut=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/a-propos\/?$/,parts:[{i:1}]},{pattern:/^\/english\/?$/,parts:[{i:2}]},{pattern:/^\/film\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:Ut(t[1])})}]},{pattern:/^\/cgu\/?$/,parts:[{i:4}]}]);var Ut;const It="undefined"!=typeof __SAPPER__&&__SAPPER__;let kt,Dt,Tt,Ht=!1,Vt=[],Bt="{}";const Jt={page:function(t){const e=it(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:it(null),session:it(It&&It.session)};let Ft,Kt;Jt.session.subscribe(async t=>{if(Ft=t,!Ht)return;Kt=!0;const e=Zt(new URL(location.href)),n=Dt={},{redirect:r,props:s,branch:o}=await re(e);n===Dt&&await ne(r,o,s,e.page)});let Mt,zt=null;let Gt,Yt=1;const Wt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Xt={};function Qt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Zt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(It.baseUrl))return null;let e=t.pathname.slice(It.baseUrl.length);if(""===e&&(e="/"),!Nt.some(t=>t.test(e)))for(let n=0;n<Ot.length;n+=1){const r=Ot[n],s=r.pattern.exec(e);if(s){const n=Qt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:i}}}}function te(){return{x:pageXOffset,y:pageYOffset}}async function ee(t,e,n,r){if(e)Gt=e;else{const t=te();Xt[Gt]=t,e=Gt=++Yt,Xt[Gt]=n?t:{x:0,y:0}}Gt=e,kt&&Jt.preloading.set(!0);const s=zt&&zt.href===t.href?zt.promise:re(t);zt=null;const o=Dt={},{redirect:a,props:i,branch:c}=await s;if(o===Dt&&(await ne(a,c,i,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Xt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Xt[Gt]=t,t&&scrollTo(t.x,t.y)}}async function ne(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Zt(new URL(t,document.baseURI));return n?(Wt[e.replaceState?"replaceState":"pushState"]({id:Gt},"",t),ee(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Jt.page.set(r),Jt.preloading.set(!1),kt)kt.$set(n);else{n.stores={page:{subscribe:Jt.page.subscribe},preloading:{subscribe:Jt.preloading.subscribe},session:Jt.session},n.level0={props:await Tt},n.notify=Jt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)oe(t.nextSibling);oe(t),oe(e)}kt=new Pt({target:Mt,props:n,hydrate:!0})}Vt=e,Bt=JSON.stringify(r.query),Ht=!0,Kt=!1}async function re(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let i;Tt||(Tt=It.preloaded[0]||lt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ft));let c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=await Promise.all(e.parts.map(async(e,i)=>{const f=r[i];if(function(t,e,n,r){if(r!==Bt)return!0;const s=Vt[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(i,f,l,s)&&(u=!0),o.segments[c]=r[i+1],!e)return{segment:f};const p=c++;if(!Kt&&!u&&Vt[i]&&Vt[i].part===e.i)return Vt[i];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(se);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(qt[e.i]);let m;return m=Ht||!It.preloaded[i+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ft):{}:It.preloaded[i+1],o["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:s,props:o,branch:i}}function se(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function oe(t){t.parentNode.removeChild(t)}function ae(t){const e=Zt(new URL(t,document.baseURI));if(e)return zt&&t===zt.href||function(t,e){zt={href:t,promise:e}}(t,re(e)),zt.promise}let ie;function ce(t){clearTimeout(ie),ie=setTimeout(()=>{le(t)},20)}function le(t){const e=fe(t.target);e&&"prefetch"===e.rel&&ae(e.href)}function ue(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=fe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Zt(s);if(o){ee(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Wt.pushState({id:Gt},"",s.href)}}function fe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function pe(t){if(Xt[Gt]=te(),t.state){const e=Zt(new URL(location.href));e?ee(e,t.state.id):location.href=location.href}else Yt=Yt+1,function(t){Gt=t}(Yt),Wt.replaceState({id:Gt},"",location.href)}const he=()=>{return t=ct,q().$$.context.get(t);var t};var de;de={target:document.querySelector("#sapper")},"scrollRestoration"in Wt&&(Wt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Wt.scrollRestoration="auto"}),addEventListener("load",()=>{Wt.scrollRestoration="manual"}),function(t){Mt=t}(de.target),addEventListener("click",ue),addEventListener("popstate",pe),addEventListener("touchstart",le),addEventListener("mousemove",ce),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Wt.replaceState({id:Yt},"",e);const n=new URL(location.href);if(It.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:i}=It;Tt||(Tt=o&&o[0]),ne(null,[],{error:i,status:a,session:s,level0:{props:Tt},level1:{props:{status:a,error:i},component:xt},segments:o},{host:e,path:n,query:Qt(r),params:{}})}();const r=Zt(n);return r?ee(r,Yt,!0,t):void 0});export{c as A,E as B,s as C,u as D,j as E,G as F,z as G,C as H,ot as S,v as a,b,_ as c,S as d,m as e,x as f,h as g,w as h,st as i,R as j,p as k,f as l,L as m,d as n,Z as o,tt as p,A as q,et as r,a as s,$ as t,Y as u,W as v,nt as w,t as x,g as y,y as z};
