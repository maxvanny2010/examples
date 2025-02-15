import './App.css';
import logo from './assets/logo.svg';
import { useRef, useState } from 'react';

export function Ref() {
	const [count, setCount] = useState(0);
	const countRef = useRef(0);
	console.log('####: countRef', countRef);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo}
					 className="App-logo"
					 alt="logo" />
				<p>
					Count state: {count}
				</p>
				<p>
					Count ref:{countRef.current}
				</p>
				<button onClick={() => setCount(p => p + 1)}>Click count</button>
				<button onClick={() => countRef.current = countRef.current + 1}>Click count Ref</button>
			</header>
		</div>
	);
}



