import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginContainer from '../Login/LoginContainer';
import Home from '../Home/Home';
import * as routes from '../../constants/routes.js';

const App = () => (
	<Router>
		<div>
			<Route exact path={routes.LOGIN} component={LoginContainer} />
			<Route exact path={routes.HOME} component={Home} />
		</div>
	</Router>
);

export default App;
