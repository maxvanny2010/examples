import style from '../../index.module.css';
import React from 'react';


export const ControlsEmptyValue = () => {

	return (
		<div className={style.block}>
			<label>Value</label>
			{/* value don't work without react 1_input*/}
			{/*<1_input type="text"  value="" />*/}
		</div>
	);
};



