import React, {Component} from 'react';
import './style.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
    const {email, password} = this.state;
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit} >
          <label htmlFor="email">Email</label>
          <input id="email"
            name="email"
            type="email"
            value={email}
            onChange={this.handleInputChange} />
          <label htmlFor="password">Password</label>
          <input id="password"
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
