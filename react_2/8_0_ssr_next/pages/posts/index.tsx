import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
	{ href: '/posts/post/cars', title: 'Cars' },
	{ href: '/posts/post/cats', title: 'Cats' },
];

export default function IndexPostPage() {
	const router = useRouter();

	const handleClick = (href: string) => {
		router.push(href).then(r => r);
		//router.replace(href).then(r => r);// return promise wait open page
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4">
			<div>Index Post Page</div>

			<h3 className="underline mb-4">a link (a href)</h3>
			{links.map((link) => (
				<div key={`a-${link.href}`}>
					<a href={link.href}>{link.title}</a>
					<br />
				</div>
			))}

			<h3 className="underline mb-4">Next.js links (Link)</h3>
			{links.map((link) => (
				<div key={`link-${link.href}`}>
					<Link href={link.href}>{link.title}</Link>
					<br />
				</div>
			))}

			<h3 className="underline mb-4">Next.js buttons (router.push)</h3>
			{links.map((link) => (
				<div key={`btn-${link.href}`}
					 className="mb-3">
					<button
						onClick={() => handleClick(link.href)}
						className="px-3 py-1 border rounded bg-black text-white shadow-black/50 shadow-lg hover:bg-gray-800"
					>
						{link.title}
					</button>
				</div>
			))}
		</div>
	);
}
