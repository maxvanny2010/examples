import Link from 'next/link';
import { Film } from '@/types/film';

interface FilmCardProps {
	film: Film;
}

export const FilmCard = ({ film }: FilmCardProps) => {
	const { uid, properties } = film;
	const { title, opening_crawl, director, producer, release_date } = properties;

	return (
		<Link
			href={`/films/${uid}`}
			className="block bg-white shadow-lg rounded-lg p-6 w-full max-w-sm hover:shadow-xl transition-shadow duration-300 text-black h-full"
		>
			<div className="block bg-gray-40 text-xs text-gray-600 space-y-1">
				<h2 className="text-xl font-semibold mb-2 truncate text-center">{title}</h2>
			</div>
			<p className="text-sm text-gray-700 mb-4 line-clamp-2">
				{opening_crawl.split(' ').slice(0, 12).join(' ')}...
			</p>

			<div className="block bg-gray-200 shadow-lg rounded-lg text-xs text-gray-600 space-y-1">
				<p className="pl-2"><strong>Director:</strong> {director}</p>
				<p className="pl-2"><strong>Producer:</strong> {producer}</p>
				<p className="pl-2"><strong>Release Date:</strong> {release_date}</p>
			</div>

		</Link>
	);
};
