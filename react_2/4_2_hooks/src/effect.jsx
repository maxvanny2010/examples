import './App.css';
import { useEffect, useState } from 'react';

function Effect3() {
	useEffect(() => {
		console.log('## App3 ##: ComponentDidMount');
		return () => console.log('## App3 ##: ComponentWillUnmount');
	}, []);
	return (
		<>
			<h1>This is effect 3!</h1>
			<Effect4 />
		</>
	);
}

function Effect2() {
	useEffect(() => {
		console.log('## App2 ##: ComponentDidMount');
		return () => console.log('## App2 ##: ComponentWillUnmount');
	}, []);
	return (
		<h1>This is effect 2!</h1>
	);
}

function Effect4() {
	useEffect(() => {
		console.log('## App4 ##: ComponentDidMount');
		return () => console.log('## App4 ##: ComponentWillUnmount');
	}, []);
	return (<h1>This is effect 4!</h1>);
}

// app4
// app3
// app2
// app
export function Effect() {
	const [count, setCount] = useState(0);
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		console.log('####: ComponentDidMount');
	}, []);
	useEffect(() => {
		console.log('## App ##: ComponentWillUpdate');
	});
	useEffect(() => {
		console.log('## App ##: visible is changed');
	}, [visible]);
	return (
		<div className="App">
			<header className="App-header">
				<div className="App-counter">
					{count}
				</div>
				<div>
					<button
						onClick={() => setCount(s => s + 1)}>Click
					</button>
					<button
						onClick={() => setVisible(s => !s)}> Hide
					</button>
				</div>
				{
					visible && (
						<div>this is hidden content!</div>
					)
				}
				<Effect2 />
				<Effect3 />
			</header>
		</div>
	);
}



