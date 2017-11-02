import React from 'react';
import { observer } from 'mobx-react';

const AuthorSelect = ({ todoItem, authors, changeAuthorOfItem }) => {
  
    function handleChance(event) {
      changeAuthorOfItem(todoItem, authors.find(author => author.__id = event.target.key));
    }
    
    return (
      <select 
        key={todoItem.author.__id} 
        onChange={handleChance}
        >
        { authors.map(author => <option key={ author.__id }>{author.name}</option>) }
      </select>
  );
};

export default AuthorSelect;
