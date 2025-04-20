import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderPage, LocationsList } from '../component';
import { TABLE_NAME, TITLE } from '../constants';
import { dtoLocation } from '../dto';
import { fetchData } from '../util';

const LocationsPage = ({ className }) => {
	const [locations, setLocations] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchLocations = async () => {
			const data = await fetchData(TABLE_NAME.LOCATIONS, dtoLocation);
			setLocations(data.items);
			setLoading(false);
		};
		fetchLocations().then(r => r);
	}, []);
	if (loading) {
		return <HeaderPage title={TITLE.LOADING} />;
	}
	return (
		<div className={className}>
			<HeaderPage title={TITLE.LOCATIONS} />
			<LocationsList locations={locations} />
		</div>
	);
};
export const Locations = styled(LocationsPage)`
	padding: 50px;
	height: 100%;
`;

LocationsPage.propTypes = {
	className: PropTypes.string,
};
