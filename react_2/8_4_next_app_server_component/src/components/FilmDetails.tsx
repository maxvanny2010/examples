import { Film } from '@/shema/filmPropertiesSchema';

interface Props {
	film: Film;
}

export async function FilmDetails({ film }: Props) {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const { title, episode_id, opening_crawl, director, producer, release_date } = film.properties;
	return (
		<div className="p-4 bg-white rounded shadow text-black">
			<h1 className="text-4xl font-bold text-black mb-4 text-center">
				Episode {episode_id}: {title}
			</h1>
			<p className="mb-2">{opening_crawl}</p>
			<ul className="block bg-gray-200 shadow-lg rounded-lg text-xs text-gray-600 space-y-1 pl-2">
				<p className="pl-2"><strong>Director:</strong> {director}</p>
				<p className="pl-2"><strong>Producer:</strong> {producer}</p>
				<p className="pl-2"><strong>Release Date:</strong> {release_date}</p>
			</ul>
		</div>
	);
}
