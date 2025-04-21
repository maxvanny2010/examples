import styled from 'styled-components';
import PropTypes from 'prop-types';
import { dtoHero } from '../dto';
import { usePaginatedItems } from '../hooks';
import { TABLE_NAME, TITLE } from '../constants';
import { HeaderPage, HeroesList } from '../component/';

const HeroesPage = ({ className }) => {
	const {
		items,
		observerRef,
	} = usePaginatedItems(TABLE_NAME.HEROES, dtoHero);
	return (
		<div className={className}>
			<HeaderPage title={TITLE.HEROES} />
			<HeroesList items={items}
						ref={observerRef}
			/>
		</div>
	);
};
export const Heroes = styled(HeroesPage)`
	padding-top: 50px;
	min-height: 100vh;
	box-sizing: border-box;
	max-width: 1000px;
`;
export default Heroes;
HeroesPage.propTypes = {
	className: PropTypes.string,
};
