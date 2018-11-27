import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';

import ICONS from '../../constants/icons';
import SidebarSimpleItem from './SidebarSimpleItem';
import Icon from '../../framework/components/Icon';

const StyledSidebarDropdownItem = styled.div`
	width: 100%;
	border-bottom: 1px solid rgba(180, 188, 199, 0.32);

	ul {
		opacity: 0;
		max-height: 0;
		overflow: hidden;
		transition: all 0.4s linear;
	}

	&.open {
		ul {
			opacity: 1;
			max-height: 300px;
			overflow: auto;
			padding-bottom: 20px;
		}
	}
`;

const Title = styled.div`
	padding: 25px 20px;
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	text-transform: uppercase;
	color: #677694;
	font-weight: 600;
	font-size: 0.8rem;
	line-height: 0.8rem;
	letter-spacing: 0.06rem;
`;

class SidebarDropdownItem extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownOpenIcon = ICONS.ANGLE_DOWN;
		this.dropdownCloseIcon = ICONS.ANGLE_UP;

		this.state = {
			showDropdown: true,
			icon: this.dropdownCloseIcon
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
			<StyledSidebarDropdownItem className={classNames({ open: showDropdown })}>
				<Title onClick={this.handleClick}>
					<span>{label}</span>
					<Icon icon={icon} color="#677694" size={12} />
				</Title>
				<ul>
					{subItems.map(si => <SidebarSimpleItem key={si.label} {...si} />)}
				</ul>
			</StyledSidebarDropdownItem>
		);
	}
}

SidebarDropdownItem.propTypes = {
	label: PropTypes.string.isRequired,
	subItems: PropTypes.array.isRequired
};

export default SidebarDropdownItem;
