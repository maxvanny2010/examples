"use client";
import {PostItem} from "./PostItem";
import {Post} from "@/types";

export function PostList({posts}: { posts: Post[] }) {
    return (
        <ul className="flex flex-wrap gap-4 justify-center max-w-7xl mx-auto">
            {posts.map((post) => (
                <PostItem
                    key={post.id}
                    post={post}
                    className="w-[350px] text-sm"
                />
            ))}
        </ul>
    );
}