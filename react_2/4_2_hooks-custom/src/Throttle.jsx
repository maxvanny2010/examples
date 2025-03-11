import './App.css';
import { useState } from 'react';
import { useThrottle } from './useThrottle.jsx';

export function Throttle() {
	const [value, setValue] = useState('');
	const throttleValue = useThrottle(value);
	return (
		<div className="App">
			<header className="App-header">
				<h6>useDebounce</h6>
				<div className="button-container">
					<input type="text"
						   value={value}
						   onChange={(e) => setValue(e.target.value)} />
					<div>{throttleValue}</div>
				</div>
			</header>
		</div>
	);
}
