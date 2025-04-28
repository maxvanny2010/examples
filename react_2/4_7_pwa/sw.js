self.addEventListener('install', (event) => {
	console.log('SW has been installed');
});
self.addEventListener('activate', (event) => {
	console.log('SW has been activate');
});