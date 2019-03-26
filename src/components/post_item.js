import React from 'react';
import CommentSection from "./commentSection";
import { Link } from "react-router-dom";
import withGreeting from "../hoc/withGreeting";

const PostItem = ({ item, message }) => {

  let { post, author, comments } = item;

  return (
    <div className="card bg-light mb-3">
      <Link className="card-body link-no-style"
            to={"/posts/" + post.id}>
        <h4 className="card-title"> {post.title} </h4>
        <h6 className="card-subtitle mb-2 text-muted"> By: {author.name} </h6>
        <p className="card-text"> {post.body} </p>
      </Link>

      <div className="comment-box card-footer">
        <h5> Comments </h5>
        {comments.length !== 0 ? <CommentSection message={message} comments={comments}/> : <p> Be the first to comment. </p>}
      </div>
    </div>
  );
};

export default withGreeting(PostItem);