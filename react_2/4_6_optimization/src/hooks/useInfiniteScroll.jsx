import { useCallback, useRef } from 'react';

export const useInfiniteScroll = (loadMore, hasMore, loading) => {
	const observer = useRef(null);

	return useCallback((node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting && hasMore) {
					console.log('VISIBLE');
					loadMore();
				}
			});

			if (node) {
				observer.current.observe(node);
				console.log('#### node:', node);
			}
		},
		[loadMore, hasMore, loading],
	);
};
