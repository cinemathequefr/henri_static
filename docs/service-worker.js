!function(){"use strict";const e=["client/MainTitle.91175141.js","client/client.87497f4d.js","client/a-propos.2b3d3f73.js","client/[slug].fc76b56f.js","client/cgu.acd513fd.js","client/client.fbb01aed.js","client/index.0b094236.js","client/format.492bde03.js"].concat(["service-worker-index.html","favicon.png","global.css","logo-192.png","logo-512.png","logo-918x480.jpg","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1588675318257").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1588675318257"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1588675318257").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
