import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: ${props => props.flexDirection ? props.flexDirection: 'row'};
	justify-content: ${props => props.justifyContent ? props.justifyContent: 'flex-start'};
	align-items: ${props => props.alignItems ? props.alignItems: 'stretch'};
`;

const FlexContainer = ({children, ...rest}) => (
	<StyledDiv {...rest}>
		{children}
	</StyledDiv>
);

export default FlexContainer;
