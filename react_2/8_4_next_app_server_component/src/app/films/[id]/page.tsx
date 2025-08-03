import { getFilmById } from '@/lib/api';
import { notFound } from 'next/navigation';
import { Loading } from '@/components/Loading';
import { Suspense } from 'react';
import { FilmDetails } from '@/components/FilmDetails';
import { Metadata } from 'next';

interface FilmPageProps {
	params: { id: string };
}

export async function generateMetadata({ params }: FilmPageProps): Promise<Metadata> {
	const { id } = await params;
	const film = await getFilmById(id);
	if (!film) return {};

	const { title, release_date } = film.properties;

	return {
		title: `${title} | Star Wars`,
		description: `Star Wars film released on ${release_date}`,
		openGraph: {
			title: title,
			description: `Released on ${release_date}`,
		},
	};
}

export default async function FilmPage({ params }: FilmPageProps) {
	const { id } = await params;
	const film = await getFilmById(id).catch((err) => {
		console.error('Error loading film:', err);
		return null;
	});
	if (!film) return notFound();

	await new Promise((resolve) => setTimeout(resolve, 2000));
	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<Suspense fallback={<Loading />}>
				<FilmDetails film={film} />
			</Suspense>
		</div>
	);
}
