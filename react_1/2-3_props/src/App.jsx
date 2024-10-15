import logo from './assets/logo.svg';
import './App.css';
import React from 'react';

/* imperative*/
export default function App() {
	/* declarative */
	function getTimeBeforeNextNewYear() {
		const today = new Date();
		const nextYear = today.getFullYear() + 1;
		const newYearDate = new Date(nextYear, 0, 1, 0, 0, 0, 0);
		return newYearDate - today;
	}

	/* declarative */
	function gettingNewYear() {
		document.getElementById('year').textContent = new Date().getFullYear().toString();
		setTimeout(gettingNewYear, getTimeBeforeNextNewYear());
	}

	/* imperative */
	setTimeout(gettingNewYear, getTimeBeforeNextNewYear());
	return (
		<div className="App">
			<img src={logo}
				 className="App-logo"
				 alt="logo" />
			<p>
				Edit <code>src/App.jsx</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React + Vite
			</a>
			<p id="year"></p>
		</div>
	);
};



