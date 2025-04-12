import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context';

export function AuthStatus() {
	const auth = useAuth();
	const navigate = useNavigate();
	const handleSignout = () => {
		auth.signout(() => {
			navigate('/');
		});
	};
	if (auth.user === null) {
		return <div> You are not logged in.</div>;

	}
	return (
		<p>
			Welcome user {auth.user}
			<button onClick={handleSignout}>Sign out</button>
		</p>
	);
}
