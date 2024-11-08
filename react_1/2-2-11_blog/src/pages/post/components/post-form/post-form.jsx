import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SanitizeContent } from './utils';
import { Icon, Input } from '../../../../component';
import { useServerRequest } from '../../../../hooks/';
import { savePostAsync } from '../../../../redux/action';
import { SpecialPanel } from '../special-panel/special-panel.jsx';

export const PostFormContainer = ({
									  className,
									  post: {
										  id,
										  title,
										  imageUrl,
										  content,
										  publishedAt,
									  },
								  }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);
	const onSave = () => {
		const newImage = imageRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = SanitizeContent(contentRef.current.innerHTML);
		dispatch(
			savePostAsync(requestServer,
				{
					id,
					imageUrl: newImage,
					title: newTitle,
					content: newContent,
				}),
		).then(() => navigate(`/post/${id}`));
	};
	return (
		<div className={className}>
			<Input ref={imageRef}
				   defaultValue={imageUrl}
				   placeholder="Path to image..." />
			<Input ref={titleRef}
				   defaultValue={title}
				   placeholder="Title..." />
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="10px 0 20px"
				editButton={
					<Icon id={'fa-floppy-o'}
						  margin="0 10px 0 0"
						  padding="0"
						  size="24px"
						  onClick={onSave}
					/>
				}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text">
				{content}
			</div>
		</div>
	);
};
export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		white-space: pre-line;
	}
`;

PostFormContainer.propTypes = {
	className: PropTypes.string,
	post: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		imageUrl: PropTypes.string,
		publishedAt: PropTypes.string,
		content: PropTypes.string,
	}),

};
