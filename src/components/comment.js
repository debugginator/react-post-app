import React from 'react';
import withGreeting from "./hoc/withGreeting";
import PropTypes from "prop-types";


/**
 * Component which renders one user comment.
 * @param comment post comment
 */
const Comment = ({ comment }) => (
  <div className="media p-1 border no-overflow">
    <img className="align-self-center mx-4"
         src={require('../assets/man.svg')}
         height={40}
         width={40}
         alt="Profile icon"
    />

    <div className="media-body">
      <h6>{comment.email}</h6>
      <p> {comment.body} </p>
    </div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.object,
  message: PropTypes.string
};

export default withGreeting(Comment);