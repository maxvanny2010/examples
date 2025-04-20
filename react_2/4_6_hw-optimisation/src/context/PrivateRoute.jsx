import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../context';
import { PAGE } from '../constants';

export function PrivateRoute({ children }) {
	const auth = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (!auth.user) {
			console.log('HERE');
			navigate(PAGE.LOGIN, { state: { from: location.pathname }, replace: true });
		}
	}, [auth.user, location.pathname, navigate]);

	return children;
}

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};
