import './App.css';
import logo from './assets/logo.svg';
import { useState } from 'react';

const FIELDS = [
	{ id: '123', title: 'name' },
	{ id: '124', title: 'lastname' },
];

export function Item({ name }) {
	return (
		<div><span>{name}</span><input type="text" /></div>
	);
}

export function IndexItemGood() {
	const [items, setItems] = useState(FIELDS);
	const handleClick = () => {
		// if it right way for
		setItems([{ id: '232', title: 'New Field' }, ...items]);
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo}
					 className="App-logo"
					 alt="" />
				{
					items.map((item, index) =>
						// wrong if-> index <Item key={index}  name={item.title} />)}
						<Item key={item.id}
							  name={item.title} />)}
				<button onClick={handleClick}>Add</button>
			</header>
		</div>
	);
}



