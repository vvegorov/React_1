import React from 'react';
function Todo(props) {
  return (
    <div className="todo">
      <button className="checkbox icon">
        <i className="material-icons">check_box_outline_blank</i>
      </button>
      <span className="todo-title">{props.title}</span>
      <button className="delete icon">
        <i className="material-icons">delete</i>
      </button>
    </div>

  );

}
export default Todo;
