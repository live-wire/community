import React from 'react';
import Sidebar from '../Sidebar';
import Dashboard from '../Dashboard';

const Home = () => {
	return (
		<div className="Home">
			<Sidebar className="Sidebar" />
			<Dashboard className="Dashboard" />
		</div>
	);
};

export default Home;
