import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
	account: string;
};
export default function AccountPage({ account }: Props) {
	const router = useRouter();
	if (!router.isReady) return <div>Загрузка...</div>;
	console.log(router.query, router.pathname, router.isReady);
	console.log(router);
	useEffect(() => {
		if (router.isReady) {
			console.log('query:', router.query);
			console.log('pathname:', router.pathname);
			console.log('router:', router);
		}
	}, [router.isReady]);
	return (<>
		<div>Account Page</div>
		<div>Account name: {router.query['account-name']}</div>
		<div>Account name from props: {account}</div>
	</>);
}
export const getServerSideProps: (context: { params: { [p: string]: string } }) => Promise<{
	props: { account: string }
}> = async (context: { params: { [x: string]: string; }; }) => {
	const account = context.params?.['Account-name'] || '';

	return {
		props: {
			account,
		},
	};
};