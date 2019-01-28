import React from 'react';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import DataTable from '../../framework/components/DataTable';

const LoaderContainer = styled.div`
	width: 100%;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: rgba(37, 11, 54, 0.04) 0px 2px 0px;
	margin-bottom: 20px;
	border: 1px solid rgb(209, 202, 216);
	border-radius: 4px;
	background: rgb(255, 255, 255);
`;

const Heading = styled.div`
	font-size: 24px;
	line-height: 1.5em;
	color: #2f2936;
	white-space: nowrap;
	margin-bottom: 20px;
`;

const headers = [
	{
		id: 1,
		label: 'Department',
		name: 'department',
	},
	{
		id: 2,
		label: 'Institution',
		name: 'institution',
	},
	{
		id: 3,
		label: 'UID',
		name: 'uid',
	},
	{
		id: 4,
		label: 'First Name',
		name: 'first_name',
	},
	{
		id: 5,
		label: 'Last Name',
		name: 'last_name',
	},
	{
		id: 6,
		label: 'Email',
		name: 'email',
	},
];

const AllStudents = props => {
	const { students, next, prev, loading} = props;

	return (
		<div>
			<Heading>Students</Heading>
			{loading && (
				<LoaderContainer>
					<ClipLoader
						sizeUnit={"px"}
						size={50}
						color={'#123abc'}
					/>
				</LoaderContainer>
			)}
			{!loading && <DataTable headers={headers} rows={students} prev={prev} next={next} />}
		</div>
	);
};

export default AllStudents;
