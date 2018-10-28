import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import Students from '../Students/Students';
import Teachers from '../Teachers/Teachers';
import Courses from '../Courses/Courses';

class MainContent extends React.Component {
	renderRedirect;

	render() {
		return (
			<div className="MainContent">
				<Route exact path="/" render={() => <Redirect to="/dashboard" />} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/students" component={Students} />
				<Route exact path="/teachers" component={Teachers} />
				<Route exact path="/courses" component={Courses} />
			</div>
		);
	}
}

export default MainContent;
