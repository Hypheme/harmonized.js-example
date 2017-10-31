import React, { Component } from 'react';

import { authorsStore } from '../../stores';
import AuthorsView from './AuthorsView';

import { observer } from 'mobx-react';

@observer
class AuthorsContainer extends Component {
  // Initialize state
  state = {
    store: authorsStore
  };

  componentDidMount() {}

  render() {
    const { store } = this.state;
    return (store && store.loaded) ? <AuthorsView authors={store.items} /> : <div>loading...</div>;
  }
}

export default AuthorsContainer;
