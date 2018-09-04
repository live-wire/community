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

  isValidUsername(value) {
    return value.length > 0;
  }

  isValidPassword(value) {
    return value.length > 0;
  }

  canBeSubmitted() {
    const {username, password} = this.state;
    return this.isValidUsername(username) && this.isValidPassword(password);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Submit');
  }

  render() {
    const {username, password} = this.state;
    const isEnabled = this.canBeSubmitted();

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit} >
          <input name="username"
            placeholder="Username"
            type="text"
            value={username}
            onChange={this.handleInputChange} />
          <input name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={this.handleInputChange} />
          <input type="submit" value="Login" disabled={!isEnabled} />
        </form>
      </div>
    );
  }
}

export default Login;
