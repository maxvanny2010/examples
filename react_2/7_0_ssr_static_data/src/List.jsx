import { useEffect, useState } from 'react';

export const List = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const data = await new Promise((resolve) => setTimeout(resolve(
				[
					{ name: 'TypeScript', mark: new Date().getSeconds() },
					{ name: 'JavaScript', mark: '4.8' },
					{ name: 'Java', mark: '5.0' },
				],
			), 2000));
			setData(data);
		};
		getData().then(r => r);
	}, []);
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