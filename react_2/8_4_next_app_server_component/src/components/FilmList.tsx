'use client';

import { FilmCard } from './FilmCard';

interface FilmListProps {
	films: any[];
}

export function FilmList({ films }: FilmListProps) {
	return (

		<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{films.map((film) => (
				<FilmCard key={film.uid}
						  film={film} />
			))}
		</div>
	);
}
