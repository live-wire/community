import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginContainer from '../Login/LoginContainer';
import * as routes from '../../constants/routes.js';

const App = () => (
	<Router>
		<Route exact path={routes.LOGIN} component={LoginContainer} />
	</Router>
);

export default App;
