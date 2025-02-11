import './App.css';
import logo from './assets/logo.svg';
import { useState } from 'react';


export function IndexItemBad() {
	const [items, setItems] = useState([1, 1, 2, 3, 4, 5]);
	const handleClick = () => {
		// if to add like a first element it doesn't work - 2 renders
		setItems([items.length, ...items]);
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo}
					 className="App-logo"
					 alt="" />
				{
					items.map((item, index) => {
						return (
							<div key={index}>
								{item}
							</div>);
					})
				}
				<button onClick={handleClick}>Add</button>
			</header>
		</div>
	);
}



