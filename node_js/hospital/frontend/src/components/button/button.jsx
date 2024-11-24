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

	padding: ${({ padding = '0.6em 1.2em' }) => padding};;
	border-radius: 6px;
	border: 1px solid transparent;
	transition: border-color 0.25s;

	&:hover {
		color: ${({ disabled }) => (disabled ? '' : 'lightgray')};
		border: ${({ disabled }) => (disabled ? '1px solid transparent' : '1px solid #747bff')};
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	}

	&:active {
		color: ${({ disabled }) => (disabled ? '' : '#747bff')};
		border-color: ${({ disabled }) => (disabled ? 'transparent' : '#747bff')};
		transform: ${({ disabled }) => (disabled ? 'none' : 'scale(0.95)')};
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	}
`;
ButtonContainer.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
