import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	background-color: #fff;
	padding: 20px;
	box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
	margin-bottom: 20px;
`;

const StudentCard = ({ firstName, lastName }) => (
	<StyledDiv>{[firstName, lastName].join(' ')}</StyledDiv>
);

export default StudentCard;
