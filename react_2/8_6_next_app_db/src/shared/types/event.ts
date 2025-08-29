export interface Event {
	id: number;
	title: string;
	description?: string | null;
	eventDate: Date;
	isJoined: boolean;
	authorId?: number;
}
