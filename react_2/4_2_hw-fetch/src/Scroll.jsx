import React from 'react';
import { useWindowScroll } from './useWindowScroll';

export function Scroll() {
	const [scroll, scrollTo] = useWindowScroll();

	const handleClick = (event) => {
		scrollTo({ y: event.clientY });
	};

	return (
		<div style={{ height: '200vh', padding: '20px' }}
			 onClick={handleClick}>
			<p>
				Scroll position x: {scroll.x}, y: {scroll.y}
			</p>
			<button onClick={(e) => {
				e.stopPropagation();
				scrollTo({ y: 0 });
			}}>
				Scroll to top
			</button>
			<button onClick={(e) => {
				e.stopPropagation();
				scrollTo({ y: scroll() });
			}}>
				Scroll to point
			</button>
		</div>
	);
}

