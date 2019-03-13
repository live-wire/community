import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { DoubleBounce } from 'better-react-spinkit';
import withSidebar from '../../framework/hoc/withSidebar';
import withHeader from '../../framework/hoc/withHeader';
import Avatar from '../Avatar';
import { getStudent } from './actions';

const LoaderContainer = styled.div`
	width: 100%;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

class StudentProfile extends React.Component {
	constructor(props) {
		super(props);

		this.studentId = props.match.params.studentId;

		this.state = {
			ongoing: true,
			error: null
		};
	}

	render() {
		const { ongoing } = this.state;
		if (ongoing) {
			return (
				<LoaderContainer>
					<DoubleBounce size={50} />
				</LoaderContainer>
			);
		}
		console.log(this.state);
		const { image } = this.state;
		return (
			<div>
				<Avatar src={image} alt="Profile Picture" />
			</div>
		);
	}

	componentDidMount() {
		getStudent(this.studentId)
			.then(res => {
				this.setState({
					...this.state,
					ongoing: false,
					...res.data
				});
			})
			.catch(error => {
				this.setState({
					...this.state,
					ongooing: false,
					error
				});
			});
	}
}

export default withSidebar(withHeader(withRouter(StudentProfile)));
