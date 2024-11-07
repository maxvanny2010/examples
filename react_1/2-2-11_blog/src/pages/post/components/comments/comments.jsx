import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Comment } from './index.jsx';
import { Icon } from '../../../../component';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId, selectUserRole } from '../../../../redux/selectors';
import { useServerRequest } from '../../../../hooks';
import { addCommentAsync } from '../../../../redux/action';
import { ROLE } from '../../../../utils';


export const CommentContainer = ({ className, comments, postId }) => {
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);
	const roleId = useSelector(selectUserRole);
	const serverRequest = useServerRequest();
	const [newComment, setNewComment] = useState('');
	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(serverRequest, userId, postId, content));
		setNewComment('');
	};
	const isUserGuest = roleId === ROLE.GUEST;
	return (
		<div className={className}>
			{!isUserGuest ? (
				<div className="new-comment">
			<textarea
				name="comment"
				value={newComment}
				placeholder="Comment..."
				onChange={({ target }) =>
					setNewComment(target.value)}>
			</textarea>
					<Icon
						id="fa-paper-plane-o"
						margin="0 0 0 10px"
						size="18px"
						onClick={() => {
							onNewCommentAdd(userId, postId, newComment);
						}}
					/>
				</div>
			) : null}
			<div className="comments">
				{
					comments.map(({ id, author, content, publishedAt }) => (
						<Comment key={id}
								 author={author}
								 content={content}
								 publishedAt={publishedAt} />
					))
				}
			</div>
		</div>
	);
};
export const Comments = styled(CommentContainer)`
    width: 580px;
    margin: 0 auto;

    & .new-comment {
        display: flex;
        width: 100%;
        margin: 20px 0 0;
    }

    & .new-comment textarea {
        width: 550px;
        resize: none;
        font-size: 16px;
        height: 120px;
    }
`;
CommentContainer.propTypes = {
	className: PropTypes.string,
	comments: PropTypes.array,
	postId: PropTypes.string,
};
