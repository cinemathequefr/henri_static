!function(){"use strict";const e=1670321005041,t=`cache${e}`,s=["/client/client.af38daf0.js","/client/inject_styles.5607aec6.js","/client/index.fb93acdf.js","/client/dayjs.min.c8c76295.js","/client/dayjs_custom_locale_fr.fedc0ea4.js","/client/count_films.275e5077.js","/client/PictoAge.80de0db0.js","/client/format.bea1ecdf.js","/client/update_pick_status.303e559d.js","/client/archives_UNUSED_.ff623241.js","/client/a-propos.dd6da47b.js","/client/english.96238446.js","/client/[slug].5bedf9bd.js","/client/cgu.b52ec6e0.js"].concat(["/service-worker-index.htm","/favicon.png","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff2","/fonts/source-serif-pro-v10-latin-300.woff","/fonts/source-serif-pro-v10-latin-300.woff2","/fonts/source-serif-pro-v10-latin-300italic.woff","/fonts/source-serif-pro-v10-latin-300italic.woff2","/global.css","/jlg-918x480.jpg","/jlg.jpg","/logo-192.png","/logo-512.png","/logo-918x480.jpg","/manifest.json"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),i=s.protocol.startsWith("http"),c=s.hostname===self.location.hostname&&s.port!==self.location.port,o=s.host===self.location.host&&n.has(s.pathname),a="only-if-cached"===t.request.cache&&!o;!i||c||a||t.respondWith((async()=>o&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const n=await s.match(t);if(n)return n;throw e}}(t.request))())}))}();
