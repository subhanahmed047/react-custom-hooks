import React from "react";
import Post from "./post";
import useHttp from "../hooks/http";

const Posts = () => {
  const fakeApiUrl = "https://jsonplaceholder.typicode.com/posts";
  const [fetchedData, isLoading] = useHttp(fakeApiUrl);

  let posts = [];
  if (fetchedData && !isLoading) {
    posts = fetchedData;
  }
  return posts.map(post => <Post key={post.id} post={post} />);
};

export default Posts;
