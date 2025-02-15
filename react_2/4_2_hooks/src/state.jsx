import './App.css';
import { useState } from 'react';

const ARR = [
	1, 2, 3, 4, 5,
];

export function State() {
//	const [count, setCount] = useState(()=> ARR.reduce((acc, item) => acc + item));
	/*	const [count, setCount] = useState(() => {
			if (ARR.length > 0) {
				return ARR.reduce((acc, item) => acc + item);
			}
			return 0;
		});*/
	console.log('####: render');
	const [count, setCount] = useState(() => ARR.reduce((acc, item) => acc + item));
	const handleMinusClick = () => {
		console.log('####: count', count);
		// setCount(count - 1); don't work need function
		//	setCount(count - 1); don't work need function
		setCount(prevState => {
			console.log('####: prevState', prevState);
			return prevState - 1;
		});
		setCount(prevState => {
			console.log('####: prevState', prevState);
			return prevState - 1;
		});
		console.log('####: count', count);
	};
	const handlePlusClick = () => {
		setCount(count + 1);
	};
	return (
		<div className="App">
			<header className="App-header">
				<div className="App-counter">
					{count}
				</div>
				<div className="App-wrap">
					<button className="App-button"
							onClick={handleMinusClick}> -
					</button>
					<button className="App-button"
							onClick={handlePlusClick}> +
					</button>
				</div>
			</header>
		</div>
	);
}



