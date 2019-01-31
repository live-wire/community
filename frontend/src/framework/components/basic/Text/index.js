import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	font-size: ${props => props.fontSize ? props.fontSize : '16px'};
	font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
	color: ${props => props.color ? props.color : 'rgb(149, 133, 163)'};
	line-height: ${props => props.lineHeight ? props.lineHeight : '1em'}
	text-transform: ${props => props.textTransform ? props.textTransform : 'none'};
`;

const Text = ({children, ...rest}) => (
	<StyledDiv {...rest}>
		{children}
	</StyledDiv>
);

export default Text;
