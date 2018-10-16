import React from 'react';
import { Link } from 'react-router-dom';

const items = [
	{
		id: '1' /* Mandatory Unique Id */,
		label: 'Item 1' /* Mandatory Label */,
		to: '/item1' /* Optional Link to */
	},
	{
		id: '2' /* Mandatory Unique Id */,
		label: 'Item 2' /* Mandatory Label */,
		to: '/item2' /* Optional Link to */
	},
	{
		id: '3' /* Mandatory Unique Id */,
		label: 'Item 3' /* Mandatory Label */
	}
];

const SidebarItem = props => {
	const { label } = props;
	return <div className="SidebarItem">{label}</div>;
};

class Sidebar extends React.Component {
	render() {
		return (
			<div className="Sidebar">
				{items.map(item => {
					if (item.to) {
						return (
							<Link to={item.to}>
								<SidebarItem key={item.id} {...item} />
							</Link>
						);
					}
					return (
						<a>
							<SidebarItem key={item.id} {...item} />
						</a>
					);
				})}
			</div>
		);
	}
}

export default Sidebar;
