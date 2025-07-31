import { NavLink } from '@/components/NavLink';

export function Header() {
	return (
		<header className="bg-white shadow-md p-4 mb-6 rounded">
			<nav className="flex space-x-4 max-w-5xl mx-auto">
				<NavLink href="/"
						 label="Home" />
				<NavLink href="/about"
						 label="About" />
				<NavLink href="/circle"
						 label="Circle" />
			</nav>
		</header>
	);
}
