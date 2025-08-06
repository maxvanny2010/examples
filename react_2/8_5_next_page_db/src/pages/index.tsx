import { GetServerSideProps } from 'next';
import { SafeUser } from '@/types/SafeUser';
import prisma from '@/server/db';


export default function Home(users: SafeUser[]) {
	return (
		<pre>{JSON.stringify(users, null, 2)}</pre>
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