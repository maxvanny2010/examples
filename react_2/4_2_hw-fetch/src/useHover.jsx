import { useCallback, useEffect, useRef, useState } from 'react';

export const useHover = () => {
	const [hovered, setHovered] = useState(false);
	const handleMouseOver = useCallback(() => setHovered(true), []);
	const handleMouseOut = useCallback(() => setHovered(false), []);

	const ref = useRef(null);
	useEffect(() => {
		const element = ref.current;
		if (element) {
			element.addEventListener('mouseover', handleMouseOver);
			element.addEventListener('mouseout', handleMouseOut);
		}

		return () => {
			if (element) {
				element.removeEventListener('mouseover', handleMouseOver);
				element.removeEventListener('mouseout', handleMouseOut);
			}
		};
	}, []);

	return { hovered, ref };
};
