import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from '../components';
import { useGetGroupsQuery } from '../ducks/apiSlice';

export const GroupListPage = memo(() => {
	const { data: groups = [], isLoading, error } = useGetGroupsQuery();

	if (isLoading) {
		return <p>Loading groups...</p>;
	}

	if (error) {
		return <p>Error loading groups.</p>;
	}

	return (
		<Row className="g-4">
			{groups.map((group) => (
				<Col key={group.id}
					 xxl={3}
					 xl={4}
					 md={6}
					 sm={12}>
					<GroupContactsCard groupContacts={group}
									   withLink />
				</Col>
			))}
		</Row>
	);
});
