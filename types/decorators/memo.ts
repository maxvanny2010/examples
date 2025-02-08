function memoize(target: any, key: string, descriptor: PropertyDescriptor) {
	const fn = descriptor.value;
	const cache = new Map();

	descriptor.value = function(...args: any[]) {
		const cacheKey = `${key}_${JSON.stringify(args)}`;

		if (cache.has(cacheKey)) {
			console.log(`Returning cached result for ${key}(${args})`);
			return cache.get(cacheKey);
		}

		const result = fn.apply(this, args);
		console.log(`Caching result for ${key}(${args})`);
		cache.set(cacheKey, result);
		return result;
	};

	return descriptor;
}


class MyClass {

	@memoize
	foo(a: number, b: number) {
		// simulation of heavy computing (1 second)
		const startTime = Date.now();
		while (Date.now() - startTime < 1000) {}
		return a + b;
	}


	@memoize
	bar() {
		return Math.random();
	}
}

const myClasses = new MyClass();
console.log(myClasses.foo(41, 1)); // 42, calculated result
console.log(myClasses.foo(41, 2)); // 43, calculated result
console.log(myClasses.foo(41, 1)); // 42, cached result
console.log(myClasses.foo(41, 1)); // 42, cached result
console.log(myClasses.foo(41, 2)); // 43, cached result
console.log(myClasses.foo(41, 2)); // 43, cached result

console.log(myClasses.bar()); // calculated result
console.log(myClasses.bar()); // cached (the same result)
console.log(myClasses.bar()); // cached (the same result)