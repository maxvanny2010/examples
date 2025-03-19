import './App.css';
import { useState } from 'react';

export function ControlInputs() {
	const [inputs, setInputs] = useState({
		name: '',
		secondName: '',
		middleName: '',
	});
	const handleChange = (event) => {
		console.log('###: change event', event.target.value);
		if (event.target.value.includes('q')) {
			setInputs(prevState => ({
				...prevState,
				[event.target.name]: prevState[event.target.name] + '-',
			}));
		} else {
			setInputs(prevState => ({
				...prevState,
				[event.target.name]: event.target.value,
			}));
		}
	};
	const handleSubmit = () => {
		console.log('###: inputs: ', inputs);
		setInputs({
			name: '',
			secondName: '',
			middleName: '',
		});
	};
	return (
		<div className="App">
			<header className="App-header">
				<h6>Multi inputs</h6>
				<div className="button-container">
					<input type="text"
						   name="name"
						   value={inputs.name}
						   placeholder="Name"
						   onChange={handleChange} />
					<input type="text"
						   name="secondName"
						   value={inputs.secondName}
						   placeholder="Second Name"
						   onChange={handleChange} />
					<input type="text"
						   name="middleName"
						   value={inputs.middleName}
						   placeholder="Middle name"
						   onChange={handleChange} />
					<button onClick={handleSubmit}>Submit</button>
				</div>
			</header>
		</div>
	);
}
