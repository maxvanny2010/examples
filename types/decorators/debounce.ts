function debounce(delay: number) {
	return function (target: any, key: string, descriptor: PropertyDescriptor) {
		let timer: ReturnType<any>;
		const fn = descriptor.value;

		descriptor.value = function (...args: any[]) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				fn.call(this, ...args);
			}, delay);
		};

		return descriptor;
	};
}

class MyClass3 {

	@debounce(500)
	foo() {
		console.log('foo');
	}
}

const myClass3 = new MyClass3();
myClass3.foo();
myClass3.foo();
myClass3.foo();
myClass3.foo();
myClass3.foo();
myClass3.foo(); // foo

setTimeout(() => myClass3.foo(), 1000); // foo