"use client";

import {useEffect} from "react";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
    title?: string;
}

export default function ErrorState({
                                       error,
                                       reset,
                                       title = "Something went wrong"
                                   }: ErrorProps) {
    useEffect(() => {
        // This is where you would typically call an observability tool like Sentry
        // Sentry.captureException(error);
        console.error("Logged to monitoring service:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center border-2 border-dashed border-red-100 dark:border-red-900/20 rounded-3xl bg-red-50/30 dark:bg-red-950/10 transition-all">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mb-6 text-2xl animate-pulse">
                ⚠️
            </div>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                {title}
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 max-w-md mb-8 leading-relaxed">
                An unexpected error occurred while loading the data. We have been notified and are already working on a
                fix.
                {error.digest && (
                    <span className="block mt-4 text-[10px] font-mono uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 text-zinc-500 py-1.5 px-3 rounded-lg w-fit mx-auto">
                        Error Reference: {error.digest}
                    </span>
                )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                    onClick={() => reset()}
                    className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 rounded-xl font-semibold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-zinc-500/10"
                >
                    Try Again
                </button>
                <button
                    onClick={() => (window.location.href = "/")}
                    className="px-8 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-xl font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors active:scale-95"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}