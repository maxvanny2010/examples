import React, { memo, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { RootState } from '../store/reducers';
import { fetchGroups } from '../store/thunks';
import { GroupContactsCard } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks';

export const GroupListPage = memo(() => {
	const dispatch = useAppDispatch();

	const { data: groups, loading, error } = useAppSelector((state: RootState) => state.groups);

	useEffect(() => {
		if (!groups.length) {
			dispatch(fetchGroups()).then(r => r);
		}
	}, [dispatch, groups.length]);

	if (loading) {
		return <p>Loading groups...</p>;
	}

	if (error) {
		return <p>Error loading: {error}</p>;
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
