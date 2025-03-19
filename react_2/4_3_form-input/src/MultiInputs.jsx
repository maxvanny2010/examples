import './App.css';
import { useState } from 'react';

export function MultiInputs() {
	// wrong for a lot of fields
	/*const [name, setName] = useState('');
	const [second, setSecond] = useState('');
	const [middle, setMiddle] = useState('');*/

	const [inputs, setInputs] = useState({
		name: '',
		secondName: '',
		middleName: '',
	});
	const handleChange = (event) => {
		console.log('###: change');
		console.dir('###: event', event.target);
		console.log('###: event', event.target.value);
		// wrong. save one field
		/*setInputs({
			[event.target.name]: event.target.value,
		});*/
		/*setInputs(prevState => {
		...prevState, // Ошибка! Развёртывание без return не работает
				[event.target.name]: event.target.value,
		});*/
		/*setInputs(prevState => {
			return {
				...prevState,
				[event.target.name]: event.target.value,
			};
		});*/
		/*=> ({ ... }) — краткая форма возврата объекта.
		=> { return { ... }; } — эквивалентный вариант с явным return*/
		setInputs(prevState => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};
	const handleSubmit = () => {
		console.log('###: inputs: ', inputs);
	};
	return (
		<div className="App">
			<header className="App-header">
				<h6>useArray</h6>
				<div className="button-container">
					<input type="text"
						   name="name"
						   placeholder="Name"
						   onChange={handleChange} />
					<input type="text"
						   name="second"
						   placeholder="Second Name"
						   onChange={handleChange} />
					<input type="text"
						   name="middle"
						   placeholder="Middle name"
						   onChange={handleChange} />
					<button onClick={handleSubmit}>Submit</button>
				</div>
			</header>
		</div>
	);
};
