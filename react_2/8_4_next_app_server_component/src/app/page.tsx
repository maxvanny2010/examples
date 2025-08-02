// app/page.tsx
import { readFile } from 'node:fs/promises';
import { PackageCard } from '@/components/PackageCard';
import { packageSchema } from '@/shema/packageSchema';
import { FilmList } from '@/components/FilmList';

export const dynamic = 'force-static';

export default async function Home() {
	const res = await fetch('https://www.swapi.tech/api/films', {
		cache: 'force-cache',
	});

	if (!res.ok) throw new Error('Failed to fetch films');

	const filmsJson = await res.json();
	const films = filmsJson.result;

	// package.json
	const fileContent = await readFile(process.cwd() + '/package.json', 'utf8');
	const parsed = JSON.parse(fileContent);
	const pkg = packageSchema.parse(parsed); // валидация через zod

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<h1 className="text-4xl font-bold mb-8 text-center text-black border-b border-dotted border-black pb-2">
				Star Wars Films
			</h1>

			<PackageCard data={pkg} />
			<p className="text-black border-b border-dotted border-black pb-2 mb-8"></p>
			<FilmList films={films} />
		</div>
	);
}
