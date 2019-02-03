import React from 'react';
import styled from 'styled-components';
import DataTable from '../../framework/components/basic/DataTable';
import PageHeading from '../../framework/components/derived/PageHeading';

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

const headers = [
	{
		id: 1,
		label: 'Department',
		name: 'department'
	},
	{
		id: 2,
		label: 'Institution',
		name: 'institution'
	},
	{
		id: 3,
		label: 'UID',
		name: 'uid'
	}
];

const AllTeachers = props => {
	const { teachers, next, prev, loading } = props;

	return (
		<div className="AllTeachers">
			<PageHeading>Teachers</PageHeading>
			{loading && (
				<LoaderContainer>
					{/* <ClipLoader sizeUnit={'px'} size={50} color={'#123abc'} /> */}
				</LoaderContainer>
			)}
			{!loading && (
				<DataTable headers={headers} rows={teachers} prev={prev} next={next} />
			)}
		</div>
	);
};

export default AllTeachers;
