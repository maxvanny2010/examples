import styled from 'styled-components';
import PropTypes from 'prop-types';
import { dtoEpisode } from '../dto';
import { usePaginatedItems } from '../hooks';
import { TABLE_NAME, TITLE } from '../constants';
import { EpisodesList, HeaderPage } from '../component';

const EpisodePage = ({ className }) => {
	const {
		items,
		observerRef,
	} = usePaginatedItems(TABLE_NAME.EPISODES, dtoEpisode);
	return (
		<div className={className}>
			<HeaderPage title={TITLE.EPISODES} />
			<EpisodesList items={items}
						  ref={observerRef}
			/>
		</div>
	);
};
const Episodes = styled(EpisodePage)`
	padding-top: 50px;
	min-height: 100vh;
	box-sizing: border-box;
	max-width: 1000px;
`;
export default Episodes;
EpisodePage.propTypes = {
	className: PropTypes.string,
};
