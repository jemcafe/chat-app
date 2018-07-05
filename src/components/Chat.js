import React, { Component, Fragment } from 'react';

class Chat extends Component {
  constructor () {
    super();
    this.state = { 
      messages: [
        {
          username: 'Howard',
          message: 'This is a message that has been written by the person who is logged in, which is me Howard.',
          date: 'May 22, 2018'
        },
        {
          username: 'Howard',
          message: 'This is a message that has been written by the person who is logged in, which is me Howard.',
          date: 'May 22, 2018'
        },
        {
          username: 'Howard',
          message: 'This is a message that has been written by the person who is logged in, which is me Howard.',
          date: 'May 22, 2018'
        },
        {
          username: 'Howard',
          message: 'This is a message that has been written by the person who is logged in, which is me Howard.',
          date: 'May 22, 2018'
        },
        {
          username: 'Howard',
          message: 'This is a message that has been written by the person who is logged in, which is me Howard.',
          date: 'May 22, 2018'
        },
        {
          username: 'Howard',
          message: 'This is a message that has been written by the person who is logged in, which is me Howard.',
          date: 'May 22, 2018'
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
      <div className="chat">
        <div>
          HEADER
        </div>
        <div ref="messages" className="messages">
          <div className="container">
            { messages.map((e, i) => (
              <Fragment key={i}>
                <div>{ e.username }:</div>
                <div>{ e.message }</div>
                <div>{ e.date }</div>
              </Fragment>
            )) }
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <textarea placeholder="Message..." value={message} onChange={(e) => this.handleChange('message', e.target.value)}></textarea>
          <input className="btn" type="submit" value="Send"/>
        </form>
      </div>
    );
  }
}

export default Chat;
