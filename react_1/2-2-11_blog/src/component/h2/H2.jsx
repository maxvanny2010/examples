import styled from 'styled-components';
import PropTypes from 'prop-types';

const H2Component = ({ children, className }) => {
	return (
		<h2 className={className}>{children}</h2>
	);
};
export const H2 = styled(H2Component)`
	margin: 40px 0;
`;

H2Component.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}
