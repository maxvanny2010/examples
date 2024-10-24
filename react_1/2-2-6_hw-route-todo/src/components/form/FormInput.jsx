import { FormInputLayout } from './FormInputLayout';

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
