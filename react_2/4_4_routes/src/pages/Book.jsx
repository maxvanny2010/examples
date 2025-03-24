import { useOutletContext, useParams } from 'react-router-dom';

export function Book() {
	const { id } = useParams();
	const contextOutlet = useOutletContext();
	console.log('####: contextOutlet', contextOutlet);
	return (<h1>Book {id} {contextOutlet.name}</h1>);
}
