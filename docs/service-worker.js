!function(){"use strict";const e=["client/dayjs_custom_locale_fr.9fcfaed0.js","client/MainTitle.8a3c0b7d.js","client/a-propos.c2bc2e4a.js","client/english.3c1ab4f2.js","client/cgu.081bc2c5.js","client/index.4c267405.js","client/[slug].9d0410ca.js","client/client.30f7995f.js","client/PictoAge.62a8c324.js"].concat(["service-worker-index.html","english.jpg","favicon.png","global.css","logo-192.png","logo-512.png","logo-918x480.jpg","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1607334405812").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1607334405812"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1607334405812").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const s=await t.match(e.request);if(s)return s;throw c}}))))})}();
