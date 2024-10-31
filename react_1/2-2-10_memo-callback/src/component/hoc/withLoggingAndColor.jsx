import PropTypes from 'prop-types';

export const withLoggingAndColor = (WrappedComponent) => {
	const WithLoggingColor = ({ color, ...props }) => {
		console.log(props.user);
		return (
			<span style={{ color: color }}>
					<WrappedComponent{...props} />
			</span>
		);
	};

	WithLoggingColor.displayName =
		`withLogging(${WrappedComponent.displayName
		|| WrappedComponent.name || 'Component'})`;
	WithLoggingColor.propTypes = {
		user: PropTypes.string.isRequired,
		color: PropTypes.string,
	};
	return WithLoggingColor;
};
