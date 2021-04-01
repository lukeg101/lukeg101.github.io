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

// local cache based on commit id - updates with new content
var CACHE_NAME = "Luke-Geeson-cache-{{ site.github.build_revision }}";

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

function clearCaches() {
  return caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(key) {
        return key.indexOf(version) !== 0;
      }).map(function(key) {
        return caches.delete(key);
      })
    );
  })
}

self.addEventListener('activate', event => {
  event.waitUntil(
    clearCaches().then( () => {
      return self.clients.claim();
    })
  );
});

