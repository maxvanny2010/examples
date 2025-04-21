import { useCallback, useState } from 'react';
import { useGetItems } from './useGetItems';
import { useInfiniteScroll } from './useInfiniteScroll';

export const usePaginatedItems = (tableName, dto) => {
	const [page, setPage] = useState(1);

	const { loading, items, hasMore } = useGetItems(tableName, page, dto);

	const loadMore = useCallback(() => {
		if (!loading && hasMore) {
			setPage((prev) => prev + 1);
		}
	}, [loading, hasMore]);

	const observerRef = useInfiniteScroll(loadMore, hasMore, loading);

	return {
		items,
		loading,
		hasMore,
		observerRef,
	};
};
