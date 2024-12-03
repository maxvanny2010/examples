import { ReactNode, useState } from 'react';
import { UserContext } from './user-context.tsx';
import { User } from '../types';

interface UserProviderProps {
	children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	return (
		<UserContext.Provider value={{ user, createUser: setUser }}>
			{children}
		</UserContext.Provider>);
};

