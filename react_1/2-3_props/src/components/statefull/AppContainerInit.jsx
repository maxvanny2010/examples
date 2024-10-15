import { useState } from 'react';

export const AppContainerInit = () => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);

	const sum = a + b;
	return (
		<div>
			<div>A: {a}</div>
			<button onClick={() => setA(a + 1)}>Прибавить 1 к A</button>
			<div>B: {b}</div>
			<button onClick={() => setB(b + 1)}>Прибавить 1 к B</button>
			<div>Сумма A+B: {sum}</div>
		</div>
	);
};
