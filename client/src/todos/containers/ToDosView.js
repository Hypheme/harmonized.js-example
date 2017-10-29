import React from 'react';

// @observer
function ToDosView({ todos }) {
  return (
    <ul>{todos.map((todo, index) => <li key={index}>{todo.name}</li>)}</ul>
  );
}

export default ToDosView;
