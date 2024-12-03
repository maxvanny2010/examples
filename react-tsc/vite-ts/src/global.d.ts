import { User } from './types';

declare global {
	interface Window {
		user: User | null;
	}
}
export {};