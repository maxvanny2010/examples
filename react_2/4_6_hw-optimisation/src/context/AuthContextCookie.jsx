import { createContext, useContext } from 'react';

export const AuthContextCookie = createContext();

export function useAuthCookie() {
	return useContext(AuthContextCookie);
}
