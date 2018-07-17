import React, { Component } from 'react';

import Logout from './Logout';
import RoomList from './RoomList';
import Room from './Room';

class Chat extends Component {
  constructor () {
    super();
    this.state = { }
  }

  render() {
    return (
      <div id="chat">
        <Logout />
        <RoomList />
        <Room />
      </div>
    );
  }
}

export default Chat;
