import { makeAutoObservable } from 'mobx';
import { contactsStore } from './contactsStore';
import { groupsStore } from './groupsStore';
import { ContactDto } from '../../types/dto';

export interface FilterValues {
	name?: string;
	groupId?: string;
}

export const filterStore = makeAutoObservable({
	filter: {} as FilterValues,

	setFilter(values: Partial<FilterValues>) {
		this.filter = values;
	},

	resetFilter() {
		this.filter = {};
	},

	get filteredContacts(): ContactDto[] {
		let result = contactsStore.data;

		if (this.filter.name) {
			const name = this.filter.name.toLowerCase();
			result = result.filter(({ name: n }) => n.toLowerCase().includes(name));
		}

		if (this.filter.groupId) {
			const group = groupsStore.data.find((g) => g.id === this.filter.groupId);
			if (group) {
				result = result.filter((c) => group.contactIds.includes(c.id));
			}
		}

		return result;
	},
});
