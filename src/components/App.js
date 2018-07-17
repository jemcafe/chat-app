import React, { Component } from 'react';
import Login from './Login/Login';
import Chat from './Chat/Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Chat />
        {/* <div style={{width:'100%', backgroundImage:'linear-gradient(0deg,#ffdddd,#ffffff)'}}>
        </div> */}
      </div>
    );
  }
}

export default App;
