import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { message: 'no message yet' }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getMessage();
  }

  getMessage = () => {
    // Get the passwords and store them in state
    fetch('/api/message')
      .then(res => res.json())
      .then(({ message }) => this.setState({ message }));
  }

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <div>
          <h1>Message</h1>
          <div>{message}</div>
        </div>
      </div>
    );
  }
}

export default App;
