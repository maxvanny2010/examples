import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import { Pagination, PostCard, Search } from './components';
import { PAGINATION_LIMIT } from '../../bff/constants';

const MainComponent = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [pageLast, setPageLast] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [debouncedSearchPhrase, setDebouncedSearchPhrase] = useState('');
	const serverRequest = useServerRequest();
	useEffect(() => {
		const debounceTimeout = setTimeout(() => {
			setDebouncedSearchPhrase(searchPhrase);
		}, 2000);
		return () => clearTimeout(debounceTimeout);
	}, [searchPhrase]);
	useEffect(() => {
		serverRequest('fetchPosts', debouncedSearchPhrase, page, PAGINATION_LIMIT)
			.then(({ res, totalPages }) => {
				setPosts(res);
				setPageLast(totalPages);
			});
	}, [serverRequest, page, debouncedSearchPhrase]);
	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
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

    & .post-list {
        display: flex;
        flex-wrap: wrap;
        min-height: 935px;
        padding-bottom: 10px;
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
