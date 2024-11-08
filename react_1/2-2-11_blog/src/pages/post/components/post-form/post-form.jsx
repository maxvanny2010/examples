import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

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
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	const contentRef = useRef(null);
	useEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleValue(title);
	}, [imageUrl, title]);
	const onSave = () => {
		const newContent = SanitizeContent(contentRef.current.innerHTML);
		if (imageUrlValue !== '' && titleValue !== '' && newContent !== '') {
			return dispatch(
				savePostAsync(requestServer,
					{
						id,
						imageUrl: imageUrlValue,
						title: titleValue,
						content: newContent,
					}),
			).then(({ id }) => navigate(`/post/${id}`));
		}
	};
	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitleValue(target.value);
	return (
		<div className={className}>
			<Input
				id="imageUrl"
				value={imageUrlValue}
				onChange={onImageChange}
				placeholder="Path to image..." />
			<Input
				id="title"
				value={titleValue}
				onChange={onTitleChange}
				placeholder="Title..." />
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="10px 0 20px"
				editButton={
					<Icon id={'fa-floppy-o'}
						  margin="0 20px 0 0"
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
		padding: 8px;
		min-height: 80px;
		border: 1px dotted #6b9317;
		border-radius: 5px;
		font-size: 18px;
		background-color: #dedada;
		color: #171616
	}

	.post-text:empty::before {
		content: 'Enter your text here...';
		color: gray;
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
