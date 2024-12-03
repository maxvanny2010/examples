import { createContext } from 'react';
import { User } from '../types';

export const UserContext =
	createContext<{ user: User | null, createUser: (user: User) => void }>
	({
		user: null, createUser: () => {
		},
	});