import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Content = ({ children, error }) => error
	? (
		<Div>
			<h2>MISTAKE</h2>
			<div>{error}</div>
		</Div>
	)
	: (children);
Content.propTypes = {
	error: PropTypes.string,
	children: PropTypes.node,
};
