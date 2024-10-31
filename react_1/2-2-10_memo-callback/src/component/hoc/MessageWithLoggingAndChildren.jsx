import PropTypes from 'prop-types';

export const MessageWithLoggingAndChildren = ({ children, color }) => {
	return <span style={{ color }}>{children}</span>;
};
MessageWithLoggingAndChildren.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.string.isRequired,
};
