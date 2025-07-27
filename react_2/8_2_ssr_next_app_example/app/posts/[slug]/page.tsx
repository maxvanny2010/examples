import { notFound } from 'next/navigation';
import { getPostBySlug } from '../../../lib/posts';

export default async function PostPage({
										   params,
									   }: {
	params: { slug: string };
}) {
	const { slug } = await params;

	console.log(`PostPage received slug from params: ${slug}`);

	const post = await getPostBySlug(slug);

	if (!post) {
		console.error(`Post with slug "${slug}" not found in data, calling notFound().`);
		notFound();
	}
	console.log(`Successfully found post for "${slug}":`, post);

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
}