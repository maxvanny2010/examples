import {TaskSkeletonItem} from "@/components/dashboard/TaskSkeletonItem";

export const TaskSkeleton = () => (
    <ul className="space-y-1">
        {Array.from({length: 4}).map((_, i) => <TaskSkeletonItem key={i}/>)}
    </ul>
);
