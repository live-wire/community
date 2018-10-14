import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { isValidUser, isValidPassword } from '../../helpers/validations';
import fakeAuth from './fakeAuth';
import Login from './Login';

class LoginContainer extends Component {
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
					loading: false,
					error: err
				});
			});
	}

	render() {
		const { user, password, error, showPassword, loading } = this.state;
		const isEnabled = this.canBeSubmitted();

		return (
			<Login
				user={user}
				password={password}
				error={error}
				showPassword={showPassword}
				loading={loading}
				isEnabled={isEnabled}
				handleInputChange={this.handleInputChange}
				handleToggleShowPassword={this.handleToggleShowPassword}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default withRouter(LoginContainer);
