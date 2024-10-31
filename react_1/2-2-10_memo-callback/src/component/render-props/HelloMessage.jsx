import PropTypes from 'prop-types';

export const HelloMessage = ({ user }) => {
	return (
		<span>Привет, {user}!</span>
	);
};
HelloMessage.propTypes = {
	user: PropTypes.string.isRequired,
};
