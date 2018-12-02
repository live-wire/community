import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSidebarSimpleItem = styled(Link)`
	display: block;
	color: #ffffff;
	padding: 10px 20px;
	font-size: 16px;
	line-height: 1rem;
	font-weight: 400;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	&:hover {
		color: #ffffff;
		background-color: #0a1b3d;
	}
`;

const SidebarSimpleItem = props => {
	const { label, to } = props;
	return <StyledSidebarSimpleItem to={to}>{label}</StyledSidebarSimpleItem>;
};

SidebarSimpleItem.propTypes = {
	label: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired
};

export default SidebarSimpleItem;
