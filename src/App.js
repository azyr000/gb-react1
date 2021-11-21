import React, { useState } from "react";
import "./App.css"; // импорт стилей
import "./styles/Message.css";
import Message from "./componens/Message";
import GbMessage from "./componens/gb-meesage/GbMessage";
import MyButton from "./componens/Ui/button/MyButton";
import MyInput from "./componens/Ui/button/input/MyInput";
import PostForm from "./componens/PostForm";
import PostList from "./componens/PostList";

function App() {
  const [likes, setLikes] = useState(0);

  function increment() {
    setLikes(likes + 1);
  }

  function dencrement() {
    setLikes(likes - 1);
  }

  // ================================

  const [value, setValue] = useState("некий текст");
  //================================
  const [posts, setPosts] = useState([
    { id: 1, title: "1 пост", body: "Dascription" },
  ]);

  //const [title, setTitle]=useState('')
  // const [body, setBody]=useState('')
  //const [post, setPost] = useState({ title: "", body: "" });

  // ======================
  //получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App-header">
      <h2>{likes}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={dencrement}>Dencrement</button>
      <h3>{value}</h3>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Message name="Alex" />
      <PostForm create={createPost} /> {/*акнкция обратного выз. */}
      <PostList remove={removePost} posts={posts} title="список" />
    </div>
  );
}

export default App;
