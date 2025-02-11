import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

export class Clock extends Component {
	/**
	 * bad - recursive call render from setState
	 */
	constructor(props) {
		super(props);
		this.state = { date: new Date().toLocaleTimeString() };
	}

	render() {
		// here a bad recursive
		this.setState({
			date: new Date.now().toLocaleTimeString(),
		});
		return (
			<>
				NOW: {this.state.date}
			</>
		);
	}
}


export function LifeCircleRenderBadState() {

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



