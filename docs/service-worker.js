!function(){"use strict";const e=["client/dayjs_custom_locale_fr.00b6e34d.js","client/MainTitle.ce9aebcf.js","client/a-propos.217edfab.js","client/english.2407e9c6.js","client/cgu.40132402.js","client/index.45bc470d.js","client/[slug].ccf3e403.js","client/client.dde407de.js","client/PictoAge.e1ebc793.js"].concat(["service-worker-index.html","english.jpg","favicon.png","global.css","logo-192.png","logo-512.png","logo-918x480.jpg","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1608043344779").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1608043344779"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1608043344779").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const c=await t.match(e.request);if(c)return c;throw s}}))))})}();
