export {};

interface MyData {
	rating: { name: string; mark: string };
}

declare global {
	interface Window {
		_INITIAL_DATA_: MyData;
	}
}
