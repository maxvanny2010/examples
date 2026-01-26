"use server";

import {revalidateTag} from "next/cache";

export async function likePostAction(postId: number) {
    // in real apps: await db.posts.update(...)
    await new Promise((res) => setTimeout(res, 1000));
    revalidateTag(`post-${postId}`, {expire: 60});

}
