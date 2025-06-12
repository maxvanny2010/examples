import { memo } from 'react';
import { RootState } from '../ducks/store';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from '../components';
import { useGetContactsQuery } from 'ducks/apiSlice';
import { toggleFavorite } from '../ducks/favorite/slice';
import { useAppDispatch, useAppSelector } from '../ducks/hooks';

export const FavoriteListPage = memo(() => {
	const dispatch = useAppDispatch();

	const { data: contacts = [] } = useGetContactsQuery();
	const favoriteIds = useAppSelector((state: RootState) => state.favorites.data);

	const favoriteContacts = contacts.filter(({ id }) => favoriteIds.includes(id));

	const handleToggle = (id: string) => {
		dispatch(toggleFavorite(id));
	};

	return (
		<Row xxl={4}
			 className="g-4">
			{favoriteContacts.map((contact) => (
				<Col key={contact.id}>
					<ContactCard
						contact={contact}
						withLink
						isFavorite={favoriteIds.includes(contact.id)}
						onToggleFavorite={handleToggle}
					/>
				</Col>
			))}
		</Row>
	);
});
