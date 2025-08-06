import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { SafeUser } from '@/types/SafeUser';
import { getBaseUrl } from '@/util/getBaseUrl';
import prisma from '@/server/db';

type Props = {
	users: SafeUser[];
};

export default function Home({ users }: Props) {
	const [data, setData] = useState<SafeUser[]>(users || []);
	useEffect(() => {
		const getData = async () => {
			const response = await fetch(`${getBaseUrl()}api/hello`);
			const data = await response.json();
			setData(data);
		};
		getData().then(r => r);
	}, []);
	if (!data || !data.length) {
		return <div>Loading...</div>;
	}
	return (
		<pre>{JSON.stringify(data, null, 2)}</pre>
	);
}
export const getServerSideProps: GetServerSideProps = async () => {
	const users = await prisma.user.findMany({
		select: {
			id: true,
			name: true,
			email: true,
		},
	});
	return {
		props: {
			...users,
		},
	};
	//bad way. to use without the request to host
	/*const response = await fetch('http://localhost:3000/api/hello');
	const data = await response.json();
	*/
};