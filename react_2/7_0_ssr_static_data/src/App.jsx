import { useState } from 'react';

export const App = ({ data = [] }) => {
	const [count, setCount] = useState(0);
	return (
		<div>Count - {count}
			<button onClick={() => setCount(prev => prev + 1)}>Click</button>
			<ul>
				{
					data.map(({ name, mark }) => (
						<li key={name}>{name}-{mark}</li>
					))
				}
			</ul>
		</div>
	);
};

const data = [
	{ name: 'TypeScript', mark: '4.9' },
	{ name: 'JavaScript', mark: '4.8' },
	{ name: 'Java', mark: '5.0' },
];

App.getServerSideProps = async () => {
	await new Promise((r) => setTimeout(r, 2000));
	return data;
};
