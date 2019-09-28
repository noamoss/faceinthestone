var cachename = 'view';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cachename)
            .then(cache => cache.addAll([
                'images/project_logo.png',
                'images/view.jpg',
                'favicon.ico',
                'assets/css/main.css',
            ]))
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});