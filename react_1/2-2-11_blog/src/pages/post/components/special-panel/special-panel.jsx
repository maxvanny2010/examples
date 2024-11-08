import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '../../../../component';

const SpacialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-calendar-o"
					  margin="0 10px 0 0"
					  padding="0"
					  onClick={() => {
					  }}
				/>
				{publishedAt}
			</div>
			<div className="post-buttons">
				{editButton}
				<Icon id="fa-trash-o"
					  margin="0 10px 0 0"
					  padding="0"
					  size="24px"
					  onClick={() => {
					  }}
				/>
			</div>
		</div>
	);
};
export const SpecialPanel = styled(SpacialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
		display: flex;
		align-items: center;
	}

	& .post-buttons {
		display: flex;
	}
`;
SpacialPanelContainer.propTypes = {
	className: PropTypes.string,
	publishedAt: PropTypes.string,
	editButton: PropTypes.any,
};
