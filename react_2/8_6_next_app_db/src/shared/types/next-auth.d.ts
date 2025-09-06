import { DefaultSession } from 'next-auth';
import { Role } from '@prisma/client';

export interface UserBase {
	id: string;
	name: string;
	email: string;
	role: Role;
}

export interface DBUser extends UserBase {
	deleted: boolean;
}

declare module 'next-auth' {
	interface Session {
		user: UserBase & DefaultSession['user'];
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		id: string;
		role: Role;
	}
}
