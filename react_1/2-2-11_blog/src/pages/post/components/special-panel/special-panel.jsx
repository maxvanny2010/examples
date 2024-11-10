import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../redux/action';
import { selectUserRole } from '../../../../redux/selectors';
import { checkAccess } from '../../../../redux/utils';
import { useServerRequest } from '../../../../hooks';
import { Icon } from '../../../../component';
import { ROLE } from '../../../../utils';

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const navigate = useNavigate();
	const serverRequest = useServerRequest();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const isAdmin = checkAccess([ROLE.ADMIN], roleId);
	const onPostRemove = (id) => {
		dispatch(openModal(
			{
				text: 'Remove post?',
				onConfirm: () => {
					dispatch(removePostAsync(serverRequest, id))
						.then(() => navigate('/'));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			},
		));
	};
	return (
		<div className={className}>
			<div className="published-at">
				{
					publishedAt &&
					<Icon
						inactive="true"
						id="fa-calendar-o"
						margin="0 10px 0 1px"
						padding="0"
					/>
				}
				{publishedAt}
			</div>
			{
				isAdmin && (
					<div className="post-buttons">
						{editButton}
						<Icon id="fa-trash-o"
							  margin="0 1px 0 0"
							  padding="0"
							  size="24px"
							  onClick={() => onPostRemove(id)}
						/>
					</div>
				)
			}
		</div>
	);
};
export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
		display: flex;
		align-items: center;
	}

	& .post-buttons {
		display: flex;
		padding-right: 55px;
	}
`;
SpecialPanelContainer.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	publishedAt: PropTypes.string,
	editButton: PropTypes.any,
};
