import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer';
import StudentsContainer from '../containers/StudentsContainer';
import TeachersContainer from '../containers/TeachersContainer';
import CoursesContainer from '../containers/CoursesContainer';
import StudentProfile from './StudentProfile';
import TeacherProfile from './TeacherProfile';
import CourseProfile from './CourseProfile';

class Routes extends React.Component {
	render() {
		const { isLoggedIn, defaultRoute, logUserIn } = this.props;

		return (
			<div>
				<Route
					exact
					path="/"
					render={() =>
						isLoggedIn ? (
							<Redirect to={defaultRoute} />
						) : (
							<Redirect to="/login" />
						)
					}
				/>
				<Route
					exact
					path="/login"
					render={props =>
						isLoggedIn ? (
							<Redirect to={defaultRoute} />
						) : (
							<LoginContainer {...props} logUserIn={logUserIn} />
						)
					}
				/>
				<Route
					exact
					path="/student"
					render={props =>
						isLoggedIn ? (
							<StudentsContainer {...props} />
						) : (
							<Redirect to="/login" />
						)
					}
				/>
				<Route
					exact
					path="/student/:studentId"
					render={props =>
						isLoggedIn ? (
							<StudentProfile {...props} />
						) : (
							<Redirect to="/login" />
						)
					}
				/>
				<Route
					exact
					path="/course"
					render={props =>
						isLoggedIn ? (
							<CoursesContainer {...props} />
						) : (
							<Redirect to="/login" />
						)
					}
				/>
				<Route
					exact
					path="/course/:courseId"
					render={props =>
						isLoggedIn ? <CourseProfile {...props} /> : <Redirect to="/login" />
					}
				/>
				<Route
					exact
					path="/teacher"
					render={props =>
						isLoggedIn ? (
							<TeachersContainer {...props} />
						) : (
							<Redirect to="/login" />
						)
					}
				/>
				<Route
					exact
					path="/teacher/:teacherId"
					render={props =>
						isLoggedIn ? (
							<TeacherProfile {...props} />
						) : (
							<Redirect to="/login" />
						)
					}
				/>
			</div>
		);
	}
}

export default Routes;
