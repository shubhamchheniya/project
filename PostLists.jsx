// PostLists.js
import React from "react";
import ListItem from "./ListItem";

const PostLists = ({ postList }) => {
  return (
    <div className="post-list">
      {postList.map((post, index) => (
        <ListItem key={index} post={post} />
      ))}
    </div>
  );
};

export default PostLists;
