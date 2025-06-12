import React, { FC, useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactCard, Empty } from '../components';
import { RootState } from '../ducks/store';
import { useGetContactsQuery } from '../ducks/apiSlice';
import { toggleFavorite } from '../ducks/favorite/slice';
import { useAppDispatch, useAppSelector } from 'ducks/hooks';

export const ContactPage: FC = () => {
	const { contactId } = useParams<{ contactId: string }>();
	const dispatch = useAppDispatch();

	const { data: contacts = [], isLoading, error } = useGetContactsQuery();

	const favoriteIds = useAppSelector((state: RootState) => state.favorites.data);

	const contact = useMemo(
		() => contacts.find((c) => c.id === contactId),
		[contacts, contactId],
	);

	const handleToggle = (id: string) => {
		dispatch(toggleFavorite(id));
	};

	return (
		<Row xxl={3}>
			<Col className="mx-auto">
				{isLoading ? (
					<p>Loading...</p>
				) : error ? (
					<p>Error loading contact</p>
				) : contact ? (
					<ContactCard
						contact={contact}
						isFavorite={favoriteIds.includes(contact.id)}
						onToggleFavorite={handleToggle}
					/>
				) : (
					<Empty />
				)}
			</Col>
		</Row>
	);
};
