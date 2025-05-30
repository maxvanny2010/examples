// React component: auto request the product with id='123' useQuery(arg)
import { useGetProductByIdQuery } from './productsApisSlice';

const ProductDetails = () => {
	const { data, error, isLoading } = useGetProductByIdQuery('123');

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading product</div>;

	return <div>{data?.name}</div>;
};
