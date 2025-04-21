import { useEffect, useState } from 'react';
import axios from 'axios';
import { REQUEST, URL_API } from '../constants';

export const useGetItems = (tableName, pageNumber, callback) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [items, setItems] = useState([]);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setItems([]);
	}, [tableName]);

	useEffect(() => {
		setLoading(true);
		setError(false);
		axios({
			method: REQUEST.GET,
			url: `${URL_API}${tableName}/`,
			params: { page: pageNumber },
		}).then((res) => {
			const data = res.data || {};
			const results = data.results || [];
			const info = data.info || {};
			setItems(prevState => {
				return [...new Set([...prevState, ...results.map(callback)])];
			});
			setHasMore(info.pages > pageNumber);
			setLoading(false);
		}).catch(error => {
				setError(true);
				console.error('Error:', error);
				setLoading(false);
			},
		);
	}, [pageNumber, tableName, callback]);
	return { loading, error, items, hasMore };
};
