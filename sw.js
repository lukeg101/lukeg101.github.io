---
layout: null
---

var urlsToCache = [];

// Cache blogs
{% for blogs in site.blog %}
  urlsToCache.push("{{ blogs.url }}")
{% endfor %}

// Cache talks
{% for talk in site.talks %}
  urlsToCache.push("{{ talk.url }}")
{% endfor %}

var CACHE_NAME = 'Luke-Geeson-cache-{{ site.github.build_revision }}';

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// If caches return item from cache, otherwise fetch
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

// update cache with new fetch
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return fetch(event.request).then(function(response) {
        cache.put(event.request, response.clone());
        return response;
      });
    })
  );
});

// remove old caches when cache name updates
self.addEventListener('activate', function(event) {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();

    await Promise.all(cacheNames.map(async (cacheName) => {
      if (self.cacheName !== cacheName) {
        await caches.delete(cacheName);
      }
    }));
  })());
});


