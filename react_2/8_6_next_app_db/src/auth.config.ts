import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import prisma from '@/server/core/db';
import bcrypt from 'bcryptjs';
import { RoleType } from '@/shared/types';

const authConfig: NextAuthConfig = {
	providers: [
		Credentials({
			async authorize(credentials) {
				// Проверяем наличие email и пароля
				if (!credentials?.email || !credentials?.password) {
					return null;
				}

				// Явно приводим типы к строке, чтобы избежать ошибок TypeScript
				const email = credentials.email as string;
				const password = credentials.password as string;

				// Ищем пользователя в базе данных
				const user = await prisma.user.findUnique({
					where: { email: email, deleted: false },
				});

				// Если пользователь не найден или у него нет пароля, отклоняем авторизацию
				if (!user || !user.password) {
					return null;
				}

				// Сравниваем предоставленный пароль с хешем в базе данных
				const isValid = await bcrypt.compare(password, user.password);

				if (isValid) {
					// В случае успеха возвращаем объект пользователя.
					// ВАЖНО: ID должен быть строкой.
					return { ...user, id: user.id.toString() };
				}

				// Если пароли не совпали
				return null;
			},
		}),
	],
	callbacks: {
		// Этот колбэк обогащает JWT-токен данными пользователя
		async jwt({ token, user }) {
			if (user && user.id) {
				const dbUser = await prisma.user.findUnique({
					where: { id: Number(user.id) },
				});

				if (dbUser) {
					token.id = user.id; // user.id уже является строкой
					token.role = dbUser.role as RoleType;
				}
			}
			return token;
		},
		// Этот колбэк создает объект сессии из данных токена
		async session({ session, token }) {
			if (session.user && token.id) {
				session.user.id = token.id as string;
				session.user.role = token.role as RoleType;
			}
			return session;
		},
	},
};

export default authConfig;
