import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';
import './styles.scss';
import Header from './components/Header';
import Todo from './components/Todo';
function App(props) {

  return (
    <main>
      <Header title={props.title}/>
      <section className="todo-list">
        <Todo title={"Изучить JS"} completed={true}/>
        <Todo title={"Изучить React"} completed={false}/>
      </section>
    </main>
  );
}

App.defaultProps = {
  title: "REACT TODO"
};
ReactDOM.render(
  <App/>, document.getElementById('root'));
