import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context';
import { internalPaths } from '../util';

export function Login() {
	const auth = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	console.log('####: location:', location);
	const from = location.state?.from || internalPaths.home;
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const username = formData.get('username');
		console.log(`####: username: ${username}`);
		auth.signin(username, () => {
			navigate(from, { replace: true });
		});

	};
	return (
		<>
			<form className="login-form"
				  onSubmit={handleSubmit}>
				<label htmlFor="username">Username: </label>
				<input type="text"
					   id="username"
					   name="username" />
				<button type="submit">Log in</button>
			</form>
		</>
	);
}
