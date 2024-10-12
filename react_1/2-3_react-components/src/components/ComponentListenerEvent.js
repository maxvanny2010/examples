import React from 'react';
import app from '../styles/App.module.css';
import style from '../styles/ComponentListRender.module.css';

export const ComponentListenerEvent = () => {
	const [value, setValue] = React.useState(0);
	/*
		only last increment value to put in render
		cause value assignment is only after render
		not at the point where is action
	 */
	const onClickWithoutReduce = () => {
		// a const variable not be change, only one assignment.
		// value is const and can be assignment Only after new rendering.
		// value == 0
		setValue(value + 1);
		// value == 0 + 1 , cause no rendering.
		// in memory value equals 0
		// setValue will get the const value == 0
		setValue(value + 1);
		// value == 0 + 1 , cause no rendering.
		// in memory value equals 0
		// setValue will get the const value == 0
		setValue(value + 1);
		// value == 0 + 1 , BUT go to rendering
		// after rendering and new assignment value will be equals 1
	};
	const onClickWithReduce = () => {
		// a const variable not be change, only one assignment.
		// value is const and can be assignment Only after new rendering.
		// value == 0
		// React to use a batch.
		// all setValue to set in memory and execute in one batch
		setValue(value => value + 1);
		// value == 1, cause call a function in the batch.
		// this one return a reduce result
		// this result to store in value.
		// setValue will get the update value from memory
		setValue(value => value + 1);
		// value == 2, cause call function in the batch
		setValue(value => value + 1);
		// value == 3 in memory and go to rendering
		// after rendering and new assignment value will be equals 3
	};

	return (
		<div className={`${app.block} ${style.color}`}>
			Listener OnClick Event With/Out reduce
			<hr className={style.hr} />
			<div>{value}</div>
			{/*<button onClick={() => setValue(value + 1)}>*/}
			{/* only the last increment value to put in render*
				it is +1 and not +3 at one time*/}
			{/*<button onClick={onClickWithoutReduce}>*/}

			{/*<button onClick={onClickWithReduce}>*/}
			<button className={app.button}
					onClick={onClickWithReduce}>
				Прибавить +3
			</button>
		</div>
	);
};
