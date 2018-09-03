import React, {Component} from 'react';
import './style.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const {
      value,
      name
    } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const {username, password} = this.state;
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit} >
          <label htmlFor="username">Username</label>
          <input id="username"
            className="form-control"
            required
            name="username"
            type="text"
            value={username}
            onChange={this.handleInputChange} />
          <label htmlFor="password">Password</label>
          <input id="password"
            className="form-control"
            required
            name="password"
            type="password"
            value={password}
            onChange={this.handleInputChange} />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
