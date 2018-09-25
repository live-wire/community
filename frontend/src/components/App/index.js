import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginContainer from '../Login/LoginContainer';
import StudentsContainer from '../Students/StudentsContainer';
import * as routes from '../../constants/routes.js';

const App = () => (
	<Router>
		<div>
			<Route exact path={routes.LOGIN} component={LoginContainer} />
			<Route exact path={routes.STUDENTS} component={StudentsContainer} />
		</div>
	</Router>
);

export default App;
