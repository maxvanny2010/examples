import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AuthErrorForm } from '../components';

const ErrorComponent = ({ className }) => {
	return (
		<div className={className}>
			<AuthErrorForm>FORBIDDEN</AuthErrorForm>
		</div>

	);
};
export const Error = styled(ErrorComponent)`
`;
ErrorComponent.propTypes = {
	className: PropTypes.string,
};
