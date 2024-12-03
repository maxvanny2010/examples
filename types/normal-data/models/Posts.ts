import { Post } from './Post';

export class Posts {
	constructor(public byId: { [key: string]: Post }, public allIds: string[]) {
	}
}