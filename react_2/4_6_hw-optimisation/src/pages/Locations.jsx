import styled from 'styled-components';
import PropTypes from 'prop-types';
import { dtoLocation } from '../dto';
import { usePaginatedItems } from '../hooks';
import { TABLE_NAME, TITLE } from '../constants';
import { HeaderPage, LocationsList } from '../component';

const LocationsPage = ({ className }) => {
	const {
		items,
		observerRef,
	} = usePaginatedItems(TABLE_NAME.LOCATIONS, dtoLocation);
	return (
		<div className={className}>
			<HeaderPage title={TITLE.LOCATIONS} />
			<LocationsList items={items}
						   ref={observerRef} />
		</div>
	);
};
const Locations = styled(LocationsPage)`
	padding-top: 50px;
	min-height: 100vh;
	box-sizing: border-box;
	max-width: 1000px;
`;
export default Locations;
LocationsPage.propTypes = {
	className: PropTypes.string,
};
