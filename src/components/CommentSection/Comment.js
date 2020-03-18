// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';

const Comment = ({user,com}) => {
  return (
    <div className="comment-text">
      <span className="user">{user}</span>
      {' '}
      <span className="comment">{com}</span>
    </div>
  );
};


export default Comment;
