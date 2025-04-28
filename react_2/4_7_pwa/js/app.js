if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js')
		.then(reg => console.log('SW register', reg))
		.catch(err => console.log('SW error', err));
}