import React from 'react';
import { observer } from 'mobx-react';

import AuthorSelect from './AuthorSelect';

const TodoListItem = ({ todoItem, authors, changeAuthorOfItem }) => {
  return (
    <div>
      <span>{todoItem.task}  </span>
      <AuthorSelect todoItem={todoItem} authors={authors} changeAuthorOfItem={changeAuthorOfItem}/>
    </div>
  );
};

export default TodoListItem;
