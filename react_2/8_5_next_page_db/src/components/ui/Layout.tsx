import { ReactNode } from 'react';
import { HomeButton } from './HomeButton';

type LayoutProps = {
	children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="min-h-screen bg-gray-100">
			<header className="p-4 bg-white shadow-md flex justify-end">
				<HomeButton />
			</header>
			<main className="p-4">{children}</main>
		</div>
	);
};
