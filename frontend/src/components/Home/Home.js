import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';

class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<Sidebar />
				<MainContent />
			</div>
		);
	}

	componentDidUpdate() {
		console.log('Home Update');
	}
}

export default Home;
