import { FilmCard } from '@/components/FilmCard';
import { PackageCard } from '@/components/PackageCard';
import { readFile } from 'node:fs/promises';
import { Film } from '@/types/film';
import { GetStaticProps } from 'next';

interface HomeProps {
	films: Film[];
	file: string;
}

export default function Home({ films, file }: HomeProps) {
	const packageJson = JSON.parse(file);

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<h1 className="text-4xl font-bold mb-8 text-center text-black border-b border-dotted border-black pb-2">
				Star Wars Films
			</h1>


			{/* Package JSON Card */}
			<PackageCard data={packageJson} />
			<p className="text-black border-b border-dotted border-black pb-2 mb-8"></p>

			{/* Film Cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{films.map((film) => (
					<FilmCard key={film.uid}
							  film={film} />
				))}
			</div>

		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch('https://www.swapi.tech/api/films');
	const data = await res.json();
	const films = data.result || [];
	const file = await readFile('package.json', 'utf8');

	return {
		props: {
			films,
			file,
		},
		revalidate: 60 * 60,
	};
};
