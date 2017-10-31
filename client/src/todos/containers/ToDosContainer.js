import React, { Component } from 'react';

import { toDosStore } from '../../stores';
import ToDosView from './ToDosView';

import { observer } from 'mobx-react';

@observer
class ToDosContainer extends Component {
  // Initialize state
  state = {
    store: toDosStore
  };

  componentDidMount() {}

  render() {
    const { store } = this.state;
    return (store && store.loaded) ? <ToDosView todos={store.items} /> : <div>loading...</div>;
  }
}

export default ToDosContainer;
