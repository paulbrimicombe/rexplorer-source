!function(){"use strict";const t=1606600392683,r=`cache${t}`,a=`offline${t}`,s=["/client/client.57a014b5.js","/client/inject_styles.5607aec6.js","/client/index.7281ca3a.js","/client/index.f76a7dd2.js","/client/_common-styles.9c34c28b.js","/client/consorts.3d8823c2.js","/client/Modal.0a3e5191.js","/client/monarchs.b62498c0.js","/client/about.faf8cebc.js","/client/teams.3abc2481.js"].concat(["/service-worker-index.html","/apple-touch-logo.png","/crown.svg","/english-consort-crown.jpg","/english-monarch-crown.jpg","/global.css","/king-and-queen.jpg","/logo-192.png","/logo-512.png","/manifest.json","/maskable_icon.png","/portraits/Alfred the Great.jpg","/portraits/Anne.jpg","/portraits/Athelstan.jpg","/portraits/Charles I.jpg","/portraits/Charles II.jpg","/portraits/Eadgifu of Kent.jpg","/portraits/Ealhswith.jpg","/portraits/Edward I.jpg","/portraits/Edward II.jpg","/portraits/Edward III.jpg","/portraits/Edward IV.jpg","/portraits/Edward V.jpg","/portraits/Edward VI.jpg","/portraits/Edward VII.jpg","/portraits/Edward VIII.jpg","/portraits/Edward the Confessor.jpg","/portraits/Elizabeth I.jpg","/portraits/Elizabeth II.jpg","/portraits/George I.jpg","/portraits/George II.jpg","/portraits/George III.jpg","/portraits/George IV.jpg","/portraits/George V.jpg","/portraits/George VI.jpg","/portraits/Harold II.jpg","/portraits/Harthacnut.jpg","/portraits/Henry I.jpg","/portraits/Henry II.jpg","/portraits/Henry III.jpg","/portraits/Henry IV.jpg","/portraits/Henry V.jpg","/portraits/Henry VI.jpg","/portraits/Henry VII.jpg","/portraits/Henry VIII.jpg","/portraits/James I.jpg","/portraits/James II.jpg","/portraits/John.jpg","/portraits/Mary I.jpg","/portraits/Oliver Cromwell.jpg","/portraits/Richard II.jpg","/portraits/Richard III.jpg","/portraits/Richard the Lionheart.jpg","/portraits/Stephen.jpg","/portraits/Victoria.jpg","/portraits/William III & Mary II.jpg","/portraits/William IV.jpg","/portraits/William Rufus.jpg","/portraits/William the Conqueror.jpg","/portraits/Æthelflæd, Lady of the Mercians.jpg"]).concat(["/data/monarchs.json","/data/consorts.json","/data/teams.json"]).concat(["/"]).map((t=>`/rexplorer${t}`)),e=new Set(s),o=self;async function i(t){const r=await caches.open(a);try{const a=await fetch(t);return(`${a.status}`.startsWith("2")||`${a.status}`.startsWith("3"))&&r.put(t,a.clone()),a}catch(a){const s=await r.match(t);if(s)return s;throw a}}o.oninstall=t=>{t.waitUntil(caches.open(r).then((async t=>{await t.addAll(s),await t.add("/rexplorer")})).then((()=>{o.skipWaiting()})))},o.onactivate=t=>{t.waitUntil(caches.keys().then((async t=>{for(const s of t)s!==r&&s!==a&&await caches.delete(s);o.clients.claim()})))},o.onfetch=t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const r=new URL(t.request.url),a=r.protocol.startsWith("http"),s=r.hostname===self.location.hostname&&r.port!==self.location.port,o=r.host===self.location.host&&e.has(r.pathname),p="only-if-cached"===t.request.cache&&!o;!a||s||p||t.respondWith((async()=>{const r=await caches.match(t.request);return r&&o?r:r?(i(t.request).catch((r=>console.log("Error updating offline cached item",t.request.url,r))),r):i(t.request)})())}}();
