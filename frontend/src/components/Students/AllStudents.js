import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Student from './Student';
import DataTable from './DataTable';

const Container = styled.div`
	width: 100%;
	padding: 20px;
`;

const Heading = styled.div`
	font-size: 24px;
	line-height: 1.5em;
	color: #2f2936;
	white-space: nowrap;
`;

const headers = [
	{
		id: 1,
		label: 'Header 1',
		name: 'header1',
	},
	{
		id: 2,
		label: 'Header 2',
		name: 'header2',
	},
	{
		id: 3,
		label: 'Header 3',
		name: 'header3',
	},
	{
		id: 4,
		label: 'Header 4',
		name: 'header4',
	},
	{
		id: 5,
		label: 'Header 5',
		name: 'header5',
	},
	{
		id: 6,
		label: 'Header 6',
		name: 'header6',
	},
];

const rows = [
	{
		id: '1',
		header1: 'data1',
		header2: 'data2',
		header3: 'data3',
		header4: 'data4',
		header5: 'data5',
		header6: 'data6',
	},
	{
		id: '2',
		header1: 'data1',
		header2: 'data2',
		header3: 'data3',
		header4: 'data4',
		header5: 'data5',
		header6: 'data6',
	},
	{
		id: '3',
		header1: 'data1',
		header2: 'data2',
		header3: 'data3',
		header4: 'data4',
		header5: 'data5',
		header6: 'data6',
	},
	{
		id: '4',
		header1: 'data1',
		header2: 'data2',
		header3: 'data3',
		header4: 'data4',
		header5: 'data5',
		header6: 'data6',
	},
	{
		id: '5',
		header1: 'data1',
		header2: 'data2',
		header3: 'data3',
		header4: 'data4',
		header5: 'data5',
		header6: 'data6',
	}
];

const AllStudents = props => {
	const { students, loading } = props;

	return (
		<Container>
			<Heading>Students</Heading>
			<DataTable headers={headers} rows={[]} loading={loading} />
		</Container>
	);
};

AllStudents.propTypes = {
	students: PropTypes.array.isRequired
};

export default AllStudents;
