import { FormInputLayout } from './FormInputLayout.jsx';
import PropTypes from 'prop-types';

export const FormInput = ({
							  onSubmit,
							  isCreating,
							  onInput,
							  setOnInput,
							  errorMessage,
							  handleSearch,
						  }) => {
	return (
		<FormInputLayout
			onSubmit={onSubmit}
			onInput={onInput}
			setOnInput={setOnInput}
			isCreating={isCreating}
			errorMessage={errorMessage}
			handleSearch={handleSearch}
		/>
	);
};
FormInput.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onInput: PropTypes.string.isRequired,
	isCreating: PropTypes.bool.isRequired,
	setOnInput: PropTypes.func.isRequired,
	errorMessage: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
};
