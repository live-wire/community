import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import LoginContainer from '../Login';
import StudentsContainer from '../Students';
import TeachersContainer from '../Teachers';
import CoursesContainer from '../Courses';

class Routes extends React.Component {
	render() {
		const {isLoggedIn, defaultRoute, logUserIn, logUserOut} = this.props;

		return (
			<div className="Routes">
				<Route
						exact
						path='/'
						render={() => isLoggedIn ? <Redirect to={defaultRoute} /> : <Redirect to='/login' />}
				/>
				<Route
						exact
						path='/login'
						render={props => isLoggedIn ? <Redirect to={defaultRoute} /> : <LoginContainer {...props} logUserIn={logUserIn} />}
				/>
				<Route
						exact
						path='/student'
						render={props => isLoggedIn ? <StudentsContainer {...props} /> : <Redirect to='/login' />}
				/>
				<Route
						exact
						path='/course'
						render={props => isLoggedIn ? <CoursesContainer {...props} /> : <Redirect to='/login' />}
				/>
				<Route
						exact
						path='/teacher'
						render={props => isLoggedIn ? <TeachersContainer {...props} />: <Redirect to='/login' />}
				/>
			</div>
		);

	}
}

export default Routes;
