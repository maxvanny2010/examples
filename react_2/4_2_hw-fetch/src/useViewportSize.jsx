import { useCallback, useState } from 'react';
import { useWindowEvent } from './useWindowEvent.jsx';

export function useViewportSize() {
	const [size, setSize] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		height: typeof window !== 'undefined' ? window.innerHeight : 0,
	});

	const handleResize = useCallback(() => {
		setSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}, []);

	useWindowEvent('resize', handleResize);

	return size;
}
