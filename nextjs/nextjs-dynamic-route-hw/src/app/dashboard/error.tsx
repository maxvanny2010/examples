"use client";

export default function DashboardError({error, reset}: { error: Error; reset: () => void }) {
    return (
        <div className="p-4 border rounded bg-red-50">
            <h2 className="text-red-600 font-bold">Dashboard crashed</h2>
            <pre>{error.message}</pre>
            <button
                className="mt-2 px-3 py-1 bg-red-600 text-white rounded"
                onClick={reset}
            >
                Retry
            </button>
        </div>
    );
}
