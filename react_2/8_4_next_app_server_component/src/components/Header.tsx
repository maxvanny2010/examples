'use client';

import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { SmartLink } from './SmartLink';

const links = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/circle', label: 'Circle' },
];

export function Header() {
	return (
		<header className="bg-white shadow-md p-4 mb-6 rounded">
			<nav className="flex justify-between items-center max-w-5xl mx-auto">
				<div className="flex space-x-4">
					{links.map(({ href, label }) => (
						<SmartLink key={href}
								   href={href}
								   highlightActive
								   className="text-black hover:underline"
						>
							{label}
						</SmartLink>
					))}
				</div>

				<button
					onClick={() => window.history.back()}
					aria-label="Go back"
					className="text-gray-700 hover:text-blue-600 hover:shadow-md rounded p-1 transition-all"
				>
					<FiArrowLeft size={24} />
				</button>
			</nav>
		</header>
	);
}
