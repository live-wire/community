import React from 'react';
import styled from 'styled-components';
import { DoubleBounce } from 'better-react-spinkit';
import { withRouter } from 'react-router-dom';
import PageHeading from '../framework/components/derived/PageHeading';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import TeacherCard from './TeacherCard';

const LoaderContainer = styled.div`
	width: 100%;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	width: 40px;
	height: 40px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const ActionBar = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	${Button} {
		margin-left: 10px;
	}
`;

const Teachers = props => {
	const { teachers, next, prev, loading, fetch, history, match } = props;

	return (
		<div>
			<PageHeading>Teachers</PageHeading>
			{loading && (
				<LoaderContainer>
					<DoubleBounce size={50} />
				</LoaderContainer>
			)}
			{!loading && (
				<React.Fragment>
					{teachers.map(teacher => (
						<TeacherCard
							key={teacher.id}
							firstName={teacher.first_name}
							lastName={teacher.last_name}
							clickHandler={() => history.push(`${match.url}/${teacher.id}`)}
						/>
					))}
					<ActionBar>
						<Button
							disabled={!prev}
							onClick={() => fetch(parse(prev.split('?')[1]))}>
							<FaAngleLeft />
						</Button>
						<Button
							disabled={!next}
							onClick={() => fetch(parse(next.split('?')[1]))}>
							<FaAngleRight />
						</Button>
					</ActionBar>
				</React.Fragment>
			)}
		</div>
	);
};

export default Teachers;
