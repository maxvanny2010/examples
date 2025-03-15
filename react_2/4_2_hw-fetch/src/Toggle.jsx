import React from 'react';
import { useToggle } from './useToggle';

export function Toggle() {
	const [color, toggleColor] = useToggle(['blue', 'orange', 'cyan', 'teal']);

	return (
		<div style={{ padding: '20px', backgroundColor: color, height: '100vh' }}>
			<button onClick={() => toggleColor()}
					style={{ fontSize: '16px', padding: '10px' }}>
				Toggle Color
			</button>
			<button onClick={() => toggleColor('cyan')}
					style={{ fontSize: '16px', padding: '10px', marginLeft: '10px' }}>
				Set Cyan
			</button>
			<p>Current color: {color}</p>
		</div>
	);
}
