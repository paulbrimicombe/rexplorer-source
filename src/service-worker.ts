import { timestamp, files, shell } from "@sapper/service-worker";

const STATIC_ASSETS_CACHE_KEY = `cache${timestamp}`;
const OFFLINE_ASSETS_CACHE_KEY = `offline${timestamp}`;

const DATA_ENDPOINTS = [
  "/data/monarchs.json",
  "/data/consorts.json",
  "/data/teams.json",
];

// `shell` is an array of all the files generated by the bundler,
// `files` is an array of everything in the `static` directory
const to_cache = shell
  .concat(files)
  .concat(DATA_ENDPOINTS)
  .concat("/")
  .map((path) => `/rexplorer${path}`);

const staticAssets = new Set(to_cache);

const serviceWorker = (self as any) as ServiceWorkerGlobalScope;

serviceWorker.oninstall = (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(STATIC_ASSETS_CACHE_KEY).then(async (cache) => {
      await cache.addAll(to_cache);
      await cache.add("/rexplorer");
      await serviceWorker.skipWaiting();
    })
  );
};

serviceWorker.onactivate = (event: ExtendableEvent) => {
  event.waitUntil(
    serviceWorker.clients.matchAll({
      includeUncontrolled: true
    }).then(async (clients) => {
      const cacheKeys = await caches.keys();
      // delete old caches
      for (const key of cacheKeys) {
        if (key !== STATIC_ASSETS_CACHE_KEY && key !== OFFLINE_ASSETS_CACHE_KEY)
          await caches.delete(key);
      }
      await serviceWorker.clients.claim();
      // Hard-refresh clients
      clients.map((client) => (client as any).navigate(client.url));
    })
  );
};

/**
 * Fetch the asset from the network and store it in the cache.
 * Fall back to the cache if the user is offline.
 */
async function fetchAndCache(request: Request) {
  const cache = await caches.open(OFFLINE_ASSETS_CACHE_KEY);

  try {
    const response = await fetch(request);

    if (`${response.status}`.startsWith("2")) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response) return response;

    throw err;
  }
}

serviceWorker.onfetch = (event: FetchEvent) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;

  const url = new URL(event.request.url);

  // don't try to handle e.g. data: URIs
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest =
    url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset =
    url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached =
    event.request.cache === "only-if-cached" && !isStaticAsset;

  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith(
      (async () => {
        const cachedAsset = await caches.match(event.request);

        if (cachedAsset && isStaticAsset) {
          return cachedAsset;
        }

        if (!cachedAsset) {
          return fetchAndCache(event.request);
        }

        if (cachedAsset.url !== event.request.url) {
          return fetch(event.request);
        }

        fetchAndCache(event.request).catch((error) =>
          console.log(
            "Error updating offline cached item",
            event.request.url,
            error
          )
        );

        return cachedAsset;
      })()
    );
  }
};
