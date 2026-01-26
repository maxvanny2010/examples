"use client";

import {useOptimisticOps} from "@/lib/public/useOptimisticOps";
import TaskItem from "@/components/dashboard/TaskItem";
import UndoBar from "@/components/dashboard/UndoBar";

export default function TaskList({initialTasks}: { initialTasks: any[] }) {
    const {ops} = useOptimisticOps();

    const tasks = [...initialTasks].filter(t =>
        !ops.includes(`del:${t.id}`)
    );

    return (
        <div className="space-y-2">
            <UndoBar/>
            <ul className="space-y-1">
                {tasks.map(task => (
                    <TaskItem key={task.id}
                              task={task}/>
                ))}
            </ul>
        </div>
    );
}
