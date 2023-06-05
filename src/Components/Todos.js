import React from 'react'
import {TodoItem} from "./TodoItem";
export const Todos = (props) => {
  let myStyle={
    minHeight:"60vh"
  }
  return (
    <div className='container' style={myStyle}>
      <br />
      <h3 >Tasks  </h3>
      {props.todos.length===0? "Your Todo list is Empty": props.todos.map((todo)=>{
         return(
         <TodoItem  todo={todo}  key={todo.sno} onDelete={props.onDelete}/>
         )
      })
      }  
    </div>
  )
}

export default Todos
