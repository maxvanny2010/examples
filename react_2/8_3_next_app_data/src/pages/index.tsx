import { GetServerSideProps } from 'next';
import { FilmCard } from '@/components/FilmCard';

export interface FilmProperties {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	characters: string[];
	planets: string[];
	starships: string[];
	vehicles: string[];
	species: string[];
	created: string;
	edited: string;
	url: string;
}

export interface Film {
	uid: string;
	description: string;
	properties: FilmProperties;
}

interface HomeProps {
	films: Film[];
}

export default function Home({ films }: HomeProps) {
	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<h1 className="text-4xl font-bold mb-8 text-center text-black">Star Wars Films</h1>
			<div className="flex flex-col items-center">
				{films.map((film) => (
					<FilmCard key={film.uid}
							  film={film} />
				))}
			</div>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch('https://www.swapi.tech/api/films');
	const data = await res.json();
	const films = data.result || [];

	return {
		props: {
			films,
		},
	};
};
