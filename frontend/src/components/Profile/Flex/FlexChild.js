import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	flex-basis: ${props => props.flexBasis ? props.flexBasis: 'auto'};
	flex-grow: ${props => props.flexGrow ? props.flexGrow: 0};
	flex-shrink: ${props => props.flexShrink ? props.flexShrink: 1};
`;

const FlexChild = ({children, ...rest}) => (
	<StyledDiv {...rest}>
		{children}
	</StyledDiv>
);

export default FlexChild;
