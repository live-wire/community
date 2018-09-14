import React, { Component } from 'react';
import Navigation from '../Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from '../Login';
import Signup from '../Signup';
import PasswordReset from '../PasswordReset';
import Landing from '../Landing';
import Home from '../Home';
import Account from '../Account';

import * as routes from '../../constants/routes.js';

const App = () => (
	<Router>
		<div>
			<Navigation />

			<Route exact path={routes.LANDING} component={Landing} />

			<Route exact path={routes.LOGIN} component={Login} />

			<Route exact path={routes.SIGNUP} component={Signup} />

			<Route exact path={routes.HOME} component={Home} />

			<Route exact path={routes.ACCOUNT} component={Account} />

			<Route exact path={routes.PASSWORD_RESET} component={PasswordReset} />
		</div>
	</Router>
);

export default App;
