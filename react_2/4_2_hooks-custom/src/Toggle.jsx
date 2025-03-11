import { useToggle } from './index.jsx';
import './App.css';

export function Toggle() {
	const [state, setState] = useToggle(false);
	return (
		<div className="App">
			<header className="App-header">
				<h6>useToggle</h6>
				<div>{state.toString()}</div>
				<div className="button-container">
					<button onClick={() => setState()}>Toggle</button>
					<button onClick={() => setState(true)}>Set True</button>
					<button onClick={() => setState(false)}>Set False</button>
				</div>
			</header>
		</div>
	);
}
