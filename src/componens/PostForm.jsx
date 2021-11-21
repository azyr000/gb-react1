import React, { useState } from "react";
import MyButton from "./Ui/button/MyButton";
import MyInput from "./Ui/button/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault(); // команда запрет перезагрузки страницы

    //  const newPost={
    //  id:Date.now(),
    //  title,
    //  body,
    //  }

    //setPosts([...posts, newPost])
    //setPosts([...posts, { ...post, id: Date.now() }]);
    // setTitle('')    очищение инпут после кнопки
    // setBody('')

    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      {/* упровляемый компонент*/}
      <MyInput
        // value={title}
        value={post.title}
        //onChange={e=>setTitle(e.target.value)}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="имя"
      />
      <MyInput
        // value={body}
        value={post.body}
        // onChange={e=>setBody(e.target.value)}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="содержание"
      />
      <MyButton onClick={addNewPost}> опубликовать</MyButton>
    </form>
  );
};

export default PostForm;
