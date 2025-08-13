import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/server/db';

export const authOptions = {
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
};

export default NextAuth(authOptions);