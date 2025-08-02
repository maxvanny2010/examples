import '@/styles/globals.css';
import { Header } from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import React from 'react';

export const metadata = {
	title: 'Star Wars Films',
	description: 'Next.js App using Server Components',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
		<body className="min-h-screen bg-gray-100 px-4 sm:px-6 antialiased">
		<ProgressBar />
		<Header />
		<main className="max-w-[1440px] mx-auto">
			{children}
		</main>
		</body>
		</html>
	);
}
