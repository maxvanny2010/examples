"use client";

import ErrorState from "@/components/ErrorState";

export default function BlogError({
                                      error,
                                      reset,
                                  }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="py-12 animate-in fade-in duration-700">
            <ErrorState
                error={error}
                reset={reset}
                title="Unable to load the blog"
            />
        </div>
    );
}