import './App.css';
import { useRef, useState } from 'react';

export function FormInputsFocusBlur() {
	const formRef = useRef(null);
	const inputNameRef = useRef(null);
	const [inputs, setInputs] = useState({
		name: '',
		secondName: '',
		middleName: '',
	});
	const handleBegin = () => {
		inputNameRef.current.focus();
	};
	const handleReset = () => {
		setInputs({});
		console.log('###: reset: ', inputs);
	};
	const handleChange = (event) => {
		if (event.target.value.includes('q')) {
			inputNameRef.current.blur();
		} else {
			setInputs(prevState => ({
				...prevState,
				[event.target.name]: event.target.value,
			}));
		}
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		formRef.current.reset();
		console.log('###: submit: ', inputs);
	};
	return (
		<div className="App">
			<header className="App-header">
				<h6>Form-Focus-Blur</h6>
				<div className="button-container">
					<button onClick={handleBegin}>Start to fill form
					</button>

					<form
						ref={formRef}
						onChange={handleChange}
						onSubmit={handleSubmit}
						onReset={handleReset}
					>
						<input type="text"
							   ref={inputNameRef}
							   onFocus={() => console.log('###: onFocus')}
							   onBlur={() => console.log('###: onBlur')}
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
	)
		;
}
