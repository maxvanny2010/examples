import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context';
import { internalPaths } from '../util';

export function PrivateRoute({ children }) {
	const auth = useAuth();
	const location = useLocation();
	if (auth.user === null) {
		return <Navigate to={internalPaths.login}
						 state={{ from: location.pathname }}
						 replace />;
	}
	return children;
}

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};
