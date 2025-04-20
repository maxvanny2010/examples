import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderPage, HeroesList } from '../component/';
import { TABLE_NAME, TITLE } from '../constants';
import { fetchData } from '../util';
import { dtoHero } from '../dto';

const HeroesPage = ({ className }) => {
	const [heroes, setHeroes] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchHeroes = async () => {
			const data = await fetchData(TABLE_NAME.HEROES, dtoHero);
			setHeroes(data.items);
			setLoading(false);
		};
		fetchHeroes().then(r => r);
	}, []);
	if (loading) {
		return <HeaderPage title={TITLE.LOADING} />;
	}
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

HeroesPage.propTypes = {
	className: PropTypes.string,
};
