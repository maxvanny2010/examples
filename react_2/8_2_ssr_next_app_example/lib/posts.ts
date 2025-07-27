export function getPostsAll() {
	console.log('getPostsAll() is called.');
	const data = [
		{ slug: 'cats', title: 'About cats', content: 'Information about cats...' },
		{ slug: 'cars', title: 'About cars', content: 'Information about cars...' },
		{ slug: 'post', title: 'Example Post', content: 'This demo content for a post with name "post".' },
	];
	console.log('getPostsAll() returns:', data);
	return data;
}

export async function getPostBySlug(slug: string) {
	console.log(`getPostBySlug() called with slug: ${slug}`);
	await new Promise(resolve => setTimeout(resolve, 300));
	const allPosts = getPostsAll();
	const foundPost = allPosts.find(post => post.slug === slug);
	console.log(`Found post for "${slug}":`, foundPost);
	return foundPost;
}