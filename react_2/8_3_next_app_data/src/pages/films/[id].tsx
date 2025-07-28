import { GetStaticPaths, GetStaticProps } from 'next';
import { Film } from '@/types/film';
import { BackButton } from '@/components/BackButton';
import { ParsedUrlQuery } from 'node:querystring';

interface FilmDetailPageProps {
	film: Film | null;
	error?: string;
}

interface Params extends ParsedUrlQuery {
	id: string;
}

export default function FilmDetailPage({ film, error }: FilmDetailPageProps) {
	if (error)
		return (
			<div className="min-h-screen flex flex-col justify-center items-center text-red-600">
				<p>{error}</p>
				<BackButton />
			</div>
		);

	if (!film)
		return (
			<div className="min-h-screen flex flex-col justify-center items-center">
				<p>Данные отсутствуют</p>
				<BackButton />
			</div>
		);

	const { title, director, producer, release_date, opening_crawl, episode_id } = film.properties;

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

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	try {
		const res = await fetch(`https://www.swapi.tech/api/films`);
		const data = await res.json();

		const paths = data.result.map((film: any) => ({
			params: { id: film.uid },
		}));

		return {
			paths,
			fallback: false, // или 'blocking', если есть риск появления новых фильмов
		};
	} catch {
		// В случае ошибки вернём пустой список путей, можно также fallback: 'blocking'
		return {
			paths: [],
			fallback: false,
		};
	}
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const id = params?.id;
		const res = await fetch(`https://www.swapi.tech/api/films/${id}`);
		if (!res.ok) throw new Error('Ошибка запроса');

		const data = await res.json();

		return {
			props: {
				film: data.result,
			},
		};
	} catch {
		return {
			props: {
				film: null,
				error: 'Ошибка загрузки данных фильма',
			},
		};
	}
};