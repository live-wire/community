import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { isValidUser, isValidPassword } from '../../helpers/validations';
import Login from './Login';
import {login} from './actions';

class LoginContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: '',
			password: '',
			error: null,
			loading: false,
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
		const { user, password, loading } = this.state;

		return !loading && isValidUser(user) && isValidPassword(password);
	}

	handleSubmit(event) {
		const { history } = this.props;
		const {user, password} = this.state;

		this.setState({
			loading: true
		});

		login(user, password)
			.then(res => {
				const { logUserIn } = this.props;
				logUserIn();
			})
			.catch(err => {
				this.setState({
					error: err.response.data,
					loading: false
				});
			})

		event.preventDefault();
	}

	render() {
		const { user, password, error, loading } = this.state;
		const isEnabled = this.canBeSubmitted();

		return (
			<Login
				user={user}
				password={password}
				error={error}
				loading={loading}
				isEnabled={isEnabled}
				handleInputChange={this.handleInputChange}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default LoginContainer;
