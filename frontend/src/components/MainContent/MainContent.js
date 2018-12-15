import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Dashboard from '../Dashboard/Dashboard';
import StudentsContainer from '../Students/StudentsContainer';
import Teachers from '../Teachers/Teachers';
import Courses from '../Courses/Courses';

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

class MainContent extends React.Component {
	render() {
		return (
			<Container className="MainContent">
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/dashboard" />} />
					<Route exact path="/home/dashboard" component={Dashboard} />
					<Route exact path="/home/students" component={StudentsContainer} />
					<Route exact path="/home/teachers" component={Teachers} />
					<Route exact path="/home/courses" component={Courses} />
				</Switch>
			</Container>
		);
	}
}

export default MainContent;
