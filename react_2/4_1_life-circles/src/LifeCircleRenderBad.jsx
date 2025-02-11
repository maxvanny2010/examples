import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

export class Clock extends Component {
	/**
	 * bad - render must not keep states.
	 * this example to print a log in console,
	 * but don't update canvas in browser
	* */
	render() {
		let date = new Date().toLocaleTimeString();
		setInterval(() => {
			date = new Date.now().toLocaleTimeString();
			console.log('####: date', date);
		}, 1000);
		return (
			<>
				NOW: {date}
			</>
		);
	}
}


export function LifeCircleRenderBad() {

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo}
					 className="App-logo"
					 alt="" />
				<Clock />
			</header>
		</div>
	);
}



