import { useCallback, useEffect, useState } from 'react';

export function useFetch(url, options = {}) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [requestOptions, setRequestOptions] = useState(options);

	const fetchData = useCallback(async (customOptions = {}) => {
		setIsLoading(true);
		setError(null);

		const finalOptions = { ...requestOptions, ...customOptions };
		const limitRetries = finalOptions.params?._limit || 3;

		let queryParams = '';
		if (finalOptions.params) {
			queryParams = '?' + new URLSearchParams(finalOptions.params).toString();
		}

		let attempt = 0;
		while (attempt < limitRetries) {
			try {
				const response = await fetch(url + queryParams, finalOptions);
				if (!response.ok) {
					setError(`Mistake: ${response.status}`);
					setIsLoading(false);
					return;
				}
				const result = await response.json();
				setData(result);
				setIsLoading(false);
				return;
			} catch (err) {
				attempt++;
				if (attempt >= limitRetries) {
					setError(err.message || 'Get Mistake during loading');
					setIsLoading(false);
				}
			}
		}
	}, [url, requestOptions]);

	useEffect(() => {
		fetchData().then();
	}, [fetchData]);

	const refetch = (newOptions = {}) => {
		const mergedOptions = { ...requestOptions, ...newOptions };
		setRequestOptions(mergedOptions);
		fetchData(mergedOptions).then();
	};

	return { data, isLoading, error, refetch };
}
