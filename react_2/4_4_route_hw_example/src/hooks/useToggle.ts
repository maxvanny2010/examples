import React, { useReducer, useState } from 'react';

export function useToggle<T = boolean>(options: readonly T[] = [false, true] as any) {
	const [[option], toggle] = useReducer((state: T[], action: React.SetStateAction<T>) => {
		const value = action instanceof Function ? action(state[0]) : action;
		const index = Math.abs(state.indexOf(value));

		return state.slice(index).concat(state.slice(0, index));
	}, options as T[]);

	return [option, toggle as (value?: React.SetStateAction<T>) => void] as const;
}

export function useTogglesState<T = boolean>(options: T[] = [false, true] as any) {
	const [index, setIndex] = useState(0);

	const toggle = (value?: T) => {
		if (value !== undefined) {
			setIndex(options.indexOf(value));
		} else {
			setIndex((prevIndex) => (prevIndex + 1) % options.length);
		}
	};

	return [options[index], toggle] as const;
}

export function useToggleReducer<T = boolean>(options: readonly T[] = [false, true] as any) {
	const [index, toggle] = useReducer(
		(currentIndex: number, action?: T) =>
			action !== undefined ? options.indexOf(action) : (currentIndex + 1) % options.length,
		0,
	);

	return [options[index], toggle as (value?: T) => void] as const;
}
