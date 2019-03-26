import React from 'react';
import Comment from "./comment";
import withGreeting from "./hoc/withGreeting";
import PropTypes from 'prop-types';


/**
 * Component which renders an array of comments.
 * @param comments array of comments to render
 * @param message greeting message to log
 */
const CommentSection = ({ comments, message }) => (
  comments.map(comment => <Comment comment={comment}
                                   key={comment.id}
                                   message={message}/>
  )
);

CommentSection.propTypes = {
  message: PropTypes.string,
  comments: PropTypes.array
};

export default withGreeting(CommentSection);