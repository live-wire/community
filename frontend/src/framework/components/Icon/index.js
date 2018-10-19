import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
	const styles = {
		svg: {
			display: 'inline-block',
			verticalAlign: 'middle'
		},
		path: {
			fill: props.color
		}
	};

	const { size, icon, color } = props;

	const { viewBox, d } = icon;

	return (
		<svg
			style={styles.svg}
			width={`${size}px`}
			height={`${size}px`}
			viewBox={viewBox}>
			<path style={styles.path} d={d} />
		</svg>
	);
};

Icon.propTypes = {
	icon: PropTypes.shape({
		viewBox: PropTypes.string.isRequired,
		d: PropTypes.string.isRequired
	}).isRequired,
	size: PropTypes.number,
	color: PropTypes.string
};

Icon.defaultProps = {
	size: 16,
	color: 'black'
};

export default Icon;
