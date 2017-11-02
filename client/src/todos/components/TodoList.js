import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = ({ todos, authors, changeAuthorOfItem }) => {
  return (
    <div>
      {todos.map(todoItem => <TodoListItem key={todoItem.__id} todoItem={todoItem} authors={authors} changeAuthorOfItem={changeAuthorOfItem}/>)}
    </div>
  );
};

export default TodoList;
