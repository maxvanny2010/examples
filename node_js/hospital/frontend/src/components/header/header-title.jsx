import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderTitleComponent = ({ className, children }) => {
	return (
		<h3 className={className}>{children}</h3>
	);
};
export const HeaderTitle = styled(HeaderTitleComponent)`
	border-bottom: 1px dotted #ddd;
	text-align: center;
	width: 100%;
`;
HeaderTitleComponent.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string,
};


