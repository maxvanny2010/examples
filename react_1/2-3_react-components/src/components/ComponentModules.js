import React, { useState } from 'react';
import app from '../styles/App.module.css';
import style from '../styles/ComponentModules.module.css';

export const ComponentModules = () => {
	const [showRedText, setShowRedText] = useState(false);

	const onClick = () => {
		setShowRedText(!showRedText);
	};

	return (
		<>
			<div className={`${app.block} ${style.color}`}>
				Dynamic Rendering CSS Modules
				<hr className={style.hr} />
				<div className={showRedText ? style.red : style.white}>Текст</div>
				<button className={app.button}
						onClick={onClick}
				>Изменить цвет текста
				</button>
			</div>
		</>
	);
};
