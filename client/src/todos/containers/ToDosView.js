import React from 'react';

import TodoList from '../components/TodoList'

const TodosView = (props) => {
  return (
    <div>
      <h2>TODOS</h2>
      <TodoList {...props}/>
    </div>
  );
};

export default TodosView;

