if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js')
		.then(reg => console.log('SW registered', reg))
		.catch(err => console.log('SW registration error', err));

	if ('registerProtocolHandler' in navigator) {
		navigator.registerProtocolHandler(
			'web+posts',
			`${window.location.origin}/view-post?postUrl=%s`,
			'Posts Ninja',
		);
	}
}
