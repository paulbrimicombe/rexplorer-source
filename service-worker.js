!function(){"use strict";const t=1615122323717,r=`cache${t}`,a=`offline${t}`,o=["/client/client.85de1007.js","/client/inject_styles.5607aec6.js","/client/index.7c223469.js","/client/Banner.319af3f5.js","/client/_common-styles.9c34c28b.js","/client/consorts.a946d960.js","/client/Modal.014c49d9.js","/client/RatingsPage.820b0ede.js","/client/monarchs.915fff9c.js","/client/about.0bf129f4.js","/client/teams.49c70204.js","/client/game.1c4d2a92.js"].concat(["/service-worker-index.html","/apple-touch-logo.png","/baize.jpg","/card.jpg","/confessor.jpg","/consort.jpg","/crown.svg","/global.css","/king-and-queen-playing-chess.jpg","/king-and-queen.jpg","/logo-192.png","/logo-512.png","/manifest.json","/maskable_icon.png","/monarch.jpg","/portraits/Adeliza of Louvain.jpg","/portraits/Aethelred the Unready.jpg","/portraits/Alfred the Great.jpg","/portraits/Anne.jpg","/portraits/Athelstan.jpg","/portraits/Charles I.jpg","/portraits/Charles II.jpg","/portraits/Cnut.jpg","/portraits/Eadgifu of Kent.jpg","/portraits/Eadred.jpg","/portraits/Eadwig.jpg","/portraits/Ealdgyth of Mercia.jpg","/portraits/Ealdgyth.jpg","/portraits/Ealhswith.jpg","/portraits/Edgar the Peaceable.jpg","/portraits/Edith of Wessex.jpg","/portraits/Edmund I.jpg","/portraits/Edmund Ironside.jpg","/portraits/Edward I.jpg","/portraits/Edward II.jpg","/portraits/Edward III.jpg","/portraits/Edward IV.jpg","/portraits/Edward V.jpg","/portraits/Edward VI.jpg","/portraits/Edward VII.jpg","/portraits/Edward VIII.jpg","/portraits/Edward the Confessor.jpg","/portraits/Edward the Elder.jpg","/portraits/Edward the Martyr.jpg","/portraits/Elizabeth I.jpg","/portraits/Elizabeth II.jpg","/portraits/Emma of Normandy.jpeg","/portraits/Emma of Normandy.jpg","/portraits/George I.jpg","/portraits/George II.jpg","/portraits/George III.jpg","/portraits/George IV.jpg","/portraits/George V.jpg","/portraits/George VI.jpg","/portraits/Harold I.jpg","/portraits/Harold II.jpg","/portraits/Harthacnut.jpg","/portraits/Henry I.jpg","/portraits/Henry II.jpg","/portraits/Henry III.jpg","/portraits/Henry IV.jpg","/portraits/Henry V.jpg","/portraits/Henry VI.jpg","/portraits/Henry VII.jpg","/portraits/Henry VIII.jpg","/portraits/James I.jpg","/portraits/James II.jpg","/portraits/John.jpg","/portraits/Mary I.jpg","/portraits/Matilda of Boulogne.jpg","/portraits/Matilda of Flanders.jpg","/portraits/Matilda of Scotland.jpg","/portraits/Oliver Cromwell.jpg","/portraits/Richard II.jpg","/portraits/Richard III.jpg","/portraits/Richard the Lionheart.jpg","/portraits/Sigrid the Haughty.jpg","/portraits/Stephen.jpg","/portraits/Sweyn Forkbeard.jpg","/portraits/Victoria.jpg","/portraits/William III & Mary II.jpg","/portraits/William IV.jpg","/portraits/William Rufus.jpg","/portraits/William the Conqueror.jpg","/portraits/Wulfthryth.jpg","/portraits/Ælfflæd.jpg","/portraits/Ælfgifu of Northampton.jpg","/portraits/Ælfgifu of Shaftesbury.jpg","/portraits/Ælfgifu of York.jpg","/portraits/Ælfgifu.jpg","/portraits/Ælfthryth.jpg","/portraits/Æthelflæd Eneda.jpg","/portraits/Æthelflæd of Damerham.jpg","/portraits/Æthelflæd, Lady of the Mercians.jpg","/uncial.woff2"]).concat(["/data/monarchs.json","/data/consorts.json","/data/teams.json"]).concat("/").map((t=>`/rexplorer${t}`)),p=new Set(o),e=self;async function s(t){const r=await caches.open(a);try{const a=await fetch(t);return`${a.status}`.startsWith("2")&&r.put(t,a.clone()),a}catch(a){const o=await r.match(t);if(o)return o;throw a}}e.oninstall=t=>{t.waitUntil(caches.open(r).then((async t=>{await t.addAll(o),await t.add("/rexplorer"),await e.skipWaiting()})))},e.onactivate=t=>{t.waitUntil(e.clients.matchAll().then((async t=>{t.map((t=>t.navigate(t.url)));const o=await caches.keys();for(const t of o)t!==r&&t!==a&&await caches.delete(t);await e.clients.claim()})))},e.onfetch=t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const r=new URL(t.request.url),a=r.protocol.startsWith("http"),o=r.hostname===self.location.hostname&&r.port!==self.location.port,e=r.host===self.location.host&&p.has(r.pathname),i="only-if-cached"===t.request.cache&&!e;!a||o||i||t.respondWith((async()=>{const r=await caches.match(t.request);return r&&e?r:r?r.url!==t.request.url?fetch(t.request):(s(t.request).catch((r=>console.log("Error updating offline cached item",t.request.url,r))),r):s(t.request)})())}}();
