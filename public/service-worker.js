/* eslint-disable no-restricted-globals */
const CACHE_NAME = "frost-cache-v1";

const ASSETS_TO_CACHE = [
  "/", // root
  "/index.html",
  "/manifest.json",

  // 🖋️ Font
  "https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;600;700&display=swap",
  "https://fonts.gstatic.com/s/encodesansexpanded/v9/XYZ123.woff2", // optional: will be dynamically cached if you omit it

  // 🎥 Video & captions
  "/video.mp4",
  "/video_caption.vtt",

  // 🖼️ Images
  "/aboutImg.jpg",
  "/sendImg.png",
  "/sendImgHover.png",
  "/de.svg",
  "/gb.svg",
  "/hu.svg",
  "/10.jpg",
  "/12.jpg",
  "/13.jpg",
  "/15.jpg",
  "/22.jpg",
  "/logo.png",
  "/design.jpg",
  "/microdermal.jpg",
  "/piercing.jpg",
  "/tattoo.jpg",
  "/dia.png",
  "/bettina.png",
  "/edina.png",
  "/helga.png",
  "/zoltan.png",

  // 🌀 Lottie animations / JSON data
  "/doubleArrowDown.json",
  "/loading.json",
  "/email.json",
  "/error.json",
];

// 🧠 Install event: pre-cache important assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// ⚙️ Activate event: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
      )
  );
  self.clients.claim();
});

// 🚀 Fetch event: cache-first for static assets
self.addEventListener("fetch", (event) => {
  // Don’t cache API or external requests
  if (event.request.url.startsWith("http") === false) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          // Clone so we can cache it
          const responseClone = response.clone();

          // Only cache static assets (images, videos, fonts, JSON)
          if (
            /\.(png|jpg|jpeg|svg|webp|mp4|json|vtt|woff2?)$/i.test(
              event.request.url
            )
          ) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }

          return response;
        })
        .catch(() => caches.match("/offline.html")); // optional fallback
    })
  );
});
