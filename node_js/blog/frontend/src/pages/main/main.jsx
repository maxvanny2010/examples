import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Pagination, PostCard, Search } from './components';
import { ERROR, METHOD, PATH, proxy, requests } from '../../utils';

const MainComponent = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [pageLast, setPageLast] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [debouncedSearchPhrase, setDebouncedSearchPhrase] = useState('');
	useEffect(() => {
		const debounceTimeout = setTimeout(() => {
			setDebouncedSearchPhrase(searchPhrase);
		}, 2000);
		return () => clearTimeout(debounceTimeout);
	}, [searchPhrase]);
	useEffect(() => {
		requests(`${proxy}${PATH.POSTS}`,
			METHOD.GET,
			null,
			{ search: debouncedSearchPhrase, page })
			.then(({ data: { posts, lastPage } }) => {
				setPosts(posts || []);
				setPageLast(lastPage || 1);
			});
	}, [page, debouncedSearchPhrase]);
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
					posts.map(({ id, title, imageUrl, publishedAt, comments }) =>
						<PostCard key={id}
								  id={id}
								  title={title}
								  imageUrl={imageUrl}
								  publishedAt={publishedAt}
								  commentsCount={comments.length}
						/>)
				) : (<div className="post-not-found">{`${ERROR.POST_NOT_FOUND}`}</div>)}
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
		width: 100%;
		font-size: 21px;
		margin: 40px auto;
		text-align: center;
		height: 50px;
		padding: 10px;
		border-radius: 4px;
		background: rgba(145, 67, 115, 0.17);
	}

`;
MainComponent.propTypes = {
	className: PropTypes.string,
};
