import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
	categoryName: string;
};
export default function CategoryPage({ categoryName }: Props) {
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
		<div>Category Page</div>
		<div>category name: {router.query['category-name']}</div>
		<div>category name from props: {categoryName}</div>
	</>);
}
export const getServerSideProps: (context: { params: { [p: string]: string } }) => Promise<{
	props: { categoryName: string }
}> = async (context: { params: { [x: string]: string; }; }) => {
	const categoryName = context.params?.['category-name'] || '';

	return {
		props: {
			categoryName,
		},
	};
};