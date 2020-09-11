const staticCacheName = 'site-static-v1';
const assets = [
    '/',
    '/index.html',
    '/css/style.css',
    '/images/clouds.png',
    '/weather.js',
    '/fallback.html'
];

const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name, size))
            }
        })
    })
}


self.addEventListener('install', e => {
    console.log('service worker has been installed')
    e.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets')
            cache.addAll(assets)
        })
    );
    
})

self.addEventListener('activate', e => {
    console.log('service worker has been activated')
    e.waitUntil(
        caches.keys().then(keys => {
            console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            )
        })
    );
})

self.addEventListener('fetch', e => {
    console.log('fetch event', e)
    e.respondWith(
        caches.match(e.request).then(cacheRes => {
            return cacheRes || fetch(e.request);
        }).catch(() => { 
            if (e.request.url.indexOf('.html') > -1) {
            caches.match('/fallback.html')
            }
        })    
    )
})