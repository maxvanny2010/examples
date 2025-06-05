import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { login } from '../store/authThunks';

export default function LoginForm() {
	const dispatch = useDispatch<AppDispatch>();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		dispatch(login({ email, password }));
	};

	return (
		<div>
			<input value={email}
				   onChange={e => setEmail(e.target.value)}
				   placeholder="Email" />
			<input type="password"
				   value={password}
				   onChange={e => setPassword(e.target.value)}
				   placeholder="Password" />
			<button onClick={handleLogin}>Login</button>
		</div>
	);
}
