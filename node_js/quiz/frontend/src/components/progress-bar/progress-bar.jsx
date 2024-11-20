import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProgressBarComponent = ({ results }) => {
	return (
		<ProgressWrapper>
			<ProgressBarWrapper>
				{results.map(({ success }, idx) => (
					<ProgressSegment key={idx}
									 $success={success} />
				))}
			</ProgressBarWrapper>
		</ProgressWrapper>
	);
};

export const ProgressBar = styled(ProgressBarComponent)`

`;
ProgressBarComponent.propTypes = {
	className: PropTypes.string,
};
const ProgressWrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 10px;
`;

const ProgressBarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ProgressSegment = styled.div`
	width: 100%;
	height: 5px;
	background-color: ${({ $success }) => ($success === true ? '#4caf50' : '#f44336')};
	transition: background-color 0.3s ease;
`;
ProgressBarComponent.propTypes = {
	results: PropTypes.arrayOf(PropTypes.object),
};
