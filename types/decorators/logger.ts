function log(target: any, key: string, descriptor: PropertyDescriptor) {
	const fn = descriptor.value;
	descriptor.value = function(...args: any[]) {
		console.log(`Entering ${key} with arguments: ${JSON.stringify(args)}`);
		const result = fn.apply(this, args);
		console.log(`Exiting ${key} with result: ${JSON.stringify(result)}`);
		return result;
	};
	return descriptor;
}

class MyClass8 {
	bar(): any {
		throw new Error('Method not implemented.');
	}

	@log
	foo(a: string, b: number) {
		return `${a} ${b}`;
	}
}

const myClass8 = new MyClass8();
myClass8.foo('Result', 42);
// Entering foo with arguments: ["Result",42]
// Exiting foo with result: "Result 42"