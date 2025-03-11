import './App.css';
import { useArray } from './index.jsx';

export function Array() {
	const [array, { push, update, clear, remove, filter }] = useArray([1, 2, 3, 4, 5, 6]);
	return (
		<div className="App">
			<header className="App-header">
				<h6>useArray</h6>
				<div className="button-container">
					<div>[{array.join(',')}]</div>
					<button onClick={() => push(array.length + 1)}>Push</button>
					<button onClick={() => update(3, 10)}>Update 3 index</button>
					<button onClick={() => remove(3)}>Remove 3 index</button>
					<button onClick={() => filter((item) => item % 2 === 0)}>Filter % 2</button>
					<button onClick={() => clear()}>Clear</button>
				</div>
			</header>
		</div>
	);
}
