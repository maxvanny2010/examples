import './App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';

function List({ getItems }) {
	const [items, setItems] = useState([]);
	useEffect(() => {
		console.log('#### useEffect getItems');
		setItems(getItems(5));
	}, [getItems]);
	return (
		<ul>
			{
				items.map(item => <li key={items}>{item}</li>)
			}
		</ul>
	);
}

export function Callback() {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	const themeDark = useMemo(() => ({
		backgroundColor: dark ? '#282c34' : 'white',
		color: dark ? 'white' : '#282c34',
	}), [dark]);
	// if don't use useCallback to lose link to function, and it will recreated again
    // keep link to function. useMemo keep result
	const getItems = useCallback((inc) => {
		return [number + inc, number + inc, number + 2];
	}, [number]);

	return (
		<div className="App">
			<header className="App-header"
					style={themeDark}>
				<input type="number"
					   value={number}
					   onChange={e => setNumber(parseInt(e.target.value))}>
				</input>
				<button onClick={setDark(s => s > !s)}>Change Theme</button>
				<div>
					{{/* if change theme and don't use useCallback for getItems,
					 it is recall useEffect from list*/
					}}
					<List getItems={getItems} />
				</div>
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



