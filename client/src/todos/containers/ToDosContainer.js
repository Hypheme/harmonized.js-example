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
    return store.loaded ? <ToDosView todos={store.items} /> : <div>loading...</div>;
  }
}

export default ToDosContainer;
