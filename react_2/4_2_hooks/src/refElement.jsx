import './App.css';
import { useRef } from 'react';

export function RefElement() {
	const ref = useRef(null);
	console.log('####: ref', ref);
	const style = {
		padding: '12px',
		background: 'red',
		top: '10px',
	};
	const handleClick = () => {
		if (ref.current != null) ref.current.style.width = `${ref.current.offsetWidth * 2}px`;
	};
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<button onClick={handleClick}>Click</button>
				</div>
				<div ref={ref}
					 style={style}></div>
			</header>
		</div>
	);
}



