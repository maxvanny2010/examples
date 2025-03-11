import './App.css';
import { useState } from 'react';
import { useDebounce } from './index.jsx';

export function Debounce() {
	const [count, setCount] = useState(10);
	const [val, setVal] = useState('');
	useDebounce(() => console.log('####: Request API'), 1000, [val]);
	return (
		<div className="App">
			<header className="App-header">
				<h6>useDebounce</h6>
				<div className="button-container">
					<div>{count}</div>
					<input type="text"
						   value={val}
						   onChange={(e) => setVal(e.target.value)} />
					<button onClick={() => setCount(c => c + 1)}>Increment</button>
				</div>
			</header>
		</div>
	);
}
