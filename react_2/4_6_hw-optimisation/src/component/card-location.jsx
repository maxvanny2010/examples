import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IMAGELINK } from '../constants';
import { Card, CardBlock, CardList, Image, Info, Name } from './';

const CardLocation = forwardRef(({ location }, ref) => {

	return (
		<Card ref={ref}>
			<Image src={IMAGELINK.LOCATION}
				   alt={location.name} />
			<Name>{location.name}</Name>
			<Info>Type: {location.type}</Info>
			<Info>Dimension: {location.dimension}</Info>
		</Card>
	);
});

export const LocationsList = forwardRef((props, ref) => {
	return (
		<CardBlock>
			<CardList
				{...props}
				ref={ref}
				renderItem={(location, ref) => (
					<CardLocation location={location}
								  ref={ref} />
				)}
			/>
		</CardBlock>
	);
});
CardLocation.displayName = 'CardLocation';
LocationsList.displayName = 'LocationsList';

CardLocation.propTypes = {
	location: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		dimension: PropTypes.string.isRequired,
	}).isRequired,
};

LocationsList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			dimension: PropTypes.string.isRequired,
		}),
	).isRequired,
};
