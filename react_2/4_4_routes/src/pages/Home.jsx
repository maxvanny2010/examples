import { useLocation } from 'react-router-dom';

export function Home() {
	const location = useLocation();
	console.log('###: location', location);
	return (
		<>
			<h1>Home</h1>
			<div className="blue">{location.state}</div>
		</>
	);
}
