import React from 'react';

function ToDosView({ todos }) {
  console.log(todos);
  return (
    <ul>{todos.map((todo, index) => <li key={index}>{todo.name}</li>)}</ul>
  );
}

export default ToDosView;
