"use client";

import {useOptimisticOps} from "@/lib/public/useOptimisticOps";

export default function UndoBar() {
    const {ops, undo} = useOptimisticOps();

    if (!ops.length) return null;

    return (
        <div className="flex items-center justify-between bg-zinc-100 dark:bg-zinc-900 p-3 rounded mb-2">
      <span className="text-sm text-zinc-700 dark:text-zinc-300">
        {ops.length} operation{ops.length > 1 ? "s" : ""} applied
      </span>
            <button
                onClick={undo}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
                Undo
            </button>
        </div>
    );
}
