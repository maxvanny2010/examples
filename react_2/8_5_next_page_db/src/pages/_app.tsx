import '@/styles/globals.css';
import { trpc } from '@/shared/api';
import type { AppProps } from 'next/app';

export function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default trpc.withTRPC(App);