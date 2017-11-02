import React from 'react';
import { observer } from 'mobx-react';

const ToDosView = observer(({ todos }) => {
  return (
    <div>
      <h2>TODOS</h2>
      <ul>{todos.map((todo, index) => <li key={index}>{todo.task} - {todo.author.name}</li>)}</ul>
    </div>
  );
});

export default ToDosView;
