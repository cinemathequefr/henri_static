!function(){"use strict";const e=["client/MainTitle.b381140a.js","client/index.8312a381.js","client/a-propos.d1ebfef7.js","client/client.4a0b539a.js","client/[slug].c5d5b864.js","client/client.298bf958.js","client/cgu.8468d2b3.js","client/format.a6af0c31.js"].concat(["service-worker-index.html","favicon.png","global.css","logo-192.png","logo-512.png","logo-918x480.jpg","manifest.json","wheel.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1594914249627").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1594914249627"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1594914249627").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
