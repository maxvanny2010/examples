import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { Comment } from './index.jsx';
import { Icon } from '../../../../component';
import { useDispatch, useSelector } from 'react-redux';
import { selectComments, selectPost, selectUserRole } from '../../../../redux/selectors';
import { addCommentAsync } from '../../../../redux/action';
import { ROLE } from '../../../../utils';
import { checkAccess } from '../../../../redux/utils';


export const CommentContainer = ({ className }) => {
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const { id: postId } = useSelector(selectPost);
	const comments = useSelector(selectComments);
	const isGuest = checkAccess([ROLE.GUEST], roleId);
	const [newComment, setNewComment] = useState('');
	const onNewCommentAdd = (postId, content) => {
		dispatch(addCommentAsync(postId, content));
		setNewComment('');
	};
	return (
		<div className={className}>
			{!isGuest ? (
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
							onNewCommentAdd(postId, newComment);
						}}
					/>
				</div>
			) : null}
			<div className="comments">
				{
					comments.map(({ id, author, content, publishedAt }) => (
						<Comment key={id}
								 id={id}
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
