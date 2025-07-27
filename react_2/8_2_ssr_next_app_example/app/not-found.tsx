import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="container-card">
			<h1 className="page-title">404</h1>
			<p className="text-xl text-gray-700 mb-6"></p>
			<p className="text-gray-600">Page doesn't exist</p>
			<Link
				href="/"
				className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
			>
				Go Home
			</Link>
		</div>
	);
}