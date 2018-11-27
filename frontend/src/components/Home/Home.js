import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';

const StyledHome = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: row;
`;

class Home extends React.Component {
	render() {
		return (
			<StyledHome>
				<Sidebar />
				<MainContent />
			</StyledHome>
		);
	}
}

export default Home;
