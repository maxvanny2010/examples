import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
		<body>
		<header>GLOBAL HEADER</header>
		{children}
		<footer>GLOBAL FOOTER</footer>
		</body>
		</html>
	);
}
