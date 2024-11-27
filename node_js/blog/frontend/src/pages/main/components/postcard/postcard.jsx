import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '../../../../component';
import { Link } from 'react-router-dom';

const PostCardComponent = ({
							   className,
							   id,
							   title,
							   imageUrl,
							   publishedAt,
							   commentsCount,
						   }) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl}
					 alt={imageUrl} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon
								inactive="true"
								id="fa-calendar-o"
								margin="0 7px 0 0"
								padding="0"
								size="18px"
							/>
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								inactive="true"
								id="fa-comment-o"
								margin="0 7px 0 0"
								padding="0"
								size="18px"
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};
export const PostCard = styled(PostCardComponent)`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin: 26px;
	padding: 20px;

	& img {
		display: block;
		width: 100%;
		border-radius: 5px;
		box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
		margin: 0;
		padding: 2px;
	}

	& h4 {
		margin: 0;
		padding: 5px;
	}

	& .post-card-footer {

	}

	& .post-card-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 12px;
		gap: 10px;
		border-bottom: 1px solid #6b9317;
	}

	& .published-at {
		display: flex;
		align-items: center;
		padding-left: 8px;
	}

	& .comments-count {
		display: flex;
		align-items: center;
		padding-right: 8px;
	}
	& a:hover{
		color: rgba(255, 255, 255, 0.87);
	}

`;
PostCardComponent.propTypes = {
	className: PropTypes.string,
};
PostCardComponent.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	publishedAt: PropTypes.string,
	commentsCount: PropTypes.number,
};
