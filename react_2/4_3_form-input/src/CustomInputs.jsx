import './App.css';
import { useState } from 'react';

export function CustomInputs() {
	const [value, setValue] = useState('');
	return (
		<div className="App">
			<header className="App-header">
				<h6>useArray</h6>
				<div className="button-container">
					<input type="text" />
					<button>Submit</button>
				</div>
			</header>
		</div>
	);
}
