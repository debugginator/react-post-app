import React from 'react';

const Comment = ({ comments }) => {
  return comments.map(comment =>
    <div className="media p-1 border" key={comment.id}>
        <img className="align-self-center mx-4"
             src={require('../assets/man.svg')}
             height={40}
             width={40}/>

      <div className="media-body">
        <h6>{comment.email}</h6>
        <p> {comment.body} </p>
      </div>
    </div>
  );
};

export default Comment;