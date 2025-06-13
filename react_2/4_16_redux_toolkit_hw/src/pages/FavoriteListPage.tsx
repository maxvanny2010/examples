import { memo } from 'react';
import { RootState } from '../ducks/store';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from '../components';
import { useGetContactsQuery } from 'ducks/apiSlice';
import { useAppSelector } from '../ducks/hooks';

export const FavoriteListPage = memo(() => {

	const { data: contacts = [] } = useGetContactsQuery();
	const favoriteIds = useAppSelector((state: RootState) => state.favorites.data);

	const favoriteContacts = contacts.filter(({ id }) => favoriteIds.includes(id));

	return (
		<Row xxl={4}
			 className="g-4">
			{favoriteContacts.map((contact) => (
				<Col key={contact.id}>
					<ContactCard
						contact={contact}
						withLink
					/>
				</Col>
			))}
		</Row>
	);
});
