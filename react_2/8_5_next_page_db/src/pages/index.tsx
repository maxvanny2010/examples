import { trpc } from '@/shared/api';

export default function Home() {
	const { data, isLoading } = trpc.hello.useQuery({ text: 'SSR TRPS' });

	if (isLoading) return <div>Loading...</div>;

	console.log('data.date', data?.date, typeof data?.date);

	const dateObj = data ? new Date(data.date) : null;
	console.log('dateObj', dateObj, typeof dateObj);

	return (
		<pre>
			{data?.greeting} | {dateObj?.toISOString()}
		</pre>
	);
}