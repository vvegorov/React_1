import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';
import './styles.scss';

function App(props) {
  console.log(props);
  return (
    <main>
      <header>
        <h1>{props.title}</h1>
      </header>
      <section className="todo-list">
        <div className="todo completed">
          <button className="checkbox icon">
            <i className="material-icons">check_box</i>
          </button>
          <span className="todo-title">Изучить реакт1</span>
          <button className="delete icon">
            <i className="material-icons">delete</i>
          </button>
        </div>
        <div className="todo">
          <button className="checkbox icon">
            <i className="material-icons">check_box_outline_blank</i>
          </button>
          <span className="todo-title">Изучить реакт2</span>
          <button className="delete icon">
            <i className="material-icons">delete</i>
          </button>
        </div>
      </section>
    </main>
  );
}

ReactDOM.render(
  <App title = "REASDFRT!!!"/>, document.getElementById('root'));
