import React from 'react'
import MyButton from '../Ui/button/MyButton'



export default function GbMessage(props) {
  
   return (
      <div className="App">
          <div className="post">
             <div className="post__content">
               <strong>{props.number}. {props.post.title}</strong>
                     <div>
                     {props.post.body}
                     </div>
               </div>     
                   <div className="post__btns">
                     <MyButton>удалить</MyButton>
                   </div>
          </div>
       </div>
   )
}
