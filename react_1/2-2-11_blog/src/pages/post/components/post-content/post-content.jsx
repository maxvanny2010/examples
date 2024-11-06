import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '../../../../component/index.jsx';

export const PostContentContainer = ({
										 className,
										 post: {
											 /*id,*/
											 title,
											 imageUrl,
											 content,
											 publishedAt,
										 },
									 }) => {
	return (
		<div className={className}>
			<img src={imageUrl}
				 alt={title} />
			<h2>{title}</h2>
			<div className="special-content">
				<div className="published-at">
					<Icon id="fa-calendar-o"
						  margin="0 10px 0 0"
						  padding="0"
						  size="24px"
						  onClick={() => {
						  }}
					/>
					{publishedAt}
				</div>
				<div className="post-buttons">
					<Icon id="fa-pencil-square-o"
						  margin="0 10px 0 0"
						  padding="0"
						  size="24px"
						  onClick={() => {
						  }}
					/>
					<Icon id="fa-trash-o"
						  margin="0 10px 0 0"
						  padding="0"
						  onClick={() => {
						  }}
					/>
				</div>
			</div>
			<div>{content}</div>
		</div>
	);
};
export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .special-content {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px;
		font-size: 18px;
	}

	& .published-at {
		display: flex;
		align-items: center;
	}

	& .post-buttons {
		display: flex;
	}
`;

PostContentContainer.propTypes = {
	className: PropTypes.string,
	post: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		imageUrl: PropTypes.string,
		publishedAt: PropTypes.string,
		content: PropTypes.string,
	}),

};
