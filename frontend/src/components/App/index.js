import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from '../Login';

import * as routes from '../../constants/routes.js';

const App = () => (
	<Router>
		<Route exact path={routes.LOGIN} component={Login} />
	</Router>
);

export default App;
