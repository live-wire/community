import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';

const Container = styled.div`
	height: 100vh;
	background-color: #fbfbfc;
	display: flex;
	flex-direction: column;
`;

const ComponentWrapper = styled.div`
	padding: 30px;
	flex-grow: 1;
	overflow-y: scroll;
`;

const withHeader = Component => {
	const WithHeader =  () => (
		<Container>
			<Header />
			<ComponentWrapper>
				<Component />
			</ComponentWrapper>
		</Container>
	);

	return WithHeader;
}

export default withHeader
