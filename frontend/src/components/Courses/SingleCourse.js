import React from 'react';
import styled from 'styled-components';

const StyledCourse = styled.div`
	box-sizing: border-box;
	width: 48.5%;
	margin-top: 20px;
	min-height: 300px;
	cursor: pointer;
	box-shadow: rgba(37, 11, 54, 0.04) 0px 2px 0px;
	border: 1px solid rgb(209, 202, 216);
	border-radius: 5px;

	&:first-child, &:nth-child(2) {
		margin-top: 0;
	}
`;

const CourseInfo = styled.div`
	padding: 20px;
`;

const Title = styled.div`
	font-size: 27px;
	line-height: 1.5em;
	font-weight: 400;
	margin-bottom: 10px;
`;

const Description = styled.div`
	font-size: 14px;
	margin-bottom: 10px;
	line-height: 1.5em;
`;

class SingleCourse extends React.Component {
	render() {
		const {title, description} = this.props;

		return (
			<StyledCourse>
				<CourseInfo>
					<Title>{title || 'No Title'}</Title>
					<Description>{description || 'No Description'}</Description>
				</CourseInfo>
			</StyledCourse>
		)
	}
}

export default SingleCourse;