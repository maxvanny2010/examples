import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonContainer = ({ children, className, ...props }) => {
	return (
		<button className={className} {...props}>{children}</button>
	);
};
export const Button = styled(ButtonContainer)`
	width: ${({ width = '100%' }) => width};
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	text-align: center;

	background-color: #1a1a1a;

	padding: 0.6em 1.2em;
	border-radius: 6px;
	border: 1px solid transparent;
	transition: border-color 0.25s;

	&:hover {
		color: lightgray;
		border: 1px solid #8DCC0A;
	}

	&:active {
		color: #8DCC0A;
		border-color: #8DCC0A;
		transform: scale(0.95);
	}
`;
ButtonContainer.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
