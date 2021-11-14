import React from 'react'

export default function Message(props) {
   return (
      <div className='post'>
         <strong>Post</strong> 
         <div>
            <p>Hello, {props.name }</p>
         </div>
      </div>
   )
}
