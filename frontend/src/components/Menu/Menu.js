import React from 'react';
import { Menu } from 'semantic-ui-react';

class MenuContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: 'editorials'
		};
		this.hanldeItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick(event, { name }) {
		this.setState({
			activeItem: name
		});
	}

	render() {
		const { activeItem } = this.state;
		return (
			<Menu>
				<Menu.Item
					name="editorials"
					active={activeItem === 'editorials'}
					onClick={this.hanldeItemClick}>
					Editorials
				</Menu.Item>
				<Menu.Item
					name="reviews"
					active={activeItem === 'reviews'}
					onClick={this.hanldeItemClick}>
					Reviews
				</Menu.Item>
				<Menu.Item
					name="upcomingEvents"
					active={activeItem === 'upcomingEvents'}
					onClick={this.hanldeItemClick}>
					Upcoming Events
				</Menu.Item>
			</Menu>
		);
	}
}

export default MenuContainer;
