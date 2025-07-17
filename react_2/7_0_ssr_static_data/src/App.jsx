export const App = ({ data = [] }) => {
	return (
		<ul>
			{
				data.map(({ name, mark }) => (
					<li key={name}>{name}-{mark}</li>
				))
			}
		</ul>
	);
};

const data = [
	{ name: 'TypeScript', mark: '4.9' },
	{ name: 'JavaScript', mark: '4.8' },
	{ name: 'Java', mark: '5.0' },
];

App.getServerSideProps = async () => {
	await new Promise((r) => setTimeout(r, 1000));
	return data;
};
