import { useState } from 'react';

export const App = () => {
	const [count, setCount] = useState(0);
	return (
		<div>Count - {count}
			<button onClick={() => setCount(prevCount => prevCount + 1)}>Click</button>
		</div>
	);
};