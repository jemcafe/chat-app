import React, { Component } from 'react';

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
        <RoomList />
        <Room />
      </div>
    );
  }
}

export default Chat;
