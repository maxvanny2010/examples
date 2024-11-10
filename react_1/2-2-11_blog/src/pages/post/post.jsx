import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ROLE } from '../../utils';
import { useServerRequest } from '../../hooks';
import { selectPost } from '../../redux/selectors';
import { Error, Forumbee, PrivateContent } from '../../component';
import { Comments, PostContent, PostForm } from './components';
import { loadPostAsync, RESET_POST_DATA } from '../../redux/action';

export const PostContainer = ({ className }) => {
	const params = useParams();
	const dispatch = useDispatch();
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const isEditing = !!useMatch('/post/:id/edit');
	const isCreating = !!useMatch('/post');
	const serverRequest = useServerRequest();
	const post = useSelector(selectPost);
	useEffect(() => {
		setError('');
		setIsLoading(true);
		if (isCreating) {
			dispatch(RESET_POST_DATA);
			setIsLoading(false);
		} else {
			dispatch(loadPostAsync(serverRequest, params.id)).then(
				(loadedPost) => {
					setError(loadedPost.error);
					setIsLoading(false);
				},
			);
		}
	}, [params.id, dispatch, serverRequest, isCreating]);
	if (isLoading) return <div className="loading">Loading...</div>;
	const postContent = isEditing || isCreating ? (
		<PrivateContent access={[ROLE.ADMIN]}
						errorServer={error}>
			<Forumbee size="24px"
					  id={'forumbee'} />
			<PostForm post={post} />
		</PrivateContent>
	) : (
		<div className={className}>
			<PostContent post={post} />
			<Comments comments={post.comments}
					  postId={post.id}
			/>
		</div>
	);
	return error ? <Error error={error} /> : postContent;
};
export const Post = styled(PostContainer)`

    & .loading {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
PostContainer.propTypes = {
	className: PropTypes.string,
};
