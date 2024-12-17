self.addEventListener('install', event => {
    console.log('Service Worker installiert.');
});

self.addEventListener('fetch', event => {
    console.log('Fetch:', event.request.url);
    event.respondWith(
        fetch(event.request).catch(() => new Response('Offline-Inhalt verfügbar'))
    );
});
