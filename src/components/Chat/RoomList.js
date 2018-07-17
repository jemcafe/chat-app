import React, { Component } from 'react';

class RoomList extends Component {
  constructor () {
    super();
    this.state = { 
      rooms: [
        { id: 1, name: 'ROOM' },
        { id: 2, name: 'ROOM' },
        { id: 3, name: 'ROOM' },
        { id: 4, name: 'ROOM' },
        { id: 5, name: 'ROOM' },
        { id: 6, name: 'ROOM' },
        { id: 8, name: 'ROOM' },
        { id: 9, name: 'ROOM' },
        { id: 10, name: 'ROOM' },
        { id: 11, name: 'ROOM' },
        { id: 12, name: 'ROOM' },
        { id: 13, name: 'ROOM' },
        { id: 14, name: 'ROOM' },
        { id: 15, name: 'ROOM' },
        { id: 16, name: 'ROOM' },
        { id: 17, name: 'ROOM' },
        { id: 18, name: 'ROOM' },
        { id: 19, name: 'ROOM' },
        { id: 20, name: 'ROOM' },
        { id: 21, name: 'ROOM' },
        { id: 22, name: 'ROOM' },
        { id: 23, name: 'ROOM' },
        { id: 24, name: 'ROOM' },
        { id: 25, name: 'ROOM' },
        { id: 26, name: 'ROOM' }
      ] 
    }
  }

  handleChange (property, value) {
    this.setState({ [property]: value });
  }

  render() {
    return (
      <div className="room-list">
        <h3>Chat Rooms</h3>
        <ul className="rooms">
          { this.state.rooms.map((e, i) => (
            <li key={e.id} className="room">{e.name} {e.id}</li>
          )) }
        </ul>
        <div className="footer">
          <button className="btn-3">+ New</button>
        </div>
      </div>
    );
  }
}

export default RoomList;
