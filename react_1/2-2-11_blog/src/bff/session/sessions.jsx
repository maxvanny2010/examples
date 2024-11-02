export const sessions = {
	list: {},
	create(user) {
		/*const hash = Math.random().toString(36).substr(2);*/
		const hash = Math.random().toFixed(50);
		console.log(hash);
		this.list[hash] = user;
		return hash;
	},
	delete(hash) {
		delete this.list[hash];
	},
};
