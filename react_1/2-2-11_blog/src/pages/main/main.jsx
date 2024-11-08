import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import { PostCard } from './components';

const MainComponent = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const serverRequest = useServerRequest();
	useEffect(() => {
		serverRequest('fetchPosts')
			.then((posts) => setPosts(posts.res));
	}, [serverRequest]);
	return (
		<div className={className}>
			<div className="post-list">
				{
					posts.map(({ id, title, imageUrl, publishedAt, commentsCount }) =>
						<PostCard key={id}
								  id={id}
								  title={title}
								  imageUrl={imageUrl}
								  publishedAt={publishedAt}
								  commentsCount={commentsCount}
						/>)
				}
			</div>

		</div>
	);
};
export const Main = styled(MainComponent)`

	& .post-list {
		display: flex;
		flex-wrap: wrap;
	}
`;
MainComponent.propTypes = {
	className: PropTypes.string,
};
MainComponent.propTypes = {
	className: PropTypes.string,
};
