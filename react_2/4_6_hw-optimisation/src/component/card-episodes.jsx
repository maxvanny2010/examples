import { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import { IMAGELINK } from '../constants';
import { Card, CardBlock, CardList, Image, Info, Name } from './';

const CardEpisode = forwardRef(({ episode }, ref) => {
	return (
		<Card ref={ref}>
			<Image src={IMAGELINK.EPISODE}
				   alt={episode.name} />
			<Name>{episode.name}</Name>
			<Info>Air date: {episode.air}</Info>
			<Info>Episode: {episode.episode}</Info>
		</Card>
	);
});
CardEpisode.displayName = 'CardEpisode';

export const EpisodesList = forwardRef((props, ref) => {
	const cardBlockRef = useRef(null);
	return (
		<CardBlock ref={cardBlockRef}>
			<CardList
				{...props}
				ref={ref}
				renderItem={(episode, ref) => (
					<CardEpisode episode={episode}
								 ref={ref} />
				)}
			/>
		</CardBlock>
	);
});

CardEpisode.displayName = 'CardEpisode';
EpisodesList.displayName = 'EpisodesList';

CardEpisode.propTypes = {
	episode: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		name: PropTypes.string.isRequired,
		image: PropTypes.string,
		air: PropTypes.string,
		episode: PropTypes.string,
	}).isRequired,
};

EpisodesList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		name: PropTypes.string.isRequired,
		image: PropTypes.string,
		air: PropTypes.string,
		episode: PropTypes.string,
	})).isRequired,
};
