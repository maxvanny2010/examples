import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../hooks';
import { selectPost } from '../../redux/selectors';
import { Comments, PostContent, PostForm } from './components';
import { loadPostAsync, RESET_POST_DATA } from '../../redux/action';

export const PostContainer = ({ className }) => {
	const params = useParams();
	const dispatch = useDispatch();
	const isEditing = useMatch('/post/:id/edit');
	const isCreating = useMatch('/post');
	const serverRequest = useServerRequest();
	const post = useSelector(selectPost);
	useEffect(() => {
		if (isCreating) {
			dispatch(RESET_POST_DATA);
		} else {
			dispatch(loadPostAsync(serverRequest, params.id));
		}
	}, [params.id, dispatch, serverRequest, isCreating]);
	return (<div className={className}>
		{isEditing || isCreating ? (<PostForm post={post} />
		) : (
			<>
				<PostContent post={post} />
				<Comments comments={post.comments}
						  postId={post.id}
				/>
			</>
		)}
	</div>);
};
export const Post = styled(PostContainer)`
	padding: 0 80px;
	margin: 40px 0;
`;
PostContainer.propTypes = {
	className: PropTypes.string,
};
