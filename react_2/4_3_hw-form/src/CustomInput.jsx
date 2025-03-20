import { Input, PasswordInput, Radio } from '@mantine/core';
import PropTypes from 'prop-types';

export const CustomInput = ({ label, type = 'text', ...props }) => {
	return type === 'password' ? (
		<PasswordInput label={label} {...props}
					   required />
	) : type === 'radio' ? (
		<Radio label={label} {...props}
			   required />
	) : (
		<Input label={label}
			   type={type} {...props}
			   required />
	);
};
CustomInput.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string,
};
