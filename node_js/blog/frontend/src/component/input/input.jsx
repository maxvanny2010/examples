import styled from 'styled-components';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const InputContainer =
	forwardRef(({
					className,
					...props
				},
				ref) => {
		return (
			<input
				className={className}
				{...props}
				ref={ref} />
		);
	});

InputContainer.displayName = 'InputContainer';
export const Input = styled(InputContainer)`
	width: ${({ width = '100%' }) => width};
	font-size: 18px;
	height: 40px;
	padding: 10px;
	margin: 0 0 10px;
	border-radius: 4px;
	border: 1px solid #000;
	color: #000;
	background-color: lightgray;

	&:focus {
		border-color: #6b9317;
		outline: none;
	}
`;
InputContainer.propTypes = {
	className: PropTypes.string,
	width: PropTypes.number,
};
