function retry(numRetries: number) {
	return function(target: any, key: string, descriptor: PropertyDescriptor) {
		const fn = descriptor.value;

		descriptor.value = async function(...args: any[]) {
			for (let i = 0; i <= numRetries; i++) {
				try {
					return await fn.apply(this, args);
				} catch (error: any) {
					console.log(`Method ${key} failed (${i + 1}/${numRetries + 1} retries): ${error.message}`);
					if (i === numRetries) {
						throw error;
					}
				}
			}
		};

		return descriptor;
	};
}

class MyClass6 {
	// @ts-ignore
	@retry(3)
	async fetch(url: string) {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
		}
		return response.json();
	}
}

const myClass6 = new MyClass6();
myClass6.fetch("https://jsonplaceholder.typicode.com/posts/1")
	.then(console.log);