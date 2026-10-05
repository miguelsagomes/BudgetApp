const CACHE_NAME='budget-app-v4';
const APP_SHELL=['./','./index.html','./manifest.webmanifest','./budget-icon.svg'];
const CACHEABLE_HOSTS=new Set([
  'cdnjs.cloudflare.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com'
]);

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET') return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin&&!CACHEABLE_HOSTS.has(url.hostname)) return;

  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME);
    if(request.mode==='navigate'||url.pathname.endsWith('/index.html')){
      try{
        const response=await fetch(request);
        if(response.ok) await cache.put(request,response.clone());
        return response;
      }catch(error){
        const cached=await cache.match(request);
        if(cached) return cached;
        throw error;
      }
    }
    const cached=await cache.match(request);
    if(cached) return cached;
    const response=await fetch(request);
    if(response.ok||response.type==='opaque') await cache.put(request,response.clone());
    return response;
  })());
});
