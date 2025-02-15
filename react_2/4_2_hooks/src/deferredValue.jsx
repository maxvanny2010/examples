import './App.css';
import { useDeferredValue, useMemo, useState } from 'react';

const LIST_SIZE = 20000;

function List({ getItems }) {
	// wait and working
	const deferredInput = useDeferredValue(input);
	console.log('####: input', input);
	console.log('####: deferredInput', deferredInput);
	const list = useMemo(() => {
		const l = [];
		for (let i = 0; i < LIST_SIZE; i++) {
			l.push(<div key={i}>{input}</div>);
		}
		return l;
	}, [deferredInput]);
	return (
		<div>{list}</div>
	);
}

export function DeferredValue() {
	const [input, setInput] = useState('');
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	return (
		<div className="App">
			<header className="App-header">
				<input type="text"
					   value={input}
					   onChange={handleChange}>
				</input>
				<div>
					<List input={input} />
				</div>
			</header>
		</div>
	);
}




