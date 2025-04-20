import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Card, CardBlock, Image, Info, Name } from './';
import ErrorBoundary from '../boundary/ErrorBoundary.jsx';

export function CardEpisode({ episode }) {
	return (
		<Card>
			<Image src={episode.image}
				   alt={episode.name} />
			<Name>{episode.name}</Name>
			<Info>Air date: {episode.air}</Info>
			<Info>Episode: {episode.episode}</Info>
		</Card>
	);
}

export function EpisodesList({ episodes }) {
	const cardBlockRef = useRef(null);

	useEffect(() => {
		if (cardBlockRef.current) {
			cardBlockRef.current.scrollTop = 0;
		}
	}, [episodes]);
	return (
		<CardBlock ref={cardBlockRef}>
			{episodes.map(episode => (
				<ErrorBoundary key={episode.id}>
					<CardEpisode episode={episode} />
				</ErrorBoundary>
			))}
		</CardBlock>
	);
}

CardEpisode.propTypes = {
	episode: PropTypes.object,
};
EpisodesList.propTypes = {
	episodes: PropTypes.array,
};
