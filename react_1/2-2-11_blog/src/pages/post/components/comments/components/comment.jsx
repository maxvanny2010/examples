import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '../../../../../component';

const CommentContainer = ({
							  className,
							  author,
							  publishedAt,
							  content,
						  }) => {
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							id="fa-user-circle-o"
							margin="0 0 0 1px"
							padding="0"
							size="18px"
							onClick={() => {
							}}
						/>
						{author}
					</div>
					<div className="published-at">
						<Icon
							id="fa-calendar-o"
							margin="0 0 0 10px"
							size="18px"
							onClick={() => {
							}}
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon
				id="fa-trash-o"
				margin="0 0 0 10px"
				size="18px"
				onClick={() => {
				}}
			/>

		</div>
	);
};
export const Comment = styled(CommentContainer)`
	display: flex;
	width: 100%;
	margin-top: 10px;

	& .comment {
		width: 550px;
		padding: 5px 10px;
		border: 1px dotted #8cc718;
		border-radius: 5px;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	& .published-at {
		display: flex;
		align-items: center;
		gap: 10px;
	}
`;
CommentContainer.propTypes = {
	className: PropTypes.string,
	author: PropTypes.string,
	publishedAt: PropTypes.string,
	content: PropTypes.string,
};
