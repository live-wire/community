import React from 'react';
import Routes from '../Routes';
import {UserProvider} from './context';
class User extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			defaultRoute: '/student',
			isLoggedIn: false,
		}
	}

	logUserIn = (token) => {
		this.setState({
			isLoggedIn: true,
		});
	}

	logUserOut = () => {
		this.setState({
			isLoggedIn: false,
		});
	}

	render() {
		const {isLoggedIn, defaultRoute} = this.state;

		return (
			<div className="User">
				<UserProvider value={{logUserOut: this.logUserOut}}>
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
