import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import PrivateRoute from '../../framework/components/PrivateRoute';
import Home from '../Home/Home';
import LoginContainer from '../Login/LoginContainer';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false
		}

		this.logUserIn = this.logUserIn.bind(this);
	}

	logUserIn() {
		this.setState({
			isLoggedIn: true
		});
	}

	render() {
		const {isLoggedIn} = this.state;
		console.log(window.location.pathname);

		return (
			<div className="App">
				<Route
					exact
					path='/'
					render={props => <Redirect to='/home' /> } />

				<Route
					path='/login'
					render={props => isLoggedIn ? <Redirect to='/home' /> : <LoginContainer {...props} logUserIn={this.logUserIn} />} />

				<PrivateRoute path='/home' component={Home} isLoggedIn={isLoggedIn} />
			</div>
		);
	}
}


export default App;
