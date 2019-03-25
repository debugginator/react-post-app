import React from 'react';
import Comment from "./comment";

const PostItem = ({ item }) => { // title, body, id, userId

  let { post, author, comments } = item;

  return (
    <div className="card bg-light mb-3">
      <div className="card-body">
        <h4 className="card-title"> {post.title} </h4>
        <h6 className="card-subtitle mb-2 text-muted"> By: {author.name} </h6>
        <p className="card-text"> {post.body} </p>
      </div>

      <div className="comment-box card-footer">
        <h5> Comments </h5>
        {comments.length !== 0 ? <Comment comments={comments}/> : <p> Be the first to comment. </p>}
      </div>
    </div>
  );
};

export default PostItem;