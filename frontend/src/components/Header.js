import React from 'react';
import styled from 'styled-components';
import Box from '../framework/components/basic/Box';
import Flex from '../framework/components/basic/Flex';

const StyledDiv = styled.div`
	cursor: pointer;
`;

const Header = ({ logUserOut }) => (
	<Box borderBottom boxShadow="rgba(37, 11, 54, 0.04) 0px 2px 0px">
		<Flex.Container flexDirection="row" justifyContent="flex-end">
			<Flex.Child>
				<StyledDiv onClick={() => logUserOut()}>Sign out</StyledDiv>
			</Flex.Child>
		</Flex.Container>
	</Box>
);

export default Header;
