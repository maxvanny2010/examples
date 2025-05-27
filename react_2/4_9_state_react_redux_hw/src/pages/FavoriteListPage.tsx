import React, { memo, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from '../components';
import { RootState } from '../store/reducers';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchContacts, fetchFavorites, toggleFavorite } from '../store/thunks';

export const FavoriteListPage = memo(() => {
	const dispatch = useAppDispatch();

	const { data: contacts } = useAppSelector((state: RootState) => state.contacts);
	const favoriteIds = useAppSelector((state: RootState) => state.favorites.data);
	useEffect(() => {
		if (!contacts.length) {
			dispatch(fetchContacts()).then(r => r);
		}
	}, [dispatch, contacts.length]);

	useEffect(() => {
		dispatch(fetchFavorites());
	}, [dispatch]);

	const favoriteContacts = contacts.filter(({ id }) => favoriteIds.includes(id));
	const handleToggle = (id: string) => {
		dispatch(toggleFavorite(id));
	};
	return (
		<Row xxl={4}
			 className="g-4">
			{favoriteContacts.map((contact) => (
				<Col key={contact.id}>
					<ContactCard contact={contact}
								 withLink
								 favoriteIds={favoriteIds}
								 onToggleFavorite={handleToggle}
					/>
				</Col>
			))}
		</Row>
	);
});
