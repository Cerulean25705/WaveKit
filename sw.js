const CACHE_NAME = "wavekit-shell-v19";
const APP_SHELL = [
  "/",
  "/index.html",
  "/site.webmanifest",
  "/weapons/",
  "/styles.css?v=my-wavekit-6",
  "/app.js?v=my-wavekit-10",
  "/assets/material-data.js?v=3.5-1",
  "/assets/material-planner-core.js?v=materials-1",
  "/assets/weapon-images.js?v=proper-weapons-2",
  "/assets/weapons-page.js?v=release-audit-1",
  "/assets/wavekit-mark.png",
  "/assets/wavekit-icon-192.png",
  "/assets/wavekit-icon-512.png",
  "/assets/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || request.mode !== "navigate") return;

  event.respondWith(
    fetch(request).catch(() => caches.match("/index.html"))
  );
});
