import { Film, filmSchema } from '@/shema/filmPropertiesSchema';

export async function getFilmById(id: string): Promise<Film> {
	console.log('⚠️ FETCH from server', id);
	const res = await fetch(`https://www.swapi.tech/api/films/${id}`);
	if (!res.ok) throw new Error('Failed to fetch film');

	const json = await res.json();
	const parseResult = filmSchema.safeParse(json.result);

	if (!parseResult.success) {
		console.error(parseResult.error);
		throw new Error('Invalid film data format');
	}

	return parseResult.data;
}
