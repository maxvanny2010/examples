import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import { Pagination, PostCard } from './components';
import { PAGINATION_LIMIT } from '../../bff/constants';

const MainComponent = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [pageLast, setPageLast] = useState(1);
	const serverRequest = useServerRequest();
	useEffect(() => {
		serverRequest('fetchPosts', page, PAGINATION_LIMIT)
			.then(({ res, totalPages }) => {
				setPosts(res);
				setPageLast(totalPages);
			});
	}, [serverRequest, page, pageLast]);
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
			{pageLast > 1 && <Pagination page={page}
										 pageLast={pageLast}
										 setPage={setPage} />}
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
