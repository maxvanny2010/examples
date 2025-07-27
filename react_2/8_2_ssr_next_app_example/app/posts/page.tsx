'use client';
import Link from 'next/link';
import { getPostsAll } from '../../lib/posts';
import { notFound } from 'next/navigation';

export default function PostsPage() {
	const posts = getPostsAll();
	if (!posts) {
		notFound();
	}
	return (
		<div className="container-card">
			<div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl">
				<h1 className="page-title">📚 Posts</h1>

				<div className="text-center mb-6">
					<Link
						href="/modal"
						className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
					>
						Open Static Modal
					</Link>
				</div>

				<ul className="space-y-4">
					{posts.map((post) => (
						<li key={post.slug}
							className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow">
							<span className="font-medium text-gray-700 text-embossed">{post.title}</span>
							<div className="flex gap-2">
								<Link
									href={`/posts/${post.slug}`}
									className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
								>
									View Page
								</Link>
								<Link
									href={`/${post.slug}`}
									className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition"
								>
									Open Modal
								</Link>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}