import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SidebarSimpleItem = props => {
	const { label, to } = props;
	// return (
	// 	<Link to={to} className="SidebarSimpleItem">
	// 		<div>
	// 			<span>{label}</span>
	// 		</div>
	// 	</Link>
	// );
	return (
		<Link to={to} className="SidebarSimpleItem">
			{label}
		</Link>
	);
};

SidebarSimpleItem.propTypes = {
	label: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired
};

export default SidebarSimpleItem;
