import Link from "next/link";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-8 px-4">
            <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                Welcome to the Next.js Pro App
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                Explore a high-performance blog, manage tasks in the interactive dashboard,
                and discover cutting-edge React/Next.js techniques: Server Actions,
                Optimistic UI, Suspense, Skeleton Loaders, and more.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
                <Link
                    href="/blog"
                    className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-blue-500/40 transition-all active:scale-95"
                >
                    Explore Blog
                </Link>
                <Link
                    href="/dashboard"
                    className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all active:scale-95"
                >
                    Go to Dashboard
                </Link>
            </div>

            <section className="mt-12 w-full max-w-2xl border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-sm bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-2 h-6 bg-blue-500 rounded-full"/>
                    Key Features Implemented:
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-start gap-2 italic">
                        <span className="text-blue-500 font-bold">✓</span> Server Actions & Optimistic UI
                    </li>
                    <li className="flex items-start gap-2 italic">
                        <span className="text-blue-500 font-bold">✓</span> Dashboard with UndoBar & Skeletons
                    </li>
                    <li className="flex items-start gap-2 italic">
                        <span className="text-blue-500 font-bold">✓</span> Parallel Routes & Suspense Slots
                    </li>
                    <li className="flex items-start gap-2 italic">
                        <span className="text-blue-500 font-bold">✓</span> Advanced Metadata (OG + Twitter)
                    </li>
                    <li className="flex items-start gap-2 italic">
                        <span className="text-blue-500 font-bold">✓</span> Dark Mode & Tailwind CSS Architecture
                    </li>
                    <li className="flex items-start gap-2 italic">
                        <span className="text-blue-500 font-bold">✓</span> Intercepting Routes for Modals
                    </li>
                </ul>
            </section>
        </div>
    );
}