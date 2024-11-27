import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../../component';
import { SpecialPanel } from '../special-panel/special-panel.jsx';
import { useSelector } from 'react-redux';
import { selectPost } from '../../../../redux/selectors';
import { PATH } from '../../../../utils';

export const PostContentContainer = ({
										 className,
									 }) => {
	const navigate = useNavigate();
	const {
		id,
		title,
		imageUrl,
		content,
		publishedAt,
	} = useSelector(selectPost);
	return (
		<div className={className}>
			<img src={imageUrl}
				 alt={title} />
			<h2>{title}</h2>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="-20px 0 20px"
				editButton={
					<Icon id={'fa-pencil-square-o'}
						  margin="0 25px 0 0"
						  padding="0"
						  size="24px"
						  onClick={() => navigate(`${PATH.POST}/${id}/edit`)}
					/>
				}
			/>
			<div className="post-text">{content}</div>
		</div>
	);
};
export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 10px 20px 10px 50px;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
		padding: 0 50px 0 50px;
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
