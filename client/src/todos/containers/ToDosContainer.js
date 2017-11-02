import React, { Component } from 'react';

import { todosStore, authorsStore } from '../../stores';
import TodosView from './TodosView';

import { observer } from 'mobx-react';

@observer
class TodosContainer extends Component {

  componentDidMount() {}

  changeAuthorOfItem(item, author) {
    item.update({ author })
  }

  render() {
    return (todosStore && todosStore.loaded) ? 
      <TodosView 
        todos={todosStore.items} 
        authors={authorsStore.items} 
        changeAuthorOfItem={(item, author) => this.changeAuthorOfItem(item, author)}  
      /> : 
      <div>loading...</div>;
  }
}

export default TodosContainer;
