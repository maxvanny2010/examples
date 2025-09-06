import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import prisma from '@/server/core/db';
import bcrypt from 'bcryptjs';
import { Role } from '@prisma/client';
import { UserBase } from '@/shared/types/next-auth';
import { PATH } from './shared/path';

export const authConfig: NextAuthConfig = {
	providers: [
		Credentials({
			name: 'Credentials',
			async authorize(credentials): Promise<UserBase | null> {
				if (!credentials?.email || !credentials?.password) return null;

				const email = credentials.email as string;
				const password = credentials.password as string;

				const user = await prisma.user.findUnique({
					where: { email, deleted: false },
				});

				if (!user || !user.password) return null;

				const isValid = await bcrypt.compare(password, user.password);
				if (!isValid) return null;

				return {
					id: user.id.toString(),
					name: user.name,
					email: user.email,
					role: user.role as Role,
				};
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				const typedUser = user as UserBase;
				token.id = typedUser.id;
				token.role = typedUser.role;
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user && token.id) {
				session.user.id = token.id as string;
				session.user.role = token.role as Role;
			}
			return session;
		},
	},
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: PATH.AUTH.SIGNIN,
	},
};