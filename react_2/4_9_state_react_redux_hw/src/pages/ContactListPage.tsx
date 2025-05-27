import React, { memo, useCallback, useEffect, useState } from 'react';
import { ContactDto } from '../types/dto';
import { RootState } from '../store/reducers';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchContacts, fetchGroups, toggleFavorite } from '../store/thunks';
import { ContactsRow, FilterFormValues, FilterRow } from '../components';

export const ContactListPage = memo(() => {
	const dispatch = useAppDispatch();

	const { data: contactsData } = useAppSelector((state: RootState) => state.contacts);
	const { data: groupsData } = useAppSelector((state: RootState) => state.groups);
	const favoriteIds = useAppSelector((state: RootState) => state.favorites.data);

	const [contacts, setContacts] = useState<ContactDto[]>([]);
	useEffect(() => {
		dispatch(fetchContacts()).then(r => r);
		dispatch(fetchGroups()).then(r => r);
	}, [dispatch]);

	useEffect(() => {
		setContacts(prevContacts => {
			if (prevContacts === contactsData) return prevContacts;
			return contactsData;
		});
	}, [contactsData]);

	const onSubmit = useCallback((fv: Partial<FilterFormValues>) => {
		let findContacts: ContactDto[] = contactsData;

		if (fv.name) {
			const fvName = fv.name.toLowerCase();
			findContacts = findContacts.filter(({ name }) =>
				name.toLowerCase().includes(fvName),
			);
		}

		if (fv.groupId) {
			const groupContacts = groupsData.find(({ id }) => id === fv.groupId);

			if (groupContacts) {
				findContacts = findContacts.filter(({ id }) =>
					groupContacts.contactIds.includes(id),
				);
			}
		}

		setContacts(findContacts);
	}, [contactsData, groupsData]);

	const handleToggle = useCallback((id: string) => {
		dispatch(toggleFavorite(id));
	}, [dispatch]);
	return (
		<>
			<FilterRow groupsData={groupsData}
					   onSubmit={onSubmit} />
			<ContactsRow contacts={contacts}
						 favoriteIds={favoriteIds}
						 onToggleFavorite={handleToggle} />
		</>
	);
});
