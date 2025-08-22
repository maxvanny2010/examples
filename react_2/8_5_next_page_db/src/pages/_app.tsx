import '@/styles/globals.css';
import { trpc } from '@/shared/api';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Layout } from '@/components';
import { LogoutProvider } from '@/shared/contexts';

export function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	console.log('SESSION SERVER:', session);
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