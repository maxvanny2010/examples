import { useState } from 'react';
import { List } from './List';

export const App = () => {
	const [count, setCount] = useState(0);
	return (
		<div>Count - {count}
			<button onClick={() => setCount(prev => prev + 1)}>Click</button>
			<List />
		</div>
	);
};