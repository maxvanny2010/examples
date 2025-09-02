import { DefaultSession } from 'next-auth';
import { RoleType } from '@/shared/types';

export interface UserBase {
	id: number;
	name: string;
	email: string;
	role: RoleType;
}

export interface DBUser extends UserBase {
	deleted: boolean;
}

// Для NextAuth
declare module 'next-auth' {
	interface Session {
		user: UserBase & DefaultSession['user'];
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		id: number;
		role: RoleType;
	}
}
