!function(){"use strict";const e=1634737495487,t=`cache${e}`,s=["/client/client.32904738.js","/client/inject_styles.5607aec6.js","/client/index.f0f2ccb5.js","/client/PictoAge.fc3c20b3.js","/client/dayjs_custom_locale_fr.c56dfbe4.js","/client/MainTitle.0c1e2e33.js","/client/format.d7a68f47.js","/client/archives_UNUSED_.ee90fa18.js","/client/a-propos.06187a60.js","/client/english.a780bfc8.js","/client/[slug].7b371eb1.js","/client/cgu.cc073898.js"].concat(["/service-worker-index.htm","/favicon.png","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff2","/fonts/source-serif-pro-v10-latin-300.woff","/fonts/source-serif-pro-v10-latin-300.woff2","/fonts/source-serif-pro-v10-latin-300italic.woff","/fonts/source-serif-pro-v10-latin-300italic.woff2","/global.css","/logo-192.png","/logo-512.png","/logo-918x480.jpg","/manifest.json"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),i=s.protocol.startsWith("http"),c=s.hostname===self.location.hostname&&s.port!==self.location.port,o=s.host===self.location.host&&n.has(s.pathname),a="only-if-cached"===t.request.cache&&!o;!i||c||a||t.respondWith((async()=>o&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const n=await s.match(t);if(n)return n;throw e}}(t.request))())}))}();
