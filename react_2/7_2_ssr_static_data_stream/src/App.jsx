import { Suspense, useState } from 'react';
import { List } from './List';

export const App = ({ initialData }) => {
	const [count, setCount] = useState(0);

	return (
		<div>
			Count - {count}
			<button onClick={() => setCount(prev => prev + 1)}>Click</button>
			<Suspense fallback={<div>Loading list...</div>}>
				<List data={initialData} />
			</Suspense>
		</div>
	);
};
