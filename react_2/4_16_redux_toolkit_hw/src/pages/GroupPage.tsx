import React, { memo, useCallback } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toggleFavorite } from '../ducks/favorite/slice';
import { useAppDispatch, useAppSelector } from '../ducks/hooks';
import { ContactCard, Empty, GroupContactsCard } from '../components';
import { useGetContactsQuery, useGetGroupsQuery } from '../ducks/apiSlice';

export const GroupPage = memo(() => {
	const { groupId } = useParams<{ groupId: string }>();
	const dispatch = useAppDispatch();

	const favoriteIds = useAppSelector((state) => state.favorites.data);

	const { data: contacts = [] } = useGetContactsQuery();
	const { data: groups = [] } = useGetGroupsQuery();

	const group = groups.find(({ id }) => id === groupId);
	const filteredContacts = group
		? contacts.filter((c) => group.contactIds.includes(c.id))
		: [];

	const handleToggle = useCallback(
		(id: string) => {
			dispatch(toggleFavorite(id));
		},
		[dispatch],
	);

	if (!group) {
		return <Empty />;
	}

	return (
		<Row className="g-4">
			<Col xxl={12}
				 className="mt-4">
				<h4 className="text-muted">
					Group: <span className="text-primary">{group.name}</span>
				</h4>
				<hr />
			</Col>

			<Col xxl={12}>
				<Row xxl={3}>
					<Col className="mx-auto">
						<GroupContactsCard groupContacts={group} />
					</Col>
				</Row>
			</Col>

			<Col xxl={12}
				 className="mt-4">
				<h4 className="text-muted">Group Contacts</h4>
				<hr />
			</Col>

			<Col>
				<Row className="g-4">
					{filteredContacts.map((contact) => (
						<Col key={contact.id}
							 xxl={3}
							 xl={4}
							 md={6}
							 sm={12}>
							<ContactCard
								contact={contact}
								withLink
								isFavorite={favoriteIds.includes(contact.id)}
								onToggleFavorite={handleToggle}
							/>
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	);
});
