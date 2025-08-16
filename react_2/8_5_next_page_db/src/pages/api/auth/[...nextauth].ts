import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/server/db';
import { NextAuthOptions } from 'next-auth';

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
				const user = await prisma.user.findUnique({ where: { email: credentials.email } });
				return credentials.password === user?.password ? user : null;
			},
		}),
	],
	callbacks: {
		session: ({ session, token }) => {
			console.log('authOptions:', session, 'TOKEN:', token);
			session.user.id = Number(token.sub);
			return session;

		},
	},
};

export default NextAuth(authOptions);