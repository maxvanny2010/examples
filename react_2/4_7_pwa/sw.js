const staticCacheName = 'static-site-v1';
const ASSETS = [
	'/',
	'/index.html',
	'/css/styles.css',
	'/css/materialize.min.css',
	'/js/app.js',
	'/js/ui.js',
	'/js/materialize.min.js',
	'https://fonts.googleapis.com/icon?family=Material+Icons',
	'https://fonts.gstatic.com/s/materialicons/v143/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
];
self.addEventListener('install', (event) => {
	event.waitUntil(
		(async () => {
			const cache = await caches.open(staticCacheName);
			for (const asset of ASSETS) {
				try {
					const response = await fetch(asset);
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					await cache.put(asset, response);
					console.log(`Success cache: ${asset}`);
				} catch (error) {
					console.error(`Fall cache: ${asset}`, error);
				}
			}
		})(),
	);
});


self.addEventListener('activate', async (event) => {
	const cachesKeyArr = await caches.keys();
	console.log('Caches keys:', cachesKeyArr);
	await Promise.all(
		cachesKeyArr.filter(key => key !== staticCacheName)
			.map(key => caches.delete(key)));

});
self.addEventListener('fetch', (event) => {
	event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
	const request = event.request;

	// trying to find request in the cache
	const cachedResponse = await caches.match(request);
	if (cachedResponse) {
		return cachedResponse;
	}

	try {
		// if it hasn't in the cache look for in internet
		const fetchResponse = await fetch(request);

		// to the cache only owner link requests
		if (
			request.method === 'GET' &&
			request.url.startsWith(self.location.origin)
		) {
			const cache = await caches.open(staticCacheName);
			// response make clone cause only one response
			await cache.put(request, fetchResponse.clone());
		}

		return fetchResponse;
	} catch (error) {
		// if offline to get offline.html
		return await caches.match('/offline.html');
	}
}

/*self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then(cacheRes => {
			return cacheRes || fetch(event.request).then(fetchRes => {
				return caches.open(staticCacheName).then(cache => {
					// Cache to only owner site
					if (event.request.method === 'GET' && event.request.url.startsWith(self.location.origin)) {
						cache.put(event.request, fetchRes.clone()).then(r => r);
					}
					return fetchRes;
				});
			});
		}).catch(() => {
			return caches.match('/offline.html');
		}),
	);
});*/
