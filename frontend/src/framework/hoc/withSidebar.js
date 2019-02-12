import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
`;

const SidebarWrapper = styled.div`
	height: 100%;
	flex-grow: 0;
`;

const ComponentWrapper = styled.div`
	height: 100%;
	flex-grow: 1;
`;

const withSidebar = Component => {
	const WithSidebar = () => (
		<Container>
			<SidebarWrapper>
				<Sidebar />
			</SidebarWrapper>
			<ComponentWrapper>
				<Component />
			</ComponentWrapper>
		</Container>
	);

	return WithSidebar;
};

export default withSidebar;
