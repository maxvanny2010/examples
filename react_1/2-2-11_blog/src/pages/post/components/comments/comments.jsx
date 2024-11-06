import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const CommentContainer = ({ className }) => {
	/*const comments = useSelector(selector);*/
	useEffect(() => {

	}, []);
	return (
		<div className={className}>
		</div>
	);
};
export const Comments = styled(CommentContainer)` `;
CommentContainer.propTypes = {
	className: PropTypes.string,

};
