import './App.css';
import { useState } from 'react';

export function CustomInputs() {
	const [value, setValue] = useState('');
	const handleChange = (event) => {
		console.log('###: change');
		console.dir('###: event', event.target);
		console.log('###: event', event.target.value);
		setValue(event.target.value);
	};
	const handleSubmit = () => {
		alert(value);
	};
	return (
		<div className="App">
			<header className="App-header">
				<h6>Input</h6>
				<div className="button-container">
					<input type="text"
						   onChange={handleChange} />
					<button onClick={handleSubmit}>Submit</button>
					<p>{value}</p>
				</div>
			</header>
		</div>
	);
}
