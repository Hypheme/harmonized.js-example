import React from 'react';
import { observer } from 'mobx-react';

const ToDosView = observer(({ todos }) => {
  return (
    <ul>{todos.map((todo, index) => <li key={index}>{todo.name}</li>)}</ul>
  );
});

export default ToDosView;
