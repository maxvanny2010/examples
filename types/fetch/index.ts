const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

type Coment = {
	id: number;
	email: string;
};

const getData = async (url: string): Promise<Coment[]> => {
	try {
		const response = await fetch(url);
		if (response.ok) return await response.json();
		return [];
	} catch (error) {
		return [];
	}
};

function log(comment: Coment) {
	console.log(`ID: ${comment.id}, Email: ${comment.email}`);
}

getData(COMMENTS_URL).then(comments => comments.forEach(log));
