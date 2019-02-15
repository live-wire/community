import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 150px;
	height: 150px;
	overflow: hidden;
	border-radius: 50%;
	border-width: 1px;
	border-style: solid;
	border-color: ${props => props.theme.grayscale[5]};
	cursor: pointer;
`;

const StyledImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Avatar = ({ src, alt, clickHandler }) => (
	<StyledDiv>
		<StyledImg src={src} alt={alt} onClick={clickHandler} />
	</StyledDiv>
);

export default Avatar;
