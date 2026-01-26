"use client";

import {Geist} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export default function GlobalError({
                                        error,
                                        reset,
                                    }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en"
              className={`${geistSans.variable}`}>
        <body className="flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans antialiased p-4">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="relative">
                <div className="absolute inset-0 blur-3xl bg-red-500/10 dark:bg-red-500/5 rounded-full"/>
                <div className="relative text-6xl">🚨</div>
            </div>

            <div className="space-y-3">
                <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Critical System Failure
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    A fatal error has occurred at the application root. We have logged the incident and our team has
                    been notified.
                </p>
                {error.digest && (
                    <div className="inline-block px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        Error ID: {error.digest}
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-3">
                <button
                    onClick={() => reset()}
                    className="w-full py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl font-bold hover:opacity-90 transition-all active:scale-[0.98] shadow-xl shadow-zinc-500/10"
                >
                    Restart Application
                </button>
                <button
                    onClick={() => window.location.href = '/'}
                    className="w-full py-4 bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-2xl font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                >
                    Return to Homepage
                </button>
            </div>
        </div>
        </body>
        </html>
    );
}