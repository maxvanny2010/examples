import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth/next';
import prisma from '@/server/core/db';
import { NextAuthOptions } from 'next-auth';
import bcrypt from 'bcryptjs';
import { RoleType } from '@/shared/types';

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req): Promise<any> {
				if (!credentials) return null;

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
						deleted: false,
					},
				});
				if (!user) return null;

				const isValid = await bcrypt.compare(credentials.password, user.password);
				if (!isValid) return null;

				return {
					id: Number(user.id),
					name: user.name,
					email: user.email,
					role: user.role,
				};
			},

		}),
	],
	callbacks: {
		async session({ session, token, user }) {
			// Добавляю роль из JWT в сессию
			if (session.user) {
				session.user.id = token.id;
				session.user.role = token.role as RoleType;
			}
			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.id = Number(user.id);
				token.role = user.role as RoleType; // сохраняю роль в JWT
			}
			return token;
		},
	},
};

export default NextAuth(authOptions);