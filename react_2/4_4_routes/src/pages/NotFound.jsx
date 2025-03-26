import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function NotFound() {
	const navigate = useNavigate();
	const location = useLocation();
	// const isUser = false;
	useEffect(() => {
		setTimeout(() => {
			navigate('/', { state: location.pathname });
			//navigate(-2);// page a 2 steps before
		}, 1000);
	}, [navigate, location.pathname]);
	// if (!isUser) return <Navigate to="/" />;
	return (<h1>NotFound</h1>);
	// return (<Navigate to="/" />);
}
