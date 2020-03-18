// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = ({props}) => {
  // set up state for the likes
  const [likes, addLike] = useState(props.likes);
  console.log(props);
  const likePic = () => {
    addLike(likes => likes + 1);
  };


  return (
   
    <div className="post-border">
      <PostHeader
        username={props.username}
        thumbnailUrl={
          props.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.imageUrl}
        />
      </div>
      <LikeSection likePic = {likePic} likes = {likes} />
      <CommentSection
        postId={props.imageUrl}
        comments={props.comments}
      />
    </div>
  );
};

export default Post;


