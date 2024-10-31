import PropTypes from 'prop-types';

export const withLogging = (WrappedComponent) => {
	const WithLogging = (props) => {
		console.log(props.user);
		return <WrappedComponent{...props} />;
	};

	WithLogging.displayName = `withLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
	WithLogging.propTypes = {
		user: PropTypes.string.isRequired,
	};
	return WithLogging;
};
