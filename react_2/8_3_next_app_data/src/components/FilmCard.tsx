import React from 'react';
import { Film } from '@/pages';

interface FilmCardProps {
	film: Film;
}

export const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
	const {
		title,
		director,
		producer,
		release_date,
		opening_crawl,
		episode_id,
	} = film.properties;

	return (
		<div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl mx-auto mb-6 text-black">
			<h2 className="text-2xl font-bold mb-2">
				Episode {episode_id}: {title}
			</h2>
			<p className="text-gray-700 text-sm mb-4 whitespace-pre-line">{opening_crawl}</p>
			<div className="text-sm text-gray-600">
				<p><strong>Director:</strong> {director}</p>
				<p><strong>Producer:</strong> {producer}</p>
				<p><strong>Release Date:</strong> {release_date}</p>
			</div>
		</div>
	);
};
