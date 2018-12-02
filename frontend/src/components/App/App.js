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
	}

	render() {
		const {isLoggedIn} = this.state;

		return (
			<div className="App">
				<Route
					exact
					path='/'
					render={props => isLoggedIn ? <Redirect to='/home' /> : <LoginContainer {...props} />} />

				<Route
					path='/login'
					render={props => isLoggedIn ? <Redirect to='/home' /> : <LoginContainer {...props} />} />

				<PrivateRoute path='/home' component={Home} isLoggedIn={isLoggedIn} />
			</div>
		);
	}
}


export default App;
