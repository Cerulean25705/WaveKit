const CACHE_NAME = "wavekit-shell-v9";
const APP_SHELL = [
  "/",
  "/index.html",
  "/site.webmanifest",
  "/weapons/",
  "/styles.css?v=materials-1",
  "/assets/material-data.js?v=3.5-1",
  "/assets/material-planner-core.js?v=materials-1",
  "/assets/wavekit-mark.png",
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
