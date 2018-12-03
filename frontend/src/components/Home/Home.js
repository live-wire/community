import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: row;
`;

const SidebarWrapper = styled.div`
	flex-basis: 200px;
	heigh: 100%;
	flex-grow: 0;
	flex-shrink: 0;
`;

const MainContentWrapper = styled.div`
	flex-basis: calc(100% - 200px);
	height: 100%;
	flex-grow: 0;
	flex-shrink: 0;
`;

class Home extends React.Component {
	render() {
		return (
			<Container className="Home">
				<SidebarWrapper>
					<Sidebar />
				</SidebarWrapper>
				<MainContentWrapper>
					<MainContent />
				</MainContentWrapper>
			</Container>
		);
	}
}

export default Home;
