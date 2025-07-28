import { Header } from '@/components/Header';
import { TopLoadingBar } from '@/components/TopLoadingBar';
import { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="min-h-screen bg-gray-100 px-4 sm:px-6">
			<Header />
			<TopLoadingBar />
			<main className="max-w-[1440px] mx-auto">
				<Component {...pageProps} />
			</main>
		</div>
	);
}
