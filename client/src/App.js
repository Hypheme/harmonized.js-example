import React, { Component } from 'react';
import './App.css';
import Todos from './todos';
import Authors from './authors';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <div>
          <Authors />

          <Todos />
          
        </div>
      </div>
    );
  }
}

export default App;
