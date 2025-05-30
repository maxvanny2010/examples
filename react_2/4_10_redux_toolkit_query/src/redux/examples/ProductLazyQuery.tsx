import { useLazyGetProductByIdQuery } from './productsApisSlice';

const ProductFetcher = () => {
	// React component: trigger request the product by event like click
	const [trigger, { data, isFetching }] = useLazyGetProductByIdQuery();

	return (
		<div>
			<button onClick={() => trigger('123')}>Load Product 123</button>
			{isFetching && <p>Loading...</p>}
			{data && <p>Product name: {data.name}</p>}
		</div>
	);
};
