import logo from './logo.svg';
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

	return React.createElement(
		'div',
		{ className: 'App' },
		React.createElement(
			'header',
			{ className: 'App-header' },
			React.createElement('img',
				{
					className: 'App-logo',
					src: logo,
					alt: 'logo',
				}),
			React.createElement(
				'p',
				null,
				'Edit',
				React.createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			React.createElement('p', { id: 'year' }),
		),
	);
	/*	return (<div className="App">
			<header className="App-header">
				<img src={logo}
					 className="App-logo"
					 alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p id="year"></p>
			</header>
		</div>);*/
};



