import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputContainer = ({
							className,
							...props
						}) => {
	return (
		<input
			className={className}
			{...props}
		/>
	);
};

InputContainer.displayName = 'InputContainer';
export const Input = styled(InputContainer)`
	all: unset;
	width: 100%;
	min-width: 390px;
	height: 50px;
	font-size: 18px;
	padding: 10px;
	color: #e7e1e1;
	margin-right: 4px;
	background-color: rgba(43, 43, 43, 1);
	border-bottom: 1px dotted #ccc;
	box-sizing: border-box;

	&:focus {
		outline: none;
		border-bottom: 2px solid #ccc;
	}
`;
InputContainer.propTypes = {
	className: PropTypes.string,
	width: PropTypes.number,
};
