import React from "react";
import GbMessage from "./gb-meesage/GbMessage";

const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>список постов</h4>
      {posts.map((post, index) => (
        <GbMessage
          remove={remove}
          number={index + 1}
          post={post}
          kei={post.id}
        />
      ))}
    </div>
  );
};
export default PostList;
