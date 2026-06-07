self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('21days-v1').then(cache =>
      cache.addAll(['/', '/index.html', '/app.html', '/supabase.js'])
    )
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  )
})