import React, { Component } from 'react';

import ToDosView from './ToDosView';

class ToDosContainer extends Component {
  // Initialize state
  state = {
    todos: [{ name: 'a todo' }]
  };

  componentDidMount() {}

  render() {
    const { todos } = this.state;
    console.log(todos);
    return <ToDosView todos={todos} />;
  }
}

export default ToDosContainer;
