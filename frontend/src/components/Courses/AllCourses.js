import React from 'react';
import styled from 'styled-components';
import Course from './SingleCourse';
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
const CoursesContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const AllCourses = props => {
	const { courses, next, prev, loading } = props;

	return (
		<div>
			<PageHeading>Courses</PageHeading>
			{loading && (
				<LoaderContainer>
					{/* <ClipLoader sizeUnit={'px'} size={50} color={'#123abc'} /> */}
				</LoaderContainer>
			)}
			{!loading && (
				<CoursesContainer>
					{courses.map(course => (
						<Course key={course.id} {...course} />
					))}
					{courses.map(course => (
						<Course key={course.id} {...course} />
					))}
					{courses.map(course => (
						<Course key={course.id} {...course} />
					))}
				</CoursesContainer>
			)}
		</div>
	);
};

export default AllCourses;
