!function(){"use strict";const e=1683646835231,t=`cache${e}`,i=["/client/client.781cd82a.js","/client/inject_styles.5607aec6.js","/client/index.494b0707.js","/client/dayjs.min.c923f839.js","/client/dayjs_custom_locale_fr.688a0880.js","/client/count_films.3a0fc840.js","/client/PictoAge.a5f3e349.js","/client/format.60cb81f4.js","/client/update_pick_status.66d2b8ac.js","/client/archives_UNUSED_.afa5ca13.js","/client/a-propos.77396cb8.js","/client/english.29e104a6.js","/client/[slug].a8d64254.js","/client/cgu.abe4aae0.js"].concat(["/service-worker-index.htm","/favicon.png","/fonts/bak/source-serif-pro-v10-latin-300.woff","/fonts/bak/source-serif-pro-v10-latin-300.woff2","/fonts/bak/source-serif-pro-v10-latin-300italic.woff","/fonts/bak/source-serif-pro-v10-latin-300italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff2","/fonts/source-serif-pro-v15-latin-ext_latin_greek_cyrillic-300.woff","/fonts/source-serif-pro-v15-latin-ext_latin_greek_cyrillic-300.woff2","/fonts/source-serif-pro-v15-latin-ext_latin_greek_cyrillic-300italic.woff","/fonts/source-serif-pro-v15-latin-ext_latin_greek_cyrillic-300italic.woff2","/global.css","/jlg-918x480.jpg","/jlg.jpg","/logo-192.png","/logo-512.png","/logo-918x480.jpg","/manifest.json"]),s=new Set(i);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(i))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const i of e)i!==t&&await caches.delete(i);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const i=new URL(t.request.url),n=i.protocol.startsWith("http"),c=i.hostname===self.location.hostname&&i.port!==self.location.port,a=i.host===self.location.host&&s.has(i.pathname),l="only-if-cached"===t.request.cache&&!a;!n||c||l||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const i=await caches.open(`offline${e}`);try{const e=await fetch(t);return i.put(t,e.clone()),e}catch(e){const s=await i.match(t);if(s)return s;throw e}}(t.request))())}))}();
