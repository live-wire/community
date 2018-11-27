import React from 'react';
import PropTypes from 'prop-types';

class DataTable extends React.Component {
	render() {
		const { data } = this.props;
		return <div className="DataTable">DataTable</div>;
	}
}

DataTable.propTypes = {
	data: PropTypes.array.isRequired
};

export default DataTable;
