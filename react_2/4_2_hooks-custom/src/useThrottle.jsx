import { useEffect, useRef, useState } from 'react';

export function useThrottle(value, interval = 500) {
	const [throttledValue, setThrottledValue] = useState(value);
	const lastExecute = useRef(Date.now());

	useEffect(() => {
		if (Date.now() >= lastExecute + interval) {
			lastExecute.current = Date.now();
			setThrottledValue(value);
		} else {
			const timerId= setTimeout(() => {
				lastExecute.current = Date.now();
				setThrottledValue(value);
			}, interval);
			return () => clearInterval(timerId);
		}
	}, [value, interval]);

	return throttledValue;
}
