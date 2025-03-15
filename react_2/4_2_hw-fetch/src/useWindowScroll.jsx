import { useCallback, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

export function useWindowScroll() {
	const [scroll, setScroll] = useState({
		x: typeof window !== 'undefined' ? window.scrollX : 0,
		y: typeof window !== 'undefined' ? window.scrollY : 0,
	});

	const handleScroll = useCallback(() => {
		setScroll({ x: window.scrollX, y: window.scrollY });
	}, []);

	useWindowEvent('scroll', handleScroll);

	const scrollTo = useCallback(({ x, y }) => {
		window.scrollTo({ left: x ?? window.scrollX, top: y ?? window.scrollY, behavior: 'smooth' });
	}, []);

	return [scroll, scrollTo];
}
