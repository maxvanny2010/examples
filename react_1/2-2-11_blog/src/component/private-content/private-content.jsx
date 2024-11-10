import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Error } from '../error/error.jsx';
import { ERROR } from '../../bff/constants';
import { checkAccess } from '../../redux/utils';
import { selectUserRole } from '../../redux/selectors';

export const PrivateContent = ({ children, access, errorServer = null }) => {
	const userRole = useSelector(selectUserRole);
	const errorAccess = !checkAccess(access, userRole)
		? ERROR.ACCESS_DENIED : null;
	const error = errorServer || errorAccess;
	return error ? <Error error={error} /> : children;
};
PrivateContent.propTypes = {
	errorServer: PropTypes.string,
	children: PropTypes.node,
	access: PropTypes.array,
};
