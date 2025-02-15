import './App.css';
import { useState, useTransition } from 'react';

const LIST_SIZE = 20000;

export function Transition() {
	const [input, setInput] = useState('');
	const [list, setList] = useState([]);
	const [isPending, startTransition] = useTransition();
	const handleChange = (e) => {
		// react make render together with setList without transition
		// it takes a lot of time. separated these.
		setInput(e.target.value);
		// startTransition delay render setList. it is low down priority setList
		startTransition(() => {
			const l = [];
			for (let i = 0; i < LIST_SIZE; i++) {
				l.push(e.target.value);
			}
			setList(l);//delay render setList
		});
		return (
			<div className="App">
				<header className="App-header">
					<input type="text"
						   value={input}
						   onChange={handleChange}>
					</input>
					<div> {
						isPending ? 'Loading...' : list.map((item, index) => <div key={index}>{item}</div>)
					}</div>
				</header>
			</div>
		);
	};
}




