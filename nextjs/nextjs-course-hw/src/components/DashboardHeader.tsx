import Link from "next/link";

export const DashboardHeader = () => {
    return (
        <header className="h-16 border-b bg-white px-6 flex items-center justify-between">

            <div className="flex items-center gap-6">
                <div className="text-lg font-semibold tracking-tight text-gray-900">
                    Next<span className="text-blue-600">App</span>
                </div>

                <Link
                    href="/"
                    className="text-sm text-gray-500 hover:text-gray-900 transition"
                >
                    ← Back to site
                </Link>
            </div>

            <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-600">Max</span>
                <button className="rounded-lg border px-3 py-1.5 text-gray-700 hover:bg-gray-50 transition">
                    Logout
                </button>
            </div>

        </header>
    );
};
