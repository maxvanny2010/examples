import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { useServerRequest } from '../../hooks';
import { Pagination, PostCard, Search } from './components';
import { PAGINATION_LIMIT } from '../../bff/constants';
import { debounce } from '../../bff/utils';

const MainComponent = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [pageLast, setPageLast] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');
	const serverRequest = useServerRequest();
	useEffect(() => {
		serverRequest('fetchPosts', searchPhrase, page, PAGINATION_LIMIT)
			.then(({ res, totalPages }) => {
				setPosts(res);
				setPageLast(totalPages);
			});
	}, [serverRequest, page, pageLast, shouldSearch]);
	const startDelaySearch = useMemo(() =>
			debounce(setShouldSearch, 2000),
		[],
	);
	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelaySearch(!shouldSearch);
	};
	return (
		<div className={className}>
			<Search
				searchPhase={searchPhrase}
				onChange={onSearch}
			/>
			<div className="post-list">
				{posts.length > 0 ? (
					posts.map(({ id, title, imageUrl, publishedAt, commentsCount }) =>
						<PostCard key={id}
								  id={id}
								  title={title}
								  imageUrl={imageUrl}
								  publishedAt={publishedAt}
								  commentsCount={commentsCount}
						/>)
				) : (<div className="post-not-found">POSTS NOT FOUND</div>)}
			</div>
			{pageLast > 1 && <Pagination page={page}
										 pageLast={pageLast}
										 setPage={setPage} />}
		</div>
	);
};
export const Main = styled(MainComponent)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 200px);

    & .post-list {
        display: flex;
        flex-wrap: wrap;
        min-height: 60vh;
        padding-bottom: 50px;
    }

    & .post-not-found {
        font-size: 21px;
        margin: 40px auto;
        text-align: center;
    }

`;
MainComponent.propTypes = {
	className: PropTypes.string,
};
