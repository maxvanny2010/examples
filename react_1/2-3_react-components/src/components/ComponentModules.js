import React, { useState } from 'react';
import style from '../styles/ComponentModules.module.css';
import styles from '../styles/Index.module.css';

export const ComponentModules = () => {
	const [showRedText, setShowRedText] = useState(false);

	const onClick = () => {
		setShowRedText(!showRedText);
	};

	return (
		<>
			<div className={styles.app}>
				Dynamic Rendering CSS Modules
				<br/>
				----------------------------------------------

				<br/>
				<div className={showRedText ? style.red : style.white}>Текст</div>
				<button
					onClick={onClick}
				>Изменить цвет текста
				</button>
			</div>
		</>
	);
};
