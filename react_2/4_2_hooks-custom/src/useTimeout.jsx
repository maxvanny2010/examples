import { useCallback, useEffect, useRef } from 'react';

export function useTimeout(callback, delay) {

	const callbackRef = useRef(callback);
	const delayRef = useRef();

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	const set = useCallback(() => {
		delayRef.current = setTimeout(() => callbackRef.current(), delay);
	}, [delay]);

	const clear = useCallback(() => {
		if (delayRef.current !== null) {
			clearTimeout(delayRef.current);
			delayRef.current = null;
		}
	}, []);

	useEffect(() => {
		if (delay !== null) {
			set();
			return clear;
		}
	}, [delay, set, clear]);

	const reset = useCallback(() => {
		clear();
		set();
	}, [clear, set]);

	return { reset, clear };
}
