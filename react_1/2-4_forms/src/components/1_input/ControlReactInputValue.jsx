import style from '../../index.module.css';
import React from 'react';


export const ControlReactInputValue = () => {
	const [value, setValue] = React.useState('');
	return (
		<div className={style.block}>
			<label>React</label>
			<input
				type="text"
				value={value}
				onChange=
					{
						({ target }) => setValue(target.value)
					}
			/>
		</div>
	);
};



