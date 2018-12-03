import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SidebarDropdownItem from './SidebarDropdownItem';

const StyledSidebar = styled.div`
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: #031b4d;
	font-size: 16px;
	padding: 20px 0 0;
`;

class Sidebar extends React.Component {
	render() {
		const { items } = this.props;

		return (
			<StyledSidebar>
				{items.map(item => <SidebarDropdownItem key={item.label} {...item} />)}
			</StyledSidebar>
		);
	}
}

Sidebar.propTypes = {
	items: PropTypes.array.isRequired
};

Sidebar.defaultProps = {
	items: [
		{
			label: 'Manage',
			subItems: [
				{
					label: 'Dashboard',
					to: '/home/dashboard'
				},
				{
					label: 'Students',
					to: '/home/students'
				},
				{
					label: 'Teachers',
					to: '/home/teachers'
				},
				{
					label: 'Courses',
					to: '/home/courses'
				}
			]
		},
		{
			label: 'Manage',
			subItems: [
				{
					label: 'Dashboard',
					to: '/home/dashboard'
				},
				{
					label: 'Students',
					to: '/home/students'
				},
				{
					label: 'Teachers',
					to: '/home/teachers'
				},
				{
					label: 'Courses',
					to: '/home/courses'
				}
			]
		},
		{
			label: 'Manage',
			subItems: [
				{
					label: 'Dashboard',
					to: '/home/dashboard'
				},
				{
					label: 'Students',
					to: '/home/students'
				},
				{
					label: 'Teachers',
					to: '/home/teachers'
				},
				{
					label: 'Courses',
					to: '/home/courses'
				}
			]
		},
	]
};

export default Sidebar;
