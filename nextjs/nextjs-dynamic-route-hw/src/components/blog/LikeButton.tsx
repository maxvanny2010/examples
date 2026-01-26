"use client";

import {useOptimistic, useTransition} from "react";
import {likePostAction} from "@/lib/blog/actions";
import {LikeButtonProps} from "@/types";

export function LikeButton({postId, likes, loading}: LikeButtonProps) {
    const [optimisticLikes, addOptimisticLike] = useOptimistic(
        likes,
        (state) => state + 1
    );
    const [isPending, startTransition] = useTransition();

    // Если это скелетон, просто возвращаем серый блок
    if (loading) {
        return <div className="h-6 w-12 bg-zinc-300 dark:bg-zinc-700 rounded"/>;
    }

    return (
        <button
            disabled={isPending}
            onClick={() => {
                startTransition(async () => {
                    addOptimisticLike(1);
                    await likePostAction(postId);
                });
            }}
            className="flex items-center gap-2 px-3 py-1 bg-red-50 hover:bg-red-100 text-red-600 rounded-full transition-colors disabled:opacity-50"
        >
            <span>❤️</span>
            <span className="font-bold">{optimisticLikes}</span>
        </button>
    );
}
