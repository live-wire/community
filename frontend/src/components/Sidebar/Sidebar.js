import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SidebarDropdownItem from './SidebarDropdownItem';

const StyledSidebar = styled.div`
	width: 200px;
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
					to: '/dashboard'
				},
				{
					label: 'Students',
					to: '/students'
				},
				{
					label: 'Teachers',
					to: '/teachers'
				},
				{
					label: 'Courses',
					to: '/courses'
				}
			]
		},
		{
			label: 'Account',
			subItems: [
				{
					label: 'Profile',
					to: '/profile'
				}
			]
		}
	]
};

export default Sidebar;
