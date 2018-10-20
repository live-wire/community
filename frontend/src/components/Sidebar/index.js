import React from 'react';
import PropTypes from 'prop-types';

import SidebarSimpleItem from './SidebarSimpleItem';
import SidebarDropdownItem from './SidebarDropdownItem';

class Sidebar extends React.Component {
	render() {
		const { items } = this.props;

		return (
			<div className="Sidebar">
				{items.map(item => {
					if (item.to) {
						return (
							<SidebarSimpleItem
								key={item.label}
								label={item.label}
								to={item.to}
							/>
						);
					}
					return (
						<SidebarDropdownItem
							key={item.label}
							label={item.label}
							subItems={item.subItems}
						/>
					);
				})}
			</div>
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
				},
				{
					label: 'Billing',
					to: '/bolling'
				},
				{
					label: 'Security',
					to: '/security'
				}
			]
		}
	]
};

export default Sidebar;
