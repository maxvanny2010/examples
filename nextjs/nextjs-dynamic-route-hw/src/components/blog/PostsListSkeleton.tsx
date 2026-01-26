"use client";
import {PostItem} from "./PostItem";

export const PostListSkeleton = () => (
    <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <ul className="flex flex-wrap gap-4 justify-center max-w-7xl mx-auto">
            {Array.from({length: 12}).map((_, i) => (
                <PostItem
                    key={i}
                    post={{id: i, title: "", body: "", likes: 0}}
                    isSkeleton
                    className="w-[350px]"
                />
            ))}
        </ul>
    </div>
);
