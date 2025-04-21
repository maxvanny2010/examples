import { useNavigate } from 'react-router-dom';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { PAGE } from '../constants';
import { Card, CardBlock, CardList, Image, Info, Name } from './';


const CardHero = forwardRef(({ hero }, ref) => {

	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`${PAGE.HERO}/${hero.id}`);
	};
	return (
		<Card onClick={handleClick}
			  ref={ref}
			  style={{ cursor: 'pointer' }}>
			<Image src={hero.image}
				   alt={hero.name} />
			<Name>{hero.name}</Name>
			<Info>Status: {hero.status}</Info>
			<Info>Species: {hero.species}</Info>
			<Info>Gender: {hero.gender}</Info>
		</Card>
	);
});

export const HeroesList = forwardRef((props, ref) => {
	return (
		<CardBlock>
			<CardList
				{...props}
				ref={ref}
				renderItem={(hero, ref) => (
					<CardHero hero={hero}
							  ref={ref} />
				)}
			/>
		</CardBlock>
	);
});

CardHero.displayName = 'CardHero';
HeroesList.displayName = 'HeroesList';

CardHero.propTypes = {
	hero: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		status: PropTypes.string.isRequired,
		species: PropTypes.string.isRequired,
		gender: PropTypes.string.isRequired,
	}).isRequired,
};

HeroesList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			status: PropTypes.string.isRequired,
			species: PropTypes.string.isRequired,
			gender: PropTypes.string.isRequired,
		}),
	).isRequired,
	observerRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.any }),
	]),
};
