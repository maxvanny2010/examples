import { useFetch } from './useFetch';

export function Fetch() {
	const {
		data,
		isLoading,
		error,
		refetch,
	} = useFetch('https://jsonplaceholder.typicode.com/posts');

	return (
		<div>
			<div>
				<button onClick={() => refetch({ params: { _limit: 3 } })}>
					Reload
				</button>
			</div>
			{isLoading && <p>Loading...</p>}
			{error && <p>Mistake: {error.message}</p>}
			{!isLoading && data && (
				<div>
					{data.map(item => (
						<div key={item.id}>{item.title}</div>
					))}
				</div>
			)}
		</div>
	);
}
