import './App.css';
import { useRef, useState } from 'react';

export function FormInputsReset() {
	const formRef = useRef(null);
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
		formRef.current.reset();
		console.log('###: submit: ', inputs);
	};
	const handleReset = () => {
		setInputs({});
		console.log('###: reset: ', inputs);
	};
	return (
		<div className="App">
			<header className="App-header">
				<h6>Form-Inputs-Reset</h6>
				<div className="button-container">
					<form
						ref={formRef}
						onChange={handleChange}
						onSubmit={handleSubmit}
						onReset={handleReset}
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
						<button type="reset">Reset</button>
					</form>
				</div>
			</header>
		</div>
	);
}
