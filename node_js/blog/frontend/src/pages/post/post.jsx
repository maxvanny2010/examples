import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { PATH, ROLE } from '../../utils';
import { Error, Forumbee, PrivateContent } from '../../component';
import { Comments, PostContent, PostForm } from './components';
import { loadPostAsync, RESET_POST_DATA } from '../../redux/action';

export const PostContainer = ({ className }) => {
	const params = useParams();
	const dispatch = useDispatch();
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const isEditing = !!useMatch(`${PATH.POST}/:id/edit`);
	const isCreating = !!useMatch(`${PATH.POST}`);
	useEffect(() => {
		setError('');
		setIsLoading(true);
		if (isCreating) {
			dispatch(RESET_POST_DATA);
			setIsLoading(false);
		} else {
			dispatch(loadPostAsync(params.id)).then(
				(error) => {
					setError(error);
					setIsLoading(false);
				},
			);
		}
	}, [params.id, dispatch, isCreating]);
	if (isLoading) return <div className="loading">Loading...</div>;
	const postContent = isEditing || isCreating ? (
		<PrivateContent access={[ROLE.ADMIN]}
						errorServer={error}>
			<Forumbee size="24px"
					  id={'forumbee'} />
			<PostForm />
		</PrivateContent>
	) : (
		<div className={className}>
			<PostContent />
			<Comments />
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
