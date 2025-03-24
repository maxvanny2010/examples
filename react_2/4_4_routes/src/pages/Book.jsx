import { useOutletContext, useParams } from 'react-router-dom';

export function Book() {
	const { id } = useParams();
	const contextOutlet = useOutletContext();
	console.log('####: contextOutlet', contextOutlet);
	return (
		<div>
			<h2>Book {id}</h2>
			<p>Context Name: {contextOutlet ? contextOutlet.name : 'No context available'}</p>
		</div>
	);
}
