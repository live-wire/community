import React from 'react';
import PropTypes from 'prop-types';
import SidebarDropdownItem from './SidebarDropdownItem';

class Sidebar extends React.Component {
	render() {
		const { items } = this.props;

		return (
			<div className="Sidebar">
				{items.map(item => <SidebarDropdownItem key={item.label} {...item} />)}
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
					label: 'Droplets',
					to: '/droplets'
				},
				{
					label: 'Volumes',
					to: '/volumes'
				},
				{
					label: 'Spaces',
					to: '/spaces'
				},
				{
					label: 'Images',
					to: '/images'
				},
				{
					label: 'Networking',
					to: '/networking'
				},
				{
					label: 'Monitoring',
					to: '/monitoring'
				},
				{
					label: 'API',
					to: '/api'
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
				},
				{
					label: 'Referrals',
					to: '/security'
				}
			]
		}
	]
};

export default Sidebar;
