const measure = (
	target: any,
	propertyKey: string,
	descriptor: PropertyDescriptor
) => {
	const fn = descriptor.value;

	descriptor.value = function (...args: any[]) {
		const start = performance.now();
		const result = fn.apply(this, args);
		const finish = performance.now();
		console.log(`Execution time: ${finish - start} milliseconds`);
		return result;
	};

	return descriptor;
};

class MyClass5 {

	@measure
	foo() {
		console.log('foo');
	}


	@measure
	bar() {
		// simulation of heavy computing (1 second)
		const startTime = Date.now();
		while (Date.now() - startTime < 1000) {}
		console.log('bar');
	}
}

const myClass5 = new MyClass5();
myClass5.foo(); // foo
// Execution time: 2.299999952316284 milliseconds

myClass5.bar(); // bar
// Execution time: 1002.1000001430511 milliseconds