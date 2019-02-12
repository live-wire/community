import React from 'react';
import styled from 'styled-components';
import { DoubleBounce } from 'better-react-spinkit';
import DataTable from '../framework/components/basic/DataTable';
import PageHeading from '../framework/components/derived/PageHeading';

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
	},
	{
		id: 4,
		label: 'First Name',
		name: 'first_name'
	},
	{
		id: 5,
		label: 'Last Name',
		name: 'last_name'
	},
	{
		id: 6,
		label: 'Email',
		name: 'email'
	}
];

const Students = props => {
	const { students, next, prev, loading, fetch } = props;

	return (
		<div>
			<PageHeading>Students</PageHeading>
			{loading && (
				<LoaderContainer>
					<DoubleBounce size={50} />
				</LoaderContainer>
			)}
			{!loading && (
				<DataTable
					headers={headers}
					rows={students}
					prev={prev}
					next={next}
					fetch={fetch}
				/>
			)}
		</div>
	);
};

export default Students;
