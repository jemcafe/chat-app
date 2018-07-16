import React, { Component } from 'react';

class Room extends Component {
  constructor () {
    super();
    this.state = { 
      messages: [
        {
          username: 'Howard',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Beagle_puppy%27s_head.png',
          message: 'This is a message that has been written by the person who is logged in, which is me Howard.',
          date: 'May 22, 2018'
        },
        {
          username: 'Jess',
          avatar: 'http://g01.a.alicdn.com/kf/HTB1PBLpLpXXXXbuXVXXq6xXFXXX1/New-Patchwork-Diamond-Embroidery-font-b-Lion-b-font-Head-font-b-Drawings-b-font-Diamond.jpg',
          message: 'This is a message that has been written by the person who is logged in, which is me Jess.',
          date: 'May 22, 2018'
        },
        {
          username: 'Howard',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Beagle_puppy%27s_head.png',
          message: 'This is a message that has been written by the person who is logged in, which is me Howard.',
          date: 'May 22, 2018'
        },
        {
          username: 'Howard',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Beagle_puppy%27s_head.png',
          message: 'This is a message that has been written by the person who is logged in, which is me Howard.',
          date: 'May 24, 2018'
        },
        {
          username: 'Howard',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Beagle_puppy%27s_head.png',
          message: 'This is a message that has been written by the person who is logged in, which is me Howard.',
          date: 'May 24, 2018'
        },
        {
          username: 'Jess',
          avatar: 'http://g01.a.alicdn.com/kf/HTB1PBLpLpXXXXbuXVXXq6xXFXXX1/New-Patchwork-Diamond-Embroidery-font-b-Lion-b-font-Head-font-b-Drawings-b-font-Diamond.jpg',
          message: 'This is a message that has been written by the person who is logged in, which is me Jess.',
          date: 'May 24, 2018'
        },
        {
          username: 'Howard',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Beagle_puppy%27s_head.png',
          message: 'This is a message that has been written by the person who is logged in, which is me Howard.',
          date: 'May 24, 2018'
        },
        {
          username: 'Howard',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Beagle_puppy%27s_head.png',
          message: 'This is a message that has been written by the person who is logged in, which is me Howard.',
          date: 'May 25, 2018'
        }
      ],
      message: '' 
    }
  }

  componentDidMount () {
    this.scrollToLastMessage();
  }

  scrollToLastMessage () {
    const { messages } = this.refs;
    messages.scrollTop = messages.scrollHeight;
  }

  handleChange (property, value) {
    this.setState({ [property]: value });
  }

  render() {
    const { messages, message } = this.state;

    return (
      <div className="room">
        <div className="header">
          <div className="receiver">
            <div className="online-indicator"></div>
            Recipient's Name
          </div>
          <div className="close-icon"><i className="fas fa-times"></i></div>
        </div>
        <div ref="messages" className="messages">
          <ul className="container">
            { messages.map((e, i) => (
              <li key={i}>
                <div className="avatar" style={{background:`url(${e.avatar}) 0% 0% / contain`}}></div>
                {/* <div>{ e.username }:</div> */}
                <div className="message">{ e.message }</div>
                {/* <div>{ e.date }</div> */}
              </li>
            )) }
          </ul>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <textarea placeholder="Message..." value={message} onChange={(e) => this.handleChange('message', e.target.value)}></textarea>
          <div>
            {/* <input className="btn" type="submit" value="Send"/> */}
            <button><i className="far fa-smile"></i></button>
            <button type="submit"><i className="fas fa-paper-plane"></i></button>
          </div>
        </form>
      </div>
    );
  }
}

export default Room;
