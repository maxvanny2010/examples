import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonSaveContainer = ({ children, className, ...props }) => {
	return (
		<button className={className} {...props}>{children}</button>
	);
};
export const ButtonSaveComponent = styled(ButtonSaveContainer)`
	margin-top: 10px;
	padding: 8px 40px;
	background: #28a745;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: border-color 0.25s;

	&:hover {
		background: #218838;
	}

	&:active {
		border: none;
		background: #8DCC0A;
		transform: scale(0.95);
		cursor: pointer;
	}

	&:focus:not(:focus-visible) {
		outline: none;
	}
`;

ButtonSaveContainer.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
