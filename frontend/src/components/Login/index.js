import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Input, Header, Icon, Form } from 'semantic-ui-react';

import * as routes from '../../constants/routes';
import { isValidUser, isValidPassword } from '../../helpers/validations';
import fakeAuth from '../../helpers/fakeAuth';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			password: '',
			showPassword: false,
			error: null,
			loading: false
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleToggleShowPassword = this.handleToggleShowPassword.bind(this);
	}

	handleInputChange(event) {
		const { value, name } = event.target;

		this.setState({
			[name]: value
		});
	}

	handleToggleShowPassword() {
		this.setState({
			showPassword: !this.state.showPassword
		});
	}

	canBeSubmitted() {
		const { user, password } = this.state;

		return isValidUser(user) && isValidPassword(password);
	}

	handleSubmit(event) {
		event.preventDefault();
		const { history } = this.props;
		this.setState({
			loading: true
		});
		fakeAuth
			.login()
			.then(res => {
				//history.push(routes.HOME);
				this.setState({
					loading: false
				});
			})
			.catch(err => {
				this.setState({
					loading: false
				});
			});
	}

	render() {
		const { user, password, error, showPassword, loading } = this.state;
		const isEnabled = this.canBeSubmitted();

		return (
			<div className="Login">
				<Header as="h2" textAlign="center">
					Login to Community
				</Header>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<Input
							focus
							fluid
							type="text"
							name="user"
							placeholder="Username or Email"
							value={user}
							onChange={this.handleInputChange}
							autoComplete="off"
						/>
					</Form.Field>
					<Form.Field>
						{showPassword ? (
							<Input
								fluid
								type="text"
								name="password"
								placeholder="Password"
								value={password}
								onChange={this.handleInputChange}
								icon={
									<Icon
										name="eye"
										link
										onClick={this.handleToggleShowPassword}
									/>
								}
							/>
						) : (
							<Input
								fluid
								type="password"
								name="password"
								placeholder="Password"
								value={password}
								onChange={this.handleInputChange}
								icon={
									<Icon
										name="eye slash"
										link
										onClick={this.handleToggleShowPassword}
									/>
								}
							/>
						)}
					</Form.Field>
					<Form.Field>
						<Button fluid primary disabled={!isEnabled} loading={loading}>
							Log In
						</Button>
					</Form.Field>
				</Form>
			</div>
		);
	}
}

export default withRouter(Login);
