import React, { useState } from "react";

export const TodoItem = ({ todo, onDelete }) => {
  const [checked, setChecked] = useState(false);
  const change = () => {
    document.getElementById(todo.sno).style.textDecoration='line-through'
  };
  const handleCheckboxChange = () => {
    setChecked(!checked);
    if(!checked){
    change();}
    else{
      document.getElementById(todo.sno).style.textDecoration='none'
    }
  };
  return (
    <>
      <div  className="container bg-light text-dark round pb-2 ">
        <label className="flex checkbox-xl text-decoration-line-through">
          <input
            className="mt-4 me-3 form-check-input "
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
        </label>
        <h5 id={todo.sno} >{todo.title}</h5>
        <p>{todo.desc}</p>
        <button
          className="btn btn-danger btn-sm ms-2 me-3"
          type="button"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn btn-success  ms-2 btn-sm "
          onClick={handleCheckboxChange}
        >
          Done
        </button>
      </div>
      <hr />
    </>
  );
};

export default TodoItem;
