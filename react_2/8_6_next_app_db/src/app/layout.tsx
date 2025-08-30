import '@/shared/styles/globals.css';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ensureAdminExists } from '@/server/core/seedAdmin';
import { Metadata } from 'next';
import { MESSAGES } from '@/shared/util';
import { LogoutProvider } from '@/shared/contexts';
import { trpc } from '@/shared/api';
import { Layout } from '@/shared/ui';

// Серверный вызов при инициализации
if (typeof window === 'undefined') {
	(async () => {
		try {
			await ensureAdminExists();
		} catch (err) {
			console.error(MESSAGES.ADMIN_FAILED, err);
		}
	})();
}

// Метаданные страницы (замена <Head> из _document.tsx)
export const metadata: Metadata = {
	title: 'Next SSR React Prisma app',
	description: 'Next SSR React Prisma app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
		<body className="antialiased min-h-screen bg-gray-100">
		<SessionProvider>
			<LogoutProvider>
				<Layout>
					{children}
				</Layout>
			</LogoutProvider>
		</SessionProvider>
		</body>
		</html>
	);
}

// TRPC HOC
export const AppWithTRPC = trpc.withTRPC(RootLayout);
