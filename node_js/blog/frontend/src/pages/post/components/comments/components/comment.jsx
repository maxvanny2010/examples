import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { CLOSE_MODAL, openModal, removeCommentAsync } from '../../../../../redux/action';
import { selectPost, selectUserRole } from '../../../../../redux/selectors/';
import { checkAccess } from '../../../../../redux/utils';
import { Icon } from '../../../../../component';
import { ROLE } from '../../../../../utils';

const CommentContainer = ({
							  className,
							  id,
							  author,
							  publishedAt,
							  content,
						  }) => {
	const dispatch = useDispatch();
	const { id: postId } = useSelector(selectPost);
	const roleId = useSelector(selectUserRole);
	const isAdminModerator = checkAccess([ROLE.ADMIN, ROLE.MODERATOR], roleId);
	const onCommentRemove = (id) => {
		dispatch(openModal(
			{
				text: 'Remove comment?',
				onConfirm: () => {
					dispatch(removeCommentAsync(postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			},
		));
	};
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							inactive="true"
							id="fa-user-circle-o"
							margin="0 0 0 1px"
							padding="0"
							size="18px"
						/>
						{author}
					</div>
					<div className="published-at">
						<Icon
							inactive="true"
							id="fa-calendar-o"
							margin="0 0 0 10px"
							size="18px"
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			{
				isAdminModerator && <Icon
					id="fa-trash-o"
					margin="0 0 0 10px"
					size="18px"
					onClick={() => onCommentRemove(id)}
				/>
			}

		</div>
	);
};
export const Comment = styled(CommentContainer)`
	display: flex;
	width: 100%;
	margin-top: 10px;

	& .comment {
		width: 550px;
		padding: 5px 10px;
		border: 1px dotted #8cc718;
		border-radius: 5px;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	& .published-at {
		display: flex;
		align-items: center;
		gap: 10px;
	}
`;
CommentContainer.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	author: PropTypes.string,
	publishedAt: PropTypes.string,
	content: PropTypes.string,
};
