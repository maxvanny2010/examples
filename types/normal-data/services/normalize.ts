import { Post } from '../models/Post';
import { Posts } from '../models/Posts';

export class NormalizeService {

	public normalizeData = (posts: Post[]): Posts => {
		const byId: { [key: string]: Post } = {};
		const allIds: string[] = [];

		posts.forEach((post) => {
			byId[post.id] = post;
			allIds.push(post.id);
		});

		return { byId, allIds };
	};
}

