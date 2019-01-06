import React from 'react';
// import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
// import PrivateRoute from '../../framework/components/PrivateRoute';
// import Home from '../Home/Home';
// import LoginContainer from '../Login/LoginContainer';
// import {setAuthHeader} from '../../framework/api';
import User from '../User';

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			isLoggedIn: false,
// 			token: '',
// 		}

// 		this.logUserIn = this.logUserIn.bind(this);
// 	}

// 	componentWillMount() {
// 		const token = localStorage.getItem('communityToken');
// 		if(token) {
// 			this.setState({
// 				isLoggedIn: true,
// 				token
// 			});
// 		}
// 	}

// 	saveTokenInLocalStorage(key, token) {
// 		localStorage.setItem(key, token);
// 	}

// 	logUserIn(token) {
// 		this.saveTokenInLocalStorage('communityToken', token);
// 		setAuthHeader(token);
// 		this.setState({
// 			isLoggedIn: true,
// 			token
// 		});
// 	}

// 	render() {
// 		const {isLoggedIn, token} = this.state;

// 		return (
// 			<div className="App">
// 				<Route
// 					exact
// 					path='/'
// 					render={props => <Redirect to='/home' /> } />

// 				<Route
// 					path='/login'
// 					render={props => isLoggedIn ? <Redirect to='/home' /> : <LoginContainer {...props} logUserIn={this.logUserIn} />} />

// 				<PrivateRoute path='/home' component={Home} isLoggedIn={isLoggedIn} token={token} />
// 			</div>
// 		);
// 	}
// }

const App = () => (
	<div className="App">
		<User />
	</div>
)

export default App;
