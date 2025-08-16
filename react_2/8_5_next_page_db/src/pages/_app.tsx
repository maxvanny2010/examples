import '@/styles/globals.css';
import { trpc } from '@/shared/api';
import type { AppProps } from 'next/app';
import { getSession, SessionProvider } from 'next-auth/react';
import { Layout } from '@/components';

export function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<div className="min-h-screen bg-gray-100">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</div>
		</SessionProvider>
	);
}

App.getInitialProps = async ({ ctx }: any) => {
	const session = await getSession(ctx);
	console.log('SESSION SERVER:', session);
	return {
		pageProps: {
			session,
		},
	};
};
export default trpc.withTRPC(App);