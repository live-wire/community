import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import StudentsContainer from '../Students/StudentsContainer';
import Teachers from '../Teachers/Teachers';
import Courses from '../Courses/Courses';

class MainContent extends React.Component {
	render() {
		return (
			<div className="MainContent">
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/dashboard" />} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/students" component={StudentsContainer} />
					<Route exact path="/teachers" component={Teachers} />
					<Route exact path="/courses" component={Courses} />
				</Switch>
			</div>
		);
	}
}

export default MainContent;
