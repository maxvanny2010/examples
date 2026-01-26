export interface Post {
    id: number;
    title: string;
    body: string;
    likes?: number;
}

export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export interface User {
    name: string;
    avatar?: string;
}

export type LikeButtonProps = {
    postId: number;
    likes: number;
    loading?: boolean;
};