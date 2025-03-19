import './App.css';
import { useState } from 'react';

export function FormInputs() {
	const [inputs, setInputs] = useState({
		name: '',
		secondName: '',
		middleName: '',
	});
	const handleChange = (event) => {
		console.log('###: event: ', event);
		setInputs(prevState => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('###: submit: ', inputs);
	};
	return (
		<div className="App">
			<header className="App-header">
				<h6>Ref inputs - not control</h6>
				<div className="button-container">
					<form
						onChange={handleChange}
						onSubmit={handleSubmit}
					>
						<input type="text"
							   name="name"
							   placeholder="Name"
						/>
						<input type="text"
							   name="secondName"
							   placeholder="Second Name"
						/>
						<input type="text"
							   name="middleName"
							   placeholder="Middle name"
						/>
						<button type="submit">Submit</button>
					</form>
				</div>
			</header>
		</div>
	);
}
