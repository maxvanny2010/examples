import { getFormatDate } from '../util';

export const dtoLocation = (dbLocation) => ({
	id: dbLocation.id,
	name: dbLocation.name,
	type: dbLocation.type,
	dimension: dbLocation.dimension,
	image: dbLocation.image,
	created: getFormatDate(dbLocation.created),
});
