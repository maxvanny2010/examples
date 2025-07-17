import { Suspense, useState } from 'react';
import { List } from './List';

/**
 * suspense and react 18 don't work. use 19+
 */
export const App = () => {
	const [count, setCount] = useState(0);
	return (
		<div>Count - {count}
			<button onClick={() => setCount(prev => prev + 1)}>Click</button>
			<Suspense fallback={<div>Loading...</div>}>
				<List />
			</Suspense>
		</div>
	);
};