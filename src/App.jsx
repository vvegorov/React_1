import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sarawewe" />
      <Welcome name="Cahalasads" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
