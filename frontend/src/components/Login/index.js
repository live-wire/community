import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Input, Divider, Header } from 'semantic-ui-react';

import * as routes from '../../constants/routes';
import { isValidUser, isValidPassword } from '../../helpers/validations';
import fakeAuth from '../../helpers/fakeAuth';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			password: '',
			error: null
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const { value, name } = event.target;

		this.setState({
			[name]: value
		});
	}

	canBeSubmitted() {
		const { user, password } = this.state;

		return isValidUser(user) && isValidPassword(password);
	}

	handleSubmit(event) {
		event.preventDefault();
		const { history } = this.props;

		fakeAuth
			.login()
			.then(res => {
				history.push(routes.HOME);
			})
			.catch(err => {
				this.setState({
					error: err
				});
			});
	}

	render() {
		const { user, password, error } = this.state;
		const isEnabled = this.canBeSubmitted();

		return (
			<div className="Login">
				<Header as="h2" textAlign="center">
					Login to Community
				</Header>
				<form onSubmit={this.handleSubmit}>
					{/* <input
						name="user"
						placeholder="Username or Email"
						type="text"
						value={user}
						onChange={this.handleInputChange}
						autoComplete="off"
					/> */}
					<Input focus fluid placeholder="Username or Email" />
					<Divider hidden />
					{/* <input
						name="password"
						placeholder="Password"
						type="password"
						value={password}
						onChange={this.handleInputChange} />*/}
					<Input fluid placeholder="Password" />
					<Divider hidden />
					{/* <div>
						<button type="submit" disabled={!isEnabled}>
							Log In
						</button>
					</div> */}
					<Button primary fluid disabled={!isEnabled}>
						Login
					</Button>
					{/* <div>{error && <p>{error.message}</p>}</div> */}
				</form>
			</div>
		);
	}
}

export default withRouter(Login);
