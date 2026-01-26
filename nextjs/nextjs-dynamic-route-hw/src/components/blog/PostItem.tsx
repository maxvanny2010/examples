import Link from "next/link";
import {LikeButton} from "./LikeButton";
import {Post} from "@/types";

export function PostItem({
                             post,
                             isSkeleton,
                             className,
                         }: {
    post: Post;
    isSkeleton?: boolean;
    className?: string;
}) {
    return (
        <li
            className={`relative border p-4 rounded-xl shadow-sm hover:shadow-md transition bg-white dark:bg-zinc-900 ${className}`}
        >
            {/* КОНТЕНТ */}
            <div className="pt-4 pb-10">
                {isSkeleton ? (
                    <>
                        <div className="h-6 w-3/4 bg-zinc-300 dark:bg-zinc-700 rounded mb-3 animate-pulse"/>
                        <div className="space-y-2">
                            <div className="h-4 w-full bg-zinc-300 dark:bg-zinc-700 rounded animate-pulse"/>
                            <div className="h-4 w-5/6 bg-zinc-300 dark:bg-zinc-700 rounded animate-pulse"/>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-semibold mb-2">
                            <Link
                                href={`/blog/${post.id}`}
                                className="hover:underline"
                            >
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 line-clamp-3">
                            {post.body}
                        </p>
                    </>
                )}
            </div>

            <div className="absolute left-3 bottom-3">
                {isSkeleton ? (
                    <div className="h-6 w-10 bg-zinc-300 dark:bg-zinc-700 rounded-full animate-pulse"/>
                ) : (
                    <LikeButton postId={post.id}
                                likes={post.likes || 0}/>
                )}
            </div>
        </li>
    );
}
