// Register the service worker

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js').then(function(registration){
    // Registeration was successful
    console.log('ServiceWorker registration successful with scope: ',
    registration.scope);
}).catch(function(err) {
    // Registration failed 
    console.log('ServiceWorker registration failed: ', err);
});
}