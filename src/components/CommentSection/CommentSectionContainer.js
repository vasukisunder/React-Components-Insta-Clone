// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments

  const [comment] = useState(props.comments);
  
  return (
    <div>
      
      {comment.map(c => (
        <Comment user = {c.username} com = {c.text} />
      ))}
      
      <CommentInput />
    </div>
  );
};

export default CommentSection;
