import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	padding: ${props => props.noPadding ? '0': '16px'};
	border-style: solid;
	border-color: ${props => props.borderColor ? props.borderColor : 'rgb(226, 219, 232)'};
	border-width: ${props => props.borderAll ? '1px': `${props.borderTop ? '1px' : '0'} ${props.borderRight ? '1px' : '0'} ${props.borderBottom ? '1px' : '0'} ${props.borderLeft ? '1px' :  '0'}`}
	background-color: ${props => props.backgroundColor ? props.backgroundColor: '#fff'};
	border-radius: ${props => props.borderRadius ? props.borderRadius : '0'};
	box-shadow: ${props => props.boxShadow ? props.boxShadow : 'none'};
	margin: ${props => props.marginAll ? '20px' : `${props.marginTop ? '20px': '0'} ${props.marginRight ? '20px' : '0'} ${props.marginBottom ? '20px' : '0'} ${props.marginLeft ? '20px' : '0'}`};
`;

const Box = ({children, ...rest}) => (
	<StyledDiv {...rest} >
		{children}
	</StyledDiv>
);

export default Box;
