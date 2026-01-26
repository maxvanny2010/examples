"use server";

import {cache} from "react";
import {Post, Task} from "@/types";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = cache(async (): Promise<Post[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {tags: ["posts"]}});
    if (!res.ok) throw new Error("Failed to load posts");
    const data: Post[] = await res.json();
    return data.map(p => ({...p, likes: Math.floor(Math.random() * 100)}));
});

export const getPost = cache(async (id: string): Promise<Post> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {next: {tags: [`post-${id}`]}});
    if (!res.ok) throw new Error("Post not found");
    const p: Post = await res.json();
    return {...p, likes: Math.floor(Math.random() * 100)};
});


export const getTasks = cache(async (): Promise<Task[]> => {
    const res = await fetch(`${API_URL}/todos?_limit=5`);
    return res.json();
});