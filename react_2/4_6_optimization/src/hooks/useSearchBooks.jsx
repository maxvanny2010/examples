import { useEffect, useState } from 'react';
import axios from 'axios';

export const useSearchBooks = (query, pageNumber) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [books, setBooks] = useState([]);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setBooks([]);
	}, [query]);

	useEffect(() => {
		if (query === '') {
			setBooks([]);
			return;
		}
		setLoading(true);
		setError(false);
		const source = axios.CancelToken.source();
		axios({
			method: 'GET',
			url: 'https://openlibrary.org/search.json',
			params: { q: query, page: pageNumber },
			cancelToken: source.token,
		}).then((res) => {
			setBooks(prevState => {
				return [...new Set([...prevState, ...res.data.docs.map(b => b.title)])];
			});
			setHasMore(res.data.docs.length > 0);
			setLoading(false);
		}).catch(error => {
				if (axios.isCancel(error)) {
					console.log('Request canceled:', error.message);
					return;
				}
				setError(true);
				console.error('Error:', error);
				setLoading(false);
			},
		);
		return () => {
			if (source) {
				source.cancel('Operation cancel due to new request');
			}
		};
	}, [query, pageNumber]);
	return { loading, error, books, hasMore };
};
