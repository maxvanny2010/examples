import PropTypes from 'prop-types';

export const InformationLayout = ({ styles, children }) => {
	return (
		<div className={styles}>
			{children}
		</div>

	);
};
InformationLayout.propTypes = {
	styles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	children: PropTypes.node.isRequired,
};
