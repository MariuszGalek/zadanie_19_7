import React from 'react';
import CommentContainer from './CommentContainer';
import AddCommentContainer from "./AddCommentContainer";

const CommentsList = ({comments}) => (
	<div>
		<AddCommentContainer/>
		<ul>
			{comments.map(comment => (
				<CommentContainer key={comment.id} {...comment}/>
			))}
		</ul>
	</div>
);

export default CommentsList;