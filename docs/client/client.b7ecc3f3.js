function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function w(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?h(e):d(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function E(t){return b(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function x(t,e,n){t.classList[n?"add":"remove"](e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}class L{constructor(t,e=null){this.e=d("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)u(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(f)}}let A;function R(t){A=t}function P(){if(!A)throw new Error("Function called outside component initialization");return A}const C=[],j=[],k=[],N=[],q=Promise.resolve();let O=!1;function U(t){k.push(t)}let I=!1;const T=new Set;function D(){if(!I){I=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];R(e),H(e.$$)}for(C.length=0;j.length;)j.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];T.has(e)||(T.add(e),e())}k.length=0}while(C.length);for(;N.length;)N.pop()();O=!1,I=!1,T.clear()}}function H(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const V=new Set;let B;function J(){B={r:0,c:[],p:B}}function K(){B.r||s(B.c),B=B.p}function M(t,e){t&&t.i&&(V.delete(t),t.i(e))}function F(t,e,n,r){if(t&&t.o){if(V.has(t))return;V.add(t),B.c.push(()=>{V.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function z(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function G(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,e){t&&t.l(e)}function Y(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),U(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(U)}function Q(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(C.push(t),O||(O=!0,q.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,o,a,c,i,l=[-1]){const u=A;R(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=o?o(e,p,(t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=s)&&(d.bound[t]&&d.bound[t](s),h&&Z(e,t)),n}):[],d.update(),h=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=v(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&M(e.$$.fragment),Y(e,n.target,n.anchor),D()}R(u)}class et{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const nt=[];function rt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!nt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const st={},ot=()=>({});function at(e){let n,r,s,o,a,c,i,p,h,$,_;return{c(){n=d("nav"),r=d("ul"),s=d("li"),o=d("a"),a=m("Les films"),i=g(),p=d("li"),h=d("a"),$=m("À propos"),this.h()},l(t){var e=v(n=w(t,"NAV",{class:!0})),c=v(r=w(e,"UL",{class:!0})),l=v(s=w(c,"LI",{class:!0})),u=v(o=w(l,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));a=b(u,"Les films"),u.forEach(f),l.forEach(f),i=E(c);var d=v(p=w(c,"LI",{class:!0})),m=v(h=w(d,"A",{"aria-current":!0,href:!0,class:!0}));$=b(m,"À propos"),m.forEach(f),d.forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){y(o,"rel","prefetch"),y(o,"aria-current",c=void 0===e[0]?"les-films":void 0),y(o,"href","./"),y(o,"class","svelte-16ukm3m"),y(s,"class","svelte-16ukm3m"),y(h,"aria-current",_="a-propos"===e[0]?"a-propos":void 0),y(h,"href","a-propos/"),y(h,"class","svelte-16ukm3m"),y(p,"class","svelte-16ukm3m"),y(r,"class","svelte-16ukm3m"),y(n,"class","svelte-16ukm3m")},m(t,e){u(t,n,e),l(n,r),l(r,s),l(s,o),l(o,a),l(r,i),l(r,p),l(p,h),l(h,$)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"les-films":void 0)&&y(o,"aria-current",c),1&e&&_!==(_="a-propos"===t[0]?"a-propos":void 0)&&y(h,"aria-current",_)},i:t,o:t,d(t){t&&f(n)}}}function ct(t,e,n){let{segment:r}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment)}),[r]}class it extends et{constructor(t){super(),tt(this,t,ct,at,a,{segment:0})}}function lt(e){let n,r,s,o,a,c,i,p;return{c(){n=d("footer"),r=d("section"),s=d("div"),o=m("© 2020 La Cinémathèque française\r\n      "),a=d("ul"),c=d("li"),i=d("a"),p=m("Conditions générales d'utilisation"),this.h()},l(t){var e=v(n=w(t,"FOOTER",{class:!0})),l=v(r=w(e,"SECTION",{})),u=v(s=w(l,"DIV",{class:!0}));o=b(u,"© 2020 La Cinémathèque française\r\n      ");var d=v(a=w(u,"UL",{class:!0})),h=v(c=w(d,"LI",{})),m=v(i=w(h,"A",{href:!0,class:!0}));p=b(m,"Conditions générales d'utilisation"),m.forEach(f),h.forEach(f),d.forEach(f),u.forEach(f),l.forEach(f),e.forEach(f),this.h()},h(){y(i,"href","cgu/"),y(i,"class","svelte-pydd6x"),y(a,"class","svelte-pydd6x"),y(s,"class","container"),y(n,"class","svelte-pydd6x")},m(t,e){u(t,n,e),l(n,r),l(r,s),l(s,o),l(s,a),l(a,c),l(c,i),l(i,p)},p:t,i:t,o:t,d(t){t&&f(n)}}}class ut extends et{constructor(t){super(),tt(this,t,null,lt,a,{})}}function ft(e){let n,r;return{c(){n=d("script"),this.h()},l(t){const e=S('[data-svelte="svelte-a2kvt3"]',document.head);v(n=w(e,"SCRIPT",{async:!0,src:!0})).forEach(f),e.forEach(f),this.h()},h(){n.async=!0,n.src!==(r="https://www.googletagmanager.com/gtag/js?id="+e[0])&&y(n,"src",r)},m(t,e){l(document.head,n)},p(t,[e]){1&e&&n.src!==(r="https://www.googletagmanager.com/gtag/js?id="+t[0])&&y(n,"src",r)},i:t,o:t,d(t){f(n)}}}function pt(t,e,n){let r,{stores:s}=e,{id:o}=e;"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",o));const{page:a}=s();return c(t,a,t=>n(3,r=t)),t.$set=(t=>{"stores"in t&&n(2,s=t.stores),"id"in t&&n(0,o=t.id)}),t.$$.update=(()=>{9&t.$$.dirty&&"undefined"!=typeof gtag&&window.gtag("config",o,{page_path:r.path})}),[o,a,s]}class dt extends et{constructor(t){super(),tt(this,t,pt,ft,a,{stores:2,id:0})}}function ht(t){let e,n,r,s;const o=new dt({props:{stores:ie,id:mt}}),a=new it({props:{segment:t[0]}}),c=t[2].default,l=function(t,e,n,r){if(t){const s=i(t,e,n,r);return t[0](s)}}(c,t,t[1],null),p=new ut({});return{c(){W(o.$$.fragment),e=g(),W(a.$$.fragment),n=g(),l&&l.c(),r=g(),W(p.$$.fragment)},l(t){X(o.$$.fragment,t),e=E(t),X(a.$$.fragment,t),n=E(t),l&&l.l(t),r=E(t),X(p.$$.fragment,t)},m(t,c){Y(o,t,c),u(t,e,c),Y(a,t,c),u(t,n,c),l&&l.m(t,c),u(t,r,c),Y(p,t,c),s=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),a.$set(n),l&&l.p&&2&e&&l.p(i(c,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(c,t[1],e,null))},i(t){s||(M(o.$$.fragment,t),M(a.$$.fragment,t),M(l,t),M(p.$$.fragment,t),s=!0)},o(t){F(o.$$.fragment,t),F(a.$$.fragment,t),F(l,t),F(p.$$.fragment,t),s=!1},d(t){Q(o,t),t&&f(e),Q(a,t),t&&f(n),l&&l.d(t),t&&f(r),Q(p,t)}}}let mt="UA-12333853-2";function gt(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)}),[r,o,s]}class $t extends et{constructor(t){super(),tt(this,t,gt,ht,a,{segment:0})}}function yt(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=m(r)},l(t){var s=v(e=w(t,"PRE",{}));n=b(s,r),s.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&f(e)}}}function vt(e){let n,r,s,o,a,c,i,p,h,x=e[1].message+"";document.title=n=e[0];let L=e[2]&&e[1].stack&&yt(e);return{c(){r=g(),s=d("h1"),o=m(e[0]),a=g(),c=d("p"),i=m(x),p=g(),L&&L.c(),h=$(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=E(t);var n=v(s=w(t,"H1",{class:!0}));o=b(n,e[0]),n.forEach(f),a=E(t);var l=v(c=w(t,"P",{class:!0}));i=b(l,x),l.forEach(f),p=E(t),L&&L.l(t),h=$(),this.h()},h(){y(s,"class","svelte-8od9u6"),y(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,s,e),l(s,o),u(t,a,e),u(t,c,e),l(c,i),u(t,p,e),L&&L.m(t,e),u(t,h,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&_(o,t[0]),2&e&&x!==(x=t[1].message+"")&&_(i,x),t[2]&&t[1].stack?L?L.p(t,e):((L=yt(t)).c(),L.m(h.parentNode,h)):L&&(L.d(1),L=null)},i:t,o:t,d(t){t&&f(r),t&&f(s),t&&f(a),t&&f(c),t&&f(p),L&&L.d(t),t&&f(h)}}}function wt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)}),[r,s,!1]}class bt extends et{constructor(t){super(),tt(this,t,wt,vt,a,{status:0,error:1})}}function Et(t){let n,r;const s=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a());return{c(){c&&W(c.$$.fragment),n=$()},l(t){c&&X(c.$$.fragment,t),n=$()},m(t,e){c&&Y(c,t,e),u(t,n,e),r=!0},p(t,e){const r=16&e?z(s,[G(t[4].props)]):{};if(o!==(o=t[4].component)){if(c){J();const t=c;F(t.$$.fragment,1,0,()=>{Q(t,1)}),K()}o?(W((c=new o(a())).$$.fragment),M(c.$$.fragment,1),Y(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&M(c.$$.fragment,t),r=!0)},o(t){c&&F(c.$$.fragment,t),r=!1},d(t){t&&f(n),c&&Q(c,t)}}}function _t(t){let e;const n=new bt({props:{error:t[0],status:t[1]}});return{c(){W(n.$$.fragment)},l(t){X(n.$$.fragment,t)},m(t,r){Y(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(M(n.$$.fragment,t),e=!0)},o(t){F(n.$$.fragment,t),e=!1},d(t){Q(n,t)}}}function xt(t){let e,n,r,s;const o=[_t,Et],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),u(t,r,n),s=!0},p(t,s){let i=e;(e=c(t))===i?a[e].p(t,s):(J(),F(a[i],1,1,()=>{a[i]=null}),K(),(n=a[e])||(n=a[e]=o[e](t)).c(),M(n,1),n.m(r.parentNode,r))},i(t){s||(M(n),s=!0)},o(t){F(n),s=!1},d(t){a[e].d(t),t&&f(r)}}}function St(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[xt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new $t({props:s});return{c(){W(o.$$.fragment)},l(t){X(o.$$.fragment,t)},m(t,e){Y(o,t,e),n=!0},p(t,[e]){const n=12&e?z(r,[4&e&&{segment:t[2][0]},8&e&&G(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(M(o.$$.fragment,t),n=!0)},o(t){F(o.$$.fragment,t),n=!1},d(t){Q(o,t)}}}function Lt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=st,u=r,P().$$.context.set(l,u),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)}),[s,o,a,c,i,r]}class At extends et{constructor(t){super(),tt(this,t,Lt,St,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Rt=[/^\/index.json$/,/^\/film\/([^\/]+?).json$/],Pt=[{js:()=>import("./index.c083e605.js"),css:["client.b7ecc3f3.css","MainTitle.f79b7f4f.css"]},{js:()=>import("./a-propos.c431a0ea.js"),css:["a-propos.c431a0ea.css","client.b7ecc3f3.css","MainTitle.f79b7f4f.css"]},{js:()=>import("./[slug].dcfac802.js"),css:["[slug].dcfac802.css","client.b7ecc3f3.css"]},{js:()=>import("./cgu.5fc48b30.js"),css:["cgu.5fc48b30.css","client.b7ecc3f3.css"]}],Ct=(t=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/a-propos\/?$/,parts:[{i:1}]},{pattern:/^\/film\/([^\/]+?)\/?$/,parts:[null,{i:2,params:e=>({slug:t(e[1])})}]},{pattern:/^\/cgu\/?$/,parts:[{i:3}]}])(decodeURIComponent);const jt="undefined"!=typeof __SAPPER__&&__SAPPER__;let kt,Nt,qt,Ot=!1,Ut=[],It="{}";const Tt={page:rt({}),preloading:rt(null),session:rt(jt&&jt.session)};let Dt,Ht;Tt.session.subscribe(async t=>{if(Dt=t,!Ot)return;Ht=!0;const e=Gt(new URL(location.href)),n=Nt={},{redirect:r,props:s,branch:o}=await Qt(e);n===Nt&&await Yt(r,o,s,e.page)});let Vt,Bt=null;let Jt,Kt=1;const Mt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ft={};function zt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Gt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(jt.baseUrl))return null;let e=t.pathname.slice(jt.baseUrl.length);if(""===e&&(e="/"),!Rt.some(t=>t.test(e)))for(let n=0;n<Ct.length;n+=1){const r=Ct[n],s=r.pattern.exec(e);if(s){const n=zt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Wt(){return{x:pageXOffset,y:pageYOffset}}async function Xt(t,e,n,r){if(e)Jt=e;else{const t=Wt();Ft[Jt]=t,e=Jt=++Kt,Ft[Jt]=n?t:{x:0,y:0}}Jt=e,kt&&Tt.preloading.set(!0);const s=Bt&&Bt.href===t.href?Bt.promise:Qt(t);Bt=null;const o=Nt={},{redirect:a,props:c,branch:i}=await s;if(o===Nt&&(await Yt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ft[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Ft[Jt]=t,t&&scrollTo(t.x,t.y)}}async function Yt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Gt(new URL(t,document.baseURI));return n?(Mt[e.replaceState?"replaceState":"pushState"]({id:Jt},"",t),Xt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Tt.page.set(r),Tt.preloading.set(!1),kt)kt.$set(n);else{n.stores={page:{subscribe:Tt.page.subscribe},preloading:{subscribe:Tt.preloading.subscribe},session:Tt.session},n.level0={props:await qt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)te(t.nextSibling);te(t),te(e)}kt=new At({target:Vt,props:n,hydrate:!0})}Ut=e,It=JSON.stringify(r.query),Ot=!0,Ht=!1}async function Qt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;qt||(qt=jt.preloaded[0]||ot.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Dt));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==It)return!0;const s=Ut[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ht&&!u&&Ut[c]&&Ut[c].part===e.i)return Ut[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Zt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Pt[e.i]);let m;return m=Ot||!jt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Dt):{}:jt.preloaded[c+1],o[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Zt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function te(t){t.parentNode.removeChild(t)}function ee(t){const e=Gt(new URL(t,document.baseURI));if(e)return Bt&&t===Bt.href||function(t,e){Bt={href:t,promise:e}}(t,Qt(e)),Bt.promise}let ne;function re(t){clearTimeout(ne),ne=setTimeout(()=>{se(t)},20)}function se(t){const e=ae(t.target);e&&"prefetch"===e.rel&&ee(e.href)}function oe(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ae(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Gt(s);if(o){Xt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Mt.pushState({id:Jt},"",s.href)}}function ae(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ce(t){if(Ft[Jt]=Wt(),t.state){const e=Gt(new URL(location.href));e?Xt(e,t.state.id):location.href=location.href}else(function(t){Jt=t})(Kt=Kt+1),Mt.replaceState({id:Jt},"",location.href)}const ie=()=>(function(t){return P().$$.context.get(t)})(st);!function(t){var e;"scrollRestoration"in Mt&&(Mt.scrollRestoration="manual"),e=t.target,Vt=e,addEventListener("click",oe),addEventListener("popstate",ce),addEventListener("touchstart",se),addEventListener("mousemove",re),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Mt.replaceState({id:Kt},"",e);const n=new URL(location.href);if(jt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=jt;qt||(qt=o&&o[0]),Yt(null,[],{error:c,status:a,session:s,level0:{props:qt},level1:{props:{status:a,error:c},component:bt},segments:o},{host:e,path:n,query:zt(r),params:{}})}();const r=Gt(n);return r?Xt(r,Kt,!0,t):void 0})}({target:document.querySelector("#sapper")});export{L as H,et as S,g as a,v as b,w as c,b as d,d as e,f,E as g,y as h,tt as i,u as j,l as k,_ as l,p as m,t as n,W as o,X as p,S as q,Y as r,a as s,m as t,M as u,F as v,Q as w,h as x,x as y};
