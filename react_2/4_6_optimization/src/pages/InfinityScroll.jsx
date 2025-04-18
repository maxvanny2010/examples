import { useCallback, useState } from 'react';
import { useSearchBooks } from '../hooks/useSearchBooks.jsx';
import { LoadingFallback } from '../component/admin/Component.jsx';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll.jsx';

export function InfinityScroll() {
	const [query, setQuery] = useState('');
	const [pageNumber, setPageNumber] = useState(1);

	const { loading, error, books, hasMore } = useSearchBooks(query, pageNumber);

	const loadMore = useCallback(() => {
		if (!loading && hasMore) {
			setPageNumber((prevState) => prevState + 1);
		}
	}, [loading, hasMore]);

	const lastNodeRef = useInfiniteScroll(loadMore, hasMore, loading);

	const handleChange = (event) => {
		setQuery(event.target.value);
		setPageNumber(1);
	};
	return (
		<>
			<div className="top-controls">
				<h1>Infinity</h1>
				<input type="text"
					   onChange={handleChange} />
				{loading && (
					<div className="books-loading"><LoadingFallback /></div>
				)}
				{error && <div className="books-error">Error</div>}
			</div>

			<div className="books-list">
				{books.map((item, index) => {
					if (books.length - 20 === index + 1) {
						return <div ref={lastNodeRef}
									key={item}
									className="books-title">{item}</div>;
					}
					return <div
						key={item}
						className="books-title">{item}</div>;
				})}


			</div>
		</>
	);
}
