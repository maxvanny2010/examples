import { getFilmById } from '@/lib/api';
import { notFound } from 'next/navigation';
import { Loading } from '@/components/Loading';
import { Suspense } from 'react';
import { FilmDetails } from '@/components/FilmDetails';

interface FilmPageProps {
	params: { id: string };
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
