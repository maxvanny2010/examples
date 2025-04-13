import { getFormatDate } from '../util';

export const dtoEpisode = (dbEpisode) => ({
	id: dbEpisode.id,
	name: dbEpisode.name,
	air: dbEpisode.air_date,
	episode: dbEpisode.episode,
	image: dbEpisode.image,
	created: getFormatDate(dbEpisode.created),
});
