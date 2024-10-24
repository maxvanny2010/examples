import { ToolTipLayout } from './ToolTipLayout.jsx';
import PropTypes from 'prop-types';

export const ToolTip = ({ errorMessage }) => {
	return (
		<ToolTipLayout errorMessage={errorMessage} />
	);
};
ToolTip.propTypes = {
	errorMessage: PropTypes.string.isRequired,
};
