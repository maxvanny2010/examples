import React from 'react';

export default function PostsLayout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			<h2>Posts Section</h2>
			<div>{children}</div>
		</section>
	);
}
