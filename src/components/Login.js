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
          <input placeholder="Username" value={username} onChange={(e) => this.handleChange('username', e.target.value)}/>
          <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }
}

export default Login;
