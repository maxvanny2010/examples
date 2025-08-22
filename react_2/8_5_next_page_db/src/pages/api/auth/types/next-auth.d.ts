import { DefaultSession, DefaultUser } from 'next-auth';
import { RoleType } from '@/shared/types';

declare module 'next-auth' {
	interface User extends DefaultUser {
		id: string | number;
		role: RoleType;
	}

	interface Session {
		user: {
			id: string | number;
			role: RoleType;
		} & DefaultSession['user'];
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		id: string | number;
		role: RoleType;
	}
}
