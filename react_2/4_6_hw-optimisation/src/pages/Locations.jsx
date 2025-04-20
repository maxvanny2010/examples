import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderPage, LocationsList } from '../component';
import { TABLE_NAME, TITLE } from '../constants';
import { dtoLocation } from '../dto';
import { fetchData } from '../util';

const LocationsPage = ({ className }) => {
	const [locations, setLocations] = useState([]);
	useEffect(() => {
		const fetchLocations = async () => {
			const data = await fetchData(TABLE_NAME.LOCATIONS, dtoLocation);
			setLocations(data.items);
		};
		fetchLocations().then(r => r);
	}, []);
	return (
		<div className={className}>
			<HeaderPage title={TITLE.LOCATIONS} />
			<LocationsList locations={locations} />
		</div>
	);
};
const Locations = styled(LocationsPage)`
	padding: 50px;
	height: 100%;
`;
export default Locations;
LocationsPage.propTypes = {
	className: PropTypes.string,
};
