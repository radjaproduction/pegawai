// Service worker untuk Input Data — Radja Production
// Cuma cache "app shell" (file HTML-nya sendiri) supaya app tetap kebuka
// walau sinyal jelek. Data (Supabase) TETAP butuh koneksi internet karena
// selalu diambil realtime, sengaja TIDAK dicache di sini.

const CACHE_NAME = 'input-radja-shell-v1';
const SHELL_FILES = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES).catch(() => {}))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Jangan sentuh request ke Supabase / API luar sama sekali -> selalu network,
  // biar data selalu fresh dan tidak pernah kecache basi.
  if (req.method !== 'GET' || !req.url.startsWith(self.location.origin)) {
    return;
  }

  // Network-first untuk file HTML utama, biar update kode langsung kepakai
  // begitu ada versi baru; fallback ke cache kalau lagi offline.
  if (req.mode === 'navigate' || req.url.includes('index.html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first untuk asset statis lain (ikon, manifest).
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});