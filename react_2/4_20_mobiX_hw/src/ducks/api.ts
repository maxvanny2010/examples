import { ContactDto, GroupContactsDto } from '../types/dto';
import { Response } from '../types/response';

class Api {
	async getContacts(): Promise<Response<ContactDto[]>> {
		return safeFetch<ContactDto[]>('/contacts.json');
	}

	async getGroups(): Promise<Response<GroupContactsDto[]>> {
		return safeFetch<GroupContactsDto[]>('/group-contacts.json');
	}

}

export async function safeFetch<T>(url: string, config?: RequestInit): Promise<Response<T>> {
	try {
		const res = await fetch(url, config);

		if (!res.ok) {
			return { success: false, error: `HTTP error ${res.status}` };
		}

		const data: T = await res.json();
		return { success: true, data };
	} catch (e) {
		return { success: false, error: (e as Error).message };
	}
}

export const api = new Api();
