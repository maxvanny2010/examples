"use client";

import {useEffect} from "react";

export default function BlogPostError({
                                          error,
                                          reset
                                      }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service like Sentry
        console.error("Critical Blog Error:", error);
    }, [error]);

    return (
        <div className="max-w-2xl mx-auto p-8 border-2 border-dashed border-red-100 dark:border-red-900/30 rounded-3xl bg-red-50/30 dark:bg-red-950/10 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 mb-4">
                ⚠️
            </div>
            <h2 className="text-2xl font-bold text-red-900 dark:text-red-400 mb-2">
                Failed to load article
            </h2>
            <p className="text-red-700/80 dark:text-red-400/60 mb-6 italic">
                {error.message || "An unexpected error occurred while fetching the post."}
            </p>
            <button
                onClick={() => reset()}
                className="px-6 py-2.5 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-all active:scale-95 shadow-lg shadow-red-500/20"
            >
                Try Again
            </button>
        </div>
    );
}