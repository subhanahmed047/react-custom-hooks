import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <p>
        <b>Title: </b>
        {post.title}
      </p>
      <p>
        <b>Body: </b>
        {post.body}
      </p>
      <hr />
    </div>
  );
};
export default Post;
