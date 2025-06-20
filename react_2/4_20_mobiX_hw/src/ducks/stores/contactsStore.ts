import { flow, makeAutoObservable } from 'mobx';
import { api } from '../api';
import { ContactDto } from '../../types/dto';
import { Response } from '../../types/response';
import { handleResponse } from '../../types/handleResponse';
import { favoritesStore } from './favoritesStore';

interface ContactsStoreType {
	data: ContactDto[];
	loading: boolean;
	error: string | null;
	get: () => Promise<void>;
	favoriteContacts: ContactDto[];
}

export const contactsStore: ContactsStoreType = makeAutoObservable({
	data: [] as ContactDto[],
	loading: false,
	error: null,

	get: flow(function* (this: ContactsStoreType) {
		this.loading = true;
		this.error = null;

		try {
			const result: Response<ContactDto[]> = yield api.getContacts();

			handleResponse(
				result,
				(data) => {
					this.data = data;
				},
				(error) => {
					this.error = error || 'Unknown error';
				},
			);
		} catch (e) {
			this.error = (e as Error).message || 'Unknown error';
		} finally {
			this.loading = false;
		}
	}),
	get favoriteContacts() {
		const { favoritesStore } = require('./favoritesStore');
		return this.data.filter((contact: ContactDto) => favoritesStore.isFavorite(contact.id));
	},
});

