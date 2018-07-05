import React, { Component } from 'react';
import Login from './Login';
import Chat from './Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Chat />
      </div>
    );
  }
}

export default App;
