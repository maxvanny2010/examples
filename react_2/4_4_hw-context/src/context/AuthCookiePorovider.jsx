import { useState } from 'react';
import PropTypes from 'prop-types';
import { AuthContextCookie } from './AuthContextCookie.jsx';

export function AuthCookieProvider({ children }) {

	const setItem = (value, callback) => {
		const encodedValue = encodeURIComponent(JSON.stringify(value));
		document.cookie = `user=${encodedValue}; path=/; max-age=${86400}`;
		setUser(value);
		callback();
	};
	const getItem = () => {
		const match = document.cookie.match(/(?:^|; )user=([^;]*)/);
		if (match) {
			try {
				return JSON.parse(decodeURIComponent(match[1]));
			} catch {
				return null;
			}
		}
		return null;
	};
	const removeItem = () => {
		document.cookie = `user=; path=/; max-age=0`;
		setUser(null);
	};
	const [user, setUser] = useState(() => getItem('user') || null);

	const value = {
		user,
		setItem,
		getItem,
		removeItem,
	};

	return (
		<AuthContextCookie value={value}>
			{children}
		</AuthContextCookie>
	);
}

AuthCookieProvider.propTypes = {
	children: PropTypes.node.isRequire,
};
