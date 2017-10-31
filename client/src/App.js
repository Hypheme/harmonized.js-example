import React, { Component } from 'react';
import './App.css';
import ToDos from './todos';
import Authors from './authors';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <div>
          <Authors />

          <ToDos />
          
        </div>
      </div>
    );
  }
}

export default App;
