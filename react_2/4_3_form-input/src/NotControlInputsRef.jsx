import './App.css';
import { useRef } from 'react';

export function NotControlInputsRef() {
	// each change make rerender
	/*const [inputs, setInputs] = useState({
		name: '',
		secondName: '',
		middleName: '',
	});*/
	console.log('###: render');
	const inputs = useRef({
		name: '',
		secondName: '',
		middleName: '',
	});
	const handleChange = (event) => {
		console.log('###: change event', event.target.value);
		inputs.current = {
			...inputs.current,
			[event.target.name]: event.target.value,
		};
	};
	const handleSubmit = () => {
		console.log('###: inputs: ', inputs.current);
	};
	return (
		<div className="App">
			<header className="App-header">
				<h6>Ref inputs - not control</h6>
				<div className="button-container">
					<input type="text"
						   name="name"
						   placeholder="Name"
						   onChange={handleChange} />
					<input type="text"
						   name="secondName"
						   placeholder="Second Name"
						   onChange={handleChange} />
					<input type="text"
						   name="middleName"
						   placeholder="Middle name"
						   onChange={handleChange} />
					<button onClick={handleSubmit}>Submit</button>
				</div>
			</header>
		</div>
	);
}
