import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Card, CardBlock, Image, Info, Name } from './';
import ErrorBoundary from '../boundary/ErrorBoundary.jsx';

export function CardLocation({ location }) {

	return (
		<Card>
			<Image src={location.image}
				   alt={location.name} />
			<Name>{location.name}</Name>
			<Info>Type: {location.type}</Info>
			<Info>Dimension: {location.dimension}</Info>
		</Card>
	);
}

export function LocationsList({ locations }) {
	const cardBlockRef = useRef(null);

	useEffect(() => {
		if (cardBlockRef.current) {
			cardBlockRef.current.scrollTop = 0;
		}
	}, [locations]);
	return (
		<CardBlock ref={cardBlockRef}>
			{locations.map(location => (
				<ErrorBoundary key={location.id}>
					<CardLocation location={location} />
				</ErrorBoundary>
			))}
		</CardBlock>
	);
}

CardLocation.propTypes = {
	location: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		dimension: PropTypes.string.isRequired,
	}).isRequired,
};

LocationsList.propTypes = {
	locations: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			dimension: PropTypes.string.isRequired,
		}),
	).isRequired,
};
