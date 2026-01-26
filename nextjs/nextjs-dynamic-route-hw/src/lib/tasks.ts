import {Task} from "@/types";

export function applyOptimisticOps(tasks: Task[], ops: string[]): Task[] {
    let result = [...tasks];
    ops.forEach(op => {
        const [action, id] = op.split(":");
        const taskId = Number(id);
        if (action === "del") result = result.filter(t => t.id !== taskId);
        if (action === "done") result = result.map(t => t.id === taskId ? {...t, completed: true} : t);
    });
    return result;
}