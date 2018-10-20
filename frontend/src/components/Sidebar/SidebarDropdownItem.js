import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ICONS from '../../constants/icons';
import SidebarSimpleItem from './SidebarSimpleItem';
import Icon from '../../framework/components/Icon';

class SidebarDropdownItem extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownOpenIcon = ICONS.ANGLE_DOWN;
		this.dropdownCloseIcon = ICONS.ANGLE_UP;

		this.state = {
			showDropdown: false,
			icon: this.dropdownOpenIcon
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			showDropdown: !this.state.showDropdown,
			icon: !this.state.showDropdown
				? this.dropdownCloseIcon
				: this.dropdownOpenIcon
		});
	}

	render() {
		const { label, subItems } = this.props;
		const { icon, showDropdown } = this.state;

		return (
			<div className="SidebarDropdownItem">
				<div onClick={this.handleClick}>
					<span>{label}</span>
					<Icon icon={icon} />
				</div>
				<ul className={classNames({ open: showDropdown })}>
					{subItems.map(si => (
						<SidebarSimpleItem key={si.label} label={si.label} to={si.to} />
					))}
				</ul>
			</div>
		);
	}
}

SidebarDropdownItem.propTypes = {
	label: PropTypes.string.isRequired,
	subItems: PropTypes.array.isRequired
};

export default SidebarDropdownItem;
