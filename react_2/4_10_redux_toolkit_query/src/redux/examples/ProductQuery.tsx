// React component: trigger request the product by event like click
import { useLazyGetProductByIdQuery } from './productsApisSlice';

const ProductQuery = () => {
	const [trigger, { data, isFetching }] = useLazyGetProductByIdQuery();

	return (
		<div>
			<button onClick={() => trigger('123')}>Load Product 123</button>
			{isFetching && <p>Loading...</p>}
			{data && <p>Product name: {data.name}</p>}
		</div>
	);
};
