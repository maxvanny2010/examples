import { makeAutoObservable } from 'mobx';

class FavoritesStore {
	data = new Map<string, boolean>();

	constructor() {
		makeAutoObservable(this);
	}

	toggleFavorite(id: string) {
		if (this.data.get(id)) {
			this.data.delete(id);
		} else {
			this.data.set(id, true);
		}
	}

	isFavorite(id: string) {
		return this.data.has(id);
	}
}

export const favoritesStore = new FavoritesStore();
