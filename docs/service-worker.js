!function(){"use strict";const e=["client/dayjs_custom_locale_fr.2ff3283f.js","client/MainTitle.10684d51.js","client/a-propos.f818776c.js","client/english.87d42195.js","client/cgu.ce86100a.js","client/index.21cf785b.js","client/[slug].e5e50ea5.js","client/client.c6d78964.js","client/PictoAge.41e6d8f2.js"].concat(["service-worker-index.html","english.jpg","favicon.png","global.css","logo-192.png","logo-512.png","logo-918x480.jpg","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1609407435983").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1609407435983"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1609407435983").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
