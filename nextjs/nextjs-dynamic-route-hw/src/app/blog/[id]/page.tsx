import {notFound} from "next/navigation";
import {Metadata} from "next";
import {LikeButton} from "@/components/blog/LikeButton";
import {getPost} from "@/lib/blog/queries";

export async function generateMetadata({params}: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    try {
        const post = await getPost(resolvedParams.id);
        return {
            title: post.title,
            description: post.body.slice(0, 100),
            openGraph: {title: post.title, description: post.body},
            twitter: {card: "summary_large_image", title: post.title, description: post.body},
        };
    } catch {
        return {title: "Not Found"};
    }
}


export default async function BlogPostPage({params}: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    let post;
    try {
        post = await getPost(resolvedParams.id);
    } catch {
        return notFound();
    }

    return (
        <article className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-6 capitalize">{post.title}</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                {post.body}
            </p>
            <div className="border-t pt-6">
                <LikeButton postId={post.id}
                            likes={post.likes || 0}/>
            </div>
        </article>
    );
}
