import React from 'react';
import './TodoItem.css';
import classNames from "classnames";

// @ts-ignore
function TodoItem({todo, onCheckboxChange}) {

  function checkboxChange() {
    onCheckboxChange({
      id: todo.id,
      value: !todo.checked
    })
  }

  console.log(todo);

  return (
    <div className={classNames('todo-item-container', {'todo-item-completed': todo.checked})}>
      <input className="todo-item-checkbox" type="checkbox" onChange={checkboxChange} checked={todo.checked}/>
      <div className="todo-item-text">
        {todo.text}
      </div>
    </div>
  );
}

export default TodoItem;
