import { useState } from 'react';
import { Admin } from '../component';

export function Home() {
	const [admin, setAdmin] = useState(false);
	const handleClick = async () => {
		const { sum } = await import(/*@vite-ignore*/'../lazy/sum.jsx');
		alert(sum(2, 2));
	};
	return (
		<>
			<h1>Home</h1>
			<button onClick={handleClick}>Plus 2+2
			</button>
			<button onClick={() => setAdmin(s => !s)}>Toggle Admin</button>
			{admin ? <Admin /> : <h2>Not Admin</h2>}
		</>
	);
}
