import { useEffect, useState } from 'react';

export const EffectReturnCounter = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		// demounting-update 2
		console.log('First' + counter);
		// 1
		return () => console.log('Second' + counter);
	}, [counter]);
	return (
		<div className={styles.container}>
			<button onClick={() => setCounter(counter + 1)}>+1</button>
		</div>
	);
};
