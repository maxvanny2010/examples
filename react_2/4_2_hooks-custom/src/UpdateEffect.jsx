import './App.css';
import { useState } from 'react';
import { useUpdateEffect } from './index.jsx';

export function UpdateEffect() {
	const [count, setCount] = useState(10);
	useUpdateEffect(() => {
		alert(`useUpdateEffect ${count}`);
	}, [count]);
	return (
		<div className="App">
			<header className="App-header">
				<h6>useUpdateEffect</h6>
				<div className="button-container">
					<div>{count}</div>
					<button onClick={() => setCount(c => c + 1)}>Increment</button>
				</div>
			</header>
		</div>
	);
}
