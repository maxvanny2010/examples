import { useState } from 'react';
import { sum } from '../util';
import { Admin } from '../component';

export function Home() {
	const [admin, setAdmin] = useState(false);
	return (
		<>
			<h1>Home</h1>
			<button onClick={() => alert(sum(2, 2))}>Plus 2+2</button>
			<button onClick={() => setAdmin(s => !s)}>Toggle Admin</button>
			{admin ? <Admin /> : <h2>Not Admin</h2>}
		</>
	);
}
