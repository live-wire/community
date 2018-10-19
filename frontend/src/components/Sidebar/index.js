import React from 'react';
import { Link } from 'react-router-dom';
import ICONS from '../../constants/icons';
import Icon from '../../framework/components/Icon';

const items = [
	{
		id: '1' /* Mandatory Unique Id */,
		label: 'Item 1' /* Mandatory Label */,
		to: '/item1' /* Optional Link to */
	},
	{
		id: '2' /* Mandatory Unique Id */,
		label: 'Item 2' /* Mandatory Label */,
		to: '/item2' /* Optional to */
	},
	{
		id: '3' /* Mandatory Unique Id */,
		label: 'Item 3' /* Mandatory Label */,
		subItems: [
			{
				id: '4',
				label: 'Item 4',
				to: '/item4'
			},
			{
				id: '5',
				label: 'Item 5',
				to: '/item5'
			},
			{
				id: '6',
				label: 'Item 6',
				to: '/item6'
			}
		] /* Optional SubItems */
	}
];

const SidebarItem = props => {
	const { label, icon, isDropdown, handleDropdownIconClick } = props;
	return (
		<div className="SidebarSimpleItem">
			{icon && <span>icon</span>}
			<span>{label}</span>
			{isDropdown && (
				<span onClick={handleDropdownIconClick}>isDropDown Icon</span>
			)}
		</div>
	);
};

class SiderbarDropdownItem extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownOpenIcon = 'downArrow';
		this.dropdownCloseIcon = 'upArrow';

		this.state = {
			showDropdown: false,
			icon: this.dropdownOpenIcon
		};

		this.handleDropdownClick = this.handleDropdownClick.bind(this);
	}

	handleDropdownIconClick() {
		this.setState({
			showDropdown: !this.state.showDropdown,
			icon: !this.state.showDropdown
				? this.dropdownCloseIcon
				: this.dropdownOpenIcon
		});
	}

	render() {
		const { label } = this.props;
		const { icon } = this.state;

		return (
			<div className="SidebarDropdownItem">
				<SidebarItem
					label={label}
					icon={icon}
					isDropDown
					handleDropdownIconClick={this.handleDropdownIconClick}
				/>
			</div>
		);
	}
}

// const SiderbarDropdownItem = props => {
// 	return (
// 		<div className="SiderbarDropdownItem">
// 			<span>{label}</span>
// 		</div>
// 	);
// };

{
	/* const SidebarItem = props => {
	const { label, subItems } = props;
	return (
		<div className="SidebarItem">
			<span>{label}</span>
			{subItems && subItems.length > 0 && <span>0</span>}
		</div>
	);
}; */
}

class Sidebar extends React.Component {
	render() {
		return (
			<div className="Sidebar">
				<Icon icon={ICONS.BUBBLE} />
				{/* {items.map(item => {
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
				})} */}
			</div>
		);
	}
}

export default Sidebar;
