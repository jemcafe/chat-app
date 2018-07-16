import React, { Component } from 'react';
import Login from './Login';
import Chat from './Chat/Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Chat />
        <div style={{width:'100%', background:'#ffdddd'}}>
        </div>
      </div>
    );
  }
}

export default App;
