'use client';

import { ReactNode } from 'react';

interface DeleteLayoutProps {
	children: ReactNode;
	modal: ReactNode;
}

export default function EventLayout({ children, modal }: DeleteLayoutProps) {

	return (
		<div className="relative">
			{children}
			{modal}
		</div>
	);
}