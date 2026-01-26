export function applyOps(tasks: any[], ops: string[]) {
    return ops.reduce((acc, op) => {
        const [type, id] = op.split(":");
        if (type === "del") return acc.filter(t => t.id !== +id);
        return acc;
    }, tasks);
}
