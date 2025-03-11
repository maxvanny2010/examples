import { useTimeout } from './index.jsx';
import { useEffect } from 'react';

export function useDebounce(callback, delay, dependencies) {
	const { reset, clear } = useTimeout(callback, delay);

	useEffect(reset, [reset, ...dependencies]);
	useEffect(clear, []);
}
