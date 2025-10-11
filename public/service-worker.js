/* eslint-disable no-restricted-globals */
const CACHE_NAME = "frost-cache-v1";

// Assets to cache (paths are relative to public/)
const ASSETS_TO_CACHE = [
  "/images/aboutImg/aboutImg.jpg",
  "/images/bookingImgAnimation/email.json",
  "/images/bookingImgAnimation/error.json",
  "/images/bookingImgAnimation/sendImg.png",
  "/images/bookingImgAnimation/sendImgHover.png",
  "/images/flagIcons/de.svg",
  "/images/flagIcons/gb.svg",
  "/images/flagIcons/hu.svg",
  "/images/galleryCarouselImgs/10.jpg",
  "/images/galleryCarouselImgs/12.jpg",
  "/images/galleryCarouselImgs/13.jpg",
  "/images/galleryCarouselImgs/15.jpg",
  "/images/galleryCarouselImgs/22.jpg",
  "/images/heroArrowAnimation/doubleArrowDown.json",
  "/images/logoImgs/logo.png",
  "/images/servicesImgs/design.jpg",
  "/images/servicesImgs/microdermal.jpg",
  "/images/servicesImgs/piercing.jpg",
  "/images/servicesImgs/tattoo.jpg",
  "/images/splashAnimation/loading.json",
  "/images/splashAnimation/logo.png",
  "/images/testimonialsImgs/bettina.png",
  "/images/testimonialsImgs/dia.png",
  "/images/testimonialsImgs/edina.png",
  "/images/testimonialsImgs/helga.png",
  "/images/testimonialsImgs/zoltan.png",
  "/videos/video_caption.vtt",
  "/videos/video.mp4",
  "/fonts/EncodeSansExpanded-Regular.woff2", // add font file(s) to public/fonts/
];

// Install event: cache files
self.addEventListener("install", (event) => {
  console.log("[SW] Installing service worker...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Caching assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event: clean old caches
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating service worker...");
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
      )
  );
  self.clients.claim();
});

// Fetch event: serve from cache first, fallback to network
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log("[SW] Serving from cache:", event.request.url);
        return cachedResponse;
      }
      return fetch(event.request)
        .then((response) => {
          // Only cache GET requests for listed asset types
          const url = event.request.url;
          if (/\.(png|jpg|jpeg|svg|webp|mp4|json|vtt|woff2?)$/i.test(url)) {
            const responseClone = response.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(url, responseClone));
            console.log("[SW] Cached new asset:", url);
          }
          return response;
        })
        .catch(() => {
          console.warn(
            "[SW] Fetch failed, returning fallback:",
            event.request.url
          );
          return caches.match("/images/splashAnimation/logo.png"); // fallback image
        });
    })
  );
});
