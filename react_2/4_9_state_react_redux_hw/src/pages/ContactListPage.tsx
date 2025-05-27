import React, { memo, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactDto } from '../types/dto';
import { RootState } from '../store/reducers';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchContacts, fetchGroups, toggleFavorite } from '../store/thunks';
import { ContactCard, FilterForm, FilterFormValues } from '../components';

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
		setContacts(contactsData);
	}, [contactsData]);

	const onSubmit = (fv: Partial<FilterFormValues>) => {
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
	};
	const handleToggle = (id: string) => {
		dispatch(toggleFavorite(id));
	};
	return (
		<>
			<Row className="mb-3">
				<Col>
					<FilterForm
						groupContactsList={groupsData}
						initialValues={{}}
						onSubmit={onSubmit}
					/>
				</Col>
			</Row>

			<Row className="g-4">
				{contacts.map((contact) => (
					<Col key={contact.id}
						 xxl={3}
						 xl={4}
						 md={6}
						 sm={12}>
						<ContactCard contact={contact}
									 withLink
									 favoriteIds={favoriteIds}
									 onToggleFavorite={handleToggle} />
					</Col>
				))}
			</Row>
		</>
	);

});
