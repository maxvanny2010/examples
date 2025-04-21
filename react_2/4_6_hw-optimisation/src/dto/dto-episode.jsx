import { getFormatDate } from '../util';

export const dtoEpisode = (dbEpisode) => ({
	id: dbEpisode.id,
	name: dbEpisode.name,
	air: dbEpisode.air_date,
	episode: dbEpisode.episode,
	created: getFormatDate(dbEpisode.created),
});
