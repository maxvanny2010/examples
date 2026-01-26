"use client";

import {useRouter, useSearchParams} from "next/navigation";

export function useOptimisticOps() {
    const router = useRouter();
    const params = useSearchParams();
    const ops = params.get("ops")?.split(",") || [];

    function push(op: string) {
        const next = [...ops, op].join(",");
        router.replace(`?ops=${next}`, {scroll: false});
    }

    function undo() {
        const next = ops.slice(0, -1).join(",");
        router.replace(`?ops=${next}`, {scroll: false});
    }

    return {ops, push, undo};
}
