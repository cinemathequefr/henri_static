!function(){"use strict";const e=1701791153909,l=`cache${e}`,t=["/client/client.90a7856e.js","/client/inject_styles.5607aec6.js","/client/index.63bc3854.js","/client/dayjs.min.52983625.js","/client/dayjs_custom_locale_fr.60618ccb.js","/client/count_films.10091817.js","/client/PictoAge.0e302d87.js","/client/format.973f0aa8.js","/client/update_pick_status.5c8a3fe1.js","/client/archives_UNUSED_.063c81fe.js","/client/a-propos.407973f7.js","/client/english.e3cfa1f4.js","/client/[slug].38a45bbd.js","/client/cgu.75660467.js","/client/openseadragon.f0e8326d.js"].concat(["/service-worker-index.htm","/dzi/flyer-jlg/output.dzi","/dzi/flyer-jlg/output_files/0/0_0.jpeg","/dzi/flyer-jlg/output_files/1/0_0.jpeg","/dzi/flyer-jlg/output_files/10/0_0.jpeg","/dzi/flyer-jlg/output_files/10/0_1.jpeg","/dzi/flyer-jlg/output_files/10/0_2.jpeg","/dzi/flyer-jlg/output_files/10/0_3.jpeg","/dzi/flyer-jlg/output_files/10/1_0.jpeg","/dzi/flyer-jlg/output_files/10/1_1.jpeg","/dzi/flyer-jlg/output_files/10/1_2.jpeg","/dzi/flyer-jlg/output_files/10/1_3.jpeg","/dzi/flyer-jlg/output_files/10/2_0.jpeg","/dzi/flyer-jlg/output_files/10/2_1.jpeg","/dzi/flyer-jlg/output_files/10/2_2.jpeg","/dzi/flyer-jlg/output_files/10/2_3.jpeg","/dzi/flyer-jlg/output_files/11/0_0.jpeg","/dzi/flyer-jlg/output_files/11/0_1.jpeg","/dzi/flyer-jlg/output_files/11/0_2.jpeg","/dzi/flyer-jlg/output_files/11/0_3.jpeg","/dzi/flyer-jlg/output_files/11/0_4.jpeg","/dzi/flyer-jlg/output_files/11/0_5.jpeg","/dzi/flyer-jlg/output_files/11/0_6.jpeg","/dzi/flyer-jlg/output_files/11/1_0.jpeg","/dzi/flyer-jlg/output_files/11/1_1.jpeg","/dzi/flyer-jlg/output_files/11/1_2.jpeg","/dzi/flyer-jlg/output_files/11/1_3.jpeg","/dzi/flyer-jlg/output_files/11/1_4.jpeg","/dzi/flyer-jlg/output_files/11/1_5.jpeg","/dzi/flyer-jlg/output_files/11/1_6.jpeg","/dzi/flyer-jlg/output_files/11/2_0.jpeg","/dzi/flyer-jlg/output_files/11/2_1.jpeg","/dzi/flyer-jlg/output_files/11/2_2.jpeg","/dzi/flyer-jlg/output_files/11/2_3.jpeg","/dzi/flyer-jlg/output_files/11/2_4.jpeg","/dzi/flyer-jlg/output_files/11/2_5.jpeg","/dzi/flyer-jlg/output_files/11/2_6.jpeg","/dzi/flyer-jlg/output_files/11/3_0.jpeg","/dzi/flyer-jlg/output_files/11/3_1.jpeg","/dzi/flyer-jlg/output_files/11/3_2.jpeg","/dzi/flyer-jlg/output_files/11/3_3.jpeg","/dzi/flyer-jlg/output_files/11/3_4.jpeg","/dzi/flyer-jlg/output_files/11/3_5.jpeg","/dzi/flyer-jlg/output_files/11/3_6.jpeg","/dzi/flyer-jlg/output_files/11/4_0.jpeg","/dzi/flyer-jlg/output_files/11/4_1.jpeg","/dzi/flyer-jlg/output_files/11/4_2.jpeg","/dzi/flyer-jlg/output_files/11/4_3.jpeg","/dzi/flyer-jlg/output_files/11/4_4.jpeg","/dzi/flyer-jlg/output_files/11/4_5.jpeg","/dzi/flyer-jlg/output_files/11/4_6.jpeg","/dzi/flyer-jlg/output_files/12/0_0.jpeg","/dzi/flyer-jlg/output_files/12/0_1.jpeg","/dzi/flyer-jlg/output_files/12/0_10.jpeg","/dzi/flyer-jlg/output_files/12/0_11.jpeg","/dzi/flyer-jlg/output_files/12/0_12.jpeg","/dzi/flyer-jlg/output_files/12/0_13.jpeg","/dzi/flyer-jlg/output_files/12/0_2.jpeg","/dzi/flyer-jlg/output_files/12/0_3.jpeg","/dzi/flyer-jlg/output_files/12/0_4.jpeg","/dzi/flyer-jlg/output_files/12/0_5.jpeg","/dzi/flyer-jlg/output_files/12/0_6.jpeg","/dzi/flyer-jlg/output_files/12/0_7.jpeg","/dzi/flyer-jlg/output_files/12/0_8.jpeg","/dzi/flyer-jlg/output_files/12/0_9.jpeg","/dzi/flyer-jlg/output_files/12/1_0.jpeg","/dzi/flyer-jlg/output_files/12/1_1.jpeg","/dzi/flyer-jlg/output_files/12/1_10.jpeg","/dzi/flyer-jlg/output_files/12/1_11.jpeg","/dzi/flyer-jlg/output_files/12/1_12.jpeg","/dzi/flyer-jlg/output_files/12/1_13.jpeg","/dzi/flyer-jlg/output_files/12/1_2.jpeg","/dzi/flyer-jlg/output_files/12/1_3.jpeg","/dzi/flyer-jlg/output_files/12/1_4.jpeg","/dzi/flyer-jlg/output_files/12/1_5.jpeg","/dzi/flyer-jlg/output_files/12/1_6.jpeg","/dzi/flyer-jlg/output_files/12/1_7.jpeg","/dzi/flyer-jlg/output_files/12/1_8.jpeg","/dzi/flyer-jlg/output_files/12/1_9.jpeg","/dzi/flyer-jlg/output_files/12/2_0.jpeg","/dzi/flyer-jlg/output_files/12/2_1.jpeg","/dzi/flyer-jlg/output_files/12/2_10.jpeg","/dzi/flyer-jlg/output_files/12/2_11.jpeg","/dzi/flyer-jlg/output_files/12/2_12.jpeg","/dzi/flyer-jlg/output_files/12/2_13.jpeg","/dzi/flyer-jlg/output_files/12/2_2.jpeg","/dzi/flyer-jlg/output_files/12/2_3.jpeg","/dzi/flyer-jlg/output_files/12/2_4.jpeg","/dzi/flyer-jlg/output_files/12/2_5.jpeg","/dzi/flyer-jlg/output_files/12/2_6.jpeg","/dzi/flyer-jlg/output_files/12/2_7.jpeg","/dzi/flyer-jlg/output_files/12/2_8.jpeg","/dzi/flyer-jlg/output_files/12/2_9.jpeg","/dzi/flyer-jlg/output_files/12/3_0.jpeg","/dzi/flyer-jlg/output_files/12/3_1.jpeg","/dzi/flyer-jlg/output_files/12/3_10.jpeg","/dzi/flyer-jlg/output_files/12/3_11.jpeg","/dzi/flyer-jlg/output_files/12/3_12.jpeg","/dzi/flyer-jlg/output_files/12/3_13.jpeg","/dzi/flyer-jlg/output_files/12/3_2.jpeg","/dzi/flyer-jlg/output_files/12/3_3.jpeg","/dzi/flyer-jlg/output_files/12/3_4.jpeg","/dzi/flyer-jlg/output_files/12/3_5.jpeg","/dzi/flyer-jlg/output_files/12/3_6.jpeg","/dzi/flyer-jlg/output_files/12/3_7.jpeg","/dzi/flyer-jlg/output_files/12/3_8.jpeg","/dzi/flyer-jlg/output_files/12/3_9.jpeg","/dzi/flyer-jlg/output_files/12/4_0.jpeg","/dzi/flyer-jlg/output_files/12/4_1.jpeg","/dzi/flyer-jlg/output_files/12/4_10.jpeg","/dzi/flyer-jlg/output_files/12/4_11.jpeg","/dzi/flyer-jlg/output_files/12/4_12.jpeg","/dzi/flyer-jlg/output_files/12/4_13.jpeg","/dzi/flyer-jlg/output_files/12/4_2.jpeg","/dzi/flyer-jlg/output_files/12/4_3.jpeg","/dzi/flyer-jlg/output_files/12/4_4.jpeg","/dzi/flyer-jlg/output_files/12/4_5.jpeg","/dzi/flyer-jlg/output_files/12/4_6.jpeg","/dzi/flyer-jlg/output_files/12/4_7.jpeg","/dzi/flyer-jlg/output_files/12/4_8.jpeg","/dzi/flyer-jlg/output_files/12/4_9.jpeg","/dzi/flyer-jlg/output_files/12/5_0.jpeg","/dzi/flyer-jlg/output_files/12/5_1.jpeg","/dzi/flyer-jlg/output_files/12/5_10.jpeg","/dzi/flyer-jlg/output_files/12/5_11.jpeg","/dzi/flyer-jlg/output_files/12/5_12.jpeg","/dzi/flyer-jlg/output_files/12/5_13.jpeg","/dzi/flyer-jlg/output_files/12/5_2.jpeg","/dzi/flyer-jlg/output_files/12/5_3.jpeg","/dzi/flyer-jlg/output_files/12/5_4.jpeg","/dzi/flyer-jlg/output_files/12/5_5.jpeg","/dzi/flyer-jlg/output_files/12/5_6.jpeg","/dzi/flyer-jlg/output_files/12/5_7.jpeg","/dzi/flyer-jlg/output_files/12/5_8.jpeg","/dzi/flyer-jlg/output_files/12/5_9.jpeg","/dzi/flyer-jlg/output_files/12/6_0.jpeg","/dzi/flyer-jlg/output_files/12/6_1.jpeg","/dzi/flyer-jlg/output_files/12/6_10.jpeg","/dzi/flyer-jlg/output_files/12/6_11.jpeg","/dzi/flyer-jlg/output_files/12/6_12.jpeg","/dzi/flyer-jlg/output_files/12/6_13.jpeg","/dzi/flyer-jlg/output_files/12/6_2.jpeg","/dzi/flyer-jlg/output_files/12/6_3.jpeg","/dzi/flyer-jlg/output_files/12/6_4.jpeg","/dzi/flyer-jlg/output_files/12/6_5.jpeg","/dzi/flyer-jlg/output_files/12/6_6.jpeg","/dzi/flyer-jlg/output_files/12/6_7.jpeg","/dzi/flyer-jlg/output_files/12/6_8.jpeg","/dzi/flyer-jlg/output_files/12/6_9.jpeg","/dzi/flyer-jlg/output_files/12/7_0.jpeg","/dzi/flyer-jlg/output_files/12/7_1.jpeg","/dzi/flyer-jlg/output_files/12/7_10.jpeg","/dzi/flyer-jlg/output_files/12/7_11.jpeg","/dzi/flyer-jlg/output_files/12/7_12.jpeg","/dzi/flyer-jlg/output_files/12/7_13.jpeg","/dzi/flyer-jlg/output_files/12/7_2.jpeg","/dzi/flyer-jlg/output_files/12/7_3.jpeg","/dzi/flyer-jlg/output_files/12/7_4.jpeg","/dzi/flyer-jlg/output_files/12/7_5.jpeg","/dzi/flyer-jlg/output_files/12/7_6.jpeg","/dzi/flyer-jlg/output_files/12/7_7.jpeg","/dzi/flyer-jlg/output_files/12/7_8.jpeg","/dzi/flyer-jlg/output_files/12/7_9.jpeg","/dzi/flyer-jlg/output_files/12/8_0.jpeg","/dzi/flyer-jlg/output_files/12/8_1.jpeg","/dzi/flyer-jlg/output_files/12/8_10.jpeg","/dzi/flyer-jlg/output_files/12/8_11.jpeg","/dzi/flyer-jlg/output_files/12/8_12.jpeg","/dzi/flyer-jlg/output_files/12/8_13.jpeg","/dzi/flyer-jlg/output_files/12/8_2.jpeg","/dzi/flyer-jlg/output_files/12/8_3.jpeg","/dzi/flyer-jlg/output_files/12/8_4.jpeg","/dzi/flyer-jlg/output_files/12/8_5.jpeg","/dzi/flyer-jlg/output_files/12/8_6.jpeg","/dzi/flyer-jlg/output_files/12/8_7.jpeg","/dzi/flyer-jlg/output_files/12/8_8.jpeg","/dzi/flyer-jlg/output_files/12/8_9.jpeg","/dzi/flyer-jlg/output_files/12/9_0.jpeg","/dzi/flyer-jlg/output_files/12/9_1.jpeg","/dzi/flyer-jlg/output_files/12/9_10.jpeg","/dzi/flyer-jlg/output_files/12/9_11.jpeg","/dzi/flyer-jlg/output_files/12/9_12.jpeg","/dzi/flyer-jlg/output_files/12/9_13.jpeg","/dzi/flyer-jlg/output_files/12/9_2.jpeg","/dzi/flyer-jlg/output_files/12/9_3.jpeg","/dzi/flyer-jlg/output_files/12/9_4.jpeg","/dzi/flyer-jlg/output_files/12/9_5.jpeg","/dzi/flyer-jlg/output_files/12/9_6.jpeg","/dzi/flyer-jlg/output_files/12/9_7.jpeg","/dzi/flyer-jlg/output_files/12/9_8.jpeg","/dzi/flyer-jlg/output_files/12/9_9.jpeg","/dzi/flyer-jlg/output_files/2/0_0.jpeg","/dzi/flyer-jlg/output_files/3/0_0.jpeg","/dzi/flyer-jlg/output_files/4/0_0.jpeg","/dzi/flyer-jlg/output_files/5/0_0.jpeg","/dzi/flyer-jlg/output_files/6/0_0.jpeg","/dzi/flyer-jlg/output_files/7/0_0.jpeg","/dzi/flyer-jlg/output_files/8/0_0.jpeg","/dzi/flyer-jlg/output_files/9/0_0.jpeg","/dzi/flyer-jlg/output_files/9/0_1.jpeg","/dzi/flyer-jlg/output_files/9/1_0.jpeg","/dzi/flyer-jlg/output_files/9/1_1.jpeg","/dzi/flyer-jlg/output_files/vips-properties.xml","/dzi/flyer-jlg/thumb.jpg","/favicon.png","/fonts/bak/source-serif-pro-v10-latin-300.woff","/fonts/bak/source-serif-pro-v10-latin-300.woff2","/fonts/bak/source-serif-pro-v10-latin-300italic.woff","/fonts/bak/source-serif-pro-v10-latin-300italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff2","/fonts/source-serif-pro-v15-latin-ext_latin_greek_cyrillic-300.woff","/fonts/source-serif-pro-v15-latin-ext_latin_greek_cyrillic-300.woff2","/fonts/source-serif-pro-v15-latin-ext_latin_greek_cyrillic-300italic.woff","/fonts/source-serif-pro-v15-latin-ext_latin_greek_cyrillic-300italic.woff2","/global.css","/jlg-918x480.jpg","/jlg.jpg","/logo-192.png","/logo-512.png","/logo-918x480.jpg","/manifest.json"]),i=new Set(t);self.addEventListener("install",(e=>{e.waitUntil(caches.open(l).then((e=>e.addAll(t))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const t of e)t!==l&&await caches.delete(t);self.clients.claim()})))})),self.addEventListener("fetch",(l=>{if("GET"!==l.request.method||l.request.headers.has("range"))return;const t=new URL(l.request.url),f=t.protocol.startsWith("http"),_=t.hostname===self.location.hostname&&t.port!==self.location.port,p=t.host===self.location.host&&i.has(t.pathname),u="only-if-cached"===l.request.cache&&!p;!f||_||u||l.respondWith((async()=>p&&await caches.match(l.request)||async function(l){const t=await caches.open(`offline${e}`);try{const e=await fetch(l);return t.put(l,e.clone()),e}catch(e){const i=await t.match(l);if(i)return i;throw e}}(l.request))())}))}();
