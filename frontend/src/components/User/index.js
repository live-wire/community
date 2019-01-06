import React from 'react';
import Routes from '../Routes';

class User extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			defaultRoute: '/student',
			isLoggedIn: true,
			token: null,
		}
	}

	logUserIn = (token) => {
		this.setState({
			isLoggedIn: true,
			token
		});
	}

	logUserOut = () => {
		this.setState({
			isLoggedIn: false,
			token: null
		});
	}

	render() {
		const {isLoggedIn, defaultRoute} = this.state;

		return (
			<div className="User">
				<Routes
					isLoggedIn={isLoggedIn}
					logUserIn={this.logUserIn}
					logUserOut={this.logUserOut}
					defaultRoute={defaultRoute}
				/>
			</div>
		);
	}
}

export default User;
