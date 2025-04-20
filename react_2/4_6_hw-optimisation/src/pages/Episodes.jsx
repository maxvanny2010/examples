import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { EpisodesList, HeaderPage } from '../component';
import { TABLE_NAME, TITLE } from '../constants';
import { dtoEpisode } from '../dto';
import { fetchData } from '../util';

const EpisodePage = ({ className }) => {
	const [episodes, setEpisodes] = useState([]);
	useEffect(() => {
		const fetchLocations = async () => {
			const data = await fetchData(TABLE_NAME.EPISODES, dtoEpisode);
			setEpisodes(data.items);
		};
		fetchLocations().then(r => r);
	}, []);
	return (
		<div className={className}>
			<HeaderPage title={TITLE.EPISODES} />
			<EpisodesList episodes={episodes} />
		</div>
	);
};
const Episodes = styled(EpisodePage)`
	padding: 50px;
	height: 100%;
`;
export default Episodes;
EpisodePage.propTypes = {
	className: PropTypes.string,
};
