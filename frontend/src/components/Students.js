import React from 'react';
import styled from 'styled-components';
import { parse } from 'query-string';
import { DoubleBounce } from 'better-react-spinkit';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import PageHeading from '../framework/components/derived/PageHeading';
import StudentCard from './StudentCard';

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

const Students = props => {
	const { students, next, prev, loading, fetch, match, history } = props;

	return (
		<div>
			<PageHeading>Students</PageHeading>
			{loading && (
				<LoaderContainer>
					<DoubleBounce size={50} />
				</LoaderContainer>
			)}
			{!loading && (
				<React.Fragment>
					{students.map(student => (
						<StudentCard
							key={student.id}
							firstName={student.first_name}
							lastName={student.last_name}
							clickHandler={() => history.push(`${match.url}/${student.id}`)}
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

export default withRouter(Students);
