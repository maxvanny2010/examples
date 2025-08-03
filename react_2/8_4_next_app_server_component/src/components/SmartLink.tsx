'use client';

import React, { useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import nprogress from 'nprogress';

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

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		// Ctrl / Cmd / Shift / Alt + click — открыть в новой вкладке, не мешаем
		if (
			e.ctrlKey ||
			e.metaKey ||
			e.shiftKey ||
			e.altKey ||
			e.button !== 0 // только левая кнопка
		) {
			return;
		}

		e.preventDefault();
		nprogress.start(); // Явный запуск прогресс-бара до перехода
		startTransition(() => {
			router.push(href);
		});
	};

	return (
		<Link
			href={href}
			onClick={handleClick}
			className={clsx(className, {
				'text-blue-600 font-semibold': highlightActive && isActive,
			})}
		>
			{children}
		</Link>
	);
}
