import { useReducer } from 'react';

function toggleReducer(state, action) {
	const { values, currentIndex } = state;

	if (action.type === 'TOGGLE') {
		const nextIndex = (currentIndex + 1) % values.length;
		return { ...state, currentIndex: nextIndex };
	}

	if (action.type === 'SET') {
		const newIndex = values.indexOf(action.value);
		return newIndex !== -1 ? { ...state, currentIndex: newIndex } : state;
	}

	return state;
}

export function useToggle(initialValues = [true, false]) {
	const [state, dispatch] = useReducer(toggleReducer, {
		values: initialValues,
		currentIndex: 0,
	});

	const toggle = (value) => {
		if (value !== undefined) {
			dispatch({ type: 'SET', value });
		} else {
			dispatch({ type: 'TOGGLE' });
		}
	};

	return [state.values[state.currentIndex], toggle];
}
