import React, { memo, useCallback, useMemo, useState } from 'react';
import { ContactDto } from '../types/dto';
import { RootState } from '../ducks/store';
import { toggleFavorite } from '../ducks/favorite/slice';
import { useAppDispatch, useAppSelector } from '../ducks/hooks';
import { useGetContactsQuery, useGetGroupsQuery } from '../ducks/apiSlice';

import { ContactsRow, FilterFormValues, FilterRow } from '../components';

export const ContactListPage = memo(() => {
	const dispatch = useAppDispatch();

	// RTK Query
	const { data: contacts = [] } = useGetContactsQuery();
	const { data: groups = [] } = useGetGroupsQuery();

	// Redux local
	const favoriteIds = useAppSelector((state: RootState) => state.favorites.data);

	// local filter
	const [filteredContacts, setFilteredContacts] = useState<ContactDto[]>(contacts);

	const onSubmit = useCallback((fv: Partial<FilterFormValues>) => {
		let result = contacts;

		if (fv.name) {
			const name = fv.name.toLowerCase();
			result = result.filter(({ name: n }) => n.toLowerCase().includes(name));
		}

		if (fv.groupId) {
			const group = groups.find((g) => g.id === fv.groupId);
			if (group) {
				result = result.filter((c) => group.contactIds.includes(c.id));
			}
		}

		setFilteredContacts(result);
	}, [contacts, groups]);

	const handleToggle = useCallback((id: string) => {
		dispatch(toggleFavorite(id));
	}, [dispatch]);

	// show all if filter didn't use
	const visibleContacts = useMemo(
		() => (filteredContacts.length === 0 ? contacts : filteredContacts),
		[filteredContacts, contacts],
	);

	return (
		<>
			<FilterRow groupsData={groups}
					   onSubmit={onSubmit} />
			<ContactsRow
				contacts={visibleContacts}
				favoriteIds={favoriteIds}
				onToggleFavorite={handleToggle}
			/>
		</>
	);
});
