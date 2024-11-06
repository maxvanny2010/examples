import styled from 'styled-components';
import PropTypes from 'prop-types';

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
			<div className="special-content">{publishedAt}</div>
			<div>{content}</div>
		</div>
	);
};
export const PostContent = styled(PostContentContainer)` `;

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
