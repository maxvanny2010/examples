import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE } from '../constants';
import { Card, CardBlock, Image, Info, Name } from './';

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
				<CardHero key={hero.id}
						  hero={hero} />
			))}
		</CardBlock>
	);
}

CardHero.propTypes = {
	hero: PropTypes.object,
};
HeroesList.propTypes = {
	heroes: PropTypes.array,
};
