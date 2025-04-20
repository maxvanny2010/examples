import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE } from '../constants';
import { Card, CardBlock, Image, Info, Name } from './';
import ErrorBoundary from '../boundary/ErrorBoundary.jsx';

export function CardHero({ hero }) {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`${PAGE.HERO}/${hero.id}`);
	};
	return (
		<Card onClick={handleClick}
			  style={{ cursor: 'pointer' }}>
			<Image src={hero.image}
				   alt={hero.name} />
			<Name>{hero.name}</Name>
			<Info>Status: {hero.status}</Info>
			<Info>Species: {hero.species}</Info>
			<Info>Gender: {hero.gender}</Info>
		</Card>
	);
}

export function HeroesList({ heroes }) {
	const cardBlockRef = useRef(null);

	useEffect(() => {
		if (cardBlockRef.current) {
			cardBlockRef.current.scrollTop = 0;
		}
	}, [heroes]);
	return (
		<CardBlock ref={cardBlockRef}>
			{heroes.map(hero => (
				<ErrorBoundary key={hero.id}>
					<CardHero hero={hero} />
				</ErrorBoundary>
			))}
		</CardBlock>
	);
}

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
	heroes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			status: PropTypes.string.isRequired,
			species: PropTypes.string.isRequired,
			gender: PropTypes.string.isRequired,
		}),
	).isRequired,
};
