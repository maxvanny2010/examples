import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Comments, PostContent } from './components';
import { useServerRequest } from '../../hooks';
import { loadPostAsync } from '../../redux/action';
import { selectPost } from '../../redux/selectors';

export const PostContainer = ({ className }) => {
	const params = useParams();
	const dispatch = useDispatch();
	const serverRequest = useServerRequest();
	const post = useSelector(selectPost);
	useEffect(() => {
		dispatch(loadPostAsync(serverRequest, params.id));
	}, [params.id, dispatch, serverRequest]);
	return (
		<div className={className}>
			<PostContent post={post} />
			<Comments comments={post.comments} />
		</div>
	);
};
export const Post = styled(PostContainer)`
	padding: 0 80px;
	margin: 40px 0;
`;
PostContainer.propTypes = {
	className: PropTypes.string,
};
