importScripts('/__WORKBOX/buildFile/workbox-core');
importScripts('/__WORKBOX/buildFile/workbox-cache-expiration');
importScripts('/__WORKBOX/buildFile/workbox-routing');
importScripts('/__WORKBOX/buildFile/workbox-strategies');

/* globals workbox */

workbox.routing.registerRoute(
  /.*.txt/,
  workbox.strategies.cacheFirst({
    cacheName: 'expiration-plugin-max-entries',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 1,
      }),
    ],
  })
);

self.addEventListener('install', (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
