import '@/styles/globals.css';
import { trpc } from '@/shared/api';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Layout } from '@/components';
import { LogoutProvider } from '@/shared/contexts';
import { ensureAdminExists } from '@/server/seedAdmin';
import { MESSAGES } from '@/util';

if (typeof window === 'undefined') {
	// этот блок выполнится только на сервере
	(async () => {
		try {
			await ensureAdminExists();
		} catch (err) {
			console.error(MESSAGES.ADMIN_FAILED, err);
		}
	})();
}

export function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<div className="min-h-screen bg-gray-100">
				<LogoutProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</LogoutProvider>
			</div>
		</SessionProvider>
	);
}

export default trpc.withTRPC(App);