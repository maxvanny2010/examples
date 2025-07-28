import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

interface NavLinkProps {
	href: string;
	label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
	const router = useRouter();

	const isActive = router.pathname === href;

	return (
		<Link
			href={href}
			className={clsx({
				'text-md': true,
				'text-gray-800': true,
				'hover:underline': true,
				'font-semibold': isActive,
				'text-blue-600': isActive,
			})}
		>
			{label}
		</Link>
	);
}
