import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
	font-size: 16px;
	font-weight: 400;
	line-height: 1em;
	color: rgb(149, 133, 163);
`;

const FormLabel = ({children}) => (
	<StyledLabel>{children}</StyledLabel>
);

export default FormLabel;
