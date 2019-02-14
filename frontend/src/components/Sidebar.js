import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box } from 'reakit';

const StyledSidebar = styled(Box)`
	width: 220px;
	height: 100%;
	padding: 20px;
	overflow-y: scroll;
	background-color: ${props => props.theme.sidebar.background};
`;

const StyledSidebarLink = styled(NavLink)`
	display: block;
	height: 34px;
	line-height: 34px;
	font-size: 16px;
	font-weight: 400;
	color: ${props =>
		props.itemActive ? props.theme.white : props.theme.sidebar.link.color};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	transition: color 0.15s linear 0s;

	&:hover {
		color: ${props =>
			props.itemActive
				? props.theme.sidebar.link.color
				: props.theme.sidebar.link.hover};
	}
`;

const SidebarLink = ({ label, to }) => {
	return (
		<StyledSidebarLink to={to} activeStyle={{ color: '#fff' }}>
			{label}
		</StyledSidebarLink>
	);
};

const Sidebar = ({ items }) => (
	<StyledSidebar palette="sidebar">
		{items.map(item => (
			<SidebarLink key={item.label} {...item} />
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
