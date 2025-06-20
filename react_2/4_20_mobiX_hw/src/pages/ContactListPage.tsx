import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { ContactsRow, FilterFormValues, FilterRow } from '../components';
import { contactsStore, filterStore, groupsStore } from '../ducks/stores';

export const ContactListPage = observer(() => {
	useEffect(() => {
		contactsStore.get().then(() => {
		});
		groupsStore.get().then(() => {
		});
	}, []);

	const groups = groupsStore.data;
	const filtered = filterStore.filteredContacts;

	const onSubmit = (fv: Partial<FilterFormValues>) => {
		filterStore.setFilter(fv);
	};

	return (
		<>
			<FilterRow groupsData={groups}
					   onSubmit={onSubmit} />
			<ContactsRow contacts={filtered} />
		</>
	);
});
