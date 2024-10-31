import PropTypes from 'prop-types';

export const GoodByeUser = ({ user }) => {
	return (
		<span>До свидания, {user}!</span>
	);
};
GoodByeUser.propTypes = {
	user: PropTypes.string.isRequired,
};
