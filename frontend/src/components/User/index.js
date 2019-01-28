import React from 'react';
import Routes from '../Routes';
import { UserProvider } from './context';
import { setKey, deleteKey } from '../../utils/localStorage';
class User extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			defaultRoute: '/student',
			isLoggedIn: false
		};
	}

	logUserIn = token => {
		setKey('loggedIn', true);
		setKey('token', token);
		this.setState({
			isLoggedIn: true
		});
	};

	logUserOut = () => {
		deleteKey('loggedIn');
		deleteKey('token');
		this.setState({
			isLoggedIn: false
		});
	};

	render() {
		const { isLoggedIn, defaultRoute } = this.state;

		return (
			<div className="User">
				<UserProvider value={{ logUserOut: this.logUserOut }}>
					<Routes
						isLoggedIn={isLoggedIn}
						logUserIn={this.logUserIn}
						defaultRoute={defaultRoute}
					/>
				</UserProvider>
			</div>
		);
	}
}

export default User;
