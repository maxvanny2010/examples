import React from 'react';

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			<h2>Products Section</h2>
			<div>{children}</div>
		</section>
	);
}
