import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Dashboard from '../Dashboard/Dashboard';
import StudentsContainer from '../Students/StudentsContainer';
import TeachersContainer from '../Teachers/TeachersContainer';
import CoursesContainer from '../Courses/CoursesContainer';

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

class MainContent extends React.Component {
	render() {

		const {token} = this.props;

		return (
			<Container className="MainContent">
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/dashboard" />} />
					<Route exact path="/home/dashboard" component={Dashboard} />
					<Route exact path="/home/students" render={props => <StudentsContainer {...props} token={token} />} />
					<Route exact path="/home/teachers" render={props => <TeachersContainer {...props} token={token} />} />
					<Route exact path="/home/courses" render={props => <CoursesContainer {...props} token={token} />} />
				</Switch>
			</Container>
		);
	}
}

export default MainContent;
