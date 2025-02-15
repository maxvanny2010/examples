import { useReducer } from 'react';
import './App.css';

const initState = {
	count: 0,
	name: 'Max',
};
const reducer = (state, action) => {
	console.log('####: action', action);
	// if don't use ...state the field name will escape after first render
	switch (action.type) {
		case 'INC':
			return { ...state, count: state.count - 1 };
		case 'DESC':
			return { ...state, count: state.count + 1 };
		case 'RESET':
			return { ...state, count: 0 };
		case 'CHANGE_NAME':
			return { ...state, name: action.payload.name };
		default:
			throw new Error();
	}

};

export function Reducer() {

//	const [state,dispatch] = useReducer(fn, initState);
	const [state, dispatch] = useReducer(reducer, initState);
	console.log('####: state', state);
	const handleMinusClick = () => {
		dispatch({ type: 'INC', payload: 10 });
	};
	const handlePlusClick = () => {
		dispatch({ type: 'DESC', payload: 10 });
	};
	const handleResetClick = () => {
		dispatch({ type: 'RESET' });
	};
	const handleNameClick = () => {
		dispatch({ type: 'CHANGE_NAME', payload: 'Xam' });
	};
	return (
		<div className="App">
			<header className="App-header">
				<div className="App-counter">
					{state.count}
				</div>
				<div className="App-wrap">
					<button className="App-button"
							onClick={handleMinusClick}> -
					</button>
					<button className="App-button"
							style={{ width: '70px' }}
							onClick={handleResetClick}> Reset
					</button>
					<button className="App-button"
							onClick={handlePlusClick}> +
					</button>
					<button className="App-button"
							style={{ width: '70px' }}
							onClick={handleNameClick}> Name
					</button>
				</div>
			</header>
		</div>
	);
}



