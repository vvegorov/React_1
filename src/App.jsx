import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';
import './styles.scss';
import Header from './components/Header';
import Todo from './components/Todo';
import todos from './todos';
function App(props) {

  return (
    <main>
      <Header title={props.title}/>
      <section className="todo-list">
        {props.todos.map(todo => <Todo key={todo.id} title={todo.title} completed={todo.completed}/>)}
      </section>
    </main>
  );
}

App.defaultProps = {
  title: "REACT TODO"
};
ReactDOM.render(
  <App todos={todos}/>, document.getElementById('root'));
