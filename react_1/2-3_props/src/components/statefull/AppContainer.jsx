import { useState } from 'react';
import { AppLayout } from './AppLayout.jsx';

export const AppContainer = () => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);

	const sum = a + b;
	return (
		<AppLayout
			a={a}
			b={b}
			sum={sum}
			setA={setA}
			setB={setB} />
	);
};
