import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { EpisodesList, HeaderPage } from '../component';
import { TABLE_NAME, TITLE } from '../constants';
import { dtoEpisode } from '../dto';
import { fetchData } from '../util';

const EpisodePage = ({ className }) => {
	const [episodes, setEpisodes] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchLocations = async () => {
			const data = await fetchData(TABLE_NAME.EPISODES, dtoEpisode);
			setEpisodes(data.items);
			setLoading(false);
		};
		fetchLocations().then(r => r);
	}, []);
	if (loading) {
		return <HeaderPage title={TITLE.LOADING} />;
	}
	return (
		<div className={className}>
			<HeaderPage title={TITLE.EPISODES} />
			<EpisodesList episodes={episodes} />
		</div>
	);
};
export const Episodes = styled(EpisodePage)`
	padding: 50px;
	height: 100%;
`;

EpisodePage.propTypes = {
	className: PropTypes.string,
};
