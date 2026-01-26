"use client";

import Link from "next/link";

export default function BlogPostNotFound() {
    return (
        <div className="max-w-2xl mx-auto py-16 px-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="text-6xl mb-6 block">🔍</span>
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-4">
                Article Not Found
            </h2>
            <p className="mb-8 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm mx-auto">
                We couldn't find the story you're looking for. It might have been moved,
                deleted, or the URL might be incorrect.
            </p>
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-semibold hover:opacity-90 transition-all active:scale-95"
            >
                <span>←</span> Back to Blog
            </Link>
        </div>
    );
}