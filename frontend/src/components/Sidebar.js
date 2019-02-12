import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledSidebar = styled.div`
	box-sixing: border-box;
	width: 220px;
	height: 100%;
	padding: 20px;
	overflow-y: scroll;
	background-color: rgb(74, 62, 86);
	line-height: 1;
`;

const StyledSidebarItem = styled(NavLink)`
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

const SidebarItem = ({ label, to }) => {
	return (
		<StyledSidebarItem to={to} activeStyle={{ color: '#fff' }}>
			{label}
		</StyledSidebarItem>
	);
};

const Sidebar = ({ items }) => (
	<StyledSidebar>
		{items.map(item => (
			<SidebarItem key={item.label} {...item} />
		))}
	</StyledSidebar>
);

Sidebar.defaultProps = {
	items: [
		{
			label: 'Students',
			to: '/student'
		},
		{
			label: 'Teachers',
			to: '/teacher'
		}
	]
};

export default Sidebar;
