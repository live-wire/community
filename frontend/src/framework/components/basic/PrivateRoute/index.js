import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, isLoggedIn, token, ...rest}) => (
	<Route {...rest} render={props => (
		isLoggedIn
			? <Component {...props} token={token} />
			: <Redirect to='/login' />
		)}
	/>
);

export default PrivateRoute;
