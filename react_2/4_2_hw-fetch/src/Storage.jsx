import { useLocalStorage } from './useLocalStorage';

export function Storage() {
	const [value, { setItem, removeItem }] = useLocalStorage('some-key');

	return (
		<div>
			<p>Value from LocalStorage: {value}</p>
			<div>
				<button onClick={() => setItem('new storage value')}>Set value</button>
				<button onClick={() => removeItem()}>Remove value</button>
			</div>
		</div>
	);
}
