function deprecated(message: string) {
	return function(target: any, key: string, descriptor: PropertyDescriptor) {
		const fn = descriptor.value;
		descriptor.value = function(...args: any[]) {
			console.warn(`Method ${key}() is deprecated. ${message}`);
			return fn.apply(this, args);
		}
		return descriptor;
	}
}

class MyClass7 {

	@deprecated('Please use bar() instead.')
	foo(): void {
		console.log('foo');
	}

	bar(): void {
		console.log('bar');
	}
}

const myClass7 = new MyClass7();
myClass7.foo();