import React from 'react';
import Comment from "./comment";
import withGreeting from "../hoc/withGreeting";


const CommentSection = ({ comments, message }) => (
  comments.map(comment => <Comment comment={comment}
                                   key={comment.id}
                                   message={message}/>
  )
);

export default withGreeting(CommentSection);