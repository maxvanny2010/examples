import './App.css';
import { useState } from 'react';
import { useTimeout } from './index.jsx';

export function Timeout() {
	const [count, setCount] = useState(10);
	const { reset, clear } = useTimeout(() => setCount(0), 1000);
	return (
		<div className="App">
			<header className="App-header">
				<h6>useTimeout</h6>
				<div className="button-container">
					<div>{count}</div>
					<button onClick={() => setCount(c => c + 1)}>Increment</button>
					<button onClick={() => clear()}>Stop Timeout</button>
					<button onClick={() => reset()}>Run Timeout</button>
				</div>
			</header>
		</div>
	);
}
