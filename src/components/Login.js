import React, { Component } from 'react';

class Login extends Component {
  constructor () {
    super();
    this.state = { username: '' }
  }

  handleChange (property, value) {
    this.setState({ [property]: value });
  }

  render() {
    const { username } = this.state;

    return (
      <div className="login">
        <form onSubmit={(e) => e.preventDefault()}>
          <input className="input" placeholder="Username" value={username} onChange={(e) => this.handleChange('username', e.target.value)}/>
          <div><input className="btn" type="submit" value="Login"/></div>
        </form>
      </div>
    );
  }
}

export default Login;
