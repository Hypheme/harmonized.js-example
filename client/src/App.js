import React, { Component } from 'react';
import './App.css';
import ToDos from './todos';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <div>
          <ToDos />
        </div>
      </div>
    );
  }
}

export default App;
