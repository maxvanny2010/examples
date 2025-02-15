import './App.css';
import { useEffect, useLayoutEffect, useState } from 'react';

function App2() {
	return (
		<>
			<h1>SHOW BOX</h1>
			<div>Some Title!</div>
		</>
	);
}

export function EffectLayout() {
	const [visible, setVisible] = useState(false);
	const style = {
		background: 'black',
		position: 'relative',
		top: '10px',
	};
	// this work before show in browser. useEffect work after.
	useLayoutEffect(() => {
		if (!visible) return;
		const btnEl = document.getElementById('btn');
		//const clientRec = btnEl.getBoundingClientRect();
		// console.log('####: clientRec: ', clientRec);
		const { bottom } = btnEl.getBoundingClientRect();
		const boxEl = document.getElementById('box');
		boxEl.style.top = `${bottom + 25}px`;
	}, [visible]);
	useLayoutEffect(() => {
		console.log('####: useLayoutEffect1');
	}, []);
	useEffect(() => {
		console.log('####: useEffect1');
	}, []);
	useLayoutEffect(() => {
		console.log('####: useLayoutEffect2');
	}, []);
	useEffect(() => {
		console.log('####: useEffect2');
	}, []);
	// useLayoutEffect1
	// useLayoutEffect2
	// useEffect1
	// useEffect2
	return (
		<div className="App">
			<header className="App-header">
				<div className="App-counter">
					{count}
				</div>
				<div>
					<button id="btn"
							onClick={() => setVisible(s => !s)}> {visible ? 'Hide' : 'Show'}
					</button>
				</div>
				{
					visible && (
						<div style={style}
							 id="box"><App2 /></div>
					)
				}
			</header>
		</div>
	);
}



