const CACHE_NAME = "wavekit-shell-v70";
const APP_SHELL = [
  "/",
  "/index.html",
  "/site.webmanifest",
  "/weapons/",
  "/styles.css?v=release-20260723-readability-6",
  "/characters/",
  "/assets/characters-page.js?v=characters-directory-1",
  "/app.js?v=release-20260723-readability-6",
  "/assets/mobile-navigation.js?v=release-20260718-5",
  "/assets/wavekit-hero-v2.png",
  "/assets/material-data.js?v=20260722-1",
  "/assets/verified-guide-data.js?v=20260722-1",
  "/assets/team-build-context.js?v=20260723-readability-6",
  "/assets/material-planner-core.js?v=materials-1",
  "/assets/weapon-images.js?v=proper-weapons-2",
  "/assets/weapons-page.js?v=single-open-2",
  "/assets/wavekit-mark.png",
  "/assets/wavecat.js?v=wavecat-rest-4",
  "/assets/mascot/wavecat-idle-pixel.png",
  "/assets/mascot/wavecat-settle-pixel.png",
  "/assets/wallpapers/rover-male.png",
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
