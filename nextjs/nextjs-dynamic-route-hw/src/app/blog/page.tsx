import {Suspense} from "react";
import {getPosts} from "@/lib/blog/queries";
import {Post} from "@/types";
import {PostListSkeleton} from "@/components/blog/PostsListSkeleton";
import {PostList} from "@/components/blog/PostsList";

export default async function BlogPage() {
    const posts: Post[] = await getPosts();

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Blog</h1>

            <Suspense fallback={<PostListSkeleton/>}>
                <PostList posts={posts.slice(0, 10)}/>
            </Suspense>

        </div>
    );
}
