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
			async authorize(credentials) {
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
					id: String(user.id),
					name: user.name,
					email: user.email,
				} as never;
			},

		}),
	],
	callbacks: {
		async session({ session, token }) {
			if (session.user) {
				session.user.id = token.id;
				session.user.role = token.role as RoleType;
			}
			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				const dbUser = await prisma.user.findUnique({ where: { id: Number(user.id) } });
				if (dbUser) {
					token.role = dbUser.role as RoleType;
				}
				token.id = Number(user.id);
			}
			return token;
		},
	},
};

export default NextAuth(authOptions);