import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { getFilmById } from '@/lib/api';
import type { Film } from '@/shema/filmPropertiesSchema';
import { TopLoadingBar } from '@/components/TopLoadingBar';
import { BackButton } from '@/components/BackButton';

interface PageProps {
	id: string;
	initialData: Film,
}

export default function FilmPage({ id, initialData }: PageProps) {
	const { data, isLoading, error } = useQuery<Film>({
		queryKey: ['film', id],
		queryFn: () => getFilmById(id),
		initialData: initialData,
		enabled: !!id,
	});

	if (isLoading) return <TopLoadingBar />;
	if (error)
		return (
			<div className="min-h-screen flex flex-col justify-center items-center text-red-600">
				<p>{(error as Error).message}</p>
				<BackButton />
			</div>
		);

	if (!data)
		return (
			<div className="min-h-screen flex flex-col justify-center items-center">
				<p>No Data</p>
				<BackButton />
			</div>
		);

	const { title, episode_id, opening_crawl, director, producer, release_date } = data.properties;

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<BackButton />
			<h1 className="text-4xl font-bold text-black mb-4 text-center">
				Episode {episode_id}: {title}
			</h1>
			<div className="max-w-3xl mx-auto bg-white p-6 rounded shadow text-black">
				<p className="mb-4 text-gray-700 whitespace-pre-line">{opening_crawl}</p>
				<ul className="block bg-gray-200 shadow-lg rounded-lg text-xs text-gray-600 space-y-1 pl-2">
					<li><strong>Director:</strong> {director}</li>
					<li><strong>Producer:</strong> {producer}</li>
					<li><strong>Release Date:</strong> {release_date}</li>
				</ul>
			</div>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const id = context.params?.id as string;
	const queryClient = new QueryClient();

	try {
		const film = await getFilmById(id);
		queryClient.setQueryData(['film', id], film);

		return {
			props: {
				id,
				initialData: film,
				dehydratedState: dehydrate(queryClient),
			},
		};
	} catch (error) {
		console.error('Loading data mistake:', error);
		return {
			notFound: true,
		};
	}
};