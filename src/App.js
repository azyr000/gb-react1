import React, { useState } from 'react';
import './App.css';  // импорт стилей 
import './styles/Message.css';
import Message from './componens/Message';
import GbMessage from './componens/gb-meesage/GbMessage';
import MyButton from './componens/Ui/button/MyButton';
import MyInput from './componens/Ui/button/input/MyInput';



function App() {
   
   const [likes, setLikes]=useState(0)
   
   function increment(){
      setLikes(likes+1)
      }
      
   function dencrement(){
         setLikes(likes - 1);
         }
         
        // ================================
     

  const [value, setValue] = useState('некий текст')
  const [posts, setPosts]=useState([
   { id: 1, title: "1 пост", body: "Dascription" }
  ])
  
   //const [title, setTitle]=useState('')
  // const [body, setBody]=useState('')
  const [post, setPost]=useState({title:'', body:'',})
   
   const addNewPost=(e)=>{
       e.preventDefault()   // команда запрет перезагрузки страницы 
      
    //  const newPost={
    //  id:Date.now(),
    //  title,
    //  body,
    //  }
   
      //setPosts([...posts, newPost])
      setPosts([...posts, {...post, id:Date.now() }])
     // setTitle('')    очищение инпут после кнопки 
     // setBody('')
     setPost({title:'', body:'',})
   
   }
  // ======================
  //получаем пост из дочернего компонента
  const removPost=(post) => {
  setPosts(posts.filter(p => p.id !==post.id))
  }
   
   

  return (
    <div className="App-header">
        <h2>{likes}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={dencrement}>Dencrement</button>
      <h3>{value}</h3>
      <input type="text"
      value={value}
           onChange={event => setValue(event.target.value)}/>
       <Message name="Alex"/>
       
         <form>
           {/* упровляемый компонент*/}
         <MyInput 
             // value={title}
             value={post.title}
              //onChange={e=>setTitle(e.target.value)}
              onChange={e => setPost({...post, title: e.target.value})}
              type="text"
              placeholder="имя"
              />
         <MyInput 
               // value={body}
               value={post.body}
               // onChange={e=>setBody(e.target.value)}
               onChange={e => setPost({...post, body: e.target.value})}
               type="text"
               placeholder="содержание"
               /> 
         <MyButton onClick={addNewPost}> опубликовать</MyButton>
         </form>
         <h4 style={{textAlign:'center'}}>список постов</h4>
        {posts.map((post, index)=>
           <GbMessage number={index + 1} post={post} kei={post.id}/>
            )}
     
    </div>
  );
}

export default App;
