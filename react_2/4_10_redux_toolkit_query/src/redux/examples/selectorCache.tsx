import { createSelector } from '@reduxjs/toolkit';
import { productsApisSlice } from './productsApisSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// Selector which return from state a data of request with specify id .select(arg)
const selectProductById = productsApisSlice.endpoints.getProductById.select('123');

const ProductDetailsWithoutHooks = () => {
	// in component without hooks (for example, with useSelector):
	const productResult = useSelector(selectProductById);
	// productResult contains { data, status, error and so on. }
	const product = productResult.data;

	if (!product) return <div>Loading...</div>;

	return <div>{product.name}</div>;
};

//memorize
const selectProductDataById = createSelector(
	(state: RootState) => productsApisSlice.endpoints.getProductById.select('123')(state)?.data,
	(data) => data ?? null,
);
const product = useSelector(selectProductDataById);