export const App = () => {
	const data = [
		{ name: 'TypeScript', mark: '4.9' },
		{ name: 'JavaScript', mark: '4.8' },
		{ name: 'Java', mark: '5.0' },
	];
	return (
		<ul>
			{data.map(({ name, mark }) => (
				<li key={name}>{name}-{mark}</li>
			))
			}
		</ul>
	);
};