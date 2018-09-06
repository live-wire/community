import React from 'react';
import {
  isValidUsername,
  isValidEmail,
  isValidPassword
} from '../../helpers/validations';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      passwordOne: '',
      passwordTwo: ''
    }
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
    console.log(this.state);
  }

  canBeSubmitted() {
    const {
      email,
      username,
      passwordOne,
      passwordTwo
    } = this.state;

    return isValidUsername(username) &&
      isValidEmail(email) &&
      isValidPassword(passwordOne) &&
      passwordOne === passwordTwo;
  }

  render() {
    const {
      email,
      username,
      passwordOne,
      passwordTwo
    } = this.state;

    const isEnabled = this.canBeSubmitted();

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          name="username"
          value={username}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Username"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.handleInputChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.handleInputChange}
          type="password"
          placeholder="Confirm Password"
        />
        <input
          value="Sign Up"
          type="submit"
          disabled={!isEnabled}
        />
      </form>
    );
  }
}

export default Signup;
