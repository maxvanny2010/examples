import { useHover } from './useHover';
import { memo } from 'react';

export const Hover = memo(() => {
	const { hovered, ref } = useHover();

	return (
		<div ref={ref}>
			{hovered ? 'You hovered mouse' : 'You can hover mouse'}
		</div>
	);
});
