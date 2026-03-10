import React from "react";
import { useGetPostsQuery } from "../services/api";

const Query = () => {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>Error loading posts</h1>;

  return (
    <div>
      <h1>Posts</h1>
      {data.map((post) => (
        <div key={post.id}>
          <h3>
            {post.id}
            {"]"} {"\n"} {post.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Query;
