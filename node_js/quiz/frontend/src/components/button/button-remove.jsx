import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonRemoveContainer = ({ children, className, ...props }) => {
	return (
		<button className={className} {...props}>{children}</button>
	);
};
export const ButtonRemoveComponent = styled(ButtonRemoveContainer)`
	background: none;
	border: none;
	color: #dacbcb;
	cursor: pointer;
	font-size: ${({ size }) => size ? size : '20px'};
	padding: 10px 10px;
	border-radius: 4px;


	&:hover {
		color: #f5f5f5;
		background-color: #191c21;
	}

	&:active {
		color: #da1818;
		border: 1px solid #da1818;
		transform: scale(0.95);
		cursor: pointer;
	}

	&:focus {
		outline: none;
	}
`;

ButtonRemoveContainer.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
