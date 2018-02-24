import React from 'react';
import Checkbox from './Checkbox';
import Button from './Button';
function Todo(props) {

  return (
    <div className={`todo${props.completed
      ? ' completed'
      : ''}`}>
      <div className="centr">
        <Checkbox checked={props.completed} onChange={() => props.onStatusChange(props.id)}/>
      </div>
      <div className="centr1">
        <span className="todo-title">{props.title}</span>
      </div>
      <div className="centr2">
        <Button className="delete icon" icon="delete" onClick={() => props.onDelete(props.id)}/>
      </div>
    </div>

  );

}
export default Todo;
