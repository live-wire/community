import React, {Component} from 'react';
import './style.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
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

  isValidEmail(value) {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return reg.test(value);
  }

  isValidPassword(value) {
    return value.length > 0;
  }

  isValidUser(val) {
    if(val.includes('@')) {
      return this.isValidEmail(val);
    }
    else {
      return this.isValidUsername(val);
    }
  }

  canBeSubmitted() {
    const {user, password} = this.state;
    return this.isValidUser(user) && this.isValidPassword(password);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const {user, password} = this.state;
    const isEnabled = this.canBeSubmitted();

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit} >
          <input name="user"
            placeholder="Username or Email"
            type="text"
            value={user}
            onChange={this.handleInputChange}
            autoComplete="off" />
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
