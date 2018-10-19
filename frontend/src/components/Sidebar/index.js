import React from 'react';
import { Link } from 'react-router-dom';
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
			label: 'Item 1' /* Mandatory Label */,
			to: '/item1' /* Optional Link to */
		},
		{
			label: 'Item 2' /* Mandatory Label */,
			to: '/item2' /* Optional to */
		},
		{
			label: 'Item 3' /* Mandatory Label */,
			subItems: [
				{
					label: 'Item 4',
					to: '/item4'
				},
				{
					label: 'Item 5',
					to: '/item5'
				},
				{
					label: 'Item 6',
					to: '/item6'
				}
			] /* Optional SubItems */
		},
		{
			label: 'Item 4' /* Mandatory Label */,
			to: '/item4' /* Optional to */
		}
	]
};

export default Sidebar;
