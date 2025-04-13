import { getFormatDate } from '../util';

export const dtoHero = (dbHero) => ({
	id: dbHero.id,
	name: dbHero.name,
	status: dbHero.status,
	species: dbHero.species,
	gender: dbHero.gender,
	image: dbHero.image,
	created: getFormatDate(dbHero.created),

});
