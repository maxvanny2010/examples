'use client';

export default function PostError({ error }: { error: Error }) {
	return <p>Error loading post: {error.message}</p>;
}
