'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

interface LogoutContextType {
	isLoggingOut: boolean;
	startLogout: () => void;
	finishLogout: () => void;
}

const Logout = createContext<LogoutContextType | undefined>(undefined);

export const LogoutProvider = ({ children }: { children: ReactNode }) => {
	const [isLoggingOut, setIsLoggingOut] = useState(false);

	const startLogout = () => setIsLoggingOut(true);
	const finishLogout = () => setIsLoggingOut(false);

	return (
		<Logout.Provider value={{ isLoggingOut, startLogout, finishLogout }}>
			{children}
		</Logout.Provider>
	);
};

export const useLogout = () => {
	const context = useContext(Logout);
	if (!context) throw new Error('useLogout must be used within LogoutProvider');
	return context;
};
