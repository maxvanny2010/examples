import { useContext } from 'react';
import { UserContext } from './user-context.tsx';

export const useUser = () => {
	const context = useContext(UserContext);
	if (context === null) {
		throw new Error('useUser must be used within the context');
	}
	return context;
};