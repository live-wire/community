import React from 'react';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import DataTable from '../../framework/components/DataTable';

const Container = styled.div`
	width: 100%;
	padding: 20px;
`;

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
		label: 'Title',
		name: 'title',
	},
	{
		id: 2,
		label: 'URL',
		name: 'url',
	},
	{
		id: 3,
		label: 'Code',
		name: 'code',
	},
	{
		id: 4,
		label: 'Institution',
		name: 'institution',
	}
];

const AllCourses = props => {
	const { courses, next, prev, loading } = props;

	return (
		<Container>
			<Heading>Courses</Heading>
			{loading && (
				<LoaderContainer>
					<ClipLoader
						sizeUnit={"px"}
						size={50}
						color={'#123abc'}
					/>
				</LoaderContainer>
			)}
			{!loading && <DataTable headers={headers} rows={courses} prev={prev} next={next}/>}
		</Container>
	);
};

export default AllCourses;