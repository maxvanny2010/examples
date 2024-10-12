import React from 'react';

export const ComponentConditionalRendering = () => {
	const [showText, setShowText] = React.useState(true);

	const onClick = () => {
		setShowText(!showText);
	};
	let text = <div>Text</div>;
	return (
		<>
			<div style={{ width: '300px', border: '1px solid black' }}>
				Conditional Rendering:
				<br />
				----------------------------
				{showText && text}
				< br />
				<button onClick={onClick}>
					{showText ? 'HIDDEN' : 'SHOW'} text
				</button>
			</div>
		</>
	);
};
