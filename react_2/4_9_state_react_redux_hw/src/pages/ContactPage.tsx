import React, { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactDto } from '../types/dto';
import { RootState } from '../store/reducers';
import { ContactCard, Empty } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchContacts, toggleFavorite } from '../store/thunks';

export const ContactPage: FC = () => {
	const { contactId } = useParams<{ contactId: string }>();
	const dispatch = useAppDispatch();

	const { data: contacts, loading } = useAppSelector((state: RootState) => state.contacts);
	const favoriteIds = useAppSelector((state: RootState) => state.favorites.data);
	const [contact, setContact] = useState<ContactDto | undefined>();

	useEffect(() => {
		if (!contacts.length) {
			dispatch(fetchContacts()).then(r => r);
		}
	}, [contacts.length, dispatch]);

	useEffect(() => {
		setContact(() => contacts.find(({ id }) => id === contactId));
	}, [contacts, contactId]);
	const handleToggle = (id: string) => {
		dispatch(toggleFavorite(id));
	};
	return (
		<Row xxl={3}>
			<Col className="mx-auto">
				{loading ? (
					<p>Loading...</p>
				) : contact ? (
					<ContactCard contact={contact}
								 favoriteIds={favoriteIds}
								 onToggleFavorite={handleToggle} />
				) : (
					<Empty />
				)}
			</Col>
		</Row>
	);
};
