import React, { Component } from 'react';

import todosStore from '../stores/toDosStore.js';
import ToDosView from './ToDosView';

class ToDosContainer extends Component {
  // Initialize state
  state = {
    store: todosStore
  };

  componentDidMount() {}

  render() {
    const { store } = this.state;
    return <ToDosView todos={store.items} />;
  }
}

export default ToDosContainer;
