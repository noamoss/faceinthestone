var cachename = 'view';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cachename)
            .then(cache => cache.addAll([
                '/images/project_logo.png',
                '/images/view.jpg',
                '/favicon.ico',
                '/assets/css/main.css',
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

        var requestToCache = event.request.clone();                

        return fetch(requestToCache).then(                         
          function(response) {
            if(!response || response.status !== 200) {             
              return response;
            }

            var responseToCache = response.clone();                

            caches.open(cacheName)                                 
              .then(function(cache) {
                cache.put(requestToCache, responseToCache);        
              });

            return response;
          }
        );
      })
    );
});