import { useMatch, useParams } from 'react-router-dom';
import { ProductNotFound } from '../productnotfound/ProductNotFound.jsx';

const fetchProducts = (id) => ({
	1: { id: 1, name: 'TV', price: 2900, amount: 15 },
	2: { id: 2, name: 'Phone', price: 1390, amount: 48 },
	3: { id: 3, name: 'Laptop', price: 1840, amount: 23 },
})[id];

const PATH = '/catalog/product/:id';
const PATH_TYPE = '/catalog/:type/:id';

export const Product = () => {
	const params = useParams();
	const urlMatchData = useMatch(PATH);
	const urlMatchDataType = useMatch(PATH_TYPE);
	/* '/catalog/service/:id'; -> null */
	/* '/catalog/product/:id';; -> '/catalog/product/:2'*/
	console.log('PATH PRODUCT IS: ' + urlMatchData);
	/* '/catalog/service/:id' -> '/catalog/service/:2' */
	/* '/catalog/product/:id' -> '/catalog/product/:2'*/
	console.log('PATH TYPE(service/product) IS: ' + urlMatchDataType.params.type);
	const product = fetchProducts(params.id) || null;
	if (!product) {
		return <ProductNotFound />;
	}
	const { name, price, amount } = product;

	return (
		<div>
			<h3> Product - {name}</h3>
			<div>Price: {price} euro</div>
			<div>Available: {amount} unit(s)</div>
		</div>
	);
};



