import { filmSchema } from '@/shema/filmPropertiesSchema';

export async function getFilmById(id: string) {
	const res = await fetch(`https://www.swapi.tech/api/films/${id}`, {
		cache: 'force-cache',
		next: { revalidate: 60 },
	});

	if (!res.ok) throw new Error('Failed to fetch film');

	const json = await res.json();
	const parsed = filmSchema.safeParse(json.result);

	if (!parsed.success) {
		throw new Error('Invalid film data format');
	}

	return parsed.data;
}
