import React, { useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';

export class Clock extends Component {
	/**
	 * bad - recursive call render from setState
	 */
	constructor(props) {
		super(props);
		console.log('####: constructor');
		this.state = { date: new Date().toLocaleTimeString() };
	}

	/**
	 *  should or not update-render this component.
	 *  this switch off draw time in browser,
	 *  but it will be print the log in the console.
	 * */
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('####: shouldComponentUpdate');
		console.log('####: old State', this.state);
		console.log('####: new State', nextState);
		return true;
	}

	/**
	 * this is call after each render this component.
	 */
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('####: componentDidUpdate');

	}

	componentDidMount() {
		console.log('####: didMount');
		this.interval = setInterval(() => {
			this.setState({
				// each call setState will call render()
				date: new Date.now().toLocaleTimeString(),
			});
			console.log(this.state.date);
		}, 1000);
		// this method work like load in listener
		// it is work after load and build dom
		// document.addEventListener('load');
	}

	componentWillUnmount() {
		console.log('####: willUnmount');
		clearInterval(this.interval);
	}

	render() {
		console.log('####: render');
		return (
			<>
				NOW: {this.state.date}
			</>
		);
	}
}


export function LifeCircleRenderClass() {
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



