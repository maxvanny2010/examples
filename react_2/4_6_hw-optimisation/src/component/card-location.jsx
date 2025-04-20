import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Card, CardBlock, Image, Info, Name } from './';

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
				<CardLocation key={location.id}
							  location={location} />
			))}
		</CardBlock>
	);
}

CardLocation.propTypes = {
	location: PropTypes.object,
};
LocationsList.propTypes = {
	locations: PropTypes.array,
};
