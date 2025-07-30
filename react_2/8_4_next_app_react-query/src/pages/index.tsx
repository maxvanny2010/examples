import { FilmCard } from '@/components/FilmCard';
import { TopLoadingBar } from '@/components/TopLoadingBar';
import { PackageCard } from '@/components/PackageCard';
import { readFile } from 'node:fs/promises';
import type { Film } from '@/shema/filmPropertiesSchema';
import type { PackageData } from '@/shema/packageSchema';
import { packageSchema } from '@/shema/packageSchema';
import { GetStaticProps } from 'next';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';


interface HomeProps {
	file: PackageData;
	initialFilms: FilmResponse;
}

interface FilmResponse {
	message: string;
	result: Film[];
}

const fetchFilms = async (): Promise<FilmResponse> => {
	const res = await fetch('https://www.swapi.tech/api/films');
	return res.json();
};

export default function Home({ file, initialFilms }: HomeProps) {
	const { data, isLoading, error } = useQuery<FilmResponse>({
		queryKey: ['films'],
		queryFn: fetchFilms,
		initialData: initialFilms,
	});

	if (isLoading) return <TopLoadingBar />;
	if (error) return <p>Loading mistake...</p>;
	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<h1 className="text-4xl font-bold mb-8 text-center text-black border-b border-dotted border-black pb-2">
				Star Wars Films
			</h1>


			{/* Package JSON Card */}
			<PackageCard data={file} />
			<p className="text-black border-b border-dotted border-black pb-2 mb-8"></p>

			{/* Film Cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{data?.result?.map((film: Film) => (
					<FilmCard key={film.uid}
							  film={film} />
				))}
			</div>

		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const fileContent = await readFile('package.json', 'utf8');
	const parsed = JSON.parse(fileContent);
	const result = packageSchema.safeParse(parsed);

	if (!result.success) {
		return {
			notFound: true,
		};
	}

	const queryClient = new QueryClient();

	const films = await fetchFilms();

	await queryClient.prefetchQuery({
		queryKey: ['films'],
		queryFn: async () => films,
	});

	return {
		props: {
			file: result.data,
			initialFilms: films,
			dehydratedState: dehydrate(queryClient),
		},
	};
};
