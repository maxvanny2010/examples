import './App.css';
import { useEffect, useMemo, useState } from 'react';

export function Memo() {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);
	const doubleNumber = useMemo(() => slowFunction(number), [number]);
	const themeDark = useMemo(() => ({
		backgroundColor: dark ? '#282c34' : 'white',
		color: dark ? 'white' : '#282c34',
	}), [dark]);
	useEffect(() => {
		console.log('####: on each render created new themeDart if themeDart don\'t use useMemo');
	}, [themeDark]);
	return (
		<div className="App">
			<header className="App-header"
					style={themeDark}>
				<input type="number"
					   value={number}
					   onChange={e => setNumber(parseInt(e.target.value))}>
				</input>
				<button onClick={setDark(s => s > !s)}>Change Theme</button>
				<div> {doubleNumber}</div>
			</header>
		</div>
	);
}

function slowFunction(number) {
	const start = new Date().getTime();
	let end = start;
	while (end < start + 500) {
		end = new Date().getTime();
	}
	return number * 2;
}



