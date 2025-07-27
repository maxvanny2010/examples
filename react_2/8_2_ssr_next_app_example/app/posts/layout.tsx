import { ReactNode } from 'react';

export default function PostsLayout({
										children,
										modal,
									}: {
	children: ReactNode;
	modal: ReactNode;
}) {
	console.log('PostsLayout is rendering.');
	return (
		<section className="section-container">
			<div className="space-y-8">{children}</div>
			{modal}
		</section>

	);
}
