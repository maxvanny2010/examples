"use client";

import {useOptimisticOps} from "@/lib/public/useOptimisticOps";

export default function TaskItem({task}: { task: { id: number; title: string } }) {
    const {push} = useOptimisticOps();

    return (
        <li className="flex justify-between border p-2 rounded hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">
            <span className={"font-medium text-blue-600 dark:text-blue-400 text-sm"}>{task.title}</span>
            <button
                onClick={() => push(`del:${task.id}`)}
                className="text-red-600 font-bold px-2"
            >
                ❌
            </button>
        </li>
    );
}
