import style from './ToolTipLayout.module.css';
import PropTypes from 'prop-types';

export const ToolTipLayout = ({ errorMessage }) => {
	return (
		<span className={style.errorsMessage}>{errorMessage}</span>
	);
};
ToolTipLayout.propTypes = {
	errorMessage: PropTypes.string.isRequired,
};
