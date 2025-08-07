import { trpc } from '@/shared/api';

export default function Home() {
	const { data } = trpc.hello.useQuery({ text: 'Name' });
	return (
		<pre>{data?.greeting}</pre>
	);
}