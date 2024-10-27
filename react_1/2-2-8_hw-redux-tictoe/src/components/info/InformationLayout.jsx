import PropTypes from 'prop-types';

export const InformationLayout = ({ styles, children }) => {
	return (
		<div className={styles}>
			{children}
		</div>

	);
};
InformationLayout.propTypes = {
	styles: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
