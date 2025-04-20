import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderPage, HeroesList } from '../component/';
import { TABLE_NAME, TITLE } from '../constants';
import { fetchData } from '../util';
import { dtoHero } from '../dto';

const HeroesPage = ({ className }) => {
	const [heroes, setHeroes] = useState([]);
	useEffect(() => {
		const fetchHeroes = async () => {
			const data = await fetchData(TABLE_NAME.HEROES, dtoHero);
			setHeroes(data.items);
		};
		fetchHeroes().then(r => r);
	}, []);
	return (
		<div className={className}>
			<HeaderPage title={TITLE.HEROES} />
			<HeroesList heroes={heroes} />
		</div>
	);
};
export const Heroes = styled(HeroesPage)`
	padding: 50px;
	height: 100%;
`;
export default Heroes;
HeroesPage.propTypes = {
	className: PropTypes.string,
};
