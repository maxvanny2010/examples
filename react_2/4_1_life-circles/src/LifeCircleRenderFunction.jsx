import React, { useEffect, useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';

// let name = 'MAX'; global view for all pages. it is bad for let
export function Clock() {
	// don't create the constructor. it is function and not extends.
	// render after setDate or new props.
	// to use hook for keep variables, but not let name!
	const [date, setDate] = useState(new Date.now().toLocaleTimeString());
	let name = 'MAX';// each render set name = MAX each times new name
	// like didMount it call when create and destroyed component.
	useEffect(() => {
		console.log('####: didMount');
		const interval = setInterval(() => {
			setDate(new Date.now().toLocaleTimeString());
			// this is clojure and name here don't get MAX and have only time
			console.log('####: USE EFFECT BEFORE:', name);
			name = Date.now();
			console.log('####: USE EFFECT AFTER:', name);
			console.log('####: date', date);
		}, 1000);
		return () => {
			console.log('####: willUnmount');
			clearInterval(interval);

		};
	}, []);
	console.log('####: render');
	return (
		<>
			NOW: {date}
		</>
	);

}


export function LifeCircleRenderFunction() {
	const [clock, setClock] = useState(true);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo}
					 className="App-logo"
					 alt="" />
				{clock && <Clock />}
				<button onClick={() => setClock(!clock)}>Show/Hide Clock</button>
			</header>
		</div>
	);
};



