const cacheName = "servicios-cache-v1";
const filesToCache = [
  "/",
  "/home.html",
  "/styles.css",
  "/plomeria.html",
  "/albanileria.html",
  "/herreria.html",
  "/grua.html",
  "/containers.html",
  "/fletes.html",
  "/mini-fletes.html",
  "/comisiones.html",
  "/pintura.html",
  "/carpinteria.html",
  "/enfermeria.html",
  "/veterinaria.html",
  "/reparacion-heladeras.html",
  "/reparacion-lavarropas.html",
  "/aire-acondicionado.html",
  "/costura.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});
