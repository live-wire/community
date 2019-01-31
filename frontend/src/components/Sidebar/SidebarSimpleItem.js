import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSidebarSimpleItem = styled(NavLink)`
	display: block;
	height: 34px;
	line-height: 34px;
	font-size: 16px;
	font-weight: 400;
	color: ${props => (props.itemActive ? '#fff' : 'rgb(149, 134, 165)')};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	transition: color 0.15s linear 0s;

	&:hover {
		color: rgb(189, 180, 199);
	}
`;

const SidebarSimpleItem = ({ label, to }) => {
	return (
		<StyledSidebarSimpleItem to={to} activeStyle={{ color: '#fff' }}>
			{label}
		</StyledSidebarSimpleItem>
	);
};

export default SidebarSimpleItem;
