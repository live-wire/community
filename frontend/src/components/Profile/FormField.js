import React from 'react';
import styled from 'styled-components';

const StyledFormFieldContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	padding: 16px;
	border-bottom: 1px solid rgb(226, 219, 232);
`;

const StyledLabel = styled.label`
	flex-basis: 50%;
	flex-grow: 0;
	flex-shrink: 0;
`;

const StyledFormField = styled.div`
	flex-basis: 50%;
	flex-grow: 0;
	flex-shrink: 0;
`;

const FormField = ({}) => (
	<StyledFormFieldContainer>
		<StyledLabel>Nickname</StyledLabel>
		<StyledFormField>
			<Input placeholder="Nickname" fluid />
		</StyledFormField>
	</StyledFormFieldContainer>
);


export default FormField;
