import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import CommentSection from "./commentSection";
import withGreeting from "../hoc/withGreeting";

/**
 * Functional component which renders a post item consisting of a post, it's author and comments.
 * @param item Object containing a post, an author and post comments
 * @param message Greeting message
 * @param disableLink Indicates if the post should be clickable as a link to it's own page
 */
const PostItem = ({ item, message, disableLink }) => {

  let { post, author, comments } = item;

  /** Link click handler, disables following the post's link if the component received the disableLink prop as true. */
  const clickHandler = (e) => disableLink ? e.preventDefault() : null;

  return (
    <div className="card bg-light mb-3">
      <Link className="card-body link-no-style"
            onClick={clickHandler}
            style={disableLink ? { cursor: "default" } : {}}
            to={"/posts/" + post.id}>
        <h4 className="card-title"> {post.title} </h4>
        <h6 className="card-subtitle mb-2 text-muted"> By: {author.name} </h6>
        <p className="card-text"> {post.body} </p>
      </Link>

      <div className="comment-box card-footer">
        <h5> Comments </h5>
        {comments.length !== 0 ?
          <CommentSection message={message} comments={comments}/> : <p> Be the first to comment. </p>}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  item: PropTypes.object,
  message: PropTypes.string,
  disableLink: PropTypes.bool,
};

export default withGreeting(PostItem);