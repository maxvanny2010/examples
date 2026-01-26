import React from "react";
import Link from "next/link";

export default function BlogLayout({children}: { children: React.ReactNode }) {
    return (
        <section className="max-w-5xl mx-auto space-y-8">
            <header className="mb-6 border-b pb-2">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    📚 Link Section
                </h1>
                <nav className="mt-2 flex gap-4 text-sm">
                    <Link
                        href="/blog"
                        className="hover:text-blue-500 transition-colors"
                    >
                        All Posts
                    </Link>
                </nav>
            </header>
            <div className="space-y-6">{children}</div>
        </section>
    );
}
