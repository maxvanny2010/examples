import { GetServerSideProps } from 'next';
import { SafeUser } from '@/pages/api/hello';

export default function Home(data: SafeUser[]) {
	return (
		<pre>{JSON.stringify(data, null, 2)}</pre>
	);
}
export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch('http://localhost:3000/api/hello');
	const data = await response.json();
	return {
		props: {
			...data,
		},
	};
};