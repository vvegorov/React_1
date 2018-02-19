import React from 'react';
import Checkbox from './Checkbox';
import Button from './Button';
function Todo(props) {
  return (
    <div className={`todo${props.completed
      ? ' completed'
      : ''}`}>
      <div className="centr">
        <Checkbox initiallyChecked={props.completed}/>
      </div>
      <div className="centr1">
        <span className="todo-title">{props.title}</span>
      </div>
      <div className="centr2">
        <Button className="delete icon" icon="delete"/>
      </div>
    </div>

  );

}
export default Todo;
