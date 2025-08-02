// SmartLink.tsx
'use client';

import React, { useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

interface SmartLinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
	highlightActive?: boolean;
}

export function SmartLink({
							  href,
							  children,
							  className,
							  highlightActive = false,
						  }: SmartLinkProps) {
	const [, startTransition] = useTransition();
	const router = useRouter();
	const pathname = usePathname();
	const isActive = pathname === href;

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		startTransition(() => {
			router.push(href);
		});
	};

	return (
		<a
			href={href}
			onClick={handleClick}
			className={clsx(className, {
				'text-blue-600 font-semibold': highlightActive && isActive,
			})}
		>
			{children}
		</a>
	);
}
