!function(){"use strict";const e=1657035099702,t=`cache${e}`,s=["/client/client.a6a455bd.js","/client/inject_styles.5607aec6.js","/client/index.efb729c2.js","/client/PictoAge.56e5d6ec.js","/client/dayjs_custom_locale_fr.f4e51095.js","/client/MainTitle.8bebdf37.js","/client/format.f0c00c15.js","/client/archives_UNUSED_.53a965b6.js","/client/a-propos.d6bc742b.js","/client/english.61f2db07.js","/client/[slug].8397f789.js","/client/cgu.517f94e7.js"].concat(["/service-worker-index.htm","/favicon.png","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff2","/fonts/source-serif-pro-v10-latin-300.woff","/fonts/source-serif-pro-v10-latin-300.woff2","/fonts/source-serif-pro-v10-latin-300italic.woff","/fonts/source-serif-pro-v10-latin-300italic.woff2","/global.css","/logo-192.png","/logo-512.png","/logo-918x480.jpg","/manifest.json"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),i=s.protocol.startsWith("http"),c=s.hostname===self.location.hostname&&s.port!==self.location.port,o=s.host===self.location.host&&n.has(s.pathname),l="only-if-cached"===t.request.cache&&!o;!i||c||l||t.respondWith((async()=>o&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const n=await s.match(t);if(n)return n;throw e}}(t.request))())}))}();
