import React from 'react';
import styled from 'styled-components';
import SidebarSimpleItem from './SidebarSimpleItem';

const StyledSidebar = styled.div`
	box-sixing: border-box;
	width: 220px;
	height: 100%;
	padding: 20px;
	overflow-y: scroll;
	background-color: rgb(74, 62, 86);
	line-height: 1;
`;

class Sidebar extends React.Component {
	render() {
		const { items } = this.props;

		return (
			<StyledSidebar>
				{items.map(item => (
					<SidebarSimpleItem key={item.label} {...item} />
				))}
			</StyledSidebar>
		);
	}
}

Sidebar.defaultProps = {
	items: [
		{
			label: 'Students',
			to: '/student'
		},
		{
			label: 'Teachers',
			to: '/teacher'
		},
		{
			label: 'Courses',
			to: '/course'
		}
	]
};

// Sidebar.defaultProps = {
// 	items: [
// 		{
// 			label: 'Manage',
// 			subItems: [
// 				{
// 					label: 'Students',
// 					to: '/student'
// 				},
// 				{
// 					label: 'Teachers',
// 					to: '/teacher'
// 				},
// 				{
// 					label: 'Courses',
// 					to: '/course'
// 				}
// 			]
// 		}
// 	]
// };

export default Sidebar;
