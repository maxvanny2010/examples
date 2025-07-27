'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Footer from './components/Footer';

export default function RootLayout({
									   children,
									   modal,
								   }: {
	children: ReactNode;
	modal: ReactNode;
}) {
	const router = useRouter();
	console.log('RootLayout is rendering.');
	return (
		<html lang="en">
		<body className="bg-gray-100 text-black min-h-screen flex flex-col">
		<header className="bg-white shadow-md p-4 flex items-center justify-between">
			{/* LEFT SIDE: NAVIGATION */}
			<nav className="flex space-x-6">
				<Link href="/"
					  className="link-base">
					Home
				</Link>
				<Link href="/about"
					  className="link-base">
					About
				</Link>
				<Link href="/contact"
					  className="link-base">
					Contact
				</Link>
				<Link href="/posts"
					  className="link-base">
					Posts
				</Link>
			</nav>

			{/* CENTER: TITLE */}
			<h1 className="text-black text-xl font-bold text-embossed text-center flex-1">
				HEADER
			</h1>

			{/* RIGHT SIDE: BUTTON BACK */}
			<button
				onClick={() => router.back()}
				aria-label="Go Back"
				className="text-black hover:text-gray-700 p-2"
			>
				<ArrowLeft size={24} />
			</button>
		</header>

		<main className="flex-1 p-6">
			{children}
		</main>

		{modal}

		<Footer />
		</body>
		</html>
	);
}
