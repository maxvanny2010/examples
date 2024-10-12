import React from 'react';
import app from '../styles/App.module.css';
import style from '../styles/ComponentConditionalRendering.module.css';

export const ComponentConditionalRendering = () => {
	const [showText, setShowText] = React.useState(true);

	const onClick = () => {
		setShowText(!showText);
	};
	let text = <div>Text</div>;
	return (
		<div className={`${app.block} ${style.color}`}>
			Conditional Rendering:
			<hr className={style.hr} />
			{showText && text}
			< br />
			<button className={app.button}
					onClick={onClick}>
				{showText ? 'HIDDEN' : 'SHOW'} text
			</button>
		</div>
	);
};
