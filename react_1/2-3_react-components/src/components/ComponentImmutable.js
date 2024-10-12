import { useState } from 'react';

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
		<div style={{
			width: '300px',
			border: '1px solid green',
		}}>
			{'Immutable field of object: ' + obj.a}
		</div>);
};
