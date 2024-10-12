import React, { useState } from 'react';
import app from '../styles/App.module.css';
import style from '../styles/ComponentImmutable.module.css';

export const ComponentImmutable = () => {
	const [obj, setObj] = useState({ a: 10, b: 20, c: 30 });
	// a mistake - don't handle by React
	// obj.a = 20;
	// one right way for one field
	// setObj({ a: 20, b: 20, c: 30 });
	// a second right way for one field
	// to use border for the unlimited renders.
	if (obj.a === 10) setObj({ ...obj, a: 20 });
	return (
		<div className={`${app.block} ${style.color}`}>
			Immutable State Object
			<hr className={style.hr} />
			{'useState({ a: 10, b: 20, c: 30 })'}
			<br />
			{'setObj({ ...obj, a: 20 })'}
			<br />
			{'Immutable field of object a: ' + obj.a}
		</div>
	);
};
