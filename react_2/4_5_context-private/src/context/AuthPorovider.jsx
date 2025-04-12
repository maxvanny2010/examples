import { useState } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './AuthContext.jsx';


export function AuthProvider({ children }) {
	const [user, setUser] = useState(() => localStorage.getItem('user') || null);
	const signin = (newUser, callback) => {
		setUser(newUser);
		localStorage.setItem('user', newUser);
		callback();
	};
	const signout = (callback) => {
		setUser(null);
		localStorage.removeItem('user');
		callback();
	};
	const value = {
		user,
		signin,
		signout,
	};
	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
}

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
