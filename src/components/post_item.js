import React from 'react';

const PostItem = ({ item }) => { // title, body, id, userId

  let {post, author, comments} = item;

  return (
    <div className="card bg-light mb-3">
      <div className="card-body">
        <h5 className="card-title"> {post.title} </h5>
        <h6 className="card-subtitle mb-2 text-muted"> By: {author.name} </h6>
        <p className="card-text"> {post.body} </p>
      </div>
    </div>
  );
};

export default PostItem;