import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Icon } from '../../../../../component';
import { useServerRequest } from '../../../../../hooks';
import { removeCommentAsync } from '../../../../../redux/action';

const CommentContainer = ({
							  className,
							  postId,
							  id,
							  author,
							  publishedAt,
							  content,
						  }) => {
	const serverRequest = useServerRequest();
	const dispatch = useDispatch();
	const onCommentRemove = (id) => {
		dispatch(removeCommentAsync(serverRequest, postId, id));
	};
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							id="fa-user-circle-o"
							margin="0 0 0 1px"
							padding="0"
							size="18px"
							onClick={() => {
							}}
						/>
						{author}
					</div>
					<div className="published-at">
						<Icon
							id="fa-calendar-o"
							margin="0 0 0 10px"
							size="18px"
							onClick={() => {
							}}
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon
				id="fa-trash-o"
				margin="0 0 0 10px"
				size="18px"
				onClick={() => onCommentRemove(id)}
			/>

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
	postId: PropTypes.string,
	id: PropTypes.number,
	author: PropTypes.string,
	publishedAt: PropTypes.string,
	content: PropTypes.string,
};
